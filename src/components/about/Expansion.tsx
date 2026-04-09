"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const regions = [
  { name: "Россия", status: "Запуск и первые проекты" },
  { name: "Беларусь", status: "Открытие офиса" },
  { name: "СНГ", status: "Масштабирование рынка" },
]

export default function Expansion() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-semibold mb-10">
            Масштабируемся
          </h2>

          <div className="space-y-6">
            {regions.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.2 }}
                className="p-5 rounded-xl bg-white/60 backdrop-blur border border-black/5"
              >
                <div className="text-lg font-medium">{r.name}</div>
                <div className="text-sm text-black/50">{r.status}</div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <Image
            src="/images/about/map-bg.png"
            alt="map"
            width={800}
            height={600}
            className="rounded-2xl shadow-xl"
          />

          {/* glow */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#C47A2C] opacity-20 blur-3xl" />
        </motion.div>

      </div>
    </section>
  )
}