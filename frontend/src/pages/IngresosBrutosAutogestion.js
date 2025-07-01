import React, { useEffect, useState, useRef } from "react";
import { 
  ChevronRightIcon, 
  DocumentTextIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  ArrowPathIcon,
  BookmarkIcon,
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';

// Función para decodificar entidades HTML
const decodeHtmlEntities = (text) => {
  const textarea = document.createElement('textarea');
  textarea.innerHTML = text;
  return textarea.value;
};

// Secciones con los IDs reales de la taxonomía "Trámite" en WordPress
const SECTIONS = [
  { 
    name: "Trámites y Gestiones", 
    id: 5,
    icon: "📋",
    color: "#023F5E",
    description: "Gestiona tus trámites principales"
  },
  { 
    name: "Declaración Jurada", 
    id: 6,
    icon: "📄",
    color: "#005C91",
    description: "Presenta tus declaraciones"
  },
  { 
    name: "Certificado", 
    id: 7,
    icon: "🏆",
    color: "#009DDD",
    description: "Obtén certificaciones"
  },
  { 
    name: "Información General", 
    id: 8,
    icon: "💡",
    color: "#612247",
    description: "Consulta información importante"
  },
  { 
    name: "Exenciones", 
    id: 9,
    icon: "⭐",
    color: "#7C3AED",
    description: "Conoce tus beneficios fiscales"
  },
];

export default function IngresosBrutosAutogestion() {
  const [itemsBySection, setItemsBySection] = useState({});
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});
  const [activeSection, setActiveSection] = useState(SECTIONS[0].name);
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const sectionRefs = useRef({});

  useEffect(() => {
    async function fetchItems() {
      const result = {};
      for (const section of SECTIONS) {
        const res = await fetch(
          `http://localhost:8000/wp-json/wp/v2/item_autogestion?tramite=${section.id}&per_page=100`
        );
        const data = await res.json();
        
        // Decodificar entidades HTML en títulos y contenido
        const decodedData = data.map(item => ({
          ...item,
          title: {
            ...item.title,
            rendered: decodeHtmlEntities(item.title.rendered)
          },
          content: {
            ...item.content,
            rendered: decodeHtmlEntities(item.content.rendered)
          }
        }));
        
        result[section.name] = decodedData;
      }
      setItemsBySection(result);
      setLoading(false);
    }
    fetchItems();
  }, []);

  // Scroll a la sección al hacer click en el menú
  const handleMenuClick = (sectionName) => {
    setActiveSection(sectionName);
    setMobileMenuOpen(false); // Cerrar menú móvil
    const ref = sectionRefs.current[sectionName];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Toggle acordeón
  const toggleItem = (section, itemId) => {
    setOpenItems((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [itemId]: !prev[section]?.[itemId],
      },
    }));
  };

  // Toggle bookmark
  const toggleBookmark = (itemId, e) => {
    e.stopPropagation();
    setBookmarkedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(itemId)) {
        newSet.delete(itemId);
      } else {
        newSet.add(itemId);
      }
      return newSet;
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="text-lg md:text-xl text-gray-600 font-medium mt-6">Centro de Autogestión</p>
          <p className="text-sm text-gray-500 mt-2">Cargando autogestión...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section Ultra Compacto y Profesional - RESPONSIVE */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r opacity-95"
          style={{
            background: 'linear-gradient(135deg, #023F5E 0%, #612247 100%)'
          }}
        />
        
        {/* Efectos decorativos profesionales - RESPONSIVE */}
        <div className="absolute inset-0">
          <div className="absolute top-4 left-4 md:top-8 md:left-8 w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-4 right-4 md:bottom-8 md:right-8 w-20 h-20 md:w-24 md:h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Partículas flotantes - RESPONSIVE */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse hidden md:block"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
        
        <div className="relative px-4 sm:px-6 py-8 md:py-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Badge profesional más sofisticado - RESPONSIVE */}
            <div className="inline-flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-4 md:mb-6 shadow-xl">
              <SparklesIcon className="h-3 w-3 md:h-4 md:w-4 animate-pulse" />
              <span className="font-semibold text-xs md:text-sm tracking-wide">Autogestión Digital</span>
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Título principal más impactante - RESPONSIVE */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-black mb-3 md:mb-4 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ingresos Brutos
              </span>
              <span className="block text-sm sm:text-base md:text-xl lg:text-2xl font-light text-white/90 mt-1 md:mt-2 tracking-normal">
                Centro de Autogestión Inteligente
              </span>
            </h1>
            
            {/* Descripción más persuasiva - RESPONSIVE */}
            <p className="text-sm sm:text-base md:text-lg text-white/90 mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed px-4">
              Experiencia digital para gestionar todos tus trámites de manera 
              <span className="font-semibold text-blue-200"> rápida, segura y eficiente</span>
            </p>
            
            {/* Indicadores de estado profesionales - RESPONSIVE */}
            <div className="flex flex-wrap justify-center gap-2 md:gap-3 text-xs md:text-sm px-4">
              <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="font-semibold">Sistema Activo</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                <ClockIcon className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span className="font-semibold">24/7</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                <ShieldCheckIcon className="h-2.5 w-2.5 md:h-3 md:w-3" />
                <span className="font-semibold">Seguro</span>
              </div>
              <div className="flex items-center gap-1.5 md:gap-2 px-2 py-1.5 md:px-4 md:py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                <ArrowPathIcon className="h-2.5 w-2.5 md:h-3 md:w-3 animate-spin" />
                <span className="font-semibold">Tiempo Real</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Botón menú móvil */}
      <div className="lg:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-3 bg-white rounded-xl shadow-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-all duration-300"
        >
          {mobileMenuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Overlay para móvil */}
      {mobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Contenido Principal - RESPONSIVE */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-8">
        <div className="flex gap-6 md:gap-8">
          {/* Menú lateral ultra profesional - RESPONSIVE - CAJA DE NÚMEROS ARREGLADA */}
          <aside className={`w-full max-w-sm lg:w-80 flex-shrink-0 fixed lg:static top-0 left-0 h-full lg:h-auto bg-white lg:bg-transparent z-50 lg:z-auto transform transition-transform duration-300 ${
            mobileMenuOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}>
            <div className="lg:sticky lg:top-6 h-full lg:h-auto overflow-y-auto lg:overflow-visible">
              <div className="bg-white rounded-none lg:rounded-2xl shadow-2xl border-r lg:border border-gray-100 overflow-hidden backdrop-blur-xl h-full lg:h-auto">
                <div className="p-4 md:p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
                  <div className="flex items-center justify-between lg:block">
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-gray-800 flex items-center gap-2">
                        <DocumentTextIcon className="h-4 w-4 md:h-5 md:w-5 text-blue-600" />
                        Secciones Disponibles
                      </h3>
                      <p className="text-xs md:text-sm text-gray-600 mt-1">Selecciona una categoría</p>
                    </div>
                    <button
                      onClick={() => setMobileMenuOpen(false)}
                      className="lg:hidden p-2 text-gray-500 hover:text-gray-700"
                    >
                      <XMarkIcon className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <nav className="p-2 md:p-3">
                  {SECTIONS.map((section) => {
                    const isActive = activeSection === section.name;
                    const itemCount = itemsBySection[section.name]?.length || 0;
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleMenuClick(section.name)}
                        className={`w-full text-left p-3 md:p-4 rounded-lg md:rounded-xl mb-2 transition-all duration-300 group relative overflow-hidden ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg transform scale-[1.02]' 
                            : 'hover:bg-gray-50 border-2 border-transparent hover:shadow-md hover:scale-[1.01]'
                        }`}
                      >
                        {/* Efecto de brillo profesional */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 ${
                          isActive ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
                        }`}></div>
                        
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
                            <div 
                              className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center text-sm md:text-lg transition-all duration-300 shadow-sm border-2 flex-shrink-0 ${
                                isActive ? 'scale-110 shadow-lg border-white' : 'group-hover:scale-105 border-transparent'
                              }`}
                              style={{
                                backgroundColor: `${section.color}15`,
                                borderColor: isActive ? section.color : 'transparent'
                              }}
                            >
                              {section.icon}
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className={`font-semibold text-sm md:text-base transition-colors truncate ${
                                isActive ? 'text-blue-700' : 'text-gray-700 group-hover:text-gray-900'
                              }`}>
                                {section.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5 truncate">
                                {section.description}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-2">
                            {/* ✅ ARREGLADO: Caja más ancha y alta para números de 2 dígitos */}
                            <div className={`min-w-[32px] md:min-w-[36px] h-7 md:h-8 px-2 md:px-3 py-1 md:py-1.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 flex items-center justify-center ${
                              isActive 
                                ? 'bg-blue-100 text-blue-700 shadow-sm' 
                                : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                            }`}>
                              {itemCount}
                            </div>
                            <ChevronRightIcon className={`h-3 w-3 md:h-4 md:w-4 transition-all duration-300 ${
                              isActive 
                                ? 'text-blue-600 translate-x-1 scale-110' 
                                : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                            }`} />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
                
                {/* Footer del menú profesional */}
                <div className="p-3 md:p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircleIcon className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                      <span>Servicios activos</span>
                    </div>
                    <div className="text-gray-500">
                      {Object.values(itemsBySection).reduce((total, items) => total + items.length, 0)} trámites
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Contenido principal ultra refinado - RESPONSIVE - WIDTH 95% */}
          <main className="flex-1 min-w-0" style={{ width: '95%' }}>
            {SECTIONS.map((section) => {
              const items = itemsBySection[section.name] || [];
              
              return (
                <section
                  key={section.id}
                  ref={el => (sectionRefs.current[section.name] = el)}
                  className="mb-8 md:mb-12"
                >
                  {/* Header de sección profesional - RESPONSIVE */}
                  <div className="mb-4 md:mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-3 md:mb-4 gap-3">
                      <div className="flex items-center gap-3 md:gap-4">
                        <div 
                          className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl flex items-center justify-center text-lg md:text-2xl shadow-lg border-2 relative overflow-hidden flex-shrink-0"
                          style={{
                            backgroundColor: `${section.color}15`,
                            borderColor: `${section.color}30`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <span className="relative">{section.icon}</span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 flex flex-wrap items-center gap-2 md:gap-3">
                            <span className="truncate">{section.name}</span>
                          </h2>
                          <p className="text-gray-600 text-xs md:text-sm mt-1 truncate">{section.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right flex-shrink-0">
                        <div className="text-xl md:text-2xl font-bold text-gray-800">{items.length}</div>
                        <div className="text-xs text-gray-500">disponibles</div>
                      </div>
                    </div>
                    
                    {/* Línea decorativa profesional - RESPONSIVE */}
                    <div className="flex items-center gap-2 md:gap-3">
                      <div 
                        className="h-1 md:h-1.5 w-16 md:w-24 rounded-full shadow-sm"
                        style={{ backgroundColor: section.color }}
                      ></div>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"></div>
                      <div className="text-xs text-gray-400 font-medium">
                        {SECTIONS.findIndex(s => s.id === section.id) + 1}/{SECTIONS.length}
                      </div>
                    </div>
                  </div>

                  {/* Contenido de la sección ultra profesional - RESPONSIVE */}
                  <div className="bg-white rounded-xl md:rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-xl">
                    {items.length > 0 ? (
                      <div className="divide-y divide-gray-100">
                        {items.map((item, index) => (
                          <div key={item.id} className="group relative">
                            <button
                              onClick={() => toggleItem(section.name, item.id)}
                              className={`w-full text-left p-4 md:p-6 transition-all duration-300 relative overflow-hidden ${
                                openItems[section.name]?.[item.id] 
                                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              {/* Efecto de hover profesional */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                              
                              <div className="relative flex items-center justify-between gap-3">
                                <div className="flex items-center gap-3 md:gap-4 min-w-0 flex-1">
                                  <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg md:rounded-xl flex items-center justify-center text-xs md:text-sm font-bold transition-all duration-300 shadow-sm border-2 flex-shrink-0 ${
                                    openItems[section.name]?.[item.id] 
                                      ? 'bg-blue-600 text-white scale-110 shadow-lg border-blue-600' 
                                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:scale-105 border-gray-200'
                                  }`}>
                                    {index + 1}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <h3 className="text-base md:text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors truncate">
                                      {item.title.rendered}
                                    </h3>
                                    <div className="flex flex-wrap items-center gap-2 md:gap-3 mt-1">
                                      <div className="flex items-center gap-1">
                                        <CheckCircleIcon className="h-3 w-3 md:h-4 md:w-4 text-green-500" />
                                        <span className="text-xs md:text-sm text-gray-500">Disponible</span>
                                      </div>
                                      <span className="text-xs text-gray-400 hidden sm:inline">•</span>
                                      <span className="text-xs text-gray-400 hidden sm:inline">Actualizado</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-1 md:gap-2 flex-shrink-0">
                                  <button
                                    onClick={(e) => toggleBookmark(item.id, e)}
                                    className={`p-1.5 md:p-2 rounded-lg transition-all duration-300 ${
                                      bookmarkedItems.has(item.id)
                                        ? 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100'
                                        : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                                    }`}
                                  >
                                    <BookmarkIcon className="h-3 w-3 md:h-4 md:w-4" />
                                  </button>
                                  <ChevronRightIcon className={`h-4 w-4 md:h-5 md:w-5 transition-all duration-300 ${
                                    openItems[section.name]?.[item.id] 
                                      ? 'rotate-90 text-blue-600 scale-110' 
                                      : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                                  }`} />
                                </div>
                              </div>
                            </button>
                            
                            {/* Contenido expandible con fondo blanco profesional - RESPONSIVE */}
                            <div className={`overflow-hidden transition-all duration-500 ${
                              openItems[section.name]?.[item.id] 
                                ? 'max-h-[2000px] opacity-100' 
                                : 'max-h-0 opacity-0'
                            }`}>
                              <div className="bg-white border-t border-gray-100 p-4 md:p-8 relative">
                                {/* Decoración sutil */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                                
                                <div className="prose prose-sm md:prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-800 prose-ul:text-gray-700 prose-ol:text-gray-700">
                                  <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                </div>
                                
                                {/* Footer del contenido - RESPONSIVE */}
                                <div className="mt-4 md:mt-6 pt-3 md:pt-4 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs md:text-sm text-gray-500">
                                  <span>Información de ATM Misiones</span>
                                  <span>Última actualización: Hoy</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-8 md:p-12 text-center">
                        <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-inner">
                          <DocumentTextIcon className="h-8 w-8 md:h-10 md:w-10 text-gray-400" />
                        </div>
                        <h3 className="text-lg md:text-xl font-semibold text-gray-600 mb-2 md:mb-3">
                          Esta sección no tiene trámites disponibles
                        </h3>
                        <p className="text-sm md:text-base text-gray-500 mb-4 md:mb-6">
                          Contacta al administrador para más información.
                        </p>
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </main>
        </div>
      </div>

      {/* Botón flotante de ayuda profesional - RESPONSIVE */}
      <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40">
        <button className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
          <div className="relative w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white">
            <span className="text-white text-lg md:text-xl font-bold">?</span>
          </div>
        </button>
      </div>
    </div>
  );
}