"use client";

import { BOOK } from "@/const/book";
import { Briefcase, Laptop, GraduationCap } from "lucide-react";
import { fbEvent } from "@/components/MetaPixel";

const iconMap: Record<string, React.ReactNode> = {
  "briefcase": <Briefcase className="w-8 h-8 text-accent" />,
  "laptop": <Laptop className="w-8 h-8 text-accent" />,
  "graduation-cap": <GraduationCap className="w-8 h-8 text-accent" />,
};

export default function WhoIsThisFor() {
  return (
    <section className="w-full space-y-12 py-10">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text">
          বইটি কাদের জন্য উপযোগী?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOOK.audiences.map((audience) => (
          <div 
            key={audience.title}
            className="flex flex-col items-center text-center p-8 rounded-3xl bg-gradient-to-b from-surface/80 to-bg border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="mb-6 p-4 rounded-2xl bg-accent/10 text-accent">
              {iconMap[audience.icon]}
            </div>
            <h3 className="text-xl font-bold text-text mb-3">{audience.title}</h3>
            <p className="text-muted leading-relaxed">
              {audience.description}
            </p>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center pt-8">
        <a 
          href="#checkout"
          onClick={() => fbEvent("InitiateCheckout", { content_name: BOOK.title, value: BOOK.priceValue, currency: "BDT" })}
          className="group relative flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-text font-bold px-8 py-5 rounded-2xl transition-all w-full sm:w-auto text-center overflow-hidden"
        >
          <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
          <span className="relative">এখনই অর্ডার করুন — {BOOK.price}</span>
        </a>
        <p className="text-xs text-muted font-bold mt-4 opacity-60">১০০% সিকিউর পেমেন্ট ও ইনস্ট্যান্ট ডেলিভারি</p>
      </div>
    </section>
  );
}
