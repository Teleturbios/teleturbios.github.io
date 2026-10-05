/**
 * ============================================================================
 * TELETURBIOS - MANEJADORES DE INTERFAZ DE USUARIO (js/modules/ui-handlers.js)
 * ============================================================================
 * Contiene funciones de respuesta a eventos de clic directo en la interfaz,
 * como el botón de aviso del Hero, enlaces de noticias o envío de mensajes.
 * ============================================================================
 */

/**
 * Muestra una alerta satírica al pulsar el botón prohibido del Hero.
 */
function mostrarMensaje() {
    alert(
        "🚨 ERROR 🚨\n\n" +
        "Has pulsado el botón que decía NO PULSAR.\n\n" +
        "Los Teleturbios están decepcionados."
    );
}

/**
 * Intercepta la navegación de noticias y muestra un mensaje de acceso denegado.
 * @param {Event} event Evento de clic en el enlace <a>
 */
function leerArticulo(event) {
    event.preventDefault(); // Evita que la página navegue al inicio o recargue
    alert(
        "🔓 ACCESO DENEGADO\n\n" +
        "Este artículo todavía está clasificado.\n\n" +
        "Nivel necesario: TURBIO"
    );
}

/**
 * Simula el envío de información en la sección de contacto.
 */
function enviarMensaje() {
    alert(
        "📡 MENSAJE ENVIADO\n\n" +
        "Probablemente.\n" +
        "No sabemos dónde ha ido."
    );
}

/**
 * Muestra un bloque oculto de filtración en caso de existir en el DOM.
 */
function mostrarFiltracion() {
    const archivo = document.getElementById("filtracion");
    if (archivo) {
        archivo.classList.remove("d-none");
    }
}
