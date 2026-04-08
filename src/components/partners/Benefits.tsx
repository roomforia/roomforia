"use client"

import { motion } from "framer-motion"

const items = [
  {
    value: "+45%",
    title: "рост заявок",
    desc: "Клиенты быстрее принимают решение, когда видят товар в интерьере",
  },
  {
    value: "74%",
    title: "хотят примерить",
    desc: "Покупатели хотят увидеть товар в своём пространстве перед покупкой",
  },
  {
    value: "88%",
    title: "готовы купить",
    desc: "Визуализация снижает сомнения и ускоряет принятие решения",
  },
]

export default function Benefits() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">

      {/* subtle warm background glow (в цвет бренда) */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto text-center relative z-10">

        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl font-semibold mb-20 leading-tight">
          Почему это увеличивает продажи
        </h2>

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-8">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 1.2,
                delay: i * 0.25,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative p-8 rounded-3xl bg-white border border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2"
            >
              {/* VALUE */}
              <div className="text-4xl md:text-5xl font-semibold mb-4 text-[#C47A2C] tracking-tight">
                {item.value}
              </div>

              {/* TITLE */}
              <div className="font-medium mb-3 text-lg text-black">
                {item.title}
              </div>

              {/* DESC */}
              <p className="text-gray-500 text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* subtle hover light */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-100 transition duration-500 bg-gradient-to-t from-[#C47A2C]/5 to-transparent pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* TRUST LINE */}
        <p className="mt-20 text-gray-400 text-sm">
          Основано на поведении пользователей в e-commerce и дизайне интерьеров
        </p>

      </div>
    </section>
  )
}