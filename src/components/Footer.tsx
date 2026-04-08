import Link from "next/link"

export default function Footer() {
  return (
    <footer className="mt-0  bg-[#1F1F1F] text-white rounded-t-3xl">

      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-4 gap-10">

          {/* LOGO */}
          <div>
            <div className="font-semibold text-lg mb-4">
              Roomforia
            </div>
            <p className="text-sm text-white/60">
              AI-платформа для дизайна и продаж в строительстве и интерьерах
            </p>
          </div>

          {/* NAV */}
          <div>
            <div className="text-sm mb-4 text-white/40">Навигация</div>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/">Главная</Link>
              <Link href="/partners">Партнёрам</Link>
              <Link href="/about">О нас</Link>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <div className="text-sm mb-4 text-white/40">Контакты</div>
            <div className="text-sm text-white/70">
              hello@roomforia.com
            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <div className="text-sm mb-4 text-white/40">
              Подписка
            </div>

            <div className="flex gap-2">
              <input
                placeholder="Email"
                className="flex-1 px-3 py-2 rounded-full bg-white/10 text-sm outline-none"
              />
              <button className="px-4 py-2 rounded-full bg-white text-black text-sm">
                OK
              </button>
            </div>

            <div className="text-xs text-white/40 mt-3">
              Без спама. Только важное.
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between text-xs text-white/40 gap-4">

          <div>
            © 2025 Roomforia
          </div>

          <div className="flex gap-6">
            <span>Политика конфиденциальности</span>
            <span>Пользовательское соглашение</span>
          </div>

        </div>

      </div>
    </footer>
  )
}