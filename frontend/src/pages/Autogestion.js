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
              placeholder="Buscar trámites, servicios..."
              className="flex-1 px-6 py-4 bg-transparent text-white text-lg placeholder-cyan-300/60 focus:outline-none font-medium"
            />
            <button className="flex-shrink-0 mr-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold text-base hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 hover:scale-105">
              <span className="flex items-center gap-2">
                <CpuChipIcon className="h-5 w-5" />
                Buscar
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de tarjeta moderna con contenido visible
const ModernCard = ({ category }) => {
  return (
    <div className="group relative h-full">
      {/* Contenedor principal */}
      <div className="relative h-full min-h-[420px] cursor-pointer">
        {/* Fondo con efectos */}
        <div 
          className="absolute inset-0 rounded-3xl transition-all duration-500 group-hover:scale-105 border-2"
          style={{
            background: `linear-gradient(135deg, ${category.color}15, ${category.color}25, transparent)`,
            borderColor: `${category.color}40`,
            boxShadow: `0 8px 32px ${category.color}20`
          }}
        >
          {/* Efectos de luz */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
          <div 
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
            style={{
              background: `radial-gradient(circle at center, ${category.color}30, transparent 70%)`
            }}
          ></div>
        </div>

        {/* Contenido de la tarjeta */}
        <div className="relative h-full flex flex-col p-8 z-10">
          {/* Header con icono y título */}
          <div className="flex flex-col items-center text-center mb-6">
            <div 
              className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
              style={{
                backgroundColor: `${category.color}20`,
                borderColor: category.color,
                boxShadow: `0 0 20px ${category.color}40`
              }}
            >
              <category.icon className="h-10 w-10 text-white" />
            </div>

            <h3 className="text-white font-black text-xl mb-2 tracking-wide leading-tight">
              {category.title}
            </h3>
          </div>

          {/* Lista de servicios siempre visible */}
          <div className="flex-1 space-y-2">
            {category.services.map((service, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all duration-300 cursor-pointer border border-transparent hover:border-white/20 group/item"
              >
                <span className="text-white/90 font-medium text-sm group-hover/item:text-white transition-colors flex-1 text-left">
                  {service}
                </span>
                <ChevronRightIcon className="h-4 w-4 text-white/60 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" />
              </div>
            ))}
          </div>

          {/* Footer con contador */}
          <div className="mt-4 text-center">
            <div 
              className="inline-block px-4 py-2 rounded-full text-sm font-bold text-white border transition-all duration-300"
              style={{
                backgroundColor: `${category.color}30`,
                borderColor: category.color
              }}
            >
              {category.services.length} servicios disponibles
            </div>
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
    </div>
  );
};

// Componente principal
export default function Autogestion() {
  const [searchTerm, setSearchTerm] = useState('');

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
            <UserGroupIcon className="h-6 w-6 text-cyan-400" />
            <span className="text-cyan-300 font-bold text-lg tracking-wide uppercase">Centro de Autogestión</span>
          </div>

          {/* Título holográfico */}
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-2xl">
              CENTRO DE
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-2xl">
              AUTOGESTIÓN
            </span>
          </h1>

          {/* Subtítulo futurista */}
          <p className="text-xl md:text-2xl text-cyan-100 mb-16 max-w-4xl mx-auto font-light leading-relaxed">
            Gestioná todos tus trámites tributarios de manera rápida, segura y eficiente desde un solo lugar
          </p>

          {/* Barra de búsqueda */}
          <FuturisticSearch searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Banner de estado del sistema */}
          <div className="relative group mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-purple-400/30 shadow-xl">
              <div className="flex items-center justify-center gap-4 text-white">
                <InformationCircleIcon className="h-6 w-6 animate-pulse text-cyan-300" />
                <span className="text-lg font-bold">
                  ¡Ahora! 👉 Manuales, guías y mucho más para facilitar tus trámites!
                </span>
                <SparklesIcon className="h-6 w-6 animate-pulse text-pink-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de categorías con contenido visible */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ModernCard category={category} />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredCategories.length === 0 && searchTerm && (
          <div className="text-center py-20">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-red-500/20 to-orange-500/20 backdrop-blur-xl flex items-center justify-center shadow-xl border border-red-400/30">
              <MagnifyingGlassIcon className="h-16 w-16 text-red-400" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">No se encontraron resultados</h3>
            <p className="text-cyan-200 mb-10 text-xl">Intentá con otros términos de búsqueda</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-12 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-bold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-xl hover:shadow-cyan-500/50 hover:scale-105 text-lg border border-cyan-400/30"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </section>

      {/* Panel de asistencia futurista */}
      <section className="relative z-10 py-20 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-black/60 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-16 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ¿Necesitás ayuda adicional?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="tel:0810-444-5505"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-green-500/30 transition-all duration-300 hover:scale-105 border border-green-400/30">
                <PhoneIcon className="h-16 w-16 mx-auto mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Contacto Directo</h3>
                <p className="text-green-200 mb-4 text-lg">Llamanos para asistencia inmediata</p>
                <span className="text-3xl font-bold text-green-400">0810-444-5505</span>
              </div>
            </a>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105 border border-blue-400/30">
                <QuestionMarkCircleIcon className="h-16 w-16 mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Preguntas Frecuentes</h3>
                <p className="text-blue-200 mb-4 text-lg">Encontrá respuestas rápidas</p>
                <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors">
                  Ver FAQ <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative p-10 bg-black/40 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:scale-105 border border-purple-400/30">
                <BookOpenIcon className="h-16 w-16 mx-auto mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Manuales y Guías</h3>
                <p className="text-purple-200 mb-4 text-lg">Documentación completa</p>
                <div className="flex items-center justify-center gap-2 text-purple-400 font-bold text-lg group-hover:text-purple-300 transition-colors">
                  Descargar <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
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