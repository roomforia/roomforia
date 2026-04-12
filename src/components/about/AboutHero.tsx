"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const DEMO_URL = "https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"

// Градиент оранжевый→фиолетовый как на главной
function gradientColor(i: number, total: number) {
  const pct = i / (total - 1)
  const r = Math.round(214 + (133 - 214) * pct)
  const g = Math.round(101 + (93 - 101) * pct)
  const b = Math.round(1 + (218 - 1) * pct)
  return `rgb(${r},${g},${b})`
}

const line1 = "Дизайн, который".split("")
const line2 = "продаёт".split("")
const totalChars = line1.length + line2.length

export default function AboutHero() {
  return (
    <section className="pt-20 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="mb-10 md:mb-16 pt-8">

          {/* МОБИЛЬ — простой текст с градиентом */}
          <div className="md:hidden mb-8">
            <p className="text-[36px] font-bold tracking-tight leading-[1.1] mb-1"
              style={{ background: "linear-gradient(90deg, #d66501, #c05010)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Дизайн, который
            </p>
            <p className="text-[36px] font-bold tracking-tight leading-[1.1]"
              style={{ background: "linear-gradient(90deg, #a0508a, #855dda)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              продаёт
            </p>
          </div>

          {/* ДЕСКТОП — побуквенно с градиентом, line1 и line2 в одном потоке с переносом */}
          <div className="hidden md:flex flex-wrap items-end overflow-hidden mb-10">
            {[...line1, " ", ...line2].map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -16, filter: "blur(12px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.04 }}
                className="text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.1]"
                style={{
                  color: gradientColor(i, totalChars),
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.28em" : "auto",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
              className="text-gray-400 text-base md:text-xl max-w-xl leading-relaxed"
            >
              Через передовую визуализацию мы создаём инструмент для дизайнеров,
              где эстетика и функциональность напрямую ведут к росту продаж.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
              className="flex-shrink-0"
            >
              <a href={DEMO_URL} target="_blank"
                className="px-8 py-3 md:py-4 rounded-full bg-[#d66501] text-white font-medium text-sm md:text-base hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:scale-[1.02]"
              >
                Скачать
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
        className="w-full px-4 md:px-8"
      >
        <div className="relative w-full h-[280px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
          <Image src="/images/about/about-hero.png" alt="Roomforia" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
