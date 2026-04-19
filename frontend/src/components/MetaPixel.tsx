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
    } else {
      console.warn(`Meta Pixel: fbq not found. Event ${name} was not tracked.`);
    }
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
