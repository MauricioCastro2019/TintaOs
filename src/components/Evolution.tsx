import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const stages = [
  {
    number: '01', title: 'Estoy empezando',
    color: 'rgba(100,50,180,0.2)', border: 'rgba(120,70,200,0.4)', text: '#a080e0',
    bullets: ['Me tatúan amigos o conocidos', 'Necesito mostrarme mejor', 'Quiero organizar mis primeras solicitudes'],
  },
  {
    number: '02', title: 'Ya tengo movimiento',
    color: 'rgba(40,80,50,0.18)', border: 'rgba(62,160,85,0.35)', text: '#5ab872',
    bullets: ['Empiezan a llegar clientes constantes', 'Me urge filtrar mejor las ideas', 'Quiero menos mensajes perdidos'],
  },
  {
    number: '03', title: 'Vivo de tatuar',
    color: 'rgba(26,74,40,0.18)', border: 'rgba(111,207,132,0.3)', text: '#6fcf84',
    bullets: ['Necesito profesionalizar mi operación', 'Quiero portafolio fuerte y reseñas', 'Quiero controlar tiempo e ingresos'],
  },
  {
    number: '04', title: 'Quiero estudio propio',
    color: 'rgba(30,80,30,0.15)', border: 'rgba(50,140,50,0.3)', text: '#60b060',
    bullets: ['Necesito estructura, marca y procesos', 'Agenda, insumos y operación seria', 'Una identidad visual sólida'],
  },
  {
    number: '05', title: 'Construir algo mayor',
    color: 'rgba(30,60,140,0.15)', border: 'rgba(50,100,220,0.3)', text: '#6090e0',
    bullets: ['Equipo, cursos, merch, comunidad', 'Expansión y modelo escalable', 'Negocio tatuado con identidad propia'],
  },
]

function AccordionStage({ stage, index }: { stage: typeof stages[0]; index: number }) {
  const [open, setOpen] = useState(index === 0)
  const ref = useReveal() as React.MutableRefObject<HTMLDivElement>

  return (
    <div
      className="reveal"
      ref={ref}
      style={{ border: `1px solid ${stage.border}`, borderRadius: '6px', overflow: 'hidden', background: stage.color, transitionDelay: `${index * 0.07}s` }}
    >
      <button className="accordion-header" onClick={() => setOpen(o => !o)} style={{ background: 'transparent', border: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 300, color: stage.text, opacity: 0.5, lineHeight: 1, flexShrink: 0 }}>{stage.number}</span>
          <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: '1rem', letterSpacing: '0.06em', color: 'var(--text-primary)', lineHeight: 1.2 }}>{stage.title}</span>
        </div>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={stage.text} strokeWidth="2.5" strokeLinecap="round"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s ease' }}>
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </button>
      <div className={`accordion-body ${open ? 'open' : ''}`}>
        <ul style={{ padding: '0 1.25rem 1rem', listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
          {stage.bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
              <span style={{ display: 'inline-block', width: 4, height: 4, borderRadius: '50%', background: stage.text, flexShrink: 0, marginTop: '0.45rem', opacity: 0.8 }} />
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
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '500px', height: '350px', background: 'radial-gradient(ellipse, rgba(42,102,54,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container">
        <div className="reveal" ref={ref1} style={{ marginBottom: '2rem' }}>
          <span className="section-label">Etapas</span>
          <h2 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 6vw, 3.5rem)', letterSpacing: '0.04em', lineHeight: 1.1, maxWidth: '560px', color: 'var(--text-primary)' }}>
            Desde el primer tatuaje cobrado{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--accent-copper-light)', textTransform: 'none', letterSpacing: 0 }}>
              hasta tu propio estudio.
            </em>
          </h2>
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden" style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', marginBottom: '2rem' }}>
          {stages.map((s, i) => <AccordionStage key={i} stage={s} index={i} />)}
        </div>

        {/* Desktop: full grid */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1.125rem', marginBottom: '2rem' }}>
          {stages.map((s, i) => (
            <div key={i} style={{ padding: '1.5rem', background: s.color, border: `1px solid ${s.border}`, borderRadius: '6px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.5)` }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '3rem', fontWeight: 300, lineHeight: 1, color: s.text, opacity: 0.35, marginBottom: '0.4rem', userSelect: 'none' }}>{s.number}</div>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: '1.1rem', letterSpacing: '0.06em', color: 'var(--text-primary)', marginBottom: '0.875rem' }}>{s.title}</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                {s.bullets.map((b, j) => (
                  <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>
                    <span style={{ display: 'inline-block', width: 5, height: 5, borderRadius: '50%', background: s.text, flexShrink: 0, marginTop: '0.4rem', opacity: 0.8 }} />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="reveal" ref={useReveal() as React.MutableRefObject<HTMLDivElement>}>
          <blockquote className="quote-block" style={{ maxWidth: '500px', fontSize: '1rem' }}>
            BlackVein no quiere definir hasta dónde puedes llegar. Quiere ayudarte a construir la ruta.
          </blockquote>
        </div>
      </div>
    </section>
  )
}
