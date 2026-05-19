import { useReveal } from '../hooks/useReveal'

interface DiagnosticInviteProps {
  onOpenDiagnostic: () => void
}

const points = [
  'En qué etapa estás', 'Cómo consigues clientes', 'Qué te quita más tiempo',
  'Qué quieres automatizar', 'Qué tipo de crecimiento imaginas',
]

export default function DiagnosticInvite({ onOpenDiagnostic }: DiagnosticInviteProps) {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref2 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section id="diagnostico" style={{ position: 'relative', padding: '4rem 0', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(42,102,54,0.08) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div className="container-narrow" style={{ textAlign: 'center' }}>
        <div className="reveal" ref={ref1}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Diagnóstico</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.55rem, 4vw, 2.5rem)', letterSpacing: '-0.025em', lineHeight: 1.15, color: 'var(--text-primary)', marginBottom: '1rem' }}>
            Queremos diseñar TintaOS con{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--accent-copper-light)' }}>tatuadores reales.</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
            Antes de decidir qué construir, queremos escucharte.
          </p>
        </div>

        <div className="reveal reveal-delay-1" ref={ref2}>
          {/* Compact points */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem' }}>
            {points.map((p, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 0.875rem', background: 'var(--bg-card)', border: '1px solid var(--border)', borderRadius: '100px' }}>
                <div className="glow-dot" style={{ width: 5, height: 5 }} />
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{p}</span>
              </div>
            ))}
          </div>

          <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1rem', color: 'var(--accent-copper-light)', lineHeight: 1.6, marginBottom: '2rem', border: 'none', padding: 0 }}>
            Tu respuesta no es una encuesta más. Es parte de la arquitectura de una herramienta hecha desde el oficio.
          </blockquote>

          <button
            className="btn-primary"
            onClick={onOpenDiagnostic}
            style={{ fontSize: '0.95rem', padding: '1rem 2.25rem', boxShadow: '0 8px 40px rgba(42,102,54,0.25)', letterSpacing: '0.06em' }}
          >
            Iniciar diagnóstico
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>

          <p style={{ marginTop: '1rem', fontFamily: "'Inter', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            5–8 minutos · Sin compromiso
          </p>
        </div>
      </div>
    </section>
  )
}
