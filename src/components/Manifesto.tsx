import { useReveal } from '../hooks/useReveal'

export default function Manifesto() {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref2 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section style={{ position: 'relative', padding: '4rem 0', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 20% 50%, rgba(42,102,54,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(61,18,96,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(111,207,132,0.3), transparent)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(111,207,132,0.3), transparent)' }} />

      <div className="container-narrow">
        <div className="reveal" ref={ref1} style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Manifiesto</span>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 'clamp(1.8rem, 5vw, 3rem)', letterSpacing: '0.04em', lineHeight: 1.1, color: 'var(--text-primary)', maxWidth: '600px', margin: '0 auto' }}>
            No queremos domesticar el arte.{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--accent-copper-light)', textTransform: 'none', letterSpacing: 0, display: 'block', marginTop: '0.2rem', fontSize: '0.75em' }}>
              Queremos quitarle ruido para que llegue más lejos.
            </em>
          </h2>
        </div>

        <div className="reveal reveal-delay-1" ref={ref2} style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem', fontStyle: 'italic', fontWeight: 300 }}>
            Creemos en el tatuador que aprendió viendo, practicando y mejorando a pulso. En quien convierte una idea ajena en una pieza que alguien llevará toda la vida. En quien empieza con pocos recursos, pero con hambre de construir algo grande.
          </p>

          <div style={{ width: '48px', height: '2px', background: 'linear-gradient(90deg, var(--accent-wine-light), var(--accent-copper-light))', margin: '0 auto 1.5rem' }} />

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem' }}>
            La tecnología no debería volver frío este oficio. Debería darle estructura sin quitarle alma.
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.1rem', color: 'var(--accent-copper-light)' }}>
            BlackVein se está construyendo desde esa idea.
          </p>
        </div>
      </div>
    </section>
  )
}
