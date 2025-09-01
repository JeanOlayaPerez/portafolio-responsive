import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Contact from './components/sections/Contact'
import LoadingScreen from './components/common/LoadingScreen'
import SectionNavigator from './components/common/SectionNavigator'
import MobileNavIndicator from './components/common/MobileNavIndicator'
import { useResponsive } from './hooks/useResponsive'
import { Home, User, Code, Briefcase, Mail, Award } from 'lucide-react'

function App() {
  const [loading, setLoading] = useState(true)
  const [activeSection, setActiveSection] = useState('hero')
  const { isMobile } = useResponsive()

  useEffect(() => {
    // Simular tiempo de carga
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  // Corrige comportamiento de 100vh en móviles: setear --vh en root
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty('--vh', `${window.innerHeight * 0.01}px`)
    }

    setVh()
    window.addEventListener('resize', setVh)
    window.addEventListener('orientationchange', setVh)
    return () => {
      window.removeEventListener('resize', setVh)
      window.removeEventListener('orientationchange', setVh)
    }
  }, [])

  // Escuchar cambios de sección para el indicador móvil
  useEffect(() => {
    const handleSectionChange = () => {
      const sections = navItems.map(item => item.id)
      const currentSection = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener('scroll', handleSectionChange)
    return () => window.removeEventListener('scroll', handleSectionChange)
  }, [])

  // Secciones para la navegación
  const sections = [
    <Hero key="hero" />,
    <About key="about" />,
    <Skills key="skills" />,
    <Projects key="projects" />,
    <Experience key="experience" />,
    <div key="contact-footer">
      <Contact />
      <Footer />
    </div>
  ]

  const sectionIds = ['hero', 'about', 'skills', 'projects', 'experience', 'contact']
  
  // Items de navegación para el indicador móvil
  const navItems = [
    { id: 'hero', label: 'Inicio', icon: Home },
    { id: 'about', label: 'Sobre mí', icon: User },
    { id: 'skills', label: 'Habilidades', icon: Code },
    { id: 'projects', label: 'Proyectos', icon: Briefcase },
    { id: 'experience', label: 'Experiencia', icon: Award },
    { id: 'contact', label: 'Contacto', icon: Mail },
  ]

  return (
  <div className="App" style={{ minHeight: 'calc(var(--vh, 1vh) * 100)', backgroundColor: '#111827' }}>
      <AnimatePresence mode="wait">
        {loading ? (
          <LoadingScreen key="loading" />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            style={{ minHeight: 'calc(var(--vh, 1vh) * 100)', backgroundColor: '#111827' }}
          >
            <Navbar />
            <SectionNavigator sectionIds={sectionIds}>
              {sections}
            </SectionNavigator>
            
            {/* Indicador de navegación móvil */}
            {isMobile && (
              <MobileNavIndicator 
                activeSection={activeSection} 
                navItems={navItems}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
