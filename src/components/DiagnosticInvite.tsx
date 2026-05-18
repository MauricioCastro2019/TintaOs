import { useReveal } from '../hooks/useReveal'

interface DiagnosticInviteProps {
  onOpenDiagnostic: () => void
}

export default function DiagnosticInvite({ onOpenDiagnostic }: DiagnosticInviteProps) {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref2 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section
      id="diagnostico"
      style={{
        position: 'relative',
        padding: '8rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(139,31,31,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="reveal" ref={ref1}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Diagnóstico</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              color: 'var(--text-primary)',
              marginBottom: '1.5rem',
            }}
          >
            Queremos diseñar TintaOS con{' '}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: 'var(--accent-copper-light)',
              }}
            >
              tatuadores reales.
            </em>
          </h2>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
            }}
          >
            Antes de decidir qué construir primero, queremos escucharte.
            <br />
            Este diagnóstico nos ayudará a entender:
          </p>
        </div>

        <div
          className="reveal reveal-delay-1"
          ref={ref2}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0.75rem',
            marginBottom: '3rem',
            textAlign: 'left',
          }}
        >
          {[
            'En qué etapa estás',
            'Cómo consigues clientes',
            'Cómo organizas citas y cotizaciones',
            'Qué te quita tiempo',
            'Qué te gustaría automatizar',
            'Qué te gustaría mostrar mejor',
            'Qué tipo de crecimiento imaginas',
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
              <div className="glow-dot" />
              <span
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        <blockquote
          className="quote-block"
          style={{
            borderLeft: 'none',
            paddingLeft: 0,
            textAlign: 'center',
            fontSize: '1.1rem',
            marginBottom: '3rem',
          }}
        >
          Tu respuesta no es una encuesta más. Es parte de la arquitectura de una herramienta hecha desde el oficio.
        </blockquote>

        <button
          className="btn-primary"
          onClick={onOpenDiagnostic}
          style={{
            fontSize: '1rem',
            padding: '1.125rem 2.5rem',
            letterSpacing: '0.08em',
            boxShadow: '0 8px 40px rgba(139,31,31,0.3)',
          }}
        >
          Iniciar diagnóstico
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>

        <p
          style={{
            marginTop: '1.25rem',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.78rem',
            color: 'var(--text-muted)',
          }}
        >
          Toma entre 5 y 8 minutos · Sin compromiso
        </p>
      </div>
    </section>
  )
}
