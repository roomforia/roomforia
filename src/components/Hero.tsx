"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import PartnerModal from "./PartnerModal"

type Hotspot = {
  id: number
  top: string
  left: string
  title: string
  brand: string
  img: string
}

const HOTSPOTS: Hotspot[] = [
  { id: 1, top: "70%", left: "45%", title: "Диван Oslo", brand: "IKEA", img: "/images/products/sofa.png" },
  { id: 2, top: "88%", left: "55%", title: "Стол Loft", brand: "Hoff", img: "/images/products/table.png" },
  { id: 3, top: "96%", left: "40%", title: "Ковер Soft", brand: "Zara Home", img: "/images/products/carpet.png" },
]

// Разбиваем на две строки — каждая строка это массив букв
const line1 = "Приложение для дизайна".split("")
const line2 = "интерьера".split("")

export default function Hero() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(50)
  const [drag, setDrag] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let start = 50
    const steps = [
      { to: 78, duration: 900 },
      { to: 22, duration: 1000 },
      { to: 50, duration: 800 },
    ]
    let i = 0
    const run = () => {
      if (i >= steps.length) return
      const { to, duration } = steps[i]
      const diff = to - start
      let progress = 0
      const frame = () => {
        progress += 16
        const t = Math.min(progress / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setPosition(start + diff * eased)
        if (t < 1) requestAnimationFrame(frame)
        else { start = to; i++; setTimeout(run, 300) }
      }
      frame()
    }
    const timer = setTimeout(run, 2200)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => { setActive(null) }, [position])

  const update = (x: number) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const percent = ((x - rect.left) / rect.width) * 100
    setPosition(Math.max(5, Math.min(95, percent)))
  }

  useEffect(() => {
    const close = () => setActive(null)
    window.addEventListener("click", close)
    return () => window.removeEventListener("click", close)
  }, [])

  const showHotspots = position > 20

  // Общее количество букв в первой строке — для сквозного индекса
  const totalLetters = line1.length + line2.length

  return (
    <section className="pt-20 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ===== HEADING ===== */}
        <div className="text-center mb-8">

          {/* СТРОКА 1: AI кружок + буквы */}
          <div className="flex items-center justify-center flex-wrap gap-x-0 mb-1 min-h-[90px] md:min-h-[110px]">

            {/* AI BADGE */}
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="inline-flex items-center justify-center bg-[#855dda] text-white rounded-full font-semibold mr-4 flex-shrink-0"
              style={{
                width: "clamp(60px, 7vw, 90px)",
                height: "clamp(60px, 7vw, 90px)",
                fontSize: "clamp(20px, 2.8vw, 34px)",
              }}
            >
              AI
            </motion.span>

            {/* БУКВЫ строки 1 */}
            <span className="flex flex-wrap items-center justify-center">
              {line1.map((char, i) => (
                <motion.span
                  key={`l1-${i}`}
                  initial={{ opacity: 0, x: -16, filter: "blur(12px)" }}
                  animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.55 + i * 0.045,
                  }}
                  className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.05]"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </span>
          </div>

          {/* СТРОКА 2: "интерьера" побуквенно */}
          <div className="flex items-center justify-center mb-8 min-h-[90px] md:min-h-[110px]">
            {line2.map((char, i) => (
              <motion.span
                key={`l2-${i}`}
                initial={{ opacity: 0, x: -16, filter: "blur(12px)" }}
                animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.65,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.55 + (line1.length + i) * 0.045,
                }}
                className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.05]"
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* ПОДЗАГОЛОВОК */}
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
              // появляется после последней буквы
              delay: 0.55 + totalLetters * 0.045 + 0.2,
            }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Создавай дизайн с реальными товарами.
            Пользователь видит интерьер — кликает — покупает у бренда.
          </motion.p>

          {/* КНОПКА */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.55 + totalLetters * 0.045 + 0.45,
            }}
          >
            <button
              onClick={() => setOpen(true)}
              className="px-10 py-4 rounded-full bg-[#d66501] text-white text-base font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:shadow-[0_8px_32px_rgba(214,101,1,0.5)] hover:scale-[1.02]"
            >
              Скачать
            </button>
          </motion.div>
        </div>

        {/* HINT */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.55 + totalLetters * 0.045 + 0.7,
            duration: 0.6,
          }}
          className="text-center text-sm text-gray-400 mb-5 tracking-wide"
        >
          Исследуй интерьер — нажми на элементы
        </motion.p>

      </div>

      {/* ===== DEMO ===== */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.55 + totalLetters * 0.045 + 0.6,
        }}
        className="w-full px-4 md:px-8"
      >
        <div
          ref={ref}
          className="relative w-full h-[480px] md:h-[640px] lg:h-[720px] rounded-3xl overflow-hidden cursor-col-resize select-none shadow-[0_32px_80px_rgba(0,0,0,0.14)]"
          onMouseMove={(e) => drag && update(e.clientX)}
          onMouseUp={() => setDrag(false)}
          onMouseLeave={() => setDrag(false)}
          onTouchMove={(e) => drag && update(e.touches[0].clientX)}
          onTouchEnd={() => setDrag(false)}
        >
          <img src="/images/before.png" alt="До" className="absolute inset-0 w-full h-full object-cover" draggable={false} />

          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            <img src="/images/after.png" alt="После" className="w-full h-full object-cover" draggable={false} />

            {HOTSPOTS.map((h) => {
              const isOpen = active === h.id
              return (
                <div
                  key={h.id}
                  className={`absolute z-40 transition-all duration-500 ${showHotspots ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
                  style={{ top: h.top, left: h.left }}
                  onClick={(e) => { e.stopPropagation(); setActive(isOpen ? null : h.id) }}
                >
                  <div className="relative cursor-pointer">
                    <div className="absolute w-5 h-5 bg-white/40 rounded-full animate-ping -translate-x-1 -translate-y-1" />
                    <div className="w-3 h-3 bg-white rounded-full shadow-lg border-2 border-[#d66501]" />
                  </div>
                  <div
                    className={`absolute w-56 bg-white rounded-2xl shadow-2xl p-3 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                    style={{ bottom: "140%", left: "50%", transform: "translateX(-50%)" }}
                  >
                    <img src={h.img} className="w-full h-24 object-cover rounded-xl mb-3" alt={h.title} />
                    <p className="text-sm font-semibold text-[#1E1E1E]">{h.title}</p>
                    <p className="text-xs text-gray-400 mb-3">{h.brand}</p>
                    <button className="w-full text-sm bg-[#d66501] text-white py-2 rounded-xl font-medium hover:bg-[#bf5a01] transition">
                      Смотреть →
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `calc(${position}% - 60px)`,
              width: "120px",
              background: "linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)",
              filter: "blur(12px)",
            }}
          />
          <div className="absolute top-0 bottom-0 w-[2px] bg-white/90 pointer-events-none" style={{ left: `${position}%` }} />

          <div
            className="absolute top-1/2 z-50 -translate-y-1/2"
            style={{ left: `${position}%` }}
            onMouseDown={(e) => { e.stopPropagation(); setDrag(true) }}
            onTouchStart={(e) => { e.stopPropagation(); setDrag(true) }}
          >
            <div className="-translate-x-1/2 w-12 h-12 flex items-center justify-center">
              <div className="absolute w-14 h-14 bg-white/20 blur-xl rounded-full" />
              <div className="relative w-10 h-10 bg-white rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.2)] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M5 9H13M5 9L7.5 6.5M5 9L7.5 11.5M13 9L10.5 6.5M13 9L10.5 11.5" stroke="#1E1E1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="absolute top-5 left-5 text-xs font-medium bg-white/90 backdrop-blur-sm text-[#1E1E1E] px-3 py-1.5 rounded-full shadow-sm">После</div>
          <div className="absolute top-5 right-5 text-xs font-medium bg-black/60 backdrop-blur-sm text-white px-3 py-1.5 rounded-full">До</div>
        </div>
      </motion.div>

      <PartnerModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}