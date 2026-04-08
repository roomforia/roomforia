"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

const plans = [
  {
    name: "Starter",
    desc: "Запуск и тест гипотезы",
    badge: "Старт",
    features: [
      "Подключение каталога",
      "До 1000 товаров",
      "Базовая генерация интерьеров",
      "Показ в одной стране",
    ],
    more: [
      "Обновление каталога",
      "Базовая аналитика",
      "Доступ к платформе",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    desc: "Канал продаж нового поколения",
    badge: "Рекомендуем",
    features: [
      "Приоритет в интерьерах",
      "Безлимит товаров",
      "Глобальное покрытие",
      "Поведенческая аналитика",
    ],
    more: [
      "Где товар показывается",
      "Какие интерьеры конвертят",
      "Какие комбинации продают",
      "Оптимизация показов",
      "Маркетинговые интеграции",
    ],
    highlight: true,
  },
]

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-32 px-4 relative overflow-hidden">

      {/* 🔥 BACKGROUND GLOW */}
      <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* ================= TITLE ================= */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">
            Новый канал продаж
          </h2>

          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Вы не размещаете рекламу — вы попадаете в готовый интерьер,
            где клиент уже выбирает и покупает
          </p>
        </div>

        {/* 🔥 VALUE STRIP */}
        <div className="grid md:grid-cols-3 gap-6 mb-20 text-center">

          <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md">
            <div className="text-2xl font-semibold text-[#C47A2C] mb-2">
              +38%
            </div>
            <p className="text-gray-500 text-sm">
              рост конверсии через интерьер
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md">
            <div className="text-2xl font-semibold text-[#C47A2C] mb-2">
              ×3 дольше
            </div>
            <p className="text-gray-500 text-sm">
              пользователь взаимодействует с товаром
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white/40 backdrop-blur-md">
            <div className="text-2xl font-semibold text-[#C47A2C] mb-2">
              Новый канал
            </div>
            <p className="text-gray-500 text-sm">
              без конкуренции и аукционов
            </p>
          </div>

        </div>

        {/* ================= CARDS ================= */}
        <div className="grid md:grid-cols-2 gap-8">

          {plans.map((plan, i) => {
            const isOpen = openIndex === i

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.2,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`relative p-10 rounded-3xl border transition-all duration-500
                  ${
                    plan.highlight
                      ? "bg-[#C47A2C] text-white shadow-[0_40px_100px_rgba(196,122,44,0.4)] scale-[1.03]"
                      : "bg-white border-gray-200 shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:-translate-y-2"
                  }
                `}
              >

                {/* BADGE */}
                <div className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full bg-black/10 backdrop-blur">
                  {plan.badge}
                </div>

                {/* NAME */}
                <div className="text-xl font-semibold mb-2">
                  {plan.name}
                </div>

                {/* DESC */}
                <div className="text-sm mb-8 opacity-80">
                  {plan.desc}
                </div>

                {/* FEATURES */}
                <ul className="space-y-3 mb-6 text-sm">
                  {plan.features.map((f, idx) => (
                    <li key={idx}>— {f}</li>
                  ))}
                </ul>

                {/* EXPAND */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`text-sm mb-6 underline underline-offset-4 transition
                    ${
                      plan.highlight
                        ? "text-white/80 hover:text-white"
                        : "text-gray-500 hover:text-black"
                    }
                  `}
                >
                  {isOpen ? "Скрыть детали" : "Все возможности"}
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.6 }}
                      className="overflow-hidden mb-6"
                    >
                      <ul className="space-y-2 text-sm opacity-80">
                        {plan.more.map((f, idx) => (
                          <li key={idx}>• {f}</li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* CTA */}
                <button
                  className={`w-full py-3 rounded-xl font-medium transition
                    ${
                      plan.highlight
                        ? "bg-white text-black hover:bg-gray-100"
                        : "bg-black text-white hover:bg-gray-800"
                    }
                  `}
                >
                  {plan.highlight
                    ? "Обсудить подключение"
                    : "Начать"}
                </button>

              </motion.div>
            )
          })}
        </div>

        {/* 🔥 FOOT NOTE */}
        <p className="text-center text-sm text-gray-400 mt-12">
          Подключение занимает от 3 дней • Без сложной интеграции
        </p>

      </div>
    </section>
  )
}