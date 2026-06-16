/* ================================================================
   DATOS DEL CLUB
   ================================================================

   INSTRUCCIONES GENERALES:
   → Cuando tengas una foto, reemplazá `img: null` por `img: "assets/nombre.jpg"`
   → Descargá las fotos desde: https://www.facebook.com/profile.php?id=61573693557569

   ================================================================ */


/* ----------------------------------------------------------------
   JUGADORES — PLANTILLA 2026
   ----------------------------------------------------------------
   Para cada jugador:
   img: null        → muestra placeholder automáticamente
   img: "ruta.jpg"  → muestra la foto
   ---------------------------------------------------------------- */
const jugadores = [
    /* Plantel 2026 — fotos recortadas de assets/equipoindividual.png
       Cuando tengas el dato real, agregá a cada jugador:
         numero: 10,            → muestra el dorsal
         cat: "volante",        → habilita el filtro por posición
         pos: "Volante Creativo" → texto bajo el nombre
       (arquero | defensa | volante | delantero) */
    /* Provisorio: cambiá `nombre` y `pos` por los reales cuando los tengas. */
    { nombre: "Jugador 1",  numero: 1,  cat: "arquero",   pos: "Portero",            img: "assets/p1.jpg"  },
    { nombre: "Jugador 2",  numero: 2,  cat: "defensa",   pos: "Defensa Central",    img: "assets/p2.jpg"  },
    { nombre: "Jugador 3",  numero: 3,  cat: "defensa",   pos: "Defensa Central",    img: "assets/p3.jpg"  },
    { nombre: "Jugador 4",  numero: 4,  cat: "defensa",   pos: "Lateral Derecho",    img: "assets/p4.jpg"  },
    { nombre: "Jugador 5",  numero: 5,  cat: "defensa",   pos: "Lateral Izquierdo",  img: "assets/p5.jpg"  },
    { nombre: "Jugador 6",  numero: 6,  cat: "defensa",   pos: "Defensa",            img: "assets/p6.jpg"  },
    { nombre: "Jugador 7",  numero: 7,  cat: "volante",   pos: "Volante de Marca",   img: "assets/p7.jpg"  },
    { nombre: "Jugador 8",  numero: 8,  cat: "volante",   pos: "Volante Central",    img: "assets/p8.jpg"  },
    { nombre: "Jugador 9",  numero: 9,  cat: "volante",   pos: "Volante Mixto",      img: "assets/p9.jpg"  },
    { nombre: "Jugador 10", numero: 10, cat: "volante",   pos: "Volante Creativo",   img: "assets/p10.jpg" },
    { nombre: "Jugador 11", numero: 11, cat: "delantero", pos: "Delantero Centro",   img: "assets/p11.jpg" },
    { nombre: "Jugador 12", numero: 12, cat: "delantero", pos: "Extremo Derecho",    img: "assets/p12.jpg" },
    { nombre: "Jugador 13", numero: 13, cat: "delantero", pos: "Extremo Izquierdo",  img: "assets/p13.jpg" },
    { nombre: "Jugador 14", numero: 14, cat: "arquero",   pos: "Portero",            img: "assets/p14.jpg" },
];


/* ----------------------------------------------------------------
   JUNTA DIRECTIVA 2026
   ----------------------------------------------------------------
   inicio:   año en que asumió el cargo
   duracion: años totales del mandato
   ---------------------------------------------------------------- */
const directiva = [
    {
        nombre: "Luis Casas Sulca",
        cargo: "Presidente",
        img: null
        // inicio: 2026, duracion: 2,  → agregar para mostrar la barra de gestión
        // img: "assets/dir1.jpg"
    },
    {
        nombre: "Teófilo Sánchez Sánchez",
        cargo: "Vicepresidente",
        img: null
        // img: "assets/dir2.jpg"
    },
    {
        nombre: "Darcy Gamarra",
        cargo: "Secretario",
        img: null
        // img: "assets/dir3.jpg"
    },
    {
        nombre: "Martín Correa Candela",
        cargo: "Tesorero",
        img: null
        // img: "assets/dir4.jpg"
    }
    // Fiscal: pendiente de nombre
];


