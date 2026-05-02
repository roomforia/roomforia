"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export default function PartnersTeaser() {
  return (
    <section className="pb-10 md:pb-12 pt-0 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-center justify-between gap-6 rounded-3xl px-8 py-8 md:py-10"
          style={{ backgroundColor: "#f9f6f2" }}
        >
          <div className="max-w-xl">
            <p className="text-base md:text-xl font-semibold text-[#1E1E1E] leading-snug mb-2">
              Вы представляете бренд, магазин или студию в сфере интерьера?
            </p>
            <p className="text-sm md:text-base text-gray-400 leading-relaxed">
              Для брендов, производителей, продавцов, студий и девелоперов у нас есть отдельный раздел о сотрудничестве и добавлении товаров в приложение.
            </p>
          </div>
          <Link
            href="/partners"
            className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 rounded-full border-2 border-[#855dda] text-[#855dda] text-sm font-semibold hover:bg-[#855dda] hover:text-white transition-all duration-200 self-start md:self-auto"
          >
            Перейти в раздел для партнёров
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
