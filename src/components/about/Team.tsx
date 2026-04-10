"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const team = [
  { img: "/images/about/team/team-1.png", role: "Product", desc: "Опыт в мебельной индустрии и SAP", accent: "#855dda" },
  { img: "/images/about/team/team-2.png", role: "Engineering", desc: "Высоконагруженные сервисы", accent: "#d66501" },
  { img: "/images/about/team/team-3.png", role: "UX/UI", desc: "Продукты с миллионами пользователей", accent: "#855dda" },
  { img: "/images/about/team/team-4.png", role: "3D", desc: "Работа с мебельными брендами", accent: "#d66501" },
  { img: "/images/about/team/team-5.png", role: "B2B", desc: "SaaS и рынок строительства", accent: "#855dda" },
  { img: "/images/about/team/team-6.png", role: "AI", desc: "ML и генеративные модели", accent: "#d66501" },
]

const titleChars = "Команда, говорящая".split("")

export default function Team() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-16">
          <div className="flex items-end flex-wrap overflow-hidden mb-1">
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
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.04 + 0.05 }}
          >
            <span className="text-5xl md:text-7xl lg:text-[82px] tracking-tight text-[#d66501] leading-[1.02]">
              с бизнесом
            </span>
          </motion.div>
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="group"
            >
              {/* Фото */}
              <div className="relative overflow-hidden rounded-3xl mb-5" style={{ aspectRatio: "3/4" }}>
                <Image
                  src={m.img}
                  alt={m.role}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                {/* Оверлей снизу */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Роль — появляется при hover */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                  <span
                    className="text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full text-white"
                    style={{ backgroundColor: m.accent }}
                  >
                    {m.role}
                  </span>
                </div>
              </div>

              {/* Текст */}
              <div className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ backgroundColor: m.accent }}
                />
                <div>
                  <div className="font-semibold text-[#1E1E1E] text-lg mb-1">{m.role}</div>
                  <div className="text-sm text-gray-400">{m.desc}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
