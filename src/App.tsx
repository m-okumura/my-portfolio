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
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      <Header isScrolled={isScrolled} />
      <main>
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


