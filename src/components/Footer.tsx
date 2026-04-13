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
                  href="mailto:info@roomforia.ru"
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200"
                >
                  info@roomforia.ru
                </a>
              </div>
            </motion.div>

          </div>
        </div>

        {/* ===== LEGAL ===== */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="py-8 border-t border-white/5 text-[11px] text-white/20 leading-relaxed space-y-1"
        >
          <p>Общество с ограниченной ответственностью «РУМФОРИА»</p>
          <p>191015, Российская Федерация, г. Санкт-Петербург, пр. Суворовский 38, лит Б, кв. 24</p>
          <p>ИНН: 7842234228 &nbsp;·&nbsp; ОГРН: 1267800019618 &nbsp;·&nbsp; КПП: 784201001</p>
          <p>р/с 40702810432060019369 &nbsp;·&nbsp; Банк: ФИЛИАЛ «САНКТ-ПЕТЕРБУРГСКИЙ» АО «АЛЬФА-БАНК» &nbsp;·&nbsp; ИНН банка: 7728168971 &nbsp;·&nbsp; БИК: 044030786 &nbsp;·&nbsp; к/с 30101810600000000786</p>
          <p>Генеральный директор — Кузьминых Евгения Олеговна. На основании Устава.</p>
        </motion.div>

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
            <Link href="/privacy" className="hover:text-white/50 transition-colors duration-200">
              Политика конфиденциальности
            </Link>
            <Link href="/terms" className="hover:text-white/50 transition-colors duration-200">
              Пользовательское соглашение
            </Link>
          </div>
        </motion.div>

      </div>
    </footer>
  )
}