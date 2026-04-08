"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative pt-32 pb-8 px-6 text-center overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/after.png"
          className="w-full h-full object-cover"
        />

        {/* мягкий премиум overlay */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>

      {/* CONTENT */}
      <div className="relative max-w-3xl mx-auto">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1], // плавный ease (как Apple)
          }}
          viewport={{ once: true }}
          className="text-3xl md:text-6xl font-semibold mb-6 leading-tight"
        >
          Создай интерьер за 30 секунд
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="text-gray-600 text-lg mb-10"
        >
          Без дизайнера. Без опыта.  
          Просто загрузи фото и получи готовый результат.
        </motion.p>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true }}
          className="
            px-10 py-5 rounded-full
            bg-black text-white
            text-lg font-medium
            shadow-lg
            hover:scale-105 hover:bg-neutral-800
            transition
          "
        >
          Попробовать бесплатно
        </motion.button>

        {/* TRUST */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          viewport={{ once: true }}
          className="mt-6 text-sm text-gray-500"
        >
          Уже скоро • Без регистрации на старте
        </motion.div>

      </div>
    </section>
  );
}