"use client"

import { motion } from "framer-motion"

const advantages = [
  "Экономите деньги: меньше случайных и ошибочных покупок",
  "Получаете решение под своё пространство, а не абстрактные идеи",
  "Получаете полную свободу выбора: стили, цвета, мебель и материалы можно менять и сравнивать",
  "Сразу переходите к выбору мебели и материалов без лишнего поиска",
]

export default function ComparisonSection() {
  return (
    <section className="py-12 md:py-28 bg-white">

<<<<<<< HEAD
=======
      {/* Оранжевая плашка — внутри max-w */}
>>>>>>> 71b6a2d (fix: исправил главную и как это работет)
      <div className="max-w-7xl mx-auto px-6 md:px-10 mb-0">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-3xl overflow-hidden"
          style={{ backgroundColor: "#d66501" }}
        >
          <div className="px-6 md:px-16 py-8 md:py-16">
            <h2 className="text-3xl md:text-5xl lg:text-[56px] font-semibold text-white leading-tight tracking-tight">
              Быстро и понятно на каждом этапе.{" "}
              <span className="text-white/80">Профессиональный результат за минуты</span>
            </h2>
          </div>
        </motion.div>
      </div>

<<<<<<< HEAD
      <div className="mt-4 md:mt-8 px-4 md:px-10 py-8 md:py-12" style={{ backgroundColor: "#f9f6f2" }}>
=======
      {/* Бежевый блок — на всю ширину */}
      <div
        className="mt-4 md:mt-8 px-4 md:px-10 py-8 md:py-12"
        style={{ backgroundColor: "#f9f6f2" }}
      >
>>>>>>> 71b6a2d (fix: исправил главную и как это работет)
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col mb-10">
            {advantages.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
                className="group relative"
              >
                <div className="relative h-[1px] overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200" />
<<<<<<< HEAD
                  <div className="absolute inset-0 bg-[#855dda] origin-left scale-x-0 group-hover:scale-x-100" style={{ transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }} />
                </div>
=======
                  <div
                    className="absolute inset-0 bg-[#855dda] origin-left scale-x-0 group-hover:scale-x-100"
                    style={{ transition: "transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)" }}
                  />
                </div>

>>>>>>> 71b6a2d (fix: исправил главную и как это работет)
                <div className="flex items-start gap-5 py-7">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "rgba(133,93,218,0.12)" }}>
                    <span className="text-sm font-bold text-[#1E1E1E]">{i + 1}</span>
                  </div>
<<<<<<< HEAD
                  <p className="text-lg md:text-xl font-medium text-[#1E1E1E] leading-snug flex-1">{text}</p>
=======
                  <p className="text-lg md:text-xl font-medium text-[#1E1E1E] leading-snug flex-1">
                    {text}
                  </p>
>>>>>>> 71b6a2d (fix: исправил главную и как это работет)
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 + 0.3 }}
                    className="w-2 h-2 rounded-full bg-gray-300 flex-shrink-0 mt-2 group-hover:bg-[#855dda] transition-colors duration-500"
                  />
                </div>
              </motion.div>
            ))}
            <div className="h-[1px] bg-gray-200" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          >
            <a
              href="https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"
              target="_blank"
              className="bg-[#d66501] hover:bg-[#bf5a01] text-white font-semibold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-[0_6px_24px_rgba(214,101,1,0.35)] hover:scale-[1.02]"
            >
              Скачать
            </a>
          </motion.div>
        </div>
      </div>

    </section>
  )
}
