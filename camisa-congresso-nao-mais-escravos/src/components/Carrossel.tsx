import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { src: string; alt: string; legenda: string };

export function Carrossel({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const go = useCallback(
    (dir: number) => setI((p) => (p + dir + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [go]);

  return (
    <div className="relative overflow-hidden rounded-3xl border border-border bg-card shadow-[var(--shadow-deep)]">
      <div
        className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: `translateX(-${i * 100}%)` }}
      >
        {slides.map((s) => (
          <figure key={s.src} className="w-full shrink-0">
            <img src={s.src} alt={s.alt} className="aspect-square w-full object-cover" loading="lazy" />
            <figcaption className="absolute inset-x-0 bottom-0 bg-[var(--gradient-fade)] p-5 pt-16 text-sm font-medium tracking-wide text-foreground">
              {s.legenda}
            </figcaption>
          </figure>
        ))}
      </div>

      <button
        aria-label="Anterior"
        onClick={() => go(-1)}
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground backdrop-blur transition hover:bg-background/90"
      >
        <ChevronLeft className="size-5" />
      </button>
      <button
        aria-label="Próxima"
        onClick={() => go(1)}
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-background/60 p-2 text-foreground backdrop-blur transition hover:bg-background/90"
      >
        <ChevronRight className="size-5" />
      </button>

      <div className="absolute inset-x-0 top-4 flex justify-center gap-2">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            aria-label={`Ir para foto ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1 rounded-full transition-all ${
              idx === i ? "w-8 bg-primary" : "w-4 bg-foreground/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
