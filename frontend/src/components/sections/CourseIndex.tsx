import { BookMarked, Download } from "lucide-react";

const chapters = [
  "অধ্যায় ১ | ভিত্তিপ্রস্তর (AI আসলে কী?)",
  "অধ্যায় ২ | আইডিয়া জেনারেশন ও ব্রেইনস্টর্মিং",
  "অধ্যায় ৩ | প্রম্পট ইঞ্জিনিয়ারিং (AI-এর সাথে কথা বলার ভাষা)",
  "অধ্যায় ৪ | এফ-কমার্স ও বিজনেস গ্রোথ",
  "অধ্যায় ৫ | পার্সোনাল ব্র্যান্ডিং ও ফিউচার-প্রুফ ক্যারিয়ার",
  "অধ্যায় ৬ | ক্রিয়েটিভ স্টুডিও: ভিডিও, অডিও ও ইমেজ মাস্টারি",
  "অধ্যায় ৭ | প্রফেশনাল ও কর্পোরেট লাইফে AI",
  "অধ্যায় ৮ | স্মার্ট লার্নিং ও রিসার্চ",
  "অধ্যায় ৯ | ক্যারিয়ার ও ফ্রিল্যান্সিং",
  "অধ্যায় ১০ | AI ভয়েস ও সাউন্ড ইঞ্জিনিয়ারিং (অডিওকে করুন জীবন্ত)",
  "অধ্যায় ১১ | ৫০+ AI মাস্টার টুলস ও কনজিউমার টুলকিট"
];

export default function CourseIndex() {
  return (
    <section className="w-full space-y-10 py-4">
      <div className="text-center space-y-4">
        <BookMarked className="w-10 h-10 text-accent mx-auto" />
        <h2 className="text-3xl lg:text-4xl font-bold font-heading">কোর্স কারিকুলাম</h2>
        <p className="text-muted text-lg max-w-2xl mx-auto">
          ১১টি চ্যাপ্টারের বিস্তারিত সিলেবাস এবং ব্লুপ্রিন্ট যা আপনি মাস্টার করবেন।
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapters.map((chapter, i) => (
          <div key={i} className="flex items-center gap-4 bg-surface p-4 sm:p-5 rounded-2xl border border-white/5 hover:border-primary/30 transition-colors shadow-sm group">
             <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary font-bold text-base group-hover:bg-primary group-hover:text-bg transition-colors">
                {i + 1}
             </div>
             <p className="font-bold text-text text-sm sm:text-base leading-snug">{chapter}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-8">
         <a 
           href="/cover/index.pdf" 
           target="_blank" 
           rel="noopener noreferrer"
           className="group inline-flex items-center justify-center gap-3 bg-white/5 hover:bg-white/10 border border-white/10 text-text font-bold px-6 sm:px-8 py-4 rounded-xl transition-all w-full sm:w-auto text-center"
         >
           <Download className="w-5 h-5 text-primary group-hover:-translate-y-1 transition-transform" />
           সম্পূর্ণ কারিকুলাম ও বিস্তারিত সিলেবাস ডাউনলোড করুন (PDF)
         </a>
      </div>
    </section>
  );
}
