import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure, Transition } from '@headlessui/react';
import {
  Bars3Icon as MenuIcon,
  XMarkIcon as XIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  UserGroupIcon,
  DocumentTextIcon,
  BuildingLibraryIcon,
  GiftIcon,
  AcademicCapIcon,
  ChevronDownIcon,
  PhoneIcon,
  KeyIcon,
  DocumentPlusIcon,
  QuestionMarkCircleIcon,
  BookOpenIcon,
  PlayCircleIcon,
  UserIcon,
  CreditCardIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

// Estructura de navegación optimizada
const navigation = [
  { name: 'Inicio', href: '/', icon: HomeIcon },
  { name: 'Autogestión', href: '/autogestion', icon: UserGroupIcon },
  {
    name: 'Trámites',
    mega: true,
    icon: DocumentTextIcon,
    submenu: [
      {
        title: 'Impuestos',
        items: [
          { name: 'Sellos', href: '/tramites/sellos', description: 'Gestión de sellos y timbrados' },
          { name: 'Ingresos Brutos', href: '/tramites/ingresos-brutos', description: 'Declaraciones y pagos' },
          { name: 'Impuesto Inmobiliario', href: '/tramites/inmobiliario', description: 'Tasas y valuaciones' },
        ]
      },
      {
        title: 'Control y Fiscalización',
        items: [
          { name: 'Control Fiscal', href: '/tramites/control-fiscal', description: 'Verificación en ruta' },
          { name: 'Tasas y Aranceles', href: '/tramites/tasas-aranceles', description: 'Pagos y gestiones' },
          { name: 'Vehículos', href: '/tramites/vehiculos', description: 'Impuestos vehiculares' },
        ]
      }
    ],
  },
  {
    name: 'Información',
    mega: true,
    icon: BuildingLibraryIcon,
    submenu: [
      {
        title: 'Documentación',
        items: [
          { name: 'Normativas', href: '/info/normativas', description: 'Leyes y reglamentos' },
          { name: 'Estadísticas', href: '/info/estadisticas', description: 'Informes y datos' },
        ]
      },
      {
        title: 'Registros',
        items: [
          { name: 'Padrones', href: '/info/padrones', description: 'Registro de contribuyentes' },
          { name: 'Exenciones', href: '/info/exenciones', description: 'Beneficios fiscales' },
        ]
      }
    ],
  },
  { name: 'Beneficios', href: '/beneficios', icon: GiftIcon },
  {
    name: 'Institucional',
    icon: AcademicCapIcon,
    submenu: [
      { name: 'Autoridades', href: '/institucional/autoridades' },
      { name: 'Atención al Público', href: '/institucional/atencion' },
    ],
  },
];

function Navbar() {
  const [openMenu, setOpenMenu] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = (name) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setOpenMenu(name);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 300); // 300ms delay antes de cerrar
  };

  const handleMenuMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const handleMenuMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenMenu(null);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchTerm);
    setShowSearch(false);
  };

  return (
    <>
      <nav className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center" aria-label="Ir al inicio">
                <img 
                  src="/logo-atm.png" 
                  alt="ATM Misiones" 
                  className="h-14 w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-200" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <div
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                    className="relative"
                  >
                    {item.href ? (
                      <Link
                        to={item.href}
                        className="flex items-center px-4 py-2 rounded-lg font-medium text-sm text-gray-700 hover:text-atm-primary hover:bg-gray-50 transition-all duration-200 group"
                      >
                        <item.icon className="h-4 w-4 mr-2 text-atm-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                      </Link>
                    ) : (
                      <button
                        className={`flex items-center px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 group ${
                          openMenu === item.name 
                            ? 'text-atm-primary bg-gray-50' 
                            : 'text-gray-700 hover:text-atm-primary hover:bg-gray-50'
                        }`}
                        aria-haspopup="true"
                        aria-expanded={openMenu === item.name}
                      >
                        <item.icon className="h-4 w-4 mr-2 text-atm-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                        <span>{item.name}</span>
                        <ChevronDownIcon className={`ml-2 h-4 w-4 text-atm-primary transition-transform duration-200 ${
                          openMenu === item.name ? 'rotate-180' : 'group-hover:rotate-180'
                        }`} />
                      </button>
                    )}

                    {/* Mega Menu */}
                    {item.mega && openMenu === item.name && (
                      <Transition
                        show={openMenu === item.name}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-2 scale-95"
                        enterTo="opacity-100 translate-y-0 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0 scale-100"
                        leaveTo="opacity-0 translate-y-2 scale-95"
                      >
                        <div 
                          className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-[520px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={handleMenuMouseEnter}
                          onMouseLeave={handleMenuMouseLeave}
                        >
                          <div className="p-6 grid grid-cols-2 gap-6">
                            {item.submenu.map((section) => (
                              <div key={section.title}>
                                <h3 className="text-sm font-semibold text-atm-primary mb-3 uppercase tracking-wide">
                                  {section.title}
                                </h3>
                                <div className="space-y-3">
                                  {section.items.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      className="block group p-2 rounded-lg hover:bg-gray-50 transition-colors duration-150"
                                      onClick={() => setOpenMenu(null)}
                                    >
                                      <div className="font-medium text-gray-900 group-hover:text-atm-primary transition-colors">
                                        {subItem.name}
                                      </div>
                                      <div className="text-xs text-gray-500 mt-1 group-hover:text-gray-700 transition-colors">
                                        {subItem.description}
                                      </div>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Transition>
                    )}

                    {/* Simple Submenu */}
                    {!item.mega && item.submenu && openMenu === item.name && (
                      <Transition
                        show={openMenu === item.name}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-2 scale-95"
                        enterTo="opacity-100 translate-y-0 scale-100"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0 scale-100"
                        leaveTo="opacity-0 translate-y-2 scale-95"
                      >
                        <div 
                          className="absolute left-0 mt-3 w-64 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden z-50"
                          onMouseEnter={handleMenuMouseEnter}
                          onMouseLeave={handleMenuMouseLeave}
                        >
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-atm-primary transition-colors duration-150"
                                onClick={() => setOpenMenu(null)}
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Transition>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Search and Mobile Menu */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="p-2 rounded-full text-gray-500 hover:text-atm-primary hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-atm-primary focus:ring-offset-2"
                aria-label="Buscar"
              >
                <MagnifyingGlassIcon className="h-5 w-5" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-atm-primary hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-atm-primary focus:ring-offset-2"
                aria-label="Abrir menú"
              >
                <MenuIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <Transition show={mobileOpen}>
          <div className="fixed inset-0 z-50 lg:hidden">
            {/* Backdrop con efecto glassmorphism */}
            <div 
              className="fixed inset-0 bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-md transition-opacity duration-500" 
              onClick={() => setMobileOpen(false)} 
            />
            
            {/* Menu Panel Ultra Moderno */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white/95 backdrop-blur-xl shadow-2xl transform transition-all duration-500 ease-out flex flex-col h-full border-l border-white/20">
              
              {/* Header con gradiente dinámico */}
              <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-purple-500/20"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
                
                <div className="relative flex items-center justify-between p-6">
                  <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30">
                      <img src="/logo-atm.png" alt="ATM" className="h-8 w-auto filter brightness-0 invert" />
                    </div>
                    <div className="text-white">
                      <div className="font-bold text-lg">ATM</div>
                      <div className="text-xs opacity-80">Misiones</div>
                    </div>
                  </Link>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-white hover:bg-white/30 transition-all duration-200 border border-white/30"
                  >
                    <XIcon className="h-5 w-5" />
                  </button>
                </div>
              </div>

              {/* Contacto Premium */}
              <div className="p-6 bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50 border-b border-gray-100/50">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs font-semibold mb-2">
                    <SparklesIcon className="h-3 w-3 mr-1" />
                    Contacto Directo
                  </div>
                </div>
                <a 
                  href="tel:0810-444-5505"
                  className="group relative flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 text-white rounded-2xl font-bold text-lg hover:from-emerald-600 hover:via-teal-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <PhoneIcon className="h-6 w-6 mr-3 relative z-10" />
                  <span className="relative z-10">0810-444-5505</span>
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full animate-pulse"></div>
                </a>
              </div>

              {/* Clave Fiscal Premium */}
              <div className="p-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border-b border-gray-100/50">
                <div className="text-center mb-4">
                  <div className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold mb-2">
                    <ShieldCheckIcon className="h-3 w-3 mr-1" />
                    Acceso Seguro
                  </div>
                </div>
                
                {/* Botón principal con animación */}
                <button className="group relative w-full px-6 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl mb-4 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center justify-center relative z-10">
                    <KeyIcon className="h-6 w-6 mr-3" />
                    <span>Ingresar con Clave Fiscal</span>
                  </div>
                  <div className="absolute top-1 right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </button>

                {/* Card de opciones */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg border border-white/50">
                  <div className="text-center mb-4">
                    <QuestionMarkCircleIcon className="h-8 w-8 text-amber-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-700 font-semibold">
                      ¿No tenés Clave Fiscal?
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      Accedé a todos nuestros servicios
                    </p>
                  </div>
                  
                  <div className="space-y-3">
                    <button className="group w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl font-semibold hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                      <div className="flex items-center">
                        <CreditCardIcon className="h-5 w-5 mr-3" />
                        <span>Obtenela</span>
                      </div>
                      <div className="w-2 h-2 bg-yellow-300 rounded-full group-hover:scale-125 transition-transform"></div>
                    </button>
                    
                    <button className="group w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                      <div className="flex items-center">
                        <DocumentTextIcon className="h-5 w-5 mr-3" />
                        <span>Constancia</span>
                      </div>
                      <div className="w-2 h-2 bg-cyan-300 rounded-full group-hover:scale-125 transition-transform"></div>
                    </button>
                    
                    <button className="group w-full flex items-center justify-between px-4 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-xl font-semibold hover:from-teal-600 hover:to-blue-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105">
                      <div className="flex items-center">
                        <PlayCircleIcon className="h-5 w-5 mr-3" />
                        <span>Guía Video</span>
                      </div>
                      <div className="w-2 h-2 bg-green-300 rounded-full group-hover:scale-125 transition-transform"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Navigation con scroll personalizado */}
              <div className="flex-1 overflow-y-auto p-4 bg-gradient-to-b from-gray-50/50 to-white/50 backdrop-blur-sm">
                <nav className="space-y-2">
                  {navigation.map((item, index) => (
                    <Disclosure key={item.name}>
                      {({ open }) => (
                        <div className="group">
                          {item.href ? (
                            <Link
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center w-full px-4 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-atm-primary hover:to-atm-secondary rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105 bg-white/60 backdrop-blur-sm border border-white/30"
                              style={{ animationDelay: `${index * 50}ms` }}
                            >
                              <div className="w-10 h-10 bg-gradient-to-br from-atm-primary/10 to-atm-secondary/10 rounded-lg flex items-center justify-center mr-4 group-hover:from-white/20 group-hover:to-white/20 transition-all duration-300">
                                <item.icon className="h-5 w-5 text-atm-primary group-hover:text-white transition-colors" />
                              </div>
                              <span className="flex-1">{item.name}</span>
                            </Link>
                          ) : (
                            <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-atm-primary hover:to-atm-secondary rounded-xl transition-all duration-300 font-medium shadow-sm hover:shadow-md transform hover:scale-105 bg-white/60 backdrop-blur-sm border border-white/30">
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-gradient-to-br from-atm-primary/10 to-atm-secondary/10 rounded-lg flex items-center justify-center mr-4 group-hover:from-white/20 group-hover:to-white/20 transition-all duration-300">
                                  <item.icon className="h-5 w-5 text-atm-primary group-hover:text-white transition-colors" />
                                </div>
                                <span className="flex-1">{item.name}</span>
                              </div>
                              <ChevronDownIcon
                                className={`h-5 w-5 text-atm-primary group-hover:text-white transition-all duration-300 ${
                                  open ? 'rotate-180 scale-110' : ''
                                }`}
                              />
                            </Disclosure.Button>
                          )}

                          {(item.mega || item.submenu) && (
                            <Transition
                              show={open}
                              enter="transition duration-200 ease-out"
                              enterFrom="transform scale-95 opacity-0"
                              enterTo="transform scale-100 opacity-100"
                              leave="transition duration-150 ease-out"
                              leaveFrom="transform scale-100 opacity-100"
                              leaveTo="transform scale-95 opacity-0"
                            >
                              <Disclosure.Panel className="mt-2 ml-4 space-y-2">
                                {item.mega ? (
                                  item.submenu.map((section, sectionIndex) => (
                                    <div key={section.title} className="py-2">
                                      <h3 className="text-xs font-bold text-atm-primary mb-3 uppercase tracking-wider px-4 flex items-center">
                                        <div className="w-1 h-4 bg-gradient-to-b from-atm-primary to-atm-secondary rounded-full mr-2"></div>
                                        {section.title}
                                      </h3>
                                      {section.items.map((subItem, subIndex) => (
                                        <Link
                                          key={subItem.name}
                                          to={subItem.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block px-4 py-3 text-sm text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-atm-primary/80 hover:to-atm-secondary/80 rounded-lg transition-all duration-200 transform hover:scale-105 hover:translate-x-2 bg-white/40 backdrop-blur-sm border border-white/20 mb-2"
                                          style={{ animationDelay: `${(sectionIndex * 100) + (subIndex * 50)}ms` }}
                                        >
                                          <div className="font-medium">{subItem.name}</div>
                                          <div className="text-xs opacity-70 mt-1">{subItem.description}</div>
                                        </Link>
                                      ))}
                                    </div>
                                  ))
                                ) : (
                                  item.submenu.map((subItem, subIndex) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block px-4 py-3 text-sm text-gray-600 hover:text-white hover:bg-gradient-to-r hover:from-atm-primary/80 hover:to-atm-secondary/80 rounded-lg transition-all duration-200 transform hover:scale-105 hover:translate-x-2 bg-white/40 backdrop-blur-sm border border-white/20 mb-2"
                                      style={{ animationDelay: `${subIndex * 50}ms` }}
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))
                                )}
                              </Disclosure.Panel>
                            </Transition>
                          )}
                        </div>
                      )}
                    </Disclosure>
                  ))}
                </nav>
              </div>

              {/* Footer del menú */}
              <div className="p-4 bg-gradient-to-r from-gray-100/80 to-white/80 backdrop-blur-sm border-t border-white/30">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-2">ATM Misiones © 2025</div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </nav>

      {/* Search Bar - Fuera del navbar, alineado a la derecha */}
      <Transition
        show={showSearch}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 -translate-y-2"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-2"
      >
        <div className="relative z-40 bg-white border-b border-gray-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-end">
              <form onSubmit={handleSearch} className="relative w-full max-w-md">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar información, trámites..."
                  className="w-full pl-10 pr-20 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-atm-primary focus:border-transparent bg-gray-50 text-sm shadow-sm"
                  autoFocus
                />
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-1.5 bg-atm-primary text-white rounded-full text-sm font-medium hover:bg-atm-secondary transition-colors duration-200"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>
        </div>
      </Transition>
    </>
  );
}

export default Navbar;