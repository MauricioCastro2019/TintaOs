import { useReveal } from '../hooks/useReveal'

interface NotAllEqualProps {
  onOpenDiagnostic: () => void
}

const profiles = [
  { icon: '🏠', label: 'Quien empieza en casa', color: 'rgba(100,80,180,0.15)', border: 'rgba(100,80,180,0.3)' },
  { icon: '📅', label: 'Quien vive de su agenda', color: 'rgba(26,74,40,0.15)', border: 'rgba(62,160,85,0.3)' },
  { icon: '🏢', label: 'Quien quiere fundar estudio', color: 'rgba(42,102,54,0.12)', border: 'rgba(111,207,132,0.25)' },
  { icon: '✍️', label: 'Quien construye marca propia', color: 'rgba(30,60,140,0.12)', border: 'rgba(50,100,200,0.25)' },
]

export default function NotAllEqual({ onOpenDiagnostic }: NotAllEqualProps) {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref2 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section className="section">
      <div className="container-narrow">
        <div className="reveal" ref={ref1}>
          <span className="section-label">Para ti, sea quien seas</span>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: '0.04em', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--text-primary)' }}>
            No queremos darte otra herramienta genérica.
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.75rem' }}>
            No todos los tatuadores trabajan igual ni quieren crecer igual. Por eso BlackVein no impone una solución — primero entiende tu mundo.
          </p>
        </div>

        <div className="reveal reveal-delay-1" ref={ref2}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.625rem', marginBottom: '1.75rem' }}>
            {profiles.map((p, i) => (
              <div
                key={i}
                style={{ padding: '1rem', background: p.color, border: `1px solid ${p.border}`, borderRadius: '6px', display: 'flex', alignItems: 'center', gap: '0.625rem', transition: 'transform 0.2s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{p.icon}</span>
                <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.3 }}>{p.label}</span>
              </div>
            ))}
          </div>

          <blockquote className="quote-block" style={{ marginBottom: '1.75rem', fontSize: '1rem' }}>
            Antes de diseñar tu plataforma ideal, queremos conocer tu mundo.
          </blockquote>

          <button className="btn-secondary" onClick={onOpenDiagnostic} style={{ fontSize: '0.85rem' }}>
            Quiero participar
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>
    </section>
  )
}
