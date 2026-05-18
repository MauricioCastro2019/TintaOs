export interface DiagnosticData {
  // Block 1 — Quién eres
  nombre: string
  nombreArtistico: string
  ciudad: string
  contacto: string
  instagram: string
  tieneSitioWeb: 'si' | 'no' | 'lo_he_pensado' | ''

  // Block 2 — Tu etapa actual
  etapaActual: string
  etapaDetalle: string

  // Block 3 — Cómo trabajas hoy
  trabajaSolo: string
  dondeAtiende: string
  comoRecibesSolicitudes: string
  comoOrganizaCitas: string
  manejaAnticipos: string
  trabajaMultiSesion: string
  vendeDisenos: string

  // Block 4 — Dolores
  dolores: string[]
  otroDolor: string

  // Block 5 — Herramientas de interés
  herramientasInteres: string[]

  // Block 6 — Identidad artística
  estilos: string[]
  queTeDiferencia: string
  tipoPresencia: string
  queSientaAlEntrar: string
  tipoClienteQuieres: string

  // Block 7 — Visión de crecimiento
  visionCrecimiento: string
  metasInteres: string[]

  // Block 8 — Cierre
  quieresPropuesta: string
  aceptaConversacion: string
  unaCosaHerramienta: string
}

export const emptyDiagnostic: DiagnosticData = {
  nombre: '',
  nombreArtistico: '',
  ciudad: '',
  contacto: '',
  instagram: '',
  tieneSitioWeb: '',
  etapaActual: '',
  etapaDetalle: '',
  trabajaSolo: '',
  dondeAtiende: '',
  comoRecibesSolicitudes: '',
  comoOrganizaCitas: '',
  manejaAnticipos: '',
  trabajaMultiSesion: '',
  vendeDisenos: '',
  dolores: [],
  otroDolor: '',
  herramientasInteres: [],
  estilos: [],
  queTeDiferencia: '',
  tipoPresencia: '',
  queSientaAlEntrar: '',
  tipoClienteQuieres: '',
  visionCrecimiento: '',
  metasInteres: [],
  quieresPropuesta: '',
  aceptaConversacion: '',
  unaCosaHerramienta: '',
}