/* ----------------------------------------------------------------
   PRÓXIMOS EVENTOS Y PARTIDOS
   ----------------------------------------------------------------
   tipo: "partido" | "evento" | "social"
   ---------------------------------------------------------------- */
const eventos = [
    {
        dia: "28",
        mes: "Jun",
        titulo: "C.D.S.C. Unión vs. Sport Anexo",
        tipo: "partido",
        liga: "Liga Distrital Lunahuaná",
        hora: "3:30 PM",
        lugar: "Campo Municipal Lunahuaná"
    },
    {
        dia: "05",
        mes: "Jul",
        titulo: "C.D.S.C. Unión vs. Deportivo Pacarán",
        tipo: "partido",
        liga: "Liga Distrital Lunahuaná",
        hora: "4:00 PM",
        lugar: "Campo Municipal Lunahuaná"
    },
    {
        dia: "22",
        mes: "Jul",
        titulo: "Cierre de primera rueda — Premiación",
        tipo: "evento",
        liga: "Liga Distrital Lunahuaná",
        hora: "6:00 PM",
        lugar: "Campo Municipal Lunahuaná"
    },
    {
        dia: "30",
        mes: "Ago",
        titulo: "Festividad Santa Rosa de Lima",
        tipo: "social",
        liga: "Club Unión",
        hora: "Todo el día",
        lugar: "Lunahuaná, Cañete"
    },
    {
        dia: "07",
        mes: "Sep",
        titulo: "Torneo Aniversario CDSC Unión",
        tipo: "evento",
        liga: "Club Unión – 87° Aniversario",
        hora: "9:00 AM",
        lugar: "Campo Municipal Lunahuaná"
    }
];


/* ----------------------------------------------------------------
   GALERÍA DE FOTOS — solo imágenes del club
   ----------------------------------------------------------------
   PARA AGREGAR MÁS FOTOS:
   1. Guardá la imagen en assets/
   2. Agregá un objeto nuevo con img: "assets/nombre.jpg"

   cat: "equipo" | "historia" | "social"

   NOTA: Los avisos de sponsors (pisco, taxi, pintura, etc.)
   que aparecen en el Facebook NO van aquí.
   ---------------------------------------------------------------- */
const galeriaItems = [

    /* ── EQUIPO ACTUAL ──────────────────────────── */
    {
        titulo: "Equipo Oficial — Temporada 2026",
        year: "2026",
        cat: "equipo",
        img: "assets/Equipo Actual 2026.jpg"
    },

    /* ── FOTOS HISTÓRICAS ───────────────────────── */
    {
        titulo: "Equipo del Recuerdo",
        year: "Histórico",
        cat: "historia",
        img: "assets/historia-recuerdo-1.jpg"
    },
    {
        titulo: "Glorias del Club",
        year: "Histórico",
        cat: "historia",
        img: "assets/historia-recuerdo-2.jpg"
    },
    {
        titulo: "Equipo — Años 80",
        year: "~1980s",
        cat: "historia",
        img: "assets/historia-equipo-anos80.jpg"
    },
    {
        titulo: "Equipo en el Valle",
        year: "~1970s",
        cat: "historia",
        img: "assets/historia-equipo-anos70.jpg"
    },
    {
        titulo: "Viaje / Concentración",
        year: "~2000s",
        cat: "historia",
        img: "assets/historia-viaje-concentracion.jpg"
    },
    {
        titulo: "Plantel con la Camiseta 'U'",
        year: "~1990s",
        cat: "historia",
        img: "assets/historia-plantel-camiseta-u.jpg"
    },
    {
        titulo: "Campeones del Valle",
        year: "~1990s",
        cat: "historia",
        img: "assets/historia-plantel-anos90.jpg"
    },

    /* ── EVENTOS SOCIALES ───────────────────────── */
    {
        titulo: "Festividad Santa Rosa de Lima",
        year: "2024",
        cat: "social",
        img: "assets/social-santa-rosa.jpg"
    },

    /* ── PRÓXIMAS FOTOS (descomentá cuando las tengas) ── */
    // { titulo: "Partido reciente", year: "2025", cat: "equipo", img: "assets/partido-2025.jpg" },
    // { titulo: "Aniversario del Club", year: "2025", cat: "social", img: "assets/aniversario-2025.jpg" },
];

