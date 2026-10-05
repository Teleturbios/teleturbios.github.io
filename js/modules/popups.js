/**
 * ============================================================================
 * TELETURBIOS - MOTOR DE POPUPS DEMONÍACOS Y SCREAMERS (js/modules/popups.js)
 * ============================================================================
 * Genera ventanas emergentes aleatorias y pantallas de screamer endemoniadas
 * con frases en ruso, símbolos extraños y corrupción Zalgo/glitch.
 * ============================================================================
 */

/**
 * Muestra un Screamer repentino a pantalla completa con temblor de pantalla,
 * luces parpadeantes, símbolos demoníacos y frases en ruso.
 * @param {string} [gifPath] Ruta opcional del GIF a mostrar
 * @param {string} [mensaje] Texto opcional del screamer
 */
function crearScreamer(gifPath, mensaje) {
    const screamersDisponibles = [
        { src: "img/po-slendy-tubbies.gif", text: "🚨 ПОМОГИТЕ МНЕ ⛧ 666 🚨" },
        { src: "img/tubbyland-dipsy.gif", text: "👁️ ОНИ СМОТРЯТ НА ТЕБЯ 👁️" },
        { src: "img/redo_po_lala.gif", text: "☢️ НЕТ ВЫХОДА // СМЕРТЬ ☢️" },
        { src: "img/lala_drogas.gif", text: "💀 ТЕЛЕПУЗИКИ ПРИШЛИ 💀" },
        { src: "img/teletubbies-cursed.gif", text: "🕇 БЕГИ ПОКА МОЖЕШЬ 🕇" }
    ];

    const eleccion = screamersDisponibles[Math.floor(Math.random() * screamersDisponibles.length)];
    const gifFinal = gifPath || eleccion.src;
    const textoFinal = mensaje || eleccion.text;
    const simboloAzar = simbolosExtranos[Math.floor(Math.random() * simbolosExtranos.length)];

    let screamerContainer = document.getElementById("screamer-container");

    if (!screamerContainer) {
        screamerContainer = document.createElement("div");
        screamerContainer.id = "screamer-container";
        screamerContainer.className = "screamer-overlay";
        document.body.appendChild(screamerContainer);
    }

    screamerContainer.className = "screamer-overlay";
    screamerContainer.innerHTML = `
        <img src="${gifFinal}" class="screamer-img" alt="SCREAMER DEMONIACO">
        <h2 class="screamer-title">${textoFinal}</h2>
        <div class="text-warning fs-3 my-2 font-monospace">${simboloAzar}</div>
        <p class="text-white mt-2 font-monospace">[ HAZ CLIC O PULSA ESC PARA HUIR ]</p>
    `;

    const cerrarHandler = () => {
        screamerContainer.className = "screamer-overlay d-none";
        document.removeEventListener("keydown", cerrarHandler);
    };

    screamerContainer.onclick = cerrarHandler;
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" || e.key === "Enter") {
            cerrarHandler();
        }
    });

    setTimeout(() => {
        cerrarHandler();
    }, 4500);
}

/**
 * Crea e inyecta una nueva ventana emergente (popup) en el DOM.
 */
