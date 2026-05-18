import { useState, useEffect } from 'react'

interface HeaderProps {
  onOpenDiagnostic: () => void
}

export default function Header({ onOpenDiagnostic }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { label: 'Visión', href: '#vision' },
    { label: 'Posibilidades', href: '#posibilidades' },
    { label: 'Etapas', href: '#etapas' },
    { label: 'Diagnóstico', href: '#diagnostico' },
  ]

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 8000,
        transition: 'background 0.4s ease, border-color 0.4s ease',
        background: scrolled ? 'rgba(8,8,8,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          height: '70px',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
          <span
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: 700,
              fontSize: '1.35rem',
              letterSpacing: '-0.03em',
              color: '#f2ede4',
            }}
          >
            Tinta<span style={{ color: 'var(--accent-copper)' }}>OS</span>
          </span>
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: '0.68rem',
              letterSpacing: '0.1em',
              color: 'var(--text-muted)',
              marginTop: '2px',
            }}
          >
            Sistema vivo para tatuadores
          </span>
        </a>

        {/* Desktop Nav */}
        <nav
          style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 500,
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary" onClick={onOpenDiagnostic} style={{ padding: '0.6rem 1.4rem', fontSize: '0.8rem' }}>
            Responder diagnóstico
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '0.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '5px',
          }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block',
                width: '22px',
                height: '2px',
                background: 'var(--text-primary)',
                borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform:
                  menuOpen && i === 0
                    ? 'translateY(7px) rotate(45deg)'
                    : menuOpen && i === 2
                    ? 'translateY(-7px) rotate(-45deg)'
                    : menuOpen && i === 1
                    ? 'scaleX(0)'
                    : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          style={{
            background: 'rgba(10,10,10,0.98)',
            borderTop: '1px solid var(--border)',
            padding: '1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}
        >
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                textDecoration: 'none',
              }}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary" onClick={() => { onOpenDiagnostic(); setMenuOpen(false) }}>
            Responder diagnóstico
          </button>
        </div>
      )}
    </header>
  )
}
