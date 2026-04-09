"use client";

import { useRef, useState } from "react";

const items = [
  {
    id: 1,
    text: "ИИ подбирает решения, прогнозирует тренды и сочетает все это. Система анализирует актуальные дизайны и современные подходы, чтобы результат выглядел цельно.",
  },
  {
    id: 2,
    text: "Точные модели и реалистичная визуализация. Качественная проработка текстур товаров, цветов и освещения помогает увидеть результат максимально близко к реальности.",
  },
  {
    id: 3,
    text: "Удобное сравнение и замена товаров в уже готовом дизайне. Вы можете быстро переключаться между вариантами и выбирать лучшее решение без бесконечного поиска.",
  },
  {
    id: 4,
    text: "Только актуальная база. Каждый элемент можно открыть, изучить и перейти к следующему шагу — покупке.",
  },
];

export default function CTASection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, offsetWidth } = scrollRef.current;
    const index = Math.round(scrollLeft / (offsetWidth * 0.8));
    setActive(index);
  };

  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;

    const width = scrollRef.current.offsetWidth;
    scrollRef.current.scrollTo({
      left: width * 0.8 * index,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-16">

          <h1 className="font-[Symphony] text-4xl md:text-5xl mb-6">
            Roomforia
          </h1>

          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            <span className="text-[#d66501]">
              Визуализация и ИИ
            </span>
            <br />
            <span className="text-[#d66501]">
              в реальности
            </span>
          </h2>

          <p className="text-gray-500 text-lg mt-4">
            От идеи до конкретного решения — быстрее и проще
          </p>

        </div>

        {/* SLIDER */}
        <div className="relative">

          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseDown={(e) => {
              const slider = scrollRef.current;
              if (!slider) return;

              let isDown = true;
              const startX = e.pageX;
              const startScrollLeft = slider.scrollLeft;

              const onMouseMove = (moveEvent: MouseEvent) => {
                if (!isDown) return;
                const walk = (moveEvent.pageX - startX) * 1.2;
                slider.scrollLeft = startScrollLeft - walk;
              };

              const onMouseUp = () => {
                isDown = false;
                window.removeEventListener("mousemove", onMouseMove);
                window.removeEventListener("mouseup", onMouseUp);
              };

              window.addEventListener("mousemove", onMouseMove);
              window.addEventListener("mouseup", onMouseUp);
            }}
            className="
              flex gap-6 overflow-x-scroll pb-6
              snap-x snap-mandatory scroll-smooth
              scrollbar-hide
              cursor-grab active:cursor-grabbing
            "
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="
                  snap-start shrink-0
                  w-[80%] sm:w-[60%] md:w-[45%] lg:w-[30%]
                "
              >
                <div className="
                  h-full p-8 rounded-[32px]
                  bg-[#2D1F1A] text-white
                  shadow-[0_30px_80px_rgba(0,0,0,0.25)]
                  relative overflow-hidden
                  transition-opacity duration-500
                ">

                  <div className="absolute inset-0 bg-gradient-to-br from-[#d66501]/20 via-transparent to-transparent" />

                  <div className="text-[64px] font-bold text-white/20 mb-4">
                    {item.id}
                  </div>

                  <p className="text-white/80 leading-relaxed">
                    {item.text}
                  </p>

                </div>
              </div>
            ))}
          </div>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={`
                  w-2.5 h-2.5 rounded-full transition-all duration-300
                  ${active === i ? "bg-[#d66501] w-5" : "bg-gray-300"}
                `}
              />
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button className="
            bg-[#d66501] text-white px-10 py-4 rounded-xl
            text-lg font-medium
            hover:opacity-90 active:scale-[0.98] transition
          ">
            Скачать
          </button>
        </div>

        {/* TRUST */}
        <div className="text-center mt-10">
          <p className="text-gray-500 text-sm">
            Уже используют дизайнеры, маркетплейсы и мебельные бренды
          </p>
        </div>

      </div>
    </section>
  );
}