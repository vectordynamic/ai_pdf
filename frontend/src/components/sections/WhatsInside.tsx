import { BOOK } from "@/const/book";
import { Brain, Bot, PenTool, TrendingUp, Sparkles, Megaphone } from "lucide-react";

// Helper to map string icon names to Lucide components
const iconMap: Record<string, React.ReactNode> = {
  "brain": <Brain className="w-6 h-6 text-primary" />,
  "bot": <Bot className="w-6 h-6 text-primary" />,
  "pen-tool": <PenTool className="w-6 h-6 text-primary" />,
  "trending-up": <TrendingUp className="w-6 h-6 text-primary" />,
  "megaphone": <Megaphone className="w-6 h-6 text-primary" />,
};

export default function WhatsInside() {
  return (
    <section className="w-full space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold font-heading text-text flex items-center justify-center gap-3">
          <Sparkles className="w-8 h-8 text-accent" />
          বইটিতে কী কী থাকছে?
        </h2>
        <p className="text-muted text-lg max-w-xl mx-auto">
          যেকোনো বয়সের মানুষের জন্য ইমিডিয়েট ইমপ্লিমেন্ট করার একটি স্টেপ-বাই-স্টেপ ব্লুপ্রিন্ট। কোনো থিওরি নয়, শুধু প্র্যাকটিক্যাল ওয়ার্কফ্লো।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {BOOK.highlights.map((highlight, index) => (
          <div
            key={highlight.id}
            className="flex items-start gap-4 p-6 rounded-2xl bg-surface/50 border border-white/5 hover:border-primary/30 transition-colors duration-300 group"
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-bg border border-white/10 group-hover:bg-primary/10 transition-colors">
              {iconMap[highlight.icon] || <Sparkles className="w-6 h-6 text-primary" />}
            </div>
            <div>
              <div className="text-sm text-accent font-bold mb-1">কোর হাইলাইট {index + 1}</div>
              <h3 className="text-xl font-semibold text-text mb-2">{highlight.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{highlight.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
