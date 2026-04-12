"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const DEMO_URL = "https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"

type Hotspot = { id: number; top: string; left: string; title: string; brand: string; img: string }

const HOTSPOTS: Hotspot[] = [
  { id: 1, top: "70%", left: "45%", title: "Диван Oslo", brand: "IKEA", img: "/images/products/sofa.png" },
  { id: 2, top: "88%", left: "55%", title: "Стол Loft", brand: "Hoff", img: "/images/products/table.png" },
  { id: 3, top: "96%", left: "40%", title: "Ковер Soft", brand: "Zara Home", img: "/images/products/carpet.png" },
]

const line1 = "приложение для дизайна и".split("")
const line2 = "визуализации интерьера".split("")
const totalLetters = line1.length + line2.length

export default function Hero() {
  const [position, setPosition] = useState(50)
  const [drag, setDrag] = useState(false)
  const [active, setActive] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)
  const animatingRef = useRef(false)

  useEffect(() => {
    if (animatingRef.current) return
    animatingRef.current = true
    let start = 50
    const steps = [{ to: 78, duration: 900 }, { to: 22, duration: 1000 }, { to: 50, duration: 800 }]
    let stepIndex = 0
    let rafId: number
    let timerId: ReturnType<typeof setTimeout>
    const run = () => {
      if (stepIndex >= steps.length) return
      const { to, duration } = steps[stepIndex]
      const diff = to - start
      let progress = 0
      const frame = () => {
        progress += 16
        const t = Math.min(progress / duration, 1)
        const eased = 1 - Math.pow(1 - t, 3)
        setPosition(start + diff * eased)
        if (t < 1) { rafId = requestAnimationFrame(frame) }
        else { start = to; stepIndex++; timerId = setTimeout(run, 300) }
      }
      rafId = requestAnimationFrame(frame)
    }
    const initTimer = setTimeout(run, 2200)
    return () => { clearTimeout(initTimer); clearTimeout(timerId); cancelAnimationFrame(rafId) }
  }, [])

  // Закрываем хотспот при перетаскивании — через ref чтобы не вызывать лишних ре-рендеров
  const prevPositionRef = useRef(position)
  if (Math.abs(prevPositionRef.current - position) > 1) {
    prevPositionRef.current = position
    if (active !== null) setActive(null)
  }

  const update = (x: number) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    setPosition(Math.max(5, Math.min(95, ((x - rect.left) / rect.width) * 100)))
  }

  useEffect(() => {
    const close = () => setActive(null)
    window.addEventListener("click", close)
    return () => window.removeEventListener("click", close)
  }, [])

  const showHotspots = position > 20

  return (
    <section className="pt-6 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-6">
          <div className="mb-4 md:mb-0">
            <div className="flex flex-col items-center md:hidden">
              <p className="text-[36px] font-bold tracking-tight leading-[1.15] text-center">
                <span style={{ color: "#855dda" }}>AI -</span>{" "}
                <span style={{ color: "#d66501" }}>приложение для дизайна и</span>
              </p>
              <p className="text-[36px] font-bold tracking-tight leading-[1.15] text-center" style={{ color: "#855dda" }}>
                визуализации интерьера
              </p>
            </div>
            <div className="hidden md:block">
              <div className="flex items-center justify-center flex-wrap gap-x-0 mb-1 min-h-[110px]">
                <motion.span initial={{ opacity: 0, x: -16, filter: "blur(12px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                  className="text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] mr-4" style={{ color: "#855dda" }}>
                  AI -
                </motion.span>
                {line1.map((char, i) => {
                  const pct = i / (line1.length + line2.length - 1)
                  const r = Math.round(214 + (133 - 214) * pct), g = Math.round(101 + (93 - 101) * pct), b = Math.round(1 + (218 - 1) * pct)
                  return (
                    <motion.span key={`l1-${i}`} initial={{ opacity: 0, x: -16, filter: "blur(12px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 + i * 0.04 }}
                      className="text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05]"
                      style={{ color: `rgb(${r},${g},${b})`, display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  )
                })}
              </div>
              <div className="flex items-center justify-center flex-wrap gap-x-0 mb-8 min-h-[110px]">
                {line2.map((char, i) => {
                  const pct = (line1.length + i) / (line1.length + line2.length - 1)
                  const r = Math.round(214 + (133 - 214) * pct), g = Math.round(101 + (93 - 101) * pct), b = Math.round(1 + (218 - 1) * pct)
                  return (
                    <motion.span key={`l2-${i}`} initial={{ opacity: 0, x: -16, filter: "blur(12px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.3 + (line1.length + i) * 0.04 }}
                      className="text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05]"
                      style={{ color: `rgb(${r},${g},${b})`, display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}>
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  )
                })}
              </div>
            </div>
          </div>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 + totalLetters * 0.04 + 0.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-8">
            Создайте дом своей мечты вместе с Румфорией за 10 минут
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 + totalLetters * 0.04 + 0.45 }}>
            <a href={DEMO_URL} target="_blank"
              className="px-10 py-4 rounded-full bg-[#d66501] text-white text-base font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:shadow-[0_8px_32px_rgba(214,101,1,0.5)] hover:scale-[1.02]">
              Скачать
            </a>
          </motion.div>
        </div>
      </div>

      {/* DEMO BANNER */}
      <motion.div initial={{ opacity: 0, y: 60 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 + totalLetters * 0.04 + 0.6 }}
        className="w-full px-4 md:px-8">
        <div ref={ref}
          className="relative w-full h-[480px] md:h-[640px] lg:h-[720px] rounded-3xl overflow-hidden cursor-col-resize select-none shadow-[0_32px_80px_rgba(0,0,0,0.14)]"
          onMouseMove={(e) => drag && update(e.clientX)}
          onMouseUp={() => setDrag(false)}
          onMouseLeave={() => setDrag(false)}
          onTouchMove={(e) => drag && update(e.touches[0].clientX)}
          onTouchEnd={() => setDrag(false)}>

          {/* BEFORE — priority т.к. это первый экран */}
          <Image src="/images/before.png" alt="До" fill className="object-cover" priority sizes="100vw" />

          <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
            {/* AFTER — тоже priority */}
            <Image src="/images/after.png" alt="После" fill className="object-cover" priority sizes="100vw" />

            {HOTSPOTS.map((h) => {
              const isOpen = active === h.id
              return (
                <div key={h.id}
                  className={`absolute z-40 transition-all duration-500 ${showHotspots ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
                  style={{ top: h.top, left: h.left }}
                  onClick={(e) => { e.stopPropagation(); setActive(isOpen ? null : h.id) }}>
                  <div className="relative cursor-pointer">
                    <div className="absolute w-5 h-5 bg-white/40 rounded-full animate-ping -translate-x-1 -translate-y-1" />
                    <div className="w-3 h-3 bg-white rounded-full shadow-lg border-2 border-[#d66501]" />
                  </div>
                  <div className={`absolute w-56 bg-white rounded-2xl shadow-2xl p-3 transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
                    style={{ bottom: "140%", left: "50%", transform: "translateX(-50%)" }}>
                    <div className="relative w-full h-24 rounded-xl mb-3 overflow-hidden">
                      <Image src={h.img} alt={h.title} fill className="object-cover" sizes="224px" />
                    </div>
                    <p className="text-sm font-semibold text-[#1E1E1E]">{h.title}</p>
                    <p className="text-xs text-gray-400 mb-3">{h.brand}</p>
                    <button className="w-full text-sm bg-[#d66501] text-white py-2 rounded-xl font-medium hover:bg-[#bf5a01] transition">Смотреть →</button>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="absolute top-0 bottom-0 pointer-events-none"
            style={{ left: `calc(${position}% - 60px)`, width: "120px", background: "linear-gradient(to right, transparent, rgba(255,255,255,0.6), transparent)", filter: "blur(12px)" }} />
          <div className="absolute top-0 bottom-0 w-[2px] bg-white/90 pointer-events-none" style={{ left: `${position}%` }} />

          <div className="absolute top-1/2 z-50 -translate-y-1/2" style={{ left: `${position}%` }}
            onMouseDown={(e) => { e.stopPropagation(); setDrag(true) }}
            onTouchStart={(e) => { e.stopPropagation(); setDrag(true) }}>
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

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 + totalLetters * 0.04 + 0.9 }}
        className="w-full px-4 md:px-8 mt-8">
        <p className="text-sm text-gray-400 text-right mb-6">Нажмите на любой предмет в интерьере, чтобы открыть карточку товара</p>
        <div className="max-w-3xl ml-auto">
          <p className="text-[#1E1E1E] text-sm md:text-base leading-relaxed mb-6 text-right">
            Визуализируйте, планируйте и создавайте то, о чем так давно мечтали. Удобное и интуитивно понятное приложение со встроенным ИИ для дизайна интерьера. Просто загрузите фото, планировку или отсканируйте комнату с помощью камеры смартфона и получите готовую визуализацию с реальными товарами и отделкой в разных стилях.
          </p>
          <div className="flex justify-end">
            <a href={DEMO_URL} target="_blank"
              className="px-10 py-4 rounded-full bg-[#d66501] text-white text-base font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:scale-[1.02]">
              Скачать
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
