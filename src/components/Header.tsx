import { useState } from 'react'
import { motion } from 'framer-motion'

interface HeaderProps {
  isScrolled: boolean
}

const Header = ({ isScrolled }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: 'ホーム', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'スキル', href: '#skills' },
    { name: 'プロジェクト', href: '#projects' },
    { name: 'お問い合わせ', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass shadow-lg shadow-cyan-500/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="section-container py-4">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-2xl font-black gradient-text"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Portfolio
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-gray-300 hover:text-cyan-400 transition-colors font-medium px-4 py-2 rounded-full hover:bg-white/5"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-cyan-400 p-2 rounded-full hover:bg-white/10 transition-colors"
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4 glass rounded-2xl p-4"
          >
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="block py-3 px-4 text-gray-300 hover:text-cyan-400 hover:bg-white/5 rounded-full transition-all font-medium"
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ x: 5 }}
              >
                {item.name}
              </motion.a>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header

