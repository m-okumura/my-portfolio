import { motion } from 'framer-motion'
import { Code, Server, Wrench } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      title: 'フロントエンド',
      icon: Code,
      color: 'from-cyan-400 to-blue-500',
      skills: [
        { name: 'React', level: 90 },
        { name: 'TypeScript', level: 85 },
        { name: 'Next.js', level: 80 },
        { name: 'Tailwind CSS', level: 90 },
        { name: 'Vue.js', level: 75 },
      ],
    },
    {
      title: 'バックエンド',
      icon: Server,
      color: 'from-blue-400 to-purple-500',
      skills: [
        { name: 'Node.js', level: 80 },
        { name: 'Python', level: 75 },
        { name: 'PostgreSQL', level: 70 },
        { name: 'MongoDB', level: 65 },
      ],
    },
    {
      title: 'ツール & その他',
      icon: Wrench,
      color: 'from-purple-400 to-pink-500',
      skills: [
        { name: 'Git', level: 85 },
        { name: 'Docker', level: 70 },
        { name: 'AWS', level: 65 },
        { name: 'Figma', level: 75 },
      ],
    },
  ]

  return (
    <section id="skills" className="section-container relative">
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
          <h2 className="text-4xl md:text-6xl font-black mb-4">
            <span className="gradient-text">スキル</span>
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
                className="glass rounded-3xl p-8 backdrop-blur-xl hover:shadow-neon transition-all duration-300 group"
                whileHover={{ scale: 1.02, y: -5 }}
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-6 gradient-text">
                  {category.title}
                </h3>
                <div className="space-y-5">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-300 font-semibold">{skill.name}</span>
                        <span className="text-cyan-400 font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-800/50 rounded-full h-2.5 overflow-hidden">
                        <motion.div
                          className={`h-full rounded-full bg-gradient-to-r ${category.color} shadow-lg`}
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: categoryIndex * 0.2 + skillIndex * 0.1,
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

