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
    img: "https://images.unsplash.com/photo-1565058379802-bbe93b2f703a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Layers,
    title: "Cover-up",
    desc: "Transformamos tatuajes antiguos en obras nuevas, sin rastro del pasado.",
    price: "Consultar",
    img: "https://images.unsplash.com/photo-1611501275019-9b5cda994e8d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Sparkles,
    title: "Tatuajes Temporales",
    desc: "Pruébalo antes de comprometerte. Diseños premium con duración real.",
    price: "Desde 40€",
    img: "https://images.unsplash.com/photo-1542856391-010fb87dcfed?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Brush,
    title: "Diseño Personalizado",
    desc: "Bocetos a medida creados desde cero junto a nuestros artistas.",
    price: "Incluido",
    img: "https://customer-assets.emergentagent.com/job_void-design-10/artifacts/p040h7w8_27317.jpg",
  },
  {
    icon: Eraser,
    title: "Retoques",
    desc: "Refrescamos y restauramos tatuajes con la precisión que merecen.",
    price: "Desde 50€",
    img: "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Gem,
    title: "Piercing",
    desc: "Joyería de calidad y técnica esterilizada para una experiencia segura.",
    price: "Desde 25€",
    img: "https://images.unsplash.com/photo-1564594985645-4427056e22e2?auto=format&fit=crop&w=1200&q=80",
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
                className="group relative bg-[#070707] p-10 md:p-12 transition-all duration-500 reveal overflow-hidden min-h-[400px] flex flex-col"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-50 transition-opacity duration-700 grayscale group-hover:grayscale-0"
                  style={{ backgroundImage: `url(${s.img})` }}
                  aria-hidden="true"
                />
                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/85 via-[#070707]/70 to-[#070707]/95 group-hover:from-[#050505]/75 group-hover:via-[#050505]/55 group-hover:to-[#050505]/95 transition-all duration-700" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-10">
                    <Icon
                      size={32}
                      strokeWidth={1}
                      className="text-gold transition-transform duration-700 group-hover:rotate-[8deg]"
                    />
                    <span className="overline text-white/40 text-[10px]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl text-white mb-4 group-hover:text-gold transition-colors duration-500">
                    {s.title}
                  </h3>
                  <p className="font-body text-white/65 leading-relaxed text-sm md:text-base">
                    {s.desc}
                  </p>

                  <div className="mt-auto pt-10 border-t border-white/10 flex items-center justify-between">
                    <span className="overline text-white/50">{s.price}</span>
                    <a
                      href="#booking"
                      data-testid={`service-cta-${idx}`}
                      className="overline text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      Reservar →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
