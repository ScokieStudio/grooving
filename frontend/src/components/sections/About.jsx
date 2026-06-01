import { ABOUT_IMG, LOGO_URL } from "../../lib/constants";

export default function About() {
  return (
    <section
      id="about"
      data-testid="about-section"
      className="section-pad relative overflow-hidden"
    >
      {/* Watermark logo */}
      <img
        src={LOGO_URL}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-1/2 -translate-y-1/2 w-[600px] opacity-[0.04]"
      />

      <div className="container-void grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <div className="lg:col-span-6 reveal relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold-soft hidden md:block" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold-soft hidden md:block" />
          <div className="relative overflow-hidden">
            <img
              src={ABOUT_IMG}
              alt="Máquina de tatuar VOID"
              className="w-full h-[420px] md:h-[560px] object-cover gs-hover"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="lg:col-span-6 reveal">
          <span className="overline text-gold">El Estudio</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-6 leading-[1.05]">
            Nuestra <span className="italic text-gold">filosofía</span>.
            Tu piel, una obra de arte.
          </h2>

          <div className="ornament mt-8 mb-8 max-w-md">
            <span className="text-xs tracking-[0.3em]">GROOVING</span>
          </div>

          <div className="space-y-6 text-white/70 font-body leading-relaxed tracking-wide text-base md:text-lg max-w-xl">
            <p>
              <span className="text-gold">GROOVING Tattoo Studio</span> nació con una idea
              clara: crear un espacio privado y personalizado,
              donde cada persona pueda vivir la experiencia
              de tatuarse con total libertad, comodidad y
              respeto.
            </p>
            <p>
              Es un box individual, sin distracciones ni
              personas alrededor, pensado para que te
              sientas en confianza y disfrutes de un momento
              único, donde tu privacidad es prioridad.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-8 max-w-md">
            <div>
              <p className="font-display text-4xl text-gold">100%</p>
              <p className="overline text-white/50 mt-2">Material desechable</p>
            </div>
            <div>
              <p className="font-display text-4xl text-gold">∞</p>
              <p className="overline text-white/50 mt-2">Diseños exclusivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
