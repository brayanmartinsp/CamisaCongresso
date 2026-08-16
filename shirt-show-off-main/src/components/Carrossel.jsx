import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function Carrossel({ slides }) {
  const [i, setI] = useState(0);
  const go = useCallback(
    (dir) => setI((p) => (p + dir + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, [go]);

  return (
    <div className="carousel">
      <div className="carousel__track" style={{ transform: `translateX(-${i * 100}%)` }}>
        {slides.map((s) => (
          <figure key={s.src} className="carousel__slide">
            <img src={s.src} alt={s.alt} className="carousel__img" loading="lazy" />
            <figcaption className="carousel__caption">{s.legenda}</figcaption>
          </figure>
        ))}
      </div>

      <button
        type="button"
        aria-label="Anterior"
        onClick={() => go(-1)}
        className="carousel__arrow carousel__arrow--prev"
      >
        <ChevronLeft className="icon" />
      </button>
      <button
        type="button"
        aria-label="Próxima"
        onClick={() => go(1)}
        className="carousel__arrow carousel__arrow--next"
      >
        <ChevronRight className="icon" />
      </button>

      <div className="carousel__dots">
        {slides.map((s, idx) => (
          <button
            key={s.src}
            type="button"
            aria-label={`Ir para foto ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`carousel__dot${idx === i ? " is-active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
