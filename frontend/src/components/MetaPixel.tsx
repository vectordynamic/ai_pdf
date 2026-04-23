"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { useEffect } from "react";

const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;

export const fbEvent = (name: string, options = {}, eventId?: string) => {
  if (typeof window !== "undefined") {
    const fbq = (window as any).fbq;
    if (fbq) {
      if (eventId) {
        fbq("track", name, options, { event_id: eventId });
      } else {
        fbq("track", name, options);
      }
    }
  }
};

/**
 * Fires both Browser Pixel and Server CAPI events for 100% coverage.
 */
export const trackDualEvent = (name: string, options = {}, eventId?: string) => {
  // 1. Browser Pixel
  fbEvent(name, options, eventId);

  // 2. Server CAPI Bridge
  if (typeof window !== "undefined") {
    fetch("/api/track", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        eventName: name,
        customData: options,
        eventId: eventId,
      }),
    }).catch((err) => console.error("CAPI Bridge Error:", err));
  }
};

export default function MetaPixel() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!FB_PIXEL_ID) return;
    fbEvent("PageView");
  }, [pathname, searchParams]);

  return null;
}
