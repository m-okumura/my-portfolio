import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Linkedin, Github, Twitter } from 'lucide-react'

const Contact = () => {
  return (
    <section id="contact" className="section-container relative">
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
            <span className="gradient-text">お問い合わせ</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">
              連絡先情報
            </h3>
            <div className="space-y-6">
              <motion.a
                href="mailto:your.email@example.com"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Mail className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <p className="text-sm text-gray-400">your.email@example.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+1234567890"
                className="flex items-center gap-4 text-gray-300 hover:text-cyan-400 transition-colors group"
                whileHover={{ x: 5 }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                  <Phone className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">電話</p>
                  <p className="text-sm text-gray-400">+1234567890</p>
                </div>
              </motion.a>

              <div className="flex items-center gap-4 text-gray-300">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <MapPin className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-white">所在地</p>
                  <p className="text-sm text-gray-400">東京, 日本</p>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-xl font-bold mb-6 text-white">
                ソーシャルメディア
              </h4>
              <div className="flex gap-4">
                <motion.a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 text-white flex items-center justify-center hover:shadow-neon transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 text-white flex items-center justify-center hover:shadow-neon transition-all"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="w-6 h-6" />
                </motion.a>
                <motion.a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-white flex items-center justify-center hover:shadow-neon transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Twitter className="w-6 h-6" />
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 backdrop-blur-xl"
          >
            <h3 className="text-3xl font-bold mb-8 gradient-text">
              メッセージを送る
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 mb-2">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all"
                  placeholder="お名前を入力"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all"
                  placeholder="email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">
                  メッセージ
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="w-full px-5 py-4 bg-white/5 backdrop-blur-sm border border-white/20 rounded-3xl text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 outline-none transition-all resize-none"
                  placeholder="メッセージを入力"
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="btn-primary w-full"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                送信
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact

