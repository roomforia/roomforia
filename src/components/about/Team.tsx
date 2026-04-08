"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const team = [
  {
    img: "/images/about/team/team-1.png",
    role: "Product",
    desc: "Опыт в мебельной индустрии и SAP"
  },
  {
    img: "/images/about/team/team-2.png",
    role: "Engineering",
    desc: "Высоконагруженные сервисы"
  },
  {
    img: "/images/about/team/team-3.png",
    role: "UX/UI",
    desc: "Продукты с миллионами пользователей"
  },
  {
    img: "/images/about/team/team-4.png",
    role: "3D",
    desc: "Работа с мебельными брендами"
  },
  {
    img: "/images/about/team/team-5.png",
    role: "B2B",
    desc: "SaaS и рынок строительства"
  },
  {
    img: "/images/about/team/team-6.png",
    role: "AI",
    desc: "ML и генеративные модели"
  },
]

export default function Team() {
  return (
    <section className="py-32">
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl md:text-5xl font-semibold mb-16">
          Команда, говорящая с бизнесом
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {team.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={m.img}
                  alt=""
                  width={600}
                  height={700}
                  className="w-full h-[280px] object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <div className="font-medium">{m.role}</div>
                <div className="text-sm text-black/50">{m.desc}</div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  )
}