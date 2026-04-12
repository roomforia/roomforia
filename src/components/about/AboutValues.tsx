"use client"

import { motion } from "framer-motion"

const items = [
  { num: "01", title: "Быстро продаём объекты", desc: "Визуализация ускоряет принятие решения — клиент видит результат до покупки", accent: "#855dda" },
  { num: "02", title: "Приводим клиентов со спросом", desc: "AI подбирает аудиторию которая уже ищет именно этот стиль и тип мебели", accent: "#d66501" },
  { num: "03", title: "Помогаем принять решение", desc: "Интерактивный дизайн снижает сомнения и увеличивает конверсию на 38%", accent: "#855dda" },
]

export default function AboutValues() {
  return (
    <section className="py-12 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 md:mb-14"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4">Наши ценности</p>
          <h2 className="text-[28px] md:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#1E1E1E] leading-tight">
            Три принципа<br className="hidden md:block" /> которые нами движут
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3 md:gap-4">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="relative rounded-3xl bg-[#f9f9f9] overflow-hidden"
            >
              <span className="absolute -left-2 top-1/2 -translate-y-1/2 font-bold leading-none select-none pointer-events-none"
                style={{ fontSize: "100px", color: `${item.accent}18` }}
              >{i + 1}</span>
              <div className="relative px-6 md:px-12 py-6 md:py-10">
                <h3 className="text-lg md:text-2xl font-semibold text-[#1E1E1E] mb-1 md:mb-2">{item.title}</h3>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
