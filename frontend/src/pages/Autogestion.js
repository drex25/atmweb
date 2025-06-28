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

// Componente de búsqueda mágico
const MagicSearchSection = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="relative max-w-5xl mx-auto mb-16">
      <div className="relative group">
        {/* Glow effect mágico */}
        <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition duration-1000 animate-pulse"></div>
        
        <div className="relative bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl p-3 shadow-2xl">
          <div className="flex items-center">
            <div className="flex-shrink-0 pl-6">
              <MagnifyingGlassIcon className="h-6 w-6 text-white/70" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar trámites, servicios, información..."
              className="flex-1 px-6 py-5 bg-transparent text-white text-lg placeholder-white/60 focus:outline-none font-medium"
            />
            <button className="flex-shrink-0 mr-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-2xl font-bold text-base hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 border border-white/20">
              Buscar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de tarjeta mágica - MÁS ANCHA Y MENOS ALTA
const MagicCard = ({ category, isExpanded, onToggle }) => {
  const glowColors = {
    blue: 'shadow-blue-500/20 hover:shadow-blue-500/30',
    purple: 'shadow-purple-500/20 hover:shadow-purple-500/30',
    emerald: 'shadow-emerald-500/20 hover:shadow-emerald-500/30',
    orange: 'shadow-orange-500/20 hover:shadow-orange-500/30',
    indigo: 'shadow-indigo-500/20 hover:shadow-indigo-500/30',
    amber: 'shadow-amber-500/20 hover:shadow-amber-500/30',
    rose: 'shadow-rose-500/20 hover:shadow-rose-500/30',
    slate: 'shadow-slate-500/20 hover:shadow-slate-500/30'
  };

  return (
    <div className="group relative h-full">
      {/* Glow effect mágico */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${category.gradient} rounded-2xl blur-lg opacity-15 group-hover:opacity-25 transition duration-500`}></div>
      
      <div 
        className={`relative overflow-hidden rounded-2xl bg-white/8 backdrop-blur-xl border border-white/10 transition-all duration-500 hover:scale-[1.02] cursor-pointer h-full flex ${glowColors[category.glowColor]} shadow-xl hover:shadow-2xl ${
          isExpanded ? 'ring-2 ring-white/20' : ''
        }`}
        onClick={onToggle}
        style={{ minHeight: '280px' }} // ALTURA REDUCIDA
      >
        {/* Header compacto - LADO IZQUIERDO */}
        <div className={`bg-gradient-to-br ${category.gradient} flex-shrink-0 w-48 flex flex-col items-center justify-center text-center relative overflow-hidden`}>
          {/* Efectos de fondo sutiles */}
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>
          
          {/* Patrón geométrico sutil */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-2 left-2 w-4 h-4 border border-white rotate-45"></div>
            <div className="absolute top-2 right-2 w-3 h-3 border border-white rounded-full"></div>
            <div className="absolute bottom-2 left-2 w-2 h-2 bg-white rounded-full"></div>
            <div className="absolute bottom-2 right-2 w-3 h-3 border border-white"></div>
          </div>
          
          {/* Contenido del header */}
          <div className="relative z-10 p-6">
            <div className="w-16 h-16 mx-auto mb-3 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center shadow-xl border border-white/30 group-hover:scale-110 group-hover:rotate-2 transition-all duration-500">
              <category.icon className="h-8 w-8 text-white drop-shadow-lg" />
            </div>
            <h3 className="text-base font-black text-white tracking-wide drop-shadow-xl leading-tight">
              {category.title}
            </h3>
          </div>
        </div>

        {/* Lista de servicios - LADO DERECHO MÁS ANCHO */}
        <div className="flex-1 bg-white/5 backdrop-blur-md flex flex-col border-l border-white/10">
          <div className="p-4 flex-1">
            {/* Grid de servicios en 2 columnas para aprovechar el ancho */}
            <div className={`grid gap-2 ${category.services.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
              {category.services.map((service, idx) => (
                <div 
                  key={idx}
                  className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group/item cursor-pointer border border-transparent hover:border-white/20 hover:shadow-sm backdrop-blur-sm"
                >
                  <span className="text-white/90 font-medium group-hover/item:text-white transition-colors text-sm leading-relaxed flex-1">
                    {service}
                  </span>
                  <ChevronRightIcon className="h-4 w-4 text-white/50 group-hover/item:text-white group-hover/item:translate-x-1 transition-all duration-200 flex-shrink-0 ml-2" />
                </div>
              ))}
            </div>
          </div>
          
          {/* Footer compacto */}
          <div className="px-4 py-2 border-t border-white/10">
            <div className="text-center">
              <span className="text-white/50 text-xs font-medium">
                {category.services.length} servicios
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
      {/* Fondo mágico con gradientes animados */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      
      {/* Efectos de fondo mágicos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-500/15 to-purple-500/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-spin" style={{animationDuration: '30s'}}></div>
      </div>

      {/* Patrón de puntos sutil */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>

      {/* Hero Section compacto */}
      <section className="relative z-10 pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Badge superior */}
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 mb-8 shadow-xl group hover:scale-105 transition-all duration-300">
            <SparklesIcon className="h-5 w-5 text-blue-400" />
            <span className="text-white font-bold text-base tracking-wide uppercase">Centro de Autogestión Digital</span>
            <LightBulbIcon className="h-5 w-5 text-purple-400" />
          </div>

          {/* Título principal compacto */}
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl tracking-tight leading-tight">
            AUTOGESTIÓN
            <span className="block text-4xl md:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              INTELIGENTE
            </span>
          </h1>

          {/* Subtítulo compacto */}
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-4xl mx-auto font-medium leading-relaxed">
            Plataforma digital avanzada para gestionar todos tus trámites tributarios de manera 
            <span className="text-blue-300 font-semibold"> rápida</span>, 
            <span className="text-purple-300 font-semibold"> segura</span> y 
            <span className="text-pink-300 font-semibold"> eficiente</span>
          </p>

          {/* Barra de búsqueda */}
          <MagicSearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

          {/* Banner informativo compacto */}
          <div className="relative group mb-16">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
            <div className="relative bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl">
              <div className="flex items-center justify-center gap-3 text-white">
                <InformationCircleIcon className="h-6 w-6 animate-pulse text-blue-300" />
                <span className="text-lg font-bold">
                  🚀 ¡Ahora disponible! Manuales interactivos y asistencia en tiempo real
                </span>
                <SparklesIcon className="h-6 w-6 animate-pulse text-purple-300" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de categorías mágico - GRID MÁS ANCHO */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 auto-rows-fr">
          {filteredCategories.map((category, index) => (
            <div 
              key={category.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <MagicCard
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
          <div className="text-center py-16">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl flex items-center justify-center shadow-xl border border-white/20">
              <MagnifyingGlassIcon className="h-16 w-16 text-white/50" />
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">No se encontraron resultados</h3>
            <p className="text-white/70 mb-8 text-lg">Intentá con otros términos de búsqueda</p>
            <button 
              onClick={() => setSearchTerm('')}
              className="px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 text-lg border border-white/20"
            >
              Limpiar búsqueda
            </button>
          </div>
        )}
      </section>

      {/* Sección de ayuda compacta */}
      <section className="relative z-10 py-16 mt-16">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/30 backdrop-blur-sm"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-black text-white mb-12 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            ¿Necesitás Asistencia?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a 
              href="tel:0810-444-5505"
              className="group relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10">
                <PhoneIcon className="h-16 w-16 mx-auto mb-6 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Contacto Directo</h3>
                <p className="text-white/70 mb-4 text-base">Asistencia inmediata</p>
                <span className="text-3xl font-black text-green-400">0810-444-5505</span>
              </div>
            </a>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10">
                <QuestionMarkCircleIcon className="h-16 w-16 mx-auto mb-6 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">FAQ Inteligente</h3>
                <p className="text-white/70 mb-4 text-base">Respuestas instantáneas</p>
                <div className="flex items-center justify-center gap-2 text-blue-400 font-bold text-lg group-hover:text-blue-300 transition-colors">
                  Explorar <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>

            <div className="group relative cursor-pointer">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition duration-1000"></div>
              <div className="relative p-8 bg-white/5 backdrop-blur-xl rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-white/10">
                <BookOpenIcon className="h-16 w-16 mx-auto mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-2xl font-bold text-white mb-4">Guías Interactivas</h3>
                <p className="text-white/70 mb-4 text-base">Tutoriales paso a paso</p>
                <div className="flex items-center justify-center gap-2 text-purple-400 font-bold text-lg group-hover:text-purple-300 transition-colors">
                  Acceder <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Botón flotante mágico */}
      <button className="fixed bottom-8 right-8 z-50 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition duration-300"></div>
        <div className="relative w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center border border-white/20">
          <QuestionMarkCircleIcon className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
        </div>
      </button>
    </div>
  );
}