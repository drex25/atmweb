import React, { useState } from 'react';
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

// Nueva estructura de navegación con iconos
const navigation = [
  { name: 'Inicio', href: '/', icon: HomeIcon },
  { name: 'Autogestión Tributaria', href: '/autogestion', icon: UserGroupIcon },
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
          { name: 'Control Fiscal en ruta', href: '/tramites/control-fiscal', description: 'Verificación de documentación' },
          { name: 'Tasas y Aranceles', href: '/tramites/tasas-aranceles', description: 'Pagos y gestiones' },
          { name: 'Vehículos', href: '/tramites/vehiculos', description: 'Impuestos vehiculares' },
        ]
      },
      {
        title: 'Otros Servicios',
        items: [
          { name: 'Otros trámites', href: '/tramites/otros', description: 'Servicios adicionales' },
        ]
      }
    ],
  },
  {
    name: 'Información Fiscal',
    mega: true,
    icon: BuildingLibraryIcon,
    submenu: [
      {
        title: 'Documentación',
        items: [
          { name: 'Normativas', href: '/info/normativas', description: 'Leyes y reglamentos vigentes' },
          { name: 'Documentación y Estadísticas', href: '/info/documentacion-estadisticas', description: 'Informes y datos' },
        ]
      },
      {
        title: 'Registros',
        items: [
          { name: 'Padrones Productores', href: '/info/padrones-productores', description: 'Registro de contribuyentes' },
          { name: 'Exenciones Impositivas', href: '/info/exenciones', description: 'Beneficios y excepciones' },
        ]
      }
    ],
  },
  { name: 'Beneficios ATM', href: '/beneficios', icon: GiftIcon },
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
  const [showSearch, setShowSearch] = useState(false); // Nuevo estado para mostrar el input

  // Función para manejar hover en desktop
  const handleMouseEnter = (name) => setOpenMenu(name);
  const handleMouseLeave = () => setOpenMenu(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex items-center h-20 w-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center" style={{ minWidth: '160px' }}>
            <Link to="/" aria-label="Ir al inicio">
              <img src="/logo-atm.png" alt="ATM Misiones" className="h-16 w-auto drop-shadow-md" style={{ marginLeft: '-12px' }} />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <div className="flex-1 flex items-center justify-center">
            <ul className="flex flex-row flex-wrap items-center gap-1 w-full justify-center">
              {navigation.map((item) => (
                <li key={item.name} className="relative group">
                  <div
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button
                      className={`flex items-center px-3 py-1.5 rounded-lg font-medium text-sm transition-all duration-200 whitespace-nowrap shadow-sm focus:outline-none focus:ring-2 focus:ring-atm-primary/40 ${openMenu === item.name ? 'bg-atm-primary/10 text-atm-primary' : 'text-gray-700 hover:bg-atm-primary/10 hover:text-atm-primary'}`}
                      aria-haspopup={item.mega || item.submenu ? 'true' : undefined}
                      aria-expanded={openMenu === item.name}
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-1 text-atm-primary" />}
                      <span>{item.name}</span>
                      {(item.mega || item.submenu) && (
                        <ChevronDownIcon className="ml-1 h-3.5 w-3.5 text-atm-primary transition-transform duration-200 group-hover:rotate-180" />
                      )}
                    </button>
                    {/* Mega menú */}
                    {item.mega && openMenu === item.name && (
                      <Transition
                        show={openMenu === item.name}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-2"
                      >
                        <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-[900px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-1 md:grid-cols-3 gap-8 z-30 animate-fade-in">
                          {item.submenu.map((section) => (
                            <div key={section.title}>
                              <h3 className="text-base font-semibold text-atm-primary mb-4 whitespace-nowrap">{section.title}</h3>
                              <div className="space-y-4">
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    className="block group"
                                  >
                                    <p className="text-sm font-bold text-gray-900 group-hover:text-atm-primary mb-1 whitespace-nowrap transition-colors">{subItem.name}</p>
                                    <p className="text-xs text-gray-500 group-hover:text-gray-700 whitespace-nowrap transition-colors">{subItem.description}</p>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </Transition>
                    )}
                    {/* Submenú simple */}
                    {!item.mega && item.submenu && openMenu === item.name && (
                      <Transition
                        show={openMenu === item.name}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-2"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-2"
                      >
                        <div className="absolute left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 z-30 animate-fade-in">
                          <div className="py-2">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-atm-primary/10 hover:text-atm-primary rounded-lg whitespace-nowrap transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </Transition>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {/* Search Icon Only (Desktop) */}
          <div className="hidden md:flex items-center ml-2">
            <button
              type="button"
              onClick={() => setShowSearch((v) => !v)}
              className="p-2 rounded-full hover:bg-atm-primary/10 focus:outline-none focus:ring-2 focus:ring-atm-primary/40"
              aria-label="Mostrar buscador"
            >
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
            </button>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md text-gray-700 hover:text-atm-primary focus:outline-none focus:ring-2 focus:ring-atm-primary/40"
              aria-label="Abrir menú móvil"
            >
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
      {/* SearchBar desplegable debajo del menú (solo desktop) */}
      {showSearch && (
        <div className="hidden md:flex w-full justify-center bg-white border-b border-gray-100 shadow animate-fade-in-down">
          <form onSubmit={handleSearch} className="relative w-full max-w-md py-4 flex justify-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar..."
              className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-atm-primary focus:border-transparent bg-gray-50 shadow-sm text-base"
              aria-label="Buscar"
              autoFocus
            />
            <MagnifyingGlassIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          </form>
        </div>
      )}
      {/* Mobile menu */}
      <Transition show={mobileOpen}>
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" onClick={() => setMobileOpen(false)} aria-label="Cerrar menú móvil" />
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-2xl rounded-l-2xl transition-transform duration-300">
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" onClick={() => setMobileOpen(false)} aria-label="Ir al inicio">
                <img src="/logo-atm.png" alt="ATM Misiones" className="h-10 w-auto" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-atm-primary focus:outline-none focus:ring-2 focus:ring-atm-primary/40"
                aria-label="Cerrar menú móvil"
              >
                <XIcon className="h-7 w-7" />
              </button>
            </div>
            <div className="p-4">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar..."
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-atm-primary bg-gray-50 shadow-sm"
                    aria-label="Buscar"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>
              <nav className="space-y-1" role="menu" aria-label="Menú principal móvil">
                {navigation.map((item) => (
                  <Disclosure key={item.name}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-atm-primary/10 rounded-lg font-semibold focus:outline-none focus:ring-2 focus:ring-atm-primary/40 transition-all">
                          <span className="flex items-center">
                            {item.icon && <item.icon className="h-5 w-5 mr-2 text-atm-primary" />}
                            {item.name}
                          </span>
                          {item.submenu && (
                            <ChevronDownIcon
                              className={`h-5 w-5 transform transition-transform ${open ? 'rotate-180' : ''}`}
                            />
                          )}
                        </Disclosure.Button>
                        {item.mega && item.submenu && (
                          <Disclosure.Panel className="pl-4 space-y-2">
                            {item.submenu.map((section) => (
                              <div key={section.title} className="py-2">
                                <h3 className="text-sm font-semibold text-atm-primary mb-2">
                                  {section.title}
                                </h3>
                                {section.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.href}
                                    onClick={() => setMobileOpen(false)}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-atm-primary/10 rounded-lg transition-colors"
                                  >
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            ))}
                          </Disclosure.Panel>
                        )}
                        {!item.mega && item.submenu && (
                          <Disclosure.Panel className="pl-4 space-y-1">
                            {item.submenu.map((subItem) => (
                              <Link
                                key={subItem.name}
                                to={subItem.href}
                                onClick={() => setMobileOpen(false)}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-atm-primary/10 rounded-lg transition-colors"
                              >
                                {subItem.name}
                              </Link>
                            ))}
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
  );
}

export default Navbar;