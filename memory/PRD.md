# VOID Tattoo Studio — Landing Page

## Original Problem Statement
"landing de un tatto studio llamado VOID, te dejo el logo de referencia y una imagen de como me gustaria el diseño de la pagina"

## User Choices
- Idioma: Español
- Secciones: TODAS (Hero, About, Servicios, Galería, Artistas, Stats, FAQ, Reserva, Contacto/Footer)
- Formulario de reserva: redirige a WhatsApp (no backend)
- Info real no disponible — placeholders. Único dato real: Instagram https://www.instagram.com/void.tattoo.studio/

## Architecture
- Frontend-only landing (React 19 + Tailwind + Shadcn UI). Backend sin cambios.
- Tema: dark luxury. Fondo #050505, acento champagne #D4B896.
- Tipografía: Cormorant Garamond (headings) + Outfit (body).
- Estructura: `/app/frontend/src/pages/Landing.jsx` orquesta secciones en `/app/frontend/src/components/sections/`.

## Implementation Status (Dec 2025)
- [x] Hero con logo, headline "El arte de la tinta elevado", CTA
- [x] Sobre Nosotros / Filosofía con imagen y watermark
- [x] 6 Servicios (Tatuaje Permanente, Cover-up, Tatuajes Temporales, Diseño, Retoques, Piercing)
- [x] Galería bento de trabajos + link a Instagram
- [x] 3 Artistas con cards
- [x] Stats animadas con contador
- [x] FAQ con Shadcn Accordion (6 preguntas)
- [x] Formulario de reserva → abre WhatsApp con mensaje pre-rellenado (validación de campos + consent)
- [x] Footer con info de contacto placeholder, redes, watermark VOID
- [x] Mobile drawer responsive

## Placeholders to replace
- `WHATSAPP_NUMBER` en `/app/frontend/src/lib/constants.js` (actualmente `34600000000`)
- Dirección, teléfono, email del Footer
- Nombres de artistas (Mateo Reyes, Sofía Lerma, Iván Cárdenas) son ficticios

## Testing
- iteration_1.json: 100% pass (13/13 frontend tests). Sin errores de consola.

## Backlog / P1
- Subir fotos reales de tatuajes a la galería
- Subir fotos reales de los artistas
- Página individual por artista con portfolio
- Sistema de booking real con calendario y backend
- Blog / posts de Instagram embed
