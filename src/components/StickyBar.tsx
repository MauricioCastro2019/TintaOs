interface StickyBarProps {
  onOpenDiagnostic: () => void
  visible: boolean
}

export default function StickyBar({ onOpenDiagnostic, visible }: StickyBarProps) {
  return (
    <div className={`sticky-bar ${visible ? 'visible' : ''}`}>
      <p style={{ flex: 1, fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0.05em', color: 'var(--text-muted)', lineHeight: 1.3, margin: 0, textTransform: 'uppercase' }}>
        Ayuda a construir BlackVein
      </p>
      <button
        className="btn-primary"
        onClick={onOpenDiagnostic}
        style={{ fontSize: '0.82rem', padding: '0.7rem 1.25rem', whiteSpace: 'nowrap', flexShrink: 0 }}
      >
        Hacer diagnóstico →
      </button>
    </div>
  )
}
