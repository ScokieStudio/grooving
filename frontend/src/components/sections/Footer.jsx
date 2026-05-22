import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import {
  LOGO_URL,
  INSTAGRAM_URL,
  INSTAGRAM_HANDLE,
  NAV_LINKS,
} from "../../lib/constants";

export default function Footer() {
  return (
    <footer
      data-testid="main-footer"
      className="relative bg-[#040404] border-t border-white/5 pt-24 pb-10 overflow-hidden"
    >
      {/* Background image */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-center bg-no-repeat bg-contain opacity-90"
        style={{
          backgroundImage:
            "url(https://customer-assets.emergentagent.com/job_void-design-10/artifacts/zbu85wst_FondoContacto.jpg)",
        }}
      />
      {/* Slight dark overlay to keep contrast */}
      <div className="absolute inset-0 bg-[#040404]/40 pointer-events-none" />

      <div className="relative container-void">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={LOGO_URL}
                alt="VOID Tattoo Studio"
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="font-display text-2xl tracking-[0.18em] text-white">
                  VOID
                </p>
                <p className="overline text-gold text-[10px]">Tattoo Studio</p>
              </div>
            </div>
            <p className="font-body text-white/55 leading-relaxed text-sm tracking-wide max-w-xs">
              El arte de la tinta elevado. Diseños exclusivos, técnica
              impecable y una experiencia de lujo en cada cita.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <p className="overline text-gold mb-6">Explora</p>
            <ul className="space-y-3">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="font-body text-white/70 hover:text-gold transition-colors duration-300 text-sm tracking-wide"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="overline text-gold mb-6">Contacto</p>
            <ul className="space-y-4 text-sm font-body text-white/70">
              <li className="flex items-start gap-3">
                <MapPin size={14} strokeWidth={1} className="text-gold mt-1 shrink-0" />
                <span>Dirección por confirmar</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} strokeWidth={1} className="text-gold mt-1 shrink-0" />
                <span>+34 600 000 000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} strokeWidth={1} className="text-gold mt-1 shrink-0" />
                <span>hola@voidtattoo.studio</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-2">
            <p className="overline text-gold mb-6">Síguenos</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              className="inline-flex items-center gap-3 group"
            >
              <span className="w-10 h-10 inline-flex items-center justify-center border border-white/15 group-hover:border-gold text-white/70 group-hover:text-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1} />
              </span>
              <span className="font-body text-sm text-white/60 group-hover:text-gold transition-colors">
                {INSTAGRAM_HANDLE}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="overline text-white/30 text-[10px]">
            © {new Date().getFullYear()} VOID Tattoo Studio · Todos los derechos reservados
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="overline text-white/30 hover:text-gold text-[10px] transition-colors">
              Términos
            </a>
            <a href="#" className="overline text-white/30 hover:text-gold text-[10px] transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
