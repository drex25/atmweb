import React from 'react';

export default function HeroIngresosBrutos({
  title = 'INGRESOS BRUTOS',
  description = 'Información clave sobre la gestión y declaración de Ingresos Brutos. Simplificamos el proceso para contribuir al cumplimiento tributario eficiente de tu negocio.',
  backgroundImage = '/iibb-image.jpeg',
  breadcrumbs = [
    { label: 'ATM', active: false },
    { label: 'Ingresos Brutos', active: true },
  ],
}) {
  return (
    <div
      className="relative h-[420px] flex items-center justify-center bg-center bg-cover mb-12 shadow-lg"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-blue-900 bg-opacity-80" />
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 py-8 w-full">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg tracking-tight animate-fade-in">
          {title}
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mb-6 max-w-2xl drop-shadow font-medium animate-fade-in delay-100">
          {description}
        </p>
        <div className="flex items-center gap-2 text-white/80 text-base font-medium animate-fade-in delay-200">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span
                className={
                  crumb.active
                    ? 'bg-white/80 text-blue-900 rounded-full px-4 py-1 shadow-md'
                    : 'bg-white/20 rounded-full px-4 py-1 shadow'
                }
              >
                {crumb.label}
              </span>
              {idx < breadcrumbs.length - 1 && (
                <span className="mx-1 text-white/80 font-bold">{'>'}</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}