# ATM Misiones - Sitio Web

Este proyecto contiene la implementación del sitio web de ATM Misiones utilizando una arquitectura moderna basada en WordPress Headless y React.

## 🚀 Tecnologías

- **Backend**: WordPress (Headless) + REST API
- **Frontend**: React + Tailwind CSS
- **Infraestructura**: Docker + Docker Compose

## 📋 Prerrequisitos

- Docker
- Docker Compose
- Node.js (para desarrollo local del frontend)
- Git

## 🛠️ Instalación

1. Clonar el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd atmweb
```

2. Iniciar el entorno de desarrollo:
```bash
docker-compose up -d
```

3. Acceder a los servicios:
- WordPress Admin: http://localhost:8000/wp-admin
- Frontend: http://localhost:3000
- API WordPress: http://localhost:8000/wp-json

## 🏗️ Estructura del Proyecto

```
atmweb/
├── backend/               # WordPress con plugins, temas, uploads
│   └── Dockerfile
├── frontend/             # Proyecto React + Tailwind
│   └── Dockerfile
├── docker-compose.yml
└── README.md
```

## 🔧 Desarrollo

### Frontend

El frontend está construido con React y Tailwind CSS. Para desarrollo local:

```bash
cd frontend
npm install
npm run dev
```

### Backend

El backend utiliza WordPress en modo headless. Los administradores pueden gestionar el contenido a través del panel de WordPress en `/wp-admin`.

## 🐳 Docker

El proyecto utiliza Docker Compose para gestionar los siguientes servicios:

- WordPress (Backend)
- MySQL (Base de datos)
- React (Frontend)
- Nginx (Servidor web)

## 🚀 Despliegue en Producción

Para desplegar en un servidor real (por ejemplo, un VPS con Docker):

1. Clona el repositorio y copia los archivos al servidor.
2. Crea un archivo `.env` en la raíz y en `frontend/` usando los archivos `.env.example` como base, y completa las variables necesarias (cambia contraseñas por defecto).
3. Ejecuta:
   ```bash
   docker-compose -f docker-compose.yml up -d --build
   ```
4. Accede a:
   - WordPress Admin: http://[TU_DOMINIO_O_IP]:8000/wp-admin
   - Frontend: http://[TU_DOMINIO_O_IP]

**Recomendaciones:**
- Usa HTTPS en producción (puedes configurar Nginx o un proxy inverso).
- Cambia todas las contraseñas por defecto.
- Realiza backups periódicos de la base de datos y uploads.
- Revisa los logs de los contenedores con `docker-compose logs`.

## 📝 Notas Adicionales

- Los datos de WordPress se persisten en volúmenes Docker
- Las credenciales por defecto se encuentran en el archivo `.env`
- Para producción, asegúrese de cambiar todas las contraseñas por defecto

## 🤝 Contribución

1. Fork el proyecto
2. Cree su rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit sus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abra un Pull Request

## 📄 Licencia

Este proyecto es propiedad de ATM Misiones. Todos los derechos reservados.