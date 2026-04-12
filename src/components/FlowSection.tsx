"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

const furnitureSpots = [
  { id: 1, x: 70, y: 28, brand: "morestyle.by", name: "Картина Abstract", price: "8 900 ₽" },
  { id: 2, x: 84, y: 58, brand: "morestyle.by", name: "Тумбочка", price: "12 900 ₽" },
  { id: 3, x: 55, y: 72, brand: "Divan.ru", name: "Диван SÖDERHAMN", price: "89 990 ₽" },
]

const steps = [
  { id: 1, tag: "Шаг 1", title: "Отсканируй комнату или загрузи план квартиры", image: "/images/flow/step-1.png" },
  // ПУНКТ 11: шаг 2 и 3, новый текст
  { id: 2, tag: "Шаг 2 и 3", title: "Выбери стиль, цвета, материалы и предпочтения", image: "/images/flow/step-2.png" },
  { id: 3, tag: "Шаг 3", title: "AI создаёт дизайн интерьера прямо сейчас", image: "/images/flow/step-3.png" },
  { id: 4, tag: "Шаг 4", title: "Кликай на мебель, переходи по ссылкам и заказывай", image: "/images/flow/step-4.png", interactive: true },
]

// ПУНКТ 6: "Как работает" чёрным, "Roomforia" — bold italic фиолетовым
const titleChars = "Как работает".split("")

