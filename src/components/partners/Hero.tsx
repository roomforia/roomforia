"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const titleChars = "Ваши товары в интерьерах,".split("")
const titleChars2 = "которые уже хотят купить".split("")

export default function Hero() {
  return (
    <section className="pt-20 pb-0 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADING */}
        <div className="text-center mb-8 pt-8">

          {/* Строка 1 */}
          <div className="flex items-end justify-center flex-wrap mb-1 min-h-[90px] md:min-h-[110px]">
            {titleChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + i * 0.035,
                }}
                className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.28em" : "auto",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Строка 2 — оранжевая */}
          <div className="flex items-end justify-center flex-wrap mb-10 min-h-[90px] md:min-h-[110px]">
            {titleChars2.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: 0.1 + (titleChars.length + i) * 0.035,
                }}
                className="text-4xl md:text-6xl lg:text-[72px] font-semibold tracking-tight text-[#d66501] leading-[1.02]"
                style={{
                  display: char === " " ? "inline-block" : "inline",
                  width: char === " " ? "0.28em" : "auto",
                }}
              >
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </div>

          {/* Подзаголовок */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
            className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Мы интегрируем ваш каталог в AI-дизайн.
            Пользователь видит товар в интерьере — переходит — покупает у вас
          </motion.p>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
            className="flex gap-4 flex-wrap justify-center"
          >
            <button className="px-8 py-4 rounded-full bg-[#d66501] text-white font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:shadow-[0_8px_32px_rgba(214,101,1,0.5)] hover:scale-[1.02]">
              Подключить каталог
            </button>
            <Link
              href="/how-it-works"
              className="px-8 py-4 rounded-full border-2 border-[#855dda] text-[#855dda] font-medium hover:bg-[#855dda] hover:text-white transition-all duration-200"
            >
              Как это работает
            </Link>
          </motion.div>
        </div>
      </div>

      {/* FULLSCREEN BANNER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
        className="w-full px-4 md:px-8 mt-4"
      >
        <div className="relative w-full h-[480px] md:h-[580px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
          {/* Картинка */}
          <img
            src="/images/hero/room-real.png"
            alt="Интерьер"
            className="absolute inset-0 w-full h-full object-cover"
            draggable={false}
          />

          {/* Оверлей */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

          {/* Бейджи снизу */}
          <div className="absolute bottom-6 left-6 flex gap-3 flex-wrap">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-sm">
              <p className="text-xs text-gray-400 font-mono mb-0.5">конверсия</p>
              <p className="text-sm font-semibold text-[#1E1E1E]">+38% через интерьер</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-sm">
              <p className="text-xs text-gray-400 font-mono mb-0.5">интеграция</p>
              <p className="text-sm font-semibold text-[#1E1E1E]">от 3 дней</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2.5 shadow-sm">
              <p className="text-xs text-gray-400 font-mono mb-0.5">новый канал</p>
              <p className="text-sm font-semibold text-[#1E1E1E]">без аукционов</p>
            </div>
          </div>
        </div>
      </motion.div>

    </section>
  )
}
