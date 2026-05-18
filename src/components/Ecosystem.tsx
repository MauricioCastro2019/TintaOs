import { useReveal } from '../hooks/useReveal'

const modules = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Perfil artístico profesional',
    desc: 'Una presencia digital propia con portafolio, estilo, servicios, reseñas y una forma clara de recibir solicitudes.',
    accent: 'rgba(26,74,40,0.18)',
    accentBorder: 'rgba(62,160,85,0.35)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    title: 'Libro de diseños disponibles',
    desc: 'Flashs, piezas únicas, colecciones y diseños listos para reservar sin perderse en historias de Instagram.',
    accent: 'rgba(61,18,96,0.2)',
    accentBorder: 'rgba(100,50,180,0.3)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: 'Solicitudes inteligentes',
    desc: 'Que el cliente diga bien lo que quiere: idea, tamaño, zona, referencias, presupuesto y disponibilidad.',
    accent: 'rgba(42,102,54,0.12)',
    accentBorder: 'rgba(111,207,132,0.25)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    title: 'Agenda y anticipos',
    desc: 'Organiza citas, confirmaciones, apartados, cambios de fecha y proyectos por sesión.',
    accent: 'rgba(30,80,30,0.15)',
    accentBorder: 'rgba(50,140,50,0.25)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: 'Historial de clientes',
    desc: 'Registra conversaciones clave, tatuajes realizados, referencias y evolución de cada proyecto.',
    accent: 'rgba(30,60,120,0.15)',
    accentBorder: 'rgba(50,100,200,0.25)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.73a16 16 0 0 0 5.5 5.5l1.62-1.85a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    title: 'Seguimiento post-tatuaje',
    desc: 'Cuidados, recordatorios, fotos de cicatrización, reseñas y posibilidad de retoque.',
    accent: 'rgba(26,74,40,0.14)',
    accentBorder: 'rgba(62,160,85,0.25)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="16.5" y1="9.4" x2="7.5" y2="4.21" />
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      </svg>
    ),
    title: 'Insumos y abastecimiento',
    desc: 'Tinta, agujas, guantes, stencil, film y alertas para no operar al límite.',
    accent: 'rgba(42,102,54,0.1)',
    accentBorder: 'rgba(111,207,132,0.22)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Publicidad y contenido',
    desc: 'Publicaciones, QR, fichas de diseño y piezas visuales que ayuden a vender sin perder estilo.',
    accent: 'rgba(61,18,96,0.15)',
    accentBorder: 'rgba(120,50,180,0.25)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    title: 'Métricas y crecimiento',
    desc: 'Entender qué te da más citas, qué diseños funcionan, qué servicios crecen y hacia dónde se mueve tu negocio.',
    accent: 'rgba(30,80,130,0.15)',
    accentBorder: 'rgba(50,130,220,0.25)',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
    title: 'Estudio profesional',
    desc: 'Varios artistas, procesos, roles, inventario, agenda compartida y una operación sólida cuando llegue el momento.',
    accent: 'rgba(42,102,54,0.15)',
    accentBorder: 'rgba(111,207,132,0.3)',
  },
]

export default function Ecosystem() {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section id="posibilidades" className="section" style={{ background: 'var(--bg-secondary)', position: 'relative' }}>
      <div className="divider-copper" />

      <div className="container" style={{ paddingTop: '4rem' }}>
        <div className="reveal" ref={ref1} style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">Posibilidades</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              maxWidth: '620px',
              color: 'var(--text-primary)',
            }}
          >
            Todo lo que podría{' '}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: 'var(--accent-copper-light)',
              }}
            >
              crecer contigo
            </em>
          </h2>
          <p
            style={{
              marginTop: '1rem',
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: 'var(--text-secondary)',
              maxWidth: '520px',
              lineHeight: 1.7,
            }}
          >
            No son funciones cerradas. Son módulos potenciales que se activan según lo que necesites y la etapa en la que estés.
          </p>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {modules.map((mod, i) => (
            <EcosystemCard key={i} mod={mod} delay={i * 0.05} />
          ))}
        </div>
      </div>

      <div className="divider-copper" style={{ marginTop: '4rem' }} />
    </section>
  )
}

interface ModuleData {
  icon: React.ReactNode
  title: string
  desc: string
  accent: string
  accentBorder: string
}

function EcosystemCard({ mod, delay }: { mod: ModuleData; delay: number }) {
  const ref = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <div
      className="card reveal"
      ref={ref}
      style={{
        padding: '1.75rem',
        transitionDelay: `${delay}s`,
        cursor: 'default',
      }}
    >
      <div
        style={{
          width: 46,
          height: 46,
          borderRadius: '8px',
          background: mod.accent,
          border: `1px solid ${mod.accentBorder}`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent-copper)',
          marginBottom: '1.25rem',
          flexShrink: 0,
          transition: 'transform 0.2s ease',
        }}
      >
        {mod.icon}
      </div>
      <h3
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontWeight: 600,
          fontSize: '0.95rem',
          color: 'var(--text-primary)',
          marginBottom: '0.625rem',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
        }}
      >
        {mod.title}
      </h3>
      <p
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.82rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.65,
        }}
      >
        {mod.desc}
      </p>
    </div>
  )
}
