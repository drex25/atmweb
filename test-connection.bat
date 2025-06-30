@echo off
REM Script para probar la conexión a la base de datos del hosting
REM Uso: test-connection.bat

echo 🔍 Probando conexión a la base de datos del hosting...

REM Verificar si existe el archivo de configuración
if not exist ".env.hosting" (
    echo ❌ No se encontró el archivo .env.hosting
    echo    Por favor crea el archivo primero:
    echo    copy env.hosting.example .env.hosting
    echo    Y edítalo con tus credenciales
    pause
    exit /b 1
)

REM Cargar variables de entorno
for /f "tokens=1,2 delims==" %%a in (.env.hosting) do set %%a=%%b

REM Verificar que las variables estén definidas
if "%EXTERNAL_DB_HOST%"=="" (
    echo ❌ Las variables de entorno no están configuradas correctamente
    echo    Por favor edita el archivo .env.hosting con tus credenciales reales
    pause
    exit /b 1
)

echo 📊 Datos de conexión:
echo    Host: %EXTERNAL_DB_HOST%
echo    Usuario: %EXTERNAL_DB_USER%
echo    Base de datos: %EXTERNAL_DB_NAME%
echo.

REM Probar conexión usando Docker
echo 🐳 Probando conexión con Docker...
docker run --rm mysql:8.0 mysql -h "%EXTERNAL_DB_HOST%" -u "%EXTERNAL_DB_USER%" -p"%EXTERNAL_DB_PASSWORD%" "%EXTERNAL_DB_NAME%" -e "SELECT 1 as test;" 2>nul
if not errorlevel 1 (
    echo ✅ Conexión exitosa con Docker!
    echo.
    echo 🎯 Próximos pasos:
    echo 1. La conexión funciona correctamente
    echo 2. Puedes ejecutar: setup-hosting.bat
    echo 3. O directamente: docker-compose -f docker-compose.local.yml up -d
) else (
    echo ❌ Error de conexión con Docker
    echo.
    echo 🔧 Posibles soluciones:
    echo 1. Verificar que la contraseña sea correcta
    echo 2. Verificar que el host sea accesible desde tu red
    echo 3. Verificar que el puerto 3306 esté abierto
    echo 4. Verificar que el usuario tenga permisos de acceso remoto
    echo.
    echo 📋 Datos de conexión actuales:
    echo    Host: %EXTERNAL_DB_HOST%
    echo    Usuario: %EXTERNAL_DB_USER%
    echo    Base de datos: %EXTERNAL_DB_NAME%
)

pause 