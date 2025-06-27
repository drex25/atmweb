import React from 'react';
import { ClipboardDocumentCheckIcon, UsersIcon, DocumentTextIcon, ScaleIcon, BookOpenIcon, CalendarIcon, DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import HeroNormativas from '../components/HeroNormativas';

const quickLinks = [
  {
    title: 'Consulta de Resoluciones',
    icon: DocumentTextIcon,
    description: 'Accedé a resoluciones tributarias vigentes.',
    href: '#',
  },
  {
    title: 'Consulta de Leyes Tributarias',
    icon: ClipboardDocumentCheckIcon,
    description: 'Consultá leyes tributarias actualizadas.',
    href: '#',
  },
  {
    title: 'Consulta de Decretos',
    icon: UsersIcon,
    description: 'Revisá decretos relacionados a normativas fiscales.',
    href: '#',
  },
];

const interestLinks = [
  {
    title: 'Digesto Jurídico Provincia de Misiones',
    icon: BookOpenIcon,
    href: '#',
  },
  {
    title: 'Código Fiscal',
    icon: DocumentDuplicateIcon,
    href: '#',
  },
  {
    title: 'Ley de Alícuotas',
    icon: ScaleIcon,
    href: '#',
  },
  {
    title: 'Vencimientos Fiscales (años anteriores)',
    icon: CalendarIcon,
    href: '#',
  },
];

export default function Normativas() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Hero Section */}
      <HeroNormativas />
      {/* Quick Links Grid Mejorado */}
      <section className="max-w-7xl mx-auto -mt-24 z-10 relative px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
        {/* Línea divisoria animada */}
        <div className="flex justify-center my-12">
          <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-pink-200 to-pink-400 rounded-full animate-pulse shadow-lg" />
        </div>
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 mt-8">Enlaces de Interés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interestLinks.map((link, idx) => (
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
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}