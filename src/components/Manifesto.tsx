import { useReveal } from '../hooks/useReveal'

export default function Manifesto() {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>
  const ref2 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section
      style={{
        position: 'relative',
        padding: '8rem 0',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Decorative background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'radial-gradient(ellipse at 20% 50%, rgba(139,31,31,0.06) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(61,18,96,0.06) 0%, transparent 60%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(184,115,51,0.3), transparent)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(184,115,51,0.3), transparent)',
        }}
      />

      <div className="container-narrow">
        <div className="reveal" ref={ref1} style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ justifyContent: 'center' }}>Manifiesto</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.5rem, 3.5vw, 2.4rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.2,
              color: 'var(--text-primary)',
              maxWidth: '680px',
              margin: '0 auto',
            }}
          >
            No queremos domesticar el arte.{' '}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: 'var(--accent-copper-light)',
                display: 'block',
                marginTop: '0.25rem',
              }}
            >
              Queremos quitarle ruido para que llegue más lejos.
            </em>
          </h2>
        </div>

        <div className="reveal reveal-delay-1" ref={ref2}>
          <div
            style={{
              display: 'grid',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            {[
              'Creemos en el tatuador que aprendió viendo, practicando, equivocándose y mejorando a pulso.',
              'En quien convierte una idea ajena en una pieza que alguien llevará toda la vida.',
              'En quien empieza con pocos recursos, pero con hambre de construir algo grande.',
              'En quien ya tiene nombre, pero necesita herramientas que estén a su altura.',
            ].map((paragraph, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                  color: i === 0 || i === 3 ? 'var(--text-primary)' : 'var(--text-secondary)',
                  lineHeight: 1.7,
                  fontWeight: i === 0 || i === 3 ? 400 : 300,
                  textAlign: 'center',
                  fontStyle: i % 2 === 1 ? 'italic' : 'normal',
                  padding: '0.5rem 0',
                  borderBottom: i < 3 ? '1px solid var(--border)' : 'none',
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          {/* Dividing line */}
          <div
            style={{
              width: '60px',
              height: '2px',
              background: 'linear-gradient(90deg, var(--accent-wine), var(--accent-copper))',
              margin: '0 auto 2.5rem',
            }}
          />

          <div style={{ textAlign: 'center' }}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              La tecnología no debería volver frío este oficio.
              <br />
              Debería darle estructura sin quitarle alma.
            </p>

            <blockquote
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: 'var(--accent-copper-light)',
                letterSpacing: '0.01em',
                lineHeight: 1.6,
              }}
            >
              TintaOS se está construyendo desde esa idea.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
