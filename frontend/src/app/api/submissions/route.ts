import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import Submission from "@/models/Submission";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { paymentMethod, transactionId, mobile } = body;

    if (!paymentMethod || !transactionId || !mobile) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await connectToDatabase();

    const existing = await Submission.findOne({ transactionId });
    if (existing) {
      return NextResponse.json({ error: "Transaction ID already submitted" }, { status: 400 });
    }

    const submission = await Submission.create({
      paymentMethod,
      transactionId,
      mobile,
    });

    return NextResponse.json({ success: true, data: submission }, { status: 201 });
  } catch (error: any) {
    console.error("Submission error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
