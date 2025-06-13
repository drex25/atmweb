import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Disclosure } from '@headlessui/react';
import { Bars3Icon as MenuIcon, XMarkIcon as XIcon } from '@heroicons/react/24/outline';

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

  // Función para manejar hover en desktop
  const handleMouseEnter = (name) => setOpenMenu(name);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <Disclosure as="nav" className="bg-atm-primary">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link to="/" className="text-white font-bold text-xl">
                    ATM Misiones
                  </Link>
                </div>
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
                            className="text-gray-300 hover:bg-atm-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium focus:outline-none flex items-center"
                          >
                            {item.name}
                            <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                          </button>
                          {/* Mega menú o submenú */}
                          {item.mega ? (
                            openMenu === item.name && (
                              <div className="absolute left-0 mt-2 w-[32rem] bg-white shadow-lg rounded-lg z-20 p-6 grid grid-cols-2 gap-4 animate-fade-in">
                                {item.submenu.map((sub, idx) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    className="block text-gray-700 hover:text-atm-primary py-2 px-2 rounded transition"
                                  >
                                    {sub.name}
                                  </Link>
                                ))}
                              </div>
                            )
                          ) : (
                            openMenu === item.name && (
                              <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg z-20 animate-fade-in">
                                {item.submenu.map((sub) => (
                                  <Link
                                    key={sub.name}
                                    to={sub.href}
                                    className="block text-gray-700 hover:text-atm-primary py-2 px-4 rounded"
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
                          className="text-gray-300 hover:bg-atm-secondary hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {item.name}
                        </Link>
                      )
                    )}
                  </div>
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
                          className="block text-gray-300 hover:bg-atm-secondary hover:text-white px-3 py-2 rounded-md text-base font-medium"
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