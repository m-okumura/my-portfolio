import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code, Briefcase, Heart } from 'lucide-react'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'ホーム', href: '#home', icon: Home },
    { name: 'プロフィール', href: '#about', icon: User },
    { name: 'スキル', href: '#skills', icon: Code },
    { name: '職歴', href: '#career', icon: Briefcase },
    { name: '趣味', href: '#hobbies', icon: Heart },
  ]

  // ESCキーでメニューを閉じる
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isMenuOpen])

  return (
    <>
      {/* スキップリンク（アクセシビリティ） */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-gray-800 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        メインコンテンツへスキップ
      </a>
      
      {/* 背景オーバーレイ */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="section-container py-4">
          <div className="flex items-center justify-end">
            {/* Hamburger Menu Button - Always Visible */}
            <motion.button
              className="text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors relative z-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
              aria-expanded={isMenuOpen}
              aria-controls="navigation-menu"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>

          {/* Navigation Menu */}
          {isMenuOpen && (
            <motion.nav
              id="navigation-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative mt-4 pb-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-4 shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
              role="navigation"
              aria-label="メインナビゲーション"
            >
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all font-medium"
                    onClick={() => setIsMenuOpen(false)}
                    whileHover={{ x: 5 }}
                  >
                    <IconComponent className="w-5 h-5 flex-shrink-0" />
                    <span>{item.name}</span>
                  </motion.a>
                )
              })}
            </motion.nav>
          )}
        </nav>
      </motion.header>
    </>
  )
}

export default Header

