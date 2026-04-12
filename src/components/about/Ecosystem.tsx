"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const items = [
  { title: "Девелоперы", text: "Продают быстрее — клиенты видят квартиру с мебелью ещё до сдачи", image: "/images/about/ecosystem-dev.png", accent: "#855dda" },
  { title: "Бренды", text: "Получают клиентов напрямую — товар в реальном интерьере конвертирует лучше каталога", image: "/images/about/ecosystem-brand.png", accent: "#d66501" },
  { title: "Пользователи", text: "Принимают решения уверенно — видят результат до покупки и ремонта", image: "/images/about/ecosystem-user.png", accent: "#855dda" },
]

const titleChars = "Единая экосистема".split("")

export default function Ecosystem() {
  return (
    <section className="py-12 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="mb-8 md:mb-16">
          {/* Мобиль */}
          <div className="md:hidden mb-2">
            <p className="text-[28px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.1]">Единая экосистема</p>
          </div>
          {/* Десктоп */}
          <div className="hidden md:flex flex-wrap items-end overflow-hidden mb-3">
            {titleChars.map((char, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >{char === " " ? "\u00A0" : char}</motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="text-sm md:text-base text-gray-400"
          >
            Три стороны — одна платформа
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              className="group rounded-3xl overflow-hidden bg-gray-50 hover:shadow-[0_8px_40px_rgba(0,0,0,0.08)] transition-all duration-500"
            >
              <div className="relative overflow-hidden h-44 md:h-56">
                <Image src={item.image} alt={item.title} fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-4 md:p-6">
                <div className="flex items-center gap-2 mb-1 md:mb-3">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.accent }} />
                  <h3 className="font-semibold text-sm md:text-lg text-[#1E1E1E]">{item.title}</h3>
                </div>
                <p className="text-xs md:text-sm text-gray-400 leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
