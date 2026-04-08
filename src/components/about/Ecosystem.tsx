"use client"

import { motion } from "framer-motion"

const items = [
  {
    title: "Девелоперы",
    text: "Продают быстрее",
    image: "/images/about/ecosystem-dev.png",
  },
  {
    title: "Бренды",
    text: "Получают клиентов",
    image: "/images/about/ecosystem-brand.png",
  },
  {
    title: "Пользователи",
    text: "Принимают решения",
    image: "/images/about/ecosystem-user.png",
  },
]

export default function Ecosystem() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-semibold mb-12">
          Единая экосистема
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group bg-white/70 backdrop-blur rounded-3xl overflow-hidden"
            >
              <img src={item.image} className="group-hover:scale-105 transition duration-700" />

              <div className="p-5">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.text}</p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  )
}