function crearPopup() {
    const tipos = ["mensaje", "encuesta", "imagen", "rebelde", "ruso", "demoniaco"];
    const tipo = tipos[Math.floor(Math.random() * tipos.length)];

    const popup = document.createElement("div");
    popup.className = "turbio-popup";

    const colores = ["popup-rojo", "popup-verde", "popup-amarillo", "popup-morado"];
    const colorAzar = colores[Math.floor(Math.random() * colores.length)];
    popup.classList.add(colorAzar);

    const maxX = Math.max(20, window.innerWidth - 360);
    const maxY = Math.max(20, window.innerHeight - 320);

    const x = Math.max(20, Math.random() * maxX);
    const y = Math.max(20, Math.random() * maxY);

    popup.style.left = x + "px";
    popup.style.top = y + "px";

    /* ----------------------------------------------------------------------
       1. POP-UP EN RUSO ENDEMONIADO
       ---------------------------------------------------------------------- */
    if (tipo === "ruso") {
        const fraseRusa = frasesRusas[Math.floor(Math.random() * frasesRusas.length)];
        const gifRuso = gifsEstramboticos[Math.floor(Math.random() * gifsEstramboticos.length)];

        popup.innerHTML = `
            <div class="popup-header">
                <span>ПОМОГИТЕ_666.exe</span>
                <button class="popup-close">X</button>
            </div>
            <div class="popup-body text-center">
                <h3 class="text-danger">⛧ ${fraseRusa} ⛧</h3>
                <img src="${gifRuso.src}" class="popup-gif estrambotico-gif">
                <button class="popup-button mt-2 w-100">БЕГИ // ☠️</button>
            </div>
        `;
    }

    /* ----------------------------------------------------------------------
       2. POP-UP DEMONÍACO CON SÍMBOLOS EXTRAÑOS
       ---------------------------------------------------------------------- */
    else if (tipo === "demoniaco") {
        const simbolos = simbolosExtranos[Math.floor(Math.random() * simbolosExtranos.length)];
        popup.innerHTML = `
            <div class="popup-header">
                <span>⛧ 666_DEMONIO.exe ⛧</span>
                <button class="popup-close">X</button>
            </div>
            <div class="popup-body text-center">
                <h3 style="letter-spacing: 3px;">🕇 E̸R̸R̸O̸R̸ ̸S̸A̸T̸A̸N̸I̸C̸O̸ 🕇</h3>
                <p class="font-monospace fw-bold text-danger fs-5">${simbolos}</p>
                <img src="img/lala_drogas.gif" width="120" class="estrambotico-gif my-2">
                <button class="popup-button d-block w-100 mt-2">ENTREGAR ALMA 🩸</button>
            </div>
        `;
    }

    /* ----------------------------------------------------------------------
       3. POP-UP NORMAL (MENSAJE)
       ---------------------------------------------------------------------- */
    else if (tipo === "mensaje") {
        popup.innerHTML = `
            <div class="popup-header">
                <span>TELETURBIOS.exe</span>
                <button class="popup-close">X</button>
            </div>
            <div class="popup-body">
                <h3>👁️ TE ESTAMOS MIRANDO</h3>
                <p>Mentira. ПОМОГИТЕ МНЕ.</p>
                <p>Pero ahora has mirado detrás de ti. ⛧</p>
                <img src="img/atras-tuyo.webp" width="120" class="estrambotico-gif my-2">
                <button class="popup-button d-block w-100 mt-2">VALE...</button>
            </div>
        `;
    }

    /* ----------------------------------------------------------------------
       4. POP-UP TIPO ENCUESTA DEMONÍACA
       ---------------------------------------------------------------------- */
    else if (tipo === "encuesta") {
        popup.innerHTML = `
            <div class="popup-header">
                <span>ENCUESTA_DEMONIO.exe</span>
                <button class="popup-close">X</button>
            </div>
            <div class="popup-body">
                <h3>🧠 ENCUESTA ⛧ 666</h3>
                <p>¿Cuál de estas entidades te busca?</p>
                <button class="popup-option">👨 Persona normal</button>
                <button class="popup-option">👁️ ТЕЛЕПУЗИКИ (Teleturbio)</button>
                <button class="popup-option">⛧ El Demonio del Sol</button>
                <button class="popup-option">❓ НЕТ ВЫХОДА (Sin Salida)</button>
            </div>
        `;
    }

    /* ----------------------------------------------------------------------
       5. POP-UP CON GIFS Y FRASES DE LA GALERÍA
       ---------------------------------------------------------------------- */
    else if (tipo === "imagen") {
        const itemGif = gifsEstramboticos[Math.floor(Math.random() * gifsEstramboticos.length)];
        popup.innerHTML = `
            <div class="popup-header">
                <span>${itemGif.caption}</span>
                <button class="popup-close">X</button>
            </div>
            <div class="popup-body text-center">
                <h3>🔓 ${itemGif.text}</h3>
                <img src="${itemGif.src}" class="popup-gif estrambotico-gif">
                <button class="popup-button mt-2 w-100">телепузики ☠️</button>
            </div>
        `;
    }

    /* ----------------------------------------------------------------------
       6. VENTANA REBELDE (BOTÓN QUE HUYE)
       ---------------------------------------------------------------------- */
    else {
        popup.innerHTML = `
            <div class="popup-header">
                <span>IMPORTANTE_666.exe</span>
                <button class="popup-close">X</button>
            </div>
            <div class="popup-body">
                <h3>⚠️ ⛧ IMPORTANTE ⛧</h3>
                <p>¿Quieres cerrar esta ventana o entregar tu alma?</p>
                <div class="rebelde-buttons">
                    <button class="popup-button boton-si">SÍ</button>
                    <button class="popup-button boton-no">НЕТ</button>
                </div>
            </div>
        `;
    }

    const container = document.getElementById("popup-container");
    if (container) {
        container.appendChild(popup);
    }

    /* ----------------------------------------------------------------------
       MANEJADORES DE EVENTOS
       ---------------------------------------------------------------------- */
    const cerrar = popup.querySelector(".popup-close");
    if (cerrar) {
        cerrar.addEventListener("click", () => {
            popup.remove();
        });
    }

    popup.querySelectorAll(".popup-button").forEach(boton => {
        if (!boton.classList.contains("boton-si")) {
            boton.addEventListener("click", () => {
                popup.remove();
            });
        }
    });

    popup.querySelectorAll(".popup-option").forEach(boton => {
        boton.addEventListener("click", () => {
            boton.textContent = "❌ РЕАЛЬНОСТЬ РАЗРУШЕНА (ERROR 666)";
            boton.style.background = "#e30613";
            boton.style.color = "white";

            setTimeout(() => {
                popup.remove();
                if (Math.random() < 0.45) {
                    crearScreamer();
                } else {
                    crearPopup();
                }
            }, 1000);
        });
    });

    const botonSi = popup.querySelector(".boton-si");
    if (botonSi) {
        botonSi.addEventListener("mouseenter", () => {
            const nuevoX = Math.random() * 180 - 90;
            const nuevoY = Math.random() * 100 - 50;
            botonSi.style.transform = `translate(${nuevoX}px, ${nuevoY}px)`;
        });
    }
}

/* --------------------------------------------------------------------------
   TEMPORIZADORES Y BUCLE DE GENERACIÓN DE POPUPS Y SCREAMERS
   -------------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        crearPopup();
    }, 3500);

    setInterval(() => {
        const numeroPopups = document.querySelectorAll(".turbio-popup").length;
        if (numeroPopups < 4) {
            crearPopup();
        }
    }, 9000);
});
