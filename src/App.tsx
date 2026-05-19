import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Problem from './components/Problem'
import NotAllEqual from './components/NotAllEqual'
import Ecosystem from './components/Ecosystem'
import Evolution from './components/Evolution'
import Manifesto from './components/Manifesto'
import DiagnosticInvite from './components/DiagnosticInvite'
import Diagnostic from './components/Diagnostic'
import StickyBar from './components/StickyBar'
import Footer from './components/Footer'

export default function App() {
  const [showDiagnostic, setShowDiagnostic] = useState(false)
  const [stickyVisible, setStickyVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show sticky bar after scrolling past ~60% of first viewport
      setStickyVisible(window.scrollY > window.innerHeight * 0.6)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function openDiagnostic() {
    setShowDiagnostic(true)
    document.body.style.overflow = 'hidden'
  }

  function closeDiagnostic() {
    setShowDiagnostic(false)
    document.body.style.overflow = ''
  }

  return (
    <>
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

      {/* Mobile sticky CTA — hidden on desktop via CSS */}
      <StickyBar onOpenDiagnostic={openDiagnostic} visible={stickyVisible && !showDiagnostic} />

      {/* Diagnostic overlay */}
      {showDiagnostic && <Diagnostic onClose={closeDiagnostic} />}
    </>
  )
}
