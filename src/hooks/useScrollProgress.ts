import { useEffect, useState } from "react";

export function useScrollProgress(id: string) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const total = rect.height + window.innerHeight;

      const current = window.innerHeight - rect.top;
      const p = Math.min(Math.max(current / total, 0), 1);

      setProgress(p);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id]);

  return progress;
}