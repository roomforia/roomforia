"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const titleChars = "Как производитель мебели".split("")

export default function CaseStudy() {
  return (
    <section className="py-10 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="mb-8 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4 md:mb-6"
          >
            Реальный кейс
          </motion.p>

          {/* Мобиль */}
          <div className="md:hidden mb-3">
            <p className="text-[26px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.15]">Как производитель мебели</p>
            <p className="text-[26px] tracking-tight text-[#d66501] leading-[1.15]" style={{ fontFamily: "symphonyregular, serif" }}>увеличил заявки на 45%</p>
          </div>

          {/* Десктоп */}
          <div className="hidden md:block">
            <div className="flex items-end flex-wrap overflow-hidden mb-1">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.035 }}
                  className="text-6xl lg:text-[72px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.035 + 0.05 }}
            >
              <span className="text-6xl lg:text-[72px] tracking-tight text-[#d66501] leading-[1.02]" style={{ fontFamily: "symphonyregular, serif" }}>
                увеличил заявки на 45%
              </span>
            </motion.div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-gray-400 text-sm md:text-lg leading-relaxed mb-6 md:mb-12">
              После интеграции товаров в Roomforia клиенты начали видеть мебель в реальных интерьерах, а не в каталоге. Это снизило сомнения и ускорило принятие решения.
            </p>

            <div className="flex flex-col">
              {[
                { num: "+45%", label: "заявок", accent: "#855dda" },
                { num: "↓30%", label: "время принятия решения", accent: "#d66501" },
                { num: "+60%", label: "вовлечённость", accent: "#855dda" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-[1px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div
                      className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: item.accent, transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 py-4 md:py-6">
                    <span
                      className="text-2xl md:text-4xl font-semibold flex-shrink-0 w-24 md:w-32"
                      style={{ color: item.accent }}
                    >
                      {item.num}
                    </span>
                    <span className="text-sm md:text-lg text-gray-500">{item.label}</span>
                  </div>
                </motion.div>
              ))}
              <div className="h-[1px] bg-gray-100" />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="relative group rounded-3xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/cases/case-1.png"
              alt="Кейс"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
