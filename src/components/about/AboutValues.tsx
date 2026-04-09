"use client"

import { motion } from "framer-motion"
import { Clock, Users, CheckCircle } from "lucide-react"

const items = [
  { icon: Clock, title: "Быстро продаём объекты" },
  { icon: Users, title: "Приводим клиентов со спросом" },
  { icon: CheckCircle, title: "Помогаем принять решение" },
]

export default function AboutValues() {
  return (
    <section className="py-16">

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {items.map((item, i) => {
          const Icon = item.icon

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: i * 0.2 }}
              className="bg-[#2B2B2B] text-white p-6 rounded-2xl hover:-translate-y-1 transition"
            >
              <Icon className="mb-4 opacity-80" />
              <p>{item.title}</p>
            </motion.div>
          )
        })}

      </div>
    </section>
  )
}