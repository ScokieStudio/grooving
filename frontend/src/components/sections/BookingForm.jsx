import { useState } from "react";
import { toast } from "sonner";
import { Send } from "lucide-react";
import { WHATSAPP_NUMBER } from "../../lib/constants";

const SERVICES_OPTIONS = [
  "Tatuaje Permanente",
  "Cover-up",
  "Tatuaje Temporal",
  "Diseño Personalizado",
  "Retoque",
  "Piercing",
];

const initialState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  comments: "",
  consent: false,
};

export default function BookingForm() {
  const [form, setForm] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = (k) => (e) =>
    setForm((f) => ({
      ...f,
      [k]: e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Por favor, completa los campos obligatorios.");
      return;
    }
    if (!form.consent) {
      toast.error("Debes aceptar el tratamiento de datos para continuar.");
      return;
    }

    setSubmitting(true);

    const message =
      `*Nueva reserva — VOID Tattoo Studio*%0A%0A` +
      `*Nombre:* ${form.name}%0A` +
      `*Email:* ${form.email}%0A` +
      `*Teléfono:* ${form.phone}%0A` +
      `*Servicio:* ${form.service || "No especificado"}%0A` +
      `*Fecha preferida:* ${form.date || "Por definir"}%0A` +
      `*Comentarios:* ${form.comments || "-"}`;

    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    // Slight delay so the user sees the feedback
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      toast.success("Abriendo WhatsApp para confirmar tu reserva…");
      setForm(initialState);
      setSubmitting(false);
    }, 400);
  };

  return (
    <section
      id="booking"
      data-testid="booking-section"
      className="section-pad relative overflow-hidden bg-[#070707] border-t border-white/5"
    >
      <div className="container-void grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left */}
        <div className="lg:col-span-5 reveal">
          <span className="overline text-gold">Reserva tu cita</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-6 leading-[1.05]">
            Comienza tu próxima <span className="italic text-gold">obra</span>.
          </h2>
          <p className="font-body text-white/60 mt-8 leading-relaxed tracking-wide max-w-md">
            Rellena el formulario y te contactaremos por WhatsApp para confirmar
            disponibilidad, presupuesto y todos los detalles de tu próxima pieza.
          </p>
          <div className="ornament mt-10 max-w-xs">
            <span className="text-xs tracking-[0.3em]">VOID</span>
          </div>
          <div className="mt-10 space-y-3 text-sm">
            <p className="overline text-white/40">Respuesta en menos de 24h</p>
            <p className="font-body text-white/70">
              Consulta inicial sin compromiso.
            </p>
          </div>
        </div>

        {/* Right form */}
        <form
          onSubmit={handleSubmit}
          data-testid="booking-form"
          className="lg:col-span-7 reveal space-y-2"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
            <div>
              <label className="overline text-white/40 text-[10px]" htmlFor="name">
                Nombre *
              </label>
              <input
                id="name"
                type="text"
                value={form.name}
                onChange={update("name")}
                placeholder="Tu nombre completo"
                className="input-void"
                data-testid="booking-input-name"
                required
              />
            </div>
            <div>
              <label className="overline text-white/40 text-[10px]" htmlFor="email">
                Email *
              </label>
              <input
                id="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="tu@email.com"
                className="input-void"
                data-testid="booking-input-email"
                required
              />
            </div>
            <div>
              <label className="overline text-white/40 text-[10px]" htmlFor="phone">
                Teléfono *
              </label>
              <input
                id="phone"
                type="tel"
                value={form.phone}
                onChange={update("phone")}
                placeholder="+34 600 000 000"
                className="input-void"
                data-testid="booking-input-phone"
                required
              />
            </div>
            <div>
              <label className="overline text-white/40 text-[10px]" htmlFor="service">
                Servicio
              </label>
              <select
                id="service"
                value={form.service}
                onChange={update("service")}
                className="input-void"
                data-testid="booking-input-service"
              >
                <option value="">Selecciona un servicio</option>
                {SERVICES_OPTIONS.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="overline text-white/40 text-[10px]" htmlFor="date">
                Fecha preferida
              </label>
              <input
                id="date"
                type="date"
                value={form.date}
                onChange={update("date")}
                className="input-void [color-scheme:dark]"
                data-testid="booking-input-date"
              />
            </div>
            <div className="md:col-span-2">
              <label className="overline text-white/40 text-[10px]" htmlFor="comments">
                Comentarios / Idea del tatuaje
              </label>
              <textarea
                id="comments"
                value={form.comments}
                onChange={update("comments")}
                placeholder="Cuéntanos qué te gustaría hacerte, tamaño, zona, referencias…"
                className="input-void"
                rows={4}
                data-testid="booking-input-comments"
              />
            </div>
          </div>

          <label className="flex items-start gap-3 mt-10 cursor-pointer group">
            <input
              type="checkbox"
              checked={form.consent}
              onChange={update("consent")}
              data-testid="booking-input-consent"
              className="mt-1 w-4 h-4 accent-[#D4B896] cursor-pointer"
            />
            <span className="font-body text-xs text-white/50 tracking-wide leading-relaxed">
              Acepto que VOID Tattoo Studio trate mis datos para gestionar mi reserva.
            </span>
          </label>

          <div className="pt-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <button
              type="submit"
              disabled={submitting}
              data-testid="booking-submit-button"
              className="btn-void-solid disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <Send size={14} strokeWidth={1.2} />
              {submitting ? "Enviando…" : "Enviar por WhatsApp"}
            </button>
            <span className="overline text-white/40 text-[10px]">
              Se abrirá una conversación de WhatsApp con tu solicitud
            </span>
          </div>
        </form>
      </div>
    </section>
  );
}
