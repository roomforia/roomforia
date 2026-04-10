"use client"

import { useRef, useEffect, useState } from "react"
import { motion } from "framer-motion"

const titleChars = "Интерьер за".split("")
const accentChars = "30 секунд".split("")

export default function HeroInteractive() {
  const containerRef = useRef<HTMLDivElement>(null)
  const phoneRef = useRef<HTMLDivElement>(null)
  const mouseX = useRef<number | null>(null)
  const mouseY = useRef<number | null>(null)
  const currentX = useRef(0)
  const currentY = useRef(0)
  const rafRef = useRef<number>(0)
  const isInsideRef = useRef(false)
  const [isInside, setIsInside] = useState(false)

  useEffect(() => {
    const container = containerRef.current
    const phone = phoneRef.current
    if (!container || !phone) return

    // Инициализация в центре
    currentX.current = container.offsetWidth / 2
    currentY.current = container.offsetHeight / 2

    const demoPath = [
      { x: 0.5,  y: 0.5  },
      { x: 0.72, y: 0.3  },
      { x: 0.28, y: 0.65 },
      { x: 0.65, y: 0.72 },
      { x: 0.35, y: 0.35 },
      { x: 0.5,  y: 0.5  },
    ]
    let demoStep = 0
    let demoProgress = 0

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX.current = e.clientX - rect.left
      mouseY.current = e.clientY - rect.top
      isInsideRef.current = true
      setIsInside(true)
    }
    const handleMouseLeave = () => {
      isInsideRef.current = false
      mouseX.current = null
      mouseY.current = null
      setIsInside(false)
    }
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      mouseX.current = e.clientX - rect.left
      mouseY.current = e.clientY - rect.top
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)
    container.addEventListener("mousemove", handleMouseMove)

    const animate = () => {
      const cw = container.offsetWidth
      const ch = container.offsetHeight
      const pw = phone.offsetWidth
      const ph = phone.offsetHeight

      let targetX: number
      let targetY: number

      if (isInsideRef.current && mouseX.current !== null && mouseY.current !== null) {
        targetX = mouseX.current
        targetY = mouseY.current
      } else {
        // Авто-демо
        demoProgress += 0.003
        if (demoProgress >= 1) {
          demoProgress = 0
          demoStep = (demoStep + 1) % (demoPath.length - 1)
        }
        const from = demoPath[demoStep]
        const to = demoPath[demoStep + 1]
        const t = demoProgress
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        targetX = (from.x + (to.x - from.x) * eased) * cw
        targetY = (from.y + (to.y - from.y) * eased) * ch
      }

      currentX.current += (targetX - currentX.current) * 0.07
      currentY.current += (targetY - currentY.current) * 0.07

      const clampedX = Math.max(pw / 2 + 8, Math.min(cw - pw / 2 - 8, currentX.current))
      const clampedY = Math.max(ph / 2 + 8, Math.min(ch - ph / 2 - 8, currentY.current))

      // Позиционируем через left/top + translate — телефон внутри контейнера
      phone.style.left = `${clampedX}px`
      phone.style.top = `${clampedY}px`

      // Совмещение картинок
      const afterDiv = phone.querySelector(".after-image") as HTMLElement
      if (afterDiv) {
        const bgX = ((clampedX - pw / 2) / (cw - pw)) * 100
        const bgY = ((clampedY - ph / 2) / (ch - ph)) * 100
        afterDiv.style.backgroundSize = `${cw}px ${ch}px`
        afterDiv.style.backgroundPosition = `${bgX}% ${bgY}%`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
      container.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <section className="pt-20 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="text-center mb-8">

          <div className="flex items-end justify-center flex-wrap mb-1 min-h-[90px] md:min-h-[110px]">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.045 }}
                className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <div className="flex items-end justify-center flex-wrap mb-8 min-h-[90px] md:min-h-[110px]">
            {accentChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (titleChars.length + i) * 0.045 }}
                className="text-5xl md:text-7xl lg:text-[82px] font-semibold tracking-tight text-[#d66501] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
            className="text-gray-500 text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-8"
          >
            Загрузи фото — получи готовый дизайн и список мебели
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
          >
            <a
              href="https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"
              target="_blank"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#d66501] text-white font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:scale-[1.02]"
            >
              Попробовать демо
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="text-center text-sm text-gray-400 mb-5 tracking-wide"
        >
          Наведи на комнату — увидишь интерьер с мебелью
        </motion.p>
      </div>

      {/* DEMO */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.5 }}
        className="w-full px-4 md:px-8"
      >
        {/* 
          Ключевой трюк: overflow-hidden убран с этого div,
          вместо этого clip через CSS clip-path на псевдоэлементе.
          Телефон absolute внутри — не обрезается.
        */}
        <div
          ref={containerRef}
          className="relative w-full h-[500px] md:h-[620px] lg:h-[680px] select-none"
          style={{
            cursor: isInside ? "none" : "crosshair",
            borderRadius: "24px",
            // Клипаем содержимое без overflow:hidden
            clipPath: "inset(0 round 24px)",
          }}
        >
          {/* BEFORE — фон */}
          <img
            src="/images/how/hero/before.png"
            alt="До"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ borderRadius: "24px" }}
            draggable={false}
          />

          {/* Тень от баннера */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              borderRadius: "24px",
              boxShadow: "0 32px 80px rgba(0,0,0,0.12)",
            }}
          />

          {/* Лёгкий оверлей */}
          <div className="absolute inset-0 bg-black/5 pointer-events-none" />

          {/* PHONE — absolute внутри, не обрезается clip-path */}
          <div
            ref={phoneRef}
            className="absolute z-20 pointer-events-none"
            style={{
              width: "190px",
              height: "410px",
              transform: "translate(-50%, -50%)",
              willChange: "left, top",
              filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.4))",
            }}
          >
            {/* Корпус телефона */}
            <div
              className="relative w-full h-full overflow-hidden"
              style={{
                borderRadius: "38px",
                border: "6px solid #111",
              }}
            >
              {/* AFTER — магия совмещения */}
              <div
                className="after-image absolute inset-0"
                style={{
                  backgroundImage: "url('/images/how/hero/after.png')",
                  backgroundSize: "100% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "50% 50%",
                }}
              />

              {/* Dynamic island */}
              <div
                className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-20"
                style={{ top: "10px", width: "68px", height: "20px" }}
              />

              {/* Home indicator */}
              <div
                className="absolute left-1/2 -translate-x-1/2 rounded-full z-20"
                style={{ bottom: "7px", width: "50px", height: "4px", backgroundColor: "rgba(255,255,255,0.4)" }}
              />

              {/* Блик */}
              <div
                className="absolute inset-0 pointer-events-none z-10"
                style={{
                  background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 40%)",
                }}
              />
            </div>

            {/* Тень снизу */}
            <div
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full blur-xl"
              style={{ width: "60%", height: "24px", backgroundColor: "rgba(0,0,0,0.25)" }}
            />
          </div>

          {/* Лейблы */}
          <div className="absolute top-5 left-5 text-xs font-medium bg-white/90 text-[#1E1E1E] px-3 py-1.5 rounded-full shadow-sm z-30">
            До — пустая комната
          </div>
          <div className="absolute top-5 right-5 text-xs font-medium bg-black/50 text-white px-3 py-1.5 rounded-full z-30">
            Наведи мышь → увидишь После
          </div>
        </div>
      </motion.div>
    </section>
  )
}