# Configuración para VPS - ATM Web

Este documento explica cómo configurar el proyecto ATM Web para usar una base de datos MySQL remota en tu VPS.

## Requisitos Previos

1. **Docker y Docker Compose** instalados en tu máquina local
2. **Base de datos MySQL** configurada en tu VPS con los siguientes datos:
   - Host: `201.139.83.34`
   - Usuario: `vps4_root`
   - Base de datos: `vps4_atmweb`
   - Contraseña: (la que configures)

## Configuración Rápida

### Opción 1: Script Automático (Recomendado)

1. Ejecuta el script de configuración:
   ```bash
   setup-vps.bat
   ```

2. El script te pedirá la contraseña de tu base de datos y configurará todo automáticamente.

### Opción 2: Configuración Manual

1. **Crear archivo `.env`** en la raíz del proyecto:
   ```env
   # Configuración para Base de Datos del VPS
   EXTERNAL_DB_HOST=201.139.83.34
   EXTERNAL_DB_USER=vps4_root
   EXTERNAL_DB_PASSWORD=tu_password_aqui
   EXTERNAL_DB_NAME=vps4_atmweb
   
   # URLs de WordPress
   WORDPRESS_HOME_URL=http://localhost:8001
   WORDPRESS_SITE_URL=http://localhost:8001
   
   # Configuración del Frontend
   REACT_APP_WORDPRESS_API_URL=http://localhost:8001/wp-json/wp/v2
   REACT_APP_ENV=development
   
   # Configuración de WordPress para usar base de datos externa
   WORDPRESS_DB_HOST=${EXTERNAL_DB_HOST}
   WORDPRESS_DB_USER=${EXTERNAL_DB_USER}
   WORDPRESS_DB_PASSWORD=${EXTERNAL_DB_PASSWORD}
   WORDPRESS_DB_NAME=${EXTERNAL_DB_NAME}
   WORDPRESS_DEBUG=1
   ```

2. **Levantar servicios**:
   ```bash
   docker-compose -f docker-compose.vps.yml up -d
   ```

## Verificación de la Configuración

### 1. Verificar Conexión a la Base de Datos

```bash
docker run --rm mysql:8.0 mysql -h 201.139.83.34 -u vps4_root -p -e "SELECT 1;"
```

### 2. Verificar Servicios

- **WordPress**: http://localhost:8001
- **Frontend React**: http://localhost:3001
- **Nginx**: http://localhost:81

### 3. Verificar Logs

```bash
# Ver logs de todos los servicios
docker-compose -f docker-compose.vps.yml logs -f

# Ver logs de un servicio específico
docker-compose -f docker-compose.vps.yml logs -f wordpress
```

## Configuración en el VPS

### 1. Crear Base de Datos

En tu VPS, ejecuta:

```sql
CREATE DATABASE vps4_atmweb;
CREATE USER 'vps4_root'@'%' IDENTIFIED BY 'tu_password';
GRANT ALL PRIVILEGES ON vps4_atmweb.* TO 'vps4_root'@'%';
FLUSH PRIVILEGES;
```

### 2. Configurar Firewall

Asegúrate de que el puerto 3306 esté abierto para conexiones externas:

```bash
# En Ubuntu/Debian
sudo ufw allow 3306

# En CentOS/RHEL
sudo firewall-cmd --permanent --add-port=3306/tcp
sudo firewall-cmd --reload
```

### 3. Configurar MySQL para Conexiones Externas

Edita `/etc/mysql/mysql.conf.d/mysqld.cnf`:

```ini
[mysqld]
bind-address = 0.0.0.0
```

Reinicia MySQL:
```bash
sudo systemctl restart mysql
```

## Comandos Útiles

### Levantar Servicios
```bash
docker-compose -f docker-compose.vps.yml up -d
```

### Detener Servicios
```bash
docker-compose -f docker-compose.vps.yml down
```

### Reconstruir Servicios
```bash
docker-compose -f docker-compose.vps.yml up -d --build
```

### Ver Estado de Servicios
```bash
docker-compose -f docker-compose.vps.yml ps
```

## Solución de Problemas

### Error de Conexión a la Base de Datos

1. **Verificar credenciales**: Asegúrate de que el usuario y contraseña sean correctos
2. **Verificar acceso remoto**: El usuario debe tener permisos para conectarse desde cualquier IP (`'%'`)
3. **Verificar firewall**: El puerto 3306 debe estar abierto
4. **Verificar configuración MySQL**: `bind-address` debe ser `0.0.0.0`

### WordPress no se conecta

1. Verificar variables de entorno en el archivo `.env`
2. Verificar logs de WordPress:
   ```bash
   docker-compose -f docker-compose.vps.yml logs wordpress
   ```

### Frontend no carga datos

1. Verificar que `REACT_APP_WORDPRESS_API_URL` apunte a la URL correcta
2. Verificar que WordPress esté funcionando en el puerto correcto
3. Verificar logs del frontend:
   ```bash
   docker-compose -f docker-compose.vps.yml logs frontend
   ```

## Diferencias con la Configuración Local

| Aspecto | Local | VPS |
|---------|-------|-----|
| Base de Datos | MySQL local (Docker) | MySQL remoto (VPS) |
| Puerto WordPress | 8000 | 8001 |
| Puerto Frontend | 3000 | 3001 |
| Archivo Compose | `docker-compose.yml` | `docker-compose.vps.yml` |

## Seguridad

- **Nunca** subas el archivo `.env` al repositorio
- Usa contraseñas fuertes para la base de datos
- Considera usar SSL para conexiones a la base de datos
- Limita el acceso a la base de datos por IP si es posible 