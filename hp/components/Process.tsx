import { motion } from 'framer-motion'
import { MessageSquare, Lightbulb, Code2, Rocket, LineChart } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'ヒアリング・相談',
      duration: '1-2日',
      description: 'お客様のビジネス課題や目標を丁寧にヒアリング。最適なソリューションをご提案します。',
      details: ['無料相談', '要件定義', '見積もり提示']
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: '設計・デザイン',
      duration: '3-5日',
      description: 'ユーザー体験を重視した設計と、モダンで美しいUIデザインを作成します。',
      details: ['ワイヤーフレーム', 'UIデザイン', 'プロトタイプ']
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: '開発・実装',
      duration: '2-4週間',
      description: 'AI支援ツールを活用し、高品質なコードで迅速に実装。定期的に進捗を共有します。',
      details: ['フロントエンド開発', 'バックエンド構築', '進捗報告']
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'テスト・リリース',
      duration: '3-5日',
      description: '徹底的なテストで品質を保証。スムーズなリリースをサポートします。',
      details: ['品質テスト', 'デプロイ', 'リリース']
    },
    {
      icon: <LineChart className="w-8 h-8" />,
      title: '運用・改善',
      duration: '継続',
      description: 'リリース後も定期的にサポート。データ分析と改善提案で成長を支援します。',
      details: ['保守サポート', 'パフォーマンス監視', '機能追加']
    },
  ]

  return (
    <section id="process" className="py-20 relative overflow-hidden">
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
              制作フロー
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            お問い合わせからリリースまで、スムーズで透明性の高いプロセス
          </p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative mb-12 last:mb-0"
            >
              <div className="flex flex-col md:flex-row gap-6 items-start">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center border-2 border-indigo-500">
                      <span className="text-sm font-bold text-indigo-400">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-grow bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-indigo-500/50 transition-all group">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                    <h3 className="text-2xl font-bold text-white mb-2 md:mb-0">
                      {step.title}
                    </h3>
                    <span className="inline-flex items-center bg-indigo-500/20 text-indigo-300 text-sm px-3 py-1 rounded-full">
                      <span className="mr-1">⏱</span>
                      {step.duration}
                    </span>
                  </div>
                  
                  <p className="text-gray-400 mb-4">
                    {step.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {step.details.map((detail, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-700/50 text-gray-300 text-sm px-3 py-1 rounded-lg flex items-center"
                      >
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2"></div>
                        {detail}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-10 top-20 w-0.5 h-12 bg-gradient-to-b from-indigo-500/50 to-purple-500/50"></div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Total Duration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/30 rounded-2xl px-8 py-4">
            <p className="text-gray-400 mb-1">平均プロジェクト期間</p>
            <p className="text-3xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              約30日〜45日
            </p>
            <p className="text-sm text-gray-500 mt-1">※プロジェクト規模により変動します</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Process

