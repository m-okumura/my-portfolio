import { motion } from 'framer-motion'
import { Clock, Award, Users, TrendingUp } from 'lucide-react'

const Features = () => {
  const features = [
    {
      icon: <Clock className="w-12 h-12" />,
      title: '開発期間50%短縮',
      description: 'AI支援ツールと効率的な開発プロセスにより、従来の半分の期間で高品質なシステムを提供します',
      stat: '平均30日',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <Award className="w-12 h-12" />,
      title: '98%の顧客満足度',
      description: '丁寧なヒアリングと的確な提案、確実な実装により、お客様から高い評価をいただいています',
      stat: '200+ 実績',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: '専任チーム体制',
      description: 'プロジェクトマネージャー、デザイナー、エンジニアが一丸となってサポートします',
      stat: '専任担当',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: '継続的な改善',
      description: 'リリース後も定期的な改善提案とサポートで、システムの価値を最大化します',
      stat: '無償保守',
      color: 'from-green-500 to-emerald-500'
    },
  ]

  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gray-900"></div>
      
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              選ばれる理由
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AIXWEBが多くのお客様から選ばれている4つの強み
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-gradient-to-br from-gray-800/80 to-gray-900/80 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 h-full hover:border-indigo-500/50 transition-all">
                <div className={`bg-gradient-to-r ${feature.color} w-20 h-20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  {feature.icon}
                </div>
                
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white">
                    {feature.title}
                  </h3>
                  <span className="text-sm font-semibold bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full">
                    {feature.stat}
                  </span>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                  {feature.description}
                </p>

                {/* Decorative Element */}
                <div className={`absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl ${feature.color} opacity-5 rounded-tl-full`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

