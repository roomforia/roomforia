"use client"

import { useState, useEffect, useRef } from "react"

const steps = [
  {
    id: 1,
    title: "Загрузи фото комнаты",
    desc: "Сфотографируй или загрузи изображение — AI сразу распознает пространство",
    image: "/images/flow/step-1.png",
  },
  {
    id: 2,
    title: "Выбери стиль",
    desc: "Сканди, лофт, минимализм — переключай как в приложении",
    image: "/images/flow/step-2.png",
  },
  {
    id: 3,
    title: "AI создаёт интерьер",
    desc: "Готовый дизайн появляется за секунды",
    image: "/images/flow/step-3.png",
  },
  {
    id: 4,
    title: "Покупай прямо из проекта",
    desc: "Вся мебель доступна — переходи и заказывай",
    image: "/images/flow/step-4.png",
  },
]

export default function FlowSection() {
  const [active, setActive] = useState(0)
  const [prev, setPrev] = useState(0)
  const [loaded, setLoaded] = useState(true)
  const [paused, setPaused] = useState(false)

  const startX = useRef<number | null>(null)

  // ✅ стабильный autoplay loop
  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setPrev((current) => current)
      setActive((current) => {
        const next = (current + 1) % steps.length
        return next
      })
      setLoaded(false)
    }, 4000)

    return () => clearInterval(interval)
  }, [paused])

  const change = (index: number) => {
    setPaused(true)
    if (index === active) return

    setPrev(active)
    setActive(index)
    setLoaded(false)
  }

  // drag handlers
  const handleStart = (x: number) => {
    setPaused(true)
    startX.current = x
  }

  const handleEnd = (x: number) => {
    if (startX.current === null) return

    const diff = x - startX.current

    if (diff > 70) {
      change((active - 1 + steps.length) % steps.length)
    } else if (diff < -70) {
      change((active + 1) % steps.length)
    }

    startX.current = null
  }

  return (
    <section className="py-28 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Как работает <span className="text-[#C47A2C]">Roomforia</span>
          </h2>

          <p className="text-gray-500 text-lg">
            От фото до покупки — за пару минут
          </p>
        </div>

        {/* PROGRESS */}
        <div className="w-full h-1 bg-gray-200 rounded-full mb-10 overflow-hidden">
          <div
            className="h-full bg-[#C47A2C] transition-all duration-1000"
            style={{ width: ((active + 1) / steps.length) * 100 + "%" }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT */}
          <div>
            <div className="text-sm text-gray-400 mb-2">
              Шаг {active + 1} из {steps.length}
            </div>

            <div key={active} className="fade">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">
                {steps[active].title}
              </h3>

              <p className="text-gray-500 mb-8">
                {steps[active].desc}
              </p>
            </div>

            {/* NAV */}
            <div className="flex gap-3">
              {steps.map((step, i) => {
                const isActive = i === active

                return (
                  <button
                    key={step.id}
                    onClick={() => change(i)}
                    className={
                      "w-10 h-10 rounded-full text-sm transition " +
                      (isActive
                        ? "bg-[#2D1F1A] text-white"
                        : "bg-gray-100 hover:bg-gray-200")
                    }
                  >
                    {step.id}
                  </button>
                )
              })}
            </div>
          </div>

          {/* RIGHT */}
          <div
            onMouseDown={(e) => handleStart(e.clientX)}
            onMouseUp={(e) => handleEnd(e.clientX)}
            onTouchStart={(e) => handleStart(e.touches[0].clientX)}
            onTouchEnd={(e) => handleEnd(e.changedTouches[0].clientX)}
            className="relative cursor-grab active:cursor-grabbing"
          >
            <div className="relative h-[360px] md:h-[520px] rounded-3xl overflow-hidden bg-white border shadow">

              {!loaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse z-10" />
              )}

              <img
                src={steps[prev].image}
                className="absolute inset-0 w-full h-full object-cover"
              />

              <img
                src={steps[active].image}
                onLoad={() => setLoaded(true)}
                className={
                  "absolute inset-0 w-full h-full object-cover transition duration-700 " +
                  (loaded ? "opacity-100" : "opacity-0")
                }
              />
            </div>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs bg-black/60 text-white px-3 py-1 rounded-full">
              Проведи
            </div>
          </div>
        </div>
      </div>

      {/* SAFE animation */}
      <style jsx>{`
        .fade {
          animation: fade 0.5s ease;
        }

        @keyframes fade {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}