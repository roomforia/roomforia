"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const DEMO_URL = "https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"

const faqs = [
  {
    q: "Что нужно, чтобы начать?",
    a: "Скачать приложение, загрузить фото комнаты или планировки либо сделать скан помещения с помощью камеры смартфона. Этого достаточно, чтобы получить результат и посмотреть варианты дизайна под своё пространство.",
  },
  {
    q: "Это сложно? Нужно разбираться?",
    a: "Нет. Вы просто добавляете комнату, отвечаете на вопросы приложения и смотрите варианты. Всё остальное приложение сделает за вас.",
  },
  {
    q: "Этим можно пользоваться без дизайнера?",
    a: "Да. Румфория помогает разобраться со стилем, вариантами и направлением без необходимости подключать специалиста.",
  },
  {
    q: "Можно ли сделать всё по одному фото?",
    a: "Да, можно начать и с одной фотографии. Если есть планировка или вы можете отсканировать комнату с помощью камеры смартфона, результат будет точнее.",
  },
  {
    q: "Нужны ли точные размеры?",
    a: "Не обязательно. Но чем больше исходных данных, тем точнее результат.",
  },
  {
    q: "Это реальные товары или просто картинки?",
    a: "В проектах используются только реальные позиции из партнёрских каталогов. Все их можно открыть, посмотреть и приобрести.",
  },
  {
    q: "Можно ли сразу перейти к покупке?",
    a: "Да. Из проекта в приложении можно перейти к товару, а затем в магазин для покупки. Вам ничего не придётся искать самостоятельно.",
  },
  {
    q: "Можно использовать для любого помещения?",
    a: "Да. Квартира, дом, офис или отдельная комната — приложение работает со всем.",
  },
  {
    q: "Сколько времени занимает получение результата?",
    a: "Все варианты вы получаете быстро: за 10 минут можно создать несколько вариантов проекта.",
  },
  {
    q: "Сколько это стоит?",
    a: "Актуальные условия использования можно посмотреть на странице «Тарифы» в приложении.",
  },
]

export default function FAQSection() {
  const [open, setOpen] = useState<number[]>(faqs.map((_, i) => i))

  const toggle = (i: number) => {
    setOpen((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )
  }

  return (
    <section className="py-10 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="grid md:grid-cols-[1fr_2fr] gap-10 md:gap-24 items-start">

          {/* LEFT */}
          <div className="md:sticky md:top-28">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-[0.2em] text-gray-400 font-medium mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="text-[28px] md:text-5xl lg:text-[56px] font-semibold tracking-tight text-[#1E1E1E] leading-tight mb-6"
            >
              Частые вопросы
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="text-gray-400 text-sm md:text-base leading-relaxed mb-8"
            >
              Если не нашли ответ — напишите нам, мы поможем
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            >
              <a
                href={DEMO_URL}
                target="_blank"
                className="inline-flex px-8 py-3.5 rounded-full bg-[#d66501] text-white text-sm font-semibold hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_4px_16px_rgba(214,101,1,0.3)] hover:scale-[1.02]"
              >
                Скачать приложение
              </a>
            </motion.div>
          </div>

          {/* RIGHT — аккордеон */}
          <div>
            {faqs.map((faq, i) => {
              const isOpen = open.includes(i)
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                >
                  <div className="relative h-[1px] bg-gray-100" />
                  <button
                    onClick={() => toggle(i)}
                    className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                  >
                    <span className={`text-sm md:text-lg font-semibold leading-snug transition-colors duration-200 ${isOpen ? "text-[#1E1E1E]" : "text-[#1E1E1E] group-hover:text-[#855dda]"}`}>
                      {faq.q}
                    </span>
                    <span
                      className="flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-300 mt-0.5"
                      style={{
                        borderColor: isOpen ? "#855dda" : "#e5e7eb",
                        backgroundColor: isOpen ? "#855dda" : "transparent",
                      }}
                    >
                      <svg
                        width="10" height="10" viewBox="0 0 10 10" fill="none"
                        className="transition-transform duration-300"
                        style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                      >
                        <path d="M5 1V9M1 5H9" stroke={isOpen ? "white" : "#9ca3af"} strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm md:text-base text-gray-500 leading-relaxed pb-5 pr-10">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
            <div className="h-[1px] bg-gray-100" />
          </div>

        </div>
      </div>
    </section>
  )
}
