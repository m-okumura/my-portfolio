import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Career from './components/Career'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full">
      <Header isScrolled={isScrolled} />
      <main className="overflow-x-hidden max-w-full">
        <Hero />
        <About />
        <Skills />
        <Career />
        <Hobbies />
      </main>
      <Footer />
    </div>
  )
}

export default App


