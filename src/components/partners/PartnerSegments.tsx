"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const segments = [
  {
    id: "furniture",
    label: "Мебель",
    title: "Ваши товары появляются в готовых интерьерах",
    desc: "Клиенты видят мебель в реальном пространстве и переходят к покупке.",
    image: "/images/partners/furniture.png",
    accent: "#855dda",
  },
  {
    id: "materials",
    label: "Материалы",
    title: "Продавайте не материалы, а готовые решения",
    desc: "Показывайте сочетания в интерьере — клиент понимает, как это будет выглядеть у него.",
    image: "/images/partners/materials.png",
    accent: "#d66501",
  },
  {
    id: "developer",
    label: "Застройщики",
    title: "Покажите клиенту будущую квартиру до покупки",
    desc: "Добавьте мебель и стиль — увеличьте вовлечённость и продажи недвижимости.",
    image: "/images/partners/developer.png",
    accent: "#855dda",
  },
  {
    id: "designer",
    label: "Дизайнеры",
    title: "Создавайте дизайн и сразу подбирайте товары",
    desc: "Ускорьте работу и предлагайте клиенту готовые решения с покупкой.",
    image: "/images/partners/designer.png",
    accent: "#d66501",
  },
]

const titleChars = "Вы зарабатываете".split("")

export default function PartnerSegments() {
  const [active, setActive] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % segments.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [mounted])

  const current = segments[active]

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-end flex-wrap overflow-hidden mb-1">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.04 + 0.05 }}
          >
            <span
              className="text-5xl md:text-7xl lg:text-[82px] tracking-tight text-[#d66501] leading-[1.02]"
              style={{ fontFamily: "symphonyregular, serif" }}
            >
              вместе с Roomforia
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl mt-4"
          >
            Подходит для брендов, производителей и всех, кто хочет продавать через интерьер
          </motion.p>
        </div>

        {/* TABS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex gap-3 flex-wrap mb-14"
        >
          {segments.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className="px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                backgroundColor: i === active ? item.accent : "transparent",
                color: i === active ? "white" : "#9ca3af",
                border: `2px solid ${i === active ? item.accent : "#e5e7eb"}`,
              }}
            >
              {item.label}
            </button>
          ))}
        </motion.div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <h3 className="text-3xl md:text-4xl font-semibold mb-5 leading-tight text-[#1E1E1E]">
                {current.title}
              </h3>
              <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                {current.desc}
              </p>
              <div
                className="inline-flex items-center gap-2 text-sm font-medium"
                style={{ color: current.accent }}
              >
                <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: current.accent }} />
                Интеграция каталога за несколько дней
              </div>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.image}
                initial={{ opacity: 0, scale: 1.03, x: 20 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.97, x: -20 }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <img
                  src={current.image}
                  alt={current.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

                {/* Прогресс-бар */}
                {mounted && (
                  <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/20">
                    <motion.div
                      key={active}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 5, ease: "linear" }}
                      className="h-full origin-left"
                      style={{ backgroundColor: current.accent }}
                    />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  )
}
