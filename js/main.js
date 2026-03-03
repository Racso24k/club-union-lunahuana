// --- DATOS DEL EQUIPO (11 JUGADORES) ---
const jugadores = [
    { nombre: "Piero 'Araña' Sanchez", numero: 1, cat: "arquero", img: "assets/p1.jpg", pos: "Portero" },
    { nombre: "Carlos 'Káiser' Lievano", numero: 4, cat: "defensa", img: "assets/p2.jpg", pos: "Defensa Central" },
    { nombre: "Jhon 'Muralla' Candela", numero: 2, cat: "defensa", img: "assets/p3.jpg", pos: "Defensa Central" },
    { nombre: "Luis 'Rayo' Martinez", numero: 13, cat: "defensa", img: "assets/p4.jpg", pos: "Lateral Derecho" },
    { nombre: "Jose 'Zurdo' Quispe", numero: 3, cat: "defensa", img: "assets/p5.jpg", pos: "Lateral Izquierdo" },
    { nombre: "Oscar 'El Mago' Armas", numero: 10, cat: "volante", img: "assets/p6.jpg", pos: "Volante Creativo" },
    { nombre: "Renzo 'Motor' Vega", numero: 6, cat: "volante", img: "assets/p7.jpg", pos: "Volante de Marca" },
    { nombre: "Victor 'Pulmón' Jara", numero: 8, cat: "volante", img: "assets/p8.jpg", pos: "Volante Mixto" },
    { nombre: "Raul 'Tanque' Arias", numero: 9, cat: "delantero", img: "assets/p9.jpg", pos: "Delantero Centro" },
    { nombre: "Miguel 'Diablo' Rossi", numero: 11, cat: "delantero", img: "assets/p10.jpg", pos: "Extremo Izquierdo" },
    { nombre: "Dany 'Flecha' Gomez", numero: 7, cat: "delantero", img: "assets/p11.jpg", pos: "Extremo Derecho" }
];

// --- DIRECTIVA ---
const directiva = [
    { nombre: "Sr. Juan Pérez", cargo: "Presidente", inicio: 2024, duracion: 4, img: "assets/dir1.jpg" },
    { nombre: "Sra. María Lopez", cargo: "Vicepresidente", inicio: 2024, duracion: 4, img: "assets/dir2.jpg" },
    // Los siguientes se centrarán simétricamente abajo
    { nombre: "Sr. Carlos Ruiz", cargo: "Secretario", inicio: 2025, duracion: 2, img: "assets/dir3.jpg" },
    { nombre: "Ing. Oscar Armas", cargo: "Tesorero", inicio: 2023, duracion: 4, img: "assets/dir4.jpg" },
    { nombre: "Abog. Luis Lira", cargo: "Fiscal", inicio: 2024, duracion: 2, img: "assets/dir5.jpg" },
    { nombre: "Sra. Ana Sanchez", cargo: "Primer Vocal", inicio: 2025, duracion: 2, img: "assets/dir6.jpg" },
    { nombre: "Sr. Pedro M.", cargo: "Segundo Vocal", inicio: 2025, duracion: 2, img: "assets/dir7.jpg" }
];

const recuerdos = [
    { desc: "Campeones 1985", img: "assets/recuerdo1.jpg" },
    { desc: "Equipo 90", img: "assets/recuerdo2.jpg" },
    { desc: "Patronal 2005", img: "assets/recuerdo3.jpg" },
    { desc: "Clásico 1978", img: "assets/recuerdo4.jpg" }
];

// --- FUNCIONES ---

function cargarJugadores(filtro = 'todos') {
    const contenedor = document.getElementById('contenedor-jugadores');
    if(!contenedor) return;
    contenedor.innerHTML = '';

    const filtrados = filtro === 'todos' ? jugadores : jugadores.filter(j => j.cat === filtro);

    filtrados.forEach(j => {
        const card = `
            <div class="card-jugador">
                <div class="card-img" style="background-image: url('${j.img}');"></div> 
                <div class="card-info">
                    <div class="dorsal">${j.numero}</div>
                    <h3>${j.nombre}</h3>
                    <p class="categoria">${j.pos}</p>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    });
}

function filtrarJugadores(categoria) {
    const botones = document.querySelectorAll('.filter-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    try { event.target.classList.add('active'); } catch(e) {}
    cargarJugadores(categoria);
}

function cargarDirectiva() {
    const contenedor = document.getElementById('contenedor-directiva');
    if(!contenedor) return;

    const anioActual = new Date().getFullYear();

    directiva.forEach(dir => {
        const aniosEnCargo = anioActual - dir.inicio;
        let porcentaje = (aniosEnCargo / dir.duracion) * 100;
        if(porcentaje > 100) porcentaje = 100;

        const card = `
            <div class="director-card">
                <div class="card-img" style="background-image: url('${dir.img}'); height: 250px;"></div>
                <div class="card-info">
                    <h3 style="margin-top:10px; font-size: 1.1rem;">${dir.nombre}</h3>
                    <p style="color:var(--guinda); font-weight:800; text-transform:uppercase; font-size:0.85rem;">${dir.cargo}</p>
                    <div style="background:#ddd; height:5px; width:100%; margin-top:15px; border-radius:5px;">
                        <div style="background:var(--guinda); height:100%; width:${porcentaje}%; border-radius:5px;"></div>
                    </div>
                    <small style="color:#888; display:block; margin-top:5px;">Gestión: ${aniosEnCargo} de ${dir.duracion} años</small>
                </div>
            </div>
        `;
        contenedor.innerHTML += card;
    });
}

function cargarGaleria() {
    const contenedor = document.getElementById('contenedor-galeria');
    if(!contenedor) return;

    recuerdos.forEach(r => {
        const item = `
            <div class="gallery-item">
                <img src="${r.img}" alt="Recuerdo" class="gallery-img">
                <div class="gallery-caption">${r.desc}</div>
            </div>
        `;
        contenedor.innerHTML += item;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    cargarJugadores();
    cargarDirectiva();
    cargarGaleria();
});