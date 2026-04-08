"use client"

export default function Industries() {
  const items = [
    "/images/about/industry-furniture.png",
    "/images/about/industry-light.png",
    "/images/about/industry-materials.png",
    "/images/about/industry-dev.png",
  ]

  return (
    <section className="py-24">

      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-semibold mb-10">
          Работаем с лидерами отрасли
        </h2>

        <div className="grid md:grid-cols-4 gap-4">

          {items.map((src, i) => (
            <img
              key={i}
              src={src}
              className="rounded-2xl hover:scale-105 transition duration-500"
            />
          ))}

        </div>

      </div>
    </section>
  )
}