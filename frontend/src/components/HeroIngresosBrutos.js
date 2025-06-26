import React from 'react';

export default function HeroIngresosBrutos({
  title = 'INGRESOS BRUTOS',
  description = 'Información clave sobre la gestión y declaración de Ingresos Brutos. Simplificamos el proceso para contribuir al cumplimiento tributario eficiente de tu negocio.',
  backgroundImage = '/public/misiones.png',
  breadcrumbs = [
    { label: 'ATM', active: false },
    { label: 'Ingresos Brutos', active: true },
  ],
}) {
  return (
    <div className="relative h-[400px] flex items-center justify-center bg-center bg-cover" style={{backgroundImage: `url(${backgroundImage})`}}>
      <div className="absolute inset-0 bg-blue-900 bg-opacity-70" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">{title}</h1>
        <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl drop-shadow">{description}</p>
        <div className="flex items-center gap-2 text-white/80 text-base font-medium">
          {breadcrumbs.map((crumb, idx) => (
            <span
              key={idx}
              className={
                crumb.active
                  ? 'bg-white/80 text-blue-900 rounded-full px-4 py-1'
                  : 'bg-white/20 rounded-full px-4 py-1'
              }
            >
              {crumb.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
} 