import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { name: 'フロントエンド開発', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'UI/UXデザイン', level: 80, color: 'from-blue-400 to-purple-500' },
    { name: 'バックエンド開発', level: 70, color: 'from-purple-400 to-pink-500' },
  ]

  return (
    <section id="about" className="section-container relative">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text">About</span>
            <span className="text-white"> Me</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              自己紹介
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                こんにちは！私は情熱的な
                <span className="text-cyan-400 font-semibold">フロントエンド開発者</span>です。
                ユーザー体験を最優先に考え、美しく機能的なWebアプリケーションを
                作成することを専門としています。
              </p>
              <p>
                <span className="text-blue-400 font-semibold">React</span>、
                <span className="text-blue-400 font-semibold">TypeScript</span>、
                <span className="text-blue-400 font-semibold">Next.js</span>などのモダンな技術スタックを使用して、
                スケーラブルで保守性の高いアプリケーションを構築しています。
              </p>
              <p>
                常に最新の技術トレンドを学び、より良いソリューションを提供することを
                心がけています。
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-2xl font-bold mb-8 gradient-text">スキルレベル</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300 font-semibold">{skill.name}</span>
                    <span className="text-cyan-400 font-bold text-lg">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-800/50 rounded-full h-3 overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full bg-gradient-to-r ${skill.color} shadow-lg`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: index * 0.2, ease: "easeOut" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default About

