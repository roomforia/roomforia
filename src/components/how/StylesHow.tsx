"use client";

export default function StylesHow() {
  const styles = ["scandi","loft","modern","classic","warm"];

  return (
    <section className="py-24">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl md:text-5xl font-semibold mb-10 text-center">
          Выбери стиль
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">

          {styles.map(style => (
            <div
              key={style}
              className="min-w-[260px] rounded-3xl overflow-hidden shadow hover-scale"
            >
              <img
                src={`/images/how/styles/${style}.png`}
                className="w-full h-[320px] object-cover"
                loading="lazy"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}