import { motion } from 'framer-motion'
import { Activity, Mountain, Waves, Code, ExternalLink } from 'lucide-react'
import marathonImage from '../assets/marathon.jpeg'
import hikingImage from '../assets/hiking.jpeg'
import mountainImage from '../assets/mountain.jpeg'

const Hobbies = () => {
  const hobbies = [
    {
      icon: Activity,
      title: 'ランニング',
      description: '東京チャレンジマラソンにも参加しました！健康維持も兼ねて、ちょくちょく走ってます。完走したときの達成感、最高です。',
      images: [marathonImage],
    },
    {
      icon: Mountain,
      title: '登山・ハイキング',
      description: '多摩近辺の低山を中心に、月1〜2回のペースで山に登ってます。自然の中でリフレッシュすると、頭もスッキリ！森林浴は最高のストレス解消法。',
      images: [hikingImage, mountainImage],
    },
    {
      icon: Waves,
      title: 'スイミング',
      description: 'ジムのプールで1000m泳ぐのが日課。泳いだ後のサウナでの休憩が至福のひととき。心身ともにリセットできます。',
      images: null,
    },
    {
      icon: Code,
      title: '趣味コーディング',
      description: '週末は自宅で趣味のコーディングに没頭！最近はAI活用した開発（Cursor、Gemini）にハマってて、TypeScriptの勉強を楽しんでます。技術の進化についていくのも趣味みたいなもんです。',
      github: [
        { name: 'ポートフォリオ', url: 'https://github.com/m-okumura/my-portfolio.git' },
        { name: '天気アプリ', url: 'https://github.com/m-okumura/weather-app.git' },
        { name: 'React学習用', url: 'https://github.com/m-okumura/reactstudy.git' },
      ],
    },
  ]

  const learnings = [
    '継続は力なり：登山もコーディングも、コツコツ続けることで成長できる',
    '健康第一：体を動かすと、仕事のパフォーマンスも上がる',
    '新しいことにチャレンジ：AI時代の開発スタイルも、どんどん試してみる',
    'バランス感覚：仕事とプライベートのメリハリが、両方を充実させる',
  ]

  return (
    <section id="hobbies" className="section-container relative bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            趣味・プライベート
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            仕事以外の時間も、アクティブに過ごしてます！
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {hobbies.map((hobby, index) => {
            const IconComponent = hobby.icon
            return (
              <motion.div
                key={hobby.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm hover:border-gray-400 transition-all duration-300"
              >
                {hobby.images && hobby.images.length > 0 && (
                  <div className="mb-4">
                    <div className={`grid gap-3 ${hobby.images.length === 1 ? 'grid-cols-1 justify-items-center' : 'grid-cols-2'}`}>
                      {hobby.images.map((img, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          className={`rounded-lg overflow-hidden border border-gray-300 shadow-sm bg-gray-100 flex items-center justify-center ${hobby.images.length === 1 ? 'max-w-xs w-full' : 'w-full'}`}
                          initial={{ opacity: 0, scale: 0.9 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.4, delay: index * 0.1 + imgIndex * 0.1 }}
                        >
                          <img
                            src={img}
                            alt={`${hobby.title}の写真${imgIndex + 1}`}
                            className={`${hobby.images.length === 1 ? 'w-full max-w-xs' : 'w-full'} h-auto max-h-64 object-contain hover:scale-105 transition-transform duration-300`}
                          />
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">{hobby.title}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">{hobby.description}</p>
                {hobby.github && (
                  <div className="mt-4">
                    <p className="text-sm font-semibold text-gray-700 mb-2">週末コーディングで作ったもの：</p>
                    <div className="space-y-2">
                      <a
                        href="https://github.com/m-okumura/weather-app.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>🌦️ 天気アプリ</span>
                        <span className="text-gray-500 text-xs ml-2">→ TypeScript + React で作成</span>
                      </a>
                      <a
                        href="https://github.com/m-okumura/my-portfolio.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>📁 ポートフォリオ</span>
                        <span className="text-gray-500 text-xs ml-2">→ このサイトのソースコード</span>
                      </a>
                      <a
                        href="https://github.com/m-okumura/reactstudy.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>📚 React学習用</span>
                        <span className="text-gray-500 text-xs ml-2">→ 学習の記録</span>
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <h3 className="text-xl font-bold mb-6 text-gray-800">趣味から学んだこと</h3>
          <ul className="space-y-3">
            {learnings.map((learning, index) => (
              <li key={index} className="flex items-start gap-3 text-gray-600">
                <span className="text-gray-400 mt-1">•</span>
                <span>{learning}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hobbies

