"use client";

export default function PainSection() {
  return (
    <section className="py-32 px-4">
      <div className="max-w-6xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-semibold leading-tight">
            Знакомо?
          </h2>

          <p className="text-gray-500 text-lg mt-3">
            Мы сделали Roomforia именно из-за этого
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <div className="relative rounded-[32px] overflow-hidden 
          bg-white/40 backdrop-blur-xl border border-white/30 
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

            <img
              src="/images/about/team/team-2.png"
              className="w-full h-[320px] md:h-[480px] object-cover"
            />

            {/* overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="space-y-6">

            {[
              "Смотришь Pinterest, но в реальности всё выглядит иначе",
              "Не понимаешь, как сочетать мебель между собой",
              "Боишься потратить деньги и получить не тот результат",
              "Дизайнер долго, дорого и не всегда попадает",
            ].map((text, i) => (
              <div
                key={i}
                className="flex gap-4 items-start p-4 rounded-2xl bg-white/40 backdrop-blur 
                border border-white/30 hover:scale-[1.02] transition"
              >
                <div className="w-6 h-6 rounded-full bg-[#C47A2C]/20 flex items-center justify-center text-[#C47A2C] text-sm mt-1">
                  •
                </div>

                <p className="text-gray-700">
                  {text}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}