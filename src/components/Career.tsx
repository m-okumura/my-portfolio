import { motion } from 'framer-motion'
import { Building2, Calendar, Users, Award } from 'lucide-react'
import { useMemo } from 'react'
import { loadResume } from '../utils/loadResume'
import { parseResume } from '../utils/parseResume.tsx'

const Career = () => {
  const resumeData = useMemo(() => {
    const markdown = loadResume()
    return parseResume(markdown)
  }, [])

  // 職歴データをパースして構造化
  const careers = useMemo(() => {
    const careerList: Array<{
      company: string
      period: string
      role: string
      description: string
      achievements: string[]
      highlight?: boolean
    }> = []

    let currentCareer: any = null
    resumeData.careers.forEach((career) => {
      const text = career.職歴
      if (text.includes('入社')) {
        if (currentCareer) {
          careerList.push(currentCareer)
        }
        const companyMatch = text.match(/(.+?)\s+入社/)
        if (companyMatch) {
          currentCareer = {
            company: companyMatch[1],
            period: career.年月,
            role: '',
            description: '',
            achievements: [],
          }
        }
      } else if (text.includes('退社') && currentCareer) {
        currentCareer.period += ` ～ ${career.年月}`
        careerList.push(currentCareer)
        currentCareer = null
      } else if (text.includes('転職活動を再開')) {
        careerList.push({
          company: '転職活動中',
          period: career.年月 + '～',
          role: '転職活動を再開',
          description: '家族介護のため休職していた期間を経て、転職活動を再開',
          achievements: [],
        })
      } else if (text.includes('休職期間')) {
        // 休職期間はスキップ
      }
    })

    // 既存の詳細情報を追加（手動で設定）
    const detailedCareers = [
      {
        company: 'キャル株式会社',
        period: '2025年10月～',
        role: '',
        description: 'いろいろやる予定',
        achievements: [],
      },
      {
        company: 'FID株式会社',
        period: '2023年10月～2023年12月',
        role: 'システム開発部',
        description: '侍カート次世代業務基盤の設計・開発（広告関連機能の業務整理）',
        achievements: [],
      },
      {
        company: 'バリューコマース株式会社',
        period: '2016年11月～2023年9月',
        role: 'Webシステム開発部 マネジャー（部下4名）',
        description: 'Yahoo!向けにぎわいサービスの立ち上げ・運用',
        achievements: [
          'プロダクト0→1立ち上げ（リードタイム6ヶ月）',
          '約10万ユーザーを獲得（Yahoo!ショッピング出店者の約30%が利用）',
          '稼働率99.5%以上を維持',
          '総工数約40人月のプロジェクトを統括',
        ],
      },
      {
        company: 'コマース21株式会社',
        period: '2012年6月～2016年11月',
        role: 'アプリケーション開発部 副部長（部下7名）',
        description: 'ECパッケージ開発・導入支援、大手ファッションブランド向けECサイト構築',
        achievements: [
          '大手メンズファッションブランド向けECサイト構築（予算8,000万円、11ヶ月）',
          '大手ファッションブランド向けECサイト構築（総投資額1.2億円、総工数約80人月）',
          '工数削減30～40%を実現',
          '本番リリース後の重大障害ゼロを達成',
        ],
      },
      {
        company: '株式会社ジャストシステム',
        period: '1996年4月～2012年6月',
        role: 'アプリケーション開発部',
        description: 'デスクトップアプリケーション開発、NTT東日本向けFAQサイト構築',
        achievements: [
          '一太郎・花子の主要機能開発を担当（年間100万ユーザー）',
          'NTT東日本様向けFAQサイト構築（総投資額1.5億円、ユーザー数約20万人）',
          '問題解決率を約20%向上',
        ],
      },
    ]

    return detailedCareers
  }, [resumeData])

  const qualifications = useMemo(() => {
    return resumeData.qualifications.map((q) => ({
      name: q.資格名,
      year: q.取得年月,
    }))
  }, [resumeData])

  return (
    <section id="career" className="section-container relative scroll-fade-in" data-scroll-animate style={{ backgroundColor: '#f0f8ff' }}>
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
            職歴
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {careers.map((career, index) => (
            <motion.div
              key={career.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-6 h-6 text-gray-700" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {career.company}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-gray-600 text-sm mb-3">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{career.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4" />
                      <span>{career.role}</span>
                    </div>
                  </div>
                  {career.description && (
                    <p className="text-gray-700 mb-4">{career.description}</p>
                  )}
                </div>
              </div>
              {career.achievements.length > 0 && (
                <div className="ml-16 space-y-2">
                  <h4 className="text-sm font-semibold text-gray-600 mb-2">主な成果・実績</h4>
                  <ul className="space-y-2">
                    {career.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="text-gray-400 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 max-w-4xl mx-auto bg-gray-50 rounded-2xl p-8 border border-gray-300 shadow-sm"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
              <Award className="w-6 h-6 text-gray-700" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">保有資格</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {qualifications.map((qual) => (
              <div
                key={qual.name}
                className="bg-gray-100 rounded-xl p-4 border border-gray-300"
              >
                <p className="text-gray-700 font-medium mb-1">{qual.name}</p>
                <p className="text-gray-500 text-sm">{qual.year}取得</p>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Career

