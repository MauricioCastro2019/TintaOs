import { useReveal } from '../hooks/useReveal'

const pains = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
    title: 'Cotizaciones perdidas',
    desc: 'Precios, referencias y detalles enterrados en el chat.',
    color: 'rgba(42,102,54,0.12)',
    border: 'rgba(62,160,85,0.25)',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Citas sin sistema',
    desc: 'Cambios, cancelaciones y olvidos que te roban tiempo.',
    color: 'rgba(30,60,120,0.15)',
    border: 'rgba(50,100,200,0.25)',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>
      </svg>
    ),
    title: 'Portfolio disperso',
    desc: 'Tu mejor trabajo enterrado en historias de Instagram.',
    color: 'rgba(61,18,96,0.18)',
    border: 'rgba(100,50,180,0.28)',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
      </svg>
    ),
    title: 'Insumos sin control',
    desc: 'Te quedas sin agujas o tinta en plena semana de trabajo.',
    color: 'rgba(120,80,20,0.12)',
    border: 'rgba(200,140,40,0.22)',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
      </svg>
    ),
    title: 'Sin métricas claras',
    desc: 'No sabes qué diseños convierten ni cuánto ganas real.',
    color: 'rgba(139,31,31,0.12)',
    border: 'rgba(180,60,60,0.22)',
  },
]

export default function Problem() {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref2 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref3 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="divider-copper" />
      <div className="container" style={{ paddingTop: '2.5rem' }}>

        <div className="reveal" ref={ref1}>
          <span className="section-label">El problema</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.55rem, 4vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '600px', marginBottom: '0.75rem', color: 'var(--text-primary)' }}>
            Mucho del trabajo del tatuador ocurre{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--accent-copper-light)' }}>fuera del tatuaje.</em>
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '520px', marginBottom: '2rem' }}>
            Tatuar es el centro. Pero alrededor hay un sistema entero que casi siempre se improvisa.
          </p>
        </div>

        {/* Pain cards — 2 col mobile, 3 col desktop */}
        <div
          className="reveal reveal-delay-1"
          ref={ref2}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '0.75rem',
            marginBottom: '2rem',
          }}
        >
          {pains.map((p, i) => (
            <div
              key={i}
              style={{
                padding: '1rem',
                background: p.color,
                border: `1px solid ${p.border}`,
                borderRadius: '6px',
                gridColumn: i === 4 ? 'span 2' : 'span 1',
                transition: 'transform 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ color: 'var(--accent-copper)', marginBottom: '0.5rem' }}>{p.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.85rem', color: 'var(--text-primary)', marginBottom: '0.3rem', lineHeight: 1.3 }}>{p.title}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        <div className="reveal reveal-delay-2" ref={ref3}>
          <blockquote className="quote-block">
            TintaOS nace para preguntarse: ¿qué pasaría si ese sistema estuviera bien pensado desde el principio?
          </blockquote>
        </div>
      </div>
      <div className="divider-copper" style={{ marginTop: '2.5rem' }} />
    </section>
  )
}
