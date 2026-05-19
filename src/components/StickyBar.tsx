interface StickyBarProps {
  onOpenDiagnostic: () => void
  visible: boolean
}

export default function StickyBar({ onOpenDiagnostic, visible }: StickyBarProps) {
  return (
    <div className={`sticky-bar ${visible ? 'visible' : ''}`}>
      <p style={{ flex: 1, fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.75rem', color: 'var(--text-muted)', lineHeight: 1.3, margin: 0 }}>
        Ayuda a construir TintaOS
      </p>
      <button
        className="btn-primary"
        onClick={onOpenDiagnostic}
        style={{ fontSize: '0.8rem', padding: '0.7rem 1.25rem', whiteSpace: 'nowrap', flexShrink: 0 }}
      >
        Hacer diagnóstico →
      </button>
    </div>
  )
}
