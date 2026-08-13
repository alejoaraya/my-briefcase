# my-briefcase

Portfolio personal de **Alejo Araya**, Desarrollador Front-End — [alejoaraya.online](https://www.alejoaraya.online/)

SPA construida con React + TypeScript + Vite, con soporte bilingüe (es/en), animaciones con Framer Motion, y una capa de SEO/AI-discoverability completa (JSON-LD, sitemap, hreflang y `llms.txt`).

## Contenido

- [Stack](#stack)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Secciones del sitio](#secciones-del-sitio)
- [Internacionalización (es/en)](#internacionalización-esen)
- [SEO y AI discoverability](#seo-y-ai-discoverability)
- [Tipografías](#tipografías)
- [Instalación y uso](#instalación-y-uso)
- [Deploy](#deploy)
- [Contacto](#contacto)

## Stack

- **React 18** + **TypeScript**
- **Vite 5** como bundler, con `@vitejs/plugin-react` y `vite-plugin-svgr` (SVGs como componentes React)
- **Tailwind CSS v4** (config vía CSS, `@tailwindcss/vite`) + **daisyui v5** para el theme (`briefcase`)
- **Framer Motion** para animaciones (scroll reveal, hover states)
- **React Router v6** (`BrowserRouter`) para el ruteo (`/` y `/en`)
- **ESLint** (`eslint:recommended`, `@typescript-eslint`, `react-hooks`) para linting

## Estructura del proyecto

```
src/
├── assets/
│   ├── icons/            # Íconos SVG (stack tecnológico, redes sociales)
│   └── typography/        # Fuentes self-hosted (Lato, Poppins) en .ttf
├── components/            # Componentes de UI y secciones (Hero, About, Projects, etc.)
├── context/                # LanguageContext
├── hooks/                  # useTranslate y demás hooks custom
├── layout/                 # Layouts compartidos
├── lib/                     # Utilidades (cn, etc.)
├── pages/                   # BriefcasePage, ErrorPage
├── provider/                # LanguageProvider (maneja idioma + meta tags dinámicos)
├── router/                  # RouterApp
├── traductions/              # Diccionarios es.ts / en.ts
└── index.css                 # Theme de daisyui + @font-face + estilos globales

public/
├── assets/                   # Imágenes, favicons, avatar, og-image
├── cv-alejo-araya.pdf        # CV descargable, self-hosted
├── llms.txt                  # Resumen del sitio para LLMs (es)
├── en/llms.txt               # Resumen del sitio para LLMs (en)
├── robots.txt
└── sitemap.xml
```

## Secciones del sitio

- **Hero** — presentación, disponibilidad laboral, botones de contacto/CV y redes (GitHub, LinkedIn, WhatsApp)
- **Sobre mí** — bio corta
- **Experiencia profesional y estudios** — historial laboral y académico
- **Proyectos destacados** — Cachavacha ERP, RaxTech SPA, Cachavacha SPA y Braided SPA, cada uno con stack, repo y demo
- **Habilidades** — front-end, back-end/BD, herramientas y habilidades blandas
- **Footer**

## Internacionalización (es/en)

El idioma se resuelve por ruta: `/` es español, `/en` es inglés. `LanguageProvider` (`src/provider/LanguageProvider.tsx`):

- Setea `<html lang>` según la ruta activa
- Actualiza dinámicamente `document.title`, `meta[name="description"]`, `og:title`, `og:description`, `og:url`, `og:locale` y el `link[rel="canonical"]` al cambiar de idioma
- Expone `lang`, `switchLang` y el diccionario `t` vía `LanguageContext`, consumido con el hook `useTranslate`

Los textos viven en `src/traductions/es.ts` y `en.ts`.

## SEO y AI discoverability

- **JSON-LD** (`Person`) en `index.html` con nombre, rol, imagen y perfiles sociales
- **`sitemap.xml`** y **`robots.txt`** en `public/`
- **`hreflang`** alternates (`es`, `en`, `x-default`) y `canonical` dinámico por idioma
- **Open Graph** y **Twitter Cards** para previews en redes
- **`llms.txt`** (`public/llms.txt` en español, `public/en/llms.txt` en inglés) — siguiendo la convención de [llmstxt.org](https://llmstxt.org/), le da a los LLMs y asistentes de IA un resumen estructurado del sitio (experiencia, proyectos, contacto) sin depender de renderizar el JS de la SPA

## Tipografías

Lato y Poppins están self-hosted (no vía Google Fonts CDN) en `src/assets/typography/`, declaradas con `@font-face` en `src/index.css` (pesos 400/700, normal/italic, `font-display: swap`). Licencia SIL Open Font License (`OFL.txt` en cada carpeta).

## Instalación y uso

```bash
npm install       # instalar dependencias
npm run dev        # servidor de desarrollo (Vite, con --host)
npm run build       # type-check (tsc -b) + build de producción
npm run preview      # sirve el build de producción localmente
npm run lint          # ESLint
```

## Deploy

Desplegado en **Vercel**. `vercel.json` reescribe todas las rutas a `/` para que React Router maneje el ruteo client-side (necesario en una SPA sin SSR).

## Contacto

- Sitio: [alejoaraya.online](https://www.alejoaraya.online/)
- GitHub: [github.com/alejoaraya](https://github.com/alejoaraya)
- LinkedIn: [linkedin.com/in/alejoaraya](https://www.linkedin.com/in/alejoaraya/)
- WhatsApp: [wa.me/+5492612589882](https://wa.me/+5492612589882)
