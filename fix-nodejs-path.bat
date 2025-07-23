@echo off
echo.
echo ===============================================
echo   CONFIGURADOR DE NODE.JS - PORTAFOLIO
echo ===============================================
echo.

echo [1/4] Verificando instalacion de Node.js...
if exist "C:\Program Files\nodejs\node.exe" (
    echo ✅ Node.js encontrado en: C:\Program Files\nodejs\
) else (
    echo ❌ Node.js no encontrado en la ubicacion esperada
    echo    Por favor reinstala Node.js desde: https://nodejs.org
    pause
    exit /b 1
)

echo [2/4] Verificando PATH actual...
echo %PATH% | findstr /i "nodejs" >nul
if %errorlevel% equ 0 (
    echo ✅ Node.js ya está en el PATH
    goto :test_commands
) else (
    echo ⚠️  Node.js NO está en el PATH, agregándolo...
)

echo [3/4] Agregando Node.js al PATH del usuario actual...
REM Agregar al PATH del usuario (no requiere permisos de administrador)
for /f "tokens=2*" %%a in ('reg query "HKCU\Environment" /v PATH 2^>nul') do set "current_path=%%b"
if "%current_path%"=="" set "current_path="

REM Verificar si ya está en el PATH del usuario
echo %current_path% | findstr /i "nodejs" >nul
if %errorlevel% equ 0 (
    echo ✅ Ya estaba en el PATH del usuario
) else (
    if "%current_path%"=="" (
        set "new_path=C:\Program Files\nodejs"
    ) else (
        set "new_path=%current_path%;C:\Program Files\nodejs"
    )
    reg add "HKCU\Environment" /v PATH /t REG_EXPAND_SZ /d "!new_path!" /f >nul
    echo ✅ Agregado al PATH del usuario
)

echo.
echo ⚠️  IMPORTANTE: Necesitas cerrar y reabrir PowerShell para que funcione
echo.

:test_commands
echo [4/4] Probando comandos (en nueva ventana)...
echo.

REM Probar en una nueva ventana de PowerShell
echo Abriendo nueva ventana de PowerShell para probar...
start powershell -NoExit -Command "Write-Host 'Probando Node.js en nueva sesion:'; node --version; npm --version; Write-Host ''; Write-Host '✅ Si ves las versiones arriba, Node.js funciona correctamente!'; Write-Host 'Ahora puedes cerrar esta ventana y continuar en la original.'; Write-Host ''; Write-Host 'Presiona cualquier tecla para continuar...'; Read-Host"

echo.
echo ===============================================
echo   CONFIGURACION COMPLETADA
echo ===============================================
echo.
echo PRÓXIMOS PASOS:
echo.
echo 1. ✅ Cierra PowerShell actual
echo 2. ✅ Abre nuevo PowerShell  
echo 3. ✅ Ve a tu carpeta del proyecto
echo 4. ✅ Ejecuta: npm --version
echo 5. ✅ Ejecuta: deploy-setup.bat
echo.
echo Si aún no funciona, reinicia Windows y vuelve a intentar.
echo.
pause
