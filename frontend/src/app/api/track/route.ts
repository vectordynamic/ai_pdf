import { NextResponse } from "next/server";
import { sendMetaEvent } from "@/lib/meta-capi";
import { cookies, headers } from "next/headers";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { eventName, customData, eventId } = body;

    if (!eventName) {
       return NextResponse.json({ error: "Event name is required" }, { status: 400 });
    }

    // Capture Tracking Metadata from headers/cookies
    const cookieStore = await cookies();
    const headerList = await headers();
    
    const fbp = cookieStore.get("_fbp")?.value;
    const fbc = cookieStore.get("_fbc")?.value;
    const userAgent = headerList.get("user-agent") || "";
    const ipAddress = headerList.get("x-forwarded-for")?.split(",")[0] || "";

    // Fire Meta CAPI Event
    // Note: Since this is an anonymous intent event (InitiateCheckout), 
    // we don't have email/phone yet, but we send IP/UA/FBP/FBC for matching.
    await sendMetaEvent(
      eventName,
      {
        client_ip_address: ipAddress,
        client_user_agent: userAgent,
        fbp,
        fbc,
      },
      customData || {},
      eventId
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CAPI Tracking Bridge Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
