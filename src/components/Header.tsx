"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import PartnerModal from "./PartnerModal"

const DEMO_URL = "https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"

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
        <div className={`transition-all duration-300 ${scrolled ? "bg-white border-b border-gray-100 shadow-[0_2px_20px_rgba(0,0,0,0.06)]" : "bg-white"}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-[68px]">

            {/* LOGO — gradient */}
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

            {/* BURGER */}
            <button onClick={() => setOpen(!open)} className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px]" aria-label="Меню">
              <motion.span animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }} transition={{ duration: 0.3 }} className="block w-5 h-[1.5px] bg-[#1E1E1E] origin-center" />
              <motion.span animate={{ opacity: open ? 0 : 1, scaleX: open ? 0 : 1 }} transition={{ duration: 0.2 }} className="block w-5 h-[1.5px] bg-[#1E1E1E]" />
              <motion.span animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }} transition={{ duration: 0.3 }} className="block w-5 h-[1.5px] bg-[#1E1E1E] origin-center" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
              className="h-full flex flex-col justify-center items-start px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <nav className="flex flex-col gap-8 mb-10">
                {[
                  { href: "/how-it-works", label: "Как это работает" },
                  { href: "/partners", label: "Партнёрам" },
                  { href: "/about", label: "О нас" },
                ].map((item, i) => (
                  <motion.div key={item.href} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08, duration: 0.35 }}>
                    <Link href={item.href} onClick={() => setOpen(false)}
                      className="text-4xl font-semibold text-[#1E1E1E] tracking-tight hover:text-[#d66501] transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.28, duration: 0.35 }}
                className="flex flex-col gap-3 w-full max-w-xs"
              >
                <button
                  onClick={() => { setOpen(false); setModalOpen(true) }}
                  className="w-full py-3 rounded-full border-2 border-[#855dda] text-[#855dda] text-center font-medium text-sm"
                >
                  Стать партнёром
                </button>
                <a href={DEMO_URL} target="_blank"
                  className="w-full py-3 rounded-full bg-[#d66501] text-white text-center font-medium text-sm shadow-[0_4px_14px_rgba(214,101,1,0.35)]"
                >
                  Скачать
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
