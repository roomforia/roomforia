"use client"

import { motion } from "framer-motion"

const brands = [
  "SKDESIGN", "Coswick", "ТОК мебель", "Divan.ru",
  "Hoff", "Zara Home", "ИКЕА", "Askona",
]

// Дублируем для бесконечной ленты
const marqueeItems = [...brands, ...brands]

export default function BrandsSection() {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto">

        {/* ===== БОЛЬШОЙ БЛОК ===== */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="bg-[#d66501] rounded-3xl overflow-hidden"
        >
          <div className="px-10 md:px-16 pt-14 pb-10">

            {/* Верхняя строка: заголовок + текст */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">

              {/* Заголовок */}
              <h2 className="text-3xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight tracking-tight max-w-xl">
                Именно так это и будет выглядеть
              </h2>

              {/* Текст справа */}
              <p className="text-black/40 text-sm md:text-base max-w-xs leading-relaxed md:text-right">
                Реальные товары внутри ваших проектов · Переход к продавцу прямо из приложения · Актуальные каталоги и ссылки
              </p>
            </div>

            {/* Описание */}
            <p className="text-black/60 text-base md:text-lg max-w-2xl leading-relaxed mb-14">
              Roomforia работает с реальными брендами и поставщиками. В вашей
              визуализации вы увидите вещи, которые существуют, продаются и могут
              оказаться у вас дома.
            </p>

          </div>

          {/* Разделитель */}
          <div className="h-[1px] bg-white/10 mx-10 md:mx-16" />

          {/* ===== MARQUEE ===== */}
          <div className="py-10 overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap select-none">
              {marqueeItems.map((brand, i) => (
                <div
                  key={i}
                  className="flex items-center gap-10 mx-10"
                >
                  {/* Разделитель-точка */}
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d66501] flex-shrink-0" />
                  {/* Бренд */}
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