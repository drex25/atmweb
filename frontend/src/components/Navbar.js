import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Nueva estructura de navegación con submenús y mega menú
const navigation = [
  { name: 'Inicio', href: '/' },
  { name: 'Autogestión Tributaria', href: '/autogestion' },
  {
    name: 'Trámites',
    mega: true,
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
    submenu: [
      { name: 'Normativas', href: '/info/normativas' },
      { name: 'Documentación y Estadísticas', href: '/info/documentacion-estadisticas' },
      { name: 'Padrones Productores', href: '/info/padrones-productores' },
      { name: 'Exenciones Impositivas', href: '/info/exenciones' },
    ],
  },
  { name: 'Beneficios ATM', href: '/beneficios' },
  {
    name: 'Institucional',
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
    <Disclosure as="nav" className="bg-gradient-to-r from-atm-primary to-atm-secondary">
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
                      className="h-10 w-auto"
                    />
                    <span className="text-white font-bold text-xl">ATM Misiones</span>
                  </Link>
                </div>
              </div>
              
              {/* Buscador */}
              <div className="hidden md:block">
                <form onSubmit={handleSearch} className="flex items-center space-x-2">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Buscar en ATM Misiones..."
                      className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-atm-primary transition-all"
                    />
                    <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  </div>
                  <button
                    type="submit"
                    className="bg-atm-accent text-white rounded-lg hover:bg-opacity-90 transition-all"
                  >
                    Buscar
                  </button>
                </form>
              </div>

              {/* Menú principal */}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 relative">
                  {navigation.map((item) =>
                    item.submenu ? (
                      <div
                        key={item.name}
                        className="relative group"
                        onMouseEnter={() => handleMouseEnter(item.name)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <button
                          className="text-white hover:bg-atm-secondary/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all flex items-center"
                        >
                          {item.name}
                          <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        {/* Mega menú o submenú */}
                        {item.mega ? (
                          openMenu === item.name && (
                            <div className="absolute left-0 mt-2 w-[32rem] bg-white shadow-xl rounded-xl z-20 p-6 grid grid-cols-2 gap-6 animate-fade-in">
                              {item.submenu.map((sub, idx) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="block text-gray-700 hover:text-atm-primary py-2 px-3 rounded-lg transition-colors"
                                >
                                  <div className="flex items-center space-x-2">
                                    <span className="text-lg">•</span>
                                    <span>{sub.name}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          )
                        ) : (
                          openMenu === item.name && (
                            <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-xl z-20 animate-fade-in">
                              {item.submenu.map((sub) => (
                                <Link
                                  key={sub.name}
                                  to={sub.href}
                                  className="block text-gray-700 hover:text-atm-primary py-2 px-4 rounded-lg transition-colors"
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
                        className="text-white hover:bg-atm-secondary/80 hover:text-white px-3 py-2 rounded-lg text-sm font-medium transition-all"
                      >
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
          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) =>
                item.submenu ? (
                  <div key={item.name} className="mb-2">
                    <span className="block text-gray-300 font-semibold px-3 py-2">{item.name}</span>
                    <div className="pl-4">
                      {item.submenu.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="text-gray-300 hover:bg-atm-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
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
                    className="text-gray-300 hover:bg-atm-secondary hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    {item.name}
                  </Link>
                )
              )}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;