import React from 'react'
import { useResponsive } from '../hooks/useResponsive'

const ResponsiveContainer = ({ children, className = '', ...props }) => {
  const { isMobile, isTablet, isDesktop } = useResponsive()

  const containerClasses = [
    // Base classes
    'w-full',
    
    // Responsive padding
    'px-4', // Mobile
    'sm:px-6', // Small screens
    'md:px-8', // Medium screens  
    'lg:px-4', // Large screens - preserve desktop spacing
    'xl:px-8', // Extra large
    
    // Max width constraints
    'max-w-7xl',
    'mx-auto',
    
    // Custom classes
    className
  ].filter(Boolean).join(' ')

  return (
    <div 
      className={containerClasses}
      data-mobile={isMobile}
      data-tablet={isTablet}
      data-desktop={isDesktop}
      {...props}
    >
      {children}
    </div>
  )
}

export default ResponsiveContainer
