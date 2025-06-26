import React from 'react';
import { ClipboardDocumentCheckIcon, UsersIcon, DocumentTextIcon, Cog6ToothIcon } from '@heroicons/react/24/solid';
import HeroImpuestoInmobiliario from '../components/HeroImpuestoInmobiliario';

const quickLinks = [
  {
    title: 'Emisión Boleta de Pago',
    icon: DocumentTextIcon,
    description: '',
    href: '#',
  },
  {
    title: 'Verificación CUV Inmobiliario',
    icon: ClipboardDocumentCheckIcon,
    description: '',
    href: '#',
  },
  {
    title: 'Autogestión',
    icon: UsersIcon,
    description: '',
    href: '#',
  },
];

export default function ImpuestoInmobiliario() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroImpuestoInmobiliario />
      {/* Quick Links Grid */}
      <div className="w-auto mx-auto -mt-0 pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </div>
  );
}