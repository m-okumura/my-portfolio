import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="relative py-12 border-t" style={{ backgroundColor: '#2c3e50', borderColor: '#34495e' }}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">連絡先</h3>
            <div className="space-y-3">
              <a
                href="mailto:okumuram.gm@gmail.com"
                className="flex items-center gap-3 text-gray-200 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>okumuram.gm@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="text-center pt-8 border-t" style={{ borderColor: '#34495e' }}>
            <p className="text-sm text-gray-300">
              © {new Date().getFullYear()} 奧村 宗久. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

