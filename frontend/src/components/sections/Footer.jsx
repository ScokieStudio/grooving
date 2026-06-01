import { Instagram, MapPin, Mail, Phone } from "lucide-react";
import {
  LOGO_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
  INSTAGRAM_HANDLE,
  TIKTOK_HANDLE,
  YOUTUBE_HANDLE,
  NAV_LINKS,
} from "../../lib/constants";

// Custom TikTok SVG Icon because it is missing in this version of lucide-react
const Tiktok = ({ size = 16, strokeWidth = 1, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

// Custom YouTube SVG Icon because it is missing in this version of lucide-react
const YoutubeIcon = ({ size = 16, strokeWidth = 1, className = "" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 15.2 0 2 2 0 0 1 1.4 1.4 24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.56 49.56 0 0 1-15.2 0A2 2 0 0 1 2.5 17z" />
  </svg>
);

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
            "url(/assets/footer-bg.jpg)",
        }}
      />
      {/* Slight dark overlay to keep contrast */}
      <div className="absolute inset-0 bg-[#040404]/40 pointer-events-none" />

      <div className="relative container-void">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-3">
            <div className="flex items-center gap-3 mb-6">
              <img
                src={LOGO_URL}
                alt="GROOVING Tattoo Studio"
                className="w-14 h-14 object-contain"
              />
              <div>
                <p className="font-display text-2xl tracking-[0.18em] text-white">
                  GROOVING
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
                <span>Galería Centenera, Del Barco Centenera 150, C1424 Cdad. Autónoma de Buenos Aires</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={14} strokeWidth={1} className="text-gold mt-1 shrink-0" />
                <span>+54 9 11 4404-0585</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={14} strokeWidth={1} className="text-gold mt-1 shrink-0" />
                <span>Groovingtattoo@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="md:col-span-3">
            <p className="overline text-gold mb-6">Síguenos</p>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-instagram-link"
              className="inline-flex items-center gap-3 group mt-4"
            >
              <span className="w-10 h-10 inline-flex items-center justify-center border border-white/30 group-hover:border-gold text-white/70 group-hover:text-gold transition-colors duration-300">
                <Instagram size={16} strokeWidth={1} />
              </span>
              <span className="font-body text-sm text-white/60 group-hover:text-gold transition-colors">
                {INSTAGRAM_HANDLE}
              </span>
            </a>
            <a
              href={TIKTOK_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-tiktok-link"
              className="inline-flex items-center gap-3 group mt-4"
            >
              <span className="w-10 h-10 inline-flex items-center justify-center border border-white/30 group-hover:border-gold text-white/70 group-hover:text-gold transition-colors duration-300">
                <Tiktok size={16} strokeWidth={1} />
              </span>
              <span className="font-body text-sm text-white/60 group-hover:text-gold transition-colors">
                {TIKTOK_HANDLE}
              </span>
            </a>
            <a
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-youtube-link"
              className="inline-flex items-center gap-3 group mt-4"
            >
              <span className="w-10 h-10 inline-flex items-center justify-center border border-white/30 group-hover:border-gold text-white/70 group-hover:text-gold transition-colors duration-300">
                <YoutubeIcon size={16} strokeWidth={1} />
              </span>
              <span className="font-body text-sm text-white/60 group-hover:text-gold transition-colors">
                {YOUTUBE_HANDLE}
              </span>
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-4 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-white/50 text-[15px]">
            © {new Date().getFullYear()} Grooving Tattoo Studio · Todos los derechos reservados - Hecho con <span className="text-primary">♥</span> por <a href="https://www.scokiestudio.com/" target="_blank" rel="noreferrer" className="text-primary hover:underline">ScokieStudio Design</a>
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/50 hover:text-gold text-[15px] transition-colors">
              Términos
            </a>
            <a href="#" className="text-white/50 hover:text-gold text-[15px] transition-colors">
              Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