const GALERIA_VISIBLE_INICIAL = 8;
let galeriaActualCat = "todos";
let galeriaShowAll = false;


/* ================================================================
   NAVBAR — Hamburger menu
   ================================================================ */
function initNavbar() {
    const hamburger = document.getElementById("hamburger");
    const navLinks  = document.getElementById("nav-links");
    const icon      = document.getElementById("hamburger-icon");

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");
        hamburger.setAttribute("aria-expanded", String(isOpen));
        icon.className = isOpen ? "fas fa-times" : "fas fa-bars";
    });

    /* Cerrá el menú al hacer click en cualquier enlace */
    navLinks.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            hamburger.setAttribute("aria-expanded", "false");
            icon.className = "fas fa-bars";
        });
    });

    /* Active link on scroll */
    const sections = document.querySelectorAll("section[id], header[id]");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    navLinks.querySelectorAll("a").forEach(a => {
                        a.classList.toggle("active", a.getAttribute("href") === "#" + entry.target.id);
                    });
                }
            });
        },
        { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach(s => observer.observe(s));
}


/* ================================================================
   BACK TO TOP
   ================================================================ */
function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    if (!btn) return;

    window.addEventListener("scroll", () => {
        btn.classList.toggle("visible", window.scrollY > 400);
    }, { passive: true });

    btn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}


/* ================================================================
   PRÓXIMOS EVENTOS
   ================================================================ */
function cargarEventos() {
    const contenedor = document.getElementById("contenedor-eventos");
    if (!contenedor) return;

    contenedor.innerHTML = eventos.map(ev => `
        <article class="evento-card tipo-${ev.tipo}" role="listitem">
            <div class="evento-fecha">
                <span class="evento-dia">${ev.dia}</span>
                <span class="evento-mes">${ev.mes}</span>
            </div>
            <div class="evento-info">
                <span class="evento-tipo-badge">${ev.tipo === "partido" ? "⚽ Partido" : ev.tipo === "evento" ? "🏆 Evento" : "🎉 Social"}</span>
                <p class="evento-titulo">${ev.titulo}</p>
                <div class="evento-detalles">
                    <span><i class="far fa-clock"></i> ${ev.hora}</span>
                    <span><i class="fas fa-map-marker-alt"></i> ${ev.lugar}</span>
                    <span><i class="fas fa-trophy"></i> ${ev.liga}</span>
                </div>
            </div>
        </article>
    `).join("");
}


/* ================================================================
   PLANTILLA — JUGADORES
   ================================================================ */
function buildCardJugador(j) {
    const imgContent = j.img
        ? `<div class="card-img" style="background-image:url('${j.img}')" role="img" aria-label="Foto de ${j.nombre || "jugador"}"></div>`
        : `<div class="card-img-placeholder">
               <i class="fas fa-user" aria-hidden="true"></i>
               <small>Foto próximamente</small>
           </div>`;

    /* Dorsal, nombre y posición solo se muestran si existen (sin datos inventados) */
    const dorsal  = j.numero ? `<div class="dorsal" aria-label="Número ${j.numero}">${j.numero}</div>` : "";
    const titulo  = j.nombre ? `<h3>${j.nombre}</h3>` : "";
    const posLine = j.pos    ? `<p class="categoria">${j.pos}</p>` : "";
    const info    = (dorsal || titulo || posLine)
        ? `<div class="card-info">${dorsal}${titulo}${posLine}</div>`
        : "";

    return `
        <article class="card-jugador" data-cat="${j.cat || "todos"}">
            ${imgContent}
            ${info}
        </article>`;
}

