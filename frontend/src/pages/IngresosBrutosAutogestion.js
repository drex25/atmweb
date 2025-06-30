import React, { useEffect, useState, useRef } from "react";
import HeroSellos from "../components/HeroSellos";
import { 
  ChevronRightIcon, 
  ChevronDownIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  ShieldCheckIcon,
  InformationCircleIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  SparklesIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  FunnelIcon
} from '@heroicons/react/24/outline';

// Secciones con los IDs reales de la taxonomía "Trámite" en WordPress
const SECTIONS = [
  { 
    name: "Trámites y Gestiones", 
    id: 5,
    icon: DocumentTextIcon,
    color: '#3B82F6',
    gradient: 'from-blue-500 to-indigo-600',
    description: 'Gestiona todos tus trámites de manera eficiente'
  },
  { 
    name: "Declaración Jurada", 
    id: 7,
    icon: ClipboardDocumentListIcon,
    color: '#10B981',
    gradient: 'from-emerald-500 to-green-600',
    description: 'Presenta tus declaraciones juradas online'
  },
  { 
    name: "Certificado", 
    id: 6,
    icon: ShieldCheckIcon,
    color: '#8B5CF6',
    gradient: 'from-purple-500 to-violet-600',
    description: 'Obtén certificados y constancias oficiales'
  },
  { 
    name: "Información General", 
    id: 9,
    icon: InformationCircleIcon,
    color: '#F59E0B',
    gradient: 'from-amber-500 to-orange-600',
    description: 'Consulta información importante y actualizada'
  },
  { 
    name: "Exenciones", 
    id: 8,
    icon: ExclamationTriangleIcon,
    color: '#EF4444',
    gradient: 'from-red-500 to-pink-600',
    description: 'Conoce las exenciones disponibles'
  },
];

