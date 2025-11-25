import { motion } from 'framer-motion'
import { ArrowDown, Sparkles } from 'lucide-react'

const Hero = () => {
  const getRandomPosition = () => {
    if (typeof window !== 'undefined') {
      return {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
      }
    }
    return { x: Math.random() * 1000, y: Math.random() * 1000 }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/50 to-gray-900 animate-gradient"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,211,238,0.1),transparent_50%)]"></div>
      
      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => {
        const pos = getRandomPosition()
        return (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full"
            initial={{
              x: pos.x,
              y: pos.y,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              y: [null, pos.y - Math.random() * 100 - 50],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        )
      })}

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <Sparkles className="w-16 h-16 mx-auto text-cyan-400 animate-pulse-slow" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="gradient-text glow">こんにちは、</span>
            <br />
            <span className="text-white">私は</span>
            <span className="gradient-text">開発者</span>
            <span className="text-white">です</span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            美しく機能的な
            <span className="text-cyan-400 font-semibold"> Webアプリケーション</span>
            を
            <br className="hidden md:block" />
            作成することを愛しています
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              プロジェクトを見る
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              お問い合わせ
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, repeat: Infinity, repeatType: 'reverse', duration: 2 }}
          >
            <a href="#about" className="inline-block group">
              <motion.div
                className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:shadow-neon transition-all"
                whileHover={{ scale: 1.1 }}
              >
                <ArrowDown className="w-6 h-6 text-cyan-400 animate-bounce" />
              </motion.div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

