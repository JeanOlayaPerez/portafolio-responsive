import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar,
  MapPin,
  ExternalLink,
  Users,
  TrendingUp
} from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const experiences = [
    {
      type: 'work',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Madrid, España',
      period: '2022 - Presente',
      description: 'Lidero el desarrollo de aplicaciones web escalables usando React, Node.js y AWS. Mentorizo a desarrolladores junior y colaboro en la arquitectura de sistemas.',
      achievements: [
        'Desarrollé una plataforma SaaS que aumentó la eficiencia del cliente en un 40%',
        'Lideré un equipo de 5 desarrolladores en proyectos críticos',
        'Implementé CI/CD reduciendo el tiempo de despliegue en 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'TypeScript', 'PostgreSQL'],
      url: 'https://techcorp.com'
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Barcelona, España',
      period: '2021 - 2022',
      description: 'Desarrollé desde cero múltiples aplicaciones web y móviles para diferentes clientes, enfocándome en la experiencia de usuario y el rendimiento.',
      achievements: [
        'Creé 8 aplicaciones web completas para diferentes industrias',
        'Reduje el tiempo de carga promedio de las apps en 50%',
        'Implementé sistema de autenticación y autorización robusto'
      ],
      technologies: ['React', 'React Native', 'Firebase', 'MongoDB', 'Express'],
      url: 'https://startupxyz.com'
    },
    {
      type: 'work',
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Valencia, España',
      period: '2020 - 2021',
      description: 'Me especialicé en crear interfaces de usuario atractivas y funcionales para sitios web corporativos y aplicaciones web interactivas.',
      achievements: [
        'Desarrollé más de 15 sitios web responsivos',
        'Mejoré la accesibilidad web cumpliendo estándares WCAG',
        'Colaboré con diseñadores UX para optimizar la experiencia'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Vue.js', 'SASS'],
      url: 'https://digitalagencypro.com'
    }
  ]

  const education = [
    {
      type: 'education',
      title: 'Ingeniería Informática',
      company: 'Universidad Politécnica de Madrid',
      location: 'Madrid, España',
      period: '2016 - 2020',
      description: 'Especialización en Desarrollo de Software y Sistemas Distribuidos. Proyecto final enfocado en aplicaciones web modernas.',
      achievements: [
        'Graduado con Matrícula de Honor',
        'Presidente del Club de Programación',
        'Ganador del Hackathon Universitario 2019'
      ],
      technologies: ['Java', 'Python', 'C++', 'Algoritmos', 'Bases de Datos']
    }
  ]

  const certifications = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2023',
      icon: Award
    },
    {
      title: 'React Advanced Patterns',
      issuer: 'Meta (Facebook)',
      date: '2022',
      icon: Award
    },
    {
      title: 'Google Cloud Professional',
      issuer: 'Google Cloud',
      date: '2022',
      icon: Award
    }
  ]

  const TimelineItem = ({ item, index, isLast }) => (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} mb-12`}
    >
      {/* Línea de tiempo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-700 h-full hidden md:block">
        {!isLast && <div className="w-full h-full bg-gradient-to-b from-primary-500 to-transparent" />}
      </div>

      {/* Punto de la línea de tiempo */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-gray-900 z-10 hidden md:block" />

      {/* Contenido */}
      <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
        <div className="glass p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center space-x-3">
              {item.type === 'work' ? (
                <Briefcase className="w-6 h-6 text-primary-400" />
              ) : (
                <GraduationCap className="w-6 h-6 text-primary-400" />
              )}
              <div>
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
                <div className="flex items-center space-x-2 text-primary-400">
                  <span className="font-medium">{item.company}</span>
                  {item.url && (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-4 text-gray-300 text-sm">
            <div className="flex items-center space-x-1">
              <Calendar size={16} />
              <span>{item.period}</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin size={16} />
              <span>{item.location}</span>
            </div>
          </div>

          {/* Descripción */}
          <p className="text-gray-300 mb-4">{item.description}</p>

          {/* Logros */}
          {item.achievements && (
            <div className="mb-4">
              <h4 className="text-white font-semibold mb-2 flex items-center space-x-2">
                <TrendingUp size={16} />
                <span>Logros Principales</span>
              </h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                    <span className="text-primary-400 mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tecnologías */}
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full border border-primary-600/30"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <section id="experience" style={{
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
            Mi <span className="gradient-text">Experiencia</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Un recorrido por mi trayectoria profesional y educativa, 
            destacando los proyectos y logros más significativos.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Experiencia Laboral */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center space-x-3">
              <Briefcase className="text-primary-400" />
              <span>Experiencia Profesional</span>
            </h3>
            {experiences.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={index}
                isLast={index === experiences.length - 1}
              />
            ))}
          </motion.div>

          {/* Educación */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-white mb-8 text-center flex items-center justify-center space-x-3">
              <GraduationCap className="text-primary-400" />
              <span>Educación</span>
            </h3>
            {education.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={index}
                isLast={true}
              />
            ))}
          </motion.div>
        </div>

        {/* Certificaciones */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-8 flex items-center justify-center space-x-3">
            <Award className="text-primary-400" />
            <span>Certificaciones</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => {
              const Icon = cert.icon
              return (
                <motion.div
                  key={cert.title}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className="glass p-6 rounded-xl hover:bg-white/20 transition-all duration-300 group"
                >
                  <Icon className="w-12 h-12 text-primary-400 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="text-lg font-semibold text-white mb-2">{cert.title}</h4>
                  <p className="text-gray-300 mb-2">{cert.issuer}</p>
                  <span className="text-primary-400 text-sm">{cert.date}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Quieres saber más sobre mi experiencia?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Estoy siempre dispuesto a hablar sobre mi trayectoria profesional 
            y cómo mi experiencia puede aportar valor a tu equipo o proyecto.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/cv.pdf"
              download
              className="btn-secondary flex items-center justify-center space-x-2"
            >
              <Award size={20} />
              <span>Descargar CV</span>
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Conversemos
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
