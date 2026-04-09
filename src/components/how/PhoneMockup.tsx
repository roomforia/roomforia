"use client";

import { AnimatePresence, motion } from "framer-motion";

interface PhoneMockupProps {
  stepIndex: number;
  totalSteps: number;
}

export default function PhoneMockup({ stepIndex, totalSteps }: PhoneMockupProps) {
  return (
    <div className="relative w-[200px] md:w-[260px]">
      {/* Phone frame */}
      <div className="relative rounded-[40px] overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.18)] border-[7px] border-gray-900 bg-gray-900">

        {/* Dynamic island / notch */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[38%] h-[22px] bg-gray-900 rounded-full z-10" />

        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden bg-gray-100">
          <AnimatePresence mode="wait">
            <motion.img
              key={stepIndex}
              src={`/images/how/flow/step${stepIndex + 1}.png`}
              alt={`Шаг ${stepIndex + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.04 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </AnimatePresence>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[30%] h-[4px] bg-white/40 rounded-full" />
      </div>

      {/* Glow под телефоном */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 rounded-full blur-2xl opacity-30 bg-gray-900"
      />
    </div>
  );
}