function cargarJugadores(filtro = "todos") {
    const contenedor = document.getElementById("contenedor-jugadores");
    if (!contenedor) return;

    const filtrados = filtro === "todos" ? jugadores : jugadores.filter(j => j.cat === filtro);
    contenedor.innerHTML = filtrados.map(buildCardJugador).join("");

    /* Animación de entrada */
    contenedor.querySelectorAll(".card-jugador").forEach((card, i) => {
        card.style.opacity = "0";
        card.style.transform = "translateY(20px)";
        setTimeout(() => {
            card.style.transition = "opacity 0.4s ease, transform 0.4s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, i * 60);
    });
}

function initFiltrosJugadores() {
    const botones = document.querySelectorAll(".filter-btn");
    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            botones.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            cargarJugadores(btn.dataset.filter);
        });
    });
}


/* ================================================================
   GALERÍA
   ================================================================ */
let galeriaImagenes = [];  // índices de items con imagen para el lightbox

function buildGalleryItem(item, idx) {
    if (item.img) {
        return `
            <div class="gallery-item"
                 data-cat="${item.cat}"
                 data-index="${idx}"
                 data-hidden="false"
                 tabindex="0"
                 role="button"
                 aria-label="Ver imagen: ${item.titulo}">
                <img src="${item.img}"
                     alt="${item.titulo} – ${item.year}"
                     loading="lazy"
                     onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
                <div class="gallery-placeholder" style="display:none">
                    <i class="fas fa-image" aria-hidden="true"></i>
                    <span class="ph-title">${item.titulo}</span>
                    <span class="ph-hint">${item.year}</span>
                </div>
                <div class="gallery-overlay">
                    <p>${item.titulo}</p>
                    <span>${item.year}</span>
                </div>
                <div class="gallery-zoom" aria-hidden="true"><i class="fas fa-search-plus"></i></div>
            </div>`;
    }

    /* Nombre del archivo esperado (para guiar al usuario) */
    const expectedFile = `assets/galeria-${String(idx + 1).padStart(2, "0")}.jpg`;

    return `
        <div class="gallery-item gallery-item-no-img"
             data-cat="${item.cat}"
             data-hidden="false">
            <div class="gallery-placeholder">
                <i class="fas fa-image" aria-hidden="true"></i>
                <span class="ph-title">${item.titulo}</span>
                <span class="ph-hint">${item.year}</span>
                <span class="ph-file">${expectedFile}</span>
            </div>
        </div>`;
}

function cargarGaleria() {
    const contenedor = document.getElementById("contenedor-galeria");
    if (!contenedor) return;

    contenedor.innerHTML = galeriaItems.map((item, i) => buildGalleryItem(item, i)).join("");

    /* Registrá los ítems con imagen para el lightbox */
    galeriaImagenes = galeriaItems
        .map((item, i) => ({ ...item, originalIndex: i }))
        .filter(item => item.img);

    /* Asigná listeners de lightbox solo a items con imagen */
    contenedor.querySelectorAll(".gallery-item[data-index]").forEach(el => {
        el.addEventListener("click",  () => openLightbox(parseInt(el.dataset.index)));
        el.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") openLightbox(parseInt(el.dataset.index)); });
    });

    aplicarFiltroGaleria(galeriaActualCat);
}

function aplicarFiltroGaleria(cat) {
    galeriaActualCat = cat;
    galeriaShowAll   = false;

    const items = document.querySelectorAll("#contenedor-galeria .gallery-item");
    let visible = 0;

    items.forEach(item => {
        const matchCat = cat === "todos" || item.dataset.cat === cat;
        item.dataset.hidden = String(!matchCat);
        if (matchCat) visible++;
    });

    /* Mostrá/ocultá el botón "ver más" */
    const btnVerMas = document.getElementById("btn-ver-mas");
    if (btnVerMas) {
        btnVerMas.style.display = visible > GALERIA_VISIBLE_INICIAL ? "inline-block" : "none";
    }

    aplicarLimiteGaleria();
}

