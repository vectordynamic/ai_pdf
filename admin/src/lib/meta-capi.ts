import crypto from "crypto";

const PIXEL_ID = process.env.FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN;
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;

/**
 * Hashes data using SHA-256 for Meta CAPI compliance.
 */
function hashData(data: string | undefined): string | null {
  if (!data) return null;
  return crypto
    .createHash("sha256")
    .update(data.trim().toLowerCase())
    .digest("hex");
}

interface MetaUserData {
  email?: string;
  phone?: string;
  client_ip_address?: string;
  client_user_agent?: string;
  fbc?: string;
  fbp?: string;
}

interface MetaCustomData {
  value?: number;
  currency?: string;
  content_name?: string;
  content_category?: string;
  [key: string]: any;
}

export async function sendMetaEvent(
  eventName: string,
  userData: MetaUserData,
  customData: MetaCustomData = {},
  eventId?: string
) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("Meta CAPI: Missing PIXEL_ID or ACCESS_TOKEN");
    return;
  }

  // Ensure IP and UA are present, fallback to current headers ONLY if not provided
  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: process.env.NEXT_PUBLIC_SITE_URL || "https://vectordynamic.com",
        action_source: "website",
        user_data: {
          em: userData.email ? [hashData(userData.email)] : [],
          ph: userData.phone ? [hashData(userData.phone)] : [],
          client_ip_address: userData.client_ip_address,
          client_user_agent: userData.client_user_agent,
          fbc: userData.fbc,
          fbp: userData.fbp,
          external_id: eventId ? [hashData(eventId)] : [], // Added as a match parameter
        },
        custom_data: {
          value: customData.value,
          currency: customData.currency || "BDT",
          content_name: customData.content_name,
          content_category: customData.content_category,
        },
      },
    ],
    test_event_code: TEST_EVENT_CODE && TEST_EVENT_CODE !== "OPTIONAL_TEST_EVENT_CODE" ? TEST_EVENT_CODE : undefined,
  };

  try {
    const response = await fetch(
      `https://graph.facebook.com/v25.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      }
    );

    const result = await response.json();
    
    if (result.error) {
      console.error("Meta CAPI Error:", result.error);
    } else {
      console.log(`Meta CAPI Success: ${eventName}`, result);
    }
  } catch (error) {
    console.error("Meta CAPI Request Failed:", error);
  }
}
