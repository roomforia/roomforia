"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const products = [
  { name: "Диван", brand: "Divan.ru", price: 49990, img: "/images/products/sofa.png" },
  { name: "Стол", brand: "Хофф", price: 12990, img: "/images/products/table.png" },
  { name: "Ламинат", brand: "Coswick", price: 8490, img: "/images/products/laminate.png" },
]

const total = products.reduce((acc, p) => acc + p.price, 0)
const titleChars = "Интерьер становится".split("")

export default function ProductsShowcase() {
  const [active, setActive] = useState<number | null>(null)

  return (
    <section className="py-12 md:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* HEADER */}
        <div className="mb-8 md:mb-20">

          {/* Мобиль */}
          <div className="md:hidden mb-4">
            <p className="text-[28px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.2]">Интерьер становится</p>
            <p className="text-[28px] tracking-tight text-[#d66501] leading-[1.2]" style={{ fontFamily: "symphonyregular, serif" }}>списком покупок</p>
          </div>

          {/* Десктоп */}
          <div className="hidden md:block">
            <div className="flex items-end flex-wrap overflow-hidden mb-1">
              {titleChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.035 }}
                  className="text-7xl lg:text-[82px] font-semibold tracking-tight text-[#1E1E1E] leading-[1.02]"
                  style={{ display: char === " " ? "inline-block" : "inline", width: char === " " ? "0.28em" : "auto" }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: titleChars.length * 0.035 + 0.05 }}
            >
              <span className="text-7xl lg:text-[82px] tracking-tight text-[#d66501] leading-[1.02]" style={{ fontFamily: "symphonyregular, serif" }}>
                списком покупок
              </span>
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.8 }}
            className="text-gray-400 text-lg md:text-xl mt-4"
          >
            Все элементы дизайна — реальные товары из каталогов партнёров
          </motion.p>
        </div>

        {/* CONTENT */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-24 items-center">

          {/* LEFT — картинка */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="relative rounded-3xl overflow-hidden"
            style={{ aspectRatio: "4/3" }}
          >
            <Image
              src="/images/after.png"
              alt="Интерьер"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            <div className="absolute bottom-5 left-5 bg-white/90 backdrop-blur-sm rounded-2xl px-4 py-2">
              <p className="text-xs text-gray-400 font-mono mb-0.5">итого</p>
              <p className="text-lg font-semibold text-[#1E1E1E]">{total.toLocaleString()} ₽</p>
            </div>
          </motion.div>

          {/* RIGHT — список товаров */}
          <div>
            <div className="flex flex-col">
              {products.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                  className="group relative cursor-pointer"
                  onMouseEnter={() => setActive(i)}
                  onMouseLeave={() => setActive(null)}
                >
                  <div className="relative h-[1px] overflow-hidden">
                    <div className="absolute inset-0 bg-gray-100" />
                    <div
                      className="absolute inset-0 origin-left scale-x-0 group-hover:scale-x-100"
                      style={{ backgroundColor: "#d66501", transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
                    />
                  </div>
                  <div className="flex items-center gap-4 md:gap-6 py-5 md:py-7">
                    <span className="text-xs font-mono text-gray-300 flex-shrink-0 w-6 group-hover:text-[#d66501] transition-colors duration-500">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <motion.div
                      animate={{ scale: active === i ? 1.08 : 1 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl overflow-hidden bg-gray-50 relative"
                    >
                      <Image src={p.img} alt={p.name} fill className="object-cover" sizes="56px" />
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <p className="text-base md:text-lg font-semibold text-[#1E1E1E] leading-snug">{p.name}</p>
                      <p className="text-sm text-gray-400">{p.brand}</p>
                    </div>
                    <div className="flex items-center gap-2 md:gap-3 flex-shrink-0">
                      <span className="text-sm md:text-base font-semibold text-[#1E1E1E]">{p.price.toLocaleString()} ₽</span>
                      <motion.div
                        animate={{ x: active === i ? 4 : 0, opacity: active === i ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="w-6 h-6 rounded-full bg-[#d66501] flex items-center justify-center flex-shrink-0"
                      >
                        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                          <path d="M2 5h6M5 2l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
              <div className="h-[1px] bg-gray-100" />
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
                className="flex items-center justify-between pt-7"
              >
                <span className="text-gray-400 text-sm font-mono uppercase tracking-widest">Итого</span>
                <span className="text-2xl md:text-3xl font-semibold text-[#1E1E1E]">{total.toLocaleString()} ₽</span>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
