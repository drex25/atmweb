@echo off
echo ========================================
echo Configuracion para VPS - ATM Web
echo ========================================
echo.

echo Verificando que Docker esté corriendo...
docker --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Docker no está instalado o no está corriendo
    pause
    exit /b 1
)

echo.
echo IMPORTANTE: Antes de continuar, asegúrate de:
echo 1. Tener la contraseña de tu base de datos del VPS
echo 2. Que la base de datos vps4_atmweb exista en tu VPS
echo 3. Que el usuario vps4_root tenga permisos de acceso
echo.

set /p DB_PASSWORD="Ingresa la contraseña de tu base de datos del VPS: "

echo.
echo Creando archivo .env con la configuración del VPS...
(
echo # Configuración para Base de Datos del VPS
echo EXTERNAL_DB_HOST=201.139.83.34
echo EXTERNAL_DB_USER=vps4_root
echo EXTERNAL_DB_PASSWORD=%DB_PASSWORD%
echo EXTERNAL_DB_NAME=vps4_atmweb
echo.
echo # URLs de WordPress
echo WORDPRESS_HOME_URL=http://localhost:8001
echo WORDPRESS_SITE_URL=http://localhost:8001
echo.
echo # Configuración del Frontend
echo REACT_APP_WORDPRESS_API_URL=http://localhost:8001/wp-json/wp/v2
echo REACT_APP_ENV=development
echo.
echo # Configuración de WordPress para usar base de datos externa
echo WORDPRESS_DB_HOST=${EXTERNAL_DB_HOST}
echo WORDPRESS_DB_USER=${EXTERNAL_DB_USER}
echo WORDPRESS_DB_PASSWORD=${EXTERNAL_DB_PASSWORD}
echo WORDPRESS_DB_NAME=${EXTERNAL_DB_NAME}
echo WORDPRESS_DEBUG=1
) > .env

echo Archivo .env creado exitosamente!
echo.
echo Probando conexión a la base de datos...
docker run --rm mysql:8.0 mysql -h 201.139.83.34 -u vps4_root -p%DB_PASSWORD% -e "SELECT 1;" >nul 2>&1
if errorlevel 1 (
    echo ERROR: No se pudo conectar a la base de datos
    echo Verifica:
    echo - La contraseña es correcta
    echo - El VPS permite conexiones desde tu IP
    echo - La base de datos vps4_atmweb existe
    pause
    exit /b 1
)

echo Conexión exitosa a la base de datos!
echo.
echo Levantando servicios con Docker Compose...
docker-compose -f docker-compose.vps.yml up -d

echo.
echo ========================================
echo Configuración completada!
echo ========================================
echo.
echo Servicios disponibles en:
echo - WordPress: http://localhost:8001
echo - Frontend React: http://localhost:3001
echo - Nginx: http://localhost:81
echo.
echo Para detener los servicios: docker-compose -f docker-compose.vps.yml down
echo Para ver logs: docker-compose -f docker-compose.vps.yml logs -f
echo.
pause 