import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import profilePhoto from '../assets/okumuram.jpeg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-100"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(107,114,128,0.08),transparent_50%)]"></div>

      {/* Profile Photo - Top Right */}
      <motion.div
        className="absolute top-8 right-8 md:top-16 md:right-16 z-20"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gray-400 shadow-lg bg-gray-50">
          <img
            src={profilePhoto}
            alt="奧村 宗久"
            className="w-full h-full object-cover"
          />
        </div>
      </motion.div>

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="text-gray-900">奧村 宗久</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            ECサイト構築・運用、業務システム開発において
            <br className="hidden md:block" />
            <span className="text-gray-700 font-medium">20年以上の実績</span>
            を持つITプロフェッショナルです
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-gray-500 mb-12 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            Yahoo!向けSaaSプロダクトの0→1立ち上げからグロース、
            <br className="hidden md:block" />
            大手ファッションブランドのECサイト構築など、
            <br className="hidden md:block" />
            ビジネス成果にコミットしたシステム開発を推進してきました
          </motion.p>

          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <a href="#about" className="inline-block group">
              <motion.div
                className="w-12 h-12 rounded-full bg-gray-200 border border-gray-400 flex items-center justify-center group-hover:border-gray-500 transition-all shadow-sm"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowDown className="w-5 h-5 text-gray-600 animate-bounce" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

