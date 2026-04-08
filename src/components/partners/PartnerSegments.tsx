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
  },
  {
    id: "materials",
    label: "Материалы",
    title: "Продавайте не материалы, а готовые решения",
    desc: "Показывайте сочетания в интерьере — клиент понимает, как это будет выглядеть у него.",
    image: "/images/partners/materials.png",
  },
  {
    id: "developer",
    label: "Застройщики",
    title: "Покажите клиенту будущую квартиру до покупки",
    desc: "Добавьте мебель и стиль — увеличьте вовлечённость и продажи недвижимости.",
    image: "/images/partners/developer.png",
  },
  {
    id: "designer",
    label: "Дизайнеры",
    title: "Создавайте дизайн и сразу подбирайте товары",
    desc: "Ускорьте работу и предлагайте клиенту готовые решения с покупкой.",
    image: "/images/partners/designer.png",
  },
]

export default function PartnerSegments() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % segments.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [])

  const current = segments[active]

  return (
    <section className="py-28 px-4 relative">

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Вы зарабатываете вместе с Roomforia
          </h2>
          <p className="text-neutral-500 max-w-2xl mx-auto">
            Подходит для брендов, производителей и всех, кто хочет продавать через интерьер
          </p>
        </div>

        {/* DESKTOP TABS */}
        <div className="hidden md:flex justify-center mb-16 relative">
          <div className="flex gap-8 relative">

            <motion.div
              layout
              className="absolute bottom-[-6px] h-[2px] bg-[#C47A2C]"
              style={{
                width: "80px",
                left: `${active * 112}px`,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 25,
              }}
            />

            {segments.map((item, i) => (
              <button
                key={item.id}
                onClick={() => setActive(i)}
                className={`text-sm transition-all ${
                  i === active
                    ? "text-black"
                    : "text-neutral-400 hover:text-black"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden grid grid-cols-2 gap-2 mb-10">
          {segments.map((item, i) => (
            <button
              key={item.id}
              onClick={() => setActive(i)}
              className={`px-4 py-3 rounded-xl text-sm transition
                ${
                  i === active
                    ? "bg-[#C47A2C] text-white"
                    : "bg-black/[0.04] text-neutral-500"
                }
              `}
            >
              {item.label}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                duration: 1.2,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h3 className="text-2xl md:text-3xl font-semibold mb-4 leading-tight">
                {current.title}
              </h3>

              <p className="text-neutral-500 mb-6 text-lg">
                {current.desc}
              </p>

              {/* 💰 subtle business hint */}
              <div className="text-sm text-[#C47A2C] font-medium">
                → Интеграция каталога за несколько дней
              </div>
            </motion.div>
          </AnimatePresence>

          {/* IMAGE */}
          <div className="relative">

            <AnimatePresence mode="wait">
              <motion.img
                key={current.image}
                src={current.image}
                initial={{ opacity: 0, y: 20, scale: 1.02 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.98 }}
                transition={{
                  duration: 1.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="rounded-[24px] object-cover w-full h-[280px] md:h-[380px]"
              />
            </AnimatePresence>

            <div className="absolute inset-0 rounded-[24px] bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  )
}