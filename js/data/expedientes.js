/**
 * ============================================================================
 * TELETURBIOS - BASE DE DATOS DE EXPEDIENTES (js/data/expedientes.js)
 * ============================================================================
 * Este archivo contiene la información detallada de los expedientes confidenciales
 * expuestos en la sección "Archivo Negro" de la web.
 * 
 * Cada objeto de expediente contiene:
 * - numero: Código identificador (ej. "001")
 * - empresa: Nombre de la corporación o entidad investigada
 * - delito: Título del supuesto escándalo o incidente
 * - estado: Estado de la investigación ("INVESTIGACIÓN ABIERTA", "FILTRADA", etc.)
 * - descripcion: Resumen explicativo del expediente
 * - archivos: Lista de nombres de archivos digitales interceptados
 * - documento: Fragmento de texto con partes censuradas o redactadas
 * - firma: Frase irónica atribuida a Teleturbios
 * ============================================================================
 */

const expedientes = [
    {
        numero: "001",
        empresa: "CORTE FRANCÉS",
        delito: "EXPLOTACIÓN LABORAL INFANTIL",
        estado: "INVESTIGACIÓN ABIERTA",
        descripcion: "Una investigación interceptada por Teleturbios revela documentación relacionada con una cadena de proveedores y subcontratas.",
        archivos: [
            "proveedores_2026.xlsx",
            "auditoria_fabrica_07.pdf",
            "contratos_subcontrata.zip",
            "horarios_produccion.xlsx",
            "informe_exclusivo.txt"
        ],
        documento:
            "INFORME INTERNO — ACCESO RESTRINGIDO\n\n" +
            "Se han detectado discrepancias entre los informes " +
            "presentados por determinados proveedores y los registros internos.\n\n" +
            "████████████████████████████\n" +
            "████ INFORMACIÓN REDACTADA ████\n" +
            "████████████████████████████",
        firma: "“Si necesitáis una auditoría para saber lo que ocurre, probablemente ya sabéis lo que ocurre.”"
    },

    {
        numero: "002",
        empresa: "AMASONIA",
        delito: "BLANQUEO DE CAPITALES",
        estado: "INFORMACIÓN FILTRADA",
        descripcion: "Una estructura opaca de sociedades aparece conectada mediante transferencias, facturas y contratos difíciles de justificar.",
        archivos: [
            "transferencias_q1.csv",
            "sociedades_relacionadas.xlsx",
            "facturas_consultoria.zip",
            "contratos_2026.pdf",
            "ruta_dinero.txt"
        ],
        documento:
            "RUTA FINANCIERA DETECTADA\n\n" +
            "EMPRESA A → EMPRESA B → CONSULTORA → SOCIEDAD C\n\n" +
            "████████████████████\n" +
            "DESTINO FINAL: █████\n" +
            "████████████████████",
        firma: "“El dinero no desaparece. Solo aprende a cambiar de nombre.”"
    },

    {
        numero: "003",
        empresa: "BURGER PRINCESS",
        delito: "FRAUDE ALIMENTARIO",
        estado: "DOCUMENTOS EN REVISIÓN",
        descripcion: "Los documentos internos muestran diferencias entre determinados registros de producción y la información utilizada en el etiquetado.",
        archivos: [
            "proveedores_carne.xlsx",
            "trazabilidad.pdf",
            "etiquetado_final_v8.docx",
            "control_calidad.xlsx",
            "informe_trazabilidad.pdf"
        ],
        documento:
            "CONTROL DE TRAZABILIDAD\n\n" +
            "DOCUMENTO OFICIAL: ███████████\n" +
            "DOCUMENTO INTERNO: █████████\n\n" +
            "DIFERENCIA DETECTADA: █████████",
        firma: "“El ingrediente secreto era la documentación.”"
    },

    {
        numero: "004",
        empresa: "SPOTIFAIL",
        delito: "EXPLOTACIÓN LABORAL",
        estado: "PRIORIDAD ALTA",
        descripcion: "Una colección de contratos y registros de auditoría plantea dudas sobre las condiciones laborales de determinados trabajadores.",
        archivos: [
            "contratos_intermediarios.zip",
            "horarios_junio.xlsx",
            "RRHH_confidencial.pdf",
            "pagos_pendientes.xlsx",
            "acta_reunion_interna.txt"
        ],
        documento:
            "REUNIÓN RRHH — CONFIDENCIAL\n\n" +
            "“No queremos que esto llegue a prensa.”\n\n" +
            "████████████████████████\n" +
            "████████████████████████",
        firma: "“Los trabajadores no deberían ser una línea de presupuesto.”"
    }
];
