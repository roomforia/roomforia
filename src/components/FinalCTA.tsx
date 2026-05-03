"use client"

import { motion } from "framer-motion"

const DEMO_URL = "https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"

const marqueeItems = ["Множество стилей", "Актуальные тренды", "Реальные товары", "Мощный ИИ"]

export default function FinalCTA() {
  return (
    <section className="bg-[#111] pt-20 md:pt-28 pb-0 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-white/30 text-xs uppercase tracking-[0.25em] font-medium mb-6"
        >
          Roomforia
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="text-[32px] md:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] text-white mb-4"
        >
          Больше не нужно искать.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="text-[20px] md:text-3xl lg:text-4xl font-medium tracking-tight leading-snug mb-6"
          style={{ background: "linear-gradient(90deg, #d66501, #e8920a)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          Скачайте приложение «Румфория» и создайте интерьер своей мечты
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          {["У себя", "Без ошибок", "Быстро", "С реальными товарами"].map((tag) => (
            <span key={tag} className="px-4 py-1.5 rounded-full border border-white/15 text-white/50 text-sm font-medium">
              {tag}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        >
          <a
            href={DEMO_URL}
            target="_blank"
            className="inline-flex px-10 py-4 rounded-full bg-[#d66501] text-white text-base font-semibold hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_4px_24px_rgba(214,101,1,0.4)] hover:scale-[1.03]"
          >
            Скачать приложение
          </a>
        </motion.div>

      </div>

      <div className="mt-12 md:mt-16 border-t border-b border-white/10 py-5 overflow-hidden">
        <div className="flex items-center whitespace-nowrap animate-marquee">
          {[...Array(8)].map((_, ri) =>
            marqueeItems.map((item, i) => (
              <span key={`${ri}-${i}`} className="flex items-center">
                <span className="text-white/35 text-sm font-medium tracking-wide px-10">{item}</span>
                <span className="text-white/20 text-xs">✦</span>
              </span>
            ))
          )}
        </div>
      </div>
    </section>
  )
}
