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
    <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-copper)', borderRadius: '8px', padding: '1.5rem', marginTop: '2rem' }}>
      <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent-copper)', marginBottom: '1.25rem' }}>
        Tu perfil detectado
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1.25rem' }}>
        <div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.08em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Etapa detectada</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', padding: '0.375rem 0.875rem', background: 'rgba(42,102,54,0.12)', border: '1px solid rgba(111,207,132,0.3)', borderRadius: '100px', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-copper-light)' }}>
            {etapa}
          </div>
        </div>

        {topEstilos.length > 0 && (
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.08em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Estilos</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {topEstilos.map(e => <span key={e} className="tag" style={{ fontSize: '0.72rem' }}>{e}</span>)}
            </div>
          </div>
        )}

        {topDolores.length > 0 && (
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.08em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Prioridades</div>
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

        {topHerramientas.length > 0 && (
          <div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: "'Barlow Condensed', sans-serif", letterSpacing: '0.08em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '0.5rem' }}>Intereses top</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
              {topHerramientas.map(h => (
                <span key={h} style={{ padding: '0.25rem 0.625rem', background: 'rgba(26,74,40,0.2)', border: '1px solid rgba(62,160,85,0.3)', borderRadius: '100px', fontSize: '0.72rem', color: '#6fcf84', fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600 }}>
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
    <div className="overlay" style={{ alignItems: 'center', justifyContent: 'center', padding: '2rem 1.25rem' }}>
      <div style={{ position: 'fixed', top: '30%', left: '50%', transform: 'translateX(-50%)', width: '500px', height: '400px', background: 'radial-gradient(ellipse, rgba(42,102,54,0.15) 0%, transparent 65%)', pointerEvents: 'none' }} />

      <div style={{ maxWidth: '580px', width: '100%', textAlign: 'center', animation: 'fadeUp 0.7s ease forwards' }}>
        <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'linear-gradient(135deg, var(--accent-wine-light), var(--accent-copper-light))', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.75rem', boxShadow: '0 0 40px rgba(111,207,132,0.3)' }}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h1 style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: 'clamp(2rem, 6vw, 3rem)', letterSpacing: '0.04em', lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.25rem' }}>
          Gracias por ayudar a{' '}
          <em style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: 'var(--accent-copper-light)', textTransform: 'none', letterSpacing: 0 }}>
            dibujar BlackVein.
          </em>
        </h1>

        <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
          Tus respuestas ya forman parte de la primera lectura real de este proyecto. No queremos construir una app genérica: queremos entender qué necesita un tatuador como tú para crecer con más claridad, más orden y más identidad.
        </p>

        <blockquote style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--accent-copper-light)', lineHeight: 1.65, marginBottom: '1.5rem', border: 'none', padding: 0 }}>
          El arte deja marca en la piel. Las buenas herramientas pueden dejar marca en una carrera.
        </blockquote>

        <ProfileSummary data={data} />

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginTop: '2rem' }}>
          <button className="btn-primary" onClick={onClose} style={{ fontSize: '0.88rem' }}>
            Volver al inicio
          </button>
          <a href="#vision" className="btn-secondary" onClick={onClose} style={{ fontSize: '0.88rem', textDecoration: 'none' }}>
            Explorar la visión otra vez
          </a>
        </div>

        <p style={{ marginTop: '1.75rem', fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.72rem', letterSpacing: '0.08em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
          BlackVein · En construcción
        </p>
      </div>
    </div>
  )
}
