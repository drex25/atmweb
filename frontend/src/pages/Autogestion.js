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
  ArrowRightIcon
} from '@heroicons/react/24/outline';

// Datos de las categorías principales
const mainCategories = [
  {
    id: 'ingresos-brutos',
    title: 'INGRESOS BRUTOS',
    icon: DocumentTextIcon,
    color: 'from-[#023F5E] to-[#2563eb]',
    iconBg: 'from-purple-100 to-pink-100',
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
    color: 'from-[#023F5E] to-[#612247]',
    iconBg: 'from-blue-100 to-purple-100',
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
    color: 'from-[#612247] to-[#2563eb]',
    iconBg: 'from-pink-100 to-blue-100',
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
    color: 'from-[#2563eb] to-[#023F5E]',
    iconBg: 'from-indigo-100 to-purple-100',
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
    color: 'from-[#023F5E] to-[#612247]',
    iconBg: 'from-green-100 to-teal-100',
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
    color: 'from-[#612247] to-[#023F5E]',
    iconBg: 'from-yellow-100 to-orange-100',
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
    color: 'from-[#2563eb] to-[#612247]',
    iconBg: 'from-red-100 to-pink-100',
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
    color: 'from-[#023F5E] to-[#2563eb]',
    iconBg: 'from-gray-100 to-slate-100',
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

// Componente de búsqueda mejorado
const SearchSection = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-2xl mx-auto mb-12">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Ingresá palabras claves para encontrar tu trámite..."
          className="w-full px-6 py-4 pl-14 pr-16 text-lg rounded-2xl border-2 border-white/30 bg-white/90 backdrop-blur-md shadow-xl focus:outline-none focus:ring-4 focus:ring-pink-300/50 focus:border-pink-400 transition-all duration-300 placeholder-gray-500"
        />
        <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
        <button className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl">
          Buscar
        </button>
      </div>
    </div>
  );
};

// Componente de tarjeta de categoría completamente rediseñado
const CategoryCard = ({ category, isExpanded, onToggle }) => {
  return (
    <div className="group relative">
      <div 
        className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-pink-200/50 cursor-pointer ${
          isExpanded ? 'ring-4 ring-pink-300/50' : ''
        }`}
        onClick={onToggle}
      >
        {/* Header con gradiente mejorado */}
        <div className={`bg-gradient-to-r ${category.color} p-8 text-center relative overflow-hidden`}>
          {/* Efectos de fondo sutiles */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          
          {/* Contenido del header */}
          <div className="relative z-10">
            <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.iconBg} flex items-center justify-center shadow-xl border-4 border-white/30 group-hover:scale-110 transition-transform duration-300`}>
              <category.icon className="h-10 w-10 text-[#612247]" />
            </div>
            <h3 className="text-xl font-extrabold text-white tracking-wide drop-shadow-lg">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Lista de servicios completamente rediseñada */}
        <div className="bg-white/95 backdrop-blur-md">
          <div className="p-6 space-y-2">
            {category.services.map((service, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-4 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-300 group/item cursor-pointer border border-transparent hover:border-pink-200 hover:shadow-md"
              >
                <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors flex-1">
                  {service}
                </span>
                <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover/item:text-pink-500 group-hover/item:translate-x-1 transition-all duration-200" />
              </div>
            ))}
          </div>
        </div>
      </div>
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 relative overflow-hidden">
      {/* Efectos de fondo decorativos mejorados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-indigo-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-100/10 via-purple-100/10 to-blue-100/10 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section mejorado */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge superior con mejor diseño */}
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border-2 border-pink-200/50 mb-8 backdrop-blur-md shadow-lg">
            <UserGroupIcon className="h-6 w-6 text-pink-600" />
            <span className="text-pink-700 font-bold text-base tracking-wide uppercase">Centro de Autogestión</span>
          </div>

          {/* Título principal con mejor tipografía */}
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-[#023F5E] via-[#612247] to-[#2563eb] bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
            CENTRO DE AUTOGESTIÓN
          </h1>

          {/* Subtítulo mejorado */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Gestioná todos tus trámites tributarios de manera rápida, segura y eficiente desde un solo lugar
          </p>

          {/* Barra de búsqueda */}
          <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Banner informativo mejorado */}
          <div className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-md rounded-2xl p-6 mb-16 shadow-2xl border border-white/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
            <div className="relative flex items-center justify-center gap-3 text-white">
              <InformationCircleIcon className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-semibold">
                ¡Ahora! 👉 leos, manuales y mucho más para facilitar tus trámites!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de categorías mejorado */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CategoryCard
                category={category}
                isExpanded={expandedCategory === category.id}
                onToggle={() => setExpandedCategory(
                  expandedCategory === category.id ? null : category.id
                )}
              />
            </div>
          ))}
        </div>

        {/* Mensaje cuando no hay resultados mejorado */}
        {filteredCategories.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-xl">
              <MagnifyingGlassIcon className="h-16 w-16 text-gray-400" />
            </div>
            <h3 className="text-3xl font-bold text-gray-700 mb-4">No se encontraron resultados</h3>
            <p className="text-gray-500 mb-8 text-lg">Intentá con otros términos de búsqueda</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-2xl font-bold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </section>

      {/* Sección de ayuda adicional mejorada */}
      <section className="relative z-10 bg-gradient-to-r from-[#023F5E]/5 to-[#612247]/5 py-20 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-12 bg-gradient-to-r from-[#023F5E] to-[#612247] bg-clip-text text-transparent">
            ¿Necesitás ayuda adicional?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="tel:0810-444-5505"
              className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-pink-200/50 transition-all duration-300 hover:scale-105 border border-white/50 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-emerald-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <PhoneIcon className="h-16 w-16 mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Contacto Directo</h3>
                <p className="text-gray-600 mb-4 text-lg">Llamanos para asistencia inmediata</p>
                <span className="text-3xl font-bold text-green-600">0810-444-5505</span>
              </div>
            </a>

            <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-blue-200/50 transition-all duration-300 hover:scale-105 border border-white/50 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <QuestionMarkCircleIcon className="h-16 w-16 mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Preguntas Frecuentes</h3>
                <p className="text-gray-600 mb-4 text-lg">Encontrá respuestas rápidas</p>
                <div className="flex items-center justify-center gap-2 text-blue-600 font-bold text-lg group-hover:text-blue-700 transition-colors">
                  Ver FAQ <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group p-8 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl hover:shadow-purple-200/50 transition-all duration-300 hover:scale-105 border border-white/50 relative overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 to-pink-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <BookOpenIcon className="h-16 w-16 mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Manuales y Guías</h3>
                <p className="text-gray-600 mb-4 text-lg">Documentación completa</p>
                <div className="flex items-center justify-center gap-2 text-purple-600 font-bold text-lg group-hover:text-purple-700 transition-colors">
                  Descargar <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante de ayuda mejorado */}
      <button className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group border-4 border-white/30">
        <QuestionMarkCircleIcon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}