export default function FlowSection() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const [direction, setDirection] = useState(1)
  const [activeSpot, setActiveSpot] = useState<number | null>(null)
  const startX = useRef<number | null>(null)

  useEffect(() => {
    if (paused) return
    const interval = setInterval(() => {
      setDirection(1)
      setActive((c) => (c + 1) % steps.length)
      setActiveSpot(null)
    }, 4500)
    return () => clearInterval(interval)
  }, [paused])

  const goTo = (index: number) => {
    if (index === active) return
    setDirection(index > active ? 1 : -1)
    setActive(index)
    setPaused(true)
    setActiveSpot(null)
  }

  const handleStart = (x: number) => { startX.current = x; setPaused(true) }
  const handleEnd = (x: number) => {
    if (startX.current === null) return
    const diff = x - startX.current
    if (diff > 60) goTo((active - 1 + steps.length) % steps.length)
    else if (diff < -60) goTo((active + 1) % steps.length)
    startX.current = null
  }

  return (
    // ПУНКТ 9: секция на всю ширину — убираем px-4
    <section className="py-12 md:py-28 bg-white">
      {/* ПУНКТЫ 8: всё выровнено по левому краю — убираем text-center */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ===== HEADER ===== */}
        <div className="text-left mb-14">

          {/* ПУНКТ 6: "Как работает" + "Roomforia" bold italic фиолетовый */}
          <div className="flex items-end flex-wrap gap-x-0 overflow-hidden mb-0">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, x: -16, filter: "blur(12px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="text-[28px] md:text-6xl font-bold tracking-tight text-[#1E1E1E] leading-tight"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.3em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {/* ПУНКТ 6: "Roomforia" — bold italic фиолетовым */}
            <motion.span
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.04 + 0.1 }}
              className="text-[28px] md:text-6xl tracking-tight leading-tight ml-3 md:ml-4"
              style={{
                color: "#855dda",
                fontWeight: 700,
                fontStyle: "italic",
              }}
            >
              Roomforia
            </motion.span>
          </div>

          {/* ПУНКТ 5: доп. текст под заголовком */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.04 + 0.25 }}
            className="text-[#1E1E1E] text-sm md:text-lg font-medium mt-3"
          >
            От абстракций в голове до готового решения — 5 простых шагов
          </motion.p>

          {/* ПУНКТ 7: новый подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.04 + 0.4 }}
            className="text-gray-500 text-sm md:text-lg mt-2"
          >
            Без ожидания дизайнера, без бесконечного поиска по сайтам производителей и без догадок, как всё будет сочетаться
          </motion.p>
        </div>

      </div>

      {/* ПУНКТ 9: слайдер — на всю ширину без отступов */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      >
        <div
          className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => handleStart(e.clientX)}
          onMouseUp={(e) => handleEnd(e.clientX)}
          onTouchStart={(e) => handleStart(e.touches[0].clientX)}
          onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
        >
          <AnimatePresence mode="sync" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? "100%" : "-100%", scale: 1.04 }),
                center: { x: 0, scale: 1 },
                exit: (d: number) => ({ x: d > 0 ? "-100%" : "100%", scale: 0.97 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.65, ease: [0.32, 0.72, 0, 1] }}
              className="absolute inset-0"
            >
              <Image
                src={steps[active].image}
                alt={steps[active].title}
                fill
                className="object-cover"
                priority
                sizes="100vw"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/40 pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-transparent pointer-events-none" />

          {steps[active].interactive && (
            <div className="absolute inset-0 pointer-events-auto">
              {furnitureSpots.map((spot) => (
                <div key={spot.id} className="absolute" style={{ left: `${spot.x}%`, top: `${spot.y}%` }}>
                  <AnimatePresence>
                    {activeSpot === spot.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 6, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-full mb-3 left-1/2 -translate-x-1/2 z-20 whitespace-nowrap"
                      >
                        <div className="bg-white rounded-xl shadow-xl px-4 py-3 text-left min-w-[160px]">
                          <p className="text-[10px] text-gray-400 font-mono uppercase tracking-wider mb-0.5">{spot.brand}</p>
                          <p className="text-sm font-semibold text-gray-900 leading-snug">{spot.name}</p>
                          <p className="text-[#d66501] font-bold text-sm mt-1">{spot.price}</p>
                          <button className="mt-2 w-full text-xs bg-gray-900 text-white rounded-lg py-1.5 hover:bg-gray-700 transition">Перейти →</button>
                        </div>
                        <div className="w-3 h-3 bg-white rotate-45 absolute -bottom-1.5 left-1/2 -translate-x-1/2 shadow-sm" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <button
                    onClick={(e) => { e.stopPropagation(); setActiveSpot(activeSpot === spot.id ? null : spot.id) }}
                    className="relative w-8 h-8 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
                  >
                    <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                    <span className="relative w-5 h-5 rounded-full bg-white border-2 border-[#d66501] shadow-lg" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* ПУНКТ 10: текст на баннере — добавляем letter-spacing */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <h3
                  className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight max-w-xl"
                  style={{ letterSpacing: "0.02em" }}
                >
                  {steps[active].title}
                </h3>
              </motion.div>
            </AnimatePresence>

            <div className="flex items-center gap-4 mt-6">
              <div className="flex gap-2">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); goTo(i) }}
                    className={`h-[3px] rounded-full transition-all duration-500 pointer-events-auto ${
                      i === active ? "w-8 bg-[#d66501]" : "w-4 bg-white/35 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
              <span className="text-white/40 text-xs font-mono">
                {String(active + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          <button
            onClick={() => goTo((active - 1 + steps.length) % steps.length)}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={() => goTo((active + 1) % steps.length)}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 4L10 8L6 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </motion.div>

      {/* ПУНКТ 11: карточки шагов — на всю ширину */}
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="hidden md:grid grid-cols-4 gap-4 mt-6">
          {steps.map((step, i) => (
            <motion.button
              key={i}
              onClick={() => goTo(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className={`text-left p-4 rounded-2xl border-2 transition-all duration-300 bg-white ${
                i === active ? "border-[#855dda] shadow-[0_4px_20px_rgba(133,93,218,0.15)]" : "border-gray-100 hover:border-[#855dda]/40"
              }`}
            >
              <span className={`text-xs font-mono block mb-2 ${i === active ? "text-[#855dda]" : "text-gray-300"}`}>{step.tag}</span>
              <span className="text-sm font-semibold text-gray-900 leading-snug block">{step.title}</span>
            </motion.button>
          ))}
        </div>

        {/* ПУНКТ 12: кнопка Скачать под карточками, левый край */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="mt-8"
        >
          <a
            href="https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"
            target="_blank"
            className="px-10 py-4 rounded-full bg-[#d66501] text-white text-base font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:scale-[1.02]"
          >
            Скачать
          </a>
        </motion.div>
      </div>

    </section>
  )
}
