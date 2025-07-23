import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'

const HeroMobile = () => {
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

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center bg-gray-900 relative overflow-hidden">
      {/* Fondo simple para móvil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Algunas estrellas simples */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          {/* Saludo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8"
          >
            <p className="text-purple-400 text-lg font-medium mb-2">
              ¡Hola! 👋 Soy
            </p>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Jean Perez
            </h1>
            <div className="text-xl sm:text-2xl font-semibold">
              <span className="bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent">
                Analista
              </span>
              <br />
              <span className="text-gray-300">Programador Computacional</span>
            </div>
          </motion.div>

          {/* Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-gray-300 max-w-lg mx-auto leading-relaxed mb-8"
          >
            Especializado en crear experiencias web modernas y aplicaciones 
            escalables con React, Node.js y tecnologías de vanguardia.
          </motion.p>

          {/* Botones de acción */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col gap-4 mb-8"
          >
            <button 
              onClick={() => {
                const projectsSection = document.getElementById('projects')
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="btn-primary w-full max-w-xs mx-auto"
            >
              Ver Proyectos
            </button>
            <a
              href="/cv.pdf"
              download
              className="btn-secondary w-full max-w-xs mx-auto inline-flex items-center justify-center"
              style={{ textDecoration: 'none' }}
            >
              <Download size={20} className="mr-2" />
              <span>Descargar CV</span>
            </a>
          </motion.div>

          {/* Redes sociales */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex justify-center gap-6"
          >
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-gray-700 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-300"
                >
                  <Icon size={24} />
                </motion.a>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroMobile
