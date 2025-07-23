@echo off
echo.
echo =============================================
echo  SCRIPT DE DESPLIEGUE - PORTAFOLIO RESPONSIVO
echo =============================================
echo.

REM Verificar que Node.js esté instalado
echo [1/6] Verificando Node.js...
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js no está instalado.
    echo Por favor instala Node.js desde: https://nodejs.org
    pause
    exit /b 1
)
echo ✅ Node.js detectado

REM Verificar que npm esté disponible
echo [2/6] Verificando npm...
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm no está disponible.
    pause
    exit /b 1
)
echo ✅ npm disponible

REM Instalar dependencias si es necesario
echo [3/6] Instalando dependencias...
if not exist "node_modules" (
    echo Instalando dependencias por primera vez...
    npm install
) else (
    echo Dependencias ya instaladas ✅
)

REM Probar build
echo [4/6] Probando build de producción...
npm run build
if %errorlevel% neq 0 (
    echo ERROR: Build falló. Revisa los errores arriba.
    pause
    exit /b 1
)
echo ✅ Build exitoso

REM Verificar Git
echo [5/6] Verificando Git...
git --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Git no está instalado.
    echo Por favor instala Git desde: https://git-scm.com
    pause
    exit /b 1
)
echo ✅ Git disponible

REM Información para subir a GitHub
echo [6/6] ¡Todo listo para despliegue!
echo.
echo ========================================
echo   PRÓXIMOS PASOS:
echo ========================================
echo.
echo 1. Crear repositorio en GitHub:
echo    - Ve a https://github.com/new
echo    - Nombre: portafolio-responsive
echo    - Marca como PÚBLICO
echo    - NO agregues README
echo.
echo 2. Conectar con GitHub:
echo    git remote add origin https://github.com/TU_USUARIO/portafolio-responsive.git
echo    git branch -M main
echo    git push -u origin main
echo.
echo 3. Desplegar en Vercel:
echo    - Ve a https://vercel.com
echo    - Login con GitHub
echo    - Import project
echo    - Selecciona tu repositorio
echo    - ¡Deploy!
echo.
echo 🎉 Tu portafolio responsivo estará público en minutos!
echo.
pause
