"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const regions = [
  { name: "Россия", status: "Запуск и первые проекты", accent: "#855dda" },
  { name: "Беларусь", status: "Открытие офиса", accent: "#d66501" },
  { name: "СНГ", status: "Масштабирование рынка", accent: "#855dda" },
]

const titleChars = "Масштабируемся".split("")

export default function Expansion() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">

          {/* LEFT */}
          <div>
            <div className="flex items-end flex-wrap overflow-hidden mb-12">
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

            <div className="flex flex-col">
              {regions.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="group relative"
                >
                  <div className="relative h-[1px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div
                      className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: r.accent, transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                  </div>
                  <div className="flex items-center justify-between py-6">
                    <div>
                      <div className="text-xl font-semibold text-[#1E1E1E] mb-1">{r.name}</div>
                      <div className="text-sm text-gray-400">{r.status}</div>
                    </div>
                    <div
                      className="w-2 h-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ backgroundColor: r.accent }}
                    />
                  </div>
                </motion.div>
              ))}
              <div className="h-[1px] bg-gray-100" />
            </div>
          </div>

          {/* RIGHT — карта */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/about/map-bg.png"
              alt="Карта"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
