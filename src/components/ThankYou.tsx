import type { DiagnosticData } from '../types/diagnostic'

interface ThankYouProps {
  data: DiagnosticData
  onClose: () => void
}

function ProfileSummary({ data }: { data: DiagnosticData }) {
  const etapaLabels: Record<string, string> = {
    aprendiendo: 'Aprendiendo / practicando',
    clientes_ocasionales: 'Clientes ocasionales',
    clientes_constantes: 'Agenda activa',
    vivo_del_tatuaje: 'Vive del tatuaje',
    estudio_propio: 'Estudio propio',
    coordino_tatuadores: 'Coordina tatuadores',
    otro: 'Etapa única',
  }

  const etapa = etapaLabels[data.etapaActual] || 'Sin definir'
  const topDolores = data.dolores.slice(0, 3)
  const topHerramientas = data.herramientasInteres.slice(0, 4)
  const topEstilos = (data.estilos as string[]).slice(0, 3)

  return (
    <div
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-copper)',
        borderRadius: '8px',
        padding: '2rem',
        marginTop: '2.5rem',
      }}
    >
      <div
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 600,
          letterSpacing: '0.12em',
          color: 'var(--accent-copper)',
          marginBottom: '1.5rem',
        }}
      >
        TU PERFIL DETECTADO
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
        {/* Etapa */}
        <div>
          <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
            ETAPA DETECTADA
          </div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.375rem 0.875rem',
              background: 'rgba(184,115,51,0.1)',
              border: '1px solid rgba(184,115,51,0.3)',
              borderRadius: '100px',
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '0.82rem',
              fontWeight: 600,
              color: 'var(--accent-copper-light)',
            }}
          >
            {etapa}
          </div>
        </div>

        {/* Estilos */}
        {topEstilos.length > 0 && (
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              ESTILOS
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {topEstilos.map(e => (
                <span key={e} className="tag" style={{ fontSize: '0.72rem' }}>{e}</span>
              ))}
            </div>
          </div>
        )}

        {/* Top dolores */}
        {topDolores.length > 0 && (
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              PRIORIDADES
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem' }}>
              {topDolores.map((d, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 4, height: 4, borderRadius: '50%', background: 'var(--accent-wine-light)', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'var(--text-secondary)', lineHeight: 1.4 }}>{d}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Top herramientas */}
        {topHerramientas.length > 0 && (
          <div>
            <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', fontFamily: "'Space Grotesk', sans-serif", letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
              INTERESES TOP
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {topHerramientas.map(h => (
                <span
                  key={h}
                  style={{
                    padding: '0.25rem 0.625rem',
                    background: 'rgba(26,74,40,0.2)',
                    border: '1px solid rgba(62,160,85,0.3)',
                    borderRadius: '100px',
                    fontSize: '0.72rem',
                    color: '#6fcf84',
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default function ThankYou({ data, onClose }: ThankYouProps) {
  return (
    <div
      className="overlay"
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
      }}
    >
      {/* Glow bg */}
      <div
        style={{
          position: 'fixed',
          top: '30%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(42,102,54,0.15) 0%, transparent 65%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '600px',
          width: '100%',
          textAlign: 'center',
          animation: 'fadeUp 0.7s ease',
        }}
      >
        {/* Icon / mark */}
        <div
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--accent-wine-light), var(--accent-copper-light))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 2rem',
            boxShadow: '0 0 40px rgba(111,207,132,0.3)',
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
            letterSpacing: '-0.025em',
            lineHeight: 1.15,
            color: 'var(--text-primary)',
            marginBottom: '1.5rem',
          }}
        >
          Gracias por ayudar a{' '}
          <em
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: 'var(--accent-copper-light)',
            }}
          >
            dibujar TintaOS.
          </em>
        </h1>

        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.8,
            marginBottom: '1.5rem',
          }}
        >
          Tus respuestas ya forman parte de la primera lectura real de este proyecto. No queremos construir una app genérica: queremos entender qué necesita un tatuador como tú para crecer con más claridad, más orden y más identidad.
        </p>

        <blockquote
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: '1.1rem',
            color: 'var(--accent-copper-light)',
            lineHeight: 1.65,
            marginBottom: '2rem',
            borderLeft: 'none',
          }}
        >
          El arte deja marca en la piel. Las buenas herramientas pueden dejar marca en una carrera.
        </blockquote>

        {/* Profile summary */}
        <ProfileSummary data={data} />

        {/* Actions */}
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2.5rem' }}>
          <button
            className="btn-primary"
            onClick={onClose}
            style={{ fontSize: '0.9rem' }}
          >
            Volver al inicio
          </button>
          <a
            href="#vision"
            className="btn-secondary"
            onClick={onClose}
            style={{ fontSize: '0.9rem', textDecoration: 'none' }}
          >
            Explorar la visión otra vez
          </a>
        </div>

        <p
          style={{
            marginTop: '2rem',
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: '0.72rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.05em',
          }}
        >
          TintaOS · En construcción
        </p>
      </div>
    </div>
  )
}
