import React from 'react'
import { motion } from 'framer-motion'
import { useResponsive } from '../../hooks/useResponsive'

const MobileNavIndicator = ({ activeSection, navItems }) => {
  const { isMobile } = useResponsive()

  if (!isMobile) return null

  const activeIndex = navItems.findIndex(item => item.id === activeSection)
  
  return (
    <motion.div
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="bg-gray-900/90 backdrop-blur-lg rounded-full px-4 py-2 border border-gray-700/50">
        <div className="flex items-center space-x-3">
          {navItems.map((item, index) => {
            const Icon = item.icon
            const isActive = activeSection === item.id
            
            return (
              <motion.button
                key={item.id}
                onClick={() => {
                  const element = document.getElementById(item.id)
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className={`
                  relative p-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'text-primary-400 bg-primary-400/10' 
                    : 'text-gray-400 hover:text-white'
                  }
                `}
                whileTap={{ scale: 0.9 }}
              >
                <Icon size={18} />
                
                {/* Indicador activo */}
                {isActive && (
                  <motion.div
                    className="absolute -top-1 -right-1 w-2 h-2 bg-primary-400 rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            )
          })}
        </div>
      </div>
    </motion.div>
  )
}

export default MobileNavIndicator
