# 🚀 ATM Web - Configuración con Hosting

Configuración simple para usar tu base de datos del hosting con WordPress.

## ⚡ Configuración Rápida

### 1. Crear Base de Datos en tu Hosting

1. **Acceder al panel de control de tu hosting**
2. **Crear una nueva base de datos MySQL**
3. **Anotar los datos de conexión**:
   - Host de la base de datos
   - Usuario
   - Contraseña
   - Nombre de la base de datos

### 2. Configurar Variables de Entorno

```bash
# Copiar archivo de ejemplo
copy env.hosting.example .env.hosting

# Editar con tus credenciales del hosting
notepad .env.hosting
```

**Contenido del archivo `.env.hosting`:**
```env
# Datos de la Base de Datos del Hosting
EXTERNAL_DB_HOST=tu-host-de-base-de-datos.com
EXTERNAL_DB_USER=tu_usuario_de_base_de_datos
EXTERNAL_DB_PASSWORD=tu_password_de_base_de_datos
EXTERNAL_DB_NAME=nombre_de_tu_base_de_datos

# URLs de WordPress
WORDPRESS_HOME_URL=http://localhost:8000
WORDPRESS_SITE_URL=http://localhost:8000

# Configuración del Frontend
REACT_APP_WORDPRESS_API_URL=http://localhost:8000/wp-json/wp/v2
REACT_APP_ENV=development
WORDPRESS_DEBUG=1
```

### 3. Ejecutar Script de Configuración

```cmd
setup-hosting.bat
```

## 🎯 URLs de Acceso

- **WordPress Admin**: http://localhost:8000
- **Frontend React**: http://localhost:3000
- **API WordPress**: http://localhost:8000/wp-json/wp/v2

## 🐳 Comandos Útiles

```bash
# Levantar servicios
docker-compose -f docker-compose.local.yml up -d

# Ver logs
docker-compose -f docker-compose.local.yml logs -f

# Parar servicios
docker-compose -f docker-compose.local.yml down

# Reconstruir
docker-compose -f docker-compose.local.yml up -d --build
```

## 📁 Estructura Simplificada

```
atmweb/
├── docker-compose.local.yml    # Configuración para hosting externo
├── env.hosting.example         # Ejemplo de variables de entorno
├── .env.hosting                # Variables de entorno (crear desde ejemplo)
├── backend/
│   └── wp-config-custom.php    # Configuración personalizada de WordPress
├── frontend/                   # Aplicación React
└── setup-hosting.bat           # Script de configuración
```

## 🔧 Configuración de WordPress

### Primera Instalación:
1. Acceder a http://localhost:8000
2. Completar instalación con los datos del administrador
3. Instalar plugins necesarios:
   - Advanced Custom Fields (ACF)
   - Custom Post Type UI
   - Yoast SEO (opcional)

### Medios y Archivos:
- Los archivos se suben directamente a WordPress
- No se usa carpeta local de uploads
- Los medios se almacenan en la base de datos del hosting

## 🚨 Consideraciones Importantes

### Seguridad:
- ✅ **NO subir** `.env.hosting` al repositorio
- ✅ Usar contraseñas fuertes para la base de datos
- ✅ Limitar acceso a la base de datos del hosting

### Rendimiento:
- ✅ La base de datos está en tu hosting (más rápido)
- ✅ Los medios se suben directamente a WordPress
- ✅ No hay sincronización de archivos local

## 🆘 Solución de Problemas

### Error de Conexión a Base de Datos:
```bash
# Verificar credenciales en .env.hosting
# Verificar que la base de datos esté activa en el hosting
# Verificar firewall y red
```

### WordPress No Carga:
```bash
# Ver logs
docker-compose -f docker-compose.local.yml logs wordpress

# Reconstruir
docker-compose -f docker-compose.local.yml up -d --build wordpress
```

### Problemas de CORS:
```bash
# Verificar configuración en wp-config-custom.php
# Verificar URLs en .env.hosting
```

## 📞 Soporte

Si tienes problemas:
1. Revisar logs de Docker
2. Verificar configuración de variables de entorno
3. Verificar configuración de la base de datos en tu hosting
4. Contactar al equipo de desarrollo

---

¡Con esta configuración tendrás WordPress conectado a tu base de datos del hosting! 🎉 