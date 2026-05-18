interface FooterProps {
  onOpenDiagnostic: () => void
}

export default function Footer({ onOpenDiagnostic }: FooterProps) {
  return (
    <footer
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border)',
        padding: '3rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '2.5rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid var(--border)',
            marginBottom: '2rem',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '0.75rem' }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                }}
              >
                Tinta<span style={{ color: 'var(--accent-copper)' }}>OS</span>
              </span>
            </div>
            <p
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: '0.9rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                maxWidth: '240px',
              }}
            >
              Sistema vivo para tatuadores. Una plataforma que crece contigo.
            </p>
          </div>

          {/* Status */}
          <div>
            <div
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                color: 'var(--text-muted)',
                marginBottom: '1rem',
              }}
            >
              ESTADO
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
              {[
                { dot: '#4a9a4a', label: 'Landing pública activa' },
                { dot: 'var(--accent-copper)', label: 'Diagnóstico abierto' },
                { dot: 'var(--text-muted)', label: 'Plataforma en construcción' },
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: item.dot, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.7,
                marginBottom: '1.25rem',
              }}
            >
              ¿Eres tatuador? Tu voz puede moldear lo que construimos.
            </p>
            <button className="btn-primary" onClick={onOpenDiagnostic} style={{ fontSize: '0.82rem', padding: '0.7rem 1.4rem' }}>
              Responder diagnóstico
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '1rem',
          }}
        >
          <p
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
            }}
          >
            © 2025 TintaOS · En construcción · Todos los derechos reservados
          </p>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '0.85rem',
              color: 'var(--text-muted)',
            }}
          >
            Tu arte merece un sistema a su altura.
          </p>
        </div>
      </div>
    </footer>
  )
}
