import { ShieldAlert, Rocket, Target, Zap } from "lucide-react";

export default function ProblemSolution() {
  return (
    <section className="w-full space-y-16 py-12">
      {/* The Problem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm font-bold">
            <ShieldAlert className="w-4 h-4" />
            সমস্যাটি কোথায়?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight">
            AI আপনার চাকরি কেড়ে নেবে না, কিন্তু <span className="text-red-500">যে AI জানে</span> সে আপনার জায়গাটি নিয়ে নেবে।
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            বর্তমান বাজারে শুধু পরিশ্রম দিয়ে আর টিকে থাকা সম্ভব নয়। প্রথাগত কাজের পদ্ধতি এখন ধীরগতির এবং সেকেলে। আপনি যদি দিনে ১০ ঘণ্টা কাজ করেন, একজন AI দক্ষ মানুষ সেই একই কাজ মাত্র ৩০ মিনিটে নিখুঁতভাবে শেষ করতে পারে।
          </p>
          <ul className="space-y-4">
            {[
              "কাজের চাপে ব্যক্তিগত সময় হারিয়ে ফেলা",
              "নতুন টেকনোলজি শিখতে গিয়ে খেই হারিয়ে ফেলা",
              "ফ্রিল্যান্সিং বা জবে কম্পিটিশনে পিছিয়ে পড়া",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-text font-medium">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 text-xs">✕</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative group">
          <div className="absolute inset-0 bg-red-500/10 rounded-3xl blur-3xl group-hover:bg-red-500/20 transition-all duration-700" />
          <div className="relative bg-surface/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl space-y-6">
            <div className="text-5xl font-black text-red-500/20 absolute top-4 right-6 uppercase italic select-none">
              Warning
            </div>
            <div className="p-4 bg-red-500/10 rounded-2xl border border-red-500/20">
              <p className="text-text font-bold italic">
                &quot;বিশ্বের বড় বড় কোম্পানিগুলো এখন AI স্কিলড মানুষকে ৩ গুণ বেশি স্যালারি দিচ্ছে। আপনি কি সেই দৌড়ে প্রস্তুত?&quot;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Bridge / Transition */}
      <div className="flex flex-col items-center py-8">
        <div className="w-px h-24 bg-gradient-to-b from-red-500 to-primary" />
        <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.5)] z-10 -my-2">
          <Zap className="w-6 h-6 text-bg fill-current" />
        </div>
      </div>

      {/* The Solution */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative group">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
          <div className="relative bg-surface/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl space-y-6">
             <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-bg rounded-2xl border border-white/5 text-center">
                   <div className="text-2xl font-bold text-primary">১০X</div>
                   <div className="text-xs text-muted font-bold uppercase">Productivity</div>
                </div>
                <div className="p-4 bg-bg rounded-2xl border border-white/5 text-center">
                   <div className="text-2xl font-bold text-accent">০</div>
                   <div className="text-xs text-muted font-bold uppercase">Experience Needed</div>
                </div>
             </div>
             <p className="text-text font-medium leading-relaxed">
               আমরা আপনাকে শুধু প্রম্পট শেখাবো না, আমরা আপনাকে শেখাবো কীভাবে AI-কে আপনার ভার্চুয়াল অ্যাসিস্ট্যান্ট হিসেবে কাজ করানো যায়।
             </p>
          </div>
        </div>
        <div className="order-1 md:order-2 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-primary text-sm font-bold">
            <Rocket className="w-4 h-4" />
            সমাধান কী?
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-text leading-tight">
            AI-কে দাস বানান, <span className="text-primary">শত্রু নয়।</span>
          </h2>
          <p className="text-muted text-lg leading-relaxed">
            এই বইটি কোনো সাধারণ গাইড নয়। এটি আপনার ক্যারিয়ারের একটি ইনভেস্টমেন্ট। আমরা জটিল টেকনিক্যাল কথাবার্তা বাদ দিয়ে সহজ ভাষায় দেখিয়েছি কীভাবে AI ব্যবহার করে আপনি আপনার ইনকাম বাড়াতে পারেন এবং সময় বাঁচাতে পারেন।
          </p>
          <ul className="space-y-4">
            {[
              "রিয়েল-লাইফ ২৫০+ প্রফেশনাল প্রম্পট",
              "স্টেপ-বাই-স্টেপ ভিডিও গাইড অ্যাক্সেস",
              "কন্টেন্ট রাইটিং থেকে শুরু করে অটোমেশন পর্যন্ত সব",
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-text font-medium">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-xs">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
