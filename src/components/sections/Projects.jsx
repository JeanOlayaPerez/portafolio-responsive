import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Filter,
  Smartphone,
  Globe,
  Database,
  Palette
} from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  })

  const [activeFilter, setActiveFilter] = useState('all')
  const [hoveredProject, setHoveredProject] = useState(null)

  const filters = [
    { id: 'all', label: 'Todos', icon: Filter },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Smartphone },
    { id: 'fullstack', label: 'Full Stack', icon: Database },
    { id: 'design', label: 'UI/UX', icon: Palette }
  ]

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'Plataforma de comercio electrónico completa con panel de administración, pasarela de pago y gestión de inventario.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com/tu-usuario/ecommerce-platform',
      demo: 'https://ecommerce-demo.vercel.app',
      features: ['Autenticación', 'Carrito de compras', 'Panel admin', 'Pagos seguros']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Aplicación móvil para gestión de tareas con sincronización en tiempo real y colaboración en equipo.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      category: 'mobile',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      github: 'https://github.com/tu-usuario/task-manager',
      demo: 'https://task-manager-demo.com',
      features: ['Tiempo real', 'Colaboración', 'Notificaciones', 'Offline']
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Sitio web portfolio moderno con animaciones 3D, diseño responsivo y optimizado para SEO.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      github: 'https://github.com/tu-usuario/portfolio-3d',
      demo: 'https://portfolio-3d-demo.vercel.app',
      features: ['Animaciones 3D', 'Responsive', 'SEO', 'Performance']
    },
    {
      id: 4,
      title: 'Health Tracker Dashboard',
      description: 'Dashboard para seguimiento de salud con visualización de datos, gráficos interactivos y reportes.',
      image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&h=400&fit=crop',
      category: 'web',
      technologies: ['Vue.js', 'D3.js', 'Python', 'FastAPI'],
      github: 'https://github.com/tu-usuario/health-dashboard',
      demo: 'https://health-dashboard-demo.com',
      features: ['Visualización', 'Analytics', 'Reportes', 'API REST']
    },
    {
      id: 5,
      title: 'Food Delivery App',
      description: 'Aplicación de delivery de comida con geolocalización, seguimiento en tiempo real y sistema de calificaciones.',
      image: 'https://images.unsplash.com/photo-1526367790999-0150786686a2?w=600&h=400&fit=crop',
      category: 'mobile',
      technologies: ['Flutter', 'Firebase', 'Google Maps', 'Stripe'],
      github: 'https://github.com/tu-usuario/food-delivery',
      demo: 'https://food-delivery-demo.com',
      features: ['Geolocalización', 'Tracking', 'Pagos', 'Calificaciones']
    },
    {
      id: 6,
      title: 'Design System Library',
      description: 'Librería de componentes reutilizables con documentación completa y herramientas de desarrollo.',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=600&h=400&fit=crop',
      category: 'design',
      technologies: ['React', 'Storybook', 'TypeScript', 'Styled Components'],
      github: 'https://github.com/tu-usuario/design-system',
      demo: 'https://design-system-demo.netlify.app',
      features: ['Storybook', 'TypeScript', 'Documentación', 'Testing']
    }
  ]

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)

  return (
    <section id="projects" style={{
      minHeight: '100vh',
      width: '100%',
      backgroundColor: 'rgba(31, 41, 55, 0.5)',
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
            Mis <span className="gradient-text">Proyectos</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Una selección de proyectos que muestran mi experiencia en diferentes 
            tecnologías y enfoques de desarrollo.
          </p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <Icon size={20} />
                <span>{filter.label}</span>
              </button>
            )
          })}
        </motion.div>

        {/* Grid de Proyectos */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative bg-gray-800/50 rounded-xl overflow-hidden hover:bg-gray-800/80 transition-all duration-300 hover:scale-105"
              >
                {/* Imagen */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                  
                  {/* Overlay con botones */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                    className="absolute inset-0 bg-black/50 flex items-center justify-center space-x-4"
                  >
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-primary-600 rounded-full text-white hover:bg-primary-700 transition-colors"
                    >
                      <Eye size={20} />
                    </motion.a>
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 bg-gray-700 rounded-full text-white hover:bg-gray-600 transition-colors"
                    >
                      <Github size={20} />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Características */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.features.slice(0, 2).map((feature) => (
                      <span
                        key={feature}
                        className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Tecnologías */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full border border-primary-600/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Enlaces */}
                  <div className="flex space-x-4">
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-primary-400 hover:text-primary-300 transition-colors text-sm"
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      <Github size={16} />
                      <span>Código</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            ¿Te gusta lo que ves?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Estos son solo algunos ejemplos de mi trabajo. Si quieres ver más proyectos 
            o discutir una colaboración, no dudes en contactarme.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/tu-usuario"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Ver Más en GitHub
            </a>
            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Iniciar Proyecto
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
