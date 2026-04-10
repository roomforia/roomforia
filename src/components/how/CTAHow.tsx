"use client"

import { motion } from "framer-motion"

const titleChars = "Создай интерьер".split("")
const titleChars2 = "за 30 секунд".split("")

export default function CTAHow() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto rounded-3xl bg-[#111] overflow-hidden relative"
      >
        {/* Декоративные глоу */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: "#855dda", opacity: 0.12, transform: "translate(-30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ backgroundColor: "#d66501", opacity: 0.1, transform: "translate(20%, 20%)" }}
        />

        <div className="relative px-10 md:px-16 lg:px-20 py-20 md:py-28">

          {/* Лейбл */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-white/40 font-medium">
              Roomforia
            </span>
          </motion.div>

          {/* Заголовок побуквенно */}
          <div className="mb-4">
            <div className="flex flex-wrap items-end overflow-hidden mb-1">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                  className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-white leading-[1.02]"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            <div className="flex flex-wrap items-end overflow-hidden">
              {titleChars2.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: (titleChars.length + i) * 0.04 }}
                  className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#d66501] leading-[1.02]"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Подзаголовок + кнопка в одну строку на десктопе */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mt-12">

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed"
            >
              Без дизайнера. Без опыта. Просто загрузи фото и получи готовый результат с реальной мебелью.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
              className="flex flex-col items-start md:items-end gap-4 flex-shrink-0"
            >
              <button className="inline-flex items-center gap-3 px-10 py-5 rounded-full bg-[#d66501] text-white font-semibold text-lg hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_8px_32px_rgba(214,101,1,0.4)] hover:shadow-[0_12px_40px_rgba(214,101,1,0.5)] hover:scale-[1.02]">
                Скачать
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M9 2v10M9 12l-3-3M9 12l3-3M3 16h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <span className="text-white/25 text-sm">
                Уже скоро · Без регистрации на старте
              </span>
            </motion.div>
          </div>

          {/* Разделитель */}
          <div className="mt-16 h-[1px] bg-white/10" />

          {/* Нижняя строка со статами */}
          <div className="mt-8 grid grid-cols-3 gap-8">
            {[
              { num: "×10", label: "быстрее дизайнера" },
              { num: "−90%", label: "экономия бюджета" },
              { num: "30с", label: "до готового дизайна" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.9 + i * 0.08 }}
              >
                <p className="text-2xl md:text-3xl font-semibold text-white mb-1">{stat.num}</p>
                <p className="text-white/40 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </motion.div>
    </section>
  )
}