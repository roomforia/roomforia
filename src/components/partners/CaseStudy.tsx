"use client"

import { motion } from "framer-motion"

export default function CaseStudy() {
  return (
    <section className="py-32 px-4 relative overflow-hidden">

      {/* background glow */}
      <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] -translate-x-1/2 -translate-y-1/2 bg-[#C47A2C]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <p className="text-sm text-gray-400 mb-4">
            Реальный кейс
          </p>

          <h2 className="text-3xl md:text-4xl font-semibold mb-6 leading-tight">
            Как производитель мебели увеличил заявки на 45%
          </h2>

          <p className="text-gray-500 mb-8 leading-relaxed">
            После интеграции товаров в Roomforia клиенты начали видеть мебель в реальных интерьерах, а не в каталоге. Это снизило сомнения и ускорило принятие решения.
          </p>

          {/* metrics */}
          <div className="grid grid-cols-3 gap-6">

            <div>
              <div className="text-2xl font-semibold text-[#C47A2C] mb-1">
                +45%
              </div>
              <div className="text-sm text-gray-500">
                заявок
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-[#C47A2C] mb-1">
                ↓30%
              </div>
              <div className="text-sm text-gray-500">
                время решения
              </div>
            </div>

            <div>
              <div className="text-2xl font-semibold text-[#C47A2C] mb-1">
                +60%
              </div>
              <div className="text-sm text-gray-500">
                вовлеченность
              </div>
            </div>

          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative"
        >
          {/* shadow */}
          <div className="absolute inset-0 bg-black/10 blur-2xl scale-95" />

          <img
            src="/images/cases/case-1.png"
            alt="case"
            className="relative rounded-3xl shadow-[0_30px_80px_rgba(0,0,0,0.15)] object-cover w-full h-[300px] md:h-[400px]"
          />
        </motion.div>

      </div>
    </section>
  )
}