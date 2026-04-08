"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Upload, Box, Eye, TrendingUp } from "lucide-react"

const steps = [
  { title: "Загружаете каталог", icon: Upload },
  { title: "Создаём 3D модели", icon: Box },
  { title: "Показываете клиентам", icon: Eye },
  { title: "Получаете заявки", icon: TrendingUp },
]

export default function DemoFlow() {
  const [activeStep, setActiveStep] = useState(0)

  // 🔥 AUTOPLAY LOOP (НЕ ломается при кликах)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  const progress = (activeStep / (steps.length - 1)) * 100

  return (
    <section className="py-28 px-4 relative">

      {/* 🔥 SOFT BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* TOP */}
        <p className="text-sm text-neutral-400 mb-4">
          Запуск за 3 дня · Без сложной интеграции
        </p>

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-16">
          Начните за 4 простых шага
        </h2>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block relative">

          {/* BASE LINE */}
          <div className="absolute top-7 left-0 right-0 h-[2px] bg-black/10" />

          {/* 🔥 PROGRESS LINE */}
          <div
            className="absolute top-7 left-0 h-[2px] bg-[#C47A2C] transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-[#C47A2C] rounded-full shadow-[0_0_12px_rgba(196,122,44,0.6)]" />
          </div>

          {/* STEPS */}
          <div className="grid grid-cols-4 gap-12 relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              const isActive = i <= activeStep

              return (
                <div
                  key={i}
                  onClick={() => setActiveStep(i)}
                  className="flex flex-col items-center text-center cursor-pointer group"
                >
                  {/* ICON */}
                  <div className="relative mb-6">

                    {isActive && (
                      <div className="absolute inset-0 bg-[#C47A2C]/20 blur-xl rounded-full" />
                    )}

                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border transition-all duration-500
                      ${
                        isActive
                          ? "bg-[#C47A2C] text-white border-[#C47A2C] scale-110"
                          : "bg-white text-neutral-400 border-black/10"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                  </div>

                  {/* TITLE */}
                  <h3
                    className={`text-base font-medium transition ${
                      isActive ? "text-black" : "text-neutral-400"
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>
              )
            })}
          </div>
        </div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col items-start gap-10 relative mt-10">

          {/* VERTICAL LINE */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-black/10" />

          {/* PROGRESS */}
          <div
            className="absolute left-6 top-0 w-[2px] bg-[#C47A2C] transition-all duration-700"
            style={{ height: `${progress}%` }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            const isActive = i <= activeStep

            return (
              <div
                key={i}
                onClick={() => setActiveStep(i)}
                className="flex items-center gap-4 relative"
              >
                {/* ICON */}
                <div className="relative z-10">

                  {isActive && (
                    <div className="absolute inset-0 bg-[#C47A2C]/20 blur-lg rounded-full" />
                  )}

                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all
                    ${
                      isActive
                        ? "bg-[#C47A2C] text-white border-[#C47A2C]"
                        : "bg-white text-neutral-400 border-black/10"
                    }`}
                  >
                    <Icon size={18} />
                  </div>
                </div>

                {/* TEXT */}
                <p
                  className={`text-sm font-medium ${
                    isActive ? "text-black" : "text-neutral-400"
                  }`}
                >
                  {step.title}
                </p>
              </div>
            )
          })}
        </div>

        {/* FOOTNOTE */}
        <p className="mt-16 text-neutral-400 text-sm">
          Уже подключаются бренды и поставщики
        </p>
      </div>
    </section>
  )
}