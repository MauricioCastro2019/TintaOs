import { useReveal } from '../hooks/useReveal'

interface NotAllEqualProps {
  onOpenDiagnostic: () => void
}

const profiles = [
  {
    icon: '🏠',
    label: 'Quien empieza en casa',
    color: 'rgba(100,80,180,0.15)',
    borderColor: 'rgba(100,80,180,0.3)',
  },
  {
    icon: '📅',
    label: 'Quien vive de su agenda',
    color: 'rgba(139,31,31,0.12)',
    borderColor: 'rgba(139,31,31,0.25)',
  },
  {
    icon: '🏢',
    label: 'Quien quiere fundar un estudio',
    color: 'rgba(184,115,51,0.1)',
    borderColor: 'rgba(184,115,51,0.25)',
  },
  {
    icon: '✍️',
    label: 'Quien construye una marca de autor',
    color: 'rgba(40,120,80,0.1)',
    borderColor: 'rgba(40,120,80,0.25)',
  },
]

export default function NotAllEqual({ onOpenDiagnostic }: NotAllEqualProps) {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref2 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref3 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section className="section" style={{ position: 'relative' }}>
      <div className="container-narrow">
        <div className="reveal" ref={ref1}>
          <span className="section-label">Para ti, sea quien seas</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              marginBottom: '1.5rem',
              color: 'var(--text-primary)',
            }}
          >
            No queremos darte otra herramienta genérica.
          </h2>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            No todos los tatuadores trabajan igual.
            No todos quieren crecer igual.
            No todos están en la misma etapa.
          </p>
        </div>

        {/* Profile grid */}
        <div
          className="reveal reveal-delay-1"
          ref={ref2}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '1rem',
            marginBottom: '3rem',
          }}
        >
          {profiles.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '1.25rem',
                background: p.color,
                border: `1px solid ${p.borderColor}`,
                borderRadius: '6px',
                textAlign: 'center',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ fontSize: '2rem', marginBottom: '0.625rem' }}>{p.icon}</div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                  lineHeight: 1.35,
                }}
              >
                {p.label}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-2" ref={ref3}>
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2rem',
            }}
          >
            Por eso TintaOS no parte de imponer una solución, sino de entender primero:
          </p>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '0.75rem',
              marginBottom: '3rem',
            }}
          >
            {[
              'Cómo trabajas',
              'Qué te estorba',
              'Qué ya haces bien',
              'Qué quieres mejorar',
              'Qué clase de carrera quieres construir',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '0.875rem 1rem',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  borderRadius: '4px',
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent-copper)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>

          <blockquote className="quote-block" style={{ marginBottom: '2.5rem' }}>
            Antes de diseñar tu plataforma ideal, queremos conocer tu mundo.
          </blockquote>

          <button className="btn-secondary" onClick={onOpenDiagnostic}>
            Quiero participar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}
