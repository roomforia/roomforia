"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"

const items = [
  {
    title: "Анализ пространства",
    desc: "AI понимает геометрию комнаты, свет и расположение объектов",
    img: "/images/how/underhood/analysis.png",
    rotate: -14, x: -155, y: 15, accent: "#855dda",
  },
  {
    title: "Каталоги брендов",
    desc: "Мы подключаем реальные товары партнёров и их каталоги",
    img: "/images/how/underhood/catalog.png",
    rotate: 0, x: 0, y: -20, accent: "#d66501",
  },
  {
    title: "Готовый интерьер",
    desc: "Дизайн собирается из реальных товаров, которые можно купить",
    img: "/images/how/underhood/result.png",
    rotate: 14, x: 155, y: 15, accent: "#855dda",
  },
]

const titleChars = "Как это работает".split("")

function Phone({ img, small = false }: { img: string; small?: boolean }) {
  const w = small ? "140px" : "200px"
  const h = small ? "302px" : "432px"
  const br = small ? "28px" : "36px"
  return (
    <div className="relative overflow-hidden flex-shrink-0"
      style={{ width: w, height: h, borderRadius: br, border: "6px solid #111", boxShadow: "0 24px 60px rgba(0,0,0,0.35)" }}
    >
      <Image src={img} alt="" fill className="object-cover" sizes="200px" />
      <div className="absolute left-1/2 -translate-x-1/2 bg-black rounded-full z-20" style={{ top: "10px", width: "68px", height: "20px" }} />
      <div className="absolute left-1/2 -translate-x-1/2 rounded-full z-20" style={{ bottom: "7px", width: "50px", height: "4px", backgroundColor: "rgba(255,255,255,0.35)" }} />
      <div className="absolute inset-0 pointer-events-none z-10" style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, transparent 40%)" }} />
    </div>
  )
}

export default function UnderTheHood() {
  const fanRef = useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // БАГ 1: once:true — заголовок появляется один раз и не пропадает
  const isInView = useInView(fanRef, { once: false, margin: "-20% 0px -20% 0px" })

  return (
    <section className="py-10 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER — animate вместо whileInView чтобы не пропадал */}
        <div className="mb-8 md:mb-20">
          {/* Мобиль — простой текст, не исчезает */}
          <div className="md:hidden mb-2">
            <p className="text-[28px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.15]">
              Как это работает
            </p>
          </div>
          {/* Десктоп — побуквенно, once:true */}
          <div className="hidden md:flex items-end flex-wrap overflow-hidden mb-2">
            {titleChars.map((char, i) => (
              <motion.span key={i}
                initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                className="text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
              >{char === " " ? "\u00A0" : char}</motion.span>
            ))}
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.7 }}
            className="text-sm md:text-xl text-gray-400"
          >
            Мы не просто создаём интерьер. Мы собираем его из реальных товаров партнёров.
          </motion.p>
        </div>

        {/* MAIN */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-24 items-center">

          {/* LEFT — веер */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex justify-center"
          >
            <div ref={fanRef} className="relative"
              style={isMobile ? { width: "140px", height: "302px" } : { width: "200px", height: "432px" }}
            >
              {items.map((item, i) => {
                const fanX = isMobile ? item.x * 0.5 : item.x
                const fanRotate = isMobile ? item.rotate * 0.6 : item.rotate
                const fanned = { rotate: fanRotate, x: fanX, y: item.y, zIndex: i === 1 ? 10 : 5 }
                const stacked = {
                  rotate: i === 0 ? -4 : i === 2 ? 4 : 0,
                  x: i === 0 ? -8 : i === 2 ? 8 : 0,
                  y: i === 1 ? 0 : 8,
                  zIndex: i === 1 ? 10 : 5,
                }
                return (
                  <motion.div key={i} className="absolute top-0 left-0"
                    animate={isInView ? fanned : stacked}
                    transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: 0 }}
                    style={{ transformOrigin: "bottom center" }}
                  >
                    <motion.div
                      animate={{ opacity: isInView ? 0.45 : 0, scale: isInView ? 1 : 0.8 }}
                      transition={{ duration: 0.5 }}
                      className="absolute -z-10"
                      style={{ inset: "-30px", borderRadius: "56px", backgroundColor: item.accent, filter: "blur(40px)" }}
                    />
                    <Phone img={item.img} small={isMobile} />
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* RIGHT — список */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
          >
            <div className="flex flex-col">
              {items.map((item, i) => (
                <motion.div key={i} className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 + i * 0.1 }}
                >
                  <div className="relative h-[1px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: item.accent, transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }} />
                  </div>
                  <div className="flex items-start gap-5 md:gap-6 py-5 md:py-8">
                    <span className="text-xs font-mono text-gray-300 flex-shrink-0 w-6 mt-1 group-hover:text-[#855dda] transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-base md:text-2xl font-semibold text-[#1E1E1E] mb-1 md:mb-2 leading-snug">{item.title}</h3>
                      <p className="text-xs md:text-base text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full flex-shrink-0 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      style={{ backgroundColor: item.accent }} />
                  </div>
                </motion.div>
              ))}
              <div className="h-[1px] bg-gray-100" />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
