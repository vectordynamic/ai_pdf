import { BOOK } from "@/const/book";
import { Star, ShieldCheck } from "lucide-react";

export default function SocialProof() {
  return (
    <section className="w-full space-y-12">
      <div className="flex flex-col items-center text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 text-sm font-semibold text-text">
          <ShieldCheck className="w-5 h-5 text-primary" />
          <span className="text-muted">Trusted by</span> {BOOK.stats.buyersCount} <span className="text-muted">readers</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-text">
          Real Results from Real People
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {BOOK.testimonials.map((t) => (
          <div 
            key={t.id}
            className="flex flex-col p-6 rounded-3xl bg-surface/50 border border-white/5 backdrop-blur-sm shadow-xl relative"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-5 h-5 ${i < t.rating ? "text-amber-400 fill-amber-400" : "text-slate-600"}`} 
                />
              ))}
            </div>
            
            <p className="text-text leading-relaxed flex-grow font-medium mb-6">
              &quot;{t.content}&quot;
            </p>

            <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/10">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-primary to-accent flex items-center justify-center text-bg font-bold text-lg">
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-text text-sm">{t.name}</p>
                <p className="text-xs text-muted font-medium">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
