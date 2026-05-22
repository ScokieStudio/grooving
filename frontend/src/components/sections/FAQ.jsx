import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQS = [
  {
    q: "¿Cómo reservo una cita?",
    a: "Puedes rellenar el formulario de reserva al final de esta página. Te redirigirá a WhatsApp con tu solicitud lista para enviarnos. También puedes escribirnos directamente por Instagram.",
  },
  {
    q: "¿Cuál es la edad mínima para tatuarse?",
    a: "La edad mínima es 18 años. Para menores de edad se requiere consentimiento expreso, presencia y documentación de los padres o tutores legales.",
  },
  {
    q: "¿Duele mucho hacerse un tatuaje?",
    a: "La sensación varía según la zona, el tamaño y la tolerancia personal. Nuestros artistas utilizan técnicas y rutinas que minimizan la incomodidad, y siempre nos adaptamos a tu ritmo.",
  },
  {
    q: "¿Cómo cuido mi tatuaje después de hacerlo?",
    a: "Te entregamos una guía detallada de cuidado posterior. En general: lavar suave con jabón neutro, aplicar crema cicatrizante específica, evitar sol directo y no rascar durante el proceso de curación (2-4 semanas).",
  },
  {
    q: "¿Puedo traer mi propio diseño?",
    a: "Por supuesto. Nuestros artistas pueden trabajar a partir de tus referencias, adaptarlas o crear un diseño completamente personalizado contigo. La consulta inicial es gratuita.",
  },
  {
    q: "¿Cuánto cuesta un tatuaje?",
    a: "Depende del tamaño, el estilo, la zona y el tiempo de trabajo. Tras la consulta te entregamos un presupuesto cerrado. Tatuajes pequeños desde 80€.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="section-pad"
    >
      <div className="container-void grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        <div className="lg:col-span-5 reveal">
          <span className="overline text-gold">Preguntas Frecuentes</span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white mt-6 leading-[1.05]">
            Todo lo que
            <br />
            necesitas <span className="italic text-gold">saber</span>.
          </h2>
          <p className="font-body text-white/60 mt-8 leading-relaxed tracking-wide max-w-md">
            Si tu pregunta no aparece aquí, escríbenos por Instagram o
            reserva una consulta sin compromiso.
          </p>
        </div>

        <div className="lg:col-span-7 reveal">
          <Accordion type="single" collapsible className="w-full" data-testid="faq-accordion">
            {FAQS.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/10 px-0"
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="font-display text-xl md:text-2xl text-white hover:text-gold hover:no-underline py-6 text-left tracking-tight"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-white/65 text-base leading-relaxed tracking-wide pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
