"use client";

import Image from "next/image";
import { BOOK } from "@/const/book";
import { fbEvent } from "@/components/MetaPixel";
import CountdownTimer from "@/components/CountdownTimer";

export default function HeroSection() {
  return (
    <section className="flex flex-col items-center text-center space-y-10 w-full relative z-10">



      {/* Visual focus element: The Book */}
      <div className="relative group">
        <div className="absolute inset-0 bg-primary/20 rounded-2xl blur-2xl group-hover:bg-primary/30 group-hover:blur-3xl transition-all duration-700" />
        <Image
          src={BOOK.coverImage}
          alt={BOOK.title}
          width={400}
          height={600}
          className="relative w-[280px] sm:w-[360px] h-auto object-cover rounded-xl shadow-2xl ring-1 ring-white/10 group-hover:-translate-y-2 group-hover:shadow-[0_20px_50px_rgba(16,185,129,0.3)] transition-all duration-700 mx-auto"
          priority
        />
      </div>

      {/* Copy */}
      <div className="space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-text font-heading leading-tight tracking-tight drop-shadow-sm">
          {BOOK.title}
        </h1>
        <h2 className="text-lg md:text-xl text-primary font-bold tracking-wide">
          {BOOK.subtitle}
        </h2>
        <p className="text-lg md:text-lg text-muted leading-relaxed font-medium">
          {BOOK.description}
        </p>
      </div>

      {/* Primary CTA */}
      <div className="w-full max-w-sm mx-auto flex flex-col items-center space-y-6 pt-4">
        
        {/* Countdown Timer Hook */}
        <CountdownTimer />

        <div className="flex flex-col items-center gap-3 w-full bg-surface/40 p-5 rounded-3xl border border-white/5 shadow-inner">
          <div className="flex items-center justify-center gap-3 w-full">
            <span className="text-muted line-through text-lg">{BOOK.originalPrice}</span>
            <span className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-bold border border-primary/30">
              🔥 স্পেশাল অফার: {BOOK.price}
            </span>
          </div>
          
          <div className="text-emerald-400 font-bold text-sm bg-emerald-500/10 px-4 py-2 rounded-xl border border-emerald-500/20 w-fit">
             একবার কিনলে লাইফটাইম সাপোর্ট এবং বইটির সকল নতুন এডিশন ফ্রি পাবেন!
          </div>
        </div>

        <a
          href="#checkout"
          onClick={() => fbEvent("Lead", { content_name: BOOK.title, value: BOOK.priceValue, currency: "BDT" })}
          className="w-full block bg-primary hover:bg-emerald-400 text-bg font-extrabold text-lg py-5 px-8 rounded-2xl shadow-[0_0_40px_rgba(16,185,129,0.4)] hover:shadow-[0_0_60px_rgba(16,185,129,0.6)] transform transition-all duration-300 hover:scale-[1.02] active:scale-95 text-center focus:ring-4 focus:ring-primary/50 outline-none"
        >
          অর্ডার করুন — {BOOK.price}
        </a>

        <p className="flex items-center justify-center gap-2 text-sm text-muted font-medium w-full text-center mt-2">
          <span className="text-primary">⚡</span> ভেরিফিকেশনের সাথেই ইনস্ট্যান্ট এক্সেস! (লাইফটাইম)
        </p>
      </div>

    </section>
  );
}
