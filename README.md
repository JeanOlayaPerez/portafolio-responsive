# 🚀 Portafolio Web Moderno

Un portafolio web moderno y visualmente atractivo construido con React, Tailwind CSS, Framer Motion y Three.js.

## ✨ Características

- **🎨 Diseño Moderno**: Interfaz elegante y responsiva con animaciones fluidas
- **🌌 Modelo 3D Interactivo**: Esfera animada con Three.js en la sección Hero
- **⚡ Animaciones Suaves**: Transiciones y animaciones con Framer Motion
- **📱 Totalmente Responsivo**: Optimizado para dispositivos móviles y desktop
- **🏗️ Arquitectura Modular**: Código organizado en componentes reutilizables
- **🚀 Optimizado para Performance**: Carga rápida y experiencia fluida
- **📧 Formulario de Contacto**: Sistema de contacto interactivo
- **🌙 Tema Oscuro**: Diseño moderno con colores oscuros

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React 18, Vite
- **Estilos**: Tailwind CSS
- **Animaciones**: Framer Motion
- **3D**: Three.js, React Three Fiber, React Three Drei
- **Iconos**: Lucide React
- **Detección de Scroll**: React Intersection Observer
- **Despliegue**: Vercel

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── common/           # Componentes reutilizables
│   │   ├── LoadingScreen.jsx
│   │   └── ScrollToTop.jsx
│   ├── layout/           # Componentes de layout
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   └── sections/         # Secciones del portafolio
│       ├── Hero.jsx      # Sección principal con modelo 3D
│       ├── About.jsx     # Información personal
│       ├── Skills.jsx    # Habilidades técnicas
│       ├── Projects.jsx  # Portfolio de proyectos
│       ├── Experience.jsx # Experiencia profesional
│       └── Contact.jsx   # Formulario de contacto
├── App.jsx              # Componente principal
├── main.jsx            # Punto de entrada
└── index.css           # Estilos globales
```

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/portafolio-cv.git
   cd portafolio-cv
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre en el navegador**
   ```
   http://localhost:5173
   ```

### Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construcción para producción
npm run build

# Vista previa de la construcción
npm run preview

# Linting
npm run lint
```

## 🎨 Personalización

### 1. Información Personal

Edita los siguientes archivos para personalizar tu información:

- `src/components/sections/Hero.jsx` - Nombre, título y descripción
- `src/components/sections/About.jsx` - Información personal y estadísticas
- `src/components/sections/Experience.jsx` - Experiencia laboral y educación
- `src/components/sections/Contact.jsx` - Información de contacto

### 2. Proyectos

En `src/components/sections/Projects.jsx`, actualiza el array `projects` con tus propios proyectos:

```javascript
const projects = [
  {
    id: 1,
    title: 'Tu Proyecto',
    description: 'Descripción del proyecto',
    image: 'URL_de_imagen',
    category: 'web', // web, mobile, fullstack, design
    technologies: ['React', 'Node.js'],
    github: 'URL_de_github',
    demo: 'URL_de_demo',
    features: ['Feature 1', 'Feature 2']
  }
]
```

### 3. Habilidades

En `src/components/sections/Skills.jsx`, personaliza el objeto `skillsData`:

```javascript
const skillsData = {
  frontend: [
    { name: 'React', level: 95, color: 'from-blue-500 to-cyan-500' },
    // Agrega más habilidades...
  ]
}
```

### 4. Colores y Tema

Modifica los colores en `tailwind.config.js`:

```javascript
colors: {
  primary: {
    500: '#3b82f6', // Cambia el color principal
    // ...otros tonos
  }
}
```

## 🚀 Despliegue en Vercel

### Despliegue Automático

1. **Conecta tu repositorio a Vercel**
   - Ve a [vercel.com](https://vercel.com)
   - Importa tu proyecto desde GitHub
   - Vercel detectará automáticamente la configuración

2. **Configuración automática**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Despliegue Manual

```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel

# Para producción
vercel --prod
```

### Variables de Entorno

Si necesitas variables de entorno, créalas en Vercel:

```bash
# En el dashboard de Vercel o usando CLI
vercel env add VITE_API_URL
```

## 📊 Performance y SEO

### Optimizaciones Incluidas

- **Lazy Loading**: Componentes cargados bajo demanda
- **Code Splitting**: División automática del código
- **Image Optimization**: Imágenes optimizadas
- **Preload**: Recursos críticos precargados
- **Meta Tags**: SEO optimizado
- **Open Graph**: Compartición en redes sociales

### Métricas de Performance

- **Lighthouse Score**: 90+ en todas las categorías
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🔧 Troubleshooting

### Problemas Comunes

1. **Error de Three.js**: Asegúrate de que la GPU esté habilitada en el navegador
2. **Animaciones lentas**: Reduce la complejidad de las animaciones en dispositivos móviles
3. **Errores de build**: Verifica que todas las dependencias estén instaladas

### Soporte de Navegadores

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Contacto

- **Email**: tu-email@example.com
- **LinkedIn**: [tu-perfil](https://linkedin.com/in/tu-perfil)
- **GitHub**: [tu-usuario](https://github.com/tu-usuario)
- **Portfolio**: [tu-portfolio.vercel.app](https://tu-portfolio.vercel.app)

---

⭐ ¡No olvides dar una estrella al repo si te gustó el proyecto!
