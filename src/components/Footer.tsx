"use client"

import Link from "next/link"
import { motion } from "framer-motion"

const nav = [
  { href: "/", label: "Главная" },
  { href: "/how-it-works", label: "Как это работает" },
  { href: "/partners", label: "Партнёрам" },
  { href: "/about", label: "О нас" },
]

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {/* ===== TOP ===== */}
        <div className="pt-20 pb-16 border-b border-white/10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">

            {/* LEFT — логотип + описание */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-sm"
            >
              <div className="font-semibold text-2xl mb-4 tracking-tight">
                Roomforia
              </div>
              <p className="text-white/40 text-sm leading-relaxed">
                AI-платформа для дизайна и продаж в строительстве и интерьерах
              </p>
            </motion.div>

            {/* RIGHT — nav + contact + email */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-12"
            >
              {/* Навигация */}
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/30 mb-5 font-medium">
                  Навигация
                </p>
                <div className="flex flex-col gap-3">
                  {nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Контакты */}
              <div>
                <p className="text-xs uppercase tracking-[0.15em] text-white/30 mb-5 font-medium">
                  Контакты
                </p>
                
                <a
                  href="mailto:hello@roomforia.com"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  hello@roomforia.com
                </a>

                {/* Подписка */}
                <p className="text-xs uppercase tracking-[0.15em] text-white/30 mb-3 font-medium mt-8">
                  Подписка
                </p>
                <div className="flex gap-2">
                  <input
                    placeholder="Email"
                    className="flex-1 px-4 py-2.5 rounded-full bg-white/8 border border-white/10 text-sm outline-none text-white placeholder:text-white/30 focus:border-white/30 transition-colors duration-200 min-w-0 w-40"
                  />
                  <button className="px-5 py-2.5 rounded-full bg-[#d66501] text-white text-sm font-medium hover:bg-[#bf5a01] transition-colors duration-200">
                    OK
                  </button>
                </div>
                <p className="text-xs text-white/25 mt-2">
                  Без спама. Только важное.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ===== BOTTOM ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          className="py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-white/25"
        >
          <span>© 2025 Roomforia</span>

          <div className="flex gap-6">
            <span className="hover:text-white/50 cursor-pointer transition-colors duration-200">
              Политика конфиденциальности
            </span>
            <span className="hover:text-white/50 cursor-pointer transition-colors duration-200">
              Пользовательское соглашение
            </span>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}