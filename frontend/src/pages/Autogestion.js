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
  ShieldCheckIcon,
  GiftIcon,
  ScaleIcon,
  CurrencyDollarIcon,
  ClipboardDocumentListIcon,
  UserGroupIcon,
  PhoneIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  KeyIcon,
  BuildingOfficeIcon,
  DocumentDuplicateIcon,
  CogIcon,
  ChartBarIcon,
  BanknotesIcon,
  IdentificationIcon
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

// Componente de tarjeta de categoría mejorado
const CategoryCard = ({ category, isExpanded, onToggle }) => {
  return (
    <div className="group relative">
      <div 
        className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-500 hover:scale-105 hover:shadow-pink-200/50 cursor-pointer ${
          isExpanded ? 'ring-4 ring-pink-300/50' : ''
        }`}
        onClick={onToggle}
      >
        {/* Header con gradiente */}
        <div className={`bg-gradient-to-r ${category.color} p-8 text-center relative overflow-hidden`}>
          {/* Efectos de fondo */}
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

        {/* Lista de servicios */}
        <div className="bg-white/95 backdrop-blur-md">
          <div className="p-6 space-y-3">
            {category.services.map((service, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-3 rounded-xl hover:bg-gradient-to-r hover:from-pink-50 hover:to-purple-50 transition-all duration-200 group/item cursor-pointer border border-transparent hover:border-pink-200"
              >
                <span className="text-gray-700 font-medium group-hover/item:text-gray-900 transition-colors">
                  {service}
                </span>
                <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-400 to-purple-400 opacity-60 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-200"></div>
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
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-pink-100/20 via-purple-100/20 to-blue-100/20 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 border border-pink-200 mb-8 backdrop-blur-md">
            <UserGroupIcon className="h-5 w-5 text-pink-600" />
            <span className="text-pink-700 font-semibold text-sm tracking-wide uppercase">Centro de Autogestión</span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#023F5E] via-[#612247] to-[#2563eb] bg-clip-text text-transparent drop-shadow-xl tracking-tight">
            CENTRO DE AUTOGESTIÓN
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Gestioná todos tus trámites tributarios de manera rápida, segura y eficiente desde un solo lugar
          </p>

          {/* Barra de búsqueda */}
          <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Banner informativo */}
          <div className="bg-gradient-to-r from-purple-500/90 to-pink-500/90 backdrop-blur-md rounded-2xl p-6 mb-16 shadow-2xl border border-white/20">
            <div className="flex items-center justify-center gap-3 text-white">
              <InformationCircleIcon className="h-6 w-6 animate-pulse" />
              <span className="text-lg font-semibold">
                ¡Ahora! 👉 leos, manuales y mucho más para facilitar tus trámites!
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de categorías */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              isExpanded={expandedCategory === category.id}
              onToggle={() => setExpandedCategory(
                expandedCategory === category.id ? null : category.id
              )}
            />
          ))}
        </div>

        {/* Mensaje cuando no hay resultados */}
        {filteredCategories.length === 0 && searchTerm && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <MagnifyingGlassIcon className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-2xl font-bold text-gray-700 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-500 mb-6">Intentá con otros términos de búsqueda</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl font-semibold hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </section>

      {/* Sección de ayuda adicional */}
      <section className="relative z-10 bg-gradient-to-r from-[#023F5E]/5 to-[#612247]/5 py-16 mt-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">¿Necesitás ayuda adicional?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a 
              href="tel:0810-444-5505"
              className="group p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50"
            >
              <PhoneIcon className="h-12 w-12 mx-auto mb-4 text-green-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Contacto Directo</h3>
              <p className="text-gray-600 mb-3">Llamanos para asistencia inmediata</p>
              <span className="text-2xl font-bold text-green-600">0810-444-5505</span>
            </a>

            <div className="group p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50">
              <QuestionMarkCircleIcon className="h-12 w-12 mx-auto mb-4 text-blue-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Preguntas Frecuentes</h3>
              <p className="text-gray-600 mb-3">Encontrá respuestas rápidas</p>
              <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                Ver FAQ →
              </button>
            </div>

            <div className="group p-6 bg-white/80 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/50">
              <BookOpenIcon className="h-12 w-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">Manuales y Guías</h3>
              <p className="text-gray-600 mb-3">Documentación completa</p>
              <button className="text-purple-600 font-semibold hover:text-purple-700 transition-colors">
                Descargar →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante de ayuda */}
      <button className="fixed bottom-8 right-8 z-50 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center group">
        <QuestionMarkCircleIcon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  );
}