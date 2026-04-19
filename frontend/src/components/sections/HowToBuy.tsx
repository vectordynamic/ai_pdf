"use client";

import { BOOK } from "@/const/book";
import CheckoutForm from "./CheckoutForm";
import { ArrowRight, Copy, CheckCircle } from "lucide-react";
import { fbEvent } from "@/components/MetaPixel";

export default function HowToBuy() {
  return (
    <section id="checkout" className="w-full scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-text">
          বইটি অর্ডার করবেন কীভাবে?
        </h2>
        <p className="text-muted text-lg mt-4 max-w-2xl mx-auto">
          বিকাশ, নগদ বা রকেটের মাধ্যমে সিকিউর পেমেন্ট করে নিচের ৩টি সহজ স্টেপ ফলো করুন।
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left Side: Instructions */}
        <div className="space-y-8">
          <div className="space-y-10">

            {/* Step 1 */}
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-surface border border-primary/30 rounded-full flex items-center justify-center text-primary font-bold shadow-lg shadow-bg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text mb-3 mt-1.5">পেমেন্ট পাঠান</h3>
                <p className="text-muted mb-4">
                  নিচের যেকোনো একটি নাম্বারে <strong className="text-text">{BOOK.price}</strong> সেন্ড মানি (Send Money) করুন:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4">
                  <div className="bg-surface/50 p-4 rounded-xl border border-white/5">
                    <span className="text-xs text-muted block mb-1">bKash (Send Money)</span>
                    <span className="font-mono text-lg font-bold text-text">{BOOK.payment.bkashNumber}</span>
                  </div>
                  <div className="bg-surface/50 p-4 rounded-xl border border-white/5">
                    <span className="text-xs text-muted block mb-1">Nagad (Send Money)</span>
                    <span className="font-mono text-lg font-bold text-text">{BOOK.payment.nagadNumber}</span>
                  </div>
                  <div className="bg-surface/50 p-4 rounded-xl border border-white/5">
                    <span className="text-xs text-muted block mb-1">Rocket (Send Money)</span>
                    <span className="font-mono text-lg font-bold text-text">{BOOK.payment.rocketNumber}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-surface border border-primary/30 rounded-full flex items-center justify-center text-primary font-bold shadow-lg shadow-bg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text mb-2 mt-1.5">ট্রানজেকশন আইডি কপি করুন</h3>
                <p className="text-muted">
                  পেমেন্ট সফল হওয়ার পর অ্যাপ থেকে পাওয়া আপনার ট্রানজেকশন আইডিটি (TrxID) কপি করে রাখুন।
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 sm:gap-6">
              <div className="flex-shrink-0 w-10 h-10 bg-surface border border-primary/30 rounded-full flex items-center justify-center text-primary font-bold shadow-lg shadow-bg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-text mb-2 mt-1.5">ফর্ম সাবমিট করুন ও বুঝে নিন</h3>
                <p className="text-muted mb-6">
                  নিচের ফর্মে ট্রানজেকশন আইডি ও ইমেইল সাবমিট করুন। পেমেন্ট ভেরিফাই হওয়ার পর আপনার ইমেইলে বইটি পাঠিয়ে দেয়া হবে। এছাড়া <strong className="text-text">সরাসরি আমাদের ফেসবুক পেজে মেসেজ</strong> দিয়েও আপনি বইটি কিনতে পারেন। কোনো সমস্যা হলে বা ডেলিভারি পেতে দেরি হলে আমাদের পেজে মেসেজ দিন।
                </p>
                <a 
                  href={BOOK.socials.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => fbEvent("Contact", { content_name: "Facebook Messenger" })}
                  className="inline-flex items-center gap-2 bg-[#1877F2]/10 hover:bg-[#1877F2]/20 text-[#1877F2] font-semibold px-5 py-3 rounded-xl transition-all border border-[#1877F2]/20"
                >
                   <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07"/></svg>
                   Message us on Facebook
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side: Form */}
        <div className="relative w-full">
          {/* Decorative glow behind form */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-3xl blur-2xl -z-10 transform -rotate-1" />
          
          <div className="bg-surface/80 backdrop-blur-xl border border-white/10 p-6 sm:p-10 rounded-3xl shadow-2xl relative">
            <h3 className="text-2xl font-bold font-heading text-text mb-2 text-center">
              ভেরিফিকেশন ফর্ম
            </h3>
            <p className="text-emerald-400 text-xs font-bold text-center mb-6 bg-emerald-500/10 py-2 px-3 rounded-lg border border-emerald-500/20">
              একবার কিনলে লাইফটাইম সাপোর্ট এবং বইটির সকল নতুন এডিশন ফ্রি পাবেন!
            </p>
            <div className="h-px bg-white/10 w-full mb-6" />
            
            <CheckoutForm />
          </div>
        </div>

      </div>
    </section>
  );
}
