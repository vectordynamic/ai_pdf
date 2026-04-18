import { BOOK } from "@/const/book";
import { Briefcase, Laptop, GraduationCap } from "lucide-react";

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
    </section>
  );
}
