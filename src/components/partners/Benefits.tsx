"use client"

import { motion } from "framer-motion"

const stats = [
  { num: "+45%", label: "рост заявок", desc: "Клиенты быстрее принимают решение, когда видят товар в интерьере" },
  { num: "74%", label: "хотят примерить", desc: "Покупатели хотят увидеть товар в своём пространстве перед покупкой" },
  { num: "88%", label: "готовы купить", desc: "Визуализация снижает сомнения и ускоряет принятие решения" },
]

export default function Benefits() {
  return (
    <section className="py-16 px-4 md:px-8 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-7xl mx-auto rounded-3xl bg-[#111] overflow-hidden relative"
      >
        {/* Глоу */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none"
          style={{ backgroundColor: "#855dda", opacity: 0.1, transform: "translate(-30%, -30%)" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] pointer-events-none"
          style={{ backgroundColor: "#d66501", opacity: 0.08, transform: "translate(20%, 20%)" }}
        />

        <div className="relative px-10 md:px-16 py-16 md:py-20">

          {/* Заголовок */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-14"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-white/30 font-medium mb-4">
              Почему это работает
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight tracking-tight">
              Цифры говорят
              <br />
              <span className="text-[#d66501]">сами за себя</span>
            </h2>
          </motion.div>

          {/* Статы */}
          <div className="grid md:grid-cols-3 gap-0">
            {stats.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="group relative py-8 md:py-0"
              >
                {/* Вертикальный разделитель */}
                {i > 0 && (
                  <div className="hidden md:block absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
                )}
                {/* Горизонтальный разделитель мобайл */}
                {i > 0 && (
                  <div className="md:hidden h-[1px] bg-white/10 mb-8" />
                )}

                <div className="md:px-12">
                  <div
                    className="text-5xl md:text-6xl font-semibold mb-3 leading-none"
                    style={{ color: i % 2 === 0 ? "#855dda" : "#d66501" }}
                  >
                    {item.num}
                  </div>
                  <div className="text-white font-medium text-lg mb-2">{item.label}</div>
                  <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Разделитель */}
          <div className="mt-14 h-[1px] bg-white/10" />

          {/* Подпись */}
          <p className="mt-6 text-white/25 text-xs">
            Основано на поведении пользователей в e-commerce и дизайне интерьеров
          </p>
        </div>
      </motion.div>
    </section>
  )
}
