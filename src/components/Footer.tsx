interface FooterProps {
  onOpenDiagnostic: () => void
}

export default function Footer({ onOpenDiagnostic }: FooterProps) {
  return (
    <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '2.5rem 0' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border)', marginBottom: '1.5rem' }}>
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '0.625rem' }}>
              <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontWeight: 400, fontSize: '1.5rem', letterSpacing: '0.12em', color: 'var(--text-primary)' }}>
                Black<span style={{ color: 'var(--accent-copper-light)' }}>Vein</span>
              </span>
            </div>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6, maxWidth: '220px' }}>
              El sistema del tatuador real. Una plataforma que crece contigo.
            </p>
          </div>

          {/* Status */}
          <div>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: '0.72rem', fontWeight: 400, letterSpacing: '0.1em', color: 'var(--text-muted)', marginBottom: '0.875rem', textTransform: 'uppercase' }}>
              Estado
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { dot: '#4a9a4a', label: 'Landing pública activa' },
                { dot: 'var(--accent-copper)', label: 'Diagnóstico abierto' },
                { dot: 'var(--text-muted)', label: 'Plataforma en construcción' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1rem' }}>
              ¿Eres tatuador? Tu voz puede moldear lo que construimos.
            </p>
            <button className="btn-primary" onClick={onOpenDiagnostic} style={{ fontSize: '0.8rem', padding: '0.65rem 1.25rem' }}>
              Responder diagnóstico
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>
            © 2025 BlackVein · En construcción · Todos los derechos reservados
          </p>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
            Tu arte merece un sistema a su altura.
          </p>
        </div>
      </div>
    </footer>
  )
}
