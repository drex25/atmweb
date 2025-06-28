import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  DocumentTextIcon,
  HomeIcon,
  TruckIcon,
  DocumentIcon,
  EnvelopeIcon,
  EllipsisHorizontalIcon,
  InformationCircleIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  ChevronRightIcon,
  ArrowRightIcon,
  SparklesIcon,
  LightBulbIcon,
  CpuChipIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

// Datos exactos de las categorías según la imagen
const mainCategories = [
  {
    id: 'ingresos-brutos',
    title: 'INGRESOS BRUTOS',
    icon: DocumentTextIcon,
    color: '#3B82F6',
    services: [
      'Trámites y Gestiones',
      'Información General',
      'Exenciones y Bonificaciones',
      'Declaración Jurada',
      'Certificados y Boletas'
    ]
  },
  {
    id: 'inmobiliario',
    title: 'INMOBILIARIO',
    icon: HomeIcon,
    color: '#8B5CF6',
    services: [
      'Trámites y Gestiones',
      'Información General',
      'Exenciones y Bonificaciones'
    ]
  },
  {
    id: 'automotor',
    title: 'AUTOMOTOR',
    icon: TruckIcon,
    color: '#10B981',
    services: [
      'Trámites y Gestiones',
      'Información General',
      'Exenciones y Bonificaciones'
    ]
  },
  {
    id: 'sellos',
    title: 'SELLOS',
    icon: DocumentIcon,
    color: '#F59E0B',
    services: [
      'Trámites y Gestiones',
      'Información General',
      'Exenciones y Bonificaciones'
    ]
  },
  {
    id: 'cfr',
    title: 'CFR',
    icon: ClipboardDocumentListIcon,
    color: '#EF4444',
    services: [
      'Trámites y Gestiones',
      'Información General',
      'Exenciones y Bonificaciones'
    ]
  },
  {
    id: 'tramites-frecuentes',
    title: 'TRÁMITES FRECUENTES',
    icon: ClipboardDocumentListIcon,
    color: '#EC4899',
    services: [
      'SR-311 Inscripción',
      'SR-368 Clave Fiscal',
      'SR-178 Multimotivo',
      'SR-388 Domicilio Fiscal',
      'SR-341 Pago a cuenta',
      'SR-318 DDJJ IIBB mensual',
      'SR-320 DDJJ IIBB anual'
    ]
  },
  {
    id: 'contacto',
    title: 'CONTACTO',
    icon: EnvelopeIcon,
    color: '#06B6D4',
    services: [
      'Encuesta de Satisfacción',
      'Reclamos, Quejas y Sugerencias',
      'Curriculum Vitae',
      'Mesa de Ayuda',
      'Atención al Público',
      'Gestión Externa'
    ]
  },
  {
    id: 'otros',
    title: 'OTROS',
    icon: EllipsisHorizontalIcon,
    color: '#6B7280',
    services: [
      'Clave Fiscal',
      'Legajo Único',
      'Domicilio Fiscal',
      'Medios de Pago',
      'Agentes',
      'SIRTAC',
      'Notarios',
      'Manuales de Usuario'
    ]
  }
];

// Componente de búsqueda futurista
const FuturisticSearch = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-4xl mx-auto mb-20">
      <div className="relative group">
        {/* Anillo de energía */}
        <div className="absolute -inset-4 rounded-full border-2 border-cyan-400/30 animate-spin" style={{animationDuration: '8s'}}></div>
        <div className="absolute -inset-2 rounded-full border border-blue-400/20 animate-spin" style={{animationDuration: '6s', animationDirection: 'reverse'}}></div>
        
        {/* Campo de búsqueda */}
        <div className="relative bg-black/40 backdrop-blur-2xl border border-cyan-400/30 rounded-full p-2 shadow-2xl">
          <div className="flex items-center bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-full">
            <div className="flex-shrink-0 pl-6">
              <MagnifyingGlassIcon className="h-6 w-6 text-cyan-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar en el sistema neural..."
              className="flex-1 px-6 py-4 bg-transparent text-white text-lg placeholder-cyan-300/60 focus:outline-none font-medium"
            />
            <button className="flex-shrink-0 mr-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-base hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 hover:scale-105">
              <span className="flex items-center gap-2">
                <CpuChipIcon className="h-5 w-5" />
                Procesar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de tarjeta hexagonal futurista
