"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ProductsShowcase() {
  const [active, setActive] = useState(0);

  const products = [
    {
      name: "Диван",
      brand: "IKEA",
      price: 49990,
      img: "/images/products/sofa.png",
    },
    {
      name: "Стол",
      brand: "Zara Home",
      price: 12990,
      img: "/images/products/table.png",
    },
    {
      name: "Ламинат",
      brand: "West Elm",
      price: 8490,
      img: "/images/products/laminate.png",
    },
  ];

  const total = products.reduce((acc, p) => acc + p.price, 0);

  return (
    <section className="py-36 px-6 max-w-6xl mx-auto">

      {/* TITLE */}
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl md:text-5xl font-semibold mb-6 text-center"
      >
        Интерьер становится списком покупок
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-gray-500 text-center mb-20"
      >
        Все элементы дизайна — реальные товары из каталогов
      </motion.p>

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="
            relative
            rounded-[32px]
            overflow-hidden
            shadow-2xl
          "
        >
          <img
            src="/images/after.png"
            className="w-full h-full object-cover"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/5" />

        </motion.div>

        {/* RIGHT — PRODUCTS */}
        <div className="space-y-4">

          {products.map((p, i) => (
            <motion.div
              key={i}
              onMouseEnter={() => setActive(i)}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`
                flex items-center gap-4 p-4 rounded-2xl cursor-pointer
                transition-all duration-300
                ${
                  active === i
                    ? "bg-black text-white shadow-xl scale-[1.02]"
                    : "bg-neutral-100 hover:bg-neutral-200"
                }
              `}
            >
              {/* IMAGE */}
              <img
                src={p.img}
                className="w-16 h-16 rounded-xl object-cover"
              />

              {/* INFO */}
              <div className="flex-1">

                <div className="font-medium">
                  {p.name}
                </div>

                <div className={`
                  text-sm
                  ${active === i ? "text-white/70" : "text-gray-500"}
                `}>
                  {p.brand} • {p.price.toLocaleString()} ₽
                </div>

              </div>

              {/* BADGE */}
              <div className={`
                text-xs px-3 py-1 rounded-full
                ${active === i ? "bg-white text-black" : "bg-white"}
              `}>
                в интерьере
              </div>

            </motion.div>
          ))}

          {/* TOTAL */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="
              mt-8 pt-6 border-t
              flex justify-between items-center
            "
          >
            <div className="text-gray-500">
              Итого
            </div>

            <div className="text-xl font-semibold">
              {total.toLocaleString()} ₽
            </div>
          </motion.div>

        </div>

      </div>

    </section>
  );
}