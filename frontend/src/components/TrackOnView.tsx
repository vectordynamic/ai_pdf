"use client";

import { useEffect, useRef } from "react";
import { fbEvent } from "@/components/MetaPixel";

/**
 * Fires a Meta Pixel event once when the wrapped element scrolls into view.
 * Used to track engagement (e.g., ViewContent when user scrolls past the fold).
 */
export default function TrackOnView({
  eventName,
  eventData = {},
  children,
}: {
  eventName: string;
  eventData?: Record<string, any>;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const hasFired = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasFired.current) {
          hasFired.current = true;
          fbEvent(eventName, eventData);
          observer.disconnect();
        }
      },
      { threshold: 0.3 } // 30% visible = engaged user
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [eventName, eventData]);

  return <div ref={ref}>{children}</div>;
}
