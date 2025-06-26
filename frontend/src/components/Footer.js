import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#023F5E] to-[#612247] text-white overflow-hidden">
      {/* Decoración de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Contenido principal del footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo y redes sociales */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center">
              <img 
                src="/misiones.png" 
                alt="Misiones" 
                className="h-16 w-auto"
              />
            </div>
            
            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group border border-white/20"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white group-hover:text-blue-300 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a
                href="https://twitter.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group border border-white/20"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white group-hover:text-blue-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 hover:scale-110 transition-all duration-300 group border border-white/20"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white group-hover:text-pink-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>

            {/* Botón Contactate */}
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-purple-600 text-white font-bold rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg border border-white/20 backdrop-blur-sm"
            >
              <EnvelopeIcon className="w-5 h-5 mr-3" />
              Contactate
            </Link>
          </div>

          {/* Trámites */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Trámites
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Ingresos Brutos', href: '/tramites/ingresos-brutos' },
                { name: 'Impuestos Inmobiliarios', href: '/tramites/inmobiliario' },
                { name: 'Control Fiscal en Rutas', href: '/tramites/control-fiscal' },
                { name: 'Tasas y Sellos', href: '/tramites/sellos' },
                { name: 'Automotor', href: '/tramites/automotor' },
                { name: 'Otros Trámites', href: '/tramites/otros' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información Fiscal */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Información Fiscal
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Normativas', href: '/info/normativas' },
                { name: 'Documentación y Estadísticas', href: '/info/documentacion' },
                { name: 'Padrones Productores', href: '/info/padrones' },
                { name: 'Exenciones Impositivas', href: '/info/exenciones' },
                { name: 'Autoridades', href: '/institucional/autoridades' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Centro de Ayuda */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white mb-6 relative">
              Centro de Ayuda
              <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Contacto', href: '/contact' },
                { name: 'Guías y Manuales de Usuario', href: '/ayuda/guias' },
                { name: 'Videotutoriales', href: '/ayuda/videotutoriales' },
                { name: 'Atención al Público', href: '/institucional/atencion' },
                { name: 'Preguntas Frecuentes', href: '/ayuda/faq' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-200 hover:text-white hover:translate-x-2 transition-all duration-200 flex items-center group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full mr-3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Línea divisoria con gradiente */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent h-px"></div>
        <div className="h-px bg-white/10"></div>
      </div>

      {/* Copyright */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-300 text-sm font-medium">
            Copyright© 2025 | Todos los derechos reservados.
          </p>
          
          {/* Botón volver arriba */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-110 hover:shadow-xl shadow-lg border border-white/20 backdrop-blur-sm group"
            aria-label="Volver arriba"
          >
            <ArrowUpIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;