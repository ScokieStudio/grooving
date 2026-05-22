import { Instagram } from "lucide-react";

const ARTISTS = [
  {
    name: "Mateo Reyes",
    role: "Fundador & Realismo",
    years: "10 años",
    style: "Realismo · Retrato · Black & Grey",
    img: "https://images.pexels.com/photos/25491869/pexels-photo-25491869.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  },
  {
    name: "Sofía Lerma",
    role: "Fineline & Botánico",
    years: "7 años",
    style: "Fineline · Floral · Minimalista",
    img: "https://images.pexels.com/photos/2928342/pexels-photo-2928342.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=720",
  },
  {
    name: "Iván Cárdenas",
    role: "Blackwork & Geometría",
    years: "8 años",
    style: "Blackwork · Geométrico · Ornamental",
    img: "https://images.unsplash.com/photo-1552627019-947c3789ffb5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA1OTV8MHwxfHNlYXJjaHw0fHx0YXR0b28lMjBhcnRpc3QlMjB3b3JraW5nJTIwYmxhY2slMjBhbmQlMjB3aGl0ZXxlbnwwfHx8fDE3Nzk0NzU4MDN8MA&ixlib=rb-4.1.0&q=85",
  },
];

export default function Artists() {
  return (
    <section
      id="artists"
      data-testid="artists-section"
      className="section-pad bg-[#070707] border-y border-white/5"
    >
      <div className="container-void">
        <div className="text-center mb-20 reveal">
          <span className="overline text-gold">El Equipo</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-6">
            Artistas que <span className="italic text-gold">marcan</span> la diferencia.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {ARTISTS.map((a, i) => (
            <article
              key={a.name}
              data-testid={`artist-card-${i}`}
              className="group reveal"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="relative overflow-hidden mb-6">
                <img
                  src={a.img}
                  alt={a.name}
                  className="w-full h-[480px] object-cover gs-hover"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#050505] to-transparent" />
                <span className="absolute top-4 left-4 overline text-[10px] text-gold bg-[#050505]/70 backdrop-blur-sm px-3 py-1 border border-gold-soft">
                  0{i + 1} / 0{ARTISTS.length}
                </span>
              </div>

              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-display text-3xl text-white group-hover:text-gold transition-colors duration-500">
                    {a.name}
                  </h3>
                  <p className="overline text-gold mt-2">{a.role}</p>
                </div>
                <Instagram
                  size={18}
                  strokeWidth={1}
                  className="text-white/40 group-hover:text-gold transition-colors duration-500 mt-2"
                />
              </div>

              <dl className="mt-6 space-y-3 pt-6 border-t border-white/5">
                <div className="flex justify-between text-sm">
                  <dt className="overline text-white/40">Experiencia</dt>
                  <dd className="font-body text-white/80">{a.years}</dd>
                </div>
                <div className="flex justify-between text-sm gap-3">
                  <dt className="overline text-white/40 shrink-0">Estilo</dt>
                  <dd className="font-body text-white/80 text-right">{a.style}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
