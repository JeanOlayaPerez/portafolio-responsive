import { useState, useEffect } from 'react'

// Hook personalizado para manejar responsive design
export const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)
  const [isDesktop, setIsDesktop] = useState(false)
  const [screenSize, setScreenSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
    height: typeof window !== 'undefined' ? window.innerHeight : 768
  })

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      const ua = navigator.userAgent || navigator.vendor || window.opera;

      // Detectar mobile por userAgent además de ancho
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(ua);

      setScreenSize({ width, height });
      setIsMobile(isMobileUA || width < 768);
      setIsTablet(!isMobileUA && width >= 768 && width < 1024);
      setIsDesktop(!isMobileUA && width >= 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleResize);
    };
  }, []);

  return {
    isMobile,
    isTablet,
    isDesktop,
    screenSize,
    // Helper functions
    is: {
      mobile: isMobile,
      tablet: isTablet,
      desktop: isDesktop,
      tabletUp: isTablet || isDesktop,
      mobileDown: isMobile
    }
  }
}

// Hook para animaciones optimizadas por dispositivo
export const useOptimizedAnimations = () => {
  const { isMobile } = useResponsive()
  
  return {
    // Reduce motion en móviles para mejor performance
    reduceMotion: isMobile,
    
    // Configuraciones de animación optimizadas
    fadeIn: {
      initial: { opacity: 0, y: isMobile ? 10 : 20 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: isMobile ? 0.4 : 0.6 }
    },
    
    slideUp: {
      initial: { opacity: 0, y: isMobile ? 15 : 30 },
      animate: { opacity: 1, y: 0 },
      transition: { duration: isMobile ? 0.4 : 0.6 }
    },
    
    scale: {
      whileHover: isMobile ? {} : { scale: 1.05 },
      whileTap: { scale: 0.95 },
      transition: { duration: 0.2 }
    }
  }
}
