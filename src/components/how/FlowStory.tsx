"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import PhoneMockup from "./PhoneMockup";

const steps = [
  { step: "01", title: "Создай проект", desc: "Начни новый интерьер за секунды — просто нажми кнопку и дай название." },
  { step: "02", title: "Выбери сценарий", desc: "Квартира, дом или офис — выбери тип пространства для точного результата." },
  { step: "03", title: "Загрузи фото", desc: "Сфотографируй комнату или загрузи готовое фото. AI распознаёт геометрию мгновенно." },
  { step: "04", title: "AI анализирует", desc: "Нейросеть считывает свет, пропорции и планировку — как профессиональный дизайнер." },
  { step: "05", title: "Выбери стиль", desc: "Сканди, лофт, модерн, классика — смотри результат мгновенно при переключении." },
  { step: "06", title: "Генерация", desc: "AI создаёт готовый интерьер с реальной мебелью из каталогов партнёров." },
  { step: "07", title: "Твой интерьер готов", desc: "Скачай дизайн и получи список мебели с ценами и ссылками прямо в приложении." },
];

export default function FlowStory() {
  const ref = useRef<HTMLElement>(null);
  const [stepIndex, setStepIndex] = useState(0);
  const [sectionTop, setSectionTop] = useState(0);
  const [sectionHeight, setSectionHeight] = useState(0);

  const { scrollY } = useScroll(); // глобальный скролл — не зависит от overflow родителя

  useEffect(() => {
    const update = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      setSectionTop(window.scrollY + rect.top);
      setSectionHeight(ref.current.offsetHeight);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useMotionValueEvent(scrollY, "change", (v) => {
    if (sectionHeight === 0) return;
    const progress = Math.max(0, Math.min(1,
      (v - sectionTop) / (sectionHeight - window.innerHeight)
    ));
    const index = Math.min(steps.length - 1, Math.floor(progress * steps.length));
    setStepIndex(index);
  });

  // scrollYProgress для progress bar — считаем вручную
  const progressValue = sectionHeight > 0
    ? Math.max(0, Math.min(1, (0 - sectionTop) / (sectionHeight - window.innerHeight)))
    : 0;

  return (
    <section ref={ref} className="relative" style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden bg-white flex items-center">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-12">

          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.2em] text-gray-400 mb-3 font-medium">
              Как это работает
            </p>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
              От фото до интерьера
              <br className="hidden md:block" />
              <span className="text-gray-400"> за 30 секунд</span>
            </h2>
          </div>

          <div className="flex items-center gap-8 md:gap-16 justify-center">

            {/* Steps nav слева */}
            <div className="hidden md:flex flex-col gap-3 w-48 flex-shrink-0">
              {steps.map((s, i) => (
                <div
                  key={i}
                  className={`flex items-center gap-3 transition-all duration-300 ${i === stepIndex ? "opacity-100" : "opacity-25"}`}
                >
                  <span className={`text-xs font-mono transition-all duration-300 ${i === stepIndex ? "text-gray-900 font-bold" : "text-gray-400"}`}>
                    {s.step}
                  </span>
                  <span className={`text-sm transition-all duration-300 ${i === stepIndex ? "text-gray-900 font-medium" : "text-gray-400"}`}>
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            {/* Phone */}
            <div className="flex-shrink-0">
              <PhoneMockup stepIndex={stepIndex} totalSteps={steps.length} />
            </div>

            {/* Description справа */}
            <div className="hidden md:flex flex-col w-52 flex-shrink-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={stepIndex}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                >
                  <p className="text-xs font-mono text-gray-400 mb-2">
                    {steps[stepIndex].step} / {steps.length.toString().padStart(2, "0")}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-snug">
                    {steps[stepIndex].title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {steps[stepIndex].desc}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 w-full h-[1px] bg-gray-200">
                <motion.div
                  className="h-full bg-gray-900 origin-left"
                  animate={{ scaleX: (stepIndex + 1) / steps.length }}
                  transition={{ duration: 0.4 }}
                />
              </div>
            </div>

          </div>

          {/* Mobile */}
          <div className="md:hidden mt-6 text-center px-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={stepIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-xs text-gray-400 font-mono mb-1">
                  {steps[stepIndex].step} / {steps.length.toString().padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{steps[stepIndex].title}</h3>
                <p className="text-sm text-gray-500">{steps[stepIndex].desc}</p>
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-center gap-1.5 mt-4">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${i === stepIndex ? "w-6 bg-gray-900" : "w-1.5 bg-gray-300"}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}