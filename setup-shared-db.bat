@echo off
echo ========================================
echo   CONFIGURACIÓN BASE DE DATOS COMPARTIDA
echo ========================================
echo.

echo 🎯 Configurando acceso a la base de datos compartida...
echo.

REM Verificar si existe el archivo de configuración
if not exist ".env.shared-db" (
    echo 📝 Creando archivo de configuración...
    echo # Configuración para Base de Datos Compartida > .env.shared-db
    echo SHARED_DB_HOST=192.168.1.11 >> .env.shared-db
    echo SHARED_DB_USER=atmweb_user >> .env.shared-db
    echo SHARED_DB_PASSWORD=tu_password_seguro >> .env.shared-db
    echo SHARED_DB_NAME=atmweb >> .env.shared-db
    echo REACT_APP_WORDPRESS_API_URL=http://localhost:8000/wp-json/wp/v2 >> .env.shared-db
    echo REACT_APP_ENV=development >> .env.shared-db
    echo ✅ Archivo .env.shared-db creado
) else (
    echo ✅ Archivo .env.shared-db ya existe
)

echo.
echo ⚠️  IMPORTANTE: Edita el archivo .env.shared-db con las credenciales correctas
echo.
echo 📋 Datos que necesitas configurar:
echo    - SHARED_DB_HOST: IP del servidor principal (actual: 192.168.1.11)
echo    - SHARED_DB_USER: Usuario de la base de datos
echo    - SHARED_DB_PASSWORD: Contraseña de la base de datos
echo    - SHARED_DB_NAME: Nombre de la base de datos
echo.

echo 🔧 ¿Quieres editar el archivo ahora? (S/N)
set /p edit_file=

if /i "%edit_file%"=="S" (
    notepad .env.shared-db
)

echo.
echo 🚀 Para levantar los servicios con base compartida:
echo    docker-compose -f docker-compose.shared-db.yml up -d
echo.
echo 🌐 URLs de acceso:
echo    - WordPress: http://localhost:8000
echo    - Frontend: http://localhost:3000
echo    - Nginx: http://localhost:8080
echo.
echo ⚠️  Recuerda: El servidor principal debe estar corriendo
echo.
pause 