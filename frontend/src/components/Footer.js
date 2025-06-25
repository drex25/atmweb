import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowUpIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-[#023F5E] to-[#612247] text-white">
      {/* Contenido principal del footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo y redes sociales */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <img 
                src="/logo-atm.png" 
                alt="ATM Misiones" 
                className="h-16 w-auto filter brightness-0 invert"
              />
            </div>
            
            {/* Redes sociales */}
            <div className="flex space-x-4 mb-8">
              <a
                href="https://facebook.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              
              <a
                href="https://twitter.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
                aria-label="Twitter"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              
              <a
                href="https://instagram.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323c-.875.807-2.026 1.218-3.323 1.218zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.875-.875-1.365-2.026-1.365-3.323s.49-2.448 1.365-3.323c.875-.926 2.026-1.416 3.323-1.416s2.448.49 3.323 1.416c.875.875 1.365 2.026 1.365 3.323s-.49 2.448-1.365 3.323z"/>
                </svg>
              </a>
            </div>

            {/* Botón Contactate */}
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <EnvelopeIcon className="w-5 h-5 mr-2" />
              Contactate
            </Link>
          </div>

          {/* Trámites */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Trámites</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/tramites/ingresos-brutos" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Ingresos Brutos
                </Link>
              </li>
              <li>
                <Link 
                  to="/tramites/inmobiliario" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Impuestos Inmobiliarios
                </Link>
              </li>
              <li>
                <Link 
                  to="/tramites/control-fiscal" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Control Fiscal en Rutas
                </Link>
              </li>
              <li>
                <Link 
                  to="/tramites/sellos" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Tasas y Sellos
                </Link>
              </li>
              <li>
                <Link 
                  to="/tramites/automotor" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Automotor
                </Link>
              </li>
              <li>
                <Link 
                  to="/tramites/otros" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Otros Trámites
                </Link>
              </li>
            </ul>
          </div>

          {/* Información Fiscal */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Información Fiscal</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/info/normativas" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Normativas
                </Link>
              </li>
              <li>
                <Link 
                  to="/info/documentacion" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Documentación y Estadísticas
                </Link>
              </li>
              <li>
                <Link 
                  to="/info/padrones" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Padrones Productores
                </Link>
              </li>
              <li>
                <Link 
                  to="/info/exenciones" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Exenciones Impositivas
                </Link>
              </li>
              <li>
                <Link 
                  to="/institucional/autoridades" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Autoridades
                </Link>
              </li>
            </ul>
          </div>

          {/* Centro de Ayuda */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Centro de Ayuda</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Contacto
                </Link>
              </li>
              <li>
                <Link 
                  to="/ayuda/guias" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Guías y Manuales de Usuario
                </Link>
              </li>
              <li>
                <Link 
                  to="/ayuda/videotutoriales" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Videotutoriales
                </Link>
              </li>
              <li>
                <Link 
                  to="/institucional/atencion" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Atención al Público
                </Link>
              </li>
              <li>
                <Link 
                  to="/ayuda/faq" 
                  className="text-gray-200 hover:text-white transition-colors duration-200 flex items-center group"
                >
                  <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 group-hover:bg-white transition-colors"></span>
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="border-t border-white/20"></div>

      {/* Copyright */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-300 text-sm">
            Copyright© 2025 | Todos los derechos reservados.
          </p>
          
          {/* Botón volver arriba */}
          <button
            onClick={scrollToTop}
            className="mt-4 sm:mt-0 w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-200 group"
            aria-label="Volver arriba"
          >
            <ArrowUpIcon className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
}

export default Footer;