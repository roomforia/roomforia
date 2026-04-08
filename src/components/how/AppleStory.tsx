"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import PhoneMockup from "@/components/how/PhoneMockup"; 

export default function AppleStory() {
  const progress = useScrollProgress("apple-story");

  return (
    <section id="apple-story" className="relative h-[400vh] bg-[#0f0f0f] text-white overflow-hidden">

      {/* BACKGROUND BEFORE */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700"
        style={{
          backgroundImage: "url('/images/how/hero/before.png')",
          transform: `scale(${1 + progress * 0.1})`,
        }}
      />

      {/* AFTER LAYER */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-500"
        style={{
          backgroundImage: "url('/images/how/hero/after.png')",
          clipPath: `inset(0 ${100 - progress * 100}% 0 0)`,
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/40" />

      {/* CONTENT */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center">

        {/* TEXT */}
        <div
          className="text-center mb-10 transition-all duration-700"
          style={{
            transform: `translateY(${50 - progress * 50}px)`,
            opacity: progress < 0.1 ? progress * 10 : 1,
          }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold mb-4">
            Твой интерьер. За минуты.
          </h1>
          <p className="text-gray-300 text-lg">
            Просто прокрути вниз
          </p>
        </div>

        {/* PHONE */}
        <div
          className="transition-all duration-700"
          style={{
            transform: `scale(${0.9 + progress * 0.2}) translateY(${progress * -40}px)`
          }}
        >
          <PhoneMockup progress={progress} />
        </div>

        {/* PROGRESS INDICATOR */}
        <div className="absolute bottom-10 text-sm text-gray-400">
          {Math.floor(progress * 7) + 1} / 7
        </div>

      </div>
    </section>
  );
}