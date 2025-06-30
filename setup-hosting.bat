@echo off
REM Script para configurar ATM Web con base de datos del hosting
REM Uso: setup-hosting.bat

echo 🚀 Configurando ATM Web con base de datos del hosting...

REM Verificar si existe el archivo de configuración
if not exist ".env.hosting" (
    echo 📝 Creando archivo de configuración...
    copy env.hosting.example .env.hosting
    echo ⚠️  IMPORTANTE: Edita el archivo .env.hosting con tus credenciales del hosting
    echo    - EXTERNAL_DB_HOST: Host de tu base de datos
    echo    - EXTERNAL_DB_USER: Usuario de la base de datos
    echo    - EXTERNAL_DB_PASSWORD: Contraseña de la base de datos
    echo    - EXTERNAL_DB_NAME: Nombre de la base de datos
    pause
    exit /b 1
)

REM Verificar si Docker está instalado
docker --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker no está instalado. Por favor instala Docker Desktop primero.
    pause
    exit /b 1
)

REM Verificar si Docker Compose está instalado
docker-compose --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Docker Compose no está instalado. Por favor instala Docker Compose primero.
    pause
    exit /b 1
)

REM Levantar servicios
echo 🐳 Levantando servicios con Docker Compose...
docker-compose -f docker-compose.local.yml up -d

echo ✅ Configuración completada!
echo.
echo 📋 URLs de acceso:
echo   - WordPress Admin: http://localhost:8000
echo   - Frontend React: http://localhost:3000
echo   - API WordPress: http://localhost:8000/wp-json/wp/v2
echo.
echo 🔧 Comandos útiles:
echo   - Ver logs: docker-compose -f docker-compose.local.yml logs -f
echo   - Parar servicios: docker-compose -f docker-compose.local.yml down
echo   - Reconstruir: docker-compose -f docker-compose.local.yml up -d --build

pause 