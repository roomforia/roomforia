"use client";

import { useRef, useEffect } from "react";

export default function HeroInteractive() {
  const containerRef = useRef<HTMLDivElement>(null);
  const phoneRef = useRef<HTMLDivElement>(null);

  const targetX = useRef(0.5);
  const currentX = useRef(0.5);

  const dragging = useRef(false);
  const userInteracted = useRef(false);

  /* ================= AUTO DEMO ================= */
  useEffect(() => {
    const steps = [
      { to: 0.72, duration: 1300 },
      { to: 0.28, duration: 1500 },
      { to: 0.55, duration: 1100 },
    ];

    let i = 0;

    const run = () => {
      if (userInteracted.current) return;
      if (i >= steps.length) return;

      const { to, duration } = steps[i];
      const start = targetX.current;
      let progress = 0;

      const frame = () => {
        if (userInteracted.current) return;

        progress += 16;
        const t = Math.min(progress / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);

        targetX.current = start + (to - start) * eased;

        if (t < 1) {
          requestAnimationFrame(frame);
        } else {
          i++;
          setTimeout(run, 400);
        }
      };

      frame();
    };

    const timeout = setTimeout(run, 700);
    return () => clearTimeout(timeout);
  }, []);

  /* ================= INPUT ================= */
  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (!containerRef.current || dragging.current) return;

      userInteracted.current = true;

      const rect = containerRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;

      targetX.current = Math.max(0.18, Math.min(0.82, percent));
    };

    const handleTouchStart = () => {
      dragging.current = true;
      userInteracted.current = true;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const percent =
        (e.touches[0].clientX - rect.left) / rect.width;

      targetX.current = Math.max(0.18, Math.min(0.82, percent));
    };

    const handleTouchEnd = () => {
      dragging.current = false;
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    /* ================= SMOOTH ANIMATION ================= */
    const animate = () => {
      const diff = targetX.current - currentX.current;

      currentX.current += diff * 0.055;

      currentX.current = Math.max(
        0.15,
        Math.min(0.85, currentX.current)
      );

      if (phoneRef.current) {
        const translateX = (currentX.current - 0.5) * 100;

        phoneRef.current.style.transform = `
          translate(${translateX}%, -50%)
        `;

        const inner = phoneRef.current.querySelector(
          ".phone-image"
        ) as HTMLElement;

        if (inner) {
          const x = currentX.current * 100;
          inner.style.backgroundPosition = `${x}% center`;
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section className="py-16 px-4 overflow-x-hidden">
      {/* TEXT */}
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-5xl font-semibold mb-4">
          Интерьер за <span className="text-[#C47A2C]">30 секунд</span>
        </h1>

        <p className="text-gray-500 max-w-md mx-auto">
          Загрузи фото — получи готовый дизайн и список мебели
        </p>
      </div>

      {/* HERO */}
      <div
        ref={containerRef}
        className="
          relative
          max-w-6xl
          mx-auto
          h-[420px] md:h-[560px]
          rounded-[28px] md:rounded-[32px]
          overflow-hidden
          isolate
        "
      >
        {/* BEFORE */}
        <img
          src="/images/how/hero/before.png"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* PHONE */}
        <div
          ref={phoneRef}
          className="absolute top-1/2 left-1/2 z-20 pointer-events-none"
          style={{
            transform: "translate(0%, -50%)",
          }}
        >
          <div
            className="
              relative
              w-[185px] sm:w-[215px] md:w-[258px]
              aspect-[9/19.5]
              rounded-[32px] md:rounded-[36px]
              overflow-hidden
              shadow-[0_20px_60px_rgba(0,0,0,0.25)]
            "
          >
            {/* AFTER */}
            <div
              className="phone-image absolute inset-0"
              style={{
                backgroundImage: "url('/images/how/hero/after.png')",
                backgroundSize: "cover",
                backgroundPosition: "50% center",
              }}
            />

            {/* FRAME */}
            <div className="absolute inset-0 rounded-[32px] md:rounded-[36px] border-[4px] md:border-[5px] border-black pointer-events-none" />

            {/* NOTCH */}
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-[45%] md:w-[40%] h-[8px] md:h-[10px] bg-black rounded-full" />
          </div>
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none" />
      </div>

      {/* CTA */}
      <div className="mt-10 flex justify-center">
        <a
          href="https://www.figma.com/proto/oKpcwYWl1oXTzZ8jGxdSvX/Mobile-App-Prototype_Design?page-id=0%3A7137&node-id=37320-1691&viewport=-79%2C-4447%2C0.52&t=sG3LJCgcdGCLn3Qt-9&scaling=scale-down&content-scaling=fixed&starting-point-node-id=37320%3A2244&show-proto-sidebar=1"
          target="_blank"
          className="
            flex items-center gap-3
            px-6 py-4
            rounded-full
            bg-[#5B4A3C]
            text-white text-lg
            hover:scale-105 transition
          "
        >
          {/* FIGMA ICON */}
          <div className="w-6 h-6 flex items-center justify-center bg-white rounded-full">
            <div className="w-3 h-3 bg-[#F24E1E] rounded-full" />
          </div>

          Попробовать демо
        </a>
      </div>

      {/* HINT */}
      <p className="mt-6 text-center text-sm text-gray-400">
        Перемещай, чтобы сравнить интерьер
      </p>
    </section>
  );
}