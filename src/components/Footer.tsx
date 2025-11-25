import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900 text-gray-300 py-12 border-t border-white/10">
      <div className="section-container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-3 text-lg">
            © {new Date().getFullYear()} My Portfolio. All rights reserved.
          </p>
          <motion.p
            className="text-sm text-gray-400 flex items-center justify-center gap-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 1 }}
            >
              <Heart className="w-4 h-4 text-pink-500 fill-pink-500" />
            </motion.span>
            using
            <span className="gradient-text font-semibold">React</span>,
            <span className="gradient-text font-semibold">TypeScript</span>, and
            <span className="gradient-text font-semibold">Tailwind CSS</span>
          </motion.p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

