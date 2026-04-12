"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const sofas = [
  { id: 1, src: "/images/cta/sofa-1.mp4", label: "Бежевый", color: "#D4C5B0" },
  { id: 2, src: "/images/cta/sofa-2.mp4", label: "Оранжевый", color: "#C1440E" },
  { id: 3, src: "/images/cta/sofa-3.mp4", label: "Синий", color: "#3B3FA0" },
]

const items = [
  {
    id: 1,
    bold: "ИИ подбирает решения, прогнозирует тренды и сочетает все это.",
    rest: " Система анализирует актуальные дизайны и современные подходы, чтобы результат выглядел цельно.",
  },
  {
    id: 2,
    bold: "Точные модели и реалистичная визуализация.",
    rest: " Качественная проработка текстур товаров, цветов и освещения помогает увидеть результат максимально близко к реальности.",
  },
  {
    id: 3,
    bold: "Удобное сравнение и замена товаров в уже готовом дизайне.",
    rest: " Вы можете быстро переключаться между вариантами и выбирать лучшее решение без бесконечного поиска.",
  },
  {
    id: 4,
    bold: "Только актуальная база.",
    rest: " Каждый элемент можно открыть, изучить и перейти к следующему шагу — покупке.",
  },
]

const line1 = "Визуализация и ИИ".split("")
const line2 = "в реальности".split("")

export default function CTASection() {
  const [active, setActive] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const startTimer = () => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setActive((prev) => (prev + 1) % sofas.length)
    }, 10000)
  }

  useEffect(() => {
    startTimer()
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [active])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load()
      videoRef.current.play().catch(() => {})
    }
  }, [active])

  return (
    <section className="py-12 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-start">

          {/* LEFT */}
          <div>
            <div className="flex flex-wrap items-end overflow-hidden mb-1">
              {line1.map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.04 }}
                  className="text-[22px] md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#d66501] leading-[1.05]"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap items-end overflow-hidden mb-6">
              {line2.map((char, i) => (
                <motion.span
                  key={`l2-${i}`}
                  initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (line1.length + i) * 0.04 }}
                  className="text-[22px] md:text-5xl lg:text-[56px] font-bold tracking-tight text-[#1E1E1E] leading-[1.05]"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
              className="text-gray-400 text-sm md:text-lg max-w-lg mb-8"
            >
              Мы объединили виртуальный и реальный мир, на практике актуальные тренды, качественные текстуры и высокую цветопередачу
            </motion.p>

            <div className="flex flex-col gap-3 md:gap-4">
              {items.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.7 + i * 0.08 }}
                  className="relative bg-white border border-gray-100 hover:border-[#855dda]/30 rounded-2xl px-5 py-4 overflow-hidden transition-all duration-300 hover:shadow-[0_4px_20px_rgba(133,93,218,0.08)]"
                >
                  <span
                    className="absolute -left-2 top-1/2 -translate-y-1/2 font-bold leading-none select-none pointer-events-none"
                    style={{ fontSize: "100px", color: "rgba(133,93,218,0.08)" }}
                  >
                    {item.id}
                  </span>
                  <p className="relative text-[#1E1E1E] text-sm leading-relaxed">
                    <span className="font-semibold">{item.bold}</span>
                    <span className="text-gray-500">{item.rest}</span>
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* RIGHT — видео (на мобиле идёт ПЕРВЫМ через order) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="order-first md:order-last sticky top-24 flex flex-col gap-3"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gray-50" style={{ aspectRatio: "4/3" }}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <video
                    ref={videoRef}
                    className="w-full h-full object-contain"
                    autoPlay loop muted playsInline
                  >
                    <source src={sofas[active].src} type="video/mp4" />
                  </video>
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-black/10">
                <motion.div
                  key={active}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 10, ease: "linear" }}
                  className="h-full origin-left"
                  style={{ backgroundColor: sofas[active].color }}
                />
              </div>

              <div
                className="absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-medium text-white"
                style={{ backgroundColor: sofas[active].color }}
              >
                {sofas[active].label}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {sofas.map((sofa, i) => (
                <button
                  key={sofa.id}
                  onClick={() => setActive(i)}
                  className="relative rounded-2xl overflow-hidden bg-gray-50 transition-all duration-300"
                  style={{
                    aspectRatio: "4/3",
                    border: i === active ? `2px solid ${sofa.color}` : "2px solid transparent",
                  }}
                >
                  <video className="w-full h-full object-contain" autoPlay loop muted playsInline>
                    <source src={sofa.src} type="video/mp4" />
                  </video>
                  {i === active && (
                    <div
                      className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
                      style={{ backgroundColor: sofa.color }}
                    />
                  )}
                </button>
              ))}
            </div>

            <p className="text-xs text-gray-400 text-center">
              Нажмите на вариант чтобы посмотреть · Смена каждые 10 сек
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
