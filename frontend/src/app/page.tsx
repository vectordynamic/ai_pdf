import { BOOK } from "@/const/book";
import HeroSection from "@/components/sections/HeroSection";
import WhatsInside from "@/components/sections/WhatsInside";
import CourseIndex from "@/components/sections/CourseIndex";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import SocialProof from "@/components/sections/SocialProof";
import HowToBuy from "@/components/sections/HowToBuy";
import BottomInfo from "@/components/sections/BottomInfo";

export function generateMetadata() {
  return {
    title: BOOK.meta.seoTitle,
    description: BOOK.meta.seoDescription,
  };
}

export default function BookDetailPage() {
  return (
    <main className="flex flex-col min-h-screen bg-bg relative overflow-hidden">
      {/* Universal background effects for depth */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20 space-y-16 md:space-y-24">
        {/* Top: Hero + Buy Button */}
        <HeroSection />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Core Highlights */}
        <WhatsInside />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Payment / Order Form */}
        <HowToBuy />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Who is it for */}
        <WhoIsThisFor />

        {/* Full Curriculum */}
        <CourseIndex />

        {/* Reviews */}
        <SocialProof />

        {/* FAQ + Why This Book */}
        <BottomInfo />
      </div>

      {/* Footer */}
      <footer className="w-full border-t border-white/10 bg-surface/30 backdrop-blur-md py-12 text-center text-muted text-sm px-6">
        <p>© {new Date().getFullYear()} {BOOK.title}. All rights reserved.</p>
        <div className="mt-4 flex items-center justify-center gap-4 text-xs">
          <span className="flex items-center gap-1"><span className="text-primary">🔒</span> Secure Checkout</span>
          <span className="flex items-center gap-1"><span className="text-primary">✅</span> 100% Guaranteed</span>
        </div>
      </footer>
    </main>
  );
}
