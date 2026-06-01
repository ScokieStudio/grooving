import { Instagram } from "lucide-react";

const ARTISTS = [
  {
    name: "Gustavo Caligiuri",
    role: "Piezas grandes",
    years: "20 años",
    style: "Oriental, Black Work, Tradicional, Puntillismo Dot Work, Espaldas, Mangas",
    img: "/assets/artist-1.jpg",
    url: "https://www.instagram.com/gustavo_tatuador/",
  },
  {
    name: "Griselda Aranda",
    role: "Linea fina e hiperfina, minitattoo",
    years: "20 años",
    style: "Acuarela, Geometricos, Tipografias, Minimalistas, Mandalas, Flores, Mariposas",
    img: "/assets/artist-2.jpg",
    url: "https://www.instagram.com/griseldatatuadora/",
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
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
                <div className="flex justify-between items-center text-sm gap-3">
                  <dt className="overline text-white/40 shrink-0">Instagram</dt>
                  <dd className="font-body text-right">
                    <a
                      href={a.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-gold hover:text-white transition-colors duration-300 group/link"
                    >
                      <Instagram className="w-3.5 h-3.5 text-gold/80 group-hover/link:text-white transition-colors duration-300" />
                      <span className="border-b border-gold/30 hover:border-white transition-colors pb-0.5">
                        {a.url ? a.url.replace("https://www.instagram.com/", "@").replace(/\/$/, "") : ""}
                      </span>
                    </a>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>

      {/* YouTube Video Section */}
      <div className="w-full mt-12 md:mt-12 aspect-video relative group overflow-hidden border-y border-white/5 reveal">
        <iframe
          src="https://www.youtube.com/embed/3Nr99hrqfDU?autoplay=0&mute=0&controls=1&rel=0"
          title="GROOVING Tattoo Experience"
          className="w-full h-full border-0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
        {/* Subtle premium dark overlays to blend the video edges with the theme */}
        <div className="absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-[#070707] to-transparent pointer-events-none" />
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#070707] to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
