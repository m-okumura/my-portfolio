import { motion } from 'framer-motion'
import { Code, Database, Briefcase, Users } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'プログラミング言語',
      icon: Code,
      skills: [
        { name: 'Java', level: 95, years: '10年以上' },
        { name: 'Spring Framework', level: 90 },
        { name: 'JavaScript', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'HTML', level: 75 },
      ],
    },
    {
      title: 'データベース',
      icon: Database,
      skills: [
        { name: 'PostgreSQL', level: 90 },
        { name: 'MySQL', level: 85 },
      ],
    },
    {
      title: 'マネジメント',
      icon: Users,
      skills: [
        { name: 'プロジェクトマネジメント', level: 95, note: '最大10名規模' },
        { name: 'プロダクトマネジメント', level: 90, note: '0→1立ち上げ経験' },
        { name: 'チームマネジメント', level: 90, note: '最大4名の部下' },
        { name: '顧客折衝・提案', level: 90 },
      ],
    },
    {
      title: 'ビジネス・ドメイン',
      icon: Briefcase,
      skills: [
        { name: 'ECサイト構築・運用', level: 95, years: '約10年' },
        { name: 'SaaSプロダクト開発', level: 90, years: '約7年' },
        { name: '要件定義・設計', level: 95 },
        { name: 'システム運用・保守', level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container relative bg-white">
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
            スキル・強み
          </h2>
          <div className="w-24 h-0.5 bg-gray-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-300 hover:border-gray-400 transition-all duration-300 shadow-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-gray-700" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <div>
                          <span className="text-gray-700 font-medium">{skill.name}</span>
                          {('years' in skill && skill.years) || ('note' in skill && skill.note) ? (
                            <span className="text-gray-500 text-xs ml-2">
                              {'years' in skill && skill.years ? skill.years : ('note' in skill ? skill.note : '')}
                            </span>
                          ) : null}
                        </div>
                        <span className="text-gray-600 text-sm font-semibold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-gray-400 to-gray-500"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.1 + skillIndex * 0.05,
                            ease: "easeOut",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}

export default Skills