function aplicarLimiteGaleria() {
    const items = document.querySelectorAll("#contenedor-galeria .gallery-item:not([data-hidden='true'])");
    items.forEach((item, i) => {
        if (!galeriaShowAll && i >= GALERIA_VISIBLE_INICIAL) {
            item.style.display = "none";
        } else {
            item.style.display = "";
        }
    });
}

function initFiltrosGaleria() {
    document.querySelectorAll(".gallery-tab").forEach(tab => {
        tab.addEventListener("click", () => {
            document.querySelectorAll(".gallery-tab").forEach(t => t.classList.remove("active"));
            tab.classList.add("active");
            aplicarFiltroGaleria(tab.dataset.cat);
        });
    });

    const btnVerMas = document.getElementById("btn-ver-mas");
    if (btnVerMas) {
        btnVerMas.addEventListener("click", () => {
            galeriaShowAll = true;
            aplicarLimiteGaleria();
            btnVerMas.style.display = "none";
        });
    }
}


/* ================================================================
   LIGHTBOX
   ================================================================ */
let lightboxCurrentIndex = 0;

function openLightbox(originalIndex) {
    /* Encontrá la posición dentro de galeriaImagenes */
    const pos = galeriaImagenes.findIndex(i => i.originalIndex === originalIndex);
    if (pos === -1) return;

    lightboxCurrentIndex = pos;
    updateLightboxImage();
    document.getElementById("lightbox").classList.add("active");
    document.body.style.overflow = "hidden";
    document.getElementById("lightbox-close").focus();
}

function closeLightbox() {
    document.getElementById("lightbox").classList.remove("active");
    document.body.style.overflow = "";
}

function updateLightboxImage() {
    const item = galeriaImagenes[lightboxCurrentIndex];
    if (!item) return;

    const img = document.getElementById("lightbox-img");
    img.src = item.img;
    img.alt = `${item.titulo} – ${item.year}`;
    document.getElementById("lightbox-caption").textContent = item.titulo;
    document.getElementById("lightbox-counter").textContent =
        `${lightboxCurrentIndex + 1} / ${galeriaImagenes.length}`;
}

function lightboxPrev() {
    lightboxCurrentIndex = (lightboxCurrentIndex - 1 + galeriaImagenes.length) % galeriaImagenes.length;
    updateLightboxImage();
}

function lightboxNext() {
    lightboxCurrentIndex = (lightboxCurrentIndex + 1) % galeriaImagenes.length;
    updateLightboxImage();
}

function initLightbox() {
    document.getElementById("lightbox-close")?.addEventListener("click", closeLightbox);
    document.getElementById("lightbox-prev")?.addEventListener("click",  lightboxPrev);
    document.getElementById("lightbox-next")?.addEventListener("click",  lightboxNext);

    /* Cerrar al hacer click en el fondo */
    document.getElementById("lightbox")?.addEventListener("click", e => {
        if (e.target === document.getElementById("lightbox")) closeLightbox();
    });

    /* Teclado */
    document.addEventListener("keydown", e => {
        if (!document.getElementById("lightbox")?.classList.contains("active")) return;
        if (e.key === "Escape")     closeLightbox();
        if (e.key === "ArrowLeft")  lightboxPrev();
        if (e.key === "ArrowRight") lightboxNext();
    });
}


/* ================================================================
   DIRECTIVA
   ================================================================ */
