"use client"

import { motion } from "framer-motion"

const pains = [
  "Смотрите Pinterest, собираете идеи и референсы",
  "Пытаетесь представить или нарисовать, как это будет выглядеть у вас",
  "Ищете что-то похожее, стараясь недалеко уйти от визуализации",
  "Не понимаете, как в вашем дизайне будут сочетаться мебель и материалы между собой",
  "Берёте компромиссные варианты, потому что точно воплотить задуманное не вышло",
  "Боитесь потратить деньги и не получить нужный результат",
]

export default function PainSection() {
  return (
    <section className="py-10 md:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-[28px] md:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.1] mb-8 md:mb-12"
        >
          Обычно всё выглядит примерно так:
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
          {pains.map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.07 }}
              className="flex items-start gap-4 bg-gray-50 rounded-2xl px-5 py-5"
            >
              <span className="text-xs font-mono text-gray-300 flex-shrink-0 mt-0.5 w-5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="text-sm md:text-base text-[#1E1E1E] leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm md:text-base text-gray-400 border-t border-gray-100 pt-6 leading-relaxed"
        >
          В итоге — лишние расходы, переделки и ощущение, что можно было сделать лучше.
        </motion.p>

      </div>
    </section>
  )
}
