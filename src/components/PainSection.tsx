"use client"

import { motion } from "framer-motion"

const pains = [
  "Смотришь Pinterest, но в реальности всё выглядит иначе",
  "Не понимаешь, как сочетать мебель между собой",
  "Боишься потратить деньги и получить не тот результат",
  "Дизайнер долго, дорого и не всегда попадает",
]

const titleChars = "Обычно все выглядит так".split("")

export default function PainSection() {
  return (
    <section className="py-0 bg-white overflow-hidden">
      <div className="relative w-full">

        <div className="grid md:grid-cols-2 gap-0 min-h-[380px] md:min-h-[580px]">

          {/* LEFT — список болей */}
          <div className="flex flex-col justify-center px-6 md:px-10 py-8 md:py-16">
            <div className="max-w-xl">
              {pains.map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
                  className="group relative"
                >
                  <div className="relative h-[1px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div className="absolute inset-0 bg-[#855dda] origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }} />
                  </div>
                  <div className="flex items-start gap-5 py-7">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(133,93,218,0.12)" }}>
                      <span className="text-sm font-bold text-[#1E1E1E]">{i + 1}</span>
                    </div>
                    <p className="text-lg md:text-xl font-medium text-[#1E1E1E] leading-snug flex-1">{text}</p>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 + 0.3 }}
                      className="w-2 h-2 rounded-full bg-gray-200 flex-shrink-0 mt-2 group-hover:bg-[#855dda] transition-colors duration-500"
                    />
                  </div>
                </motion.div>
              ))}
              <div className="relative h-[1px] overflow-hidden">
                <div className="absolute inset-0 bg-gray-100" />
              </div>
            </div>
          </div>

          {/* RIGHT — картинка */}
          <div className="relative">
            <img src="/images/about/team/team-2.png" alt="Проблемы пользователей" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 flex items-center px-10">
              <div className="flex items-end flex-wrap overflow-hidden">
                {titleChars.map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                    className="text-3xl md:text-5xl lg:text-[56px] font-semibold tracking-tight text-white leading-[1.02]"
                    style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                  >
                    {char === " " ? "\u00A0" : char}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
