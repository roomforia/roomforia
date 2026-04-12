"use client"

import { motion } from "framer-motion"

const industries = [
  { src: "/images/about/industry-furniture.png", label: "Мебель" },
  { src: "/images/about/industry-light.png", label: "Свет" },
  { src: "/images/about/industry-materials.png", label: "Материалы" },
  { src: "/images/about/industry-dev.png", label: "Девелопмент" },
]

export default function Industries() {
  return (
    <section className="py-12 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="mb-10 md:mb-16">
          {/* Мобиль */}
          <div className="md:hidden mb-2">
            <p className="text-[32px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.1]">Работаем с лидерами</p>
            <p className="text-[32px] font-semibold tracking-tight text-[#d66501] leading-[1.1]">отрасли</p>
          </div>
          {/* Десктоп */}
          <div className="hidden md:block">
            <div className="flex items-end flex-wrap overflow-hidden mb-1">
              {"Работаем с лидерами".split("").map((char, i) => (
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
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            >
              <span className="text-7xl lg:text-[82px] font-semibold tracking-tight text-[#d66501] leading-[1.02]">отрасли</span>
            </motion.div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {industries.map((item, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group relative rounded-2xl md:rounded-3xl overflow-hidden"
              style={{ aspectRatio: "3/4" }}
            >
              <img src={item.src} alt={item.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="text-white text-xs md:text-sm font-medium">{item.label}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
