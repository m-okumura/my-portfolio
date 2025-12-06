import { useState } from 'react'
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

  return (
    <>
      {/* 背景オーバーレイ */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
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
              className="text-gray-600 p-2 rounded-full hover:bg-gray-100 transition-colors relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="メニュー"
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
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative mt-4 pb-4 bg-white/95 backdrop-blur-md border border-gray-200 rounded-2xl p-4 shadow-lg z-50"
              onClick={(e) => e.stopPropagation()}
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
            </motion.div>
          )}
        </nav>
      </motion.header>
    </>
  )
}

export default Header

