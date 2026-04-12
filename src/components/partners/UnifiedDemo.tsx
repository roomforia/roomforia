"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import React from "react"

const steps: { title: string; image: string; hotspot: React.CSSProperties }[] = [
  {
    title: "Клиент видит интерьер",
    image: "/images/demo/step-1.png",
    hotspot: { top: "55%", left: "45%" },
  },
  {
    title: "Кликает на товар",
    image: "/images/demo/step-2.png",
    hotspot: { bottom: "12%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    title: "Открывает карточку",
    image: "/images/demo/step-3.png",
    hotspot: { bottom: "10%", left: "50%", transform: "translateX(-50%)" },
  },
  {
    title: "Сравнивает магазины",
    image: "/images/demo/step-4.png",
    hotspot: { top: "50%", left: "50%", transform: "translate(-50%, -50%)" },
  },
  {
    title: "Покупает",
    image: "/images/demo/step-5.png",
    hotspot: { bottom: "15%", left: "50%", transform: "translateX(-50%)" },
  },
]

export default function UnifiedDemo() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [])

  const next = () => setActive((prev) => (prev + 1) % steps.length)
  const current = steps[active]

  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT — таймлайн */}
        <div className="relative pl-8">

          {/* Base line */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gray-100" />

          {/* Active line */}
          <motion.div
            className="absolute left-2 top-0 w-[2px]"
            animate={{ height: `${(active / (steps.length - 1)) * 100}%` }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: "#855dda", boxShadow: "0 0 12px rgba(133,93,218,0.5)" }}
          />

          <h2 className="text-[26px] md:text-5xl lg:text-[56px] font-semibold mb-3 md:mb-4 leading-tight tracking-tight text-[#1E1E1E]">
            Как клиент покупает ваш товар
          </h2>
          <p className="text-gray-400 mb-12 text-lg">
            От интерьера до покупки — один сценарий
          </p>

          <div className="space-y-8">
            {steps.map((step, i) => {
              const isActive = i <= active
              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-start gap-6 cursor-pointer group"
                >
                  {/* Dot */}
                  <div className="relative z-10 flex-shrink-0 mt-1">
                    {isActive && (
                      <div
                        className="absolute inset-0 blur-xl rounded-full"
                        style={{ backgroundColor: "#855dda", opacity: 0.25 }}
                      />
                    )}
                    <div
                      className="w-4 h-4 rounded-full border-2 transition-all duration-500"
                      style={{
                        backgroundColor: isActive ? "#855dda" : "white",
                        borderColor: isActive ? "#855dda" : "#e5e5e5",
                        transform: isActive ? "scale(1.15)" : "scale(1)",
                      }}
                    />
                  </div>

                  {/* Text */}
                  <p className={`text-lg font-medium transition-all duration-300 ${
                    isActive ? "text-[#1E1E1E]" : "text-gray-300 group-hover:text-gray-500"
                  }`}>
                    {step.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* RIGHT — телефон */}
        <div className="flex justify-center">
          <div className="relative">
            {/* Свечение */}
            <div
              className="absolute inset-0 rounded-[48px] blur-3xl -z-10"
              style={{ backgroundColor: "#855dda", opacity: 0.12, transform: "scale(0.85) translateY(20px)" }}
            />

            {/* Телефон */}
            <div
              className="relative overflow-hidden"
              style={{
                width: "280px",
                height: "600px",
                borderRadius: "44px",
                boxShadow: "0 0 0 6px #111, 0 40px 80px rgba(0,0,0,0.35)",
              }}
            >
              {/* Экран */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full object-cover"
                  draggable={false}
                />
              </AnimatePresence>

              {/* Dynamic island */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-20"
                style={{ top: "10px", width: "72px", height: "22px" }}
              />

              {/* Home indicator */}
              <div
                className="absolute left-1/2 -translate-x-1/2 rounded-full z-20"
                style={{ bottom: "8px", width: "54px", height: "4px", backgroundColor: "rgba(255,255,255,0.4)" }}
              />

              {/* Hotspot */}
              <div
                onClick={next}
                className="absolute cursor-pointer z-20"
                style={current.hotspot}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-12 h-12 rounded-full bg-white/25 animate-ping" />
                  <span
                    className="w-3 h-3 rounded-full border-2 border-[#d66501] bg-white shadow-lg"
                  />
                </div>
              </div>

              {/* Swipe drag */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -50) next()
                  if (info.offset.x > 50)
                    setActive((prev) => (prev - 1 + steps.length) % steps.length)
                }}
                className="absolute inset-0 z-10"
              />
            </div>

            {/* Тень под телефоном */}
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[60%] h-8 blur-2xl rounded-full -z-10"
              style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
            />
          </div>
        </div>

      </div>
    </section>
  )
}
