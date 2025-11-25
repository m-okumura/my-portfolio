import { motion } from 'framer-motion'
import { Brain, Code, Rocket, Zap, Database, Shield } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'AI統合開発',
      description: 'ChatGPT、Claude等の最新AIを活用したインテリジェントなWebアプリケーション開発',
      features: ['自然言語処理', '機械学習モデル統合', 'チャットボット開発']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'フルスタック開発',
      description: 'React、Next.js、Node.jsを使用したモダンでスケーラブルなWeb開発',
      features: ['フロントエンド開発', 'バックエンド構築', 'API設計']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'SaaS開発',
      description: 'スタートアップから大企業まで対応するSaaSプラットフォームの設計・開発',
      features: ['マルチテナント対応', 'サブスク決済統合', '分析ダッシュボード']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: '高速プロトタイピング',
      description: 'AIアシストを活用し、アイデアを素早く形にする迅速な開発サービス',
      features: ['MVP開発', 'デザインシステム', 'ユーザーテスト']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'データベース設計',
      description: 'PostgreSQL、MongoDB等を使用した最適なデータベースアーキテクチャ構築',
      features: ['スキーマ設計', 'パフォーマンス最適化', 'データ移行']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'セキュリティ対策',
      description: '最新のセキュリティベストプラクティスを適用した安全なシステム構築',
      features: ['認証・認可', 'データ暗号化', 'セキュリティ監査']
    },
  ]

  return (
    <section id="services" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"></div>
      
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
              提供サービス
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            AI技術を活用した包括的なWeb開発サービスで、
            <br className="hidden md:block" />
            あなたのビジネスを次のレベルへ
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
              <div className="relative bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 h-full hover:border-indigo-500/50 transition-all">
                <div className="bg-gradient-to-r from-indigo-500 to-purple-500 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services

