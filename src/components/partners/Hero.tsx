"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import PartnerModal from "@/components/PartnerModal"

const titleChars = "Ваши товары в интерьерах,".split("")
const titleChars2 = "которые уже хотят купить".split("")

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <PartnerModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="pt-20 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-8 pt-8">

            {/* Мобиль */}
            <div className="md:hidden mb-6">
              <p className="text-[32px] font-bold tracking-tight leading-[1.1] text-[#1E1E1E] mb-1">Ваши товары в интерьерах,</p>
              <p className="text-[32px] font-bold tracking-tight leading-[1.1] text-[#d66501]">которые уже хотят купить</p>
            </div>

            {/* Десктоп */}
            <div className="hidden md:block">
              <div className="flex items-end justify-center flex-wrap mb-1 min-h-[90px] md:min-h-[110px]">
                {titleChars.map((char, i) => (
                  <motion.span key={i}
                    initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.035 }}
                    className="text-6xl lg:text-[72px] font-bold tracking-tight text-[#1E1E1E] leading-[1.02]"
                    style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                  >{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </div>
              <div className="flex items-end justify-center flex-wrap mb-10 min-h-[90px] md:min-h-[110px]">
                {titleChars2.map((char, i) => (
                  <motion.span key={i}
                    initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (titleChars.length + i) * 0.035 }}
                    className="text-6xl lg:text-[72px] font-bold tracking-tight text-[#d66501] leading-[1.02]"
                    style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                  >{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
              className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8 md:mb-10"
            >
              Мы интегрируем ваш каталог в AI-дизайн.
              Пользователь видит товар в интерьере — переходит — покупает у вас
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
              className="flex gap-3 md:gap-4 flex-wrap justify-center"
            >
              <button
                onClick={() => setModalOpen(true)}
                className="px-6 md:px-8 py-3 md:py-4 rounded-full bg-[#d66501] text-white text-sm md:text-base font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.4)] hover:scale-[1.02]"
              >
                Подключить каталог
              </button>
              <Link href="/how-it-works"
                className="px-6 md:px-8 py-3 md:py-4 rounded-full border-2 border-[#855dda] text-[#855dda] text-sm md:text-base font-medium hover:bg-[#855dda] hover:text-white transition-all duration-200"
              >
                Как это работает
              </Link>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
          className="w-full px-4 md:px-8 mt-4"
        >
          <div className="relative w-full h-[320px] md:h-[580px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
            <img src="/images/hero/room-real.png" alt="Интерьер" className="absolute inset-0 w-full h-full object-cover" draggable={false} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 flex gap-2 md:gap-3 flex-wrap">
              {[
                { label: "конверсия", val: "+38% через интерьер" },
                { label: "интеграция", val: "от 3 дней" },
                { label: "новый канал", val: "без аукционов" },
              ].map((b, i) => (
                <div key={i} className="bg-white/90 backdrop-blur-sm rounded-xl md:rounded-2xl px-3 md:px-4 py-2 md:py-2.5 shadow-sm">
                  <p className="text-[10px] md:text-xs text-gray-400 font-mono mb-0.5">{b.label}</p>
                  <p className="text-xs md:text-sm font-semibold text-[#1E1E1E]">{b.val}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </>
  )
}
