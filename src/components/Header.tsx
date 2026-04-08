"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)

  const pathname = usePathname()

  /* ================= SCROLL ================= */
  useEffect(() => {
    let last = 0

    const handle = () => {
      const current = window.scrollY

      setScrolled(current > 10)

      if (current > last && current > 80) {
        setHidden(true)
      } else {
        setHidden(false)
      }

      last = current
    }

    window.addEventListener("scroll", handle)
    return () => window.removeEventListener("scroll", handle)
  }, [])

  /* ================= MENU CONTROL ================= */
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto"

    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
    }

    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [open])

  /* ================= CTA ================= */
  const getCTA = () => {
    if (pathname === "/partners") {
      return { text: "Подключить каталог", href: "/partners" }
    }
    return { text: "Попробовать", href: "/" }
  }

  const cta = getCTA()

  /* ================= NAV LINK ================= */
  const NavLink = ({ href, children }: any) => {
    const active = pathname === href

    return (
      <Link
        href={href}
        className="relative group text-sm"
      >
        <span
          className={`transition ${
            active ? "opacity-100" : "opacity-70 group-hover:opacity-100"
          }`}
        >
          {children}
        </span>

        {/* underline */}
        <span
          className={`
            absolute left-0 -bottom-1 h-[1.5px] bg-black transition-all duration-500
            ${active ? "w-full" : "w-0 group-hover:w-full"}
          `}
        />
      </Link>
    )
  }

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -80 : 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 w-full z-50"
      >
        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "backdrop-blur-xl bg-white/70 border-b border-black/5 shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center justify-between h-[68px]">

            {/* LOGO */}
            <Link href="/" className="font-semibold text-[18px] tracking-tight">
              Roomforia
            </Link>

            {/* NAV */}
            <nav className="hidden md:flex items-center gap-8">
              <NavLink href="/how-it-works">Как это работает</NavLink>
              <NavLink href="/partners">Партнёрам</NavLink>
              <NavLink href="/about">О нас</NavLink>
            </nav>

            {/* ACTIONS */}
            <div className="hidden md:flex items-center gap-3">

              <Link
                href="/partners"
                className="px-4 py-2 rounded-full border border-black/10 text-sm hover:bg-black/5 hover:scale-[1.02] transition"
              >
                Стать партнёром
              </Link>

              <Link
                href={cta.href}
                className="px-4 py-2 rounded-full bg-black text-white text-sm hover:scale-[1.03] hover:opacity-90 transition"
              >
                {cta.text}
              </Link>

            </div>

            {/* BURGER */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-6 h-6"
            >
              <motion.span
                animate={{ rotate: open ? 45 : 0, y: open ? 0 : -5 }}
                className="absolute w-5 h-[2px] bg-black"
              />
              <motion.span
                animate={{ rotate: open ? -45 : 0, y: open ? 0 : 5 }}
                className="absolute w-5 h-[2px] bg-black"
              />
            </button>

          </div>
        </div>
      </motion.header>

      {/* ================= MOBILE ================= */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/80 backdrop-blur-2xl"
            onClick={() => setOpen(false)}
          >

            <motion.div
              initial={{ y: 60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 60, opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="h-full flex flex-col justify-center items-center text-center px-6"
              onClick={(e) => e.stopPropagation()}
            >

              <div className="flex flex-col gap-10 text-2xl font-medium">

                {[
                  { href: "/how-it-works", label: "Как это работает" },
                  { href: "/partners", label: "Партнёрам" },
                  { href: "/about", label: "О нас" },
                ].map((item, i) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link href={item.href} onClick={() => setOpen(false)}>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

              </div>

              {/* CTA */}
              <div className="mt-14 flex flex-col gap-4 w-full max-w-xs">

                <Link
                  href="/partners"
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-full border text-center"
                >
                  Стать партнёром
                </Link>

                <Link
                  href={cta.href}
                  onClick={() => setOpen(false)}
                  className="w-full py-3 rounded-full bg-black text-white text-center"
                >
                  {cta.text}
                </Link>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}