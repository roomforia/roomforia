"use client";

export default function ComparisonSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
            Дизайнер или{" "}
            <span className="text-[#C47A2C]">Roomforia</span>?
          </h2>

          <p className="text-gray-500 text-lg">
            Выбор становится очевидным за 5 секунд
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">

          {/* DESIGNER */}
          <div className="relative p-8 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/30 
          shadow-[0_20px_60px_rgba(0,0,0,0.05)] opacity-80 hover:opacity-100 transition">

            <h3 className="text-xl font-semibold mb-8 text-gray-700">
              Дизайнер интерьера
            </h3>

            <ul className="space-y-4 text-gray-600 text-[15px]">
              <li>⏳ 2–4 недели ожидания</li>
              <li>💸 50 000 – 200 000 ₽</li>
              <li>🔁 Несколько итераций</li>
              <li>🤷 Результат неочевиден</li>
              <li>🛒 Нет связи с товарами</li>
            </ul>

            {/* subtle fade */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/[0.02] to-transparent pointer-events-none rounded-[32px]" />
          </div>

          {/* ROOMFORIA */}
          <div className="relative p-8 rounded-[32px] bg-[#2D1F1A] text-white 
          shadow-[0_30px_80px_rgba(0,0,0,0.2)] overflow-hidden 
          scale-[1.02] hover:scale-[1.04] transition-all duration-300">

            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C47A2C]/20 via-transparent to-transparent" />

            {/* badge */}
            <div className="absolute top-4 right-4 text-xs px-3 py-1 rounded-full bg-[#C47A2C] text-white shadow">
              лучший выбор
            </div>

            <div className="relative">

              <h3 className="text-xl font-semibold mb-8">
                Roomforia
              </h3>

              <ul className="space-y-4 text-[15px]">
                <li>⚡ 30 секунд</li>
                <li>💰 Почти бесплатно</li>
                <li>🎯 Без правок</li>
                <li>👀 Видишь результат сразу</li>
                <li>🛍 Готовый список товаров</li>
              </ul>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 
          shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:scale-105 transition">

            <div className="text-3xl md:text-4xl font-semibold mb-2 text-[#C47A2C]">
              ×10
            </div>

            <p className="text-gray-600">
              быстрее, чем дизайнер
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 
          shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:scale-105 transition">

            <div className="text-3xl md:text-4xl font-semibold mb-2 text-[#C47A2C]">
              −90%
            </div>

            <p className="text-gray-600">
              экономия бюджета
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/30 
          shadow-[0_15px_40px_rgba(0,0,0,0.05)] hover:scale-105 transition">

            <div className="text-3xl md:text-4xl font-semibold mb-2 text-[#C47A2C]">
              100%
            </div>

            <p className="text-gray-600">
              результат до ремонта
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}