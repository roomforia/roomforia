"use client";

import { useEffect, useRef, useState } from "react";

export default function BrandsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">

        <div
          ref={ref}
          className={`
            bg-[#d66501] rounded-[32px] p-8 md:p-16 text-white
            transition-all duration-700 ease-out
            ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
          `}
        >

          {/* TITLE */}
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight mb-8">
            Именно так это и будет выглядеть
          </h2>

          {/* TEXT */}
          <p className="text-black text-base md:text-lg max-w-2xl mb-16 leading-relaxed">
            Румфория работает с реальными брендами и поставщиками. В вашей
            визуализации вы увидите вещи, которые существуют, продаются и могут
            оказаться у вас дома.
          </p>

          {/* BRANDS */}
          <div className="mb-16">
            <div className="flex flex-wrap gap-x-6 gap-y-4 text-3xl md:text-3xl font-semibold">
              {["SKDESIGN", "Coswick", "ТОК мебель", "Divan.ru"].map(
                (brand, i) => (
                  <span
                    key={brand}
                    className={`
                      transition-all duration-700
                      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}
                    `}
                    style={{
                      transitionDelay: `${i * 120}ms`,
                    }}
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </div>

          {/* BOTTOM TEXT */}
          <p className="text-white/90 text-sm md:text-base max-w-3xl leading-relaxed">
            Реальные товары внутри ваших проектов · Переход к продавцу прямо из
            приложения · Актуальные каталоги и ссылки
          </p>

        </div>

      </div>
    </section>
  );
}