/**
 * ============================================================================
 * TELETURBIOS - GESTIÓN DE EXPEDIENTES (js/modules/expedientes.js)
 * ============================================================================
 * Maneja la interacción con las fichas del "Archivo Negro": apertura de la
 * ventana modal desplegable, inyección dinámica de HTML y eventos de cierre.
 * ============================================================================
 */

/**
 * Abre el visor modal de expediente inyectando la información correspondiente.
 * @param {number} numero Índice del expediente en el array `expedientes`
 */
function abrirExpediente(numero) {
    const expediente = expedientes[numero];

    if (!expediente) {
        console.error("Expediente no encontrado en el índice: " + numero);
        return;
    }

    const popup = document.getElementById("expediente-popup");
    const contenido = document.getElementById("expediente-contenido");

    if (!popup || !contenido) return;

    // Generar la plantilla HTML dinámicamente con los datos del expediente
    contenido.innerHTML = `
        <div class="expediente-numero">
            EXPEDIENTE #${expediente.numero}
        </div>

        <h2 class="expediente-nombre">
            ${expediente.empresa}
        </h2>

        <div class="expediente-delito">
            ${expediente.delito}
        </div>

        <p>
            <strong>ESTADO:</strong> ${expediente.estado}
        </p>

        <div class="info-bloque">
            <h4>☢ DESCRIPCIÓN DEL EXPEDIENTE</h4>
            <p>${expediente.descripcion}</p>
        </div>

        <div class="info-bloque">
            <h4>📁 ARCHIVOS RECUPERADOS</h4>
            <div class="archivos-adjuntos">
                ${expediente.archivos
                    .map(archivo => `<div>${archivo}</div>`)
                    .join("")}
            </div>
        </div>

        <div class="info-bloque">
            <h4>📄 DOCUMENTO RECUPERADO</h4>
            <div class="documento-redactado">
                ${expediente.documento.replace(/\n/g, "<br>")}
            </div>
        </div>

        <div class="teleturbios-firma">
            ${expediente.firma}
            <br><br>
            — TELETURBIOS
        </div>
    `;

    // Activar la ventana modal y bloquear el scroll del fondo
    popup.classList.add("activo");
    document.body.style.overflow = "hidden";
}

/**
 * Cierra la ventana modal de expediente activo y restaura el scroll.
 */
function cerrarExpediente() {
    const popup = document.getElementById("expediente-popup");
    if (popup) {
        popup.classList.remove("activo");
    }
    document.body.style.overflow = "";
}

/* --------------------------------------------------------------------------
   ESCUCHADORES DE EVENTOS GLOBALES DE CIERRE
   -------------------------------------------------------------------------- */

// Inicializar listeners cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
    const popupModal = document.getElementById("expediente-popup");

    // Cerrar al hacer clic en el fondo oscuro exterior (backdrop)
    if (popupModal) {
        popupModal.addEventListener("click", function(e) {
            if (e.target === this) {
                cerrarExpediente();
            }
        });
    }

    // Cerrar al pulsar la tecla Escape
    document.addEventListener("keydown", function(e) {
        if (e.key === "Escape") {
            cerrarExpediente();
        }
    });
});
