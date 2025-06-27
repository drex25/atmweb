import React from 'react';
import { ClipboardDocumentCheckIcon, UsersIcon, DocumentTextIcon, Cog6ToothIcon, ScaleIcon, BookOpenIcon, CalendarIcon, DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import HeroImpuestoInmobiliario from '../components/HeroNormativas';
import HeroNormativas from '../components/HeroNormativas';

const quickLinks = [
  {
    title: 'Consulta de Resoluciones',
    icon: DocumentTextIcon,
    description: '',
    href: '#',
  },
  {
    title: 'Consulta de Leyes Tributarias',
    icon: ClipboardDocumentCheckIcon,
    description: '',
    href: '#',
  },
  {
    title: 'Consulta de Decretos',
    icon: UsersIcon,
    description: '',
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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroNormativas />
      {/* Quick Links Grid */}
      <div className="w-auto mx-auto -mt-0 pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {quickLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 mb-4 group-hover:bg-pink-200 transition">
                <link.icon className="h-8 w-8 text-pink-500" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{link.title}</h3>
                {link.description && <p className="text-gray-500 text-sm">{link.description}</p>}
              </div>
            </a>
          ))}
        </div>
        <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-8 mt-8">Enlaces de Interés</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {interestLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 mb-4 group-hover:bg-pink-200 transition">
                <link.icon className="h-8 w-8 text-pink-500" />
              </div>
              <div className="text-center">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{link.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}