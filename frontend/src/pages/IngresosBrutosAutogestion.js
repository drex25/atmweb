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
  LightBulbIcon,
  BuildingOffice2Icon,
  CpuChipIcon,
  ShieldExclamationIcon,
  DocumentCheckIcon,
  ClockIcon,
  UserGroupIcon,
  GlobeAltIcon,
  AcademicCapIcon
} from '@heroicons/react/24/outline';

// Secciones con diseño institucional mejorado
const SECTIONS = [
  { 
    name: "Trámites y Gestiones", 
    id: 5,
    icon: DocumentTextIcon,
    color: '#023F5E',
    gradient: 'from-[#023F5E] via-[#005C91] to-[#009DDD]',
    lightGradient: 'from-blue-50 to-cyan-50',
    description: 'Centro de gestión digital para todos tus trámites tributarios',
    category: 'Gestión Digital',
    priority: 'Alta',
    badge: 'Esencial'
  },
  { 
    name: "Declaración Jurada", 
    id: 7,
    icon: ClipboardDocumentListIcon,
    color: '#612247',
    gradient: 'from-[#612247] via-[#023F5E] to-[#005C91]',
    lightGradient: 'from-purple-50 to-blue-50',
    description: 'Plataforma oficial para presentación de declaraciones juradas',
    category: 'Declaraciones',
    priority: 'Crítica',
    badge: 'Obligatorio'
  },
  { 
    name: "Certificado", 
    id: 6,
    icon: ShieldCheckIcon,
    color: '#005C91',
    gradient: 'from-[#005C91] via-[#009DDD] to-[#023F5E]',
    lightGradient: 'from-cyan-50 to-blue-50',
    description: 'Emisión instantánea de certificados y constancias oficiales',
    category: 'Certificaciones',
    priority: 'Media',
    badge: 'Verificado'
  },
  { 
    name: "Información General", 
    id: 9,
    icon: InformationCircleIcon,
    color: '#009DDD',
    gradient: 'from-[#009DDD] via-[#005C91] to-[#023F5E]',
    lightGradient: 'from-cyan-50 to-blue-50',
    description: 'Centro de información tributaria actualizada y normativas vigentes',
    category: 'Información',
    priority: 'Media',
    badge: 'Actualizado'
  },
  { 
    name: "Exenciones", 
    id: 8,
    icon: ExclamationTriangleIcon,
    color: '#023F5E',
    gradient: 'from-[#023F5E] via-[#612247] to-[#005C91]',
    lightGradient: 'from-blue-50 to-purple-50',
    description: 'Consulta y gestión de exenciones y beneficios fiscales disponibles',
    category: 'Beneficios',
    priority: 'Alta',
    badge: 'Beneficio'
  },
];

