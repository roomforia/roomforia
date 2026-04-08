"use client";

export default function CTASection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold mb-4 leading-tight">
            Создай интерьер{" "}
            <span className="text-[#C47A2C]">за 30 секунд</span>
          </h2>

          <p className="text-gray-500 text-lg">
            Без дизайнера. Без ожиданий. С реальной мебелью
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* USER */}
          <div className="group relative p-8 rounded-[32px] bg-white/40 backdrop-blur-xl border border-white/30 
          shadow-[0_20px_60px_rgba(0,0,0,0.05)] hover:scale-[1.02] transition-all duration-300">

            {/* subtle glow */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition" />

            <div className="relative">
              <h3 className="text-xl font-semibold mb-3">
                Для пользователей
              </h3>

              <p className="text-gray-500 mb-6">
                Загрузите фото комнаты и получите готовый дизайн с мебелью
              </p>

              <button className="w-full bg-[#2D1F1A] text-white px-5 py-3 rounded-xl 
              hover:opacity-90 active:scale-[0.98] transition">
                Попробовать бесплатно
              </button>

              <p className="text-xs text-gray-400 mt-3">
                Без регистрации • результат за 30 секунд
              </p>
            </div>
          </div>

          {/* B2B */}
          <div className="group relative p-8 rounded-[32px] bg-[#2D1F1A] text-white 
          shadow-[0_30px_80px_rgba(0,0,0,0.2)] overflow-hidden 
          hover:scale-[1.02] transition-all duration-300">

            {/* glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#C47A2C]/25 via-transparent to-transparent opacity-80" />

            {/* animated depth */}
            <div className="absolute -right-10 -bottom-10 w-[200px] h-[200px] bg-[#C47A2C]/10 blur-3xl rounded-full" />

            <div className="relative">
              <h3 className="text-xl font-semibold mb-3">
                Для поставщиков
              </h3>

              <p className="text-white/70 mb-6">
                Показывайте товары внутри интерьеров и получайте клиентов напрямую
              </p>

              <button className="w-full bg-white text-black px-5 py-3 rounded-xl 
              hover:bg-gray-100 active:scale-[0.98] transition">
                Стать партнёром
              </button>

              <p className="text-xs text-white/50 mt-3">
                Новые продажи без маркетинга
              </p>
            </div>
          </div>
        </div>

        {/* TRUST / FINAL PUSH */}
        <div className="text-center mt-16">

          <p className="text-gray-500 text-sm">
            Уже используют дизайнеры, маркетплейсы и мебельные бренды
          </p>

        </div>
      </div>
    </section>
  );
}