"use client"

import { motion } from "framer-motion"

const pains = [
  "Смотришь Pinterest, но в реальности всё выглядит иначе",
  "Не понимаешь, как сочетать мебель между собой",
  "Боишься потратить деньги и получить не тот результат",
  "Дизайнер долго, дорого и не всегда попадает",
]

const titleChars = "Знакомо?".split("")

export default function PainSection() {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== HEADER ===== */}
        <div className="mb-16">
          <div className="flex items-end flex-wrap overflow-hidden mb-4">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.05,
                }}
                className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
              delay: titleChars.length * 0.05 + 0.1,
            }}
            className="text-gray-400 text-lg md:text-xl"
          >
            Мы сделали Roomforia именно из-за этого
          </motion.p>
        </div>

        {/* ===== CONTENT ===== */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">

          {/* LEFT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative rounded-3xl overflow-hidden"
          >
            <img
              src="/images/about/team/team-2.png"
              alt="Боли пользователей"
              className="w-full h-[360px] md:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>

          {/* RIGHT — PAINS LIST */}
          <div className="flex flex-col">
            {pains.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: i * 0.12,
                }}
                className="group relative"
              >
                {/* Разделитель сверху с hover-эффектом */}
                <div className="relative h-[1px] overflow-hidden">
                  {/* базовая линия */}
                  <div className="absolute inset-0 bg-gray-100" />
                  {/* фиолетовая линия поверх — растёт слева */}
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
                  <p className="text-lg md:text-xl font-medium text-[#1E1E1E] leading-snug flex-1 group-hover:text-[#1E1E1E] transition-colors duration-300">
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
                      delay: i * 0.12 + 0.3,
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

        </div>
      </div>
    </section>
  )
}