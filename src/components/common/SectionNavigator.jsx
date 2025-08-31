import React, { useState, useEffect, useCallback, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SectionNavigator = ({ children, sectionIds }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [scrollDirection, setScrollDirection] = useState(null)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [isDesktop, setIsDesktop] = useState(false)
  
  const sectionRef = useRef(null)
  const scrollContainerRef = useRef(null)
  const transitionTimeoutRef = useRef(null)

  // Detectar si es desktop
  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)
    return () => window.removeEventListener('resize', checkIsDesktop)
  }, [])

  // Determinar si se debe renderizar la navegación especial
  const shouldRenderNavigator = isDesktop;

  // Configuración de la transición rápida (solo para desktop)
  const transitionDuration = 0.3 // 300ms - súper rápido

  // Mecanismo de recuperación para isTransitioning bloqueado
  useEffect(() => {
    if (isTransitioning) {
      // Seguridad: resetear isTransitioning después de un tiempo máximo
      const safetyTimeout = setTimeout(() => {
        console.warn('Force resetting isTransitioning - safety mechanism')
        setIsTransitioning(false)
        setScrollDirection(null)
      }, (transitionDuration * 1000) + 500) // 500ms extra de seguridad

      return () => clearTimeout(safetyTimeout)
    }
  }, [isTransitioning, transitionDuration])

  const updateScrollState = useCallback(() => {
    if (!scrollContainerRef.current || isTransitioning) return

    const container = scrollContainerRef.current
    const scrollTop = container.scrollTop
    const scrollHeight = container.scrollHeight
    const clientHeight = container.clientHeight
    const maxScroll = scrollHeight - clientHeight

    // Calcular progreso de scroll (0 a 1)
    const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollTop / maxScroll)) : 0
    setScrollProgress(progress)

    console.log('Scroll state updated:', {
      scrollTop: Math.round(scrollTop),
      maxScroll: Math.round(maxScroll),
      progress: Math.round(progress * 100) + '%'
    })
  }, [isTransitioning])

  const handleSectionChange = useCallback((newIndex, direction) => {
    if (isTransitioning || newIndex < 0 || newIndex >= sectionIds.length) return
    
    console.log(`Section change: ${currentSectionIndex} -> ${newIndex} (${direction})`)
    
    setIsTransitioning(true)
    setScrollDirection(direction)
    setCurrentSectionIndex(newIndex)
    
    // Resetear scroll y estado de forma más robusta
    const resetTimeout = setTimeout(() => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollTop = 0
        console.log('Scroll reset to top')
      }
      setScrollProgress(0)
      
      // Limpiar estado de transición de forma segura
      const finishTimeout = setTimeout(() => {
        setIsTransitioning(false)
        setScrollDirection(null)
        
        // Forzar actualización del estado de scroll
        requestAnimationFrame(() => {
          updateScrollState()
        })
      }, 50)
      
      return () => clearTimeout(finishTimeout)
    }, transitionDuration * 1000)
    
    return () => clearTimeout(resetTimeout)
  }, [currentSectionIndex, isTransitioning, sectionIds.length, transitionDuration, updateScrollState])

  const handleWheel = useCallback((e) => {
    const isVerticalScroll = Math.abs(e.deltaY) > Math.abs(e.deltaX)
    if (!isVerticalScroll || isTransitioning) {
      return
    }

    const container = scrollContainerRef.current
    if (!container) return

    // Obtener estado actual de scroll con mayor precisión
    const scrollTop = container.scrollTop
    const scrollHeight = container.scrollHeight
    const clientHeight = container.clientHeight
    const maxScroll = scrollHeight - clientHeight
    const tolerance = 5 // Reducir tolerancia para mayor precisión

    const isAtTop = scrollTop <= tolerance
    const isAtBottom = Math.abs(scrollTop - maxScroll) <= tolerance
    const isScrollingDown = e.deltaY > 0
    const isScrollingUp = e.deltaY < 0

    console.log('Wheel Event:', {
      isScrollingDown,
      isScrollingUp,
      isAtTop,
      isAtBottom,
      scrollTop: Math.round(scrollTop),
      maxScroll: Math.round(maxScroll),
      clientHeight: Math.round(clientHeight),
      scrollHeight: Math.round(scrollHeight),
      currentSection: currentSectionIndex,
      hasContent: maxScroll > 0,
      isTransitioning
    })

    // Lógica mejorada para navegación entre secciones
    let shouldNavigate = false
    let nextSection = currentSectionIndex

    // Si estamos en el límite superior y scrolleamos hacia arriba
    if (isAtTop && isScrollingUp && currentSectionIndex > 0) {
      shouldNavigate = true
      nextSection = currentSectionIndex - 1
      console.log('Trigger: Going UP to previous section')
    }
    // Si estamos en el límite inferior y scrolleamos hacia abajo
    else if (isAtBottom && isScrollingDown && currentSectionIndex < sectionIds.length - 1) {
      shouldNavigate = true
      nextSection = currentSectionIndex + 1
      console.log('Trigger: Going DOWN to next section')
    }
    // Para secciones que no tienen scroll (height <= viewport)
    else if (maxScroll <= 10) {
      shouldNavigate = true
      if (isScrollingDown && currentSectionIndex < sectionIds.length - 1) {
        nextSection = currentSectionIndex + 1
        console.log('Trigger: No scroll content, going DOWN')
      } else if (isScrollingUp && currentSectionIndex > 0) {
        nextSection = currentSectionIndex - 1
        console.log('Trigger: No scroll content, going UP')
      } else {
        shouldNavigate = false
      }
    }

    if (shouldNavigate && nextSection !== currentSectionIndex) {
      e.preventDefault()
      e.stopPropagation()
      handleSectionChange(nextSection, nextSection > currentSectionIndex ? 'down' : 'up')
    } else {
      // En cualquier otro caso, permitir scroll normal
      console.log('Allowing normal scroll')
    }
  }, [currentSectionIndex, isTransitioning, sectionIds.length, handleSectionChange])

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    const handleScroll = () => {
      if (!isTransitioning) {
        updateScrollState()
      }
    }

    const handleKeyDown = (e) => {
      if (isTransitioning) return

      const container = scrollContainerRef.current
      if (!container) return

      const scrollTop = container.scrollTop
      const scrollHeight = container.scrollHeight
      const clientHeight = container.clientHeight
      const maxScroll = scrollHeight - clientHeight
      const tolerance = 5

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          if (scrollTop >= (maxScroll - tolerance) || maxScroll <= 10) {
            e.preventDefault()
            if (currentSectionIndex < sectionIds.length - 1) {
              handleSectionChange(currentSectionIndex + 1, 'down')
            }
          }
          break
        case 'ArrowUp':
        case 'PageUp':
          if (scrollTop <= tolerance) {
            e.preventDefault()
            if (currentSectionIndex > 0) {
              handleSectionChange(currentSectionIndex - 1, 'up')
            }
          }
          break
        case 'Home':
          e.preventDefault()
          container.scrollTop = 0
          break
        case 'End':
          e.preventDefault()
          container.scrollTop = container.scrollHeight
          break
      }
    }

    // Navegación desde el Navbar
    const handleNavbarNavigation = (e) => {
      const { sectionIndex } = e.detail
      if (sectionIndex !== currentSectionIndex && !isTransitioning) {
        handleSectionChange(sectionIndex, sectionIndex > currentSectionIndex ? 'down' : 'up')
      }
    }

    // Event listeners con opciones optimizadas
    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('keydown', handleKeyDown)
    window.addEventListener('navigateToSection', handleNavbarNavigation)

    // Estado inicial con delay reducido
    const initTimeout = setTimeout(() => {
      updateScrollState()
    }, 100)

    // Cleanup function mejorada
    return () => {
      clearTimeout(initTimeout)
      if (container) {
        container.removeEventListener('wheel', handleWheel)
        container.removeEventListener('scroll', handleScroll)
      }
      document.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('navigateToSection', handleNavbarNavigation)
    }
  }, [currentSectionIndex, isTransitioning, handleSectionChange, handleWheel, updateScrollState, sectionIds.length])

  // Variantes de animación para el fade rápido
  const fadeVariants = {
    enter: (direction) => ({
      opacity: 0,
      scale: 0.95,
      y: direction === 'down' ? 20 : -20,
    }),
    center: {
      opacity: 1,
      scale: 1,
      y: 0,
    },
    exit: (direction) => ({
      opacity: 0,
      scale: 0.95,
      y: direction === 'down' ? -20 : 20,
    })
  }

  const transition = {
    duration: transitionDuration,
    ease: [0.25, 0.46, 0.45, 0.94] // Curva de animación suave pero rápida
  }

  if (shouldRenderNavigator) {
    return (
      <div style={{ 
        height: '100vh', 
        width: '100vw',
        overflow: 'hidden', 
        position: 'relative',
        background: '#111827' 
      }}>
        <AnimatePresence mode="wait" custom={scrollDirection}>
          <motion.div
            key={currentSectionIndex}
            custom={scrollDirection}
            variants={fadeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          >
            {/* Contenedor de scroll interno */}
            <div
              ref={scrollContainerRef}
              style={{
                height: '100vh',
                width: '100%',
                overflowY: 'auto',
                overflowX: 'hidden',
                paddingTop: '80px', // Espacio para header
                scrollBehavior: 'smooth',
                // Ocultar scrollbar nativa
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
              className="custom-scrollbar"
            >
              <div style={{ minHeight: 'calc(100vh - 80px)' }}>
                {children[currentSectionIndex]}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Barra de scroll visual (izquierda) */}
        <div style={{
          position: 'fixed',
          left: '1rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          width: '4px',
          height: '60vh',
          background: 'rgba(255, 255, 255, 0.1)',
          borderRadius: '2px',
          overflow: 'hidden'
        }}>
          {/* Indicador de progreso */}
          <motion.div
            style={{
              width: '100%',
              background: 'linear-gradient(to bottom, #8B5CF6, #A855F7)',
              borderRadius: '2px',
              transformOrigin: 'top',
            }}
            animate={{
              height: `${scrollProgress * 100}%`,
            }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Indicador de secciones (derecha) */}
        <div style={{
          position: 'fixed',
          right: '2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          zIndex: 1000,
          display: 'flex',
          flexDirection: 'column',
          gap: '0.75rem'
        }}>
          {sectionIds.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => !isTransitioning && handleSectionChange(index, index > currentSectionIndex ? 'down' : 'up')}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                border: 'none',
                background: index === currentSectionIndex 
                  ? 'linear-gradient(45deg, #8B5CF6, #A855F7)' 
                  : 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                opacity: isTransitioning ? 0.5 : 1,
                boxShadow: index === currentSectionIndex 
                  ? '0 0 15px rgba(139, 92, 246, 0.5)' 
                  : 'none'
              }}
              whileHover={{ 
                scale: 1.3,
                background: index === currentSectionIndex 
                  ? 'linear-gradient(45deg, #8B5CF6, #A855F7)' 
                  : 'rgba(255, 255, 255, 0.6)'
              }}
              whileTap={{ scale: 0.9 }}
              disabled={isTransitioning}
            />
          ))}
        </div>

        {/* Indicador de navegación */}
        {!isTransitioning && (
          <motion.div
            style={{
              position: 'fixed',
              bottom: '2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              zIndex: 1000,
              color: 'rgba(255, 255, 255, 0.6)',
              fontSize: '0.875rem',
              textAlign: 'center',
              padding: '0.75rem 1.5rem',
              background: 'rgba(0, 0, 0, 0.3)',
              borderRadius: '25px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <div style={{ marginBottom: '0.25rem', fontWeight: '500' }}>
              {sectionIds[currentSectionIndex].charAt(0).toUpperCase() + sectionIds[currentSectionIndex].slice(1)}
            </div>
            <div style={{ fontSize: '0.75rem', opacity: 0.8 }}>
              {Math.round(scrollProgress * 100)}% • {currentSectionIndex + 1}/{sectionIds.length}
            </div>
          </motion.div>
        )}

        {/* Overlay de transición */}
        <AnimatePresence>
          {isTransitioning && (
            <motion.div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'rgba(17, 24, 39, 0.8)',
                zIndex: 999,
                pointerEvents: 'none'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: transitionDuration * 0.5 }}
            />
          )}
        </AnimatePresence>

        {/* CSS para ocultar scrollbar */}
        <style jsx>{`
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>
      </div>
    )
  }
  // Renderizado para mobile (sin navegación especial)
  return <div style={{ minHeight: '100vh' }}>{children}</div>;
}

export default SectionNavigator
