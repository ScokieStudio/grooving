import {
  Crown,
  Layers,
  Sparkles,
  Brush,
  Eraser,
  Gem,
} from "lucide-react";

const SERVICES = [
  {
    icon: Crown,
    title: "Tatuaje Permanente",
    desc: "Diseños exclusivos a tinta. Realismo, fineline, blackwork y custom.",
    price: "Desde 80€",
  },
  {
    icon: Layers,
    title: "Cover-up",
    desc: "Transformamos tatuajes antiguos en obras nuevas, sin rastro del pasado.",
    price: "Consultar",
  },
  {
    icon: Sparkles,
    title: "Tatuajes Temporales",
    desc: "Pruébalo antes de comprometerte. Diseños premium con duración real.",
    price: "Desde 40€",
  },
  {
    icon: Brush,
    title: "Diseño Personalizado",
    desc: "Bocetos a medida creados desde cero junto a nuestros artistas.",
    price: "Incluido",
  },
  {
    icon: Eraser,
    title: "Retoques",
    desc: "Refrescamos y restauramos tatuajes con la precisión que merecen.",
    price: "Desde 50€",
  },
  {
    icon: Gem,
    title: "Piercing",
    desc: "Joyería de calidad y técnica esterilizada para una experiencia segura.",
    price: "Desde 25€",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      data-testid="services-section"
      className="section-pad bg-[#070707] border-y border-white/5"
    >
      <div className="container-void">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <span className="overline text-gold">Lo Que Hacemos</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-6">
            Servicios <span className="italic text-gold">a medida</span>.
          </h2>
          <p className="font-body text-white/60 mt-6 max-w-xl mx-auto tracking-wide">
            Cada servicio se ejecuta con el mismo nivel de detalle, ritual y precisión.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5">
          {SERVICES.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                data-testid={`service-card-${idx}`}
                className="group relative bg-[#070707] p-10 md:p-12 transition-all duration-500 hover:bg-[#0c0c0c] reveal"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-center justify-between mb-10">
                  <Icon
                    size={32}
                    strokeWidth={1}
                    className="text-gold transition-transform duration-700 group-hover:rotate-[8deg]"
                  />
                  <span className="overline text-white/30 text-[10px]">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display text-3xl text-white mb-4 group-hover:text-gold transition-colors duration-500">
                  {s.title}
                </h3>
                <p className="font-body text-white/60 leading-relaxed text-sm md:text-base">
                  {s.desc}
                </p>

                <div className="mt-10 pt-6 border-t border-white/5 flex items-center justify-between">
                  <span className="overline text-white/40">{s.price}</span>
                  <a
                    href="#booking"
                    data-testid={`service-cta-${idx}`}
                    className="overline text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    Reservar →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
