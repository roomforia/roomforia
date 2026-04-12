"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import PartnerModal from "@/components/PartnerModal"

const DEMO_URL = "https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"

function gradientColor(i: number, total: number) {
  const pct = i / (total - 1)
  const r = Math.round(214 + (133 - 214) * pct)
  const g = Math.round(101 + (93 - 101) * pct)
  const b = Math.round(1 + (218 - 1) * pct)
  return `rgb(${r},${g},${b})`
}

const line1 = "Ваши товары в интерьерах,".split("")
const line2 = "которые уже хотят купить".split("")
const totalChars = line1.length + line2.length

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <PartnerModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <section className="pt-20 pb-0 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-8 pt-8">

            {/* МОБИЛЬ */}
            <div className="md:hidden mb-6">
              <p className="text-[32px] font-bold tracking-tight leading-[1.1] mb-1"
                style={{ background: "linear-gradient(90deg, #d66501, #c05010)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                Ваши товары в интерьерах,
              </p>
              <p className="text-[32px] font-bold tracking-tight leading-[1.1]"
                style={{ background: "linear-gradient(90deg, #a0508a, #855dda)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
              >
                которые уже хотят купить
              </p>
            </div>

            {/* ДЕСКТОП — побуквенно с градиентом */}
            <div className="hidden md:block">
              <div className="flex items-end justify-center flex-wrap mb-1 min-h-[90px]">
                {line1.map((char, i) => (
                  <motion.span key={i}
                    initial={{ opacity: 0, x: -16, filter: "blur(12px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 + i * 0.035 }}
                    className="text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05]"
                    style={{
                      color: gradientColor(i, totalChars),
                      display: char === " " ? "inline-block" : "inline",
                      width: char === " " ? "0.28em" : "auto",
                    }}
                  >{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </div>
              <div className="flex items-end justify-center flex-wrap mb-8 min-h-[90px]">
                {line2.map((char, i) => (
                  <motion.span key={i}
                    initial={{ opacity: 0, x: -16, filter: "blur(12px)" }}
                    animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: 0.1 + (line1.length + i) * 0.035 }}
                    className="text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05]"
                    style={{
                      color: gradientColor(line1.length + i, totalChars),
                      display: char === " " ? "inline-block" : "inline",
                      width: char === " " ? "0.28em" : "auto",
                    }}
                  >{char === " " ? "\u00A0" : char}</motion.span>
                ))}
              </div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 1.4 }}
              className="text-gray-500 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-8"
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
          <div className="relative w-full h-[280px] md:h-[580px] rounded-3xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.12)]">
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
