import { useEffect, useRef, useState } from "react";
import { TEXTURE_BG } from "../../lib/constants";

const STATS = [
  { value: 7, suffix: "+", label: "Años de trayectoria" },
  { value: 4200, suffix: "+", label: "Clientes satisfechos" },
  { value: 9500, suffix: "+", label: "Tatuajes realizados" },
  { value: 100, suffix: "%", label: "Diseños exclusivos" },
];

function useCountUp(target, start) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    const duration = 1800;
    const stepTime = 16;
    const steps = duration / stepTime;
    let current = 0;
    const inc = target / steps;
    const id = setInterval(() => {
      current += inc;
      if (current >= target) {
        setVal(target);
        clearInterval(id);
      } else {
        setVal(Math.floor(current));
      }
    }, stepTime);
    return () => clearInterval(id);
  }, [target, start]);
  return val;
}

function StatItem({ stat, start, idx }) {
  const v = useCountUp(stat.value, start);
  const formatted = stat.value >= 1000 ? v.toLocaleString("es-ES") : v;
  return (
    <div
      data-testid={`stat-${idx}`}
      className="text-center md:text-left border-t border-white/10 pt-8 md:border-t-0 md:border-l md:pt-0 md:pl-8 first:border-l-0 first:pl-0"
    >
      <p className="font-display text-5xl md:text-6xl lg:text-7xl gold-shimmer leading-none">
        {formatted}
        {stat.suffix}
      </p>
      <p className="overline text-white/50 mt-4">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setVisible(true));
      },
      { threshold: 0.35 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      data-testid="stats-section"
      className="section-pad relative overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-30 bg-cover bg-center"
        style={{ backgroundImage: `url(${TEXTURE_BG})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />

      <div className="relative container-void">
        <div className="text-center mb-16 reveal">
          <span className="overline text-gold">Números</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-6">
            Más que <span className="italic text-gold">tinta</span>.
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4">
          {STATS.map((s, i) => (
            <StatItem key={s.label} stat={s} start={visible} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
