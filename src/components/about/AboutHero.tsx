"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"

export default function AboutHero() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -60])

  return (
    <section ref={ref} className="py-28 relative overflow-hidden">

      <div className="absolute top-1/2 left-1/2 w-[900px] h-[900px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-6xl font-semibold mb-6 leading-tight">
            Мы строим
            <br />
            инфраструктуру продаж
            <br />
            в строительстве
          </h1>

          <p className="text-gray-500 text-lg mb-8 max-w-lg">
            Roomforia объединяет рынок в единую систему, где визуализация = конверсия.
          </p>

          <button className="bg-[#C47A2C] text-white px-6 py-3 rounded-xl hover:scale-105 transition">
            Запросить демо
          </button>
        </motion.div>

        <motion.div style={{ y }}>
          <img src="/images/about/about-hero.png" className="rounded-3xl shadow-2xl" />
        </motion.div>

      </div>
    </section>
  )
}