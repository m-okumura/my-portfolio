import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Portfolio = () => {
  const projects = [
    {
      title: 'AI搭載ECプラットフォーム',
      category: 'E-Commerce / AI',
      description: 'パーソナライズされた商品推薦機能を持つ次世代ECサイト。AIが顧客の好みを学習し、最適な商品を提案します。',
      image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=500&fit=crop',
      tags: ['Next.js', 'OpenAI', 'Stripe', 'PostgreSQL'],
      stats: { conversion: '+45%', users: '10k+' }
    },
    {
      title: '不動産マッチングSaaS',
      category: 'SaaS / Real Estate',
      description: '物件と顧客を自動マッチングするAIシステム。膨大なデータから最適な物件を瞬時に提案します。',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=500&fit=crop',
      tags: ['React', 'Node.js', 'MongoDB', 'Machine Learning'],
      stats: { matches: '5000+', satisfaction: '96%' }
    },
    {
      title: 'ヘルスケア管理システム',
      category: 'Healthcare / Dashboard',
      description: '患者データを一元管理し、AIで健康リスクを予測する医療機関向けシステム。',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=500&fit=crop',
      tags: ['Vue.js', 'Python', 'TensorFlow', 'AWS'],
      stats: { hospitals: '50+', patients: '100k+' }
    },
    {
      title: 'オンライン教育プラットフォーム',
      category: 'EdTech / LMS',
      description: 'AIが学習者の理解度を分析し、最適な学習パスを自動生成するeラーニングシステム。',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
      tags: ['Next.js', 'TypeScript', 'GraphQL', 'Redis'],
      stats: { students: '30k+', completion: '85%' }
    },
    {
      title: '企業向けチャットボット',
      category: 'AI / Customer Support',
      description: '自然言語処理を活用した高精度なカスタマーサポートボット。24時間365日対応を実現。',
      image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&h=500&fit=crop',
      tags: ['React', 'Python', 'Claude API', 'Docker'],
      stats: { response: '99%', cost: '-60%' }
    },
    {
      title: 'デジタルマーケティングツール',
      category: 'Marketing / Analytics',
      description: 'AIがマーケティングデータを分析し、最適な戦略を提案するダッシュボードシステム。',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
      tags: ['React', 'D3.js', 'FastAPI', 'BigQuery'],
      stats: { roi: '+120%', clients: '200+' }
    },
  ]

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-gray-900">
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
              制作実績
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            様々な業界で成果を上げたプロジェクトをご紹介
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden h-full hover:transform hover:scale-[1.02] transition-all duration-300">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 z-20">
                    <span className="bg-indigo-500/90 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm">
                    {project.description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-indigo-400 font-bold">{value}</div>
                        <div className="text-gray-500 text-xs capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/50 text-gray-300 text-xs px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <button className="flex items-center gap-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      詳細を見る
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
          >
            あなたのプロジェクトも始めましょう
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio

