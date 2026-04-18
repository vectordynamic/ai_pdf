import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Submission from "@/models/Submission";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
  try {
    await connectToDatabase();
    
    const resolvedParams = await params;
    const id = resolvedParams.id;
    
    const submission = await Submission.findByIdAndUpdate(
      id,
      { status: "Verified" },
      { returnDocument: "after" }
    );
    
    if (!submission) {
      return NextResponse.json({ error: "Not Found" }, { status: 404 });
    }
    
    return NextResponse.json({ success: true, submission });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Error" }, { status: 500 });
  }
}
