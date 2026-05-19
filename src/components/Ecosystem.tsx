import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'

const modules = [
  { icon: '👤', title: 'Perfil artístico', desc: 'Portafolio, servicios, reseñas y solicitudes en un solo lugar.', accent: 'rgba(26,74,40,0.18)', border: 'rgba(62,160,85,0.35)' },
  { icon: '📚', title: 'Flashbook', desc: 'Diseños listos para reservar sin perderse en historias.', accent: 'rgba(61,18,96,0.2)', border: 'rgba(100,50,180,0.3)' },
  { icon: '📨', title: 'Solicitudes', desc: 'El cliente llega con idea, zona, presupuesto y disponibilidad.', accent: 'rgba(42,102,54,0.12)', border: 'rgba(111,207,132,0.25)' },
  { icon: '📅', title: 'Agenda', desc: 'Citas, confirmaciones, cambios y anticipos organizados.', accent: 'rgba(30,80,30,0.15)', border: 'rgba(50,140,50,0.3)' },
  { icon: '👥', title: 'Clientes', desc: 'Historial, tatuajes realizados y evolución de cada proyecto.', accent: 'rgba(30,60,120,0.15)', border: 'rgba(50,100,200,0.25)' },
  { icon: '🩹', title: 'Post-tatuaje', desc: 'Cuidados, cicatrización, reseñas y recordatorios automáticos.', accent: 'rgba(26,74,40,0.14)', border: 'rgba(62,160,85,0.25)' },
  { icon: '📦', title: 'Insumos', desc: 'Tinta, agujas, consumibles y alertas de stock bajo.', accent: 'rgba(42,102,54,0.1)', border: 'rgba(111,207,132,0.22)' },
  { icon: '📣', title: 'Contenido', desc: 'QR, fichas de diseño y piezas visuales para vender con estilo.', accent: 'rgba(61,18,96,0.15)', border: 'rgba(120,50,180,0.25)' },
  { icon: '📊', title: 'Métricas', desc: 'Citas, diseños que funcionan y hacia dónde crece tu negocio.', accent: 'rgba(30,60,140,0.15)', border: 'rgba(50,130,220,0.25)' },
  { icon: '🏢', title: 'Estudio', desc: 'Varios artistas, agenda compartida y operación profesional.', accent: 'rgba(42,102,54,0.15)', border: 'rgba(111,207,132,0.3)' },
]

const MOBILE_VISIBLE = 6

export default function Ecosystem() {
  const [showAll, setShowAll] = useState(false)
  const ref1 = useReveal() as React.MutableRefObject<HTMLDivElement>

  const visible = showAll ? modules : modules.slice(0, MOBILE_VISIBLE)

  return (
    <section id="posibilidades" className="section" style={{ background: 'var(--bg-secondary)' }}>
      <div className="divider-copper" />
      <div className="container" style={{ paddingTop: '2.5rem' }}>

        <div className="reveal" ref={ref1} style={{ marginBottom: '2rem' }}>
          <span className="section-label">Posibilidades</span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 'clamp(1.55rem, 4vw, 2.6rem)', letterSpacing: '-0.025em', lineHeight: 1.15, maxWidth: '560px', color: 'var(--text-primary)' }}>
            Todo lo que podría{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--accent-copper-light)' }}>crecer contigo</em>
          </h2>
          <p style={{ marginTop: '0.75rem', fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-secondary)', maxWidth: '480px', lineHeight: 1.65 }}>
            Módulos que se activan según tu etapa. No pagas ni usas lo que no necesitas.
          </p>
        </div>

        {/* Mobile: compact 2-col emoji tiles */}
        <div className="md:hidden" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.625rem', marginBottom: '1rem' }}>
          {visible.map((mod, i) => (
            <div
              key={i}
              style={{ padding: '0.875rem', background: mod.accent, border: `1px solid ${mod.border}`, borderRadius: '6px', transition: 'transform 0.2s ease' }}
              onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-2px)')}
              onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              <div style={{ fontSize: '1.35rem', marginBottom: '0.375rem' }}>{mod.icon}</div>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.82rem', color: 'var(--text-primary)', marginBottom: '0.25rem', lineHeight: 1.25 }}>{mod.title}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-secondary)', lineHeight: 1.45 }}>{mod.desc}</div>
            </div>
          ))}
        </div>

        {/* Mobile toggle */}
        {!showAll && (
          <div className="md:hidden" style={{ textAlign: 'center', marginBottom: '1rem' }}>
            <button
              className="btn-ghost"
              onClick={() => setShowAll(true)}
              style={{ fontSize: '0.8rem', gap: '0.375rem' }}
            >
              Ver los {modules.length - MOBILE_VISIBLE} módulos restantes
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
          </div>
        )}

        {/* Desktop: full cards grid */}
        <div className="hidden md:grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.125rem' }}>
          {modules.map((mod, i) => (
            <div key={i} className="card" style={{ padding: '1.5rem', transitionDelay: `${i * 0.04}s` }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>{mod.icon}</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '0.92rem', color: 'var(--text-primary)', marginBottom: '0.5rem', letterSpacing: '-0.01em', lineHeight: 1.3 }}>{mod.title}</h3>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="divider-copper" style={{ marginTop: '2.5rem' }} />
    </section>
  )
}
