"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

export default function FlowStory() {
  const ref = useRef(null);
  const [stepIndex, setStepIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(6, Math.floor(v * 7));
    setStepIndex(index);
  });

  const steps = [
    {
      title: "Создай проект",
      desc: "Начни новый интерьер за секунды",
      img: "step1.png",
    },
    {
      title: "Выбери сценарий",
      desc: "Определи тип проекта",
      img: "step2.png",
    },
    {
      title: "Загрузи фото",
      desc: "Добавь фото своей комнаты",
      img: "step3.png",
    },
    {
      title: "AI анализирует",
      desc: "Понимает геометрию и свет",
      img: "step4.png",
    },
    {
      title: "Выбери стиль",
      desc: "Подбери настроение интерьера",
      img: "step5.png",
    },
    {
      title: "Генерация",
      desc: "AI создает дизайн",
      img: "step6.png",
    },
    {
      title: "Готово",
      desc: "Интерьер + список мебели",
      img: "step7.png",
    },
  ];

  return (
    <section ref={ref} className="relative h-[350vh]">

      <div className="sticky top-0 h-screen flex items-center justify-center">

        <div className="w-full max-w-6xl mx-auto px-6 text-center">

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-semibold mb-4">
            Как это работает
          </h2>
          <p className="text-gray-500 mb-12">
            Полный цикл от фото до готового интерьера
          </p>

          {/* STEP CONTENT */}
          <motion.div
            key={stepIndex}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* STEP */}
            <div className="text-sm text-gray-400 mb-2">
              Шаг {stepIndex + 1}
            </div>

            {/* TITLE */}
            <h3 className="text-2xl font-medium mb-3">
              {steps[stepIndex].title}
            </h3>

            {/* DESC */}
            <p className="text-gray-500 mb-8">
              {steps[stepIndex].desc}
            </p>

            {/* PHONE */}
            <div className="flex justify-center">
              <div className="relative w-[220px] md:w-[260px]">

                <div className="relative rounded-[32px] overflow-hidden shadow-xl border-[6px] border-black">

                  <img
                    src={`/images/how/flow/${steps[stepIndex].img}`}
                    className="w-full h-auto object-cover"
                  />

                  {/* NOTCH */}
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[40%] h-[10px] bg-black rounded-full" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* PROGRESS */}
          <div className="mt-16 w-[300px] h-[2px] bg-black/10 mx-auto">
            <motion.div
              style={{ scaleX: scrollYProgress }}
              className="h-full bg-black origin-left"
            />
          </div>

        </div>
      </div>
    </section>
  );
}