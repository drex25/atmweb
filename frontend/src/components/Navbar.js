import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
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
      { name: 'Sellos', href: '/tramites/sellos' },
      { name: 'Ingresos Brutos', href: '/tramites/ingresos-brutos' },
      { name: 'Impuesto Inmobiliario', href: '/tramites/inmobiliario' },
      { name: 'Control Fiscal en ruta', href: '/tramites/control-fiscal' },
      { name: 'Tasas y Aranceles', href: '/tramites/tasas-aranceles' },
      { name: 'Vehículos', href: '/tramites/vehiculos' },
      { name: 'Otros trámites', href: '/tramites/otros' },
    ],
  },
  {
    name: 'Información Fiscal',
    mega: true,
    icon: BuildingLibraryIcon,
    submenu: [
      { name: 'Normativas', href: '/info/normativas' },
      { name: 'Documentación y Estadísticas', href: '/info/documentacion-estadisticas' },
      { name: 'Padrones Productores', href: '/info/padrones-productores' },
      { name: 'Exenciones Impositivas', href: '/info/exenciones' },
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

  // Función para manejar hover en desktop
  const handleMouseEnter = (name) => setOpenMenu(name);
  const handleMouseLeave = () => setOpenMenu(null);

  const handleSearch = (e) => {
    e.preventDefault();
    // Aquí puedes implementar la lógica de búsqueda
    console.log('Searching for:', searchTerm);
  };

  return (
    <Disclosure as="nav" className="sticky top-0 z-50 bg-gradient-to-r from-atm-primary/80 to-atm-secondary/80 backdrop-blur-md shadow-xl transition-all">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="flex items-center space-x-2">
                    <img
                      src="/logo-atm.png"
                      alt="ATM Misiones"
                      className="h-10 w-auto drop-shadow-md"
                    />
                    <span className="text-white font-bold text-xl tracking-wide drop-shadow">ATM Misiones</span>
                  </Link>
                </div>
              </div>
              {/* Buscador */}
              <div className="hidden md:block flex-1 mx-8">
                <form onSubmit={handleSearch} className="flex items-center bg-white/80 rounded-full shadow-inner px-2 py-1 focus-within:ring-2 focus-within:ring-atm-primary transition-all">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-2" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Buscar en ATM Misiones..."
                    className="flex-1 bg-transparent outline-none px-3 py-2 text-gray-700 rounded-full"
                  />
                  <button
                    type="submit"
                    className="bg-atm-accent text-white rounded-full px-4 py-2 ml-2 font-semibold shadow hover:bg-opacity-90 transition-all"
                  >
                    Buscar
                  </button>
                </form>
              </div>
              {/* Menú principal */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-2 relative">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <div
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className="flex items-center gap-2 text-white hover:bg-white/10 hover:text-atm-accent px-4 py-2 rounded-full text-base font-medium transition-all shadow-sm"
                        >
                          {item.icon && <item.icon className="h-5 w-5" />}
                          {item.name}
                          <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Mega menú o submenú */}
                        {item.mega ? (
                          openMenu === item.name && (
                            <div className="absolute left-0 mt-3 w-[32rem] bg-white/95 shadow-2xl rounded-2xl z-30 p-6 grid grid-cols-2 gap-6 animate-fade-in border border-gray-100 backdrop-blur-xl">
                              {item.submenu.map((sub, idx) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="block text-gray-700 hover:text-atm-primary py-2 px-3 rounded-lg transition-colors text-lg font-medium hover:bg-atm-primary/10"
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="text-xl">•</span>
                                    <span>{sub.name}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )
                        ) : (
                          openMenu === item.name && (
                            <div className="absolute left-0 mt-3 w-56 bg-white/95 shadow-2xl rounded-2xl z-30 animate-fade-in border border-gray-100 backdrop-blur-xl">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="block text-gray-700 hover:text-atm-primary py-2 px-4 rounded-lg transition-colors font-medium hover:bg-atm-primary/10"
                                >
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          )
                        )}
                      </div>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex items-center gap-2 text-white hover:bg-white/10 hover:text-atm-accent px-4 py-2 rounded-full text-base font-medium transition-all shadow-sm"
                      >
                        {item.icon && <item.icon className="h-5 w-5" />}
                        {item.name}
                      </Link>
                    )
                  )}
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-atm-secondary focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          {/* Menú móvil */}
          <Disclosure.Panel className="md:hidden bg-white/95 backdrop-blur-xl shadow-xl border-b border-gray-100 animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="mb-2">
                    <span className="flex items-center gap-2 text-atm-primary font-semibold px-3 py-2">
                      {item.icon && <item.icon className="h-5 w-5" />}
                      {item.name}
                    </span>
                    <div className="pl-6">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block text-gray-700 hover:bg-atm-primary/10 hover:text-atm-primary px-3 py-2 rounded-md text-base font-medium transition-colors"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="flex items-center gap-2 text-atm-primary hover:bg-atm-primary/10 hover:text-atm-accent block px-3 py-2 rounded-md text-base font-medium transition-colors"
                  >
                    {item.icon && <item.icon className="h-5 w-5" />}
                    {item.name}
                  </Link>
                )
              )}
              {/* Buscador móvil */}
              <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full shadow-inner px-2 py-1 mt-4">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-2" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar en ATM Misiones..."
                  className="flex-1 bg-transparent outline-none px-3 py-2 text-gray-700 rounded-full"
                />
                <button
                  type="submit"
                  className="bg-atm-accent text-white rounded-full px-4 py-2 ml-2 font-semibold shadow hover:bg-opacity-90 transition-all"
                >
                  Buscar
                </button>
              </form>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;