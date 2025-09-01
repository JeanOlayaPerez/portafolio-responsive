import React from 'react'
import { Code, Coffee, Users, Award, Lightbulb, Heart } from 'lucide-react'

const About = () => {
  return (
    <section id="about" className="section-padding container-custom flex flex-col items-center justify-center text-center gap-6">
      <h2 className="gradient-text text-2xl font-bold mb-2">Sobre mí</h2>
      <p className="text-gray-300 text-base max-w-xs mx-auto mb-4">
        Soy desarrollador web apasionado por crear experiencias digitales modernas y funcionales. Me especializo en React, Node.js y diseño centrado en el usuario.
      </p>
      <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
        <div className="flex flex-col items-center">
          <Code className="w-8 h-8 text-blue-400 mb-1" />
          <span className="text-xs text-gray-400">Frontend</span>
        </div>
        <div className="flex flex-col items-center">
          <Coffee className="w-8 h-8 text-yellow-400 mb-1" />
          <span className="text-xs text-gray-400">Café lover</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 text-green-400 mb-1" />
          <span className="text-xs text-gray-400">Trabajo en equipo</span>
        </div>
        <div className="flex flex-col items-center">
          <Award className="w-8 h-8 text-purple-400 mb-1" />
          <span className="text-xs text-gray-400">Premios</span>
        </div>
        <div className="flex flex-col items-center">
          <Lightbulb className="w-8 h-8 text-yellow-300 mb-1" />
          <span className="text-xs text-gray-400">Creativo</span>
        </div>
        <div className="flex flex-col items-center">
          <Heart className="w-8 h-8 text-pink-400 mb-1" />
          <span className="text-xs text-gray-400">Apasionado</span>
        </div>
      </div>
      <p className="text-primary-400 text-sm italic mb-2">
        "La tecnología es el puente entre ideas y realidad."
      </p>
    </section>
  )
}

