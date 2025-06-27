import React from 'react';
import HeroExenciones from '../components/HeroExenciones';
import { CheckCircleIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid';

const exenciones = [
  {
    title: 'Exenciones del Impuesto sobre los Ingresos Brutos',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones: actividades ejercidas o prestación de servicios públicos.',
      'Bolsas de Comercio y Mercados de Valores.',
      'Edición, distribución y/o venta de libros.',
      'Representaciones diplomáticas y consulares de los países extranjeros acreditados en Argentina.',
      'Asociaciones mutualistas.',
      'Socios o accionistas de cooperativas de trabajo.',
      'Fundaciones, asociaciones civiles, instituciones religiosas y asociaciones gremialistas con personería jurídica y sin fines de lucro.',
      'Actividades de Producción Primaria - Certificado Tipo "A".',
      'Establecimientos educacionales privados incorporados a los planes de enseñanza oficial.',
      'Explotación de servicios de radiodifusión y televisión.',
      'Contratistas, Subcontratistas y Proveedores de la Entidad Binacional Yacyretá.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto sobre los Ingresos Brutos',
      href: '/pdfs/requisitos-iibb.pdf',
    },
  },
  {
    title: 'Exenciones del Impuesto Provincial al Automotor',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones.',
      'Instituciones Religiosas e Instituciones de Beneficencia Pública, con Personería Jurídica.',
      'Representaciones diplomáticas y cónsules acreditados en Argentina.',
      'Cuerpos de Bomberos Voluntarios.',
      'Personas sujetas a alguna discapacidad de carácter permanente.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto Provincial al Automotor',
      href: '/pdfs/requisitos-automotor.pdf',
    },
  },
  {
    title: 'Exenciones del Impuesto Inmobiliario Básico',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones.',
      'Templos religiosos y sus dependencias.',
      'Asociaciones Civiles, con Personería Jurídica.',
      'Asociaciones obreras, gremiales, profesionales, de fomento o mutualistas y partidos políticos.',
      'Cooperativas de Trabajo.',
      'Legaciones extranjeras, embajadas, consulados, residencias de jefes de misión y de agencias extranjeras acreditados en Argentina.',
      'Ex-soldados conscriptos de las Islas Malvinas.',
      'Inmuebles adjudicados por IPRODHA o EBY.',
      'Inmuebles rurales afectados a emprendimientos turísticos alternativos educativos.',
      'Jubilados y pensionados.',
      'Inmuebles afectados a la Reserva Natural denominada "Reserva de la Biósfera Yabotí".',
      'Inmuebles afectados a Planes de Ordenación y/o de Enriquecimiento Forestal.',
      'Inmuebles afectados al Sistema de Áreas Naturales Protegidas, Adherentes a Reservas Privadas.',
      'Inmuebles afectados al Régimen de Patrimonio Cultural.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto Inmobiliario Básico',
      href: '/pdfs/requisitos-inmobiliario.pdf',
    },
  },
  {
    title: 'Exenciones del Impuesto de Sellos',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones.',
      'Estados extranjeros acreditados ante el Gobierno de la Nación.',
      'Partidos políticos reconocidos legalmente.',
      'Fundaciones, asociaciones civiles, gremiales, mutuales, instituciones religiosas, cooperativas de trabajo o consumo y entidades públicas no estatales sin fines de lucro. Obispados y sus dependencias jurisdiccionales.',
      'Créditos para adquisición de automotores registrables destinados a actividades comerciales y/o industriales.',
      'Créditos para inversión en maquinarias e instalaciones destinados a actividades primarias y/o industriales.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto de Sellos',
      href: '/pdfs/requisitos-sellos.pdf',
    },
  },
];

export default function Exenciones() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <HeroExenciones />
      <section className="w-full max-w-none -mt-24 z-10 relative px-0 pb-20">
        <div className="flex flex-col gap-12 w-full">
          {exenciones.map((ex, idx) => (
            <div
              key={idx}
              className="w-full bg-white/95 rounded-2xl shadow-xl border border-pink-100 px-0 md:px-0 py-8 flex flex-col items-center justify-center relative overflow-hidden backdrop-blur-xl hover:shadow-pink-200/80 transition-shadow duration-300 animate-fade-in"
              style={{ boxShadow: '0 8px 32px 0 rgba(236, 72, 153, 0.10)' }}
            >
              {/* Fondo decorativo animado */}
              <div className="absolute inset-0 pointer-events-none select-none opacity-5 bg-gradient-to-r from-pink-100 via-white to-blue-100 animate-gradient-x" />
              <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-10">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-block bg-pink-100 text-pink-700 font-bold text-xs px-3 py-1 rounded-full border border-pink-200 shadow-sm tracking-wide uppercase">
                    Exención
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-pink-900 tracking-tight drop-shadow-sm">
                    {ex.title}
                  </h2>
                </div>
                <ul className="space-y-2 mb-6 mt-2">
                  {ex.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-base md:text-lg text-gray-800 font-medium group">
                      <span className="mt-1">
                        <CheckCircleIcon className="h-5 w-5 text-pink-300 group-hover:text-pink-400 transition-colors" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={ex.requisitos.href}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-pink-600 to-pink-400 text-white font-semibold shadow hover:scale-105 hover:shadow-pink-300 transition-transform text-base border border-pink-200"
                >
                  <ArrowDownTrayIcon className="h-5 w-5" />
                  {ex.requisitos.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}