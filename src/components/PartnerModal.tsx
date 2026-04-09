"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PartnerModal({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    const esc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [onClose])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoading(true)

    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const res = await fetch("/api/partner", {
        method: "POST",
        body: data,
      })

      if (res.ok) {
        setSuccess(true)
        form.reset()

        setTimeout(() => {
          setSuccess(false)
          onClose()
        }, 2500)
      }
    } catch (e) {
      alert("Ошибка отправки")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 40 }}
            transition={{ duration: 0.4 }}
            className="fixed z-50 top-1/2 left-1/2 w-[92%] max-w-xl -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* CLOSE */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-xl opacity-50 hover:opacity-100"
            >
              ×
            </button>

            <AnimatePresence mode="wait">
              {success ? (
                /* ================= SUCCESS ================= */
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-10"
                >
                  <div className="text-5xl mb-4">✨</div>

                  <h3 className="text-2xl font-semibold mb-2">
                    Заявка отправлена
                  </h3>

                  <p className="text-gray-500">
                    Мы свяжемся с вами в ближайшее время
                  </p>
                </motion.div>
              ) : (
                /* ================= FORM ================= */
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center">
                    Стать партнёром
                  </h2>

                  <p className="text-gray-500 text-center mb-6">
                    Заполните форму — мы свяжемся с вами
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                      name="company"
                      placeholder="Название компании *"
                      required
                      className="w-full px-4 py-3 rounded-full border"
                    />

                    <input
                      name="name"
                      placeholder="Контактное лицо *"
                      required
                      className="w-full px-4 py-3 rounded-full border"
                    />

                    <input
                      name="phone"
                      placeholder="Телефон"
                      className="w-full px-4 py-3 rounded-full border"
                    />

                    <input
                      name="email"
                      type="email"
                      placeholder="Рабочий email *"
                      required
                      className="w-full px-4 py-3 rounded-full border"
                    />

                    <textarea
                      name="message"
                      placeholder="Сообщение"
                      className="w-full px-4 py-3 rounded-xl border h-24"
                    />

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3 rounded-full bg-black text-white hover:opacity-90 transition flex items-center justify-center"
                    >
                      {loading ? (
                        <span className="animate-pulse">Отправка...</span>
                      ) : (
                        "Отправить заявку"
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}