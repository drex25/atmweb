import React, { useEffect, useState, useRef } from "react";
import { 
  ChevronRightIcon, 
  DocumentTextIcon,
  SparklesIcon,
  CheckCircleIcon,
  ClockIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

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
    description: "Obtén certificaciones oficiales"
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 font-medium">Cargando trámites...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Hero Section Compacto y Elegante */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r opacity-95"
          style={{
            background: 'linear-gradient(135deg, #023F5E 0%, #612247 100%)'
          }}
        />
        
        {/* Efectos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative px-6 py-12 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Badge elegante más pequeño */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-6">
              <SparklesIcon className="h-4 w-4" />
              <span className="font-semibold text-sm">Autogestión Digital</span>
            </div>
            
            {/* Título principal más compacto */}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Ingresos Brutos
              <span className="block text-2xl md:text-3xl font-light text-white/90 mt-1">
                Centro de Autogestión
              </span>
            </h1>
            
            {/* Descripción más concisa */}
            <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto leading-relaxed">
              Gestiona todos tus trámites de manera rápida, segura y eficiente
            </p>
            
            {/* Indicadores de estado más compactos */}
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/20 border border-green-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Sistema Activo</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30">
                <ClockIcon className="h-3 w-3" />
                <span className="text-xs font-medium">24/7</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/20 border border-purple-400/30">
                <ShieldCheckIcon className="h-3 w-3" />
                <span className="text-xs font-medium">Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Menú lateral elegante y refinado */}
          <aside className="w-80 flex-shrink-0">
            <div className="sticky top-6">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                    Secciones Disponibles
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">Selecciona una categoría</p>
                </div>
                
                <nav className="p-3">
                  {SECTIONS.map((section) => {
                    const isActive = activeSection === section.name;
                    const itemCount = itemsBySection[section.name]?.length || 0;
                    
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
                        {/* Efecto de brillo sutil */}
                        <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 transition-all duration-700 ${
                          isActive ? 'translate-x-full' : '-translate-x-full group-hover:translate-x-full'
                        }`}></div>
                        
                        <div className="relative flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className={`w-11 h-11 rounded-xl flex items-center justify-center text-lg transition-all duration-300 shadow-sm ${
                                isActive ? 'scale-110 shadow-lg' : 'group-hover:scale-105'
                              }`}
                              style={{
                                backgroundColor: `${section.color}15`,
                                border: `2px solid ${section.color}30`
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
                              {itemCount}
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
                
                {/* Footer del menú */}
                <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    <span>Todos los servicios están disponibles</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Contenido principal refinado */}
          <main className="flex-1">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                ref={el => (sectionRefs.current[section.name] = el)}
                className="mb-12"
              >
                {/* Header de sección más elegante */}
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg border-2"
                      style={{
                        backgroundColor: `${section.color}15`,
                        borderColor: `${section.color}30`
                      }}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-800">
                        {section.name}
                      </h2>
                      <p className="text-gray-600 text-sm">{section.description}</p>
                    </div>
                  </div>
                  
                  {/* Línea decorativa más sutil */}
                  <div className="flex items-center gap-3">
                    <div 
                      className="h-1 w-20 rounded-full"
                      style={{ backgroundColor: section.color }}
                    ></div>
                    <div className="h-px flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
                  </div>
                </div>

                {/* Contenido de la sección mejorado */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {itemsBySection[section.name] && itemsBySection[section.name].length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {itemsBySection[section.name].map((item, index) => (
                        <div key={item.id} className="group relative">
                          <button
                            onClick={() => toggleItem(section.name, item.id)}
                            className={`w-full text-left p-6 transition-all duration-300 relative overflow-hidden ${
                              openItems[section.name]?.[item.id] 
                                ? 'bg-gradient-to-r from-blue-50 to-indigo-50' 
                                : 'hover:bg-gray-50'
                            }`}
                          >
                            {/* Efecto de hover sutil */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50/50 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            
                            <div className="relative flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`w-9 h-9 rounded-xl flex items-center justify-center text-sm font-bold transition-all duration-300 shadow-sm ${
                                  openItems[section.name]?.[item.id] 
                                    ? 'bg-blue-600 text-white scale-110 shadow-lg' 
                                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600 group-hover:scale-105'
                                }`}>
                                  {index + 1}
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold text-gray-800 group-hover:text-blue-700 transition-colors">
                                    {item.title.rendered}
                                  </h3>
                                  <div className="flex items-center gap-2 mt-1">
                                    <CheckCircleIcon className="h-4 w-4 text-green-500" />
                                    <span className="text-sm text-gray-500">Disponible</span>
                                    <span className="text-xs text-gray-400">•</span>
                                    <span className="text-xs text-gray-400">Actualizado</span>
                                  </div>
                                </div>
                              </div>
                              
                              <ChevronRightIcon className={`h-5 w-5 transition-all duration-300 ${
                                openItems[section.name]?.[item.id] 
                                  ? 'rotate-90 text-blue-600 scale-110' 
                                  : 'text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1'
                              }`} />
                            </div>
                          </button>
                          
                          {/* Contenido expandible con fondo blanco limpio */}
                          <div className={`overflow-hidden transition-all duration-500 ${
                            openItems[section.name]?.[item.id] 
                              ? 'max-h-[2000px] opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}>
                            <div className="bg-white border-t border-gray-100 p-6">
                              <div className="prose prose-lg max-w-none prose-headings:text-gray-800 prose-p:text-gray-700 prose-a:text-blue-600 prose-strong:text-gray-800">
                                <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-12 text-center">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                        <DocumentTextIcon className="h-8 w-8 text-gray-400" />
                      </div>
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Esta sección no tiene trámites disponibles
                      </h3>
                      <p className="text-gray-500">
                        Contacta al administrador para más información.
                      </p>
                    </div>
                  )}
                </div>
              </section>
            ))}
          </main>
        </div>
      </div>
    </div>
  );
}