function cargarDirectiva() {
    const contenedor = document.getElementById("contenedor-directiva");
    if (!contenedor) return;

    const anioActual = new Date().getFullYear();

    contenedor.innerHTML = directiva.map(dir => {
        const imgContent = dir.img
            ? `<div class="card-img" style="background-image:url('${dir.img}')" role="img" aria-label="Foto de ${dir.nombre}"></div>`
            : `<div class="card-img-placeholder">
                   <i class="fas fa-user-tie" aria-hidden="true"></i>
                   <small>Foto pendiente</small>
               </div>`;

        /* Barra de gestión solo si hay datos de inicio y duración */
        let gestion = "";
        if (dir.inicio && dir.duracion) {
            const aniosEnCargo = Math.min(anioActual - dir.inicio, dir.duracion);
            const porcentaje   = Math.round((aniosEnCargo / dir.duracion) * 100);
            gestion = `
                    <div class="gestion-bar-wrap">
                        <div class="gestion-bar" data-width="${porcentaje}"></div>
                    </div>
                    <small class="gestion-label">Gestión: ${aniosEnCargo} de ${dir.duracion} años (${porcentaje}%)</small>`;
        }

        return `
            <article class="director-card">
                ${imgContent}
                <div class="card-info" style="padding:16px 16px 20px">
                    <h3 style="font-size:.95rem;margin-top:8px;margin-right:0;text-align:center">${dir.nombre}</h3>
                    <div style="text-align:center"><span class="cargo-badge">${dir.cargo}</span></div>${gestion}
                </div>
            </article>`;
    }).join("");

    /* Animación de barras de gestión con IntersectionObserver */
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.querySelectorAll(".gestion-bar").forEach(bar => {
                    bar.style.width = bar.dataset.width + "%";
                });
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    observer.observe(contenedor);
}


/* ================================================================
   FORMULARIO DE INSCRIPCIÓN
   ================================================================ */
function initFormInscripcion() {
    const form = document.getElementById("form-inscripcion");
    if (!form) return;

    form.addEventListener("submit", e => {
        e.preventDefault();
        if (validarForm(form)) {
            const telefono = document.getElementById("telefono").value.trim();
            enviarFormulario(telefono);
        }
    });

    /* Limpiar error al editar */
    form.querySelectorAll("input, select, textarea").forEach(field => {
        field.addEventListener("input", () => clearError(field));
        field.addEventListener("change", () => clearError(field));
    });
}

function validarForm(form) {
    let valido = true;

    const nombre    = form.querySelector("#nombre");
    const dni       = form.querySelector("#dni");
    const nacimiento = form.querySelector("#nacimiento");
    const telefono  = form.querySelector("#telefono");
    const email     = form.querySelector("#email");
    const categoria = form.querySelector("#categoria");
    const terminos  = form.querySelector("#terminos");

    clearAllErrors(form);

    if (!nombre.value.trim() || nombre.value.trim().length < 3) {
        showError("nombre", "Ingresá tu nombre completo (mínimo 3 caracteres).");
        valido = false;
    }

    if (!/^\d{8}$/.test(dni.value.trim())) {
        showError("dni", "El DNI debe tener exactamente 8 dígitos.");
        valido = false;
    }

    if (!nacimiento.value) {
        showError("nacimiento", "Ingresá tu fecha de nacimiento.");
        valido = false;
    } else {
        const edad = calcularEdad(nacimiento.value);
        if (edad < 5 || edad > 90) {
            showError("nacimiento", "La edad ingresada no es válida.");
            valido = false;
        }
    }

    if (!/^\d{9}$/.test(telefono.value.trim())) {
        showError("telefono", "El teléfono debe tener 9 dígitos.");
        valido = false;
    }

    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
        showError("email", "Ingresá un correo electrónico válido.");
        valido = false;
    }

    if (!categoria.value) {
        showError("categoria", "Seleccioná una categoría.");
        valido = false;
    }

    if (!terminos.checked) {
        showError("terminos", "Debés aceptar los términos para continuar.");
        valido = false;
    }

    /* Enfocá el primer campo con error */
    if (!valido) {
        form.querySelector(".error")?.focus();
    }

    return valido;
}

function calcularEdad(fechaStr) {
    const hoy   = new Date();
    const nacido = new Date(fechaStr);
    let edad = hoy.getFullYear() - nacido.getFullYear();
    const mes = hoy.getMonth() - nacido.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacido.getDate())) edad--;
    return edad;
}

function showError(fieldId, msg) {
    const field = document.getElementById(fieldId);
    const errorEl = document.getElementById("error-" + fieldId);
    if (field)   field.classList.add("error");
    if (errorEl) errorEl.textContent = msg;
}

function clearError(field) {
    field.classList.remove("error");
    const errorEl = document.getElementById("error-" + field.id);
    if (errorEl) errorEl.textContent = "";
}

