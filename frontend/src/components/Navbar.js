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
          { name: 'Normativas', href: '/informacion-fiscal/normativas', description: 'Leyes y reglamentos' },
          { name: 'Estadísticas', href: '/informacion-fiscal/estadisticas', description: 'Informes y datos' },
        ]
      },
      {
        title: 'Registros',
        items: [
          { name: 'Padrones', href: '/informacion-fiscal/padrones', description: 'Registro de contribuyentes' },
          { name: 'Exenciones', href: '/informacion-fiscal/exenciones', description: 'Beneficios fiscales' },
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
      <nav className="sticky top-0 z-50 w-full bg-white shadow-2xl border-b border-gray-200">
        {/* Contenedor principal con full width */}
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          <div className="flex items-center justify-between h-20">
            {/* Logo Section - Mejorado */}
            <div className="flex-shrink-0 flex items-center gap-4">
              <Link to="/" aria-label="Ir al inicio">
                <img
                  src="/logo-atm.png"
                  alt="ATM Misiones"
                  className="h-14 w-auto drop-shadow-sm hover:drop-shadow-md transition-all duration-200"
                />
              </Link>
              <div className="w-px h-10 bg-gray-300"></div>
              <Link to="/ods" aria-label="ODS Misiones">
                <img
                  src="/ods.png"
                  alt="ODS Misiones"
                  className="h-10 w-auto drop-shadow-sm transition-all duration-200"
                />
              </Link>
            </div>

            {/* Desktop Navigation - Centrado y expandido */}
            <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-2">
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
                          className="flex items-center px-4 py-2 rounded-lg font-semibold text-base text-gray-700 hover:text-atm-primary hover:bg-gray-50 transition-all duration-200 group"
                        >
                          <item.icon className="h-5 w-5 mr-2 text-atm-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                          <span>{item.name}</span>
                        </Link>
                      ) : (
                        <button
                          className={`flex items-center px-4 py-2 rounded-lg font-semibold text-base transition-all duration-200 group ${
                            openMenu === item.name
                              ? 'text-atm-primary bg-gray-50'
                              : 'text-gray-700 hover:text-atm-primary hover:bg-gray-50'
                          }`}
                          aria-haspopup="true"
                          aria-expanded={openMenu === item.name}
                        >
                          <item.icon className="h-5 w-5 mr-2 text-atm-primary opacity-70 group-hover:opacity-100 transition-opacity" />
                          <span>{item.name}</span>
                          <ChevronDownIcon className={`ml-2 h-5 w-5 text-atm-primary transition-transform duration-200 ${
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
            </div>

            {/* Search and Mobile Menu - Derecha */}
            <div className="flex items-center space-x-4">
              {/* Search Button - Mejorado */}
              <button
                type="button"
                onClick={() => setShowSearch(!showSearch)}
                className="p-3 rounded-full text-gray-500 hover:text-atm-primary hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-atm-primary focus:ring-offset-2"
                aria-label="Buscar"
              >
                <MagnifyingGlassIcon className="h-6 w-6" />
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
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            {/* Panel */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white flex flex-col h-full shadow-2xl">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center space-x-2">
                  <img src="/logo-atm.png" alt="ATM" className="h-10 w-auto" />
                  <span className="font-bold text-lg text-atm-primary"></span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-full hover:bg-gray-100"
                >
                  <XIcon className="h-6 w-6 text-gray-700" />
                </button>
              </div>
              {/* Menú principal */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-1">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <Disclosure key={item.name}>
                        {({ open }) => (
                          <>
                            <Disclosure.Button className="flex items-center w-full px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 font-medium justify-between">
                              <span className="flex items-center">
                                <item.icon className="h-5 w-5 mr-2 text-atm-primary" />
                                {item.name}
                              </span>
                              <ChevronDownIcon
                                className={`h-5 w-5 text-atm-primary transition-transform ${open ? 'rotate-180' : ''}`}
                              />
                            </Disclosure.Button>
                            <Disclosure.Panel className="pl-8 py-1 space-y-1">
                              {item.mega
                                ? item.submenu.map((section) => (
                                    <div key={section.title}>
                                      <div className="text-xs font-bold text-atm-primary mb-1">{section.title}</div>
                                      {section.items.map((subItem) => (
                                        <Link
                                          key={subItem.name}
                                          to={subItem.href}
                                          onClick={() => setMobileOpen(false)}
                                          className="block py-2 text-gray-600 hover:text-atm-primary"
                                        >
                                          {subItem.name}
                                        </Link>
                                      ))}
                                    </div>
                                  ))
                                : item.submenu.map((subItem) => (
                                    <Link
                                      key={subItem.name}
                                      to={subItem.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="block py-2 text-gray-600 hover:text-atm-primary"
                                    >
                                      {subItem.name}
                                    </Link>
                                  ))}
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 font-medium"
                      >
                        <item.icon className="h-5 w-5 mr-2 text-atm-primary" />
                        {item.name}
                      </Link>
                    )
                  )}
                </nav>
              </div>
              {/* Bloques especiales */}
              <div className="p-4 border-t space-y-4">
                <a
                  href="tel:0810-444-5505"
                  className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white rounded-xl font-bold text-lg shadow hover:from-emerald-600 hover:to-cyan-600"
                >
                  <PhoneIcon className="h-5 w-5 mr-2" />
                  0810-444-5505
                </a>
                <button className="flex items-center justify-center w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold text-lg shadow hover:from-blue-700 hover:to-purple-700">
                  <KeyIcon className="h-5 w-5 mr-2" />
                  Ingresar con Clave Fiscal
                </button>
                <div className="bg-white/90 rounded-2xl shadow p-4 mt-2">
                  <div className="flex items-center mb-2">
                    <QuestionMarkCircleIcon className="h-6 w-6 text-amber-500 mr-2" />
                    <span className="font-semibold text-gray-800 text-sm">¿No tenés Clave Fiscal?</span>
                  </div>
                  <p className="text-xs text-gray-500 mb-3">Accedé a todos nuestros servicios:</p>
                  <div className="space-y-2">
                    <button className="flex items-center w-full px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-lg font-semibold shadow hover:from-orange-600 hover:to-red-600 transition">
                      <CreditCardIcon className="h-5 w-5 mr-2" />
                      Obtenela
                    </button>
                    <button className="flex items-center w-full px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow hover:from-purple-600 hover:to-pink-600 transition">
                      <DocumentTextIcon className="h-5 w-5 mr-2" />
                      Constancia de Inscripción
                    </button>
                    <button className="flex items-center w-full px-4 py-2 bg-gradient-to-r from-teal-500 to-blue-500 text-white rounded-lg font-semibold shadow hover:from-teal-600 hover:to-blue-600 transition">
                      <PlayCircleIcon className="h-5 w-5 mr-2" />
                      Guía para Clave Fiscal
                    </button>
                  </div>
                </div>
              </div>
              {/* Footer */}
              <div className="p-2 text-center text-xs text-gray-400 border-t">ATM Misiones © 2025</div>
            </div>
          </div>
        </Transition>
      </nav>

      {/* Search Bar Profesional - Estilo Modal Expandido */}
      <Transition
        show={showSearch}
        enter="transition ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black/20 z-[99] transition-opacity" onClick={() => setShowSearch(false)} />

          {/* Modal de búsqueda profesional */}
          <div className="fixed top-24 left-1/2 transform -translate-x-1/2 z-[100] w-full max-w-2xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
              {/* Header del modal */}
              <div className="flex items-center justify-between p-4 border-b border-gray-100 bg-gray-50">
                <div className="flex items-center gap-3">
                  <MagnifyingGlassIcon className="h-6 w-6 text-atm-primary" />
                  <span className="font-semibold text-gray-800">Buscar en ATM Misiones</span>
                </div>
                <button
                  onClick={() => setShowSearch(false)}
                  className="p-2 rounded-full hover:bg-gray-200 text-gray-500 hover:text-gray-700 transition-all"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              {/* Campo de búsqueda */}
              <div className="p-6">
                <form onSubmit={handleSearch} className="relative">
                  <div className="relative">
                    <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar información, trámites, normativas..."
                      className="w-full pl-12 pr-24 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-atm-primary focus:border-transparent bg-gray-50 hover:bg-white transition-all"
                      autoFocus
                    />
                    <button
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-atm-primary text-white rounded-lg font-semibold hover:bg-atm-secondary transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Buscar
                    </button>
                  </div>
                </form>

                {/* Sugerencias rápidas */}
                <div className="mt-6">
                  <p className="text-sm font-medium text-gray-600 mb-3">Búsquedas populares:</p>
                  <div className="flex flex-wrap gap-2">
                    {['Ingresos Brutos', 'Clave Fiscal', 'Exenciones', 'Sellos', 'Inmobiliario'].map((suggestion) => (
                      <button
                        key={suggestion}
                        onClick={() => {
                          setSearchTerm(suggestion);
                          handleSearch({ preventDefault: () => {} });
                        }}
                        className="px-4 py-2 bg-gray-100 hover:bg-atm-primary hover:text-white text-gray-700 rounded-full text-sm font-medium transition-all duration-200"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      </Transition>
    </>
  );
}

export default Navbar;