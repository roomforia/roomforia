"use client"

import { motion } from "framer-motion"

const titleChars = "Готовы увеличить".split("")
const titleChars2 = "продажи?".split("")

export default function FinalCTA() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto rounded-3xl bg-[#111] overflow-hidden relative"
      >
        {/* Глоу */}
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
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-8"
          >
            Roomforia для партнёров
          </motion.p>

          {/* Заголовок */}
          <div className="mb-12">
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

          {/* Подзаголовок + кнопки */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
              className="text-white/50 text-lg md:text-xl max-w-lg leading-relaxed"
            >
              Подключение занимает несколько дней. Мы поможем на каждом этапе.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.85 }}
              className="flex flex-col items-start md:items-end gap-4 flex-shrink-0"
            >
              <a
                href="https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"
                target="_blank"
                className="inline-flex px-10 py-5 rounded-full bg-[#d66501] text-white font-semibold text-lg hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_8px_32px_rgba(214,101,1,0.4)] hover:scale-[1.02]"
              >
                Скачать
              </a>
              <button className="text-sm text-white/30 hover:text-white/60 transition-colors duration-200 underline underline-offset-4">
                или обсудить подключение
              </button>
            </motion.div>
          </div>

          {/* Разделитель + статы */}
          <div className="mt-16 h-[1px] bg-white/10" />
          <div className="mt-8 grid grid-cols-3 gap-8">
            {[
              { num: "+45%", label: "рост заявок" },
              { num: "×3", label: "дольше с товаром" },
              { num: "3 дня", label: "до запуска" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.9 + i * 0.08 }}
              >
                <p className="text-xl md:text-2xl font-semibold text-white mb-1">{stat.num}</p>
                <p className="text-white/30 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
