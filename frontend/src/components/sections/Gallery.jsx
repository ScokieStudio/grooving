const BASE_IMAGES = [
  {
    url: "/assets/gallery-1.png",
    alt: "Tatuaje fineline triángulo",
    span: "md:col-span-2 md:row-span-2 h-[420px] md:h-[680px]",
  },
  {
    url: "/assets/gallery-2.png",
    alt: "Tatuaje en pierna",
    span: "h-[200px] md:h-[330px]",
  },
  {
    url: "/assets/gallery-3.png",
    alt: "Tatuaje pecho",
    span: "h-[200px] md:h-[330px]",
  },
  {
    url: "/assets/gallery-4.png",
    alt: "Tatuaje bíceps música",
    span: "md:col-span-2 h-[260px] md:h-[330px]",
  },
  {
    url: "/assets/gallery-6.png",
    alt: "Tatuaje bíceps música",
    span: "md:col-span-2 h-[260px] md:h-[330px]",
  },
  {
    url: "/assets/gallery-7.png",
    alt: "Tatuaje fineline triángulo",
    span: "md:col-span-2 md:row-span-2 h-[420px] md:h-[680px]",
  },
  {
    url: "/assets/gallery-8.png",
    alt: "Tatuaje en pierna",
    span: "h-[200px] md:h-[330px]",
  },
  {
    url: "/assets/gallery-9.png",
    alt: "Tatuaje pecho",
    span: "h-[200px] md:h-[330px]",
  },
];

// Replicate the bento pattern 3 times → 12 images total
const GALLERY_IMAGES = [
  ...BASE_IMAGES,
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="section-pad relative"
    >
      <div className="container-void">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20 reveal">
          <div>
            <span className="overline text-gold">Trabajos Recientes</span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-6 max-w-2xl leading-[1.05]">
              Un <span className="italic text-gold">portfolio</span> que habla
              por sí mismo.
            </h2>
          </div>
          <a
            href="https://www.instagram.com/void.tattoo.studio/"
            target="_blank"
            rel="noopener noreferrer"
            data-testid="gallery-instagram-cta"
            className="btn-void self-start md:self-end"
          >
            Ver más en Instagram
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5">
          {GALLERY_IMAGES.map((img, i) => (
            <div
              key={i}
              data-testid={`gallery-item-${i}`}
              className={`relative overflow-hidden group cursor-pointer reveal ${img.span}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <img
                src={img.url}
                alt={img.alt}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="absolute bottom-4 left-4 overline text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-[10px]">
                VOID · 00{i + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
