"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Анализ пространства",
    desc: "AI понимает геометрию комнаты, свет и расположение объектов",
    img: "/images/how/underhood/analysis.png",
  },
  {
    title: "Каталоги брендов",
    desc: "Мы подключаем реальные товары партнеров и их каталоги",
    img: "/images/how/underhood/catalog.png",
  },
  {
    title: "Готовый интерьер",
    desc: "Дизайн собирается из реальных товаров, которые можно купить",
    img: "/images/how/underhood/result.png",
  },
];

export default function UnderTheHood() {
  return (
    <section className="py-40 px-6 max-w-6xl mx-auto text-center">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-5xl font-semibold mb-6"
      >
        Как это работает внутри
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="text-gray-500 max-w-2xl mx-auto mb-20"
      >
        Мы не просто создаем интерьер.  
        Мы собираем его из реальных товаров партнеров.
      </motion.p>

      {/* LINE */}
      <div className="relative">

        <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-neutral-200 -translate-y-1/2" />

        <div className="grid md:grid-cols-3 gap-12 relative">

          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group relative"
            >

              {/* DOT */}
              <div className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-black text-white mx-auto mb-6 z-10 relative">
                {i + 1}
              </div>

              {/* IMAGE */}
              <div className="flex justify-center mb-6">

  <div className="relative w-[180px] md:w-[200px]">

    {/* PHONE FRAME */}
    <div className="
      relative
      rounded-[36px]
      border-[6px] border-black
      overflow-hidden
      shadow-xl
      bg-black
    ">

      {/* SCREEN */}
      <div className="relative w-full aspect-[9/19.5] bg-black">

        <img
          src={item.img}
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* NOTCH */}
        <div className="
          absolute top-2 left-1/2 -translate-x-1/2
          w-[40%] h-[10px]
          bg-black rounded-full
          z-10
        " />
      </div>
    </div>

  </div>
</div>

              {/* TEXT */}
              <h3 className="text-lg font-medium mb-2">
                {item.title}
              </h3>

              <p className="text-sm text-gray-500 leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </div>

    </section>
  );
}