import { useEffect, useState } from "react";
import { Menu, X, Instagram } from "lucide-react";
import { LOGO_URL, NAV_LINKS, INSTAGRAM_URL } from "../../lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-[#050505]/80 border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-void flex items-center justify-between py-5 md:py-6">
        {/* Logo */}
        <a
          href="#hero"
          data-testid="nav-logo-link"
          className="flex items-center gap-3 group"
        >
          <img
            src={LOGO_URL}
            alt="VOID Tattoo Studio"
            className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-500 group-hover:rotate-[8deg]"
          />
          <div className="hidden sm:flex flex-col leading-none">
            <span className="font-display text-xl md:text-2xl tracking-[0.18em] text-white">
              VOID
            </span>
            <span className="overline text-[10px] md:text-xs text-gold mt-1">
              Tattoo Studio
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {NAV_LINKS.filter((l) => l.label !== "Reservar").map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="link-void overline text-white/70"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="nav-instagram-link"
            className="hidden sm:inline-flex items-center justify-center w-10 h-10 border border-white/10 hover:border-gold text-white/70 hover:text-gold transition-colors duration-300"
            aria-label="Instagram"
          >
            <Instagram size={16} strokeWidth={1} />
          </a>
          <a
            href="#booking"
            data-testid="nav-cta-reservar"
            className="hidden md:inline-flex btn-void"
          >
            Reservar
          </a>
          <button
            onClick={() => setOpen(true)}
            aria-label="Abrir menú"
            data-testid="nav-menu-open"
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-white/10 hover:border-gold text-white/80 hover:text-gold transition-colors"
          >
            <Menu size={18} strokeWidth={1.2} />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-all duration-500 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-500 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-[#080808] border-l border-white/5 p-8 flex flex-col transition-transform duration-500 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-12">
            <span className="font-display text-2xl tracking-[0.18em] text-white">
              VOID
            </span>
            <button
              onClick={() => setOpen(false)}
              data-testid="nav-menu-close"
              aria-label="Cerrar menú"
              className="w-10 h-10 inline-flex items-center justify-center border border-white/10 hover:border-gold text-white/80 hover:text-gold"
            >
              <X size={18} strokeWidth={1.2} />
            </button>
          </div>
          <nav className="flex flex-col gap-6">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-white hover:text-gold transition-colors"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto pt-12 border-t border-white/5">
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 overline text-gold"
            >
              <Instagram size={16} strokeWidth={1} /> Instagram
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}
