import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Noto_Sans_Bengali } from "next/font/google";
import "./globals.css";
import { BOOK } from "@/const/book";
import FacebookMsg from "@/components/FacebookMsg";
import { Toaster } from "sonner";
import MetaPixel from "@/components/MetaPixel";
import { Suspense } from "react";
import Script from "next/script";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const bangla = Noto_Sans_Bengali({
  variable: "--font-bangla",
  subsets: ["bengali"],
});

export const metadata: Metadata = {
  title: BOOK.meta.seoTitle,
  description: BOOK.meta.seoDescription,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${jakarta.variable} ${inter.variable} ${bangla.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-inter bg-bg text-text" suppressHydrationWarning>
        {/* Official Next.js Way to load Meta Pixel */}
        <Script
          id="meta-pixel-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1483303606780375');
              fbq('track', 'PageView');
              console.log('Meta Pixel: Initialized');
            `,
          }}
        />
        <Suspense fallback={null}>
          <MetaPixel />
        </Suspense>
        <Toaster position="top-center" richColors />
        {children}
        <FacebookMsg />
      </body>
    </html>
  );
}
