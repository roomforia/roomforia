"use client"

import { useRef, useState } from "react"
import { motion } from "framer-motion"

const items = [
  {
    id: 1,
    text: "ИИ подбирает решения, прогнозирует тренды и сочетает все это. Система анализирует актуальные дизайны и современные подходы, чтобы результат выглядел цельно.",
  },
  {
    id: 2,
    text: "Точные модели и реалистичная визуализация. Качественная проработка текстур товаров, цветов и освещения помогает увидеть результат максимально близко к реальности.",
  },
  {
    id: 3,
    text: "Удобное сравнение и замена товаров в уже готовом дизайне. Вы можете быстро переключаться между вариантами и выбирать лучшее решение без бесконечного поиска.",
  },
  {
    id: 4,
    text: "Только актуальная база. Каждый элемент можно открыть, изучить и перейти к следующему шагу — покупке.",
  },
]

const line1 = "Визуализация и ИИ".split("")
const line2 = "в реальности".split("")

export default function CTASection() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const handleScroll = () => {
    if (!scrollRef.current) return
    const { scrollLeft, offsetWidth } = scrollRef.current
    const index = Math.round(scrollLeft / (offsetWidth * 0.8))
    setActive(index)
  }

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return
    scrollRef.current.scrollTo({
      left: scrollRef.current.offsetWidth * 0.8 * index,
      behavior: "smooth",
    })
  }

  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="mb-16">

          {/* Roomforia — symphony сверху */}
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0 }}
            className="mb-2"
          >
            <span
              className="text-3xl md:text-4xl text-[#d66501]"
              style={{ fontFamily: "symphonyregular, serif" }}
            >
              Roomforia
            </span>
          </motion.div>

          {/* "Визуализация и ИИ" — побуквенно */}
          <div className="flex flex-wrap items-end overflow-hidden mb-1">
            {line1.map((char, i) => (
              <motion.span
                key={`l1-${i}`}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.04,
                }}
                className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#d66501] leading-[1.05]"
                style={{
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.28em" : "auto",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* "в реальности" — побуквенно */}
          <div className="flex flex-wrap items-end overflow-hidden mb-8">
            {line2.map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + (line1.length + i) * 0.04,
                }}
                className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.05]"
                style={{
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.28em" : "auto",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 + (line1.length + line2.length) * 0.04 + 0.1,
            }}
            className="text-gray-400 text-lg md:text-xl max-w-xl"
          >
            От идеи до конкретного решения — быстрее и проще
          </motion.p>
        </div>

        {/* ===== CARDS SLIDER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          className="relative mb-10"
        >
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              onMouseDown={(e) => {
                const slider = scrollRef.current
                if (!slider) return
                let isDown = true
                const startX = e.pageX
                const startScrollLeft = slider.scrollLeft
                const onMouseMove = (moveEvent: MouseEvent) => {
                  if (!isDown) return
                  slider.scrollLeft = startScrollLeft - (moveEvent.pageX - startX) * 1.2
                }
                const onMouseUp = () => {
                  isDown = false
                  window.removeEventListener("mousemove", onMouseMove)
                  window.removeEventListener("mouseup", onMouseUp)
                }
                window.addEventListener("mousemove", onMouseMove)
                window.addEventListener("mouseup", onMouseUp)
              }}
              className="flex gap-5 overflow-x-scroll pb-4 snap-x snap-mandatory scroll-smooth scrollbar-hide cursor-grab active:cursor-grabbing select-none"
            >
            {items.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
                className="snap-start shrink-0 w-[85%] sm:w-[60%] md:w-[42%] lg:w-[30%]"
              >
                <div className="group h-full border border-gray-100 hover:border-[#855dda]/40 rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_8px_40px_rgba(133,93,218,0.08)] bg-white">

                  {/* Номер */}
                  <div className="text-[64px] font-semibold text-gray-100 leading-none mb-6 group-hover:text-[#855dda]/20 transition-colors duration-500">
                    {String(item.id).padStart(2, "0")}
                  </div>

                  {/* Разделитель */}
                  <div className="relative h-[1px] overflow-hidden mb-6">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div
                      className="absolute inset-0 bg-[#855dda] origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                  </div>

                  {/* Текст */}
                  <p className="text-gray-600 leading-relaxed text-base">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex gap-2 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`h-[3px] rounded-full transition-all duration-500 ${
                  active === i ? "w-8 bg-[#d66501]" : "w-4 bg-gray-200 hover:bg-gray-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* ===== BOTTOM ROW: trust + CTA ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-10 border-t border-gray-100"
        >
          <p className="text-gray-400 text-sm max-w-sm">
            Уже используют дизайнеры, маркетплейсы и мебельные бренды
          </p>

          <button className="inline-flex items-center gap-3 bg-[#d66501] hover:bg-[#bf5a01] text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.35)] hover:shadow-[0_10px_32px_rgba(214,101,1,0.45)] hover:scale-[1.02]">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M9 2v10M9 12l-3-3M9 12l3-3M3 16h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Скачать
          </button>
        </motion.div>

      </div>
    </section>
  )
}