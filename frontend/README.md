# ATM Misiones Frontend

## Configuración para Desarrollo Local (XAMPP)

1. Instalar dependencias:
```bash
npm install
```

2. Crear archivo .env en la raíz del proyecto frontend:
```
REACT_APP_WORDPRESS_API_URL=http://localhost/atmweb/wp-json
```

3. Iniciar el servidor de desarrollo:
```bash
npm start
```

El frontend estará disponible en http://localhost:3000

## Configuración para Docker (para uso futuro)

1. Construir la imagen:
```bash
docker build -t atm-frontend .
```

2. Iniciar el contenedor:
```bash
docker run -p 3000:3000 atm-frontend
```

O usando docker-compose:
```bash
docker-compose up
```

## Estructura del Proyecto

```
frontend/
├── src/
│   ├── components/     # Componentes reutilizables
│   ├── pages/         # Páginas principales
│   ├── App.js         # Componente principal
│   └── index.js       # Punto de entrada
├── public/            # Archivos estáticos
├── package.json       # Dependencias y scripts
└── tailwind.config.js # Configuración de Tailwind CSS
```

## Notas Importantes

- El frontend se conecta a WordPress a través de la API REST
- La URL de la API se configura en el archivo .env
- Para desarrollo local, asegúrate de que WordPress esté corriendo en XAMPP
- Los cambios en el código se reflejarán automáticamente en desarrollo 