"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const benefits = [
  {
    title: "Рост продаж",
    desc: "Пользователь видит ваш товар в реальном интерьере — это конвертирует лучше любого каталога",
    accent: "#855dda",
    bg: "#f5f0ff",
  },
  {
    title: "Точное попадание",
    desc: "AI подбирает товары под стиль и пространство — ваш продукт показывается нужной аудитории",
    accent: "#d66501",
    bg: "#fff5eb",
  },
  {
    title: "Интеграция один раз",
    desc: "Загрузите каталог — и ваши товары начнут работать в тысячах интерьеров автоматически",
    accent: "#855dda",
    bg: "#f5f0ff",
  },
]

const titleChars = "Мы приводим клиентов".split("")

export default function PartnersBlock() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-8 md:mb-20">

          {/* Мобиль */}
          <div className="md:hidden mb-4">
            <p className="text-[28px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.2]">Мы приводим клиентов</p>
            <p className="text-[28px] tracking-tight text-[#d66501] leading-[1.2]" style={{ fontFamily: "symphonyregular, serif" }}>прямо к вашим товарам</p>
          </div>

          {/* Десктоп */}
          <div className="hidden md:block">
            <div className="flex items-end flex-wrap overflow-hidden mb-1">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.03 }}
                  className="text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
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
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.03 + 0.05 }}
            >
              <span className="text-7xl lg:text-[82px] tracking-tight text-[#d66501] leading-[1.02]" style={{ fontFamily: "symphonyregular, serif" }}>
                прямо к вашим товарам
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="text-gray-400 text-base md:text-xl mt-4 max-w-2xl"
          >
            Ваши продукты становятся частью интерьера и продаются через опыт, а не через каталог
          </motion.p>
        </div>

        {/* BENEFITS */}
        <div className="flex flex-col gap-4 mb-10 md:mb-20">
          {benefits.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              className="relative rounded-3xl cursor-default overflow-hidden"
              style={{
                backgroundColor: hovered === i ? item.bg : "#f9f9f9",
                transition: "background-color 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            >
              <span
                className="absolute -left-2 top-1/2 -translate-y-1/2 font-bold leading-none select-none pointer-events-none"
                style={{ fontSize: "120px", color: `${item.accent}18` }}
              >
                {String(i + 1)}
              </span>
              <div className="relative flex items-start gap-6 px-6 md:px-10 py-8 md:py-12">
                <div className="flex-1 pt-1">
                  <h3 className="text-xl md:text-3xl font-semibold text-[#1E1E1E] mb-2 leading-snug">{item.title}</h3>
                  <p className="text-gray-500 text-sm md:text-lg leading-relaxed max-w-2xl">{item.desc}</p>
                </div>
                <motion.div
                  animate={{ opacity: hovered === i ? 1 : 0, x: hovered === i ? 0 : 10 }}
                  transition={{ duration: 0.35 }}
                  className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mt-1"
                  style={{ backgroundColor: item.accent }}
                >
                  <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
                    <path d="M4 9h10M10 5l4 4-4 4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </motion.div>
              </div>
              <motion.div
                className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                animate={{ backgroundColor: hovered === i ? item.accent : "transparent", scaleY: hovered === i ? 1 : 0 }}
                transition={{ duration: 0.4 }}
                style={{ transformOrigin: "top" }}
              />
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 md:pt-12 border-t border-gray-100"
        >
          <div>
            <p className="text-lg md:text-2xl font-semibold text-[#1E1E1E] mb-2">Хотите разместить свои товары?</p>
            <p className="text-gray-400 text-sm md:text-base">Подключите каталог — ваши товары начнут продаваться через интерьеры</p>
          </div>
          <a
            href="/partners"
            className="inline-flex items-center gap-3 px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#855dda] text-[#855dda] font-medium hover:bg-[#855dda] hover:text-white transition-all duration-200 flex-shrink-0 text-sm md:text-base"
          >
            Стать партнёром
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
