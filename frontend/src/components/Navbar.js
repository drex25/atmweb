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
    <nav className="sticky top-0 z-50 w-full bg-white/60 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo a la izquierda */}
          <div className="flex items-center flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="/logo-atm.png"
                alt="ATM Misiones"
                className="h-10 w-auto drop-shadow"
              />
              <span className="text-atm-primary font-bold text-xl tracking-wide drop-shadow">ATM Misiones</span>
            </Link>
          </div>

          {/* Menú desktop centrado */}
          <div className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-2 bg-white/40 rounded-full px-6 py-2 shadow-inner">
              {navigation.map((item) =>
                item.submenu ? (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => handleMouseEnter(item.name)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <button className="px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-white/70 transition-all focus:outline-none">
                      {item.name}
                    </button>
                    <Transition
                      show={openMenu === item.name}
                      enter="transition ease-out duration-150"
                      enterFrom="opacity-0 translate-y-2"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-2"
                    >
                      <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl py-2 z-30">
                        {item.submenu.map((sub) => (
                          <Link
                            key={sub.name}
                            to={sub.href}
                            className="block px-4 py-2 text-gray-700 rounded-xl hover:bg-atm-primary/10 hover:text-atm-primary transition-colors"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </Transition>
                  </div>
                ) : (
                  <li key={item.name}>
                    <Link
                      to={item.href}
                      className="px-4 py-2 rounded-full text-gray-700 font-medium hover:bg-white/70 transition-all"
                    >
                      {item.name}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Buscador a la derecha */}
          <div className="hidden md:flex items-center ml-4">
            <form onSubmit={handleSearch} className="flex items-center bg-white/80 rounded-full shadow-inner px-3 py-1 focus-within:ring-2 focus-within:ring-atm-primary transition-all">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar..."
                className="flex-1 bg-transparent outline-none px-2 py-1 text-gray-700 rounded-full"
              />
              <button
                type="submit"
                className="ml-2 bg-atm-primary text-white rounded-full px-4 py-1 font-semibold shadow hover:bg-opacity-90 transition-all"
              >
                Buscar
              </button>
            </form>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileOpen(true)}
              className="p-2 rounded-full bg-white/70 hover:bg-atm-primary/10 text-atm-primary focus:outline-none"
            >
              <MenuIcon className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil tipo off-canvas */}
      <Transition show={mobileOpen}>
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="absolute top-0 left-0 h-full w-72 bg-white/95 shadow-2xl p-6 flex flex-col gap-6 animate-slide-in rounded-tr-3xl rounded-br-3xl">
            <div className="flex items-center justify-between mb-4">
              <Link to="/" className="flex items-center space-x-2" onClick={() => setMobileOpen(false)}>
                <img src="/logo-atm.png" alt="ATM Misiones" className="h-10 w-auto" />
                <span className="text-atm-primary font-bold text-xl">ATM</span>
              </Link>
              <button onClick={() => setMobileOpen(false)} className="p-2 rounded-full hover:bg-atm-primary/10">
                <XIcon className="h-7 w-7 text-atm-primary" />
              </button>
            </div>
            <nav className="flex-1 flex flex-col gap-2">
              {navigation.map((item) =>
                item.submenu ? (
                  <Disclosure key={item.name}>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="w-full flex justify-between items-center px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-atm-primary/10 transition-all">
                          <span>{item.name}</span>
                          <svg className={`h-4 w-4 ml-2 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                          </svg>
                        </Disclosure.Button>
                        <Disclosure.Panel className="pl-4 flex flex-col gap-1 mt-1">
                          {item.submenu.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block px-4 py-2 rounded-lg text-gray-600 hover:bg-atm-primary/10 hover:text-atm-primary transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {sub.name}
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
                    className="block px-4 py-2 rounded-xl text-gray-700 font-medium hover:bg-atm-primary/10 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                )
              )}
            </nav>
            <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full shadow-inner px-3 py-1 mt-4">
              <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar..."
                className="flex-1 bg-transparent outline-none px-2 py-1 text-gray-700 rounded-full"
              />
              <button
                type="submit"
                className="ml-2 bg-atm-primary text-white rounded-full px-4 py-1 font-semibold shadow hover:bg-opacity-90 transition-all"
              >
                Buscar
              </button>
            </form>
          </div>
        </div>
      </Transition>
    </nav>
  );
}

export default Navbar;