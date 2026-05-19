import { useState, useEffect } from 'react'
import type { DiagnosticData } from '../types/diagnostic'
import { emptyDiagnostic } from '../types/diagnostic'
import { submitDiagnostic, saveDraft, loadDraft } from '../utils/submitDiagnostic'
import ThankYou from './ThankYou'

interface DiagnosticProps {
  onClose: () => void
}

// â”€â”€â”€ Helper components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function ProgressBar({ current, total }: { current: number; total: number }) {
  const pct = Math.round((current / total) * 100)
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.625rem' }}>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.72rem', color: 'var(--accent-copper)', letterSpacing: '0.1em', fontWeight: 600 }}>
          BLOQUE {current} DE {total}
        </span>
        <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>
          {pct}%
        </span>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${pct}%` }} />
      </div>
    </div>
  )
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null
  return <p className="form-error">{message}</p>
}

function RadioGroup({
  name,
  options,
  value,
  onChange,
}: {
  name: string
  options: { value: string; label: string }[]
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
      {options.map(opt => (
        <label
          key={opt.value}
          className={`choice-option ${value === opt.value ? 'selected' : ''}`}
          style={{ cursor: 'pointer' }}
        >
          <input type="radio" name={name} value={opt.value} checked={value === opt.value} onChange={() => onChange(opt.value)} />
          <span className="choice-indicator">
            {value === opt.value && (
              <svg width="8" height="8" viewBox="0 0 8 8" fill="white">
                <circle cx="4" cy="4" r="3" />
              </svg>
            )}
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-primary)' }}>
            {opt.label}
          </span>
        </label>
      ))}
    </div>
  )
}

function CheckboxGroup({
  options,
  value,
  onChange,
  columns = 1,
}: {
  options: string[]
  value: string[]
  onChange: (v: string[]) => void
  columns?: number
}) {
  const toggle = (opt: string) => {
    onChange(value.includes(opt) ? value.filter(v => v !== opt) : [...value, opt])
  }

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '0.625rem',
      }}
    >
      {options.map(opt => (
        <label
          key={opt}
          className={`choice-option ${value.includes(opt) ? 'selected' : ''}`}
          style={{ cursor: 'pointer', alignItems: 'flex-start' }}
        >
          <input type="checkbox" value={opt} checked={value.includes(opt)} onChange={() => toggle(opt)} />
          <span className="choice-indicator-check" style={{ marginTop: '2px' }}>
            {value.includes(opt) && (
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <polyline points="1.5 5 4 7.5 8.5 2" />
              </svg>
            )}
          </span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'var(--text-primary)', lineHeight: 1.4 }}>
            {opt}
          </span>
        </label>
      ))}
    </div>
  )
}

function BlockTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontWeight: 400,
        fontSize: 'clamp(1.3rem, 3vw, 1.75rem)',
        letterSpacing: '0.03em',
        lineHeight: 1.2,
        color: 'var(--text-primary)',
        marginBottom: '1.75rem',
      }}
    >
      {children}
    </h2>
  )
}

function FieldGroup({ children }: { children: React.ReactNode }) {
  return <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>{children}</div>
}

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string
  required?: boolean
  error?: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label className="form-label">
        {label}
        {required && <span style={{ color: 'var(--accent-wine-light)', marginLeft: '3px' }}>*</span>}
      </label>
      {children}
      <FieldError message={error} />
    </div>
  )
}

// â”€â”€â”€ Blocks â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

function Block1({
  data,
  onChange,
  errors,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
  errors: Partial<Record<keyof DiagnosticData, string>>
}) {
  return (
    <div>
      <BlockTitle>Â¿QuiÃ©n eres?</BlockTitle>
      <FieldGroup>
        <Field label="Nombre" required error={errors.nombre}>
          <input
            className={`form-input ${errors.nombre ? 'error' : ''}`}
            placeholder="Tu nombre"
            value={data.nombre}
            onChange={e => onChange('nombre', e.target.value)}
          />
        </Field>
        <Field label="Nombre artÃ­stico o nombre del estudio" error={errors.nombreArtistico}>
          <input
            className="form-input"
            placeholder="Tu alias, brand o nombre de estudio"
            value={data.nombreArtistico}
            onChange={e => onChange('nombreArtistico', e.target.value)}
          />
        </Field>
        <div className="form-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          <Field label="Ciudad / Estado" required error={errors.ciudad}>
            <input
              className={`form-input ${errors.ciudad ? 'error' : ''}`}
              placeholder="CDMX, Monterrey..."
              value={data.ciudad}
              onChange={e => onChange('ciudad', e.target.value)}
            />
          </Field>
          <Field label="WhatsApp o contacto" required error={errors.contacto}>
            <input
              className={`form-input ${errors.contacto ? 'error' : ''}`}
              placeholder="+52 55 0000 0000"
              value={data.contacto}
              onChange={e => onChange('contacto', e.target.value)}
            />
          </Field>
        </div>
        <Field label="Instagram / Red principal" error={errors.instagram}>
          <input
            className="form-input"
            placeholder="@tuinstagram"
            value={data.instagram}
            onChange={e => onChange('instagram', e.target.value)}
          />
        </Field>
        <Field label="Â¿Tienes sitio web actualmente?" error={errors.tieneSitioWeb}>
          <RadioGroup
            name="tieneSitioWeb"
            options={[
              { value: 'si', label: 'SÃ­' },
              { value: 'no', label: 'No' },
              { value: 'lo_he_pensado', label: 'Lo he pensado' },
            ]}
            value={data.tieneSitioWeb}
            onChange={v => onChange('tieneSitioWeb', v)}
          />
        </Field>
      </FieldGroup>
    </div>
  )
}

function Block2({
  data,
  onChange,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
}) {
  return (
    <div>
      <BlockTitle>Â¿En quÃ© momento de tu camino como tatuador te encuentras?</BlockTitle>
      <RadioGroup
        name="etapaActual"
        options={[
          { value: 'aprendiendo', label: 'Estoy aprendiendo o practico con amigos/conocidos' },
          { value: 'clientes_ocasionales', label: 'Ya tatÃºo y tengo clientes ocasionales' },
          { value: 'clientes_constantes', label: 'Tengo clientes constantes y agenda activa' },
          { value: 'vivo_del_tatuaje', label: 'Vivo principalmente del tatuaje' },
          { value: 'estudio_propio', label: 'Tengo estudio propio' },
          { value: 'coordino_tatuadores', label: 'Coordino a varios tatuadores' },
          { value: 'otro', label: 'Otro' },
        ]}
        value={data.etapaActual}
        onChange={v => onChange('etapaActual', v)}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <label className="form-label">CuÃ©ntanos un poco mÃ¡s sobre tu etapa actual <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(opcional)</span></label>
        <textarea
          className="form-input"
          placeholder="Tu contexto en tus propias palabras..."
          rows={3}
          value={data.etapaDetalle}
          onChange={e => onChange('etapaDetalle', e.target.value)}
          style={{ resize: 'vertical', minHeight: '80px' }}
        />
      </div>
    </div>
  )
}

function Block3({
  data,
  onChange,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
}) {
  const field = (
    label: string,
    key: keyof DiagnosticData,
    opts: { value: string; label: string }[]
  ) => (
    <div>
      <label className="form-label">{label}</label>
      <RadioGroup name={key} options={opts} value={data[key] as string} onChange={v => onChange(key, v)} />
    </div>
  )

  return (
    <div>
      <BlockTitle>Â¿CÃ³mo trabajas hoy?</BlockTitle>
      <FieldGroup>
        {field('Â¿Trabajas solo o con equipo?', 'trabajaSolo', [
          { value: 'solo', label: 'Solo' },
          { value: 'colegas', label: 'Con uno o dos colegas' },
          { value: 'estudio', label: 'En un estudio' },
          { value: 'equipo_propio', label: 'Tengo equipo propio' },
        ])}
        {field('Â¿DÃ³nde atiendes principalmente?', 'dondeAtiende', [
          { value: 'casa', label: 'Casa / espacio adaptado' },
          { value: 'estudio_ajeno', label: 'Estudio ajeno' },
          { value: 'estudio_propio', label: 'Estudio propio' },
          { value: 'domicilio', label: 'A domicilio' },
          { value: 'variable', label: 'Variable' },
        ])}
        {field('Â¿CÃ³mo recibes la mayorÃ­a de tus solicitudes?', 'comoRecibesSolicitudes', [
          { value: 'instagram', label: 'Instagram DM' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'facebook', label: 'Facebook' },
          { value: 'referencias', label: 'Referencias personales' },
          { value: 'presencial', label: 'Presencial' },
          { value: 'otro', label: 'Otro' },
        ])}
        {field('Â¿CÃ³mo organizas tus citas?', 'comoOrganizaCitas', [
          { value: 'memoria', label: 'Memoria' },
          { value: 'notas', label: 'Notas' },
          { value: 'agenda_fisica', label: 'Agenda fÃ­sica' },
          { value: 'google_calendar', label: 'Google Calendar' },
          { value: 'whatsapp', label: 'WhatsApp' },
          { value: 'app', label: 'App / software' },
          { value: 'otro', label: 'Otro' },
        ])}
        {field('Â¿Manejas anticipos?', 'manejaAnticipos', [
          { value: 'siempre', label: 'SÃ­, siempre' },
          { value: 'a_veces', label: 'A veces' },
          { value: 'no', label: 'No' },
          { value: 'quiero_empezar', label: 'Quiero empezar a hacerlo' },
        ])}
        {field('Â¿Trabajas proyectos por varias sesiones?', 'trabajaMultiSesion', [
          { value: 'si', label: 'SÃ­' },
          { value: 'no', label: 'No' },
          { value: 'a_veces', label: 'A veces' },
        ])}
        {field('Â¿Vendes o apartas diseÃ±os disponibles?', 'vendeDisenos', [
          { value: 'si', label: 'SÃ­' },
          { value: 'no', label: 'No' },
          { value: 'me_interesa', label: 'Me interesa hacerlo mejor' },
        ])}
      </FieldGroup>
    </div>
  )
}

function Block4({
  data,
  onChange,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
}) {
  const doloresOptions = [
    'Me escriben muchos, pero pocos reservan',
    'Pierdo tiempo pidiendo informaciÃ³n para cotizar',
    'Me cuesta explicar precios sin que se malinterpreten',
    'Se me desordenan citas o cambios de fecha',
    'Hay clientes que cancelan o desaparecen',
    'No tengo un portafolio que se vea tan profesional como me gustarÃ­a',
    'Mis diseÃ±os disponibles se pierden entre publicaciones o historias',
    'Me cuesta hacer contenido constante para redes',
    'No llevo control claro de clientes',
    'No llevo control claro de ingresos',
    'No llevo control de insumos',
    'Se me acaban materiales sin anticiparlo',
    'Me gustarÃ­a verme mÃ¡s profesional ante clientes nuevos',
    'Quiero crecer, pero siento que me falta sistema',
    'Otro',
  ]

  return (
    <div>
      <BlockTitle>Â¿QuÃ© te complica mÃ¡s en tu operaciÃ³n actual?</BlockTitle>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Selecciona todas las que apliquen
      </p>
      <CheckboxGroup
        options={doloresOptions}
        value={data.dolores}
        onChange={v => onChange('dolores', v)}
        columns={1}
      />
      <div style={{ marginTop: '1.5rem' }}>
        <label className="form-label">Si tu mayor frustraciÃ³n no estÃ¡ aquÃ­, escrÃ­bela con tus palabras.</label>
        <textarea
          className="form-input"
          placeholder="Describe el problema que mÃ¡s te quita tiempo o energÃ­a..."
          rows={3}
          value={data.otroDolor}
          onChange={e => onChange('otroDolor', e.target.value)}
          style={{ resize: 'vertical', minHeight: '80px' }}
        />
      </div>
    </div>
  )
}

function Block5({
  data,
  onChange,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
}) {
  const options = [
    'Perfil web profesional',
    'Portafolio organizado',
    'Libro de diseÃ±os disponibles / flashbook',
    'Formulario inteligente de solicitudes',
    'Cotizaciones mÃ¡s ordenadas',
    'Agenda de citas',
    'GestiÃ³n de anticipos',
    'Recordatorios automÃ¡ticos para clientes',
    'Historial de clientes',
    'Seguimiento post-tatuaje',
    'Consentimiento digital',
    'Control de insumos',
    'Alertas de stock bajo',
    'Publicidad / generaciÃ³n de contenido',
    'ReseÃ±as de clientes',
    'MÃ©tricas de crecimiento',
    'GestiÃ³n de estudio con varios artistas',
    'Tienda o venta de productos',
    'Cursos / comunidad / aprendizaje',
    'Otro',
  ]

  return (
    <div>
      <BlockTitle>Â¿QuÃ© herramientas te interesarÃ­an mÃ¡s dentro de una plataforma como BlackVein?</BlockTitle>
      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
        Selecciona todas las que te interesen
      </p>
      <CheckboxGroup
        options={options}
        value={data.herramientasInteres}
        onChange={v => onChange('herramientasInteres', v)}
        columns={1}
      />
    </div>
  )
}

function Block6({
  data,
  onChange,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
}) {
  const estilosOpts = [
    'Fine line', 'Blackwork', 'Tradicional / old school', 'Neotradicional',
    'Realismo', 'Lettering', 'JaponÃ©s', 'GeomÃ©trico', 'Ornamental',
    'Anime / cultura pop', 'Minimalista', 'Puntillismo', 'Otro',
  ]

  const presenciaOpts = [
    { value: 'elegante', label: 'Elegante y premium' },
    { value: 'underground', label: 'Oscura y underground' },
    { value: 'minimalista', label: 'Minimalista' },
    { value: 'clasica', label: 'Tradicional y clÃ¡sica' },
    { value: 'mistica', label: 'MÃ­stica / simbÃ³lica' },
    { value: 'urbana', label: 'Urbana y agresiva' },
    { value: 'artistica', label: 'ArtÃ­stica / de autor' },
    { value: 'humana', label: 'Cercana y humana' },
    { value: 'otro', label: 'Otro' },
  ]

  return (
    <div>
      <BlockTitle>Tu identidad como artista</BlockTitle>
      <FieldGroup>
        <div>
          <label className="form-label">Â¿QuÃ© estilos de tatuaje trabajas o te interesa trabajar?</label>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.5rem',
              marginTop: '0.5rem',
            }}
          >
            {estilosOpts.map(estilo => (
              <button
                key={estilo}
                type="button"
                onClick={() => {
                  const curr = data.estilos as string[]
                  onChange('estilos', curr.includes(estilo) ? curr.filter(e => e !== estilo) : [...curr, estilo])
                }}
                style={{
                  padding: '0.4rem 0.875rem',
                  borderRadius: '100px',
                  border: '1px solid',
                  borderColor: (data.estilos as string[]).includes(estilo) ? 'var(--accent-copper)' : 'var(--border-accent)',
                  background: (data.estilos as string[]).includes(estilo) ? 'rgba(184,115,51,0.12)' : 'transparent',
                  color: (data.estilos as string[]).includes(estilo) ? 'var(--accent-copper-light)' : 'var(--text-secondary)',
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: '0.8rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                }}
              >
                {estilo}
              </button>
            ))}
          </div>
        </div>

        <Field label="Â¿QuÃ© hace diferente tu propuesta como tatuador?">
          <textarea
            className="form-input"
            placeholder="Lo que te hace Ãºnico en tu oficio y forma de trabajar..."
            rows={3}
            value={data.queTeDiferencia}
            onChange={e => onChange('queTeDiferencia', e.target.value)}
            style={{ resize: 'vertical' }}
          />
        </Field>

        <Field label="Â¿QuÃ© tipo de presencia digital se parece mÃ¡s a ti?">
          <RadioGroup
            name="tipoPresencia"
            options={presenciaOpts}
            value={data.tipoPresencia}
            onChange={v => onChange('tipoPresencia', v)}
          />
        </Field>

        <Field label="Â¿QuÃ© te gustarÃ­a que una persona sintiera al entrar a tu perfil?">
          <textarea
            className="form-input"
            placeholder="EmociÃ³n, sensaciÃ³n, mensaje..."
            rows={2}
            value={data.queSientaAlEntrar}
            onChange={e => onChange('queSientaAlEntrar', e.target.value)}
            style={{ resize: 'vertical' }}
          />
        </Field>

        <Field label="Â¿QuÃ© tipo de cliente quieres atraer?">
          <textarea
            className="form-input"
            placeholder="Tu cliente ideal: cÃ³mo es, quÃ© valora, quÃ© busca..."
            rows={2}
            value={data.tipoClienteQuieres}
            onChange={e => onChange('tipoClienteQuieres', e.target.value)}
            style={{ resize: 'vertical' }}
          />
        </Field>
      </FieldGroup>
    </div>
  )
}

function Block7({
  data,
  onChange,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
}) {
  const metasOpts = [
    'Tener mÃ¡s clientes', 'Tener mejor tipo de cliente', 'Cobrar mejor mi trabajo',
    'Organizarme sin perder libertad', 'Tener agenda constante', 'Tener mi propio estudio',
    'Hacer crecer mi estudio actual', 'Construir una marca reconocible', 'Vender mis diseÃ±os',
    'Dar cursos', 'Vender merch o productos', 'Crear comunidad',
    'Viajar o tatuar en otras ciudades', 'Otro',
  ]

  return (
    <div>
      <BlockTitle>Tu visiÃ³n de crecimiento</BlockTitle>
      <FieldGroup>
        <Field label="Si BlackVein pudiera ayudarte a construir tu versiÃ³n ideal como tatuador, Â¿cÃ³mo se verÃ­a tu carrera dentro de 3 aÃ±os?">
          <textarea
            className="form-input"
            placeholder="DescrÃ­belo con libertad. Sin lÃ­mites..."
            rows={5}
            value={data.visionCrecimiento}
            onChange={e => onChange('visionCrecimiento', e.target.value)}
            style={{ resize: 'vertical', minHeight: '120px' }}
          />
        </Field>

        <div>
          <label className="form-label">Â¿QuÃ© metas te interesan mÃ¡s?</label>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '0.875rem', fontFamily: "'Inter', sans-serif" }}>
            Selecciona todas las que apliquen
          </p>
          <CheckboxGroup
            options={metasOpts}
            value={data.metasInteres}
            onChange={v => onChange('metasInteres', v)}
            columns={1}
          />
        </div>
      </FieldGroup>
    </div>
  )
}

function Block8({
  data,
  onChange,
}: {
  data: DiagnosticData
  onChange: (k: keyof DiagnosticData, v: DiagnosticData[keyof DiagnosticData]) => void
}) {
  return (
    <div>
      <BlockTitle>Casi terminamos</BlockTitle>
      <FieldGroup>
        <Field label="Â¿Te gustarÃ­a conocer una propuesta personalizada basada en tus respuestas?">
          <RadioGroup
            name="quieresPropuesta"
            options={[
              { value: 'si', label: 'SÃ­' },
              { value: 'tal_vez', label: 'Me interesa, aunque no sÃ© todavÃ­a' },
              { value: 'solo_aportar', label: 'Por ahora solo quiero aportar' },
            ]}
            value={data.quieresPropuesta}
            onChange={v => onChange('quieresPropuesta', v)}
          />
        </Field>

        <Field label="Â¿AceptarÃ­as una conversaciÃ³n breve para profundizar en tus necesidades?">
          <RadioGroup
            name="aceptaConversacion"
            options={[
              { value: 'si', label: 'SÃ­' },
              { value: 'tal_vez', label: 'Tal vez' },
              { value: 'no', label: 'No por ahora' },
            ]}
            value={data.aceptaConversacion}
            onChange={v => onChange('aceptaConversacion', v)}
          />
        </Field>

        <Field label="Si pudieras pedirle UNA sola cosa a la herramienta perfecta para tatuadores, Â¿quÃ© serÃ­a?">
          <textarea
            className="form-input"
            placeholder="Una sola cosa, la mÃ¡s importante..."
            rows={3}
            value={data.unaCosaHerramienta}
            onChange={e => onChange('unaCosaHerramienta', e.target.value)}
            style={{ resize: 'vertical' }}
          />
        </Field>
      </FieldGroup>
    </div>
  )
}

// â”€â”€â”€ Main Diagnostic Component â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€

const TOTAL_BLOCKS = 8

function validateBlock(block: number, data: DiagnosticData): Partial<Record<keyof DiagnosticData, string>> {
  const errors: Partial<Record<keyof DiagnosticData, string>> = {}
  if (block === 1) {
    if (!data.nombre.trim()) errors.nombre = 'Tu nombre es necesario'
    if (!data.ciudad.trim()) errors.ciudad = 'Indica tu ciudad o estado'
    if (!data.contacto.trim()) errors.contacto = 'Agrega un nÃºmero o forma de contacto'
  }
  return errors
}

export default function Diagnostic({ onClose }: DiagnosticProps) {
  const [block, setBlock] = useState(1)
  const [data, setData] = useState<DiagnosticData>(() => {
    const draft = loadDraft()
    return draft ? { ...emptyDiagnostic, ...draft } : emptyDiagnostic
  })
  const [errors, setErrors] = useState<Partial<Record<keyof DiagnosticData, string>>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Auto-save draft on data changes
  useEffect(() => {
    saveDraft(data)
  }, [data])

  function onChange(key: keyof DiagnosticData, value: DiagnosticData[keyof DiagnosticData]) {
    setData(prev => ({ ...prev, [key]: value }))
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: undefined }))
  }

  function goNext() {
    const blockErrors = validateBlock(block, data)
    if (Object.keys(blockErrors).length > 0) {
      setErrors(blockErrors)
      return
    }
    setErrors({})
    if (block < TOTAL_BLOCKS) {
      setBlock(b => b + 1)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  async function handleSubmit() {
    const blockErrors = validateBlock(block, data)
    if (Object.keys(blockErrors).length > 0) {
      setErrors(blockErrors)
      return
    }
    setSubmitting(true)
    await submitDiagnostic(data)
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return <ThankYou data={data} onClose={onClose} />
  }

  const blockLabels = [
    'QuiÃ©n eres', 'Tu etapa', 'CÃ³mo trabajas', 'Tus dolores',
    'Herramientas', 'Tu identidad', 'Tu visiÃ³n', 'Cierre',
  ]

  return (
    <div className="overlay" style={{ justifyContent: 'flex-start' }}>
      {/* Top bar */}
      <div
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: 'rgba(8,8,8,0.97)',
          borderBottom: '1px solid var(--border)',
          padding: '1rem 1.5rem',
          backdropFilter: 'blur(12px)',
        }}
      >
        <div
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <span
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontWeight: 400,
                fontSize: '1rem',
                color: 'var(--text-primary)',
              }}
            >
              Tinta<span style={{ color: 'var(--accent-copper)' }}>OS</span>
            </span>
            <span
              style={{
                marginLeft: '0.75rem',
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
              }}
            >
              {blockLabels[block - 1]}
            </span>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            style={{
              background: 'none',
              border: '1px solid var(--border)',
              borderRadius: '4px',
              padding: '0.4rem 0.75rem',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: '0.78rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              transition: 'color 0.2s, border-color 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border-accent)' }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; e.currentTarget.style.borderColor = 'var(--border)' }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
            Cerrar
          </button>
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          maxWidth: '680px',
          margin: '0 auto',
          padding: '2.5rem 1.5rem 4rem',
          width: '100%',
        }}
      >
        <ProgressBar current={block} total={TOTAL_BLOCKS} />

        {/* Block content */}
        <div
          key={block}
          style={{
            animation: 'fadeUp 0.4s ease',
          }}
        >
          {block === 1 && <Block1 data={data} onChange={onChange} errors={errors} />}
          {block === 2 && <Block2 data={data} onChange={onChange} />}
          {block === 3 && <Block3 data={data} onChange={onChange} />}
          {block === 4 && <Block4 data={data} onChange={onChange} />}
          {block === 5 && <Block5 data={data} onChange={onChange} />}
          {block === 6 && <Block6 data={data} onChange={onChange} />}
          {block === 7 && <Block7 data={data} onChange={onChange} />}
          {block === 8 && <Block8 data={data} onChange={onChange} />}
        </div>

        {/* Navigation */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '3rem',
            paddingTop: '2rem',
            borderTop: '1px solid var(--border)',
          }}
        >
          {block > 1 ? (
            <button
              className="btn-ghost"
              onClick={() => { setBlock(b => b - 1); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              style={{ paddingLeft: 0 }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              AtrÃ¡s
            </button>
          ) : (
            <div />
          )}

          {block < TOTAL_BLOCKS ? (
            <button className="btn-primary" onClick={goNext}>
              Continuar
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              className="btn-primary"
              onClick={handleSubmit}
              disabled={submitting}
              style={{
                opacity: submitting ? 0.7 : 1,
                cursor: submitting ? 'not-allowed' : 'pointer',
                fontSize: '0.95rem',
                padding: '1rem 2rem',
              }}
            >
              {submitting ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  Enviar mi diagnÃ³stico
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </>
              )}
            </button>
          )}
        </div>
      </div>

      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}

