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
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm transition-opacity duration-300" 
              onClick={() => setMobileOpen(false)} 
            />
            
            {/* Menu Panel */}
            <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl transform transition-transform duration-300">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Link to="/" onClick={() => setMobileOpen(false)}>
                  <img src="/logo-atm.png" alt="ATM Misiones" className="h-10 w-auto" />
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation - Sin búsqueda duplicada */}
              <div className="flex-1 overflow-y-auto p-4">
                <nav className="space-y-2">
                  {navigation.map((item) => (
                    <Disclosure key={item.name}>
                      {({ open }) => (
                        <>
                          {item.href ? (
                            <Link
                              to={item.href}
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center w-full px-4 py-3 text-gray-700 hover:text-atm-primary hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium"
                            >
                              <item.icon className="h-5 w-5 mr-3 text-atm-primary" />
                              {item.name}
                            </Link>
                          ) : (
                            <Disclosure.Button className="flex items-center justify-between w-full px-4 py-3 text-gray-700 hover:text-atm-primary hover:bg-gray-50 rounded-lg transition-colors duration-200 font-medium">
                              <div className="flex items-center">
                                <item.icon className="h-5 w-5 mr-3 text-atm-primary" />
                                {item.name}
                              </div>
                              <ChevronDownIcon
                                className={`h-5 w-5 text-atm-primary transition-transform duration-200 ${
                                  open ? 'rotate-180' : ''
                                }`}
                              />
                            </Disclosure.Button>
                          )}

                          {(item.mega || item.submenu) && (
                            <Disclosure.Panel className="pl-4 mt-2 space-y-1">
                              {item.mega ? (
                                item.submenu.map((section) => (
                                  <div key={section.title} className="py-2">
                                    <h3 className="text-xs font-semibold text-atm-primary mb-2 uppercase tracking-wide px-4">
                                      {section.title}
                                    </h3>
                                    {section.items.map((subItem) => (
                                      <Link
                                        key={subItem.name}
                                        to={subItem.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="block px-4 py-2 text-sm text-gray-600 hover:text-atm-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                      >
                                        {subItem.name}
                                      </Link>
                                    ))}
                                  </div>
                                ))
                              ) : (
                                item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-2 text-sm text-gray-600 hover:text-atm-primary hover:bg-gray-50 rounded-lg transition-colors duration-200"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))
                              )}
                            </Disclosure.Panel>
                          )}
                        </>
                      )}
                    </Disclosure>
                  ))}
                </nav>
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