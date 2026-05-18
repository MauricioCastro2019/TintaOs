import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'

const chaoticMessages = [
  '¿cuánto por este diseño?',
  'te mando depósito mañana',
  '¿qué cuidados lleva?',
  'espérame, ya te confirmo',
  'se me acabaron agujas 😬',
  '¿tienes para el miércoles?',
  'mis diseños donde los tengo?',
  'creo que canceló...',
  '¿cuánto mide aprox?',
  'ya pagué, te mando foto',
]

export default function Problem() {
  const sectionRef = useReveal() as React.MutableRefObject<HTMLElement>
  const messagesRef = useRef<HTMLDivElement>(null)

  return (
    <section className="section" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
      {/* Top divider */}
      <div className="divider-copper" />

      <div className="container">
        {/* Label */}
        <div className="reveal" ref={sectionRef as React.MutableRefObject<HTMLDivElement>}>
          <span className="section-label">El problema</span>
        </div>

        {/* Main headline */}
        <div className="reveal reveal-delay-1" ref={useReveal() as React.MutableRefObject<HTMLDivElement>}>
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 4vw, 3rem)',
              letterSpacing: '-0.025em',
              lineHeight: 1.15,
              maxWidth: '700px',
              marginBottom: '2rem',
              color: 'var(--text-primary)',
            }}
          >
            Mucho del trabajo del tatuador ocurre{' '}
            <em
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: 'var(--accent-copper-light)',
              }}
            >
              fuera del tatuaje.
            </em>
          </h2>
        </div>

        {/* Two-column layout */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: '3rem',
            alignItems: 'start',
          }}
        >
          {/* Left — Chaos */}
          <div className="reveal reveal-delay-2" ref={useReveal() as React.MutableRefObject<HTMLDivElement>}>
            <div
              style={{
                position: 'relative',
                padding: '2rem',
                background: 'rgba(26, 74, 40, 0.06)',
                border: '1px solid rgba(42, 102, 54, 0.2)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  fontSize: '0.68rem',
                  color: 'rgba(111,207,132,0.7)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  letterSpacing: '0.1em',
                  fontWeight: 600,
                }}
              >
                SIN SISTEMA
              </div>

              <div
                ref={messagesRef}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.625rem',
                }}
              >
                {chaoticMessages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      display: 'inline-flex',
                      alignSelf: i % 2 === 0 ? 'flex-start' : 'flex-end',
                      padding: '0.5rem 0.875rem',
                      background: i % 2 === 0
                        ? 'rgba(255,255,255,0.05)'
                        : 'rgba(26,74,40,0.15)',
                      border: '1px solid',
                      borderColor: i % 2 === 0 ? 'var(--border)' : 'rgba(42,102,54,0.3)',
                      borderRadius: i % 2 === 0 ? '12px 12px 12px 4px' : '12px 12px 4px 12px',
                      fontSize: '0.8rem',
                      color: i % 2 === 0 ? 'var(--text-secondary)' : 'rgba(180,230,190,0.85)',
                      fontFamily: "'Inter', sans-serif",
                      maxWidth: '85%',
                      opacity: 0,
                      animation: `fadeUp 0.4s ease ${0.05 * i + 0.3}s forwards`,
                    }}
                  >
                    {msg}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Copy + Order card */}
          <div className="reveal reveal-delay-3" ref={useReveal() as React.MutableRefObject<HTMLDivElement>}>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Cotizar por chat. Pedir referencias. Recordar citas. Confirmar anticipos. Buscar diseños. Explicar cuidados. Responder lo mismo una y otra vez. Publicar contenido cuando alcanza el tiempo. Controlar insumos{' '}
              <em style={{ color: 'var(--text-primary)', fontStyle: 'italic' }}>"más o menos de memoria".</em>
            </p>

            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '1rem',
                color: 'var(--text-primary)',
                lineHeight: 1.8,
                marginBottom: '2rem',
              }}
            >
              Tatuar es el centro.
              <br />
              Pero alrededor hay un sistema entero que casi siempre se improvisa.
            </p>

            {/* Order card */}
            <div
              className="card"
              style={{
                padding: '1.5rem',
                borderColor: 'rgba(184,115,51,0.2)',
                background: 'rgba(184,115,51,0.04)',
              }}
            >
              <div style={{ fontSize: '0.68rem', color: 'var(--accent-copper)', letterSpacing: '0.12em', fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", marginBottom: '1rem' }}>
                CON TINTAOS
              </div>
              {[
                'Solicitudes claras desde el inicio',
                'Agenda sin mensajes perdidos',
                'Anticipos gestionados automáticamente',
                'Portafolio que convierte visitas en citas',
                'Control de insumos en tiempo real',
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    padding: '0.5rem 0',
                    borderBottom: i < 4 ? '1px solid var(--border)' : 'none',
                  }}
                >
                  <div
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: '50%',
                      background: 'var(--accent-copper)',
                      flexShrink: 0,
                    }}
                  />
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontFamily: "'Inter', sans-serif" }}>
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <blockquote
              className="quote-block"
              style={{ marginTop: '2rem' }}
            >
              TintaOS nace para preguntarse: ¿qué pasaría si ese sistema estuviera bien pensado desde el principio?
            </blockquote>
          </div>
        </div>
      </div>

      <div className="divider-copper" style={{ marginTop: '4rem' }} />
    </section>
  )
}
