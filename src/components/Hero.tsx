import { useEffect, useRef } from 'react'

interface HeroProps {
  onOpenDiagnostic: () => void
}

function DashboardMockup() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '560px',
        margin: '0 auto',
        height: '420px',
      }}
    >
      {/* Glow backdrop */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '30%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(42,102,54,0.3) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          width: '180px',
          height: '180px',
          background: 'radial-gradient(circle, rgba(111,207,132,0.1) 0%, transparent 70%)',
          filter: 'blur(40px)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />

      {/* Profile card */}
      <div
        className="card"
        style={{
          position: 'absolute',
          top: '0',
          left: '5%',
          width: '220px',
          padding: '1.25rem',
          animation: 'float 7s ease-in-out infinite',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.875rem' }}>
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0f2618, #2a6636)',
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '0.85rem',
              fontWeight: 700,
              color: '#f2ede4',
              fontFamily: "'Space Grotesk', sans-serif",
            }}
          >
            MK
          </div>
          <div>
            <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>
              Mara Kolhoff
            </div>
            <div style={{ fontSize: '0.72rem', color: 'var(--accent-copper)', letterSpacing: '0.05em' }}>Fine Line · CDMX</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
          {['Blackwork', 'Ornamental', 'Fine Line'].map(t => (
            <span key={t} className="tag" style={{ fontSize: '0.65rem', padding: '0.15rem 0.5rem' }}>{t}</span>
          ))}
        </div>
        <div style={{ marginTop: '0.875rem', display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>247</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>clientes</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-copper)', fontFamily: "'Space Grotesk', sans-serif" }}>4.9</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>rating</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>38</div>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>diseños</div>
          </div>
        </div>
      </div>

      {/* Agenda card */}
      <div
        className="card"
        style={{
          position: 'absolute',
          top: '140px',
          right: '0%',
          width: '200px',
          padding: '1.125rem',
          animation: 'float 8s ease-in-out infinite 1.5s',
        }}
      >
        <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-copper)', letterSpacing: '0.1em', marginBottom: '0.875rem', fontFamily: "'Space Grotesk', sans-serif" }}>
          PRÓXIMAS CITAS
        </div>
        {[
          { name: 'Daniela R.', time: 'Hoy 3pm', style: 'Ornamental' },
          { name: 'Carlos M.', time: 'Mañana 11am', style: 'Blackwork' },
          { name: 'Sofia P.', time: 'Jue 2pm', style: 'Fine Line' },
        ].map((cita, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none' }}>
            <div>
              <div style={{ fontSize: '0.78rem', fontWeight: 500, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif" }}>{cita.name}</div>
              <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)' }}>{cita.style}</div>
            </div>
            <div style={{ fontSize: '0.68rem', color: i === 0 ? 'var(--accent-copper)' : 'var(--text-muted)', fontWeight: i === 0 ? 600 : 400, fontFamily: "'Space Grotesk', sans-serif" }}>{cita.time}</div>
          </div>
        ))}
      </div>

      {/* Flashbook card */}
      <div
        className="card"
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '8%',
          width: '190px',
          padding: '1rem',
          animation: 'float 9s ease-in-out infinite 0.5s',
        }}
      >
        <div style={{ fontSize: '0.72rem', fontWeight: 600, color: 'var(--accent-copper)', letterSpacing: '0.1em', marginBottom: '0.75rem', fontFamily: "'Space Grotesk', sans-serif" }}>
          FLASHBOOK
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', marginBottom: '0.75rem' }}>
          {[
            ['#1a0a1a', '#3d1260'],
            ['#0a1a0a', '#1a3a1a'],
            ['#1a0a0a', '#4a1010'],
            ['#0a0a1a', '#1a1a4a'],
            ['#1a1000', '#3a2800'],
            ['#0a0a0a', '#2a2a2a'],
          ].map(([c1, c2], i) => (
            <div
              key={i}
              style={{
                aspectRatio: '1',
                borderRadius: '3px',
                background: `linear-gradient(135deg, ${c1}, ${c2})`,
                border: '1px solid var(--border)',
              }}
            />
          ))}
        </div>
        <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontFamily: "'Inter', sans-serif" }}>6 disponibles</div>
      </div>

      {/* Stats mini card */}
      <div
        className="card"
        style={{
          position: 'absolute',
          top: '80px',
          right: '30px',
          width: '160px',
          padding: '1rem',
          animation: 'float 6s ease-in-out infinite 2s',
        }}
      >
        <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em' }}>
          ESTE MES
        </div>
        <div style={{ fontSize: '1.6rem', fontWeight: 700, color: 'var(--text-primary)', fontFamily: "'Space Grotesk', sans-serif", lineHeight: 1 }}>
          $18,400
        </div>
        <div style={{ fontSize: '0.7rem', color: '#4a9a4a', marginTop: '0.3rem', fontFamily: "'Space Grotesk', sans-serif" }}>
          ↑ 22% vs anterior
        </div>
        <div style={{ marginTop: '0.75rem', height: '28px', display: 'flex', alignItems: 'flex-end', gap: '3px' }}>
          {[60, 75, 45, 85, 55, 90, 70].map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background: i === 5 ? 'var(--accent-copper)' : 'var(--border-accent)',
                borderRadius: '2px',
                transition: 'height 0.5s ease',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Hero({ onOpenDiagnostic }: HeroProps) {
  const titleRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const el = titleRef.current
    if (el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(30px)'
      setTimeout(() => {
        el.style.transition = 'opacity 0.9s ease, transform 0.9s ease'
        el.style.opacity = '1'
        el.style.transform = 'translateY(0)'
      }, 100)
    }
  }, [])

  return (
    <section
      id="vision"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '80px',
        overflow: 'hidden',
      }}
    >
      {/* Background gradients */}
      <div
        style={{
          position: 'absolute',
          top: '-10%',
          right: '-5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(ellipse, rgba(42,102,54,0.1) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '-10%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(111,207,132,0.06) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))',
          gap: '4rem',
          alignItems: 'center',
        }}
      >
        {/* Left — Copy */}
        <div>
          <div
            className="tag"
            style={{
              marginBottom: '2rem',
              opacity: 0,
              animation: 'fadeUp 0.6s ease 0.2s forwards',
            }}
          >
            En construcción · Beta privada
          </div>

          <h1
            ref={titleRef}
            className="hero-title"
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(2.6rem, 5vw, 4rem)',
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '1.75rem',
            }}
          >
            Tu arte no nació para vivir entre{' '}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 600,
                background: 'linear-gradient(135deg, #6fcf84, #9de8b0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              mensajes perdidos.
            </em>
          </h1>

          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.75,
              maxWidth: '520px',
              marginBottom: '1.25rem',
              opacity: 0,
              animation: 'fadeUp 0.7s ease 0.4s forwards',
            }}
          >
            TintaOS es una visión en construcción: una plataforma pensada para tatuadores que quieren mostrar mejor su trabajo, recibir solicitudes más claras, organizar su crecimiento y convertir su oficio en una estructura que avance con ellos.
          </p>

          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '1.15rem',
              color: 'var(--accent-copper-light)',
              marginBottom: '2.5rem',
              opacity: 0,
              animation: 'fadeUp 0.7s ease 0.55s forwards',
            }}
          >
            Desde tus primeros clientes hasta tu propio estudio profesional.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              opacity: 0,
              animation: 'fadeUp 0.7s ease 0.7s forwards',
            }}
          >
            <button className="btn-primary" onClick={onOpenDiagnostic} style={{ fontSize: '0.9rem' }}>
              Responder diagnóstico
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
            <a href="#vision" className="btn-secondary" style={{ fontSize: '0.9rem' }}>
              Ver la visión
            </a>
          </div>
        </div>

        {/* Right — Dashboard mockup */}
        <div
          style={{
            opacity: 0,
            animation: 'fadeIn 1.2s ease 0.5s forwards',
          }}
        >
          <DashboardMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.5rem',
          opacity: 0,
          animation: 'fadeIn 1s ease 1.5s forwards',
        }}
      >
        <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--text-muted)', fontFamily: "'Space Grotesk', sans-serif" }}>
          SCROLL
        </span>
        <div
          style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, var(--accent-copper), transparent)',
            animation: 'float 2s ease-in-out infinite',
          }}
        />
      </div>
    </section>
  )
}
