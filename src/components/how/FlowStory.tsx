"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

const steps = [
  { num: "01", title: "Загрузите фото комнаты", desc: "AI мгновенно распознаёт пространство, геометрию и свет", image: "/images/how/flow/step1.png" },
  { num: "02", title: "Выберите стиль", desc: "Сканди, лофт, модерн — переключайте в один клик", image: "/images/how/flow/step2.png" },
  { num: "03", title: "AI анализирует", desc: "Нейросеть считывает пропорции как профессиональный дизайнер", image: "/images/how/flow/step3.png" },
  { num: "04", title: "Генерация дизайна", desc: "Интерьер собирается из реальных товаров партнёров", image: "/images/how/flow/step4.png" },
  { num: "05", title: "Выберите мебель", desc: "Кликайте на элементы — смотрите бренд, цену и ссылку", image: "/images/how/flow/step5.png" },
  { num: "06", title: "Сравните варианты", desc: "Меняйте и сравнивайте без ограничений", image: "/images/how/flow/step6.png" },
  { num: "07", title: "Готово к покупке", desc: "Весь список мебели с ценами и ссылками — у вас", image: "/images/how/flow/step7.png" },
]

const titleChars = "Как работает".split("")

export default function FlowStory() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const [isPaused, setIsPaused] = useState(false)
  const startX = useRef<number | null>(null)
  const autoRef = useRef<NodeJS.Timeout | null>(null)

  const goTo = (index: number, dir?: number) => {
    const next = (index + steps.length) % steps.length
    setDirection(dir ?? (next > current ? 1 : -1))
    setCurrent(next)
  }

  const next = () => { setIsPaused(true); goTo(current + 1, 1) }
  const prev = () => { setIsPaused(true); goTo(current - 1, -1) }

  useEffect(() => {
    if (isPaused) {
      const resume = setTimeout(() => setIsPaused(false), 4000)
      return () => clearTimeout(resume)
    }
    autoRef.current = setTimeout(() => {
      setDirection(1)
      setCurrent((c) => (c + 1) % steps.length)
    }, 3000)
    return () => { if (autoRef.current) clearTimeout(autoRef.current) }
  }, [current, isPaused])

  const handleMouseDown = (e: React.MouseEvent) => { startX.current = e.clientX }
  const handleMouseUp = (e: React.MouseEvent) => {
    if (startX.current === null) return
    const diff = startX.current - e.clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    startX.current = null
  }
  const handleTouchStart = (e: React.TouchEvent) => { startX.current = e.touches[0].clientX }
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return
    const diff = startX.current - e.changedTouches[0].clientX
    if (diff > 40) next()
    else if (diff < -40) prev()
    startX.current = null
  }

  return (
    <section className="py-12 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-8 md:mb-20">
          <div className="flex items-end flex-wrap overflow-hidden mb-2">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="text-[28px] md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.15] md:leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.04 + 0.1 }}
              className="text-[28px] md:text-7xl lg:text-[82px] tracking-tight text-[#d66501] leading-[1.15] md:leading-[1.02] ml-2 md:ml-4"
              style={{ fontFamily: "symphonyregular, serif" }}
            >
              Roomforia
            </motion.span>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
            className="text-gray-400 text-base md:text-xl"
          >
            7 шагов от фото до готового интерьера
          </motion.p>
        </div>

        {/* MAIN LAYOUT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="grid md:grid-cols-2 gap-10 md:gap-24 items-center"
        >

          {/* LEFT — PHONE с экраном */}
          <div className="flex justify-center">
            <div
              className="relative select-none cursor-grab active:cursor-grabbing"
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Декоративное свечение — на мобиле уменьшено */}
              <div
                className="absolute inset-0 rounded-[48px] blur-3xl opacity-20 -z-10 transition-all duration-1000 hidden md:block"
                style={{ backgroundColor: current % 2 === 0 ? "#855dda" : "#d66501", transform: "scale(0.85) translateY(20px)" }}
              />

              {/* Телефон — меньше на мобиле */}
              <div
                className="relative rounded-[44px] overflow-hidden"
                style={{
                  width: "min(180px, 46vw)",
                  aspectRatio: "9/19.5",
                  boxShadow: "0 0 0 7px #111, 0 40px 100px rgba(0,0,0,0.35)",
                }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current}
                    custom={direction}
                    initial={{ opacity: 0, x: direction > 0 ? 60 : -60, scale: 1.04 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: direction > 0 ? -60 : 60, scale: 0.97 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={steps[current].image}
                      alt={steps[current].title}
                      fill
                      className="object-cover"
                      sizes="46vw"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute top-3 left-1/2 -translate-x-1/2 bg-black rounded-full z-20" style={{ width: "38%", height: "20px" }} />
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-white/50 rounded-full z-20" style={{ width: "28%", height: "4px" }} />
                <div className="absolute inset-0 pointer-events-none z-10" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.08)" }} />
              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[70%] h-10 bg-black/20 blur-2xl rounded-full -z-10" />
            </div>
          </div>

          {/* RIGHT — контент */}
          <div>
            <div className="flex flex-col mb-6 md:mb-10" style={{ minHeight: "auto" }}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  className="group relative"
                  onClick={() => { setIsPaused(true); goTo(i, i > current ? 1 : -1) }}
                >
                  <div className="relative h-[1px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div
                      className="absolute inset-0 origin-left transition-transform duration-500"
                      style={{
                        backgroundColor: current % 2 === 0 ? "#855dda" : "#d66501",
                        transform: i === current ? "scaleX(1)" : "scaleX(0)",
                      }}
                    />
                  </div>

                  <div className={`flex items-center gap-5 py-4 md:py-5 cursor-pointer transition-all duration-300 ${i === current ? "opacity-100" : "opacity-35 hover:opacity-60"}`}>
                    <span
                      className="text-xs font-mono flex-shrink-0 w-6 transition-colors duration-300"
                      style={{ color: i === current ? (current % 2 === 0 ? "#855dda" : "#d66501") : "#ccc" }}
                    >
                      {step.num}
                    </span>

                    <div className="flex-1">
                      <p className="text-sm md:text-lg font-semibold text-[#1E1E1E] leading-snug">
                        {step.title}
                      </p>
                      {i === current && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          className="text-xs md:text-sm text-gray-400 mt-1 leading-relaxed"
                        >
                          {step.desc}
                        </motion.p>
                      )}
                    </div>

                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300"
                      style={{ backgroundColor: i === current ? (current % 2 === 0 ? "#855dda" : "#d66501") : "#e5e5e5" }}
                    />
                  </div>
                </div>
              ))}

              <div className="h-[1px] bg-gray-100" />
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={prev}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#855dda] hover:text-[#855dda] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M11 4L6 9L11 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="flex gap-1.5 flex-1 justify-center">
                {steps.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => { setIsPaused(true); goTo(i, i > current ? 1 : -1) }}
                    className="h-[3px] rounded-full transition-all duration-400"
                    style={{
                      width: i === current ? "24px" : "6px",
                      backgroundColor: i === current ? (current % 2 === 0 ? "#855dda" : "#d66501") : "#e5e5e5",
                    }}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#d66501] hover:text-[#d66501] transition-all duration-200"
              >
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M7 4L12 9L7 14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            <div className="flex items-center gap-2 mt-4 justify-center">
              <div className="relative w-24 h-[2px] bg-gray-100 rounded-full overflow-hidden">
                {!isPaused && (
                  <motion.div
                    key={current}
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 3, ease: "linear" }}
                    className="absolute inset-0 origin-left rounded-full"
                    style={{ backgroundColor: current % 2 === 0 ? "#855dda" : "#d66501" }}
                  />
                )}
              </div>
              <span className="text-xs text-gray-300 font-mono">авто</span>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  )
}
