"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 400)
    return () => clearTimeout(t)
  }, [])

  return (
    <section className="pt-24 px-4">

      <div className="max-w-6xl mx-auto">

        <div className="relative h-[420px] rounded-3xl md:h-[520px] overflow-hidden">

          {/* OUTLINE */}
          <motion.img
            src="/images/hero/room-outline.png"
            initial={{ opacity: 1 }}
            animate={{ opacity: loaded ? 0 : 1 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* REAL IMAGE */}
          <motion.img
            src="/images/hero/room-real.png"
            initial={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            animate={{
              opacity: loaded ? 1 : 0,
              scale: loaded ? 1 : 1.05,
              filter: loaded ? "blur(0px)" : "blur(20px)",
            }}
            transition={{
              duration: 1.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/30" />

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: loaded ? 1 : 0, y: loaded ? 0 : 40 }}
            transition={{
              delay: 0.6,
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6"
          >
            <h1 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
  Ваши товары появляются в интерьерах,
  <br />
  которые уже хотят купить
</h1>

<p className="text-white/80 mb-6 text-lg max-w-xl">
  Мы интегрируем ваш каталог в AI-дизайн.
  Пользователь видит товар в интерьере → переходит → покупает у вас
</p>

<div className="flex gap-3 flex-wrap justify-center">

<div className="flex gap-3 flex-wrap justify-center">

{/* PRIMARY CTA */}
<button className="
  px-6 py-3 rounded-xl
  bg-white text-black font-medium
  shadow-[0_8px_30px_rgba(0,0,0,0.08)]
  hover:bg-white/90 transition
">
  Подключить каталог
</button>

{/* LINK CTA */}
<Link
  href="/how-it-works"
  prefetch
  className="
    px-6 py-3 rounded-xl
    bg-white/10 backdrop-blur text-white
    border border-white/20
    hover:bg-white/20 transition
  "
>
  Как это работает
</Link>

</div>

</div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}