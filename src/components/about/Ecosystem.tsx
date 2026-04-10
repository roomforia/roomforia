"use client"

import { motion } from "framer-motion"

const items = [
  {
    title: "Девелоперы",
    text: "Продают быстрее — клиенты видят квартиру с мебелью ещё до сдачи",
    image: "/images/about/ecosystem-dev.png",
    accent: "#855dda",
  },
  {
    title: "Бренды",
    text: "Получают клиентов напрямую — товар в реальном интерьере конвертирует лучше каталога",
    image: "/images/about/ecosystem-brand.png",
    accent: "#d66501",
  },
  {
    title: "Пользователи",
    text: "Принимают решения уверенно — видят результат до покупки и ремонта",
    image: "/images/about/ecosystem-user.png",
    accent: "#855dda",
  },
]

const titleChars = "Единая экосистема".split("")

export default function Ecosystem() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-end flex-wrap overflow-hidden mb-4">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="text-gray-400 text-lg md:text-xl"
          >
            Три стороны — одна платформа
          </motion.p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-gray-50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              {/* Картинка */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Контент */}
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.accent }} />
                  <h3 className="font-semibold text-lg text-[#1E1E1E]">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
