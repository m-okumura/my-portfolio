import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const Pricing = () => {
  const plans = [
    {
      name: 'スタートアップ',
      price: '¥300,000',
      duration: '〜',
      description: '小規模なWebサイトやMVP開発に最適',
      features: [
        'レスポンシブデザイン',
        'CMS統合',
        '基本的なSEO対策',
        '3ページまでのコンテンツ',
        '1ヶ月の無償サポート',
        'ソースコード提供'
      ],
      highlighted: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'ビジネス',
      price: '¥800,000',
      duration: '〜',
      description: '本格的なWebアプリケーション開発',
      features: [
        'カスタムデザイン',
        'フロント・バックエンド開発',
        'データベース設計',
        '認証機能実装',
        '決済システム統合',
        'API開発',
        '3ヶ月の無償サポート',
        '定期的な保守提案'
      ],
      highlighted: true,
      popular: true,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      name: 'エンタープライズ',
      price: '¥2,000,000',
      duration: '〜',
      description: '大規模システムやSaaS開発',
      features: [
        'フルカスタム開発',
        'AI機能統合',
        'マイクロサービス設計',
        '高度なセキュリティ対策',
        'パフォーマンス最適化',
        'DevOps構築',
        'クラウドインフラ設計',
        '6ヶ月の無償サポート',
        '専任チームアサイン',
        '24/7緊急対応'
      ],
      highlighted: false,
      color: 'from-purple-500 to-pink-500'
    },
  ]

  return (
    <section id="pricing" className="py-20 relative overflow-hidden bg-gray-900">
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
              料金プラン
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            プロジェクトの規模に合わせた柔軟なプランをご用意
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative ${plan.highlighted ? 'md:scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Sparkles className="w-4 h-4" />
                    人気No.1
                  </div>
                </div>
              )}

              <div className={`relative h-full bg-gray-800/50 backdrop-blur-sm border ${
                plan.highlighted ? 'border-indigo-500/50' : 'border-gray-700/50'
              } rounded-3xl p-8 hover:border-indigo-500/50 transition-all group`}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity`}></div>

                {/* Plan Header */}
                <div className="relative">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      <span className="text-gray-500">{plan.duration}</span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">税別価格</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className={`flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center mt-0.5`}>
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-300 text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="#contact"
                    className={`block w-full text-center py-3 rounded-xl font-semibold transition-all ${
                      plan.highlighted
                        ? `bg-gradient-to-r ${plan.color} text-white hover:scale-105`
                        : 'bg-gray-700/50 text-white hover:bg-gray-700'
                    }`}
                  >
                    お問い合わせ
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="bg-gray-800/30 border border-gray-700/50 rounded-2xl p-8 max-w-3xl mx-auto">
            <h4 className="text-xl font-bold text-white mb-4">
              カスタムプランもご用意可能
            </h4>
            <p className="text-gray-400 mb-6">
              お客様の具体的なニーズに合わせて、柔軟にプランをカスタマイズいたします。
              <br />
              まずはお気軽にご相談ください。
            </p>
            <a
              href="#contact"
              className="inline-block bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
            >
              無料相談を予約
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing

