"use client";

import { useState } from "react";
import { BookOpen, Target, User, HelpCircle, ChevronDown } from "lucide-react";
import { BOOK } from "@/const/book";

export default function BottomInfo() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section className="w-full space-y-16">
      
      {/* Why This Book? */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/20 text-accent mb-2">
            <Target className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold font-heading">বইটিতে বিশেষ কী থাকছে?</h2>
          <p className="text-muted leading-relaxed text-lg">
            {BOOK.whyThisBook.description}
          </p>
        </div>
        <div className="p-8 rounded-3xl bg-surface border border-white/5 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-3xl rounded-full" />
          <ul className="space-y-4 relative z-10">
            {BOOK.whyThisBook.features.map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-text font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto space-y-8 pt-10">
        <div className="text-center space-y-4">
          <HelpCircle className="w-10 h-10 text-accent mx-auto" />
          <h2 className="text-3xl font-bold font-heading">সচরাচর জিজ্ঞাসিত প্রশ্ন (FAQ)</h2>
        </div>
        
        <div className="space-y-4">
          {BOOK.faqs.map((faq, i) => (
             <div 
               key={i} 
               className="rounded-2xl bg-surface/50 border border-white/5 overflow-hidden transition-all duration-300"
             >
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <h3 className="text-lg font-bold text-text">{faq.q}</h3>
                  <ChevronDown 
                    className={`w-5 h-5 text-muted transition-transform duration-300 flex-shrink-0 ${openFaqIndex === i ? "rotate-180 text-primary" : ""}`} 
                  />
                </button>
                <div 
                  className={`px-6 transition-all duration-300 origin-top overflow-hidden ${openFaqIndex === i ? "pb-6 max-h-40 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <p className="text-muted">{faq.a}</p>
                </div>
             </div>
          ))}
        </div>
      </div>

    </section>
  );
}
