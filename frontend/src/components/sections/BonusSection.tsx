"use client";

import { Gift, BookOpen, Bot, Headset, RefreshCw, Check } from "lucide-react";
import { BOOK } from "@/const/book";
import { fbEvent } from "@/components/MetaPixel";

const bonuses = [
  {
    title: "২৫০+ প্রিমিয়াম AI প্রম্পট",
    description: "কপিরাইটিং, এসইও এবং কন্টেন্ট ক্রিয়েশনের জন্য রেডিমেড প্রম্পট কালেকশন।",
    icon: <BookOpen className="w-6 h-6" />,
  },
  {
    title: "৫০+ অ্যাডভান্সড AI টুলস মাস্টারি",
    description: "সবচেয়ে কার্যকর ৫০টি এআই টুল এবং সেগুলোর সঠিক ব্যবহার নিয়ে বিস্তারিত গাইড।",
    icon: <Bot className="w-6 h-6" />,
  },
  {
    title: "লাইফটাইম ডেডিকেটেড সাপোর্ট",
    description: "যেকোনো সমস্যায় আমাদের এক্সপার্ট টিমের পক্ষ থেকে সরাসরি গাইডেন্স।",
    icon: <Headset className="w-6 h-6" />,
  },
  {
    title: "বইটির পরবর্তী সকল আপডেট ফ্রি",
    description: "একবার কিনলে ভবিষ্যতে বইটির যত নতুন ভার্সন আসবে সব একদম ফ্রিতে পাবেন।",
    icon: <RefreshCw className="w-6 h-6" />,
  },
];

export default function BonusSection() {
  return (
    <section className="w-full space-y-12 py-12">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-bold text-sm uppercase tracking-wider">
          <Gift className="w-5 h-5" />
          আপনি যা যা পাচ্ছেন
        </div>
        <h2 className="text-3xl md:text-5xl font-extrabold text-text leading-tight">
          একটি ই-বুক নয়, এটি আপনার <br className="hidden md:block" /> <span className="text-primary">AI সাকসেস কিট!</span>
        </h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          অফারে আজই অর্ডার করলে আপনি এই ৪টি মূল ভ্যালু প্যাক পাবেন যা আপনাকে অন্যদের চেয়ে ১০ গুণ এগিয়ে রাখবে।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {bonuses.map((bonus, i) => (
          <div 
            key={i}
            className="group relative bg-surface/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl hover:border-primary/30 transition-all duration-500"
          >
            <div className="absolute top-6 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
               {bonus.icon}
            </div>
            
            <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-500">
              {bonus.icon}
            </div>
            
            <div className="space-y-3">
              <h3 className="text-2xl font-bold text-text group-hover:text-primary transition-colors">
                {bonus.title}
              </h3>
              <p className="text-muted leading-relaxed font-medium">
                {bonus.description}
              </p>
              <div className="pt-4 flex items-center gap-2 text-primary font-bold text-sm">
                <Check className="w-4 h-4" />
                <span>অফারে একদম ফ্রি</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-6 p-10 bg-gradient-to-r from-primary/20 via-primary/5 to-primary/20 border border-primary/30 rounded-[40px] text-center relative overflow-hidden group">
         <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
         <div className="space-y-2 relative">
            <h4 className="text-2xl md:text-3xl font-black text-text">এই সবকিছুই পাচ্ছেন আজকের স্পেশাল মূল্যে!</h4>
            <p className="text-muted font-medium italic opacity-80 text-lg">অফারটি শুধুমাত্র আজকের সাবমিশনের জন্য প্রযোজ্য।</p>
         </div>

         <a 
           href="#checkout"
           onClick={() => fbEvent("InitiateCheckout", { content_name: BOOK.title, value: BOOK.priceValue, currency: "BDT" })}
           className="relative w-full max-w-sm bg-primary hover:bg-emerald-400 text-bg font-black text-xl py-6 rounded-2xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] hover:shadow-[0_25px_60px_rgba(16,185,129,0.5)] transition-all duration-300 hover:scale-[1.02] active:scale-95"
         >
           অর্ডার করুন — {BOOK.price}
         </a>

         <div className="flex items-center gap-4 text-sm font-bold text-muted">
            <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Instant Access</span>
            <span className="flex items-center gap-1.5"><span className="text-primary">✓</span> Lifetime Support</span>
         </div>
      </div>
    </section>
  );
}
