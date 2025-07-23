import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download } from 'lucide-react'
import { useResponsive } from '../../hooks/useResponsive'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [sunHover, setSunHover] = useState(false)
  const [moonHover, setMoonHover] = useState(false)
  const [textEffect, setTextEffect] = useState('normal')
  const [shootingStar, setShootingStar] = useState({ show: false, type: 'sun' })
  const { isMobile, isTablet, isDesktop } = useResponsive()

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isMobile) {
        setMousePosition({ x: e.clientX, y: e.clientY })
      }
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [isMobile])

  // Función para activar estrella fugaz
  const triggerShootingStar = (type) => {
    setShootingStar({ show: true, type })
    setTimeout(() => {
      setShootingStar({ show: false, type })
    }, 1500)
  }

  // Función para obtener estilos de texto del título
  const getTextStyle = () => {
    const baseStyle = {
      fontSize: window.innerWidth >= 1024 ? 'clamp(2.5rem, 5vw, 4rem)' : 'clamp(2rem, 6vw, 3rem)',
      fontWeight: 700,
      marginBottom: '1rem',
      background: 'linear-gradient(135deg, #60A5FA 0%, #C084FC 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      transition: 'filter 0.3s ease'
    }

    if (textEffect === 'sun') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #FCD34D 0%, #F59E0B 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }
    } else if (textEffect === 'moon') {
      return {
        ...baseStyle,
        background: 'linear-gradient(135deg, #93C5FD 0%, #DBEAFE 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text'
      }
    }

    return baseStyle
  }

  // Crear entorno espacial completo con galaxias y nebulosas
  const createSpaceEnvironment = () => {
    const spaceElements = []
    
    // Galaxia espiral principal
    spaceElements.push(
      <motion.div
        key="main-galaxy"
        style={{
          position: 'absolute',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse at center, rgba(138, 43, 226, 0.4) 0%, rgba(75, 0, 130, 0.3) 30%, rgba(25, 25, 112, 0.2) 60%, transparent 100%)',
          left: '10%',
          top: '10%',
          pointerEvents: 'none',
        }}
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 60,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Brazos espirales de la galaxia */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`spiral-${i}`}
            style={{
              position: 'absolute',
              width: '3px',
              height: '250px',
              background: 'linear-gradient(to top, transparent, rgba(255, 255, 255, 0.6), transparent)',
              left: '50%',
              top: '50%',
              transformOrigin: '1.5px 0px',
              transform: `rotate(${i * 90}deg)`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </motion.div>
    )

    // Nebulosa colorida
    spaceElements.push(
      <motion.div
        key="nebula-1"
        style={{
          position: 'absolute',
          width: '400px',
          height: '300px',
          background: 'radial-gradient(ellipse at 30% 40%, rgba(255, 20, 147, 0.3) 0%, rgba(138, 43, 226, 0.2) 40%, transparent 70%)',
          borderRadius: '60% 40% 80% 20%',
          right: '15%',
          top: '30%',
          pointerEvents: 'none',
          filter: 'blur(1px)',
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    )

    // Segunda nebulosa
    spaceElements.push(
      <motion.div
        key="nebula-2"
        style={{
          position: 'absolute',
          width: '350px',
          height: '350px',
          background: 'radial-gradient(circle at 60% 30%, rgba(0, 191, 255, 0.3) 0%, rgba(30, 144, 255, 0.2) 50%, transparent 80%)',
          borderRadius: '70% 30% 60% 40%',
          left: '60%',
          bottom: '20%',
          pointerEvents: 'none',
          filter: 'blur(2px)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 20, 0],
          y: [0, -10, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    )

    // Campo de estrellas fijas con diferentes tamaños
    for (let i = 0; i < 100; i++) {
      const size = Math.random() * 2 + 0.5
      const brightness = Math.random()
      spaceElements.push(
        <motion.div
          key={`star-${i}`}
          style={{
            position: 'absolute',
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: `rgba(255, 255, 255, ${brightness})`,
            borderRadius: '50%',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            pointerEvents: 'none',
            boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${brightness * 0.5})`,
          }}
          animate={{
            opacity: [brightness * 0.3, brightness, brightness * 0.3],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: Math.random() * 4 + 3,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      )
    }

    // Meteoros ocasionales
    spaceElements.push(
      <motion.div
        key="meteor-1"
        style={{
          position: 'absolute',
          width: '3px',
          height: '30px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.9), transparent)',
          right: '20%',
          top: '10%',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
        animate={{
          x: [-50, window.innerWidth || 1200],
          y: [0, 300],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0,
          repeatDelay: 15,
          ease: "easeOut",
        }}
      />
    )

    spaceElements.push(
      <motion.div
        key="meteor-2"
        style={{
          position: 'absolute',
          width: '2px',
          height: '25px',
          background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.8), transparent)',
          left: '80%',
          top: '20%',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
        animate={{
          x: [-30, window.innerWidth || 1200],
          y: [0, 400],
          opacity: [0, 1, 1, 0],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          delay: 8,
          repeatDelay: 20,
          ease: "easeOut",
        }}
      />
    )

    // Agujero negro con disco de acreción
    spaceElements.push(
      <motion.div
        key="black-hole"
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          right: '5%',
          bottom: '15%',
          pointerEvents: 'none',
        }}
      >
        {/* Disco de acreción */}
        <motion.div
          style={{
            position: 'absolute',
            width: '120px',
            height: '120px',
            borderRadius: '50%',
            background: 'conic-gradient(from 0deg, rgba(255, 140, 0, 0.8), rgba(255, 69, 0, 0.6), rgba(255, 20, 147, 0.4), rgba(138, 43, 226, 0.6), rgba(255, 140, 0, 0.8))',
            filter: 'blur(2px)',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        {/* Centro del agujero negro */}
        <div
          style={{
            position: 'absolute',
            width: '40px',
            height: '40px',
            backgroundColor: '#000',
            borderRadius: '50%',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 20px rgba(0, 0, 0, 0.8)',
          }}
        />
      </motion.div>
    )

    // Satélites orbitando
    spaceElements.push(
      <motion.div
        key="satellite-orbit"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          left: '75%',
          top: '60%',
          pointerEvents: 'none',
        }}
      >
        <motion.div
          style={{
            position: 'absolute',
            width: '4px',
            height: '4px',
            backgroundColor: '#FFD700',
            borderRadius: '50%',
            top: '0%',
            left: '50%',
            boxShadow: '0 0 8px #FFD700',
            transformOrigin: '2px 100px',
          }}
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>
    )

    return spaceElements
  }
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

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" style={{ 
      minHeight: '100vh', 
      width: '100%',
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      position: 'relative', 
      overflow: 'visible' 
    }}>
      {/* Fondo espacial mejorado con entorno completo */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'radial-gradient(ellipse at center, #0a0a23 0%, #000511 30%, #000000 80%)' 
      }}>
        {/* Capa de profundidad espacial */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(ellipse at 70% 20%, rgba(138, 43, 226, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(30, 144, 255, 0.1) 0%, transparent 50%), radial-gradient(ellipse at 90% 70%, rgba(255, 20, 147, 0.1) 0%, transparent 40%)' 
        }}></div>
        
        {/* Entorno espacial completo */}
        {createSpaceEnvironment()}
      </div>

      {/* Sol a la derecha */}
      <motion.div
        style={{
          position: 'absolute',
          right: window.innerWidth >= 1024 ? '5%' : '2%', // Ajuste para móvil
          top: window.innerWidth >= 1024 ? '20%' : '15%',
          width: window.innerWidth >= 1024 ? '120px' : '80px', // Más pequeño en móvil
          height: window.innerWidth >= 1024 ? '120px' : '80px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, #FCD34D 0%, #F59E0B 70%, #D97706 100%)',
          boxShadow: '0 0 40px rgba(252, 211, 77, 0.6)',
          cursor: 'pointer',
          zIndex: 5,
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 0 60px rgba(252, 211, 77, 0.8)',
        }}
        onHoverStart={() => {
          setSunHover(true)
          setTextEffect('sun')
        }}
        onHoverEnd={() => {
          setSunHover(false)
          setTextEffect('normal')
        }}
        onClick={() => triggerShootingStar('sun')}
        animate={{
          rotate: 360,
        }}
        transition={{
          rotate: {
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }
        }}
      >
        {/* Rayos del sol */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '4px',
              height: '30px',
              background: 'linear-gradient(to top, transparent, #FCD34D)',
              left: '50%',
              top: '-35px',
              transformOrigin: '2px 95px',
              transform: `translateX(-50%) rotate(${i * 45}deg)`,
            }}
            animate={{
              opacity: sunHover ? [0.6, 1, 0.6] : [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      {/* Luna a la izquierda */}
      <motion.div
        style={{
          position: 'absolute',
          left: window.innerWidth >= 1024 ? '5%' : '2%', // Ajuste para móvil
          top: window.innerWidth >= 1024 ? '25%' : '20%',
          width: window.innerWidth >= 1024 ? '100px' : '70px', // Más pequeña en móvil
          height: window.innerWidth >= 1024 ? '100px' : '70px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #E5E7EB 0%, #9CA3AF 50%, #6B7280 100%)',
          boxShadow: '0 0 30px rgba(156, 163, 175, 0.4)',
          cursor: 'pointer',
          zIndex: 5,
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 0 50px rgba(147, 197, 253, 0.6)',
        }}
        onHoverStart={() => {
          setMoonHover(true)
          setTextEffect('moon')
        }}
        onHoverEnd={() => {
          setMoonHover(false)
          setTextEffect('normal')
        }}
        onClick={() => triggerShootingStar('moon')}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Cráteres de la luna */}
        <div style={{
          position: 'absolute',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          backgroundColor: '#6B7280',
          top: '20%',
          left: '25%',
        }} />
        <div style={{
          position: 'absolute',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: '#6B7280',
          top: '60%',
          left: '60%',
        }} />
        <div style={{
          position: 'absolute',
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: '#6B7280',
          top: '40%',
          left: '15%',
        }} />

        {/* Estrellas alrededor de la luna */}
        {moonHover && [...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '3px',
              height: '3px',
              backgroundColor: '#93C5FD',
              borderRadius: '50%',
              left: `${Math.cos(i * 60 * Math.PI / 180) * 80 + 50}px`,
              top: `${Math.sin(i * 60 * Math.PI / 180) * 80 + 50}px`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Estrella fugaz activada por clic en sol o luna */}
      {shootingStar.show && (
        <motion.div
          key={`shooting-star-${shootingStar.type}-${Date.now()}`}
          style={{
            position: 'absolute',
            left: '-50px',
            top: '30%',
            width: '100%',
            height: '200px',
            zIndex: 15,
            pointerEvents: 'none',
          }}
          animate={{
            x: [0, window.innerWidth + 100],
          }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
        >
          {/* Cabeza brillante de la estrella */}
          <motion.div
            style={{
              position: 'absolute',
              width: '8px',
              height: '8px',
              backgroundColor: shootingStar.type === 'sun' ? '#FFFFFF' : '#E1F5FE',
              borderRadius: '50%',
              left: '0px',
              top: '50%',
              transform: 'translateY(-50%)',
              boxShadow: shootingStar.type === 'sun'
                ? '0 0 15px #FCD34D, 0 0 30px #F59E0B, 0 0 45px #FBBF24'
                : '0 0 15px #93C5FD, 0 0 30px #60A5FA, 0 0 45px #DBEAFE',
            }}
            animate={{
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 0.3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Cola principal de la estrella fugaz */}
          <motion.div
            style={{
              position: 'absolute',
              width: '200px',
              height: '3px',
              background: shootingStar.type === 'sun'
                ? 'linear-gradient(90deg, rgba(252, 211, 77, 0.9) 0%, rgba(251, 191, 36, 0.7) 30%, rgba(245, 158, 11, 0.5) 60%, transparent 100%)'
                : 'linear-gradient(90deg, rgba(147, 197, 253, 0.9) 0%, rgba(96, 165, 250, 0.7) 30%, rgba(59, 130, 246, 0.5) 60%, transparent 100%)',
              left: '-200px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderRadius: '50px',
            }}
            animate={{
              scaleX: [0, 1, 0.8],
              opacity: [0, 1, 0.7],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
            }}
          />

          {/* Cola secundaria más larga */}
          <motion.div
            style={{
              position: 'absolute',
              width: '350px',
              height: '1.5px',
              background: shootingStar.type === 'sun'
                ? 'linear-gradient(90deg, rgba(252, 211, 77, 0.6) 0%, rgba(251, 191, 36, 0.4) 20%, rgba(245, 158, 11, 0.2) 40%, transparent 100%)'
                : 'linear-gradient(90deg, rgba(147, 197, 253, 0.6) 0%, rgba(96, 165, 250, 0.4) 20%, rgba(59, 130, 246, 0.2) 40%, transparent 100%)',
              left: '-350px',
              top: '50%',
              transform: 'translateY(-50%)',
              borderRadius: '50px',
            }}
            animate={{
              scaleX: [0, 1, 0.9],
              opacity: [0, 0.8, 0.5],
            }}
            transition={{
              duration: 1.5,
              ease: "easeOut",
              delay: 0.1,
            }}
          />

          {/* Partículas brillantes que se dispersan */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '2px',
                backgroundColor: shootingStar.type === 'sun' ? '#FCD34D' : '#93C5FD',
                borderRadius: '50%',
                left: `${-10 - i * 15}px`,
                top: `${50 + (Math.random() - 0.5) * 40}%`,
                boxShadow: shootingStar.type === 'sun'
                  ? '0 0 4px #FCD34D'
                  : '0 0 4px #93C5FD',
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1.2, 0],
                y: [0, (Math.random() - 0.5) * 20],
              }}
              transition={{
                duration: 1.2,
                delay: i * 0.05,
                ease: "easeOut",
              }}
            />
          ))}

          {/* Efecto de resplandor adicional */}
          <motion.div
            style={{
              position: 'absolute',
              width: '15px',
              height: '15px',
              background: shootingStar.type === 'sun'
                ? 'radial-gradient(circle, rgba(252, 211, 77, 0.6) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(147, 197, 253, 0.6) 0%, transparent 70%)',
              borderRadius: '50%',
              left: '-7px',
              top: '50%',
              transform: 'translateY(-50%)',
              filter: 'blur(2px)',
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.8, 1, 0.6],
            }}
            transition={{
              duration: 0.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      )}

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 1rem', position: 'relative', zIndex: 10 }}>
        {/* Contenido principal */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ 
            color: 'white', 
            textAlign: 'center',
            marginTop: '4rem',
            maxWidth: '800px',
            margin: '0 auto',
            padding: '0 1rem' // Padding para móvil
          }}
        >
            {/* Saludo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ 
                marginBottom: '2rem',
                filter: textEffect === 'sun' ? 'brightness(1.3)' : textEffect === 'moon' ? 'brightness(0.8) contrast(1.2)' : 'none',
                transition: 'filter 0.3s ease'
              }}
            >
              <p style={{ color: '#C084FC', fontSize: '1.125rem', fontWeight: 500, marginBottom: '0.5rem' }}>
                ¡Hola! 👋 Soy
              </p>
              <h1 style={getTextStyle()}>
                Jean Perez
              </h1>
              <div style={{ 
                fontSize: window.innerWidth >= 1024 ? 'clamp(1.5rem, 4vw, 2.25rem)' : 'clamp(1.25rem, 5vw, 1.8rem)', // Más pequeño en móvil
                fontWeight: 600,
                filter: textEffect === 'sun' ? 'brightness(1.2)' : textEffect === 'moon' ? 'brightness(0.9)' : 'none',
                transition: 'filter 0.3s ease'
              }}>
                <span style={{ 
                  background: 'linear-gradient(135deg, #F59E0B 0%, #EC4899 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>Analista</span>
                <br />
                <span style={{ color: '#E5E7EB' }}>Programador Computacional</span>
              </div>
            </motion.div>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ 
                fontSize: window.innerWidth >= 1024 ? '1.25rem' : '1.1rem', // Ajustado para móvil
                color: textEffect === 'sun' ? '#FEF3C7' : textEffect === 'moon' ? '#DBEAFE' : '#d1d5db', 
                maxWidth: window.innerWidth >= 1024 ? '32rem' : '28rem', // Más estrecho en móvil
                lineHeight: 1.6,
                margin: '0 auto 2rem auto',
                transition: 'color 0.3s ease'
              }}
            >
              Especializado en crear experiencias web modernas y aplicaciones 
              escalables con React, Node.js y tecnologías de vanguardia.
            </motion.p>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              style={{ 
                display: 'flex', 
                flexDirection: window.innerWidth >= 768 ? 'row' : 'column', // Vertical en móvil, horizontal en tablet+
                gap: '1rem', 
                alignItems: 'center', 
                justifyContent: 'center',
                marginBottom: '2rem',
                flexWrap: 'wrap' // Permite wrap en pantallas intermedias
              }}
            >
              <button 
                onClick={() => {
                  const projectsSection = document.getElementById('projects')
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary"
              >
                Ver Proyectos
              </button>
              <a
                href="/cv.pdf"
                download
                className="btn-secondary"
                style={{ textDecoration: 'none' }}
              >
                <Download size={20} style={{ marginRight: '0.5rem' }} />
                <span>Descargar CV</span>
              </a>
            </motion.div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}
            >
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      padding: '0.75rem',
                      backgroundColor: '#374151',
                      borderRadius: '0.5rem',
                      color: '#d1d5db',
                      transition: 'all 0.3s ease',
                      textDecoration: 'none'
                    }}
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

export default Hero
