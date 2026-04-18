"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { CheckCircle2, Lock, Loader2, ChevronDown } from "lucide-react";
import { BOOK } from "@/const/book";
import { toast } from "sonner";

// The validation schema
const formSchema = z.object({
  paymentMethod: z.string().min(1, "দয়া করে একটি পেমেন্ট মেথড সিলেক্ট করুন"),
  transactionId: z.string().min(6, "ট্রানজেকশন আইডি অন্তত ৬ অক্ষরের হতে হবে"),
  mobile: z
    .string()
    .length(11, "মোবাইল নাম্বারটি অবশ্যই ১১ অক্ষরের হতে হবে")
    .regex(/^01[3-9]\d{8}$/, "সঠিক বাংলাদেশী মোবাইল নাম্বার দিন (যেমনঃ 017XXXXXXXX)"),
  email: z
    .string()
    .min(1, "ইমেইল এড্রেসটি প্রয়োজন")
    .email("সঠিক একটি ইমেইল এড্রেস দিন (যেমনঃ example@gmail.com)"),
});

type FormData = z.infer<typeof formSchema>;

export default function CheckoutForm() {
  const [isSuccess, setIsSuccess] = useState(false);
  
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch("/api/submissions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        toast.error(result.error || "পেমেন্ট ইনফরমেশন সাবমিট করা যায়নি।");
        return;
      }

      toast.success("সাবমিশন সফল হয়েছে!");
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      toast.error("সার্ভার এরর। আবার চেষ্টা করুন।");
    }
  };

  if (isSuccess) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-emerald-500/10 border border-emerald-500/30 rounded-3xl text-center space-y-4 animate-in fade-in zoom-in duration-500">
        <CheckCircle2 className="w-16 h-16 text-emerald-500" />
        <h3 className="text-2xl font-bold text-text">ধন্যবাদ!</h3>
        <p className="text-muted text-lg max-w-sm">
          আপনার ট্রানজেকশন আইডি আমাদের কাছে এসেছে। পেমেন্ট ভেরিফাই হওয়ার পর আপনার ইমেইলে বইটি পাঠিয়ে দেয়া হবে। ডেলিভারি পেতে দেরি হলে আমাদের ফেসবুক পেজে মেসেজ দিন।
        </p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        
        {/* Payment Method Tap Buttons */}
        <div className="space-y-3 text-left">
          <label className="block text-sm font-bold text-text">
            পেমেন্ট মেথড
          </label>
          <Controller
            control={control}
            name="paymentMethod"
            render={({ field }) => (
              <div className="grid grid-cols-3 gap-3">
                {BOOK.paymentMethods.map(method => (
                  <button
                    key={method}
                    type="button"
                    onClick={() => field.onChange(method)}
                    className={`py-3 lg:py-4 px-2 rounded-xl text-center font-bold text-sm sm:text-base border transition-all cursor-pointer ${
                      field.value === method 
                        ? 'border-primary bg-primary/20 text-primary shadow-[0_0_15px_rgba(16,185,129,0.2)]' 
                        : 'border-white/10 bg-surface text-muted hover:border-white/20 hover:text-text'
                    }`}
                  >
                    {method}
                  </button>
                ))}
              </div>
            )}
          />
          {errors.paymentMethod && (
            <p className="text-red-400 text-sm font-medium">{errors.paymentMethod.message}</p>
          )}
        </div>

        {/* Transaction ID Field */}
        <div className="space-y-2 text-left">
          <label htmlFor="transactionId" className="block text-sm font-bold text-text">
            ট্রানজেকশন আইডি (TrxID)
          </label>
          <input
            id="transactionId"
            type="text"
            placeholder="উদাঃ TXN8A9K2B3"
            className={`w-full bg-bg border ${
              errors.transactionId ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 focus:ring-primary/50"
            } rounded-xl px-4 py-4 text-text placeholder-slate-500 focus:outline-none focus:ring-2 transition-all`}
            {...register("transactionId")}
          />
          {errors.transactionId && (
            <p className="text-red-400 text-sm font-medium">{errors.transactionId.message}</p>
          )}
        </div>

        {/* Mobile Number Field */}
        <div className="space-y-2 text-left">
          <label htmlFor="mobile" className="block text-sm font-bold text-text">
            মোবাইল নাম্বার <span className="text-muted font-normal">(WhatsApp Number)</span>
          </label>
          <input
            id="mobile"
            type="text"
            placeholder="উদাঃ 01XXXXXXXXX"
            className={`w-full bg-bg border ${
              errors.mobile ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 focus:ring-primary/50"
            } rounded-xl px-4 py-4 text-text placeholder-slate-500 focus:outline-none focus:ring-2 transition-all`}
            {...register("mobile")}
          />
          {errors.mobile && (
            <p className="text-red-400 text-sm font-medium">{errors.mobile.message}</p>
          )}
        </div>
        {/* Email Address Field */}
        <div className="space-y-2 text-left">
          <label htmlFor="email" className="block text-sm font-bold text-text">
            ইমেইল এড্রেস <span className="text-muted font-normal">(যেখানে বইটি ডেলিভারি করা হবে)</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="উদাঃ example@gmail.com"
            className={`w-full bg-bg border ${
              errors.email ? "border-red-500/50 focus:ring-red-500/50" : "border-white/10 focus:ring-primary/50"
            } rounded-xl px-4 py-4 text-text placeholder-slate-500 focus:outline-none focus:ring-2 transition-all`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-400 text-sm font-medium">{errors.email.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group relative flex items-center justify-center gap-2 bg-primary hover:bg-emerald-400 disabled:opacity-70 disabled:hover:bg-primary text-bg font-extrabold text-lg py-5 px-8 rounded-2xl shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] transform transition-all duration-300 active:scale-95 focus:ring-4 focus:ring-primary/50 outline-none mt-4 cursor-pointer disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              প্রসেসিং...
            </>
          ) : (
            <>
              সাবমিট করুন 📖
            </>
          )}
        </button>
      </form>

      {/* Trust Badges under form */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted font-medium">
        <span className="flex items-center gap-1.5">
          <Lock className="w-4 h-4 text-primary" />
          সিকিউর 256-bit ভেরিফিকেশন
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1.5">
          <CheckCircle2 className="w-4 h-4 text-primary" />
          ৩০ মিনিটের মাঝে ভেরিফাইড অ্যাক্সেস
        </span>
      </div>
    </div>
  );
}
