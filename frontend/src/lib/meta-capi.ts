import crypto from "crypto";
import { BOOK } from "@/const/book";

const PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN; // Note: Need to add this to frontend .env
const TEST_EVENT_CODE = process.env.FB_TEST_EVENT_CODE;

/**
 * Hashes data using SHA-256 for Meta CAPI compliance.
 * Handles special formatting for phone numbers to boost match quality.
 */
function hashData(data: string | undefined, isPhone = false): string | null {
  if (!data) return null;
  let formatted = data.trim().toLowerCase();

  if (isPhone) {
    // Remove all non-numeric characters
    formatted = formatted.replace(/\D/g, "");
    // If it's a standard Bangladeshi number starting with 01, prepend 88
    if (formatted.startsWith("01") && formatted.length === 11) {
      formatted = "88" + formatted;
    }
  }

  return crypto
    .createHash("sha256")
    .update(formatted)
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
  // Guard: Frontend CAPI requires the Server-Side Access Token
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    if (process.env.NODE_ENV === "development") {
      console.warn("Meta CAPI: Missing PIXEL_ID or FB_ACCESS_TOKEN in environment");
    }
    return;
  }

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        event_id: eventId,
        event_source_url: process.env.NEXT_PUBLIC_SITE_URL || "https://vectordaynamic.com",
        action_source: "website",
        user_data: {
          em: userData.email ? [hashData(userData.email)] : [],
          ph: userData.phone ? [hashData(userData.phone, true)] : [],
          client_ip_address: userData.client_ip_address,
          client_user_agent: userData.client_user_agent,
          fbc: userData.fbc,
          fbp: userData.fbp,
          external_id: eventId ? [hashData(eventId)] : [],
        },
        custom_data: {
          value: customData.value,
          currency: customData.currency || "BDT",
          content_name: customData.content_name || BOOK.title,
          content_category: customData.content_category || "eBook",
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
    }
  } catch (error) {
    console.error("Meta CAPI Request Failed:", error);
  }
}
