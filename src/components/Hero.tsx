import { useEffect, useRef } from 'react'

interface HeroProps {
  onOpenDiagnostic: () => void
}

function MiniDashboard() {
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: '500px', margin: '0 auto', height: '380px' }}>
      {/* Glow */}
      <div style={{ position: 'absolute', top: '30%', left: '25%', width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(42,102,54,0.3) 0%, transparent 70%)', filter: 'blur(40px)', borderRadius: '50%', pointerEvents: 'none' }} />

      {/* Profile card */}
      <div className="card" style={{ position: 'absolute', top: 0, left: '4%', width: '210px', padding: '1.1rem', animation: 'float 7s ease-in-out infinite' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
          <div style={{ width: 38, height: 38, borderRadius: '50%', background: 'linear-gradient(135deg, #0f2618, #2a6636)', flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 400, color: '#eef2ee', fontFamily: "'Bebas Neue', sans-serif" }}>MK</div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Bebas Neue', sans-serif" }}>Mara Kolhoff</div>
            <div style={{ fontSize: '0.68rem', color: 'var(--accent-copper)', letterSpacing: '0.04em' }}>Fine Line · CDMX</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          {[['247', 'clientes'], ['4.9', 'rating'], ['38', 'diseños']].map(([n, l]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '0.95rem', fontWeight: 400, color: l === 'rating' ? 'var(--accent-copper-light)' : 'var(--text-primary)', fontFamily: "'Bebas Neue', sans-serif" }}>{n}</div>
              <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)' }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Agenda card */}
      <div className="card" style={{ position: 'absolute', top: '130px', right: '0', width: '185px', padding: '1rem', animation: 'float 8s ease-in-out infinite 1.5s' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--accent-copper)', letterSpacing: '0.1em', marginBottom: '0.75rem', fontFamily: "'Bebas Neue', sans-serif" }}>PRÓXIMAS CITAS</div>
        {[['Daniela R.', 'Hoy 3pm'], ['Carlos M.', 'Mañana'], ['Sofia P.', 'Jue 2pm']].map(([n, t], i) => (
          <div key={n} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.4rem 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-primary)', fontFamily: "'Bebas Neue', sans-serif" }}>{n}</span>
            <span style={{ fontSize: '0.68rem', color: i === 0 ? 'var(--accent-copper)' : 'var(--text-muted)', fontFamily: "'Bebas Neue', sans-serif" }}>{t}</span>
          </div>
        ))}
      </div>

      {/* Stats card */}
      <div className="card" style={{ position: 'absolute', top: '75px', right: '25px', width: '150px', padding: '0.875rem', animation: 'float 6s ease-in-out infinite 2s' }}>
        <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginBottom: '0.375rem', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}>ESTE MES</div>
        <div style={{ fontSize: '1.5rem', fontWeight: 400, color: 'var(--text-primary)', fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>$18,400</div>
        <div style={{ fontSize: '0.68rem', color: '#4a9a4a', marginTop: '0.25rem', fontFamily: "'Bebas Neue', sans-serif" }}>↑ 22%</div>
        <div style={{ marginTop: '0.625rem', height: '24px', display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
          {[60, 75, 45, 85, 55, 90, 70].map((h, i) => (
            <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 5 ? 'var(--accent-copper)' : 'var(--border-accent)', borderRadius: '2px' }} />
          ))}
        </div>
      </div>

      {/* Flashbook */}
      <div className="card" style={{ position: 'absolute', bottom: '20px', left: '6%', width: '175px', padding: '0.875rem', animation: 'float 9s ease-in-out infinite 0.5s' }}>
        <div style={{ fontSize: '0.65rem', fontWeight: 600, color: 'var(--accent-copper)', letterSpacing: '0.1em', marginBottom: '0.625rem', fontFamily: "'Bebas Neue', sans-serif" }}>FLASHBOOK</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '4px', marginBottom: '0.5rem' }}>
          {[['#0f2618','#2a6636'],['#0a1a0a','#1a3a1a'],['#1a0a0a','#2a1010'],['#0a0a1a','#1a1a4a'],['#1a1000','#3a2800'],['#0a0a0a','#2a2a2a']].map(([c1,c2],i)=>(
            <div key={i} style={{ aspectRatio:'1', borderRadius:'3px', background:`linear-gradient(135deg,${c1},${c2})`, border:'1px solid var(--border)' }} />
          ))}
        </div>
        <div style={{ fontSize: '0.68rem', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>6 disponibles</div>
      </div>
    </div>
  )
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    setTimeout(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    }, 80)
  }, [])

  return (
    <section
      id="vision"
      style={{
        position: 'relative',
        paddingTop: 'calc(70px + 2.5rem)',
        paddingBottom: '3rem',
        overflow: 'hidden',
      }}
    >
      {/* Bg glows */}
      <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: '500px', height: '500px', background: 'radial-gradient(ellipse, rgba(42,102,54,0.1) 0%, transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '0', left: '-10%', width: '400px', height: '300px', background: 'radial-gradient(ellipse, rgba(111,207,132,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
          gap: '2.5rem',
          alignItems: 'center',
        }}
      >
        {/* Copy */}
        <div>
          <div className="tag" style={{ marginBottom: '1.5rem', opacity: 0, animation: 'fadeUp 0.5s ease 0.15s forwards', animationFillMode: 'forwards' }}>
            En construcción · Beta privada
          </div>

          <h1
            ref={titleRef}
            className="hero-title"
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontSize: 'clamp(2.6rem, 8vw, 5rem)',
              lineHeight: 1.05,
              letterSpacing: '0.04em',
              color: 'var(--text-primary)',
              marginBottom: '1rem',
              textTransform: 'uppercase',
            }}
          >
            Tu arte no nació para vivir entre{' '}
            <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontWeight: 400, textTransform: 'none', letterSpacing: '-0.01em', background: 'linear-gradient(135deg, #6fcf84, #9de8b0)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', fontSize: '0.85em' }}>
              mensajes perdidos.
            </em>
          </h1>

          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 'clamp(0.88rem, 2.5vw, 1rem)', color: 'var(--text-secondary)', lineHeight: 1.7, maxWidth: '460px', marginBottom: '0.875rem', opacity: 0, animation: 'fadeUp 0.6s ease 0.3s forwards', animationFillMode: 'forwards' }}>
            Una plataforma en construcción para tatuadores que quieren mostrar mejor su trabajo, organizar citas, vender diseños y hacer crecer su carrera con un sistema a su altura.
          </p>

          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)', color: 'var(--accent-copper-light)', marginBottom: '1.75rem', opacity: 0, animation: 'fadeUp 0.6s ease 0.42s forwards', animationFillMode: 'forwards' }}>
            Desde tus primeros clientes hasta tu propio estudio.
          </p>

          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap', opacity: 0, animation: 'fadeUp 0.6s ease 0.55s forwards', animationFillMode: 'forwards' }}>
            <button className="btn-primary" onClick={onOpenDiagnostic} style={{ fontSize: '0.85rem' }}>
              Hacer diagnóstico
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <a href="#vision" className="btn-secondary" style={{ fontSize: '0.85rem' }}>
              Ver la visión
            </a>
          </div>
        </div>

        {/* Dashboard mockup — desktop only */}
        <div className="hidden md:block" style={{ opacity: 0, animation: 'fadeIn 1.1s ease 0.4s forwards' }}>
          <MiniDashboard />
        </div>
      </div>

      {/* Mobile micro-visual — show instead of full dashboard */}
      <div className="md:hidden" style={{ marginTop: '2.5rem', padding: '0 1.25rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.625rem' }}>
          {[
            { val: '247', label: 'Clientes', color: 'var(--accent-copper-light)' },
            { val: '38', label: 'Diseños', color: 'var(--text-primary)' },
            { val: '4.9★', label: 'Rating', color: '#6fcf84' },
          ].map(({ val, label, color }) => (
            <div key={label} className="card" style={{ padding: '0.875rem', textAlign: 'center' }}>
              <div style={{ fontSize: '1.15rem', fontWeight: 400, color, fontFamily: "'Bebas Neue', sans-serif", lineHeight: 1 }}>{val}</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '0.25rem', fontFamily: "'Bebas Neue', sans-serif', letterSpacing: '0.05em" }}>{label}</div>
            </div>
          ))}
        </div>
        <div className="card" style={{ marginTop: '0.625rem', padding: '0.875rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.08em' }}>PRÓXIMA CITA</div>
            <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Bebas Neue', sans-serif", marginTop: '0.2rem' }}>Daniela R. — Hoy 3pm</div>
          </div>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#4a9a4a', boxShadow: '0 0 6px #4a9a4a' }} />
        </div>
      </div>
    </section>
  )
}
