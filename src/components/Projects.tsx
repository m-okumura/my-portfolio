import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

const Projects = () => {
  const projects = [
    {
      title: 'Eコマースプラットフォーム',
      description:
        'ReactとTypeScriptを使用したモダンなEコマースアプリケーション。レスポンシブデザインと高速なパフォーマンスを実現。',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-cyan-500 to-blue-500',
    },
    {
      title: 'タスク管理アプリ',
      description:
        'リアルタイムでタスクを管理できるアプリケーション。チームコラボレーション機能を搭載。',
      technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-blue-500 to-purple-500',
    },
    {
      title: '天気予報アプリ',
      description:
        '美しいUIを持つ天気予報アプリケーション。位置情報を使用して現在地の天気を表示。',
      technologies: ['React', 'JavaScript', 'OpenWeather API', 'CSS3'],
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'ソーシャルメディアダッシュボード',
      description:
        '複数のソーシャルメディアアカウントを一元管理できるダッシュボード。',
      technologies: ['Vue.js', 'TypeScript', 'GraphQL', 'Apollo'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800',
      github: 'https://github.com',
      demo: 'https://example.com',
      gradient: 'from-pink-500 to-cyan-500',
    },
  ]

  return (
    <section id="projects" className="section-container relative">
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
            <span className="gradient-text">プロジェクト</span>
        </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden backdrop-blur-xl hover:shadow-neon transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:gradient-text transition-all">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-5 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-1.5 bg-white/10 backdrop-blur-sm text-cyan-300 rounded-full text-sm font-medium border border-cyan-400/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-gray-300 hover:text-cyan-400 rounded-full border border-white/20 hover:border-cyan-400/50 transition-all font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github className="w-5 h-5" />
                    <span>GitHub</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full hover:from-cyan-400 hover:to-blue-400 transition-all font-semibold shadow-lg hover:shadow-cyan-500/50"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink className="w-5 h-5" />
                    <span>デモ</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Projects

