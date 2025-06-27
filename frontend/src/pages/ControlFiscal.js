import React from 'react';
import {
  DocumentTextIcon,
  PencilSquareIcon,
  ClipboardIcon,
  UserGroupIcon,
} from '@heroicons/react/24/solid';
import HeroControlFiscal from '../components/HeroControlFiscal';

const quickLinks = [
  {
    title: 'Emisión de Formulario 341',
    icon: DocumentTextIcon,
    description: 'Generá el Formulario 341 para tus trámites de control fiscal.',
    href: '#',
  },
  {
    title: 'Emisión de Formulario Tasa Forestal',
    icon: PencilSquareIcon,
    description: 'Emití el formulario para la Tasa Forestal de manera online.',
    href: '#',
  },
  {
    title: 'Verificación Recibo',
    icon: ClipboardIcon,
    description: 'Verificá la validez de tus recibos emitidos.',
    href: '#',
  },
  {
    title: 'Autogestión',
    icon: UserGroupIcon,
    description: 'Gestioná tus trámites de control fiscal de forma autónoma.',
    href: '#',
  },
];

export default function ControlFiscal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Hero Section */}
      <HeroControlFiscal />
      {/* Quick Links Grid Mejorado */}
      <section className="max-w-7xl mx-auto -mt-24 z-10 relative px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {quickLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="backdrop-blur-xl bg-white/70 border border-pink-100 rounded-3xl shadow-2xl p-10 flex flex-col items-center transition-all hover:-translate-y-2 hover:shadow-pink-200/80 hover:bg-white/90 group duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-200 via-pink-100 to-pink-50 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <link.icon className="h-10 w-10 text-pink-500 drop-shadow" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-extrabold text-gray-800 mb-2 tracking-tight group-hover:text-pink-600 transition-colors">
                  {link.title}
                </h3>
                {link.description && (
                  <p className="text-gray-500 text-base font-medium mb-1 group-hover:text-gray-700 transition-colors">{link.description}</p>
                )}
              </div>
              <span className="mt-4 text-pink-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">Ir &rarr;</span>
            </a>
          ))}
        </div>
      </section>
      {/* Línea divisoria animada */}
      <div className="flex justify-center my-16">
        <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-pink-200 to-pink-400 rounded-full animate-pulse shadow-lg" />
      </div>
    </div>
  );
}