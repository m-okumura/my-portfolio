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

        <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
          {/* 基本情報カード */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                基本情報
              </h3>
            </div>
            <div className="space-y-6">
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">👤</span>
                  <span className="text-gray-500 text-base font-medium">氏名</span>
                </div>
                <p className="text-gray-800 font-semibold text-lg ml-7">{resumeData.basicInfo.氏名}</p>
              </div>
              <div className="pb-4 border-b border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📅</span>
                  <span className="text-gray-500 text-base font-medium">生年月日</span>
                </div>
                <p className="text-gray-800 font-semibold text-lg ml-7">{resumeData.basicInfo.生年月日}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">📧</span>
                  <span className="text-gray-500 text-base font-medium">連絡先</span>
                </div>
                <p className="text-gray-800 font-semibold text-lg ml-7">{resumeData.basicInfo.連絡先}</p>
              </div>
            </div>
          </motion.div>

          {/* 学歴カード */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border-2 border-gray-300 shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                学歴
              </h3>
            </div>
            <div className="space-y-6">
              {resumeData.education.map((edu, index) => (
                <div key={index} className={index < resumeData.education.length - 1 ? "pb-4 border-b border-gray-200" : ""}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">📅</span>
                    <span className="text-gray-500 text-base font-medium">{edu.年月}</span>
                  </div>
                  <p className="text-gray-800 font-semibold text-lg ml-7">{edu.学歴}</p>
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
          className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            📊 数字で見る実績
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="py-3 px-4 font-semibold text-gray-800">項目</th>
                  <th className="py-3 px-4 font-semibold text-gray-800">実績</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700 font-medium">キャリア</td>
                  <td className="py-3 px-4 text-gray-600">20年以上</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700 font-medium">プロダクト立ち上げ</td>
                  <td className="py-3 px-4 text-gray-600">Yahoo!向けSaaS（10万ユーザー）</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700 font-medium">プロジェクト規模</td>
                  <td className="py-3 px-4 text-gray-600">最大1.5億円</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-3 px-4 text-gray-700 font-medium">マネジメント経験</td>
                  <td className="py-3 px-4 text-gray-600">最大10名</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 text-gray-700 font-medium">稼働率</td>
                  <td className="py-3 px-4 text-gray-600">99.5%以上を維持</td>
                </tr>
              </tbody>
            </table>
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