export default function IngresosBrutosAutogestion() {
  const [itemsBySection, setItemsBySection] = useState({});
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});
  const [activeSection, setActiveSection] = useState(SECTIONS[0].name);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState(SECTIONS);
  const sectionRefs = useRef({});

  useEffect(() => {
    async function fetchItems() {
      const result = {};
      for (const section of SECTIONS) {
        try {
          const res = await fetch(
            `http://localhost:8000/wp-json/wp/v2/item_autogestion?tramite=${section.id}&per_page=100`
          );
          const data = await res.json();
          result[section.name] = data;
        } catch (error) {
          console.error(`Error fetching ${section.name}:`, error);
          result[section.name] = [];
        }
      }
      setItemsBySection(result);
      setLoading(false);
    }
    fetchItems();
  }, []);

  // Filtrar secciones basado en búsqueda
  useEffect(() => {
    if (!searchTerm) {
      setFilteredSections(SECTIONS);
      return;
    }

    const filtered = SECTIONS.filter(section => {
      const sectionMatch = section.name.toLowerCase().includes(searchTerm.toLowerCase());
      const itemsMatch = itemsBySection[section.name]?.some(item => 
        item.title.rendered.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return sectionMatch || itemsMatch;
    });
    
    setFilteredSections(filtered);
  }, [searchTerm, itemsBySection]);

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

  // Obtener sección por nombre
  const getSectionData = (sectionName) => {
    return SECTIONS.find(s => s.name === sectionName);
  };

  // Contar items por sección
  const getItemCount = (sectionName) => {
    return itemsBySection[sectionName]?.length || 0;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section Mejorado */}
      <div className="relative">
        <HeroSellos
          title="Ingresos Brutos - Autogestión"
          description="Gestioná todos tus trámites de Ingresos Brutos de manera rápida, segura y eficiente desde un solo lugar."
          backgroundImage="/tramites.png"
          breadcrumbs={[
            { label: "ATM", active: false },
            { label: "Autogestión", active: false },
            { label: "Ingresos Brutos", active: true },
          ]}
        />
        
        {/* Overlay decorativo */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 pointer-events-none"></div>
      </div>

      {/* Barra de búsqueda moderna */}
      <div className="relative -mt-16 z-20 max-w-7xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar trámites, certificados, información..."
                className="w-full pl-12 pr-6 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:border-blue-400 bg-gray-50 hover:bg-white transition-all duration-300"
              />
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <FunnelIcon className="h-5 w-5" />
              <span className="font-medium">
                {filteredSections.length} de {SECTIONS.length} secciones
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto flex gap-8 py-8 px-4">
        {/* Menú lateral moderno y sticky */}
        <aside className="w-80 flex-shrink-0 sticky top-24 self-start z-10">
          <nav className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
            {/* Header del menú */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <h3 className="text-xl font-bold flex items-center gap-3">
                <SparklesIcon className="h-6 w-6" />
                Secciones Disponibles
              </h3>
              <p className="text-blue-100 text-sm mt-2">
                Selecciona una sección para ver los trámites
              </p>
            </div>

            {/* Lista de secciones */}
            <div className="p-2">
              {filteredSections.map((section) => {
                const isActive = activeSection === section.name;
                const itemCount = getItemCount(section.name);
                
                return (
                  <button
                    key={section.id}
                    onClick={() => handleMenuClick(section.name)}
                    className={`w-full text-left p-4 m-1 rounded-2xl font-semibold transition-all duration-300 group relative overflow-hidden ${
                      isActive 
                        ? `bg-gradient-to-r ${section.gradient} text-white shadow-xl scale-105` 
                        : 'text-gray-700 hover:bg-gray-50 hover:scale-102'
                    }`}
                  >
                    {/* Efecto de brillo */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className="relative flex items-center gap-4">
                      {/* Icono */}
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive 
                          ? 'bg-white/20 backdrop-blur-sm' 
                          : 'bg-gray-100 group-hover:bg-gray-200'
                      }`}>
                        <section.icon className={`h-6 w-6 ${
                          isActive ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      
                      {/* Contenido */}
                      <div className="flex-1">
                        <div className="font-bold text-base leading-tight">
                          {section.name}
                        </div>
                        <div className={`text-sm mt-1 ${
                          isActive ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          {itemCount} trámites disponibles
                        </div>
                      </div>
                      
                      {/* Indicador */}
                      <ChevronRightIcon className={`h-5 w-5 transition-transform duration-300 ${
                        isActive ? 'text-white rotate-90' : 'text-gray-400 group-hover:translate-x-1'
                      }`} />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Footer del menú */}
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <CheckCircleIcon className="h-5 w-5 text-green-500" />
                <span>Sistema actualizado</span>
              </div>
            </div>
          </nav>
        </aside>

        {/* Contenido principal moderno */}
        <main className="flex-1">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-20">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
              </div>
              <p className="text-xl font-semibold text-gray-700 mt-6">Cargando trámites...</p>
              <p className="text-gray-500 mt-2">Conectando con WordPress</p>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredSections.map((section) => {
                const sectionData = getSectionData(section.name);
                const items = itemsBySection[section.name] || [];
                
                return (
                  <section
                    key={section.id}
                    ref={el => (sectionRefs.current[section.name] = el)}
                    className="scroll-mt-24"
                  >
                    {/* Header de sección mejorado */}
                    <div className="relative mb-8">
                      <div className={`bg-gradient-to-r ${sectionData.gradient} rounded-3xl p-8 text-white shadow-2xl overflow-hidden`}>
                        {/* Efectos decorativos */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                        
                        <div className="relative flex items-center gap-6">
                          {/* Icono principal */}
                          <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                            <sectionData.icon className="h-8 w-8 text-white" />
                          </div>
                          
                          {/* Información */}
                          <div className="flex-1">
                            <h2 className="text-3xl font-black mb-2 tracking-tight">
                              {section.name}
                            </h2>
                            <p className="text-white/90 text-lg font-medium">
                              {sectionData.description}
                            </p>
                            <div className="flex items-center gap-4 mt-3">
                              <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-bold">
                                <CheckCircleIcon className="h-4 w-4" />
                                {items.length} trámites disponibles
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenido de la sección */}
                    <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 overflow-hidden">
                      {items.length > 0 ? (
                        <div className="divide-y divide-gray-100">
                          {items.map((item, index) => {
                            const isOpen = openItems[section.name]?.[item.id];
                            
                            return (
                              <div key={item.id} className="group">
                                {/* Header del item */}
                                <button
                                  onClick={() => toggleItem(section.name, item.id)}
                                  className="w-full p-6 text-left hover:bg-gray-50 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300/50"
                                >
                                  <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4 flex-1">
                                      {/* Número de orden */}
                                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${sectionData.gradient} text-white font-bold text-sm flex items-center justify-center shadow-lg`}>
                                        {index + 1}
                                      </div>
                                      
                                      {/* Título */}
                                      <div className="flex-1">
                                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                                          {item.title.rendered}
                                        </h3>
                                        <p className="text-sm text-gray-500 mt-1">
                                          Haz clic para ver los detalles del trámite
                                        </p>
                                      </div>
                                    </div>
                                    
                                    {/* Indicador de estado */}
                                    <div className="flex items-center gap-3">
                                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                        isOpen 
                                          ? 'bg-blue-100 text-blue-700' 
                                          : 'bg-gray-100 text-gray-600'
                                      }`}>
                                        {isOpen ? 'Abierto' : 'Cerrado'}
                                      </span>
                                      
                                      <ChevronDownIcon className={`h-6 w-6 text-gray-400 transition-all duration-300 ${
                                        isOpen ? 'rotate-180 text-blue-600' : 'group-hover:text-gray-600'
                                      }`} />
                                    </div>
                                  </div>
                                </button>

                                {/* Contenido expandible */}
                                <div className={`overflow-hidden transition-all duration-500 ${
                                  isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                  <div className="px-6 pb-6">
                                    <div className={`bg-gradient-to-r ${sectionData.gradient} bg-opacity-5 rounded-2xl p-6 border-l-4`} 
                                         style={{borderLeftColor: sectionData.color}}>
                                      {/* Contenido del WordPress */}
                                      <div 
                                        className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700"
                                        dangerouslySetInnerHTML={{ __html: item.content.rendered }} 
                                      />
                                      
                                      {/* Footer del contenido */}
                                      <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                          <InformationCircleIcon className="h-4 w-4" />
                                          <span>Información actualizada</span>
                                        </div>
                                        
                                        <button className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${sectionData.gradient} text-white rounded-xl font-semibold text-sm hover:scale-105 transition-all duration-300 shadow-lg`}>
                                          <ArrowRightIcon className="h-4 w-4" />
                                          Iniciar Trámite
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      ) : (
                        <div className="p-12 text-center">
                          <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                            <DocumentTextIcon className="h-12 w-12 text-gray-400" />
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">
                            No hay trámites disponibles
                          </h3>
                          <p className="text-gray-500 mb-6">
                            Esta sección no tiene trámites configurados en WordPress.
                          </p>
                          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300">
                            <InformationCircleIcon className="h-5 w-5" />
                            Contactar Soporte
                          </button>
                        </div>
                      )}
                    </div>
                  </section>
                );
              })}

              {/* Mensaje cuando no hay resultados de búsqueda */}
              {filteredSections.length === 0 && searchTerm && (
                <div className="text-center py-20">
                  <div className="w-32 h-32 mx-auto mb-8 bg-gray-100 rounded-full flex items-center justify-center">
                    <MagnifyingGlassIcon className="h-16 w-16 text-gray-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    No se encontraron resultados
                  </h3>
                  <p className="text-gray-500 mb-8 max-w-md mx-auto">
                    No encontramos trámites que coincidan con "{searchTerm}". 
                    Intenta con otros términos de búsqueda.
                  </p>
                  <button 
                    onClick={() => setSearchTerm('')}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                  >
                    <ArrowRightIcon className="h-5 w-5" />
                    Limpiar búsqueda
                  </button>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Botón flotante de ayuda */}
      <button className="fixed bottom-8 right-8 z-50 group">
        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
        <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white/20">
          <InformationCircleIcon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </div>
      </button>
    </div>
  );
}