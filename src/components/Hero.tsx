"use client"

import { useState, useRef, useEffect } from "react"
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
  {
    id: 1,
    top: "55%",
    left: "60%",
    title: "Диван Oslo",
    brand: "IKEA",
    img: "/images/products/sofa.png",
  },
  {
    id: 2,
    top: "68%",
    left: "45%",
    title: "Стол Loft",
    brand: "Hoff",
    img: "/images/products/table.png",
  },
  {
    id: 3,
    top: "82%",
    left: "50%",
    title: "Ковер Soft",
    brand: "Zara Home",
    img: "/images/products/carpet.png",
  },
]

export default function Hero() {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState(50)
  const [drag, setDrag] = useState(false)
  const [active, setActive] = useState<number | null>(null)

  const ref = useRef<HTMLDivElement>(null)

  // 🔥 авто демо (один раз)
  useEffect(() => {
    let start = 50

    const steps = [
      { to: 80, duration: 800 },
      { to: 20, duration: 900 },
      { to: 50, duration: 700 },
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

        if (t < 1) {
          requestAnimationFrame(frame)
        } else {
          start = to
          i++
          setTimeout(run, 200)
        }
      }

      frame()
    }

    run()
  }, [])

  // закрытие карточек при движении
  useEffect(() => {
    setActive(null)
  }, [position])

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

  // показываем точки только когда AFTER достаточно открыт
  const showHotspots = position > 20

  return (
    <section className="pt-12 pb-24 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* TEXT */}
        {/* TEXT */}
        <h1 className="text-3xl md:text-6xl font-semibold mb-4 leading-tight">
        <span className="inline-flex items-center justify-center bg-[#855dda] text-white rounded-full w-16 h-16 md:w-20 md:h-20 text-2xl md:text-3xl mr-3" style={{ verticalAlign: "middle" }}>
  AI
</span>
  Приложение для дизайна интерьера
</h1>

<p className="text-black-500 mb-8 text-lg max-w-2xl mx-auto">
  Создавай дизайн с реальными товарами.
  Пользователь видит интерьер - кликает - покупает у бренда.
</p>

<div className="flex items-center justify-center gap-3 mb-12 flex-wrap">

  {/* B2C */}
  <button
  onClick={() => setOpen(true)}
   className="bg-[#d66501] text-white px-6 py-3 rounded-full hover:scale-105 transition">
    Скачать
  </button>

  
</div>

        {/* DEMO */}
        <div
          ref={ref}
          className="relative h-[420px] md:h-[620px] rounded-[32px] overflow-hidden 
          bg-white/40 backdrop-blur-xl border border-white/30 
          shadow-[0_30px_80px_rgba(0,0,0,0.1)]"
          onMouseMove={(e) => drag && update(e.clientX)}
          onMouseUp={() => setDrag(false)}
          onMouseLeave={() => setDrag(false)}
          onTouchMove={(e) => drag && update(e.touches[0].clientX)}
          onTouchEnd={() => setDrag(false)}
        >

          {/* BEFORE (фон) */}
          <img
            src="/images/before.png"
            className="absolute inset-0 w-full h-full object-cover brightness-90"
          />

          {/* AFTER + HOTSPOTS (обрезаются вместе) */}
          <div
            className="absolute inset-0"
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
            }}
          >
            <img
              src="/images/after.png"
              className="w-full h-full object-cover"
            />

            {/* HOTSPOTS */}
            {HOTSPOTS.map((h) => {
              const open = active === h.id

              return (
                <div
                  key={h.id}
                  className={`absolute z-40 transition-all duration-500 ${
                    showHotspots
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90 pointer-events-none"
                  }`}
                  style={{ top: h.top, left: h.left }}
                  onClick={(e) => {
                    e.stopPropagation()
                    setActive(open ? null : h.id)
                  }}
                >
                  {/* DOT */}
                  <div className="relative cursor-pointer">
                    <div className="absolute w-4 h-4 bg-white/40 rounded-full animate-ping" />
                    <div className="w-3 h-3 bg-white rounded-full shadow-md" />
                  </div>

                  {/* CARD */}
                  <div
                    className={`absolute w-56 bg-white rounded-xl shadow-2xl p-3 transition-all duration-300 ${
                      open
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95 pointer-events-none"
                    }`}
                    style={{
                      bottom: "120%",
                      left: "50%",
                      transform: "translateX(-50%)",
                    }}
                  >
                    <img
                      src={h.img}
                      className="w-full h-24 object-cover rounded-md mb-2"
                    />

                    <p className="text-sm font-medium">{h.title}</p>
                    <p className="text-xs text-gray-500 mb-2">{h.brand}</p>

                    <button className="w-full text-sm bg-[#2D1F1A] text-white py-1.5 rounded-lg">
                      Смотреть
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* SOFT EDGE */}
          <div
            className="absolute top-0 bottom-0 pointer-events-none"
            style={{
              left: `calc(${position}% - 60px)`,
              width: "120px",
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.9), transparent)",
              filter: "blur(20px)",
            }}
          />

          {/* LINE */}
          <div
            className="absolute top-0 bottom-0 w-[1.5px] bg-white/80"
            style={{ left: `${position}%` }}
          />

          {/* HANDLE */}
          <div
            className="absolute top-1/2 z-50"
            style={{
              left: `${position}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseDown={(e) => {
              e.stopPropagation()
              setDrag(true)
            }}
            onTouchStart={(e) => {
              e.stopPropagation()
              setDrag(true)
            }}
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <div className="absolute w-12 h-12 bg-white/30 blur-xl rounded-full" />
              <div className="w-9 h-9 bg-white/80 backdrop-blur rounded-full shadow-lg flex items-center justify-center">
                <span className="text-xs opacity-70">↔</span>
              </div>
            </div>
          </div>

          {/* LABELS */}
          <div className="absolute top-4 left-4 text-xs bg-white/80 px-3 py-1 rounded-full">
            После
          </div>

          <div className="absolute top-4 right-4 text-xs bg-black/70 text-white px-3 py-1 rounded-full">
            До
          </div>

        </div>

        <p className="mt-4 text-black-600">
          Исследуй интерьер — нажми на элементы
        </p>

      </div>
      <PartnerModal open={open} onClose={() => setOpen(false)} />
    </section>
  )
}