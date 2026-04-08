"use client"

import { useState, useEffect } from "react"

type Style = {
  id: string
  name: string
  image: string
}

const styles: Style[] = [
  { id: "scandi", name: "Сканди", image: "/images/styles/scandi.png" },
  { id: "loft", name: "Лофт", image: "/images/styles/loft.png" },
  { id: "modern", name: "Модерн", image: "/images/styles/modern.png" },
  { id: "classic", name: "Классика", image: "/images/styles/classic.png" },
  { id: "contemporary", name: "Контемп", image: "/images/styles/contemporary.png" },
]

export default function StyleSwitcher() {
  const [active, setActive] = useState(styles[0])
  const [prev, setPrev] = useState(styles[0])
  const [loaded, setLoaded] = useState(true)

  // preload
  useEffect(() => {
    styles.forEach((s) => {
      const img = new Image()
      img.src = s.image
    })
  }, [])

  const change = (style: Style) => {
    if (style.id === active.id) return
    setPrev(active)
    setActive(style)
    setLoaded(false)
  }

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-semibold mb-4">
          Выбери стиль интерьера
        </h2>

        <p className="text-gray-500 mb-12 text-lg">
          Как в приложении — переключай и смотри результат мгновенно
        </p>

        {/* IMAGE */}
        <div className="relative h-[340px] md:h-[560px] rounded-[32px] overflow-hidden mb-10 
        bg-white/40 backdrop-blur-xl border border-white/30 
        shadow-[0_30px_80px_rgba(0,0,0,0.1)]">

          {/* skeleton */}
          {!loaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-pulse z-10" />
          )}

          {/* previous */}
          <img
            src={prev.image}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* active */}
          <img
            src={active.image}
            onLoad={() => setLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              loaded
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
          />

          {/* overlay depth */}
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        {/* STYLES */}
        <div className="flex gap-3 overflow-x-auto md:overflow-visible justify-start md:justify-center pb-2 md:pb-0">

          {styles.map((style) => {
            const isActive = style.id === active.id

            return (
              <div
                key={style.id}
                onClick={() => change(style)}
                className={`
                  relative min-w-[110px] md:min-w-[130px] cursor-pointer
                  rounded-2xl overflow-hidden transition-all duration-300
                  ${isActive
                    ? "scale-105 shadow-xl"
                    : "opacity-80 hover:opacity-100 hover:scale-105"}
                `}
              >
                {/* image */}
                <img
                  src={style.image}
                  className="w-full h-20 md:h-24 object-cover"
                />

                {/* gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                {/* label */}
                <div className="absolute bottom-2 left-2 right-2 text-white text-xs md:text-sm font-medium">
                  {style.name}
                </div>

                {/* active ring */}
                {isActive && (
                  <div className="absolute inset-0 border-2 border-[#C47A2C] rounded-2xl" />
                )}
              </div>
            )
          })}
        </div>

        {/* hint */}
        <p className="mt-4 text-gray-500 text-sm">
          Выбирай стиль — AI сразу применит его к интерьеру
        </p>

      </div>
    </section>
  )
}