export default function IngresosBrutosAutogestion() {
  const [itemsBySection, setItemsBySection] = useState({});
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});
  const [activeSection, setActiveSection] = useState(SECTIONS[0].name);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState(SECTIONS);
  const [stats, setStats] = useState({ totalItems: 0, activeSections: 0 });
  const sectionRefs = useRef({});

  useEffect(() => {
    async function fetchItems() {
      const result = {};
      let totalItems = 0;
      let activeSections = 0;
      
      for (const section of SECTIONS) {
        try {
          const res = await fetch(
            `http://localhost:8000/wp-json/wp/v2/item_autogestion?tramite=${section.id}&per_page=100`
          );
          const data = await res.json();
          result[section.name] = data;
          totalItems += data.length;
          if (data.length > 0) activeSections++;
        } catch (error) {
          console.error(`Error fetching ${section.name}:`, error);
          result[section.name] = [];
        }
      }
      
      setItemsBySection(result);
      setStats({ totalItems, activeSections });
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

  // Obtener color de prioridad
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'Crítica': return 'bg-red-100 text-red-700 border-red-200';
      case 'Alta': return 'bg-orange-100 text-orange-700 border-orange-200';
      case 'Media': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Efectos de fondo institucionales */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#023F5E]/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#612247]/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-gradient-to-r from-[#005C91]/3 via-[#009DDD]/3 to-[#023F5E]/3 rounded-full blur-3xl"></div>
        
        {/* Patrón institucional sutil */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23023F5E' fill-opacity='1'%3E%3Cpath d='M30 30m-20 0a20 20 0 1 1 40 0a20 20 0 1 1 -40 0'/%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Hero Section Institucional */}
      <div className="relative z-10 w-full">
        <HeroSellos
          title="Centro de Autogestión Digital"
          description="Plataforma oficial de la Agencia Tributaria de Misiones para la gestión integral de Ingresos Brutos. Sistema seguro, eficiente y disponible 24/7."
          backgroundImage="/tramites.png"
          breadcrumbs={[
            { label: "ATM Misiones", active: false },
            { label: "Autogestión Digital", active: false },
            { label: "Ingresos Brutos", active: true },
          ]}
        />
      </div>

      {/* Panel de estadísticas institucional */}
      <div className="relative -mt-16 z-20 w-full px-4 mb-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 p-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#023F5E] to-[#005C91] rounded-2xl flex items-center justify-center shadow-xl">
                  <BuildingOffice2Icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black text-[#023F5E] mb-2">{stats.totalItems}</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Trámites Disponibles</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#612247] to-[#023F5E] rounded-2xl flex items-center justify-center shadow-xl">
                  <CpuChipIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black text-[#612247] mb-2">{stats.activeSections}</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Secciones Activas</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#005C91] to-[#009DDD] rounded-2xl flex items-center justify-center shadow-xl">
                  <ShieldExclamationIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black text-[#005C91] mb-2">24/7</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Disponibilidad</div>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-[#009DDD] to-[#005C91] rounded-2xl flex items-center justify-center shadow-xl">
                  <DocumentCheckIcon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-black text-[#009DDD] mb-2">100%</div>
                <div className="text-sm font-bold text-gray-600 uppercase tracking-wide">Digital</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barra de búsqueda institucional avanzada */}
      <div className="relative z-20 w-full px-4 mb-12">
        <div className="max-w-7xl mx-auto">
          <div className="group relative">
            {/* Efectos de energía institucional */}
            <div className="absolute -inset-4 rounded-3xl border-2 border-[#005C91]/20 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDuration: '12s'}}></div>
            <div className="absolute -inset-2 rounded-3xl border border-[#023F5E]/10 animate-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
            
            <div className="relative bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 p-8 hover:shadow-3xl transition-all duration-500">
              {/* Header de búsqueda */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-2xl flex items-center justify-center shadow-xl">
                  <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-black text-gray-900">Búsqueda Inteligente</h3>
                  <p className="text-sm text-gray-600 font-medium">Encuentra trámites, certificados e información específica</p>
                </div>
              </div>
              
              <div className="flex flex-col lg:flex-row gap-6 items-center">
                <div className="flex-1 relative group/search w-full">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-2xl blur-lg opacity-0 group-hover/search:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-6 top-1/2 transform -translate-y-1/2 h-7 w-7 text-[#005C91] z-10" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar por nombre de trámite, tipo de certificado, información específica..."
                      className="w-full pl-16 pr-16 py-6 text-lg border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#005C91]/50 focus:border-[#005C91] bg-gray-50 hover:bg-white transition-all duration-300 font-medium placeholder-gray-500"
                    />
                    {searchTerm && (
                      <button
                        onClick={() => setSearchTerm('')}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-gray-200 hover:bg-red-100 rounded-full flex items-center justify-center transition-all duration-200 group"
                      >
                        <span className="text-gray-600 group-hover:text-red-600 font-bold text-xl">×</span>
                      </button>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center gap-3 px-6 py-4 bg-gradient-to-r from-[#023F5E]/10 to-[#005C91]/10 rounded-2xl border border-[#005C91]/20">
                    <FunnelIcon className="h-6 w-6 text-[#005C91]" />
                    <span className="font-bold text-[#023F5E] text-lg">
                      {filteredSections.length} de {SECTIONS.length}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-green-700 font-bold text-sm">Sistema Operativo</span>
                  </div>
                  
                  <div className="flex items-center gap-3 px-4 py-3 bg-blue-50 rounded-xl border border-blue-200">
                    <ClockIcon className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700 font-bold text-sm">Actualizado Hoy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor principal institucional */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex gap-8 py-8 px-4">
        {/* Menú lateral institucional premium */}
        <aside className="w-96 flex-shrink-0 sticky top-24 self-start">
          <div className="group relative">
            {/* Efectos de brillo institucional */}
            <div className="absolute -inset-3 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            
            <nav className="relative bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden">
              {/* Header del menú institucional */}
              <div className="relative bg-gradient-to-r from-[#023F5E] via-[#612247] to-[#005C91] p-8 text-white overflow-hidden">
                {/* Efectos decorativos institucionales */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 right-1/4 w-8 h-8 bg-white/10 rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/4 left-1/3 w-6 h-6 bg-white/15 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                
                <div className="relative">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/30 shadow-2xl">
                      <GlobeAltIcon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tight">
                        Panel de Control
                      </h3>
                      <p className="text-blue-100 text-sm font-medium">
                        Agencia Tributaria de Misiones
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20">
                      <div className="text-2xl font-black text-white">{stats.totalItems}</div>
                      <div className="text-xs text-blue-100 font-medium">Trámites</div>
                    </div>
                    <div className="text-center p-4 bg-white/10 rounded-2xl border border-white/20">
                      <div className="text-2xl font-black text-white">{stats.activeSections}</div>
                      <div className="text-xs text-blue-100 font-medium">Secciones</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <StarIcon className="h-6 w-6 text-yellow-300" />
                    <span className="text-white/90 text-sm font-bold">
                      Plataforma Oficial Certificada
                    </span>
                  </div>
                </div>
              </div>

              {/* Lista de secciones institucional */}
              <div className="p-4">
                {filteredSections.map((section, index) => {
                  const isActive = activeSection === section.name;
                  const itemCount = getItemCount(section.name);
                  
                  return (
                    <div
                      key={section.id}
                      className="relative mb-3"
                      style={{animationDelay: `${index * 100}ms`}}
                    >
                      <button
                        onClick={() => handleMenuClick(section.name)}
                        className={`w-full text-left p-6 rounded-2xl font-semibold transition-all duration-500 group/item relative overflow-hidden border-2 ${
                          isActive 
                            ? `bg-gradient-to-r ${section.gradient} text-white shadow-2xl scale-105 border-white/30` 
                            : 'text-gray-700 hover:bg-gray-50 hover:scale-102 border-transparent hover:border-gray-200 bg-white/80'
                        }`}
                      >
                        {/* Efecto de hover institucional */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${section.gradient} opacity-0 group-hover/item:opacity-5 transition-opacity duration-300`}></div>
                        
                        <div className="relative">
                          {/* Header de la sección */}
                          <div className="flex items-center gap-4 mb-4">
                            {/* Icono institucional mejorado */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-500 relative border-2 ${
                              isActive 
                                ? 'bg-white/20 backdrop-blur-sm border-white/30' 
                                : 'bg-gray-100 group-hover/item:bg-gray-200 border-gray-200'
                            }`}>
                              <section.icon className={`h-8 w-8 transition-all duration-300 ${
                                isActive ? 'text-white' : 'text-gray-600 group-hover/item:text-gray-800'
                              }`} />
                              
                              {/* Badge de prioridad */}
                              <div className={`absolute -top-2 -right-2 px-2 py-1 rounded-full text-xs font-bold border ${
                                isActive ? 'bg-yellow-400 text-yellow-900 border-yellow-300' : getPriorityColor(section.priority)
                              }`}>
                                {section.priority}
                              </div>
                            </div>
                            
                            {/* Información de la sección */}
                            <div className="flex-1">
                              <div className="font-black text-lg leading-tight mb-1">
                                {section.name}
                              </div>
                              <div className={`text-sm mb-2 ${
                                isActive ? 'text-white/80' : 'text-gray-500'
                              }`}>
                                {section.category} • {itemCount} elementos
                              </div>
                              
                              {/* Badge de estado */}
                              <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${
                                isActive 
                                  ? 'bg-white/20 text-white border-white/30' 
                                  : 'bg-blue-50 text-blue-700 border-blue-200'
                              }`}>
                                {section.badge}
                              </span>
                            </div>
                          </div>
                          
                          {/* Descripción */}
                          <div className={`text-sm leading-relaxed mb-4 ${
                            isActive ? 'text-white/90' : 'text-gray-600'
                          }`}>
                            {section.description}
                          </div>
                          
                          {/* Barra de progreso institucional */}
                          <div className="flex items-center justify-between">
                            <div className="flex-1 mr-4">
                              <div className={`w-full h-2 rounded-full overflow-hidden ${
                                isActive ? 'bg-white/20' : 'bg-gray-200'
                              }`}>
                                <div 
                                  className={`h-full transition-all duration-1000 ${
                                    isActive ? 'bg-white/60' : 'bg-blue-500'
                                  }`}
                                  style={{width: `${Math.min((itemCount / 10) * 100, 100)}%`}}
                                ></div>
                              </div>
                            </div>
                            
                            <ChevronRightIcon className={`h-6 w-6 transition-all duration-500 ${
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

              {/* Footer institucional del menú */}
              <div className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3 text-sm">
                    <CheckCircleIcon className="h-6 w-6 text-green-500" />
                    <span className="text-gray-700 font-bold">Sistema Verificado</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs text-gray-500 font-bold">Conectado</span>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xs text-gray-500 font-medium mb-2">Agencia Tributaria de Misiones</div>
                  <div className="text-xs text-gray-400">Plataforma Oficial • Versión 2.0</div>
                </div>
              </div>
            </nav>
          </div>
        </aside>

        {/* Contenido principal institucional */}
        <main className="flex-1 w-full">
          {loading ? (
            <div className="flex flex-col items-center justify-center py-40">
              <div className="relative mb-12">
                {/* Spinner principal institucional */}
                <div className="w-24 h-24 border-4 border-[#005C91]/20 border-t-[#005C91] rounded-full animate-spin"></div>
                {/* Spinner secundario */}
                <div className="absolute inset-0 w-24 h-24 border-4 border-transparent border-r-[#612247] rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '1.5s'}}></div>
                {/* Logo central */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-full animate-pulse flex items-center justify-center">
                    <BuildingOffice2Icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-3xl font-black text-gray-800 mb-4">Conectando con ATM Misiones</h3>
              <p className="text-gray-600 mb-8 text-center max-w-md text-lg leading-relaxed">
                Accediendo a la base de datos oficial para obtener la información más actualizada de trámites y servicios
              </p>
              
              <div className="flex items-center gap-4 px-8 py-4 bg-[#005C91]/10 rounded-2xl border border-[#005C91]/20">
                <BoltIcon className="h-6 w-6 text-[#005C91] animate-pulse" />
                <span className="text-[#023F5E] font-bold text-lg">Procesando datos oficiales...</span>
              </div>
            </div>
          ) : (
            <div className="space-y-16 w-full">
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
                    {/* Header de sección institucional premium */}
                    <div className="relative mb-12 group w-full">
                      {/* Efectos de brillo institucional */}
                      <div className="absolute -inset-6 bg-gradient-to-r from-[#023F5E]/15 to-[#612247]/15 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className={`relative bg-gradient-to-r ${sectionData.gradient} rounded-3xl p-12 text-white shadow-2xl overflow-hidden border-2 border-white/20 w-full`}>
                        {/* Efectos decorativos institucionales mejorados */}
                        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/5 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
                        <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-white/15 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
                        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 bg-white/20 rounded-full animate-bounce" style={{animationDelay: '3s'}}></div>
                        
                        {/* Patrón institucional sutil */}
                        <div className="absolute inset-0 opacity-10" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='white' fill-opacity='0.3'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`
                        }}></div>
                        
                        <div className="relative flex items-center gap-10">
                          {/* Icono principal institucional */}
                          <div className="relative">
                            <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl flex items-center justify-center border-2 border-white/30 shadow-2xl">
                              <sectionData.icon className="h-12 w-12 text-white" />
                            </div>
                            {/* Badge de certificación */}
                            <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full border-2 border-white flex items-center justify-center">
                              <AcademicCapIcon className="h-4 w-4 text-yellow-900" />
                            </div>
                          </div>
                          
                          {/* Información institucional mejorada */}
                          <div className="flex-1">
                            <div className="flex items-center gap-6 mb-4">
                              <h2 className="text-5xl font-black tracking-tight">
                                {section.name}
                              </h2>
                              <div className="flex gap-3">
                                <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-bold border border-white/30">
                                  {sectionData.category}
                                </span>
                                <span className={`px-4 py-2 rounded-full text-sm font-bold border ${getPriorityColor(sectionData.priority)} bg-white text-gray-800`}>
                                  Prioridad {sectionData.priority}
                                </span>
                              </div>
                            </div>
                            
                            <p className="text-white/90 text-2xl font-medium mb-6 leading-relaxed">
                              {sectionData.description}
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                              <div className="flex items-center gap-3 px-6 py-4 bg-white/20 rounded-2xl border border-white/30">
                                <CheckCircleIcon className="h-6 w-6" />
                                <div>
                                  <div className="font-black text-xl">{items.length}</div>
                                  <div className="text-sm text-white/80">Trámites Disponibles</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-2xl border border-white/20">
                                <UserGroupIcon className="h-6 w-6 text-blue-200" />
                                <div>
                                  <div className="font-black text-xl">24/7</div>
                                  <div className="text-sm text-white/80">Disponibilidad</div>
                                </div>
                              </div>
                              
                              <div className="flex items-center gap-3 px-6 py-4 bg-white/10 rounded-2xl border border-white/20">
                                <LightBulbIcon className="h-6 w-6 text-yellow-300" />
                                <div>
                                  <div className="font-black text-xl">100%</div>
                                  <div className="text-sm text-white/80">Digital</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contenido de la sección institucional */}
                    <div className="relative group w-full">
                      {/* Efecto de brillo sutil institucional */}
                      <div className="absolute -inset-3 bg-gradient-to-r from-[#023F5E]/8 to-[#612247]/8 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      <div className="relative bg-white/98 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/60 overflow-hidden w-full">
                        {items.length > 0 ? (
                          <div className="divide-y divide-gray-100">
                            {items.map((item, index) => {
                              const isOpen = openItems[section.name]?.[item.id];
                              
                              return (
                                <div key={item.id} className="group/item relative">
                                  {/* Header del item institucional */}
                                  <button
                                    onClick={() => toggleItem(section.name, item.id)}
                                    className="w-full p-10 text-left hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 transition-all duration-500 focus:outline-none focus:ring-4 focus:ring-[#005C91]/50 relative overflow-hidden"
                                  >
                                    {/* Efecto de hover institucional */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${sectionData.gradient} opacity-0 group-hover/item:opacity-3 transition-opacity duration-300`}></div>
                                    
                                    <div className="relative flex items-center justify-between">
                                      <div className="flex items-center gap-8 flex-1">
                                        {/* Número de orden institucional */}
                                        <div className="relative">
                                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${sectionData.gradient} text-white font-black text-xl flex items-center justify-center shadow-xl border-2 border-white group-hover/item:scale-110 transition-transform duration-300`}>
                                            {String(index + 1).padStart(2, '0')}
                                          </div>
                                          {/* Badge de verificación */}
                                          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                                            <CheckCircleIcon className="h-4 w-4 text-white" />
                                          </div>
                                        </div>
                                        
                                        {/* Contenido del título institucional */}
                                        <div className="flex-1">
                                          <h3 className="text-2xl font-black text-gray-900 group-hover/item:text-[#005C91] transition-colors leading-tight mb-3">
                                            {item.title.rendered}
                                          </h3>
                                          <div className="flex items-center gap-6">
                                            <p className="text-base text-gray-600 font-medium">
                                              Trámite oficial de la Agencia Tributaria de Misiones
                                            </p>
                                            <div className="flex gap-3">
                                              <span className={`px-4 py-2 rounded-full text-xs font-bold border ${
                                                isOpen 
                                                  ? 'bg-[#005C91]/10 text-[#005C91] border-[#005C91]/20' 
                                                  : 'bg-gray-100 text-gray-600 border-gray-200'
                                              }`}>
                                                {isOpen ? 'Expandido' : 'Contraído'}
                                              </span>
                                              <span className="px-4 py-2 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200">
                                                Verificado
                                              </span>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      
                                      {/* Controles de estado institucional */}
                                      <div className="flex items-center gap-6">
                                        <div className="text-right">
                                          <div className="text-sm font-bold text-gray-500 mb-1">Estado</div>
                                          <div className="text-lg font-black text-green-600">Activo</div>
                                        </div>
                                        
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 border-2 ${
                                          isOpen 
                                            ? `bg-gradient-to-r ${sectionData.gradient} text-white shadow-lg border-white` 
                                            : 'bg-gray-100 text-gray-600 group-hover/item:bg-gray-200 border-gray-200'
                                        }`}>
                                          <ChevronDownIcon className={`h-7 w-7 transition-all duration-500 ${
                                            isOpen ? 'rotate-180' : ''
                                          }`} />
                                        </div>
                                      </div>
                                    </div>
                                  </button>

                                  {/* Contenido expandible con fondo blanco institucional */}
                                  <div className={`overflow-hidden transition-all duration-700 ${
                                    isOpen ? 'max-h-[4000px] opacity-100' : 'max-h-0 opacity-0'
                                  }`}>
                                    <div className="px-10 pb-10">
                                      {/* FONDO BLANCO INSTITUCIONAL */}
                                      <div className="bg-white rounded-3xl p-10 border-l-8 shadow-xl border border-gray-100" 
                                           style={{borderLeftColor: sectionData.color}}>
                                        
                                        {/* Header del contenido institucional */}
                                        <div className="flex items-center gap-6 mb-8 pb-6 border-b-2 border-gray-100">
                                          <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${sectionData.gradient} flex items-center justify-center shadow-xl`}>
                                            <sectionData.icon className="h-7 w-7 text-white" />
                                          </div>
                                          <div className="flex-1">
                                            <h4 className="text-2xl font-black text-gray-900 mb-2">Información Oficial del Trámite</h4>
                                            <p className="text-base text-gray-600 font-medium">Agencia Tributaria de Misiones • Documentación verificada y actualizada</p>
                                          </div>
                                          <div className="text-right">
                                            <div className="text-sm font-bold text-gray-500 mb-1">Última actualización</div>
                                            <div className="text-base font-black text-gray-900">Hoy</div>
                                          </div>
                                        </div>
                                        
                                        {/* Contenido con fondo blanco institucional */}
                                        <div 
                                          className="prose prose-xl max-w-none prose-headings:text-gray-900 prose-headings:font-black prose-p:text-gray-700 prose-p:text-lg prose-p:leading-relaxed prose-strong:text-gray-900 prose-strong:font-bold prose-ul:text-gray-700 prose-ol:text-gray-700 prose-li:text-gray-700 prose-li:text-lg prose-a:text-[#005C91] prose-a:font-bold"
                                          dangerouslySetInnerHTML={{ __html: item.content.rendered }} 
                                        />
                                        
                                        {/* Footer del contenido institucional mejorado */}
                                        <div className="mt-10 pt-8 border-t-2 border-gray-200">
                                          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                                            <div className="flex flex-wrap items-center gap-6">
                                              <div className="flex items-center gap-3 text-base text-gray-600">
                                                <InformationCircleIcon className="h-6 w-6 text-blue-500" />
                                                <span className="font-bold">Información oficial verificada</span>
                                              </div>
                                              
                                              <div className="flex items-center gap-3 text-base text-green-600">
                                                <CheckCircleIcon className="h-6 w-6" />
                                                <span className="font-bold">Actualizado recientemente</span>
                                              </div>
                                              
                                              <div className="flex items-center gap-3 text-base text-purple-600">
                                                <ShieldExclamationIcon className="h-6 w-6" />
                                                <span className="font-bold">Plataforma segura</span>
                                              </div>
                                            </div>
                                            
                                            <button className={`inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r ${sectionData.gradient} text-white rounded-2xl font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl border-2 border-white/20`}>
                                              <RocketLaunchIcon className="h-7 w-7" />
                                              Iniciar Trámite Oficial
                                              <ArrowRightIcon className="h-6 w-6" />
                                            </button>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="p-20 text-center">
                            <div className="w-40 h-40 mx-auto mb-10 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-2xl">
                              <DocumentTextIcon className="h-20 w-20 text-gray-400" />
                            </div>
                            <h3 className="text-3xl font-black text-gray-900 mb-6">
                              Sección en Desarrollo
                            </h3>
                            <p className="text-gray-600 mb-10 max-w-lg mx-auto text-lg leading-relaxed">
                              Esta sección está siendo configurada por el equipo técnico de ATM Misiones. 
                              Los trámites estarán disponibles próximamente.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                              <button className="inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-[#023F5E] to-[#612247] text-white rounded-2xl font-black text-lg hover:scale-105 transition-all duration-300 shadow-2xl">
                                <InformationCircleIcon className="h-7 w-7" />
                                Contactar Mesa de Ayuda
                              </button>
                              
                              <button className="inline-flex items-center gap-4 px-10 py-5 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-black text-lg hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                                <BoltIcon className="h-7 w-7" />
                                Notificarme cuando esté listo
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </section>
                );
              })}

              {/* Mensaje cuando no hay resultados de búsqueda institucional */}
              {filteredSections.length === 0 && searchTerm && (
                <div className="text-center py-40 w-full">
                  <div className="w-48 h-48 mx-auto mb-12 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center shadow-2xl">
                    <MagnifyingGlassIcon className="h-24 w-24 text-gray-400" />
                  </div>
                  <h3 className="text-4xl font-black text-gray-900 mb-8">
                    No se encontraron resultados
                  </h3>
                  <p className="text-gray-600 mb-12 max-w-2xl mx-auto text-xl leading-relaxed">
                    No encontramos trámites que coincidan con "<span className="font-black text-gray-900">{searchTerm}</span>" en la base de datos oficial de ATM Misiones. 
                    Intenta con otros términos o explora las secciones disponibles.
                  </p>
                  <div className="flex flex-col lg:flex-row gap-6 justify-center">
                    <button 
                      onClick={() => setSearchTerm('')}
                      className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#023F5E] to-[#612247] text-white rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl"
                    >
                      <ArrowRightIcon className="h-8 w-8" />
                      Limpiar búsqueda
                    </button>
                    
                    <button className="inline-flex items-center gap-4 px-12 py-6 bg-white border-2 border-gray-300 text-gray-700 rounded-2xl font-black text-xl hover:bg-gray-50 hover:scale-105 transition-all duration-300">
                      <InformationCircleIcon className="h-8 w-8" />
                      Ver todas las secciones
                    </button>
                    
                    <button className="inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-[#005C91] to-[#009DDD] text-white rounded-2xl font-black text-xl hover:scale-105 transition-all duration-300 shadow-2xl">
                      <UserGroupIcon className="h-8 w-8" />
                      Contactar soporte
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}
        </main>
      </div>

      {/* Botón flotante de ayuda institucional */}
      <div className="fixed bottom-8 right-8 z-50 group">
        {/* Anillos de energía institucional */}
        <div className="absolute -inset-8 bg-gradient-to-r from-[#023F5E] to-[#612247] rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity animate-pulse"></div>
        <div className="absolute -inset-6 border-2 border-[#005C91]/20 rounded-full animate-spin" style={{animationDuration: '12s'}}></div>
        <div className="absolute -inset-4 border border-[#009DDD]/30 rounded-full animate-spin" style={{animationDuration: '8s', animationDirection: 'reverse'}}></div>
        
        <button className="relative w-20 h-20 bg-gradient-to-r from-[#023F5E] via-[#612247] to-[#005C91] rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-white/30 backdrop-blur-sm">
          <InformationCircleIcon className="h-12 w-12 text-white group-hover:scale-110 transition-transform" />
          
          {/* Badge de notificación institucional */}
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-500 rounded-full border-2 border-white flex items-center justify-center animate-pulse">
            <span className="text-white text-sm font-black">!</span>
          </div>
          
          {/* Indicador de estado */}
          <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
            <CheckCircleIcon className="h-4 w-4 text-white" />
          </div>
        </button>
      </div>

      {/* CSS personalizado para animaciones institucionales */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes institutionalPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }
        
        .animate-institutional-pulse {
          animation: institutionalPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}