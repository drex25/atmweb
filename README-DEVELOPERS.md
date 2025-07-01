# Guía para Desarrolladores - ATM Web

## Configuración para Conexiones Remotas

## 🎯 **OPCIÓN 1: Base de Datos Compartida (Recomendado para trabajar con datos existentes)**

Si quieres trabajar con la base de datos WordPress que ya tiene contenido (posts, plugins, configuraciones), usa esta opción:

### Configuración para Base Compartida

1. **Copia el archivo de configuración compartida:**
```bash
cp .env.shared-db.example .env.shared-db
```

2. **Edita el archivo `.env.shared-db` con los datos del servidor principal:**
```env
# IP del servidor principal (quien tiene la base de datos)
SHARED_DB_HOST=192.168.1.11

# Credenciales de la base de datos (pregunta al administrador)
SHARED_DB_USER=atmweb_user
SHARED_DB_PASSWORD=tu_password_seguro
SHARED_DB_NAME=atmweb

# Configuración del Frontend
REACT_APP_WORDPRESS_API_URL=http://localhost:8000/wp-json/wp/v2
REACT_APP_ENV=development
```

3. **Levanta los servicios (SIN base de datos local):**
```bash
docker-compose -f docker-compose.shared-db.yml up -d
```

4. **Verifica que todo funcione:**
- **WordPress**: http://localhost:8000 (conectado a la base compartida)
- **Frontend React**: http://localhost:3000
- **Nginx**: http://localhost:8080

### ⚠️ **Importante:**
- El servidor principal (192.168.1.11) debe estar corriendo
- Todos los cambios en WordPress afectan a todos los desarrolladores
- Si el servidor principal se apaga, pierdes acceso a la base de datos

---

## 🎯 **OPCIÓN 2: Base de Datos Local (Desarrollo independiente)**

### Prerrequisitos
- Docker y Docker Compose instalados
- Git configurado

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd atmweb
```

### 2. Configurar variables de entorno
Copia el archivo de ejemplo y configura tus variables:
```bash
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:
```env
# Configuración de Base de Datos MySQL
MYSQL_DATABASE=atmweb
MYSQL_USER=atmweb_user
MYSQL_PASSWORD=tu_password_seguro
MYSQL_ROOT_PASSWORD=tu_root_password

# Configuración del Frontend
REACT_APP_WORDPRESS_API_URL=http://localhost:8000/wp-json/wp/v2
REACT_APP_ENV=development
```

### 3. Iniciar los servicios
```bash
docker-compose -f docker-compose.local.yml up -d
```

### 4. Verificar que todo funcione
- **Frontend React**: http://localhost:3000
- **WordPress Backend**: http://localhost:8000
- **Nginx**: http://localhost:8080
- **MySQL**: localhost:3306

### 5. Conexión remota a MySQL
Para conectar desde otra máquina o herramienta:

**Host**: IP de tu máquina
**Puerto**: 3306
**Usuario**: root (o el usuario configurado en MYSQL_USER)
**Contraseña**: MYSQL_ROOT_PASSWORD (o MYSQL_PASSWORD)

### Ejemplo de conexión con MySQL Workbench:
- Host: `192.168.1.100` (tu IP local)
- Port: `3306`
- Username: `root`
- Password: `tu_root_password`

### 6. Comandos útiles
```bash
# Ver logs
docker-compose -f docker-compose.local.yml logs

# Reiniciar servicios
docker-compose -f docker-compose.local.yml restart

# Detener servicios
docker-compose -f docker-compose.local.yml down

# Reconstruir imágenes
docker-compose -f docker-compose.local.yml build --no-cache
```

### 7. Solución de problemas

#### Error de conexión a MySQL
- Verifica que el puerto 3306 esté abierto
- Confirma que las variables de entorno estén correctas
- Revisa los logs: `docker-compose -f docker-compose.local.yml logs db`

#### Error de permisos
- En Windows, asegúrate de que Docker Desktop tenga permisos de red
- En Linux, verifica que el usuario esté en el grupo docker

### 8. Desarrollo
- El frontend tiene hot-reload configurado
- Los cambios en el código se reflejan automáticamente
- Para cambios en WordPress, accede a http://localhost:8000/wp-admin

### Notas de seguridad
- ⚠️ **NO uses esta configuración en producción**
- ⚠️ **Cambia las contraseñas por defecto**
- ⚠️ **No expongas el puerto 3306 en redes públicas** 