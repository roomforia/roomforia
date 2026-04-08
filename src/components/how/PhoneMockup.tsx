"use client";

export default function PhoneMockup({ progress }: { progress: number }) {
  const step = Math.floor(progress * 7);

  return (
    <div className="relative w-[280px] md:w-[360px] aspect-[9/19] rounded-[48px] overflow-hidden shadow-[0_40px_120px_rgba(0,0,0,0.3)]">

      {[1,2,3,4,5,6,7].map((s) => {
        const isActive = step === s;

        return (
          <img
            key={s}
            src={`/images/how/flow/step${s}.png`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out
            ${isActive ? "opacity-100 scale-100" : "opacity-0 scale-110"}`}
          />
        );
      })}
    </div>
  );
}