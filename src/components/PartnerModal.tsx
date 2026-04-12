"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function PartnerModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [agreed, setAgreed] = useState(false)

  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") onClose() }
    window.addEventListener("keydown", esc)
    return () => window.removeEventListener("keydown", esc)
  }, [onClose])

  // lock scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!agreed) return
    setLoading(true)
    const form = e.currentTarget
    const data = new FormData(form)
    try {
      const res = await fetch("/api/partner", { method: "POST", body: data })
      if (res.ok) {
        setSuccess(true)
        form.reset()
        setAgreed(false)
        setTimeout(() => { setSuccess(false); onClose() }, 3000)
      }
    } catch {
      alert("Ошибка отправки. Попробуйте позже.")
    } finally {
      setLoading(false)
    }
  }

  const inputCls = "w-full px-5 py-3.5 rounded-2xl border border-gray-200 bg-gray-50 text-[#1E1E1E] text-sm placeholder:text-gray-400 focus:outline-none focus:border-[#855dda] focus:bg-white transition-all duration-200"

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* OVERLAY */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-md"
            onClick={onClose}
          />

          {/* MODAL */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-[70] inset-0 flex items-center justify-center px-4 pointer-events-none"
          >
            <div
              className="relative w-full max-w-lg bg-white rounded-3xl shadow-[0_40px_100px_rgba(0,0,0,0.2)] overflow-hidden pointer-events-auto max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Декоративная полоска вверху */}
              <div className="h-1 w-full" style={{ background: "linear-gradient(90deg, #d66501, #855dda)" }} />

              <div className="px-8 py-8">
                {/* CLOSE */}
                <button
                  onClick={onClose}
                  className="absolute right-5 top-5 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-all duration-200"
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1 1l10 10M11 1L1 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                  </svg>
                </button>

                <AnimatePresence mode="wait">
                  {success ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="text-center py-10"
                    >
                      <div className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center"
                        style={{ background: "linear-gradient(135deg, #d66501, #855dda)" }}
                      >
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l5 5L20 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <h3 className="text-2xl font-semibold text-[#1E1E1E] mb-2">Заявка отправлена!</h3>
                      <p className="text-gray-400">Мы свяжемся с вами в течение дня</p>
                    </motion.div>
                  ) : (
                    <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      {/* Заголовок */}
                      <div className="mb-6">
                        <h2 className="text-2xl font-semibold text-[#1E1E1E] mb-1">Стать партнёром</h2>
                        <p className="text-gray-400 text-sm">Мы открыты для новых партнёрств. Заполните форму — свяжемся в течение дня.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                        <div>
                          <label className="text-xs font-medium text-gray-500 mb-1.5 block">Название компании <span className="text-[#d66501]">*</span></label>
                          <input name="company" required placeholder="ООО Мебель и Свет" className={inputCls} />
                        </div>

                        <div>
                          <label className="text-xs font-medium text-gray-500 mb-1.5 block">Контактное лицо <span className="text-[#d66501]">*</span></label>
                          <input name="name" required placeholder="Иван Иванов" className={inputCls} />
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                          <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Телефон</label>
                            <input name="phone" placeholder="+7 (999) 000-00-00" className={inputCls} />
                          </div>
                          <div>
                            <label className="text-xs font-medium text-gray-500 mb-1.5 block">Email <span className="text-[#d66501]">*</span></label>
                            <input name="email" type="email" required placeholder="hello@company.ru" className={inputCls} />
                          </div>
                        </div>

                        <div>
                          <label className="text-xs font-medium text-gray-500 mb-1.5 block">Сообщение</label>
                          <textarea name="message" placeholder="Расскажите о вашем бренде и каталоге..." className={`${inputCls} rounded-2xl h-24 resize-none`} />
                        </div>

                        {/* Чекбоксы */}
                        <div className="flex flex-col gap-2 mt-1">
                          <label className="flex items-start gap-3 cursor-pointer">
                            <div
                              className="w-4 h-4 rounded mt-0.5 flex-shrink-0 border-2 flex items-center justify-center transition-all duration-200 cursor-pointer"
                              style={{ borderColor: agreed ? "#855dda" : "#d1d5db", backgroundColor: agreed ? "#855dda" : "transparent" }}
                              onClick={() => setAgreed(!agreed)}
                            >
                              {agreed && <svg width="8" height="8" viewBox="0 0 8 8" fill="none"><path d="M1 4l2 2 4-4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                            </div>
                            <span className="text-xs text-gray-400 leading-relaxed">
                              Я соглашаюсь с <span className="underline cursor-pointer">Политикой конфиденциальности</span> и даю согласие на обработку персональных данных
                            </span>
                          </label>
                        </div>

                        <button
                          type="submit"
                          disabled={loading || !agreed}
                          className="w-full py-4 rounded-2xl text-white font-semibold text-sm transition-all duration-200 mt-2"
                          style={{
                            background: loading || !agreed ? "#e5e7eb" : "linear-gradient(90deg, #d66501, #855dda)",
                            color: loading || !agreed ? "#9ca3af" : "white",
                            cursor: loading || !agreed ? "not-allowed" : "pointer",
                          }}
                        >
                          {loading ? "Отправка..." : "Отправить заявку"}
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
