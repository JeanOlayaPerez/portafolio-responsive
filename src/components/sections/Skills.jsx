import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  Palette, 
  Settings,
  Star,
  TrendingUp 
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [activeCategory, setActiveCategory] = useState('frontend')

  const categories = [
    { id: 'frontend', label: 'Frontend', icon: Globe },
    { id: 'backend', label: 'Backend', icon: Database },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'design', label: 'Design', icon: Palette },
    { id: 'tools', label: 'Tools', icon: Settings }
  ]

  const skillsData = {
    frontend: [
      { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
      { name: 'JavaScript (ES6+)', level: 92, color: 'from-yellow-500 to-orange-500' },
      { name: 'TypeScript', level: 88, color: 'from-blue-600 to-blue-400' },
      { name: 'Next.js', level: 85, color: 'from-gray-700 to-gray-500' },
      { name: 'Vue.js', level: 80, color: 'from-green-500 to-emerald-500' },
      { name: 'HTML5 & CSS3', level: 95, color: 'from-red-500 to-pink-500' },
      { name: 'Tailwind CSS', level: 90, color: 'from-teal-500 to-cyan-500' },
      { name: 'SASS/SCSS', level: 85, color: 'from-pink-500 to-rose-500' }
    ],
    backend: [
      { name: 'Node.js', level: 90, color: 'from-green-600 to-green-400' },
      { name: 'Express.js', level: 88, color: 'from-gray-600 to-gray-400' },
      { name: 'Python', level: 82, color: 'from-blue-500 to-yellow-500' },
      { name: 'MongoDB', level: 85, color: 'from-green-500 to-emerald-600' },
      { name: 'PostgreSQL', level: 80, color: 'from-blue-600 to-indigo-600' },
      { name: 'Firebase', level: 85, color: 'from-orange-500 to-red-500' },
      { name: 'GraphQL', level: 75, color: 'from-pink-500 to-purple-500' },
      { name: 'REST APIs', level: 92, color: 'from-indigo-500 to-purple-500' }
    ],
    mobile: [
      { name: 'React Native', level: 85, color: 'from-blue-500 to-cyan-500' },
      { name: 'Flutter', level: 70, color: 'from-blue-400 to-cyan-400' },
      { name: 'Expo', level: 88, color: 'from-gray-700 to-gray-500' },
      { name: 'PWA', level: 85, color: 'from-purple-500 to-pink-500' }
    ],
    design: [
      { name: 'Figma', level: 85, color: 'from-purple-500 to-pink-500' },
      { name: 'Adobe XD', level: 80, color: 'from-pink-500 to-red-500' },
      { name: 'UI/UX Design', level: 82, color: 'from-indigo-500 to-purple-500' },
      { name: 'Prototyping', level: 85, color: 'from-green-500 to-teal-500' }
    ],
    tools: [
      { name: 'Git & GitHub', level: 95, color: 'from-gray-700 to-gray-900' },
      { name: 'VS Code', level: 98, color: 'from-blue-500 to-blue-700' },
      { name: 'Docker', level: 75, color: 'from-blue-400 to-cyan-400' },
      { name: 'AWS', level: 70, color: 'from-orange-500 to-yellow-500' },
      { name: 'Vercel', level: 90, color: 'from-gray-800 to-black' },
      { name: 'Webpack', level: 80, color: 'from-blue-600 to-indigo-600' }
    ]
  }

  const achievements = [
    { icon: Star, label: 'Certificación React', value: '2023' },
    { icon: TrendingUp, label: 'Proyectos Exitosos', value: '50+' },
    { icon: Code, label: 'Contribuciones GitHub', value: '1000+' }
  ]

  return (
    <section id="skills" style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: '#111827',
      position: 'relative',
      overflow: 'visible',
      padding: '2rem 1rem'
    }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto', width: '100%' }} ref={ref}>
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Mis <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Tecnologías y herramientas con las que trabajo para crear 
            experiencias digitales excepcionales.
          </p>
        </motion.div>

        {/* Categorías */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{category.label}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {skillsData[activeCategory].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 glass rounded-xl hover:bg-white/20 transition-all duration-300"
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                <span className="text-primary-400 font-medium">{skill.level}%</span>
              </div>
              
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Logros */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <motion.div
                key={achievement.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 glass rounded-xl hover:bg-white/20 transition-all duration-300 group"
              >
                <Icon className="w-12 h-12 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-white mb-2">{achievement.value}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Tienes un proyecto en mente?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Estoy siempre abierto a discutir nuevas oportunidades y proyectos interesantes. 
            ¡Hablemos sobre cómo puedo ayudarte a hacer realidad tu idea!
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Iniciar Conversación
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
