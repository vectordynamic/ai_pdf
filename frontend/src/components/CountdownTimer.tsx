"use client";

import { useState, useEffect } from "react";
import { Timer } from "lucide-react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<{ hours: number, minutes: number, seconds: number } | null>(null);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = Math.floor(Date.now() / 1000);
      const cycleDuration = 10 * 60 * 60; // 10 hours in seconds
      const secondsPassedInCycle = now % cycleDuration;
      const secondsRemaining = cycleDuration - secondsPassedInCycle;

      const hours = Math.floor(secondsRemaining / 3600);
      const minutes = Math.floor((secondsRemaining % 3600) / 60);
      const seconds = Math.floor(secondsRemaining % 60);

      setTimeLeft({ hours, minutes, seconds });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!timeLeft) return <div className="h-10" />;

  return (
    <div className="flex items-center justify-center gap-3 bg-red-500/10 border border-red-500/20 text-red-500 px-6 py-3 rounded-2xl animate-pulse">
      <Timer className="w-5 h-5" />
      <div className="flex items-center gap-2 font-mono font-bold text-xl">
        <div className="flex flex-col items-center">
          <span>{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase font-sans tracking-tighter opacity-70">Hours</span>
        </div>
        <span className="mb-4">:</span>
        <div className="flex flex-col items-center">
          <span>{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase font-sans tracking-tighter opacity-70">Mins</span>
        </div>
        <span className="mb-4">:</span>
        <div className="flex flex-col items-center">
          <span>{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="text-[10px] uppercase font-sans tracking-tighter opacity-70">Secs</span>
        </div>
      </div>
      <div className="hidden sm:block text-sm font-bold ml-2">অফার শীঘ্রই শেষ হবে!</div>
    </div>
  );
}
