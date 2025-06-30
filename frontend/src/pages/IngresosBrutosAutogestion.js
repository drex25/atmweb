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
    id: 7,
    icon: "📄",
    color: "#005C91",
    description: "Presenta tus declaraciones"
  },
  { 
    name: "Certificado", 
    id: 6,
    icon: "🏆",
    color: "#009DDD",
    description: "Obtén certificaciones oficiales"
  },
  { 
    name: "Información General", 
    id: 9,
    icon: "💡",
    color: "#612247",
    description: "Consulta información importante"
  },
  { 
    name: "Exenciones", 
    id: 8,
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
      {/* Hero Section Elegante */}
      <div className="relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-gradient-to-r opacity-95"
          style={{
            background: 'linear-gradient(135deg, #023F5E 0%, #612247 100%)'
          }}
        />
        
        {/* Efectos decorativos sutiles */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative px-6 py-20 text-center text-white">
          <div className="max-w-4xl mx-auto">
            {/* Badge elegante */}
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 mb-8">
              <SparklesIcon className="h-5 w-5" />
              <span className="font-semibold">Autogestión Digital</span>
            </div>
            
            {/* Título principal */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Ingresos Brutos
              <span className="block text-3xl md:text-4xl font-light text-white/90 mt-2">
                Centro de Autogestión
              </span>
            </h1>
            
            {/* Descripción */}
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Gestiona todos tus trámites de manera rápida, segura y eficiente desde un solo lugar
            </p>
            
            {/* Indicadores de estado */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Sistema Activo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/30">
                <ClockIcon className="h-4 w-4" />
                <span>Disponible 24/7</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-400/30">
                <ShieldCheckIcon className="h-4 w-4" />
                <span>100% Seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenido Principal */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-8">
          {/* Menú lateral elegante */}
          <aside className="w-80 flex-shrink-0">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-b border-gray-100">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    <DocumentTextIcon className="h-5 w-5 text-blue-600" />
                    Secciones Disponibles
                  </h3>
                </div>
                
                <nav className="p-2">
                  {SECTIONS.map((section) => {
                    const isActive = activeSection === section.name;
                    const itemCount = itemsBySection[section.name]?.length || 0;
                    
                    return (
                      <button
                        key={section.id}
                        onClick={() => handleMenuClick(section.name)}
                        className={`w-full text-left p-4 rounded-xl mb-2 transition-all duration-300 group ${
                          isActive 
                            ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 shadow-md' 
                            : 'hover:bg-gray-50 border-2 border-transparent'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div 
                              className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg transition-all duration-300 ${
                                isActive ? 'scale-110' : 'group-hover:scale-105'
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
                              <div className="text-xs text-gray-500 mt-1">
                                {section.description}
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex flex-col items-end gap-1">
                            <div className={`px-2 py-1 rounded-full text-xs font-bold ${
                              isActive 
                                ? 'bg-blue-100 text-blue-700' 
                                : 'bg-gray-100 text-gray-600'
                            }`}>
                              {itemCount}
                            </div>
                            <ChevronRightIcon className={`h-4 w-4 transition-all duration-300 ${
                              isActive 
                                ? 'text-blue-600 translate-x-1' 
                                : 'text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1'
                            }`} />
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Contenido principal */}
          <main className="flex-1">
            {SECTIONS.map((section) => (
              <section
                key={section.id}
                ref={el => (sectionRefs.current[section.name] = el)}
                className="mb-16"
              >
                {/* Header de sección elegante */}
                <div className="mb-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl shadow-lg"
                      style={{
                        backgroundColor: `${section.color}15`,
                        border: `2px solid ${section.color}30`
                      }}
                    >
                      {section.icon}
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-800">
                        {section.name}
                      </h2>
                      <p className="text-gray-600 mt-1">{section.description}</p>
                    </div>
                  </div>
                  
                  {/* Línea decorativa */}
                  <div 
                    className="h-1 w-24 rounded-full"
                    style={{ backgroundColor: section.color }}
                  ></div>
                </div>

                {/* Contenido de la sección */}
                <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  {itemsBySection[section.name] && itemsBySection[section.name].length > 0 ? (
                    <div className="divide-y divide-gray-100">
                      {itemsBySection[section.name].map((item, index) => (
                        <div key={item.id} className="group">
                          <button
                            onClick={() => toggleItem(section.name, item.id)}
                            className={`w-full text-left p-6 transition-all duration-300 hover:bg-gray-50 ${
                              openItems[section.name]?.[item.id] ? 'bg-blue-50' : ''
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                                  openItems[section.name]?.[item.id] 
                                    ? 'bg-blue-600 text-white scale-110' 
                                    : 'bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600'
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
                                  </div>
                                </div>
                              </div>
                              
                              <ChevronRightIcon className={`h-5 w-5 text-gray-400 transition-all duration-300 ${
                                openItems[section.name]?.[item.id] 
                                  ? 'rotate-90 text-blue-600' 
                                  : 'group-hover:text-blue-600 group-hover:translate-x-1'
                              }`} />
                            </div>
                          </button>
                          
                          {/* Contenido expandible con fondo blanco */}
                          <div className={`overflow-hidden transition-all duration-500 ${
                            openItems[section.name]?.[item.id] 
                              ? 'max-h-[2000px] opacity-100' 
                              : 'max-h-0 opacity-0'
                          }`}>
                            <div className="bg-white border-t border-gray-100 p-6">
                              <div className="prose prose-lg max-w-none">
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