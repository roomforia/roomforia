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

const stats = [
  { num: "+38%", label: "рост конверсии через интерьер" },
  { num: "×3", label: "дольше взаимодействует с товаром" },
  { num: "3 дня", label: "до запуска без сложной интеграции" },
]

const titleChars = "Новый канал продаж".split("")

export default function Pricing() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-10 md:mb-16">
          {/* Мобиль */}
          <div className="md:hidden mb-3">
            <p className="text-[28px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.15]">Новый канал продаж</p>
          </div>
          {/* Десктоп */}
          <div className="hidden md:flex items-end flex-wrap overflow-hidden mb-4">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl"
          >
            Вы не размещаете рекламу — вы попадаете в готовый интерьер, где клиент уже выбирает и покупает
          </motion.p>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-4 mb-16">
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="bg-gray-50 rounded-2xl px-6 py-5"
            >
              <div className="text-2xl font-semibold text-[#855dda] mb-1">{item.num}</div>
              <p className="text-gray-500 text-sm">{item.label}</p>
            </motion.div>
          ))}
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, i) => {
            const isOpen = openIndex === i
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="relative rounded-3xl overflow-hidden"
                style={{
                  backgroundColor: plan.highlight ? "#111" : "#f9f9f9",
                  border: plan.highlight ? "none" : "1px solid #f0f0f0",
                }}
              >
                {plan.highlight && (
                  <>
                    <div
                      className="absolute top-0 left-0 w-[300px] h-[300px] rounded-full blur-[80px] pointer-events-none"
                      style={{ backgroundColor: "#855dda", opacity: 0.12, transform: "translate(-30%, -30%)" }}
                    />
                    <div
                      className="absolute bottom-0 right-0 w-[200px] h-[200px] rounded-full blur-[60px] pointer-events-none"
                      style={{ backgroundColor: "#d66501", opacity: 0.08, transform: "translate(20%, 20%)" }}
                    />
                  </>
                )}

                <div className="relative p-8 md:p-10">
                  <div
                    className="absolute top-6 right-6 text-xs px-3 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: plan.highlight ? "rgba(133,93,218,0.2)" : "#f0f0f0",
                      color: plan.highlight ? "#855dda" : "#999",
                    }}
                  >
                    {plan.badge}
                  </div>

                  <div
                    className="text-2xl font-semibold mb-2"
                    style={{ color: plan.highlight ? "white" : "#1E1E1E" }}
                  >
                    {plan.name}
                  </div>

                  <div
                    className="text-sm mb-8"
                    style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : "#9ca3af" }}
                  >
                    {plan.desc}
                  </div>

                  <ul className="space-y-3 mb-6">
                    {plan.features.map((f, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: plan.highlight ? "#855dda" : "#d1d5db" }}
                        />
                        <span
                          className="text-sm"
                          style={{ color: plan.highlight ? "rgba(255,255,255,0.7)" : "#6b7280" }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="text-sm mb-6 transition-opacity hover:opacity-70"
                    style={{ color: plan.highlight ? "#855dda" : "#9ca3af" }}
                  >
                    {isOpen ? "Скрыть детали" : "Все возможности →"}
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden mb-6"
                      >
                        <ul className="space-y-2">
                          {plan.more.map((f, idx) => (
                            <li key={idx} className="flex items-center gap-3">
                              <div
                                className="w-1 h-1 rounded-full flex-shrink-0"
                                style={{ backgroundColor: plan.highlight ? "#855dda" : "#e5e7eb" }}
                              />
                              <span
                                className="text-sm"
                                style={{ color: plan.highlight ? "rgba(255,255,255,0.5)" : "#9ca3af" }}
                              >
                                {f}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    className="w-full py-3.5 rounded-2xl font-medium text-sm transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      backgroundColor: plan.highlight ? "#855dda" : "#1E1E1E",
                      color: "white",
                      boxShadow: plan.highlight ? "0 6px 24px rgba(133,93,218,0.4)" : "none",
                    }}
                  >
                    {plan.highlight ? "Обсудить подключение" : "Начать"}
                  </button>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-gray-300 mt-8"
        >
          Подключение занимает от 3 дней · Без сложной интеграции
        </motion.p>

      </div>
    </section>
  )
}
