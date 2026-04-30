"use client"

import { motion } from "framer-motion"

const brands = [
  "SKDESIGN", "Coswick", "ТОКмебель", "Мир света", "Divan.ru",
]

const marqueeItems = [...brands, ...brands, ...brands]

export default function BrandsSection() {
  return (
    <section className="pb-0 pt-12 md:pt-28 bg-white">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#d66501] overflow-hidden"
        >
          <div className="px-10 md:px-16 pt-14 pb-10">
            <p className="text-white/50 text-sm md:text-base font-medium uppercase tracking-widest mb-5">
              Раньше вы беспокоились: «Наверное, примерно так это будет выглядеть в жизни»
            </p>
            <div className="flex flex-col mb-8">
              <h2 className="text-3xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight tracking-tight">
                С Румфорией — будет выглядеть именно так, как задумано
              </h2>
            </div>
            <p className="text-white/70 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
              Мы работаем с реальными брендами и поставщиками. В вашей визуализации
              вы увидите вещи, которые существуют, продаются и могут оказаться у вас дома.
            </p>
            <p className="text-white/50 text-sm md:text-base max-w-2xl leading-relaxed mb-4">
              Партнёры предоставляют актуальные каталоги, 3D-модели и характеристики товаров,
              а мы помогаем увидеть эти позиции в вашем интерьере и сразу перейти к покупке.
            </p>
            <p className="text-white/40 text-xs md:text-sm mb-8">
              Мебель · Напольные покрытия · Освещение · Отделочные материалы · Сантехника · Декор и текстиль
            </p>
          </div>
          <div className="h-[1px] bg-white/10 mx-10 md:mx-16" />
          <div className="py-10 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap select-none">
              {marqueeItems.map((brand, i) => (
                <div key={i} className="flex items-center gap-10 mx-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/40 flex-shrink-0" />
                  <span className="text-2xl md:text-3xl font-semibold text-white/80 hover:text-white transition-colors duration-300">
                    {brand}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
