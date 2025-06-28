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
  LightBulbIcon
} from '@heroicons/react/24/outline';

// Datos exactos de las categorías según la imagen
const mainCategories = [
  {
    id: 'ingresos-brutos',
    title: 'INGRESOS BRUTOS',
    icon: DocumentTextIcon,
    gradient: 'from-blue-600 via-blue-700 to-indigo-800',
    glowColor: 'blue',
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
    gradient: 'from-purple-600 via-purple-700 to-pink-800',
    glowColor: 'purple',
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
    gradient: 'from-emerald-600 via-teal-700 to-cyan-800',
    glowColor: 'emerald',
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
    gradient: 'from-orange-600 via-red-600 to-pink-700',
    glowColor: 'orange',
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
    gradient: 'from-indigo-600 via-blue-700 to-purple-800',
    glowColor: 'indigo',
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
    gradient: 'from-amber-600 via-orange-600 to-red-700',
    glowColor: 'amber',
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
    gradient: 'from-rose-600 via-pink-700 to-purple-800',
    glowColor: 'rose',
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
    gradient: 'from-slate-600 via-gray-700 to-zinc-800',
    glowColor: 'slate',
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

// Componente de búsqueda ultra moderno
const UltraSearchSection = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-4xl mx-auto mb-16">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-2 shadow-2xl">
          <div className="flex items-center">
            <div className="flex-shrink-0 pl-6">
              <MagnifyingGlassIcon className="h-7 w-7 text-white/70" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar trámites, servicios, información..."
              className="flex-1 px-6 py-6 bg-transparent text-white text-xl placeholder-white/60 focus:outline-none font-medium"
            />
            <button className="flex-shrink-0 mr-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de tarjeta ultra moderna
const UltraModernCard = ({ category, isExpanded, onToggle }) => {
  const glowColors = {
    blue: 'shadow-blue-500/25 hover:shadow-blue-500/40',
    purple: 'shadow-purple-500/25 hover:shadow-purple-500/40',
    emerald: 'shadow-emerald-500/25 hover:shadow-emerald-500/40',
    orange: 'shadow-orange-500/25 hover:shadow-orange-500/40',
    indigo: 'shadow-indigo-500/25 hover:shadow-indigo-500/40',
    amber: 'shadow-amber-500/25 hover:shadow-amber-500/40',
    rose: 'shadow-rose-500/25 hover:shadow-rose-500/40',
    slate: 'shadow-slate-500/25 hover:shadow-slate-500/40'
  };

  return (
    <div className="group relative h-full">
      {/* Glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500`}></div>
      
      <div 
        className={`relative overflow-hidden rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full flex flex-col min-h-[480px] ${glowColors[category.glowColor]} shadow-2xl hover:shadow-3xl ${
          isExpanded ? 'ring-2 ring-white/30' : ''
        }`}
        onClick={onToggle}
      >
        {/* Header con diseño futurista */}
        <div className={`bg-gradient-to-br ${category.gradient} p-8 text-center relative overflow-hidden flex-shrink-0`}>
          {/* Efectos de fondo animados */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Patrón geométrico de fondo */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-4 left-4 w-8 h-8 border-2 border-white rotate-45"></div>
            <div className="absolute top-4 right-4 w-6 h-6 border-2 border-white rounded-full"></div>
            <div className="absolute bottom-4 left-4 w-4 h-4 bg-white rounded-full"></div>
            <div className="absolute bottom-4 right-4 w-6 h-6 border-2 border-white"></div>
          </div>
          
          {/* Contenido del header */}
          <div className="relative z-10">
            <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-2xl border border-white/30 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              <category.icon className="h-10 w-10 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-xl font-black text-white tracking-wide drop-shadow-2xl leading-tight">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Lista de servicios con diseño glassmorphism */}
        <div className="bg-white/5 backdrop-blur-md flex-1 flex flex-col border-t border-white/10">
          <div className="p-6 space-y-2 flex-1">
            {category.services.map((service, idx) => (
              <div 
                key={idx}
                className="flex items-center justify-between p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 group/item cursor-pointer border border-transparent hover:border-white/20 hover:shadow-lg backdrop-blur-sm"
              >
                <span className="text-white/90 font-medium group-hover/item:text-white transition-colors flex-1 text-sm leading-relaxed">
                  {service}
                </span>
                <ChevronRightIcon className="h-5 w-5 text-white/50 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-200 flex-shrink-0 ml-3" />
              </div>
            ))}
          </div>
          
          {/* Footer con efecto brillante */}
          <div className="p-4 border-t border-white/10">
            <div className="text-center">
              <span className="text-white/60 text-xs font-medium">
                {category.services.length} servicios disponibles
              </span>
            </div>
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
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo ultra moderno con gradientes animados */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Efectos de fondo animados */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* Patrón de puntos */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Hero Section ultra futurista */}
      <section className="relative z-10 pt-24 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge superior con efectos */}
          <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-12 shadow-2xl group hover:scale-105 transition-all duration-300">
            <div className="w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
            <SparklesIcon className="h-6 w-6 text-blue-400" />
            <span className="text-white font-bold text-lg tracking-wide uppercase">Centro de Autogestión Digital</span>
            <LightBulbIcon className="h-6 w-6 text-purple-400" />
            <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full animate-pulse delay-500"></div>
          </div>

          {/* Título principal con efectos de texto */}
          <h1 className="text-6xl md:text-8xl font-black mb-8 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
            AUTOGESTIÓN
            <span className="block text-5xl md:text-7xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              INTELIGENTE
            </span>
          </h1>

          {/* Subtítulo mejorado */}
          <p className="text-xl md:text-2xl text-white/80 mb-16 max-w-4xl mx-auto font-medium leading-relaxed">
            Plataforma digital avanzada para gestionar todos tus trámites tributarios de manera 
            <span className="text-blue-300 font-semibold"> rápida</span>, 
            <span className="text-purple-300 font-semibold"> segura</span> y 
            <span className="text-pink-300 font-semibold"> eficiente</span>
          </p>

          {/* Barra de búsqueda */}
          <UltraSearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Banner informativo futurista */}
          <div className="relative group mb-20">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              <div className="flex items-center justify-center gap-4 text-white">
                <InformationCircleIcon className="h-8 w-8 animate-pulse text-blue-300" />
                <span className="text-xl font-bold">
                  🚀 ¡Ahora disponible! Manuales interactivos, guías paso a paso y asistencia en tiempo real
                </span>
                <SparklesIcon className="h-8 w-8 animate-pulse text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de categorías ultra moderno */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 auto-rows-fr">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <UltraModernCard
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
            <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-white/20">
              <MagnifyingGlassIcon className="h-20 w-20 text-white/50" />
            </div>
            <h3 className="text-4xl font-bold text-white mb-6">No se encontraron resultados</h3>
            <p className="text-white/70 mb-10 text-xl">Intentá con otros términos de búsqueda</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-3xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105 text-xl border border-white/20"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </section>

      {/* Sección de ayuda ultra moderna */}
      <section className="relative z-10 py-24 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/40 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-black text-white mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ¿Necesitás Asistencia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <a 
              href="tel:0810-444-5505"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/10">
                <PhoneIcon className="h-20 w-20 mx-auto mb-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-6">Contacto Directo</h3>
                <p className="text-white/70 mb-6 text-lg">Asistencia inmediata las 24 horas</p>
                <span className="text-4xl font-black text-green-400">0810-444-5505</span>
              </div>
            </a>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/10">
                <QuestionMarkCircleIcon className="h-20 w-20 mx-auto mb-8 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-6">FAQ Inteligente</h3>
                <p className="text-white/70 mb-6 text-lg">Respuestas instantáneas con IA</p>
                <div className="flex items-center justify-center gap-3 text-blue-400 font-bold text-xl group-hover:text-blue-300 transition-colors">
                  Explorar <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-1000"></div>
              <div className="relative p-10 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 border border-white/10">
                <BookOpenIcon className="h-20 w-20 mx-auto mb-8 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-3xl font-bold text-white mb-6">Guías Interactivas</h3>
                <p className="text-white/70 mb-6 text-lg">Tutoriales paso a paso</p>
                <div className="flex items-center justify-center gap-3 text-purple-400 font-bold text-xl group-hover:text-purple-300 transition-colors">
                  Acceder <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante futurista */}
      <button className="fixed bottom-8 right-8 z-50 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition duration-300"></div>
        <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20">
          <QuestionMarkCircleIcon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </div>
      </button>
    </div>
  );
}