"use client"

import { motion } from "framer-motion"

export default function FinalCTA() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">

      {/* glow */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="max-w-2xl mx-auto text-center relative z-10"
      >
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 leading-tight">
          Готовы увеличить продажи?
        </h2>

        {/* SUB */}
        <p className="text-gray-500 mb-10 text-lg leading-relaxed">
          Подключение занимает несколько дней. Мы поможем на каждом этапе.
        </p>

        {/* PRIMARY CTA */}
        <button className="bg-[#C47A2C] text-white px-8 py-4 rounded-2xl text-lg font-medium shadow-[0_10px_40px_rgba(196,122,44,0.4)] hover:shadow-[0_20px_60px_rgba(196,122,44,0.6)] transition-all duration-500 hover:-translate-y-1">
          Стать партнёром
        </button>

        {/* SECONDARY */}
        <div className="mt-6">
          <button className="text-sm text-gray-500 hover:text-black transition underline underline-offset-4">
            или обсудить подключение
          </button>
        </div>
      </motion.div>
    </section>
  )
}