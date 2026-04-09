"use client";

import { motion } from "framer-motion";

const advantages = [
  {
    num: "1",
    text: "Экономите деньги: меньше случайных и ошибочных покупок",
    highlighted: false,
  },
  {
    num: "2",
    text: "Получаете решение под своё пространство, а не абстрактные идеи",
    highlighted: false,
  },
  {
    num: "3",
    text: "Получаете полную свободу выбора: стили, цвета, мебель и материалы можно менять и сравнивать",
    highlighted: true,
  },
  {
    num: "4",
    text: "Сразу переходите к выбору мебели и материалов без лишнего поиска",
    highlighted: false,
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-2xl mx-auto">

        {/* BANNER IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full rounded-3xl overflow-hidden mb-10 shadow-[0_20px_60px_rgba(0,0,0,0.1)]"
        >
          <img
            src="/images/comparison/comparison.jpg"
            alt="Roomforia — преимущества"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-3"
        >
          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Преимущества{" "}
            <span style={{ fontFamily: "symphonyregular, serif" }} className="text-[#d66501]">
              Roomforia
            </span>
          </h2>
          
        </motion.div>

        {/* SUBTITLE */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-gray-900 text-base md:text-lg font-semibold mb-10 leading-snug"
        >
          Быстро и понятно на каждом этапе.{" "}
          Профессиональный результат за минуты.
        </motion.p>

        {/* ADVANTAGES LIST */}
        <div className="flex flex-col gap-6 mb-10">
          {advantages.map((item, i) => {
            const isLast = i === advantages.length - 1;

            // ЕДИНЫЙ КОМПОНЕНТ ДЛЯ НОМЕРА СО СТИЛЯМИ КРУЖКА
            const NumberCircle = (
              <span
                className="flex-shrink-0 w-14 h-14 rounded-full border-2 border-[#855dda] flex items-center justify-center text-3xl font-bold text-gray-900 leading-none"
                style={{ fontFamily: "symphonyregular, serif" }}
              >
                {item.num}
              </span>
            );

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
              >
                {isLast ? (
                  /* Last row: number + text + button on same line */
                  <div className="flex items-center gap-4">
                    {NumberCircle} {/* Используем единый компонент для номера */}
                    <p className="text-gray-900 text-base leading-relaxed flex-1">
                      {item.text}
                    </p>
                    <button className="flex-shrink-0 bg-[#d66501] hover:bg-[#bf5a01] text-white font-semibold text-base px-7 py-3 rounded-2xl transition-all duration-200 shadow-[0_6px_20px_rgba(214,101,1,0.35)] hover:scale-[1.02]">
                      Скачать
                    </button>
                  </div>
                ) : (
                  <div className="flex items-start gap-4">
                    {NumberCircle} {/* Используем единый компонент для номера */}
                    {/* Text */}
                    <p className="text-gray-900 text-base leading-relaxed pt-2">
                      {item.text}
                    </p>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

     </div>
    </section>
  );
}