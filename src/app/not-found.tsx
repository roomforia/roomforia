"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-screen flex items-center justify-center px-6">
        <div className="max-w-2xl mx-auto text-center py-32">

          {/* 404 большой */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative mb-8 select-none"
          >
            <span
              className="text-[160px] md:text-[220px] font-bold leading-none tracking-tighter"
              style={{
                background: "linear-gradient(135deg, #d66501 0%, #855dda 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                opacity: 0.15,
              }}
            >
              404
            </span>
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="w-20 h-20 md:w-24 md:h-24 rounded-3xl flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #d66501, #855dda)" }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                  <path d="M20 8v16M20 30v2" stroke="white" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Текст */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="text-2xl md:text-4xl font-semibold text-[#1E1E1E] mb-4 tracking-tight"
          >
            Страница не найдена
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-10"
          >
            Похоже, этой страницы не существует или она была перемещена.
            <br className="hidden md:block" />
            Вернитесь на главную — там всё на месте.
          </motion.p>

          {/* Кнопки */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/"
              className="px-8 py-4 rounded-full bg-[#d66501] text-white font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.35)] hover:scale-[1.02]"
            >
              На главную
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-4 rounded-full border-2 border-gray-200 text-[#1E1E1E] font-medium hover:border-[#855dda] hover:text-[#855dda] transition-all duration-200"
            >
              Как это работает
            </Link>
          </motion.div>

        </div>
      </main>
      <Footer />
    </>
  )
}
