"use client"

import { motion } from "framer-motion"

const titleChars = "Мы не продаём".split("")

export default function Philosophy() {
  return (
    <section className="py-12 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-center">

          <div>
            {/* Мобиль */}
            <div className="md:hidden mb-5">
              <p className="text-[28px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.1]">Мы не продаём</p>
              <p className="text-[28px] font-semibold tracking-tight text-[#d66501] leading-[1.1]">технологии</p>
            </div>
            {/* Десктоп */}
            <div className="hidden md:block">
              <div className="flex items-end flex-wrap overflow-hidden mb-1">
                {titleChars.map((char, i) => (
                  <motion.span key={i}
                    initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                    className="text-6xl lg:text-[72px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                    style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                  >{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                className="mb-8"
              >
                <span className="text-6xl lg:text-[72px] font-semibold tracking-tight text-[#d66501] leading-[1.02]">технологии</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
              className="text-sm md:text-base text-gray-400 leading-relaxed"
            >
              Мы увеличиваем продажи. Всё остальное — инструмент.
              Технология существует только тогда, когда она решает реальную задачу бизнеса.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative rounded-3xl bg-[#111] overflow-hidden p-7 md:p-14"
          >
            <div className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none" style={{ backgroundColor: "#855dda", opacity: 0.12, transform: "translate(-30%, -30%)" }} />
            <div className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full blur-[60px] pointer-events-none" style={{ backgroundColor: "#d66501", opacity: 0.1, transform: "translate(20%, 20%)" }} />
            <div className="relative">
              <p className="text-white/30 text-xs uppercase tracking-[0.2em] font-medium mb-4 md:mb-6">Наш принцип</p>
              <p className="text-white text-lg md:text-3xl font-semibold leading-snug mb-6 md:mb-8">
                «Результат — это продажи. Всё остальное — просто инструмент.»
              </p>
              <div className="h-[1px] bg-white/10 mb-4 md:mb-6" />
              <p className="text-white/40 text-xs md:text-sm leading-relaxed">
                Мы измеряем успех только одним критерием — выросли ли продажи у наших партнёров.
                Это единственная метрика, которая имеет значение.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
