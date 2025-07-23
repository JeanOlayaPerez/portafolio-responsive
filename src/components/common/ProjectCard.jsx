import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useResponsive, useOptimizedAnimations } from '../../hooks/useResponsive'

const ProjectCard = ({ project, index, hoveredProject, setHoveredProject }) => {
  const { isMobile, isTablet } = useResponsive()
  const { scale, fadeIn } = useOptimizedAnimations()

  return (
    <motion.div
      {...fadeIn}
      transition={{ ...fadeIn.transition, delay: index * 0.1 }}
      className={`
        group relative overflow-hidden rounded-xl bg-gray-800/50 backdrop-blur-sm
        border border-gray-700/50 hover:border-primary-500/50
        transition-all duration-300
        ${isMobile ? 'mb-6' : ''}
      `}
      onMouseEnter={() => !isMobile && setHoveredProject(project.id)}
      onMouseLeave={() => !isMobile && setHoveredProject(null)}
      {...(!isMobile ? scale : {})}
    >
      {/* Imagen del proyecto */}
      <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className={`
            w-full h-full object-cover
            transition-transform duration-500
            ${!isMobile ? 'group-hover:scale-110' : ''}
          `}
        />
        
        {/* Overlay con acciones */}
        <div className={`
          absolute inset-0 bg-black/60 
          ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}
          transition-opacity duration-300
          flex items-center justify-center gap-4
        `}>
          {project.demo && (
            <motion.a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-500 transition-colors"
              whileHover={!isMobile ? { scale: 1.1 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={isMobile ? 18 : 20} />
            </motion.a>
          )}
          
          {project.github && (
            <motion.a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
              whileHover={!isMobile ? { scale: 1.1 } : {}}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={isMobile ? 18 : 20} />
            </motion.a>
          )}
          
          <motion.button
            className="p-3 bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-colors"
            whileHover={!isMobile ? { scale: 1.1 } : {}}
            whileTap={{ scale: 0.95 }}
          >
            <Eye size={isMobile ? 18 : 20} />
          </motion.button>
        </div>

        {/* Badge de categoría */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600/90 text-white text-xs font-medium rounded-full backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* Contenido */}
      <div className="p-4 md:p-6">
        <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tecnologías */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-gray-700/50 text-gray-300 rounded border border-gray-600/50"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features */}
        {project.features && (
          <div className="space-y-2">
            <h4 className="text-sm font-medium text-gray-400 mb-2">Características:</h4>
            <div className="grid grid-cols-2 gap-1 text-xs text-gray-400">
              {project.features.slice(0, 4).map((feature, idx) => (
                <div key={idx} className="flex items-center">
                  <div className="w-1 h-1 bg-primary-500 rounded-full mr-2"></div>
                  {feature}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Hover effect background */}
      <div className={`
        absolute inset-0 bg-gradient-to-br from-primary-600/5 to-purple-600/5 
        ${!isMobile && hoveredProject === project.id ? 'opacity-100' : 'opacity-0'}
        transition-opacity duration-300 pointer-events-none
      `} />
    </motion.div>
  )
}

export default ProjectCard
