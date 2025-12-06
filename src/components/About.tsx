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

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              基本情報
            </h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <div>
                <span className="text-gray-500 text-sm">氏名</span>
                <p className="text-gray-800 font-medium">{resumeData.basicInfo.氏名}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">生年月日</span>
                <p className="text-gray-800 font-medium">{resumeData.basicInfo.生年月日}</p>
              </div>
              <div>
                <span className="text-gray-500 text-sm">連絡先</span>
                <p className="text-gray-800 font-medium">{resumeData.basicInfo.連絡先}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">
              学歴
            </h3>
            <div className="space-y-4 text-gray-600">
              {resumeData.education.map((edu, index) => (
                <div key={index}>
                  <p className="text-gray-500 text-sm">{edu.年月}</p>
                  <p className="text-gray-800 font-medium">{edu.学歴}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-gray-800">
            志望動機
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
            自己PR・今後やっていきたいこと
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

