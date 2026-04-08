"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const steps = [
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

  // 🔥 медленный autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length)
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  const next = () => {
    setActive((prev) => (prev + 1) % steps.length)
  }

  const current = steps[active]

  return (
    <section className="py-32 px-4 relative">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT ================= */}
        <div className="relative pl-8">

          {/* BASE LINE */}
          <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-black/10" />

          {/* 🔥 ACTIVE LINE */}
          <motion.div
            className="absolute left-2 top-0 w-[2px] bg-[#C47A2C]"
            animate={{
              height: `${(active / (steps.length - 1)) * 100}%`,
            }}
            transition={{ duration: 1.2 }}
            style={{
              boxShadow: "0 0 12px rgba(196,122,44,0.6)",
            }}
          />

          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            Как клиент покупает ваш товар
          </h2>

          <p className="text-gray-500 mb-12">
            Интерактивный сценарий — от интерьера до покупки
          </p>

          <div className="space-y-10">
            {steps.map((step, i) => {
              const isActive = i <= active

              return (
                <div
                  key={i}
                  onClick={() => setActive(i)}
                  className="flex items-start gap-6 cursor-pointer group"
                >
                  {/* DOT */}
                  <div className="relative z-10">

                    {isActive && (
                      <div className="absolute inset-0 bg-[#C47A2C]/20 blur-xl rounded-full" />
                    )}

                    <div
                      className={`w-5 h-5 rounded-full border transition-all duration-500
                        ${
                          isActive
                            ? "bg-[#C47A2C] border-[#C47A2C] scale-110"
                            : "bg-white border-gray-300"
                        }`}
                    />
                  </div>

                  {/* TEXT */}
                  <p
                    className={`text-lg transition ${
                      isActive
                        ? "text-black"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {step.title}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* ================= RIGHT ================= */}
        <div className="flex justify-center">

          <div className="relative">

            {/* subtle frame */}
            <div className="absolute inset-0 rounded-[44px] border border-black/10 pointer-events-none" />

            <div className="relative w-[300px] h-[620px] rounded-[40px] overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.2)] bg-black">

              {/* SCREEN */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={current.image}
                  src={current.image}
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
                style={current.hotspot}
                whileTap={{ scale: 0.85 }}
              >
                <div className="relative flex items-center justify-center">
                  <span className="absolute w-14 h-14 rounded-full bg-white/20 animate-ping" />
                  <span className="w-3 h-3 bg-white rounded-full shadow-lg" />
                </div>
              </motion.div>

              {/* SWIPE */}
              <motion.div
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                onDragEnd={(e, info) => {
                  if (info.offset.x < -50) next()
                  if (info.offset.x > 50)
                    setActive((prev) =>
                      (prev - 1 + steps.length) % steps.length
                    )
                }}
                className="absolute inset-0 z-10"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}