const HexagonalCard = ({ category, isExpanded, onToggle }) => {
  return (
    <div className="group relative" onClick={onToggle}>
      {/* Contenedor hexagonal */}
      <div className="relative w-full h-80 cursor-pointer">
        {/* Hexágono de fondo */}
        <div 
          className="absolute inset-0 transition-all duration-500 group-hover:scale-105"
          style={{
            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
            background: `linear-gradient(135deg, ${category.color}20, ${category.color}40)`,
            border: `2px solid ${category.color}60`
          }}
        >
          {/* Efectos de luz */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at center, ${category.color}30, transparent 70%)`
            }}
          ></div>
        </div>

        {/* Contenido */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10">
          {/* Icono central */}
          <div 
            className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
            style={{
              backgroundColor: `${category.color}20`,
              borderColor: category.color,
              boxShadow: `0 0 20px ${category.color}40`
            }}
          >
            <category.icon className="h-8 w-8 text-white" />
          </div>

          {/* Título */}
          <h3 className="text-white font-black text-lg mb-4 tracking-wide leading-tight">
            {category.title}
          </h3>

          {/* Contador de servicios */}
          <div 
            className="px-4 py-2 rounded-full text-sm font-bold text-white border transition-all duration-300"
            style={{
              backgroundColor: `${category.color}30`,
              borderColor: category.color
            }}
          >
            {category.services.length} servicios
          </div>

          {/* Indicador de expansión */}
          <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ChevronRightIcon 
              className={`h-6 w-6 text-white transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
            />
          </div>
        </div>

        {/* Partículas flotantes */}
        <div className="absolute inset-0 pointer-events-none">
          <div 
            className="absolute top-4 left-4 w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: category.color }}
          ></div>
          <div 
            className="absolute top-8 right-6 w-1 h-1 rounded-full animate-pulse delay-300"
            style={{ backgroundColor: category.color }}
          ></div>
          <div 
            className="absolute bottom-6 left-8 w-1.5 h-1.5 rounded-full animate-pulse delay-700"
            style={{ backgroundColor: category.color }}
          ></div>
        </div>
      </div>

      {/* Panel de servicios expandible */}
      {isExpanded && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 z-20">
          <div 
            className="bg-black/80 backdrop-blur-xl rounded-2xl border-2 p-6 shadow-2xl"
            style={{ borderColor: `${category.color}60` }}
          >
            <div className="space-y-3">
              {category.services.map((service, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/20"
                >
                  <span className="text-white font-medium text-sm">{service}</span>
                  <ChevronRightIcon className="h-4 w-4 text-white/60 hover:text-white transition-colors" />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// Componente principal
export default function Autogestion() {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedCategory, setExpandedCategory] = useState(null);

  const filteredCategories = mainCategories.filter(category =>
    category.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    category.services.some(service => 
      service.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo espacial */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      
      {/* Estrellas animadas */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Ondas de energía */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-cyan-400/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 border border-purple-400/20 rounded-full animate-ping" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
      </div>

      {/* Hero Section futurista */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge holográfico */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-xl border border-cyan-400/30 mb-8 shadow-2xl group hover:scale-105 transition-all duration-300">
            <RocketLaunchIcon className="h-6 w-6 text-cyan-400 animate-bounce" />
            <span className="text-cyan-300 font-bold text-lg tracking-wide uppercase">Sistema Neural ATM</span>
            <CpuChipIcon className="h-6 w-6 text-blue-400 animate-pulse" />
          </div>

          {/* Título holográfico */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              AUTO
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              GESTIÓN
            </span>
            <br />
            <span className="text-4xl md:text-5xl bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
              NEURAL
            </span>
          </h1>

          {/* Subtítulo futurista */}
          <p className="text-xl md:text-2xl text-cyan-100 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            Interfaz de gestión tributaria de próxima generación.
            <br />
            <span className="text-cyan-300 font-medium">Potenciado por IA avanzada</span> para una experiencia sin precedentes.
          </p>

          {/* Barra de búsqueda */}
          <FuturisticSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Banner de estado del sistema */}
          <div className="relative group mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-cyan-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-green-500/20 to-cyan-500/20 backdrop-blur-xl rounded-2xl p-6 border border-green-400/30 shadow-xl">
              <div className="flex items-center justify-center gap-4 text-white">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-lg font-bold">
                  🤖 Sistema Neural Activo - Todos los servicios operativos
                </span>
                <SparklesIcon className="h-6 w-6 animate-pulse text-cyan-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid hexagonal de categorías */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <HexagonalCard
                category={category}
                isExpanded={expandedCategory === category.id}
                onToggle={() => setExpandedCategory(
                  expandedCategory === category.id ? null : category.id
                )}
              />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredCategories.length === 0 && searchTerm && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-xl flex items-center justify-center shadow-xl border border-red-400/30">
              <MagnifyingGlassIcon className="h-16 w-16 text-red-400" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">Sistema no encontró coincidencias</h3>
            <p className="text-cyan-200 mb-10 text-xl">Recalibrando parámetros de búsqueda...</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 hover:scale-105 text-lg border border-cyan-400/30"
            >
              Reiniciar Sistema
            </button>
          </div>
        )}
      </section>

      {/* Panel de asistencia futurista */}
      <section className="relative z-10 py-20 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Centro de Asistencia Neural
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="tel:0810-444-5505"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 border border-green-400/30">
                <PhoneIcon className="h-20 w-20 mx-auto mb-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-6">Línea Directa</h3>
                <p className="text-green-200 mb-6 text-lg">Conexión inmediata</p>
                <span className="text-4xl font-black text-green-400">0810-444-5505</span>
              </div>
            </a>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 border border-blue-400/30">
                <QuestionMarkCircleIcon className="h-20 w-20 mx-auto mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-6">IA Asistente</h3>
                <p className="text-blue-200 mb-6 text-lg">Respuestas inteligentes</p>
                <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-xl group-hover:text-blue-300 transition-colors">
                  Activar <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 border border-purple-400/30">
                <BookOpenIcon className="h-20 w-20 mx-auto mb-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-6">Base de Datos</h3>
                <p className="text-purple-200 mb-6 text-lg">Conocimiento total</p>
                <div className="flex items-center justify-center gap-2 text-purple-400 font-bold text-xl group-hover:text-purple-300 transition-colors">
                  Acceder <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante holográfico */}
      <button className="fixed bottom-8 right-8 z-50 group">
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-300 animate-pulse"></div>
        <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-cyan-400/50">
          <QuestionMarkCircleIcon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </div>
      </button>
    </div>
  );
}