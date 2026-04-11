"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const titleChars = "Дизайн, который".split("")
const titleChars2 = "продаёт".split("")

export default function AboutHero() {
  return (
    <section className="pt-20 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADING */}
        <div className="mb-16 pt-8">
          <div className="flex items-end flex-wrap overflow-hidden mb-1">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.04 }}
                className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div className="flex items-end flex-wrap overflow-hidden mb-10">
            {titleChars2.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 60, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (titleChars.length + i) * 0.04 }}
                className="text-5xl md:text-7xl lg:text-[88px] font-semibold tracking-tight text-[#d66501] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Подзаголовок + кнопка в одну строку */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
              className="text-gray-400 text-lg md:text-xl max-w-xl leading-relaxed"
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
              <a
                href="https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"
                target="_blank"
                className="px-8 py-4 rounded-full bg-[#d66501] text-white font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:scale-[1.02]"
              >
                Скачать
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* HERO IMAGE — edge to edge */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
        className="w-full px-4 md:px-8"
      >
        <div className="relative w-full h-[480px] md:h-[600px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
          <Image
            src="/images/about/about-hero.png"
            alt="Roomforia"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}
