import { useReveal } from '../hooks/useReveal'

const stages = [
  {
    number: '01',
    title: 'Estoy empezando',
    color: 'rgba(100,50,180,0.2)',
    borderColor: 'rgba(120,70,200,0.4)',
    textColor: '#a080e0',
    bullets: [
      'Me tatúan amigos o conocidos',
      'Necesito mostrarme mejor',
      'Quiero organizar mis primeras solicitudes',
    ],
  },
  {
    number: '02',
    title: 'Ya tengo movimiento',
    color: 'rgba(40,80,50,0.18)',
    borderColor: 'rgba(62,160,85,0.35)',
    textColor: '#5ab872',
    bullets: [
      'Empiezan a llegar clientes constantes',
      'Me urge filtrar mejor las ideas',
      'Quiero citas más claras y menos mensajes perdidos',
    ],
  },
  {
    number: '03',
    title: 'Vivo de tatuar',
    color: 'rgba(26,74,40,0.18)',
    borderColor: 'rgba(111,207,132,0.3)',
    textColor: '#6fcf84',
    bullets: [
      'Necesito profesionalizar mi operación',
      'Quiero reseñas, portafolio fuerte y seguimiento',
      'Quiero controlar mejor mi tiempo e ingresos',
    ],
  },
  {
    number: '04',
    title: 'Quiero estudio propio',
    color: 'rgba(30,80,30,0.15)',
    borderColor: 'rgba(50,140,50,0.3)',
    textColor: '#60b060',
    bullets: [
      'Necesito estructura, marca y procesos',
      'Insumos, agenda y operación seria',
      'Una identidad visual sólida',
    ],
  },
  {
    number: '05',
    title: 'Quiero construir algo mayor',
    color: 'rgba(30,60,140,0.15)',
    borderColor: 'rgba(50,100,220,0.3)',
    textColor: '#6090e0',
    bullets: [
      'Equipo, cursos, merch, comunidad',
      'Expansión y modelo escalable',
      'Negocio tatuado con identidad propia',
    ],
  },
]

function StageCard({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const ref = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <div
      className="reveal"
      ref={ref}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div
        style={{
          padding: '1.75rem',
          background: stage.color,
          border: `1px solid ${stage.borderColor}`,
          borderRadius: '6px',
          position: 'relative',
          transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'translateY(-5px)'
          e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5), 0 0 1px ${stage.borderColor}`
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'translateY(0)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        {/* Stage number */}
        <div
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '3.5rem',
            fontWeight: 300,
            lineHeight: 1,
            color: stage.textColor,
            opacity: 0.35,
            marginBottom: '0.5rem',
            userSelect: 'none',
          }}
        >
          {stage.number}
        </div>

        <h3
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: '1rem',
            color: 'var(--text-primary)',
            marginBottom: '1rem',
            letterSpacing: '-0.01em',
          }}
        >
          {stage.title}
        </h3>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          {stage.bullets.map((b, i) => (
            <li
              key={i}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.625rem',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  width: 5,
                  height: 5,
                  borderRadius: '50%',
                  background: stage.textColor,
                  flexShrink: 0,
                  marginTop: '0.45rem',
                  opacity: 0.8,
                }}
              />
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default function Evolution() {
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <section id="etapas" className="section" style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(42,102,54,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container">
        <div className="reveal" ref={ref1} style={{ marginBottom: '3.5rem' }}>
          <span className="section-label">Etapas</span>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              maxWidth: '640px',
              color: 'var(--text-primary)',
            }}
          >
            Desde el primer tatuaje cobrado{' '}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: 'var(--accent-copper-light)',
              }}
            >
              hasta tu propio estudio.
            </em>
          </h2>
        </div>

        {/* Stages grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '1.25rem',
            marginBottom: '3rem',
          }}
        >
          {stages.map((stage, i) => (
            <StageCard key={i} stage={stage} index={i} />
          ))}
        </div>

        {/* Closing quote */}
        <div className="reveal" ref={useReveal() as React.MutableRefObject<HTMLDivElement>}>
          <blockquote
            className="quote-block"
            style={{
              maxWidth: '560px',
              fontSize: '1.1rem',
            }}
          >
            TintaOS no quiere definir hasta dónde puedes llegar. Quiere ayudarte a construir la ruta.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
