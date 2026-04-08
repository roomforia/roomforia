"use client";

import { motion } from "framer-motion";

export default function PartnersBlock() {
  return (
    <section className="py-40 px-6 max-w-6xl mx-auto">

      <div className="grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT — VISUAL */}
        <div className="relative">

          {/* INTERIOR */}
          <div className="rounded-[32px] overflow-hidden shadow-2xl">
            <img
              src="/images/after.png"
              className="w-full h-full object-cover"
            />
          </div>

          {/* FLOATING PRODUCTS */}
          <motion.img
            src="/images/products/sofa.png"
            className="absolute top-[20%] -left-6 w-20 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          />

          <motion.img
            src="/images/products/table.png"
            className="absolute bottom-[15%] -right-6 w-20 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          />

          <motion.img
            src="/images/products/laminate.png"
            className="absolute top-[50%] right-[10%] w-20 rounded-xl shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          />

        </div>

        {/* RIGHT — TEXT */}
        <div>

          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Мы приводим клиентов прямо к вашим товарам
          </h2>

          <p className="text-gray-500 mb-10">
            Ваши продукты становятся частью интерьера и продаются через опыт, 
            а не через каталог.
          </p>

          <div className="space-y-6">

            <div>
              <div className="text-lg font-medium">
                Рост продаж
              </div>
              <div className="text-gray-500 text-sm">
                Пользователь видит товар в реальном интерьере
              </div>
            </div>

            <div>
              <div className="text-lg font-medium">
                Точное попадание
              </div>
              <div className="text-gray-500 text-sm">
                AI подбирает товары под стиль и пространство
              </div>
            </div>

            <div>
              <div className="text-lg font-medium">
                Интеграция один раз
              </div>
              <div className="text-gray-500 text-sm">
                Ваш каталог начинает работать автоматически
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}