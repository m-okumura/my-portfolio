import { motion } from 'framer-motion'
import profilePhoto from '../assets/okumuram.jpeg'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-x-hidden bg-white">

      <div className="section-container text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Photo - Center */}
          <motion.div
            className="flex justify-center mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] lg:w-[200px] lg:h-[200px] rounded-full overflow-hidden border-4 border-gray-400 shadow-xl bg-gray-50">
              <img
                src={profilePhoto}
                alt="奧村 宗久"
                className="w-full h-full object-cover"
                loading="eager"
                width="200"
                height="200"
              />
            </div>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="text-gray-900">奧村 宗久</span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            51歳、現役エンジニア兼プロダクトマネージャーです
          </motion.p>

          {/* 数字で見る実績 - ファーストビュー */}
          <motion.div
            className="mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="border-t border-b border-gray-300 py-6">
              <div className="grid grid-cols-3 gap-4 md:gap-8">
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">
                    20+
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    年
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">
                    経験
                  </div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.65 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">
                    10万+
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    ユーザー
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">
                    獲得
                  </div>
                </motion.div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-1">
                    99.5%
                  </div>
                  <div className="text-sm md:text-base text-gray-600 font-medium">
                    稼働率
                  </div>
                  <div className="text-xs md:text-sm text-gray-500 mt-1">
                    維持
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CTAボタン */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75 }}
          >
            <motion.a
              href="mailto:okumuram.gm@gmail.com"
              className="px-8 py-4 bg-gray-800 text-white rounded-full font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              お気軽にご連絡ください
            </motion.a>
            <motion.a
              href="https://github.com/m-okumura"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white text-gray-800 border-2 border-gray-800 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              GitHubを見る
            </motion.a>
          </motion.div>

          <motion.div
            className="text-base md:text-lg text-gray-600 mb-8 max-w-xl mx-auto space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <p>🚀 Yahoo!向けSaaSを0から立ち上げ、10万ユーザー獲得</p>
            <p>💪 最大10名のチームマネジメント経験</p>
            <p>🎯 ECサイト・SaaS開発で20年以上の実績</p>
            <p>🏃 週末は登山とコーディングを楽しむアクティブ派</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

