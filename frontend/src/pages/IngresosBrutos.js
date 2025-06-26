import React from 'react';
import { ClipboardDocumentCheckIcon, UsersIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/solid';

const quickLinks = [
  {
    title: 'Verificación de CUV',
    icon: ClipboardDocumentCheckIcon,
    description: '',
    href: '#',
  },
  {
    title: 'Consulta de Padrón de Contribuyentes Exentos',
    icon: UsersIcon,
    description: '',
    href: '#',
  },
  {
    title: 'Constancia de Inscripción actividades exentas y gravadas',
    icon: DocumentTextIcon,
    description: '',
    href: '#',
  },
  {
    title: 'Consulta de actividades y alícuotas de IIBB',
    icon: ChartBarIcon,
    description: '',
    href: '#',
  },
];

export default function IngresosBrutos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center bg-center bg-cover" style={{backgroundImage: 'url(/public/misiones.png)'}}>
        <div className="absolute inset-0 bg-blue-900 bg-opacity-70" />
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">INGRESOS BRUTOS</h1>
          <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl drop-shadow">
            Información clave sobre la gestión y declaración de Ingresos Brutos. Simplificamos el proceso para contribuir al cumplimiento tributario eficiente de tu negocio.
          </p>
          {/* Breadcrumbs */}
          <div className="flex items-center gap-2 text-white/80 text-base font-medium">
            <span className="bg-white/20 rounded-full px-4 py-1">ATM</span>
            <span className="mx-1">&gt;</span>
            <span className="bg-white/80 text-blue-900 rounded-full px-4 py-1">Ingresos Brutos</span>
          </div>
        </div>
      </div>
      {/* Quick Links Grid */}
      <div className="max-w-6xl mx-auto -mt-20 pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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