function clearAllErrors(form) {
    form.querySelectorAll(".error").forEach(el => el.classList.remove("error"));
    form.querySelectorAll(".form-error").forEach(el => el.textContent = "");
}

const WHATSAPP_NUMERO = "51940731260"; // ← cambiá por el número real del club cuando esté listo

function enviarFormulario(telefono) {
    const btn = document.getElementById("btn-submit");
    if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Abriendo WhatsApp...';
    }

    const nombre     = document.getElementById("nombre").value.trim();
    const dni        = document.getElementById("dni").value.trim();
    const nacimiento = document.getElementById("nacimiento").value;
    const email      = document.getElementById("email").value.trim();
    const categoria  = document.getElementById("categoria").value;
    const posicion   = document.getElementById("posicion").value;
    const mensaje    = document.getElementById("mensaje").value.trim();

    const texto = [
        "🏟️ *SOLICITUD DE INSCRIPCIÓN — CDSC Unión Lunahuaná*",
        "",
        `👤 *Nombre:* ${nombre}`,
        `🪪 *DNI:* ${dni}`,
        `📅 *Nacimiento:* ${nacimiento}`,
        `📞 *Teléfono:* ${telefono}`,
        `✉️ *Email:* ${email}`,
        `⚽ *Categoría:* ${categoria}`,
        posicion ? `🎽 *Posición:* ${posicion}` : null,
        mensaje  ? `📝 *Mensaje:* ${mensaje}`    : null,
    ].filter(Boolean).join("\n");

    const url = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(texto)}`;

    setTimeout(() => {
        window.open(url, "_blank");

        document.getElementById("form-inscripcion").style.display = "none";
        const successEl = document.getElementById("form-success");
        successEl.hidden = false;
        successEl.style.display = "";
        document.getElementById("success-telefono").textContent = telefono;
        successEl.scrollIntoView({ behavior: "smooth", block: "center" });

        if (btn) {
            btn.disabled = false;
            btn.innerHTML = 'Enviar solicitud <i class="fas fa-paper-plane"></i>';
        }
    }, 800);
}


/* ================================================================
   SPONSORS / AUSPICIADORES
   ================================================================ */
const sponsors = [
    { nombre: "Pisco de las Casas",    rubro: "Piscos · Lunahuaná",          img: "assets/sponsor-pisco-las-casas.jpg"    },
    { nombre: "Distribuidora J.A.C",   rubro: "Vinos y Piscos",               img: "assets/sponsor-distribuidora-jac.jpg"  },
    { nombre: "Sol & Río",             rubro: "Canotaje · Canopy",            img: "assets/sponsor-sol-rio-canotaje.jpg"   },
    { nombre: "\"El Mero\"",           rubro: "Pintura y acabados",           img: "assets/sponsor-el-mero-pintura.jpg"    },
    { nombre: "Taxi Liam & Joaquín",   rubro: "Servicio de taxi · 24 h",      img: "assets/sponsor-taxi-liam-joaquin.jpg"  },
    { nombre: "Metalsan",              rubro: "Metalmecánica",                img: "assets/sponsor-metalsan.jpg"           },
];

function cargarSponsors() {
    const contenedor = document.getElementById("contenedor-sponsors");
    if (!contenedor) return;
    contenedor.innerHTML = sponsors.map(s => `
        <div class="sponsor-card">
            <img src="${s.img}" alt="${s.nombre}" loading="lazy"
                 onerror="this.style.display='none'">
            <span class="sponsor-nombre">${s.nombre}</span>
            <span class="sponsor-rubro">${s.rubro}</span>
        </div>
    `).join("");
}


/* ================================================================
   INICIALIZACIÓN
   ================================================================ */
document.addEventListener("DOMContentLoaded", () => {
    initNavbar();
    initBackToTop();
    cargarEventos();
    cargarJugadores();
    initFiltrosJugadores();
    cargarGaleria();
    initFiltrosGaleria();
    initLightbox();
    cargarDirectiva();
    initFormInscripcion();
    cargarSponsors();
});
