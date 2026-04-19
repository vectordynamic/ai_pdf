import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Submission from "@/models/Submission";
import { jwtVerify } from "jose";
import { cookies } from "next/headers";
import { sendMetaEvent } from "@/lib/meta-capi";
import { BOOK } from "@/const/book";

const JWT_SECRET = process.env.JWT_SECRET;

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    // Defense in depth: Verify token even if middleware is present
    const cookieStore = await cookies();
    const token = cookieStore.get("admin_token")?.value;

    if (!token || !JWT_SECRET) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
      await jwtVerify(token, new TextEncoder().encode(JWT_SECRET));
    } catch (e) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectToDatabase();
    
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    // Find before update to check if it was already verified (consistency)
    const existing = await Submission.findById(id);
    if (!existing) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    if (existing.status === "Verified") {
      return NextResponse.json({ success: true, message: "Already verified", submission: existing });
    }

    const submission = await Submission.findByIdAndUpdate(
      id,
      { status: "Verified" },
      { returnDocument: "after" }
    );
    
    if (!submission) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }

    // Trigger Meta CAPI Purchase Event
    // We run this in the background (no await) to keep admin response fast
    sendMetaEvent(
      "Purchase",
      {
        email: submission.email,
        phone: submission.mobile,
        client_ip_address: submission.ipAddress,
        client_user_agent: submission.userAgent,
        fbp: submission.fbp,
        fbc: submission.fbc,
      },
      {
        value: BOOK.priceValue,
        currency: "BDT",
        content_name: BOOK.title,
        content_category: "eBook",
      },
      submission._id.toString() // Event ID for deduplication
    ).catch(err => console.error("Background CAPI Error:", err));
    
    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
