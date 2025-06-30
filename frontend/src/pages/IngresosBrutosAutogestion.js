import React, { useEffect, useState, useRef } from "react";
import { 
  ChevronRightIcon, 
  DocumentTextIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  ArrowPathIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';

// Secciones con los IDs reales de la taxonomía "Trámite" en WordPress
const SECTIONS = [
  { 
    name: "Trámites y Gestiones", 
    id: 5,
    icon: "📋",
    color: "#023F5E",
    description: "Gestiona tus trámites principales",
    priority: "high"
  },
  { 
    name: "Declaración Jurada", 
    id: 6,
    icon: "📄",
    color: "#005C91",
    description: "Presenta tus declaraciones",
    priority: "high"
  },
  { 
    name: "Certificado", 
    id: 7,
    icon: "🏆",
    color: "#009DDD",
    description: "Obtén certificaciones oficiales",
    priority: "medium"
  },
  { 
    name: "Información General", 
    id: 8,
    icon: "💡",
    color: "#612247",
    description: "Consulta información importante",
    priority: "medium"
  },
  { 
    name: "Exenciones", 
    id: 9,
    icon: "⭐",
    color: "#7C3AED",
    description: "Conoce tus beneficios fiscales",
    priority: "low"
  },
];

export default function IngresosBrutosAutogestion() {
  const [itemsBySection, setItemsBySection] = useState({});
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});
  const [activeSection, setActiveSection] = useState(SECTIONS[0].name);
  const [searchTerm, setSearchTerm] = useState("");
  const [bookmarkedItems, setBookmarkedItems] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    async function fetchItems() {
      const result = {};
      for (const section of SECTIONS) {
        const res = await fetch(
          `http://localhost:8000/wp-json/wp/v2/item_autogestion?tramite=${section.id}&per_page=100`
        );
        const data = await res.json();
        result[section.name] = data;
      }
      setItemsBySection(result);
      setLoading(false);
    }
    fetchItems();
  }, []);

  // Scroll a la sección al hacer click en el menú
  const handleMenuClick = (sectionName) => {
    setActiveSection(sectionName);
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

  // Filtrar items por búsqueda
  const getFilteredItems = (items) => {
    if (!searchTerm) return items;
    return items.filter(item => 
      item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.content.rendered.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-blue-200 rounded-full animate-spin"></div>
            <div className="w-20 h-20 border-4 border-blue-600 border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="text-xl text-gray-600 font-medium mt-6">Cargando experiencia premium...</p>
          <p className="text-sm text-gray-500 mt-2">Preparando tu centro de autogestión</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section Ultra Compacto y Premium */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r opacity-95"
          style={{
            background: 'linear-gradient(135deg, #023F5E 0%, #612247 100%)'
          }}
        />
        
        {/* Efectos decorativos premium */}
        <div className="absolute inset-0">
          <div className="absolute top-8 left-8 w-20 h-20 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/5 rounded-full blur-3xl"></div>
          
          {/* Partículas flotantes */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/30 rounded-full animate-pulse"
              style={{
                left: `${20 + i * 15}%`,
                top: `${30 + (i % 2) * 40}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
        
        <div className="relative px-6 py-10 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Badge premium más sofisticado */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6 shadow-xl">
              <SparklesIcon className="h-4 w-4 animate-pulse" />
              <span className="font-semibold text-sm tracking-wide">Autogestión Digital Premium</span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
            
            {/* Título principal más impactante */}
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                Ingresos Brutos
              </span>
              <span className="block text-xl md:text-2xl font-light text-white/90 mt-2 tracking-normal">
                Centro de Autogestión Inteligente
              </span>
            </h1>
            
            {/* Descripción más persuasiva */}
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Experiencia digital premium para gestionar todos tus trámites de manera 
              <span className="font-semibold text-blue-200"> rápida, segura y eficiente</span>
            </p>
            
            {/* Indicadores de estado premium */}
            <div className="flex flex-wrap justify-center gap-3 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 backdrop-blur-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold">Sistema Activo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30 backdrop-blur-sm">
                <ClockIcon className="h-3 w-3" />
                <span className="text-xs font-semibold">Disponible 24/7</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30 backdrop-blur-sm">
                <ShieldCheckIcon className="h-3 w-3" />
                <span className="text-xs font-semibold">Máxima Seguridad</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-400/30 backdrop-blur-sm">
                <ArrowPathIcon className="h-3 w-3 animate-spin" />
                <span className="text-xs font-semibold">Tiempo Real</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda premium */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Buscar trámites, certificados, información..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 text-gray-700 placeholder-gray-500"
              />
            </div>
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl">
              <FunnelIcon className="h-4 w-4" />
              Filtrar
            </button>
          </div>
          
          {searchTerm && (
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
              <span>Buscando:</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-medium">"{searchTerm}"</span>
              <button 
                onClick={() => setSearchTerm("")}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                ✕
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Menú lateral ultra premium */}
          <aside className="w-80 flex-shrink-0">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-xl">
                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                    Secciones Disponibles
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Selecciona una categoría para comenzar</p>
                </div>
                
                <nav className="p-3">
                  {SECTIONS.map((section) => {
                    const isActive = activeSection === section.name;
                    const itemCount = itemsBySection[section.name]?.length || 0;
                    const filteredCount = getFilteredItems(itemsBySection[section.name] || []).length;
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleMenuClick(section.name)}
                        className={`w-full text-left p-4 rounded-xl mb-2 transition-all duration-300 group relative overflow-hidden ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-lg transform scale-[1.02]' 
                            : 'hover:bg-gray-50 border-2 border-transparent hover:shadow-md hover:scale-[1.01]'
                        }`}
                      >
                        {/* Indicador de prioridad */}
                        <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${
                          section.priority === 'high' ? 'bg-red-400' :
                          section.priority === 'medium' ? 'bg-yellow-400' : 'bg-green-400'
                        }`}></div>
                        
                        {/* Efecto de brillo premium */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-700 ${
                          isActive ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
                        }`}></div>
                        
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className={`w-12 h-12 rounded-xl flex items-center justify-center text-lg transition-all duration-300 shadow-sm border-2 ${
                                isActive ? 'scale-110 shadow-lg border-white' : 'group-hover:scale-105 border-transparent'
                              }`}
                              style={{
                                backgroundColor: `${section.color}15`,
                                borderColor: isActive ? section.color : 'transparent'
                              }}
                            >
                              {section.icon}
                            </div>
                            <div>
                              <div className={`font-semibold transition-colors ${
                                isActive ? 'text-blue-700' : 'text-gray-700 group-hover:text-gray-900'
                              }`}>
                                {section.name}
                              </div>
                              <div className="text-xs text-gray-500 mt-0.5">
                                {section.description}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-1">
                            <div className={`px-2.5 py-1 rounded-full text-xs font-bold transition-all duration-300 ${
                              isActive 
                                ? 'bg-blue-100 text-blue-700 shadow-sm' 
                                : 'bg-gray-100 text-gray-600 group-hover:bg-blue-50 group-hover:text-blue-600'
                            }`}>
                              {searchTerm ? `${filteredCount}/${itemCount}` : itemCount}
                            </div>
                            <ChevronRightIcon className={`h-4 w-4 transition-all duration-300 ${
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
                
                {/* Footer del menú premium */}
                <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2 text-gray-600">
                      <CheckCircleIcon className="h-4 w-4 text-green-500" />
                      <span>Todos los servicios activos</span>
                    </div>
                    <div className="text-gray-500">
                      {Object.values(itemsBySection).reduce((total, items) => total + items.length, 0)} trámites
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Contenido principal ultra refinado */}
          <main className="flex-1">
            {SECTIONS.map((section) => {
              const filteredItems = getFilteredItems(itemsBySection[section.name] || []);
              
              return (
                <section
                  key={section.id}
                  ref={el => (sectionRefs.current[section.name] = el)}
                  className="mb-12"
                >
                  {/* Header de sección premium */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div 
                          className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg border-2 relative overflow-hidden"
                          style={{
                            backgroundColor: `${section.color}15`,
                            borderColor: `${section.color}30`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
                          <span className="relative">{section.icon}</span>
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
                            {section.name}
                            {section.priority === 'high' && (
                              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded-full">
                                PRIORITARIO
                              </span>
                            )}
                          </h2>
                          <p className="text-gray-600 text-sm mt-1">{section.description}</p>
                        </div>
                      </div>
                      
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-800">{filteredItems.length}</div>
                        <div className="text-xs text-gray-500">
                          {searchTerm ? 'resultados' : 'disponibles'}
                        </div>
                      </div>
                    </div>
                    
                    {/* Línea decorativa premium */}
                    <div className="flex items-center gap-3">
                      <div 
                        className="h-1.5 w-24 rounded-full shadow-sm"
                        style={{ backgroundColor: section.color }}
                      ></div>
                      <div className="h-px flex-1 bg-gradient-to-r from-gray-300 via-gray-200 to-transparent"></div>
                      <div className="text-xs text-gray-400 font-medium">
                        Sección {SECTIONS.findIndex(s => s.id === section.id) + 1} de {SECTIONS.length}
                      </div>
                    </div>
                  </div>

                  {/* Contenido de la sección ultra premium */}
                  <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden backdrop-blur-xl">
                    {filteredItems.length > 0 ? (
                      <div className="divide-y divide-gray-100">
                        {filteredItems.map((item, index) => (
                          <div key={item.id} className="group relative">
                            <button
                              onClick={() => toggleItem(section.name, item.id)}
                              className={`w-full text-left p-6 transition-all duration-300 relative overflow-hidden ${
                                openItems[section.name]?.[item.id] 
                                  ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                                  : 'hover:bg-gray-50'
                              }`}
                            >
                              {/* Efecto de hover premium */}
                              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                              
                              <div className="relative flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm border-2 ${
                                    openItems[section.name]?.[item.id] 
                                      ? 'bg-blue-600 text-white scale-110 shadow-lg border-blue-600' 
                                      : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:scale-105 border-gray-200'
                                  }`}>
                                    {index + 1}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                                      {item.title.rendered}
                                    </h3>
                                    <div className="flex items-center gap-3 mt-1">
                                      <div className="flex items-center gap-1">
                                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                        <span className="text-sm text-gray-500">Disponible</span>
                                      </div>
                                      <span className="text-xs text-gray-400">•</span>
                                      <span className="text-xs text-gray-400">Actualizado</span>
                                      <span className="text-xs text-gray-400">•</span>
                                      <span className="text-xs text-blue-600 font-medium">Oficial</span>
                                    </div>
                                  </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                  <button
                                    onClick={(e) => toggleBookmark(item.id, e)}
                                    className={`p-2 rounded-lg transition-all duration-300 ${
                                      bookmarkedItems.has(item.id)
                                        ? 'text-yellow-600 bg-yellow-50 hover:bg-yellow-100'
                                        : 'text-gray-400 hover:text-yellow-600 hover:bg-yellow-50'
                                    }`}
                                  >
                                    <BookmarkIcon className="h-4 w-4" />
                                  </button>
                                  <ChevronRightIcon className={`h-5 w-5 transition-all duration-300 ${
                                    openItems[section.name]?.[item.id] 
                                      ? 'rotate-90 text-blue-600 scale-110' 
                                      : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                                  }`} />
                                </div>
                              </div>
                            </button>
                            
                            {/* Contenido expandible con fondo blanco premium */}
                            <div className={`overflow-hidden transition-all duration-500 ${
                              openItems[section.name]?.[item.id] 
                                ? 'max-h-[2000px] opacity-100' 
                                : 'max-h-0 opacity-0'
                            }`}>
                              <div className="bg-white border-t border-gray-100 p-8 relative">
                                {/* Decoración sutil */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                                
                                <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-800 prose-ul:text-gray-700 prose-ol:text-gray-700">
                                  <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                                </div>
                                
                                {/* Footer del contenido */}
                                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-sm text-gray-500">
                                  <span>Información oficial de ATM Misiones</span>
                                  <span>Última actualización: Hoy</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="p-12 text-center">
                        <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center shadow-inner">
                          <DocumentTextIcon className="h-10 w-10 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-600 mb-3">
                          {searchTerm ? 'No se encontraron resultados' : 'Esta sección no tiene trámites disponibles'}
                        </h3>
                        <p className="text-gray-500 mb-6">
                          {searchTerm 
                            ? `No hay trámites que coincidan con "${searchTerm}" en esta sección.`
                            : 'Contacta al administrador para más información.'
                          }
                        </p>
                        {searchTerm && (
                          <button
                            onClick={() => setSearchTerm("")}
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                          >
                            Limpiar búsqueda
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                </section>
              );
            })}
          </main>
        </div>
      </div>

      {/* Botón flotante de ayuda premium */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
          <div className="relative w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white">
            <span className="text-white text-xl font-bold">?</span>
          </div>
        </button>
      </div>
    </div>
  );
}