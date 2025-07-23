import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/tu-usuario',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/tu-perfil',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:tu-email@example.com',
      color: 'hover:text-green-400'
    }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-primary-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">JP</span>
              </div>
              <span className="text-xl font-bold gradient-text">Jean Olaya </span>
            </div>
            <p className="text-gray-400 max-w-md">
              Desarrollador web apasionado por crear experiencias digitales increíbles 
              con tecnologías modernas y diseño centrado en el usuario.
            </p>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Enlaces Rápidos</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Inicio', 'Sobre mí', 'Habilidades', 'Proyectos', 'Experiencia', 'Contacto'].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    const sectionId = item === 'Inicio' ? 'hero' : 
                                    item === 'Sobre mí' ? 'about' :
                                    item === 'Habilidades' ? 'skills' :
                                    item === 'Proyectos' ? 'projects' :
                                    item === 'Experiencia' ? 'experience' : 'contact'
                    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="text-gray-400 hover:text-primary-400 transition-colors text-left"
                >
                  {item}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold text-white">Sígueme</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-3 bg-gray-800 rounded-lg text-gray-300 ${social.color} transition-all duration-300 hover:bg-gray-700`}
                  >
                    <Icon size={20} />
                  </motion.a>
                )
              })}
            </div>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-primary-400 transition-colors mt-4"
            >
              <ArrowUp size={16} />
              <span>Volver arriba</span>
            </button>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-sm flex items-center space-x-1"
            >
              <span>© {currentYear} Jean Perez. Hecho con</span>
              <Heart size={16} className="text-red-500 mx-1" />
              <span>y React</span>
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center space-x-4 text-sm text-gray-400"
            >
              <span>Desarrollado con React + Vite</span>
              <span>•</span>
              <span>Desplegado en Vercel</span>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
