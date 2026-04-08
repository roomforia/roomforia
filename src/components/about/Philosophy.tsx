"use client"

import { motion } from "framer-motion"

export default function Philosophy() {
  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-semibold mb-6">
            Мы не продаём технологии
          </h2>

          <p className="text-gray-500">
            Мы увеличиваем продажи. Всё остальное — инструмент.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="bg-[#C47A2C] text-white p-10 rounded-3xl"
        >
          «Результат — это продажи»
        </motion.div>

      </div>
    </section>
  )
}