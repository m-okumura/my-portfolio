import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Career from './components/Career'
import Hobbies from './components/Hobbies'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import { initScrollAnimation } from './utils/scrollAnimation'

function App() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // スクロールアニメーションを初期化
  useEffect(() => {
    // DOMが完全に読み込まれた後にアニメーションを初期化
    const initAnimation = () => {
      // 少し遅延させて、すべてのコンポーネントがレンダリングされるのを待つ
      setTimeout(() => {
        initScrollAnimation()
      }, 200)
    }

    // ページが完全に読み込まれたら初期化
    if (document.readyState === 'complete') {
      initAnimation()
    } else {
      window.addEventListener('load', initAnimation)
      return () => window.removeEventListener('load', initAnimation)
    }
  }, [])

  return (
    <div className="min-h-screen overflow-x-hidden max-w-full" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
      <Header isScrolled={isScrolled} />
      <main className="overflow-x-hidden max-w-full" style={{ WebkitOverflowScrolling: 'touch', touchAction: 'pan-y' }}>
        <Hero />
        <About />
        <Skills />
        <Career />
        <Hobbies />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}

export default App


