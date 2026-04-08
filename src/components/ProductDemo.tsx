"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
  {
    image: "/images/demo/step-1.png",
    hotspot: { top: "55%", left: "45%" },
  },
  {
    image: "/images/demo/step-2.png",
    hotspot: { bottom: "12%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    image: "/images/demo/step-3.png",
    hotspot: { bottom: "10%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    image: "/images/demo/step-4.png",
    hotspot: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    image: "/images/demo/step-5.png",
    hotspot: { bottom: "15%", left: "50%", transform: "translateX(-50%)" },
  },
]

export default function ProductDemo() {
  const [active, setActive] = useState(0)

  // 🔥 МЕДЛЕННЫЙ autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setActive((prev) => (prev + 1) % steps.length)
  }

  const prev = () => {
    setActive((prev) => (prev - 1 + steps.length) % steps.length)
  }

  const step = steps[active]

  return (
    <section className="py-28 px-4 relative overflow-hidden">

      {/* мягкий glow */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto flex justify-center relative z-10">

        {/* ===== PHONE ===== */}
        <div className="relative">

          {/* 🔥 iPhone-like frame (очень subtle) */}
          <div className="absolute inset-0 rounded-[44px] border border-black/10 pointer-events-none" />

          <div className="relative w-[300px] h-[620px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.18)] bg-black">

            {/* SCREEN */}
            <AnimatePresence mode="wait">
              <motion.img
                key={step.image}
                src={step.image}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 1.2 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* 🔥 HOTSPOT */}
            <motion.div
              onClick={next}
              className="absolute cursor-pointer z-20"
              style={step.hotspot}
              whileTap={{ scale: 0.85 }}
            >
              <div className="relative flex items-center justify-center">

                {/* ripple */}
                <span className="absolute w-16 h-16 rounded-full bg-white/20 animate-ping" />

                {/* core */}
                <span className="w-4 h-4 bg-white rounded-full shadow-lg" />
              </div>
            </motion.div>

            {/* swipe зона */}
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) next()
                if (info.offset.x > 50) prev()
              }}
              className="absolute inset-0 z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}