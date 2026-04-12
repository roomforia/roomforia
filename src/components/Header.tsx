"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import PartnerModal from "./PartnerModal"

const DEMO_URL = "https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"

const navLinks = [
  { href: "/how-it-works", label: "Как это работает" },
  { href: "/partners", label: "Партнёрам" },
  { href: "/about", label: "О нас" },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    let last = 0
    const handle = () => {
      const current = window.scrollY
      setScrolled(current > 10)
      setHidden(current > last && current > 80)
      last = current
    }
    window.addEventListener("scroll", handle, { passive: true })
    return () => window.removeEventListener("scroll", handle)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false) }
    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [open])

  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
    const active = pathname === href
    return (
      <Link href={href} className="relative group text-sm font-medium">
        <span className={`transition-opacity duration-200 ${active ? "opacity-100" : "opacity-50 group-hover:opacity-100"}`}>{children}</span>
        <span className={`absolute left-0 -bottom-0.5 h-[1.5px] bg-[#1E1E1E] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`} />
      </Link>
    )
  }

  return (
    <>
      <PartnerModal open={modalOpen} onClose={() => setModalOpen(false)} />

      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div className={`transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-100/80 shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
            : "bg-white/80 backdrop-blur-sm"
        }`}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[64px]">

            {/* LOGO */}
            <Link href="/" className="font-bold text-[20px] tracking-tight hover:opacity-80 transition-opacity duration-200"
              style={{ background: "linear-gradient(90deg, #d66501, #855dda)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
            >
              Roomforia
            </Link>

            {/* NAV desktop */}
            <nav className="hidden md:flex items-center gap-10">
              <NavLink href="/how-it-works">Как это работает</NavLink>
              <NavLink href="/partners">Партнёрам</NavLink>
              <NavLink href="/about">О нас</NavLink>
            </nav>

            {/* ACTIONS desktop */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => setModalOpen(true)}
                className="px-5 py-2.5 rounded-full border-2 border-[#855dda] text-[#855dda] text-sm font-medium hover:bg-[#855dda] hover:text-white transition-all duration-200"
              >
                Стать партнёром
              </button>
              <a href={DEMO_URL} target="_blank"
                className="px-5 py-2.5 rounded-full bg-[#d66501] text-white text-sm font-medium hover:bg-[#bf5a01] transition-all duration-200 shadow-[0_4px_14px_rgba(214,101,1,0.35)]"
              >
                Скачать
              </a>
            </div>

            {/* BURGER — минималистичный крест */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label="Меню"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 0 : -4 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                className="absolute block w-[18px] h-[1.5px] bg-[#1E1E1E] origin-center"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? 0 : 4 }}
                transition={{ duration: 0.28, ease: [0.32, 0.72, 0, 1] }}
                className="absolute block w-[18px] h-[1.5px] bg-[#1E1E1E] origin-center"
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU — премиальный полупрозрачный оверлей */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />

            {/* Панель — снизу вверх, не на весь экран */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
              className="fixed bottom-0 left-0 right-0 z-50 rounded-t-[28px] overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.96)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                boxShadow: "0 -20px 60px rgba(0,0,0,0.12), 0 -1px 0 rgba(0,0,0,0.06)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Ручка */}
              <div className="flex justify-center pt-3 pb-1">
                <div className="w-8 h-[3px] rounded-full bg-gray-200" />
              </div>

              <div className="px-7 pt-4 pb-10">

                {/* Лого внутри меню */}
                <div className="flex items-center justify-between mb-7">
                  <span className="font-bold text-[17px]"
                    style={{ background: "linear-gradient(90deg, #d66501, #855dda)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
                  >
                    Roomforia
                  </span>
                  <button
                    onClick={() => setOpen(false)}
                    className="w-7 h-7 rounded-full bg-gray-100 flex items-center justify-center"
                  >
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M1 1l8 8M9 1L1 9" stroke="#999" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>

                {/* Навигация */}
                <nav className="flex flex-col mb-7">
                  {navLinks.map((item, i) => {
                    const active = pathname === item.href
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.06 + i * 0.06, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between py-3.5 border-b border-gray-100 group"
                        >
                          <span className={`text-[17px] font-medium tracking-tight transition-colors duration-200 ${
                            active ? "text-[#1E1E1E]" : "text-[#1E1E1E]/70 group-hover:text-[#1E1E1E]"
                          }`}>
                            {item.label}
                          </span>
                          <svg
                            width="16" height="16" viewBox="0 0 16 16" fill="none"
                            className={`transition-all duration-200 ${active ? "opacity-100" : "opacity-25 group-hover:opacity-60"}`}
                          >
                            <path d="M6 3l5 5-5 5" stroke={active ? "#d66501" : "#1E1E1E"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Link>
                      </motion.div>
                    )
                  })}
                </nav>

                {/* Кнопки */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.3 }}
                  className="flex flex-col gap-2.5"
                >
                  <a
                    href={DEMO_URL}
                    target="_blank"
                    className="w-full py-3.5 rounded-2xl bg-[#d66501] text-white text-center font-semibold text-[15px] shadow-[0_6px_20px_rgba(214,101,1,0.35)]"
                  >
                    Скачать приложение
                  </a>
                  <button
                    onClick={() => { setOpen(false); setModalOpen(true) }}
                    className="w-full py-3.5 rounded-2xl text-center font-medium text-[15px] text-[#855dda]"
                    style={{ backgroundColor: "rgba(133,93,218,0.08)" }}
                  >
                    Стать партнёром
                  </button>
                </motion.div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
