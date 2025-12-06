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
  const [isReady, setIsReady] = useState(false)

  // iOSでのスクロール問題を防ぐために、初期化を確実にする
  useEffect(() => {
    // DOMが準備できたらすぐにスクロールを有効化
    const enableScroll = () => {
      // bodyの高さを確実に設定
      document.body.style.height = 'auto'
      document.body.style.overflow = 'auto'
      setIsReady(true)
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', enableScroll)
    } else {
      enableScroll()
    }

    return () => {
      document.removeEventListener('DOMContentLoaded', enableScroll)
    }
  }, [])

  useEffect(() => {
    if (!isReady) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isReady])

  // スクロールアニメーションを初期化
  useEffect(() => {
    if (!isReady) return

    // DOMが完全に読み込まれた後にアニメーションを初期化
    const initAnimation = () => {
      // 少し遅延させて、すべてのコンポーネントがレンダリングされるのを待つ
      requestAnimationFrame(() => {
        setTimeout(() => {
          initScrollAnimation()
        }, 100)
      })
    }

    // ページが完全に読み込まれたら初期化
    if (document.readyState === 'complete') {
      initAnimation()
    } else {
      window.addEventListener('load', initAnimation)
      return () => window.removeEventListener('load', initAnimation)
    }
  }, [isReady])

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
      <ScrollToTop />
    </div>
  )
}

export default App


