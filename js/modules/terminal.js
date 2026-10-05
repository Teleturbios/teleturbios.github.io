/**
 * ============================================================================
 * TELETURBIOS - LÓGICA DE TERMINAL DEMONÍACA (js/modules/terminal.js)
 * ============================================================================
 * Procesa la entrada del usuario en la consola interactiva (#terminal-input)
 * e imprime respuestas en ruso, símbolos demoníacos y activa screamers.
 * ============================================================================
 */

/**
 * Procesa el comando introducido al pulsar la tecla Enter en la terminal.
 * @param {KeyboardEvent} event Evento de teclado
 */
function ejecutarComando(event) {
    if (event.key !== "Enter") {
        return;
    }

    const input = document.getElementById("terminal-input");
    const terminal = document.getElementById("terminal-content");

    if (!input || !terminal) return;

    const comando = input.value.toLowerCase().trim();
    const respuesta = document.createElement("p");

    switch (comando) {
        case "help":
            respuesta.textContent = "> comandos: help | whoami | turbio | hack | screamer | demonio | 666 | ruso | exit";
            break;

        case "whoami":
            respuesta.textContent = "> eres un alma perdida. 👁️ ОНИ СМОТРЯТ НА ТЕБЯ.";
            break;

        case "turbio":
            respuesta.textContent = "> NIVEL DE TURBIEDAD: ████████████████████ 100% ⛧ 666";
            setTimeout(() => crearScreamer("img/lala_drogas.gif", "🚨 ПОМОГИТЕ МНЕ ⛧ 666 🚨"), 400);
            break;

        case "hack":
            respuesta.textContent = "> INICIANDO PROTOCOLO DEMONÍACO... 🕇 🕇 🕇";
            setTimeout(() => crearScreamer("img/po-slendy-tubbies.gif", "🔓 N̷O̷ ̷P̷U̷E̷D̷E̷S̷ ̷E̷S̷C̷A̷P̷A̷R̷ 🔓"), 400);
            break;

        case "666":
        case "demonio":
            respuesta.textContent = "> ⛧ ПОМОГИТЕ // СМЕРТЬ И ТЬМА ⛧ 666";
            setTimeout(() => crearScreamer("img/redo_po_lala.gif", "☠️ РЕАЛЬНОСТЬ РАЗРУШЕНА ☠️"), 300);
            break;

        case "ruso":
        case "телепузики":
            respuesta.textContent = "> ТЕЛЕПУЗИКИ ПРИШЛИ ЗА ТВОЕЙ ДУШОЙ // 🩸";
            setTimeout(() => crearScreamer("img/slendytubbies-nocturnal-protocol.webp", "👁️ БЕГИ ПОКА МОЖЕШЬ 👁️"), 300);
            break;

        case "screamer":
        case "slendytubbies":
            respuesta.textContent = "> 💀 ACTIVANDO PROTOCOLO INFERNAL 💀";
            setTimeout(() => crearScreamer("img/tubbyland-dipsy.gif", "👁️ DIPSY TE OBSERVA 👁️"), 300);
            break;

        case "exit":
            respuesta.textContent = "> НЕТ ВЫХОДА. no puedes escapar de los Teleturbios.";
            break;

        case "":
            respuesta.textContent = "> escribe algo, criatura del abismo.";
            break;

        default:
            respuesta.textContent = "> comando corrompido: " + comando + " ⛧ 666";
            break;
    }

    terminal.appendChild(respuesta);
    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
}
