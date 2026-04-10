"use client"

import { motion } from "framer-motion"

const advantages = [
  "Экономите деньги: меньше случайных и ошибочных покупок",
  "Получаете решение под своё пространство, а не абстрактные идеи",
  "Получаете полную свободу выбора: стили, цвета, мебель и материалы можно менять и сравнивать",
  "Сразу переходите к выбору мебели и материалов без лишнего поиска",
]

const line1 = "Преимущества".split("")

export default function ComparisonSection() {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== BANNER ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-3xl overflow-hidden mb-20 shadow-[0_24px_60px_rgba(0,0,0,0.1)]"
        >
          <img
            src="/images/comparison/comparison.jpg"
            alt="Roomforia — преимущества"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* ===== HEADER ===== */}
        <div className="mb-16">

          {/* "Преимущества" — побуквенно */}
          <div className="flex items-end flex-wrap overflow-hidden mb-2">
            {line1.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.04,
                }}
                className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* "Roomforia" — symphony */}
          <motion.div
            initial={{ opacity: 0, x: -24, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{
              duration: 0.75,
              ease: [0.22, 1, 0.36, 1],
              delay: line1.length * 0.04 + 0.05,
            }}
            className="mb-6"
          >
            <span
              className="text-5xl md:text-7xl lg:text-[88px] tracking-tight text-[#d66501] leading-[1.02]"
              style={{ fontFamily: "symphonyregular, serif" }}
            >
              Roomforia
            </span>
          </motion.div>

          {/* Подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: line1.length * 0.04 + 0.25,
            }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl"
          >
            Быстро и понятно на каждом этапе. Профессиональный результат за минуты.
          </motion.p>
        </div>

        {/* ===== ADVANTAGES LIST ===== */}
        <div className="flex flex-col mb-16">
          {advantages.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.65,
                ease: [0.22, 1, 0.36, 1],
                delay: i * 0.1,
              }}
              className="group relative"
            >
              {/* Разделитель с hover */}
              <div className="relative h-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gray-100" />
                <div
                  className="absolute inset-0 bg-[#855dda] origin-left scale-x-0 group-hover:scale-x-100"
                  style={{ transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
                />
              </div>

              <div className="flex items-start gap-5 py-7">
                {/* Номер */}
                <span className="text-xs font-mono text-gray-300 mt-1 flex-shrink-0 w-6 group-hover:text-[#855dda] transition-colors duration-500">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Текст */}
                <p className="text-lg md:text-xl font-medium text-[#1E1E1E] leading-snug flex-1">
                  {text}
                </p>

                {/* Точка */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    ease: [0.22, 1, 0.36, 1],
                    delay: i * 0.1 + 0.3,
                  }}
                  className="w-2 h-2 rounded-full bg-gray-200 flex-shrink-0 mt-2 group-hover:bg-[#855dda] transition-colors duration-500"
                />
              </div>
            </motion.div>
          ))}

          {/* Финальный разделитель */}
          <div className="relative h-[1px] overflow-hidden">
            <div className="absolute inset-0 bg-gray-100" />
          </div>
        </div>

        {/* ===== CTA BUTTON ===== */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
        >
          <button className="inline-flex items-center bg-[#d66501] hover:bg-[#bf5a01] text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.35)] hover:shadow-[0_10px_32px_rgba(214,101,1,0.45)] hover:scale-[1.02]">
          
              <path d="M9 2v10M9 12l-3-3M9 12l3-3M3 16h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            Скачать
          </button>
        </motion.div>

      </div>
    </section>
  )
}