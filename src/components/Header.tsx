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
        background: scrolled ? 'rgba(8,8,8,0.96)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}
      >
        {/* Logo */}
        <a href="#" style={{ textDecoration: 'none', lineHeight: 1, flexShrink: 0 }}>
          <span
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontWeight: 400,
              fontSize: '1.6rem',
              letterSpacing: '0.12em',
              color: '#eef2ee',
              display: 'block',
            }}
          >
            Black<span style={{ color: 'var(--accent-copper-light)' }}>Vein</span>
          </span>
          <span
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontStyle: 'italic',
              fontSize: '0.65rem',
              letterSpacing: '0.08em',
              color: 'var(--text-muted)',
              display: 'block',
              marginTop: '1px',
            }}
          >
            El sistema del tatuador real
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '2rem' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: '0.9rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                textTransform: 'uppercase',
                transition: 'color 0.2s ease',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--text-primary)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary" onClick={onOpenDiagnostic} style={{ padding: '0.55rem 1.25rem', fontSize: '0.78rem' }}>
            Diagnóstico
          </button>
        </nav>

        {/* Mobile burger */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menú"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '0.5rem', display: 'flex', flexDirection: 'column', gap: '5px', flexShrink: 0 }}
        >
          {[0, 1, 2].map(i => (
            <span
              key={i}
              style={{
                display: 'block', width: '22px', height: '2px',
                background: 'var(--text-primary)', borderRadius: '2px',
                transition: 'all 0.3s ease',
                transform: menuOpen && i === 0 ? 'translateY(7px) rotate(45deg)'
                  : menuOpen && i === 2 ? 'translateY(-7px) rotate(-45deg)'
                  : menuOpen && i === 1 ? 'scaleX(0)' : 'none',
              }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: 'rgba(8,8,8,0.98)', borderTop: '1px solid var(--border)', padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.4rem', letterSpacing: '0.1em', color: 'var(--text-primary)', textDecoration: 'none' }}
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary" onClick={() => { onOpenDiagnostic(); setMenuOpen(false) }} style={{ marginTop: '0.25rem', fontSize: '0.85rem' }}>
            Hacer diagnóstico →
          </button>
        </div>
      )}
    </header>
  )
}