export default About
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Coffee, Users, Award, Lightbulb, Heart } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  })

  const [sunHover, setSunHover] = useState(false)
  const [buildingHover, setBuildingHover] = useState(false)
  const [lightRays, setLightRays] = useState({ show: false, type: '' })

  // Función para activar rayos de luz
  const triggerLightRays = (type) => {
    setLightRays({ show: true, type })
    setTimeout(() => {
      setLightRays({ show: false, type: '' })
    }, 3000)
  }

  // Crear entorno de atardecer de Santiago con Costanera Center
  const createSantiagoSunset = () => {
    const sunsetElements = []
    
    // Cordillera de los Andes (fondo)
    sunsetElements.push(
      <motion.div
        key="mountains"
        style={{
          position: 'absolute',
          bottom: '0',
          left: '0',
          width: '100%',
          height: '35%',
          background: 'linear-gradient(to top, rgba(25, 25, 112, 0.9) 0%, rgba(72, 61, 139, 0.7) 50%, rgba(106, 90, 205, 0.5) 100%)',
          clipPath: 'polygon(0% 100%, 0% 60%, 8% 45%, 15% 55%, 25% 40%, 35% 50%, 45% 35%, 55% 45%, 65% 30%, 75% 40%, 85% 25%, 95% 35%, 100% 30%, 100% 100%)',
          zIndex: 1,
        }}
      return (
        <section id="about" className="section-padding container-custom flex flex-col items-center justify-center text-center gap-6">
          <h2 className="gradient-text text-2xl font-bold mb-2">Sobre mí</h2>
          <p className="text-gray-300 text-base max-w-xs mx-auto mb-4">
            Soy desarrollador web apasionado por crear experiencias digitales modernas y funcionales. Me especializo en React, Node.js y diseño centrado en el usuario.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 mb-4">
            <div className="flex flex-col items-center">
              <Code className="w-8 h-8 text-blue-400 mb-1" />
              <span className="text-xs text-gray-400">Frontend</span>
            </div>
            <div className="flex flex-col items-center">
              <Coffee className="w-8 h-8 text-yellow-400 mb-1" />
              <span className="text-xs text-gray-400">Café lover</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 text-green-400 mb-1" />
              <span className="text-xs text-gray-400">Trabajo en equipo</span>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-8 h-8 text-purple-400 mb-1" />
              <span className="text-xs text-gray-400">Premios</span>
            </div>
            <div className="flex flex-col items-center">
              <Lightbulb className="w-8 h-8 text-yellow-300 mb-1" />
              <span className="text-xs text-gray-400">Creativo</span>
            </div>
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 text-pink-400 mb-1" />
              <span className="text-xs text-gray-400">Apasionado</span>
            </div>
          </div>
          <p className="text-primary-400 text-sm italic mb-2">
            "La tecnología es el puente entre ideas y realidad."
          </p>
        </section>
      )
    }

    export default About
                        <span className="text-xs text-gray-400">Frontend</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Coffee className="w-8 h-8 text-yellow-400 mb-1" />
                        <span className="text-xs text-gray-400">Café lover</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Users className="w-8 h-8 text-green-400 mb-1" />
                        <span className="text-xs text-gray-400">Trabajo en equipo</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Award className="w-8 h-8 text-purple-400 mb-1" />
                        <span className="text-xs text-gray-400">Premios</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Lightbulb className="w-8 h-8 text-yellow-300 mb-1" />
                        <span className="text-xs text-gray-400">Creativo</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Heart className="w-8 h-8 text-pink-400 mb-1" />
                        <span className="text-xs text-gray-400">Apasionado</span>
                      </div>
                    </div>
                    <p className="text-primary-400 text-sm italic mb-2">
                      "La tecnología es el puente entre ideas y realidad."
                    </p>
                  </section>
                )
              }

              export default About
            <div style={{
              position: 'relative',
              width: '100%',
              height: '100%',
            }}>
              <div style={{
                position: 'absolute',
                width: '4px',
                height: '1px',
                backgroundColor: '#2C3E50',
                transform: 'rotate(-20deg)',
                left: '0px',
                top: '2px',
              }} />
              <div style={{
                position: 'absolute',
                width: '4px',
                height: '1px',
                backgroundColor: '#2C3E50',
                transform: 'rotate(20deg)',
                right: '0px',
                top: '2px',
              }} />
            </div>
          </motion.div>
        )
      }
    })

    return sunsetElements
  }

  const stats = [
    { icon: Code, label: 'Proyectos Completados', value: '10+' },
    { icon: Coffee, label: 'Tazas de Café', value: '1000+' },
    { icon: Users, label: 'Clientes Satisfechos', value: '5+' },
    { icon: Award, label: 'Años de Experiencia', value: '2+' }
  ]

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Siempre buscando nuevas tecnologías y enfoques creativos para resolver problemas complejos.'
    },
    {
      icon: Heart,
      title: 'Pasión',
      description: 'Amo lo que hago y eso se refleja en cada línea de código que escribo.'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Creo en el poder del trabajo en equipo y la comunicación efectiva.'
    }
  ]

  return (
    <section id="about" style={{ 
      minHeight: '100vh',
      width: '100%',
      position: 'relative', 
      overflow: 'visible'
    }}>
      {/* Fondo de atardecer de Santiago */}
      <div style={{ 
        position: 'absolute', 
        inset: 0, 
        background: 'linear-gradient(to bottom, #FFE5B3 0%, #FFB84D 15%, #FF8C42 30%, #FF6B35 50%, #D63031 70%, #74B9FF 85%, #0984E3 100%)' 
      }}>
        {/* Capa de atmósfera dorada */}
        <div style={{ 
          position: 'absolute', 
          inset: 0, 
          background: 'radial-gradient(ellipse at 70% 80%, rgba(255, 165, 0, 0.4) 0%, rgba(255, 140, 0, 0.3) 30%, rgba(255, 69, 0, 0.2) 50%, transparent 70%), radial-gradient(ellipse at 30% 20%, rgba(255, 192, 203, 0.2) 0%, transparent 50%)' 
        }}></div>
        
        {/* Entorno de Santiago al atardecer */}
        {createSantiagoSunset()}
      </div>

      {/* Sol en el horizonte */}
      <motion.div
        style={{
          position: 'absolute',
          right: '8%',
          top: '45%',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, #FFFBF0 0%, #FFE5B3 20%, #FFD700 50%, #FF8C00 80%, #FF4500 100%)',
          boxShadow: '0 0 60px rgba(255, 165, 0, 0.8), 0 0 120px rgba(255, 140, 0, 0.6)',
          cursor: 'pointer',
          zIndex: 6,
        }}
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 0 80px rgba(255, 165, 0, 0.9), 0 0 160px rgba(255, 140, 0, 0.7)',
        }}
        onHoverStart={() => {
          setSunHover(true)
        }}
        onHoverEnd={() => {
          setSunHover(false)
        }}
        onClick={() => triggerLightRays('sun')}
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Rayos del sol */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            style={{
              position: 'absolute',
              width: '3px',
              height: '40px',
              background: 'linear-gradient(to top, transparent, rgba(255, 215, 0, 0.8), transparent)',
              left: '50%',
              top: '-45px',
              transformOrigin: '1.5px 120px',
              transform: `translateX(-50%) rotate(${i * 30}deg)`,
            }}
            animate={{
              opacity: sunHover ? [0.7, 1, 0.7] : [0.4, 0.8, 0.4],
              scaleY: sunHover ? [1, 1.3, 1] : [0.8, 1.1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
          />
        ))}
      </motion.div>

      {/* Rayos de luz activados por clic en sol o edificio */}
      {lightRays.show && (
        <motion.div
          key={`light-rays-${lightRays.type}-${Date.now()}`}
          style={{
            position: 'absolute',
            right: lightRays.type === 'sun' ? '8%' : '15%',
            top: lightRays.type === 'sun' ? '45%' : '25%',
            width: '200px',
            height: '200px',
            zIndex: 20,
            pointerEvents: 'none',
          }}
        >
          {/* Múltiples rayos de luz */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              style={{
                position: 'absolute',
                width: '2px',
                height: '100px',
                background: lightRays.type === 'sun'
                  ? 'linear-gradient(to bottom, rgba(255, 215, 0, 0.9) 0%, rgba(255, 165, 0, 0.7) 50%, transparent 100%)'
                  : 'linear-gradient(to bottom, rgba(135, 206, 250, 0.8) 0%, rgba(70, 130, 180, 0.6) 50%, transparent 100%)',
                left: '50%',
                top: '50%',
                transformOrigin: '1px 0px',
                transform: `translateX(-50%) rotate(${i * 45}deg)`,
              }}
              animate={{
                opacity: [0, 1, 0.8, 0],
                scaleY: [0, 1.5, 1.2, 0],
              }}
              transition={{
                duration: 2.5,
                ease: "easeOut",
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Resplandor central */}
          <motion.div
            style={{
              position: 'absolute',
              width: '60px',
              height: '60px',
              background: lightRays.type === 'sun'
                ? 'radial-gradient(circle, rgba(255, 215, 0, 0.6) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(135, 206, 250, 0.5) 0%, transparent 70%)',
              borderRadius: '50%',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              filter: 'blur(3px)',
            }}
            animate={{
              scale: [1, 2, 1.5, 0],
              opacity: [0.8, 1, 0.6, 0],
            }}
            transition={{
              duration: 3,
              ease: "easeOut",
            }}
          />
        </motion.div>
      )}

      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '5rem 1rem', position: 'relative', zIndex: 10 }} ref={ref}>
        {/* Encabezado */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ 
            fontSize: 'clamp(2.5rem, 6vw, 3.5rem)', 
            fontWeight: 'bold', 
            color: '#FFFFFF', 
            marginBottom: '1.5rem',
            textShadow: '0 0 20px rgba(255, 165, 0, 0.6)',
            transition: 'color 0.5s ease'
          }}>
            Sobre <span style={{ 
              background: 'linear-gradient(135deg, #FFD700 0%, #FF6B35 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>Mí</span>
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: '#F5F5F5', 
            maxWidth: '48rem', 
            margin: '0 auto',
            textShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
            transition: 'color 0.5s ease'
          }}>
            Soy un desarrollador apasionado con experiencia en tecnologías modernas, 
            enfocado en crear soluciones web innovadoras y experiencias de usuario excepcionales.
          </p>
        </motion.div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: window.innerWidth >= 1024 ? '1fr 1fr' : '1fr', 
          gap: '4rem', 
          alignItems: 'center', 
          marginBottom: '5rem' 
        }}>
          {/* Tu foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <div style={{ position: 'relative', margin: '0 auto' }}>
              <motion.div
                style={{
                  width: '320px',
                  height: '320px',
                  borderRadius: '1rem',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FF6B35 100%)',
                  padding: '4px',
                  transition: 'all 0.5s ease',
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 2,
                }}
                onHoverStart={() => setBuildingHover(true)}
                onHoverEnd={() => setBuildingHover(false)}
              >
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '1rem',
                  background: '#F9FAFB',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  <img 
                    src="/fotocv.jpg" 
                    alt="Jean Perez - Desarrollador Web" 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '1rem',
                      display: 'block',
                    }}
                    onLoad={(e) => {
                      // Cuando la imagen carga correctamente, ocultar el fallback
                      const fallback = e.target.nextSibling
                      if (fallback) fallback.style.display = 'none'
                    }}
                    onError={(e) => {
                      // Si la imagen no carga, mostrar el fallback
                      console.log('Error cargando imagen, mostrando fallback')
                      e.target.style.display = 'none'
                      const fallback = e.target.nextSibling
                      if (fallback) fallback.style.display = 'flex'
                    }}
                  />
                  <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '4rem',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: 'rgba(249, 250, 251, 0.9)',
                  }}>
                    👨‍💻
                  </div>
                </div>
              </motion.div>
              
              {/* Efectos decorativos */}
              <motion.div
                style={{
                  position: 'absolute',
                  bottom: '-1rem',
                  right: '-1rem',
                  width: '6rem',
                  height: '6rem',
                  background: 'linear-gradient(45deg, #10B981 0%, #059669 100%)',
                  borderRadius: '1rem',
                  opacity: 0.2,
                  transition: 'all 0.5s ease',
                }}
                animate={{
                  scale: buildingHover ? [1, 1.2, 1] : [1, 1.1, 1],
                  rotate: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: 'bold', 
              color: '#FFFFFF', 
              marginBottom: '1.5rem',
              textShadow: '0 0 15px rgba(255, 165, 0, 0.5)',
              transition: 'color 0.5s ease'
            }}>
              Mi Historia
            </h3>
            <div style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1rem', 
              color: '#F5F5F5', 
              lineHeight: '1.7',
              textShadow: '0 0 8px rgba(0, 0, 0, 0.5)',
              transition: 'color 0.5s ease'
            }}>
              <p>
                Comencé mi viaje en el desarrollo web hace más de 3 años, fascinado por 
                la capacidad de crear experiencias digitales que impacten positivamente 
                en la vida de las personas.
              </p>
              <p>
                Me especializo en el ecosistema de JavaScript, con un enfoque particular 
                en React, Node.js y tecnologías modernas como Three.js para crear 
                experiencias inmersivas y aplicaciones web de alto rendimiento.
              </p>
              <p>
                Cuando no estoy programando, disfruto explorando nuevas tecnologías, 
                contribuyendo a proyectos de código abierto y compartiendo conocimientos 
                con la comunidad de desarrolladores.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1.5rem' }}
            >
              {['JavaScript', 'React', 'Node.js', 'TypeScript', 'Python'].map((tech, index) => (
                <motion.span
                  key={tech}
                  whileHover={{ scale: 1.05 }}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    color: '#FFFFFF',
                    borderRadius: '1.5rem',
                    fontSize: '0.875rem',
                    fontWeight: '500',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                  }}
                >
                  {tech}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Estadísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '2rem',
            marginBottom: '5rem'
          }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                style={{
                  textAlign: 'center',
                  padding: '2rem 1.5rem',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                  borderRadius: '1rem',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
              >
                <Icon style={{ 
                  width: '2rem', 
                  height: '2rem', 
                  color: '#FFD700', 
                  margin: '0 auto 0.75rem auto',
                  transition: 'color 0.5s ease'
                }} />
                <div style={{ 
                  fontSize: '2rem', 
                  fontWeight: 'bold', 
                  color: '#FFFFFF',
                  marginBottom: '0.5rem',
                  textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
                  transition: 'color 0.5s ease'
                }}>
                  {stat.value}
                </div>
                <div style={{ 
                  color: '#F0F8FF', 
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  transition: 'color 0.5s ease'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Valores */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          style={{ textAlign: 'center', marginBottom: '3rem' }}
        >
          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: 'bold', 
            color: '#FFFFFF',
            marginBottom: '3rem',
            textShadow: '0 0 15px rgba(255, 165, 0, 0.5)',
            transition: 'color 0.5s ease'
          }}>
            Mis Valores
          </h3>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
            gap: '2rem' 
          }}>
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 1.2 + index * 0.2 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{
                    padding: '2rem',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))',
                    borderRadius: '1rem',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    backdropFilter: 'blur(10px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer',
                    textAlign: 'center'
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon style={{ 
                      width: '3rem', 
                      height: '3rem', 
                      color: '#FFD700',
                      margin: '0 auto 1rem auto',
                      transition: 'color 0.5s ease'
                    }} />
                  </motion.div>
                  <h4 style={{ 
                    fontSize: '1.25rem', 
                    fontWeight: '600', 
                    color: '#FFFFFF',
                    marginBottom: '0.75rem',
                    textShadow: '0 0 10px rgba(255, 215, 0, 0.5)',
                    transition: 'color 0.5s ease'
                  }}>
                    {value.title}
                  </h4>
                  <p style={{ 
                    color: '#F0F8FF',
                    lineHeight: '1.6',
                    transition: 'color 0.5s ease'
                  }}>
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
