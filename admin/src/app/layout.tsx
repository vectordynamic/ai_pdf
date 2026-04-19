import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { LayoutDashboard, Users } from "lucide-react";
import LogoutButton from "@/components/LogoutButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Admin Panel - PDF Sales",
  description: "Internal dashboard to verify and send PDF orders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ colorScheme: 'dark' }}>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white flex h-screen`}>
        {/* Simple Sidebar */}
        <aside className="w-64 bg-zinc-950 border-r border-zinc-800 flex flex-col shrink-0">
          <div className="p-6 border-b border-zinc-800">
            <h1 className="text-xl font-bold">Admin Panel</h1>
          </div>
          <nav className="p-4 space-y-2 flex-grow">
            <Link href="/" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900 transition-colors font-medium text-zinc-300">
              <LayoutDashboard className="w-5 h-5 text-zinc-500" /> Dashboard
            </Link>
            <Link href="/submissions" className="flex items-center gap-3 p-3 rounded-lg hover:bg-zinc-900 transition-colors font-medium text-zinc-300">
              <Users className="w-5 h-5 text-zinc-500" /> Submissions
            </Link>
          </nav>
          <div className="p-4 border-t border-zinc-800">
            <LogoutButton />
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 overflow-auto p-8 bg-black">
          {children}
        </main>
      </body>
    </html>
  );
}
