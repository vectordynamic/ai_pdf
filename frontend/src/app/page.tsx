import { Metadata } from "next";
import { BOOK } from "@/const/book";
import HeroSection from "@/components/sections/HeroSection";
import WhatsInside from "@/components/sections/WhatsInside";
import CourseIndex from "@/components/sections/CourseIndex";
import WhoIsThisFor from "@/components/sections/WhoIsThisFor";
import SocialProof from "@/components/sections/SocialProof";
import HowToBuy from "@/components/sections/HowToBuy";
import BottomInfo from "@/components/sections/BottomInfo";
import TrackOnView from "@/components/TrackOnView";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com";

export const metadata: Metadata = {
  title: BOOK.meta.seoTitle,
  description: BOOK.meta.seoDescription,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: BOOK.meta.seoTitle,
    description: BOOK.meta.seoDescription,
    url: SITE_URL,
    siteName: BOOK.title,
    images: [
      {
        url: `${SITE_URL}/cover/book_cover_gold.png`,
        width: 1200,
        height: 630,
        alt: BOOK.title,
      },
    ],
    locale: "bn_BD",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: BOOK.meta.seoTitle,
    description: BOOK.meta.seoDescription,
    images: [`${SITE_URL}/cover/book_cover_gold.png`],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BookDetailPage() {
  return (
    <main className="flex flex-col min-h-screen bg-bg relative overflow-hidden">
      {/* Universal background effects for depth */}
      <div className="fixed top-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px] -z-10 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] -z-10 pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full px-6 py-12 md:py-20 space-y-16 md:space-y-24">
        {/* 1. Hero + Buy Button */}
        <HeroSection />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 2. Core Highlights — prove the value (tracks ViewContent on scroll) */}
        <TrackOnView eventName="ViewContent" eventData={{ content_name: "WhatsInside Section", content_category: "eBook" }}>
          <WhatsInside />
        </TrackOnView>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 3. Who is it for — make them self-identify */}
        <WhoIsThisFor />

        {/* 4. Social Proof — build trust BEFORE asking for money */}
        <SocialProof />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 5. Full Curriculum — show depth of content */}
        <CourseIndex />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 6. FAQ + Why This Book — handle objections */}
        <BottomInfo />

        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* 7. Payment / Order Form — ask for money LAST after full trust */}
        <HowToBuy />
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
