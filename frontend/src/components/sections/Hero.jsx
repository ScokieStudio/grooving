import { HERO_BG, LOGO_URL } from "../../lib/constants";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-[#050505]/60 to-[#050505]" />
      <div className="absolute inset-0 bg-[#050505]/40" />

      {/* Corner ornaments */}
      <div className="hidden md:block absolute top-28 left-10 w-24 h-24 border-t border-l border-gold-soft" />
      <div className="hidden md:block absolute top-28 right-10 w-24 h-24 border-t border-r border-gold-soft" />
      <div className="hidden md:block absolute bottom-28 left-10 w-24 h-24 border-b border-l border-gold-soft" />
      <div className="hidden md:block absolute bottom-28 right-10 w-24 h-24 border-b border-r border-gold-soft" />

      {/* Content */}
      <div className="relative z-10 container-void flex flex-col items-center text-center pt-28 pb-16">
        <img
          src={LOGO_URL}
          alt="GROOVING Tattoo Studio"
          className="w-80 md:w-80 lg:w-80 mb-10 animate-fadeIn drop-shadow-[0_0_40px_rgba(212,184,150,0.25)]"
          data-testid="hero-logo"
        />

        <span className="overline text-gold mb-6 animate-fadeUp" style={{ animationDelay: "0.2s" }}>
          Estudio de Tatuajes — Desde 2016
        </span>

        <h1
          data-testid="hero-headline"
          className="font-display hero-display text-5xl sm:text-6xl md:text-7xl lg:text-[7.5rem] text-white max-w-5xl animate-fadeUp"
          style={{ animationDelay: "0.35s" }}
        >
          El arte de la{" "}
          <br />
          <span className="italic text-gold">tinta</span> elevado.
        </h1>

        <p
          className="font-body text-base md:text-lg text-white/70 max-w-xl mt-8 leading-relaxed tracking-wide animate-fadeUp"
          style={{ animationDelay: "0.55s" }}
        >
          Diseño exclusivo, precisión y lujo en cada detalle.
          <br /> Tatuajes que cuentan tu historia con una estética inconfundible.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center gap-5 mt-12 animate-fadeUp"
          style={{ animationDelay: "0.7s" }}
        >
          <a href="#booking" data-testid="hero-cta-book" className="btn-void-solid">
            Reservar Cita
          </a>
          <a href="#gallery" data-testid="hero-cta-gallery" className="link-void overline">
            Ver Galería
          </a>
        </div>
      </div>
    </section>
  );
}
