import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Submission from "@/models/Submission";
import { cookies, headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { paymentMethod, transactionId, mobile, email } = body;

    if (!paymentMethod || !transactionId || !mobile || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Capture Tracking Metadata
    const cookieStore = await cookies();
    const headerList = await headers();
    
    const fbp = cookieStore.get("_fbp")?.value;
    const fbc = cookieStore.get("_fbc")?.value;
    const userAgent = headerList.get("user-agent") || "";
    const ipAddress = headerList.get("x-forwarded-for")?.split(",")[0] || "";

    await connectToDatabase();

    const existing = await Submission.findOne({ transactionId });
    if (existing) {
      return NextResponse.json({ error: "Transaction ID already submitted" }, { status: 400 });
    }

    const submission = await Submission.create({
      paymentMethod,
      transactionId,
      mobile,
      email,
      fbp,
      fbc,
      userAgent,
      ipAddress,
    });

    // Fire Meta CAPI CompleteRegistration Event
    // We don't await this to keep the user response fast
    import("@/lib/meta-capi").then(({ sendMetaEvent }) => {
      sendMetaEvent(
        "CompleteRegistration",
        {
          email,
          phone: mobile,
          client_ip_address: ipAddress,
          client_user_agent: userAgent,
          fbp,
          fbc,
        },
        {},
        submission._id.toString()
      );
    }).catch(err => console.error("Frontend CAPI Error:", err));

    return NextResponse.json({ success: true, data: submission }, { status: 201 });
  } catch (error: any) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
