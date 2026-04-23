"use client";

import { BOOK } from "@/const/book";
import { ShoppingCart } from "lucide-react";
import { fbEvent } from "@/components/MetaPixel";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-md animate-in fade-in slide-in-from-bottom-10 duration-500">
      <div className="bg-surface/80 backdrop-blur-2xl border border-primary/30 p-4 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
              <ShoppingCart className="w-5 h-5" />
           </div>
           <div>
              <p className="text-xs text-muted font-bold uppercase tracking-wider">এখনই অর্ডার করুন</p>
              <p className="text-sm font-black text-text">{BOOK.price} — <span className="text-red-500 line-through">৳৩৯৯</span></p>
           </div>
        </div>
        
        <a 
          href="#checkout"
          onClick={() => fbEvent("InitiateCheckout", { content_name: BOOK.title, value: BOOK.priceValue, currency: "BDT" })}
          className="bg-primary hover:bg-emerald-400 text-bg font-black text-sm px-6 py-3 rounded-xl transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
        >
          অর্ডার দিন
        </a>
      </div>
    </div>
  );
}
