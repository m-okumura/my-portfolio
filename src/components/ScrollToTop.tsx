import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUp } from 'lucide-react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      // 300px以上スクロールしたら表示
      if (window.scrollY > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility, { passive: true })

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  const scrollToTop = () => {
    // iOSでのスクロール問題を避けるため、behavior: 'smooth'を使わずにrequestAnimationFrameを使用
    const scrollToTopSmooth = () => {
      const currentScroll = window.pageYOffset || document.documentElement.scrollTop
      if (currentScroll > 0) {
        window.requestAnimationFrame(scrollToTopSmooth)
        window.scrollTo(0, currentScroll - currentScroll / 8)
      } else {
        window.scrollTo(0, 0)
      }
    }
    scrollToTopSmooth()
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 bg-gray-800 hover:bg-gray-900 active:bg-gray-700 text-white border-none rounded-full w-14 h-14 sm:w-16 sm:h-16 cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group touch-manipulation"
          aria-label="ページトップに戻る"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-7 h-7 sm:w-8 sm:h-8 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

export default ScrollToTop

