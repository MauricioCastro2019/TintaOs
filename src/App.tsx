import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import NotAllEqual from './components/NotAllEqual'
import Ecosystem from './components/Ecosystem'
import Evolution from './components/Evolution'
import Manifesto from './components/Manifesto'
import DiagnosticInvite from './components/DiagnosticInvite'
import Diagnostic from './components/Diagnostic'
import Footer from './components/Footer'

export default function App() {
  const [showDiagnostic, setShowDiagnostic] = useState(false)

  function openDiagnostic() {
    setShowDiagnostic(true)
    // Prevent background scroll while diagnostic is open
    document.body.style.overflow = 'hidden'
  }

  function closeDiagnostic() {
    setShowDiagnostic(false)
    document.body.style.overflow = ''
  }

  return (
    <>
      {/* Landing page */}
      <Header onOpenDiagnostic={openDiagnostic} />

      <main>
        <Hero onOpenDiagnostic={openDiagnostic} />
        <Problem />
        <NotAllEqual onOpenDiagnostic={openDiagnostic} />
        <Ecosystem />
        <Evolution />
        <Manifesto />
        <DiagnosticInvite onOpenDiagnostic={openDiagnostic} />
      </main>

      <Footer onOpenDiagnostic={openDiagnostic} />

      {/* Diagnostic overlay */}
      {showDiagnostic && <Diagnostic onClose={closeDiagnostic} />}
    </>
  )
}
