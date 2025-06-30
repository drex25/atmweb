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
  FunnelIcon,
  StarIcon,
  BoltIcon,
  RocketLaunchIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

// Secciones con los IDs reales de la taxonomía "Trámite"
const SECTIONS = [
  { 
    name: "Trámites y Gestiones", 
    id: 5,
    icon: DocumentTextIcon,
    color: '#023F5E',
    gradient: 'from-[#023F5E] via-[#005C91] to-[#009DDD]',
    lightGradient: 'from-blue-50 to-cyan-50',
    description: 'Gestiona todos tus trámites de manera eficiente y rápida'
  },
  { 
    name: "Declaración Jurada", 
    id: 7,
    icon: ClipboardDocumentListIcon,
    color: '#612247',
    gradient: 'from-[#612247] via-[#023F5E] to-[#005C91]',
    lightGradient: 'from-purple-50 to-blue-50',
    description: 'Presenta tus declaraciones juradas de forma digital'
  },
  { 
    name: "Certificado", 
    id: 6,
    icon: ShieldCheckIcon,
    color: '#005C91',
    gradient: 'from-[#005C91] via-[#009DDD] to-[#023F5E]',
    lightGradient: 'from-cyan-50 to-blue-50',
    description: 'Obtén certificados y constancias oficiales al instante'
  },
  { 
    name: "Información General", 
    id: 9,
    icon: InformationCircleIcon,
    color: '#009DDD',
    gradient: 'from-[#009DDD] via-[#005C91] to-[#023F5E]',
    lightGradient: 'from-cyan-50 to-blue-50',
    description: 'Consulta información importante y actualizada'
  },
  { 
    name: "Exenciones", 
    id: 8,
    icon: ExclamationTriangleIcon,
    color: '#023F5E',
    gradient: 'from-[#023F5E] via-[#612247] to-[#005C91]',
    lightGradient: 'from-blue-50 to-purple-50',
    description: 'Conoce las exenciones y beneficios disponibles'
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
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Efectos de fondo decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#023F5E]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#612247]/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-[#005C91]/5 via-[#009DDD]/5 to-[#023F5E]/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section Mejorado */}
      <div className="relative z-10 w-full">
        <HeroSellos
          title="Ingresos Brutos - Autogestión"
          description="Plataforma digital avanzada para la gestión integral de todos tus trámites de Ingresos Brutos de manera rápida, segura y eficiente."
          backgroundImage="/tramites.png"
          breadcrumbs={[
            { label: "ATM", active: false },
            { label: "Autogestión", active: false },
            { label: "Ingresos Brutos", active: true },
          ]}
        />
      </div>

      {/* Barra de búsqueda ultra moderna - FULL WIDTH */}
      <div className="relative -mt-20 z-20 w-full px-4">
        <div className="max-w-none mx-auto">
          <div className="group relative">
            {/* Anillo de energía */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-[#005C91]/30 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDuration: '8s'}}></div>
            
            <div className="relative bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/50 p-8 mb-12 hover:shadow-3xl transition-all duration-500">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1 relative group/search">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-2xl blur-lg opacity-0 group-hover/search:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-7 w-7 text-[#005C91] z-10" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar trámites, certificados, información..."
                      className="w-full pl-16 pr-8 py-5 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#005C91]/50 focus:border-[#005C91] bg-gray-50 hover:bg-white transition-all duration-300 font-medium placeholder-gray-500"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-gray-200 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-200"
                      >
                        <span className="text-gray-600 hover:text-red-600 font-bold">×</span>
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#023F5E]/10 to-[#005C91]/10 rounded-2xl border border-[#005C91]/20">
                    <FunnelIcon className="h-5 w-5 text-[#005C91]" />
                    <span className="font-bold text-[#023F5E]">
                      {filteredSections.length} de {SECTIONS.length} secciones
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-medium text-sm">Sistema Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor principal FULL WIDTH */}
      <div className="relative z-10 w-full flex gap-8 py-8 px-4">
        {/* Menú lateral ultra moderno */}
        <aside className="w-80 flex-shrink-0 sticky top-24 self-start">
          <div className="group relative">
            {/* Efecto de brillo */}
            <div className="absolute -inset-2 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <nav className="relative bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
              {/* Header del menú ultra moderno */}
              <div className="relative bg-gradient-to-r from-[#023F5E] via-[#612247] to-[#005C91] p-8 text-white overflow-hidden">
                {/* Efectos decorativos */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl"></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-white/30">
                      <RocketLaunchIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-black tracking-tight">
                        Navegación Inteligente
                      </h3>
                      <p className="text-blue-100 text-sm font-medium">
                        Selecciona una sección para comenzar
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-5 w-5 text-yellow-300" />
                    <span className="text-white/90 text-sm font-medium">
                      Plataforma certificada y segura
                    </span>
                  </div>
                </div>
              </div>

              {/* Lista de secciones ultra moderna */}
              <div className="p-3">
                {filteredSections.map((section, index) => {
                  const isActive = activeSection === section.name;
                  const itemCount = getItemCount(section.name);
                  
                  return (
                    <div
                      key={section.id}
                      className="relative mb-2"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <button
                        onClick={() => handleMenuClick(section.name)}
                        className={`w-full text-left p-5 rounded-2xl font-semibold transition-all duration-500 group/item relative overflow-hidden ${
                          isActive 
                            ? `bg-gradient-to-r ${section.gradient} text-white shadow-2xl scale-105 border-2 border-white/30` 
                            : 'text-gray-700 hover:bg-gray-50 hover:scale-102 border-2 border-transparent hover:border-gray-200'
                        }`}
                      >
                        {/* Efecto de brillo en hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover/item:opacity-10 transition-opacity duration-300`}></div>
                        
                        <div className="relative flex items-center gap-4">
                          {/* Icono mejorado */}
                          <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative ${
                            isActive 
                              ? 'bg-white/20 backdrop-blur-sm border border-white/30' 
                              : 'bg-gray-100 group-hover/item:bg-gray-200 border border-gray-200'
                          }`}>
                            <section.icon className={`h-7 w-7 transition-all duration-300 ${
                              isActive ? 'text-white' : 'text-gray-600 group-hover/item:text-gray-800'
                            }`} />
                            
                            {/* Indicador de actividad */}
                            {isActive && (
                              <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full border-2 border-white animate-pulse"></div>
                            )}
                          </div>
                          
                          {/* Contenido */}
                          <div className="flex-1">
                            <div className="font-bold text-base leading-tight mb-1">
                              {section.name}
                            </div>
                            <div className={`text-sm ${
                              isActive ? 'text-white/80' : 'text-gray-500'
                            }`}>
                              {itemCount} trámites • {section.description.split(' ').slice(0, 3).join(' ')}...
                            </div>
                            
                            {/* Barra de progreso */}
                            <div className="mt-2 w-full h-1 bg-white/20 rounded-full overflow-hidden">
                              <div 
                                className={`h-full transition-all duration-1000 ${
                                  isActive ? 'bg-white/60' : 'bg-gray-300'
                                }`}
                                style={{width: `${Math.min((itemCount / 10) * 100, 100)}%`}}
                              ></div>
                            </div>
                          </div>
                          
                          {/* Indicador de estado */}
                          <div className="flex flex-col items-center gap-2">
                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                              isActive 
                                ? 'bg-white/20 text-white border border-white/30' 
                                : 'bg-gray-100 text-gray-600 border border-gray-200'
                            }`}>
                              {itemCount}
                            </span>
                            
                            <ChevronRightIcon className={`h-5 w-5 transition-all duration-500 ${
                              isActive 
                                ? 'text-white rotate-90 scale-110' 
                                : 'text-gray-400 group-hover/item:translate-x-1 group-hover/item:text-gray-600'
                            }`} />
                          </div>
                        </div>
                      </button>
                    </div>
                  );
                })}
              </div>

              {/* Footer del menú mejorado */}
              <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircleIcon className="h-5 w-5 text-green-500" />
                    <span className="text-gray-700 font-medium">Sistema actualizado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-medium">Online</span>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Contenido principal ultra moderno - FULL WIDTH */}
        <main className="flex-1 w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-32">
              <div className="relative mb-8">
                {/* Spinner principal */}
                <div className="w-20 h-20 border-4 border-[#005C91]/20 border-t-[#005C91] rounded-full animate-spin"></div>
                {/* Spinner secundario */}
                <div className="absolute inset-0 w-20 h-20 border-4 border-transparent border-r-[#612247] rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                {/* Punto central */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-full animate-pulse"></div>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Cargando trámites...</h3>
              <p className="text-gray-600 mb-6 text-center max-w-md">
                Conectando con la base de datos para obtener la información más actualizada
              </p>
              
              <div className="flex items-center gap-3 px-6 py-3 bg-[#005C91]/10 rounded-2xl border border-[#005C91]/20">
                <BoltIcon className="h-5 w-5 text-[#005C91] animate-pulse" />
                <span className="text-[#023F5E] font-medium">Procesando datos...</span>
              </div>
            </div>
          ) : (
            <div className="space-y-12 w-full">
              {filteredSections.map((section, sectionIndex) => {
                const sectionData = getSectionData(section.name);
                const items = itemsBySection[section.name] || [];
                
                return (
                  <section
                    key={section.id}
                    ref={el => (sectionRefs.current[section.name] = el)}
                    className="scroll-mt-24 animate-fade-in w-full"
                    style={{animationDelay: `${sectionIndex * 200}ms`}}
                  >
                    {/* Header de sección ultra moderno */}
                    <div className="relative mb-10 group w-full">
                      {/* Efecto de brillo */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-[#023F5E]/20 to-[#612247]/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className={`relative bg-gradient-to-r ${sectionData.gradient} rounded-3xl p-10 text-white shadow-2xl overflow-hidden border border-white/20 w-full`}>
                        {/* Efectos decorativos mejorados */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                        <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                        
                        <div className="relative flex items-center gap-8">
                          {/* Icono principal mejorado */}
                          <div className="relative">
                            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/30 shadow-2xl">
                              <sectionData.icon className="h-10 w-10 text-white" />
                            </div>
                            {/* Indicador de estado */}
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                              <StarIcon className="h-3 w-3 text-white" />
                            </div>
                          </div>
                          
                          {/* Información mejorada */}
                          <div className="flex-1">
                            <div className="flex items-center gap-4 mb-3">
                              <h2 className="text-4xl font-black tracking-tight">
                                {section.name}
                              </h2>
                              <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold border border-white/30">
                                Sección {sectionIndex + 1}
                              </span>
                            </div>
                            
                            <p className="text-white/90 text-xl font-medium mb-4 leading-relaxed">
                              {sectionData.description}
                            </p>
                            
                            <div className="flex items-center gap-6">
                              <div className="flex items-center gap-3 px-5 py-3 bg-white/20 rounded-2xl border border-white/30">
                                <CheckCircleIcon className="h-5 w-5" />
                                <span className="font-bold">
                                  {items.length} trámites disponibles
                                </span>
                              </div>
                              
                              <div className="flex items-center gap-3 px-5 py-3 bg-white/10 rounded-2xl border border-white/20">
                                <LightBulbIcon className="h-5 w-5 text-yellow-300" />
                                <span className="font-medium">
                                  Actualizado recientemente
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenido de la sección ultra moderno - FULL WIDTH */}
                    <div className="relative group w-full">
                      {/* Efecto de brillo sutil */}
                      <div className="absolute -inset-2 bg-gradient-to-r from-[#023F5E]/10 to-[#612247]/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden w-full">
                        {items.length > 0 ? (
                          <div className="divide-y divide-gray-100">
                            {items.map((item, index) => {
                              const isOpen = openItems[section.name]?.[item.id];
                              
                              return (
                                <div key={item.id} className="group/item relative">
                                  {/* Header del item ultra moderno */}
                                  <button
                                    onClick={() => toggleItem(section.name, item.id)}
                                    className="w-full p-8 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#005C91]/50 relative overflow-hidden"
                                  >
                                    {/* Efecto de hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${sectionData.gradient} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300`}></div>
                                    
                                    <div className="relative flex items-center justify-between">
                                      <div className="flex items-center gap-6 flex-1">
                                        {/* Número de orden mejorado */}
                                        <div className="relative">
                                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${sectionData.gradient} text-white font-black text-lg flex items-center justify-center shadow-xl border-2 border-white group-hover/item:scale-110 transition-transform duration-300`}>
                                            {index + 1}
                                          </div>
                                          {/* Indicador de estado */}
                                          <div className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                            <CheckCircleIcon className="h-3 w-3 text-white" />
                                          </div>
                                        </div>
                                        
                                        {/* Contenido del título */}
                                        <div className="flex-1">
                                          <h3 className="text-xl font-bold text-gray-900 group-hover/item:text-[#005C91] transition-colors leading-tight mb-2">
                                            {item.title.rendered}
                                          </h3>
                                          <div className="flex items-center gap-4">
                                            <p className="text-sm text-gray-500 font-medium">
                                              Haz clic para ver los detalles completos del trámite
                                            </p>
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                              isOpen 
                                                ? 'bg-[#005C91]/10 text-[#005C91] border border-[#005C91]/20' 
                                                : 'bg-gray-100 text-gray-600 border border-gray-200'
                                            }`}>
                                              {isOpen ? 'Expandido' : 'Contraído'}
                                            </span>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      {/* Controles de estado */}
                                      <div className="flex items-center gap-4">
                                        <div className="flex flex-col items-center gap-2">
                                          <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                                            isOpen 
                                              ? `bg-gradient-to-r ${sectionData.gradient} text-white shadow-lg` 
                                              : 'bg-gray-100 text-gray-600 group-hover/item:bg-gray-200'
                                          }`}>
                                            <ChevronDownIcon className={`h-6 w-6 transition-all duration-500 ${
                                              isOpen ? 'rotate-180' : ''
                                            }`} />
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </button>

                                  {/* Contenido expandible con fondo blanco */}
                                  <div className={`overflow-hidden transition-all duration-700 ${
                                    isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
                                  }`}>
                                    <div className="px-8 pb-8">
                                      {/* FONDO BLANCO COMO SOLICITASTE */}
                                      <div className="bg-white rounded-2xl p-8 border-l-4 shadow-lg border border-gray-100" 
                                           style={{borderLeftColor: sectionData.color}}>
                                        
                                        {/* Header del contenido */}
                                        <div className="flex items-center gap-4 mb-6 pb-4 border-b border-gray-100">
                                          <div className={`w-10 h-10 rounded-xl bg-gradient-to-r ${sectionData.gradient} flex items-center justify-center`}>
                                            <sectionData.icon className="h-5 w-5 text-white" />
                                          </div>
                                          <div>
                                            <h4 className="text-lg font-bold text-gray-900">Detalles del Trámite</h4>
                                            <p className="text-sm text-gray-600">Información completa y actualizada</p>
                                          </div>
                                        </div>
                                        
                                        {/* Contenido con fondo blanco */}
                                        <div 
                                          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700"
                                          dangerouslySetInnerHTML={{ __html: item.content.rendered }} 
                                        />
                                        
                                        {/* Footer del contenido mejorado */}
                                        <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                                          <div className="flex items-center gap-6">
                                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                              <InformationCircleIcon className="h-4 w-4" />
                                              <span className="font-medium">Información verificada</span>
                                            </div>
                                            
                                            <div className="flex items-center gap-2 text-sm text-green-600">
                                              <CheckCircleIcon className="h-4 w-4" />
                                              <span className="font-medium">Actualizado recientemente</span>
                                            </div>
                                          </div>
                                          
                                          <button className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${sectionData.gradient} text-white rounded-2xl font-bold text-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border border-white/20`}>
                                            <RocketLaunchIcon className="h-5 w-5" />
                                            Iniciar Trámite
                                            <ArrowRightIcon className="h-4 w-4" />
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
                          <div className="p-16 text-center">
                            <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-xl">
                              <DocumentTextIcon className="h-16 w-16 text-gray-400" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">
                              No hay trámites disponibles
                            </h3>
                            <p className="text-gray-500 mb-8 max-w-md mx-auto leading-relaxed">
                              Esta sección no tiene trámites configurados. 
                              Contacta al administrador para más información.
                            </p>
                            <button className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl">
                              <InformationCircleIcon className="h-6 w-6" />
                              Contactar Soporte
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                );
              })}

              {/* Mensaje cuando no hay resultados de búsqueda */}
              {filteredSections.length === 0 && searchTerm && (
                <div className="text-center py-32 w-full">
                  <div className="w-40 h-40 mx-auto mb-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-2xl">
                    <MagnifyingGlassIcon className="h-20 w-20 text-gray-400" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    No se encontraron resultados
                  </h3>
                  <p className="text-gray-500 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                    No encontramos trámites que coincidan con "<span className="font-bold text-gray-700">{searchTerm}</span>". 
                    Intenta con otros términos de búsqueda o explora las secciones disponibles.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-[#023F5E] to-[#612247] text-white rounded-2xl font-bold hover:scale-105 transition-all duration-300 shadow-xl"
                    >
                      <ArrowRightIcon className="h-6 w-6" />
                      Limpiar búsqueda
                    </button>
                    
                    <button className="inline-flex items-center gap-3 px-10 py-4 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-bold hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                      <InformationCircleIcon className="h-6 w-6" />
                      Ver todas las secciones
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Botón flotante de ayuda ultra moderno */}
      <div className="fixed bottom-8 right-8 z-50 group">
        {/* Anillos de energía */}
        <div className="absolute -inset-6 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-full blur-2xl opacity-30 group-hover:opacity-50 transition-opacity animate-pulse"></div>
        <div className="absolute -inset-4 border-2 border-[#005C91]/30 rounded-full animate-spin" style={{animationDuration: '8s'}}></div>
        
        <button className="relative w-18 h-18 bg-gradient-to-r from-[#023F5E] via-[#612247] to-[#005C91] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
          <InformationCircleIcon className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
          
          {/* Indicador de notificación */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full border-2 border-white flex items-center justify-center">
            <span className="text-white text-xs font-bold">!</span>
          </div>
        </button>
      </div>

      {/* CSS personalizado para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}