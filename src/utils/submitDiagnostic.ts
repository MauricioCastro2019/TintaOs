import type { DiagnosticData } from '../types/diagnostic'
import { supabase } from '../lib/supabase'

export async function submitDiagnostic(data: DiagnosticData): Promise<void> {
  const row = {
    nombre:                  data.nombre,
    nombre_artistico:        data.nombreArtistico,
    ciudad:                  data.ciudad,
    contacto:                data.contacto,
    instagram:               data.instagram,
    tiene_sitio_web:         data.tieneSitioWeb,
    etapa_actual:            data.etapaActual,
    etapa_detalle:           data.etapaDetalle,
    trabaja_solo:            data.trabajaSolo,
    donde_atiende:           data.dondeAtiende,
    como_recibe_solicitudes: data.comoRecibesSolicitudes,
    como_organiza_citas:     data.comoOrganizaCitas,
    maneja_anticipos:        data.manejaAnticipos,
    trabaja_multi_sesion:    data.trabajaMultiSesion,
    vende_disenos:           data.vendeDisenos,
    dolores:                 data.dolores,
    otro_dolor:              data.otroDolor,
    herramientas_interes:    data.herramientasInteres,
    estilos:                 data.estilos,
    que_te_diferencia:       data.queTeDiferencia,
    tipo_presencia:          data.tipoPresencia,
    que_sienta_al_entrar:    data.queSientaAlEntrar,
    tipo_cliente_quieres:    data.tipoClienteQuieres,
    vision_crecimiento:      data.visionCrecimiento,
    metas_interes:           data.metasInteres,
    quieres_propuesta:       data.quieresPropuesta,
    acepta_conversacion:     data.aceptaConversacion,
    una_cosa_herramienta:    data.unaCosaHerramienta,
  }

  if (supabase) {
    const { error } = await supabase.from('diagnostics').insert(row)
    if (!error) {
      localStorage.removeItem('BlackVein_diagnostic_draft')
      return
    }
    console.warn('[BlackVein] Supabase insert error:', error.message)
  } else {
    console.warn('[BlackVein] Supabase not configured â€” using localStorage fallback.')
  }

  // Fallback: persist locally until Supabase is wired up
  const existing = JSON.parse(localStorage.getItem('BlackVein_diagnostics') || '[]') as DiagnosticData[]
  existing.push({ ...data })
  localStorage.setItem('BlackVein_diagnostics', JSON.stringify(existing))
  localStorage.removeItem('BlackVein_diagnostic_draft')
}

export function saveDraft(data: DiagnosticData): void {
  localStorage.setItem('BlackVein_diagnostic_draft', JSON.stringify(data))
}

export function loadDraft(): Partial<DiagnosticData> | null {
  const raw = localStorage.getItem('BlackVein_diagnostic_draft')
  return raw ? JSON.parse(raw) : null
}

