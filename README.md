# C.D.S.C. Unión · Lunahuaná — Landing Page

Landing page oficial del **Club Deportivo Social y Cultural Unión**, de Lunahuaná (Valle del Cañete, Perú). Fundado en **1937**, el sitio celebra los 87+ años de historia del club, presenta el plantel 2026, la junta directiva, una galería histórica y un formulario de inscripción.

🔗 **Desarrollado por [Racso](https://racso24k.github.io/)**

---

## 🧱 Stack

Vanilla, **sin frameworks ni build step**. Se abre directamente en el navegador.

- **HTML5** semántico (`index.html`)
- **CSS3** Mobile-First (`css/styles.css`) — breakpoints en 600px (tablet) y 920px (desktop)
- **JavaScript** ES6+ vanilla (`js/main.js`) — sin dependencias
- **Google Fonts**: Cinzel (títulos) + Montserrat (cuerpo)
- **Font Awesome 6.5** (íconos, vía CDN)

---

## 📁 Estructura

```
club-union-lunahuana/
├── index.html          # Estructura y todas las secciones
├── css/
│   └── styles.css      # Estilos Mobile-First (~1500 líneas)
├── js/
│   └── main.js         # Lógica: datos + render + interacciones
├── assets/             # Imágenes: logo, escudo, plantel, historia, sponsors
└── README.md
```

---

## 🧩 Secciones de la página

| Sección | `id` | Descripción |
|---|---|---|
| Navbar | `#navbar` | Menú fijo con hamburguesa móvil y scroll-spy |
| Hero | `#inicio` | Portada con escudo y lema del club |
| Plantilla | `#plantilla` | Foto oficial 2026 + grilla de jugadores con filtros |
| Galería | `#galeria` | Galería histórica con lightbox y botón "ver más" |
| Historia | `#historia` | Línea de tiempo del club desde 1937 |
| Inscripción | `#inscripcion` | Formulario con validación que envía por WhatsApp |
| Footer | — | Contacto, redes, ubicación (Google Maps) y créditos |

---

## ⚙️ Cómo funciona el JS (`js/main.js`)

Todo el contenido dinámico vive en **arrays de datos** al inicio del archivo y se renderiza a HTML por funciones dedicadas:

- `jugadores[]` → `cargarJugadores()` / `buildCardJugador()` — plantel 2026
- `directiva[]` → `cargarDirectiva()` — junta directiva
- `eventos[]` → `cargarEventos()` — eventos (sección oculta por defecto)
- `galeriaItems[]` → galería + lightbox (`openLightbox`, `lightboxNext/Prev`)
- Sponsors → `cargarSponsors()`

Interacciones principales:

- `initNavbar()` — menú móvil + scroll-spy con `IntersectionObserver`
- `initBackToTop()` — botón "volver arriba"
- `initFiltrosJugadores()` — filtra el plantel por categoría
- `initLightbox()` — visor de galería con navegación por teclado
- `initFormInscripcion()` + `validarForm()` — valida y envía la inscripción **por WhatsApp** (`enviarFormulario`), incluyendo cálculo de edad (`calcularEdad`)

> Para editar contenido (jugadores, fotos, eventos), basta con tocar los arrays al inicio de `main.js`. **No se inventan datos**: el contenido debe corresponder al club real.

---

## 🚀 Cómo correrlo localmente

No requiere instalación ni dependencias. Opción simple:

```bash
# Abrir directamente
open index.html
```

O servirlo con un servidor estático (recomendado, para evitar restricciones de `file://`):

```bash
# Python 3
python3 -m http.server 8000
# luego abrir http://localhost:8000
```

---

## 🔗 Enlaces y contacto del club

- **Facebook**: https://www.facebook.com/profile.php?id=61573693557569
- **WhatsApp**: https://wa.me/51960903733
- **Ubicación**: [Google Maps](https://maps.app.goo.gl/jxSzQbZMByavjDUNA)

---

## ✍️ Créditos

Diseño y desarrollo: **[Racso](https://racso24k.github.io/)**.
