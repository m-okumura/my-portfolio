import { motion } from 'framer-motion'
import { useMemo } from 'react'
import { loadResume } from '../utils/loadResume'
import { parseResume, ReactMarkdown, remarkGfm, markdownComponents } from '../utils/parseResume'

const About = () => {
  const resumeData = useMemo(() => {
    const markdown = loadResume()
    return parseResume(markdown)
  }, [])
  return (
    <section id="about" className="section-container relative bg-gray-100">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            プロフィール
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* 基本情報カード */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md">
                <span className="text-3xl">👤</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                基本情報
              </h3>
            </div>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">👤</span>
                  <span className="text-gray-600 text-base font-semibold">氏名</span>
                </div>
                <p className="text-gray-900 font-bold text-xl ml-10">{resumeData.basicInfo.氏名}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📅</span>
                  <span className="text-gray-600 text-base font-semibold">生年月日</span>
                </div>
                <p className="text-gray-900 font-bold text-xl ml-10">{resumeData.basicInfo.生年月日}</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:bg-gray-100 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">📧</span>
                  <span className="text-gray-600 text-base font-semibold">連絡先</span>
                </div>
                <p className="text-gray-900 font-bold text-xl ml-10 break-words">{resumeData.basicInfo.連絡先}</p>
              </div>
            </div>
          </motion.div>

          {/* 学歴カード */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 border-2 border-gray-300 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-8 pb-4 border-b-2 border-gray-200">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md">
                <span className="text-3xl">🎓</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                学歴
              </h3>
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">📅</span>
                    <span className="text-gray-600 text-base font-semibold">{edu.年月}</span>
                  </div>
                  <p className="text-gray-900 font-bold text-xl ml-10">{edu.学歴}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 数字で見る実績 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 border-2 border-gray-300 shadow-lg"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800 text-center">
            📊 数字で見る実績
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* キャリア */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                20+
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium">
                年
              </div>
              <div className="text-base md:text-lg text-gray-700 font-semibold mt-2">
                キャリア
              </div>
            </motion.div>

            {/* ユーザー */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.25 }}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                10万+
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium">
                ユーザー
              </div>
              <div className="text-base md:text-lg text-gray-700 font-semibold mt-2">
                プロダクト立ち上げ
              </div>
            </motion.div>

            {/* プロジェクト規模 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                1.5億円
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium">
                最大規模
              </div>
              <div className="text-base md:text-lg text-gray-700 font-semibold mt-2">
                プロジェクト規模
              </div>
            </motion.div>

            {/* マネジメント */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.35 }}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                10名
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium">
                最大
              </div>
              <div className="text-base md:text-lg text-gray-700 font-semibold mt-2">
                マネジメント経験
              </div>
            </motion.div>

            {/* 稼働率 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="text-center p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow col-span-2 md:col-span-1"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2">
                99.5%
              </div>
              <div className="text-xs md:text-sm text-gray-500 font-medium">
                以上を維持
              </div>
              <div className="text-base md:text-lg text-gray-700 font-semibold mt-2">
                稼働率
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* 主なプロジェクト */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            💼 主なプロジェクト
          </h3>
          <div className="space-y-4">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-gray-800">
                🎯 Yahoo!にぎわいサービス（2016-2023）
              </h4>
              <div className="space-y-3 text-gray-600">
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Challenge</p>
                  <p>Yahoo!ショッピング出店者の集客支援SaaSを0から立ち上げ</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Solution</p>
                  <ul className="list-disc list-inside space-y-1 ml-2">
                    <li>6ヶ月でMVPリリース</li>
                    <li>4名のチームをリード</li>
                    <li>マルチテナント設計で安定稼働</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-gray-700 mb-1">Result</p>
                  <ul className="space-y-1">
                    <li>✅ 10万ユーザー獲得</li>
                    <li>✅ Yahoo!出店者の30%が利用</li>
                    <li>✅ 稼働率99.5%以上を維持</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            今までやってきたこと
          </h3>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {resumeData.motivation}
            </ReactMarkdown>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            今後やっていきたいこと
          </h3>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={markdownComponents}
            >
              {resumeData.selfPR}
            </ReactMarkdown>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default About

