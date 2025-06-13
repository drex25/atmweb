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

  // Función para manejar hover en desktop
  const handleMouseEnter = (name) => setOpenMenu(name);
  const handleMouseLeave = () => setOpenMenu(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda
    console.log('Searching for:', searchTerm);
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img src="/logo-atm.png" alt="ATM Misiones" className="h-10 w-auto" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 w-full justify-center">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => handleMouseEnter(item.name)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`flex items-center px-4 py-2 rounded-lg font-medium transition-colors duration-200 whitespace-nowrap
                ${openMenu === item.name ? 'bg-atm-primary/10 text-atm-primary' : 'text-gray-700 hover:bg-atm-primary/5 hover:text-atm-primary'}`}
                >
                  {item.icon && <item.icon className="h-5 w-5 mr-2 text-atm-primary" />}
                  <span>{item.name}</span>
                  {(item.mega || item.submenu) && (
                    <ChevronDownIcon className="ml-1 h-4 w-4 text-atm-primary" />
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
                    <div className="absolute left-0 mt-3 w-screen max-w-4xl bg-white rounded-2xl shadow-2xl border border-gray-100 p-8 grid grid-cols-3 gap-8 z-30 animate-fade-in">
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
                                <p className="text-sm font-bold text-gray-900 group-hover:text-atm-primary mb-1 whitespace-nowrap">
                                  {subItem.name}
                                </p>
                                <p className="text-xs text-gray-500 group-hover:text-gray-700 whitespace-nowrap">
                                  {subItem.description}
                                </p>
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
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-atm-primary/10 hover:text-atm-primary rounded-lg whitespace-nowrap"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Transition>
                )}
              </div>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center ml-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar..."
                className="w-64 pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-atm-primary focus:border-transparent bg-gray-50"
              />
              <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </form>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-md text-gray-700 hover:text-atm-primary focus:outline-none"
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <Transition show={mobileOpen}>
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <Link to="/" onClick={() => setMobileOpen(false)}>
                <img src="/logo-atm.png" alt="ATM Misiones" className="h-8 w-auto" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-md text-gray-700 hover:text-atm-primary"
              >
                <XIcon className="h-6 w-6" />
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
                    className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-atm-primary bg-gray-50"
                  />
                  <MagnifyingGlassIcon className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </form>

              <nav className="space-y-1">
                {navigation.map((item) => (
                  <Disclosure key={item.name}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-atm-primary/10 rounded-lg font-medium">
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
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-atm-primary/10 rounded-lg"
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
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-atm-primary/10 rounded-lg"
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