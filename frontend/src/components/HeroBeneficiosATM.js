import React, { useEffect, useState } from 'react';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, StarIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function HeroBeneficiosATM({
  title = 'Beneficios otorgados por la Agencia Tributaria de Misiones',
  subtitle = 'Exenciones, bonificaciones, sorteos y más. Descubrí cómo aprovechar estas oportunidades.',
  ctaText = 'Descubre Más',
  ctaHref = '#sectores',
  badge = 'Agencia tributaria misiones',
  image = '/iibb-image.jpeg',
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Fondo con imagen sutil */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      
      {/* Overlay gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 via-blue-50/40 to-indigo-50/60" />
      {/* Degradado superior para separar del navbar */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-b from-blue-200/60 via-transparent to-transparent pointer-events-none z-20" />
      
      {/* Patrón geométrico sutil */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 border border-blue-200/30 rounded-full animate-spin" style={{animationDuration: '30s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 border border-indigo-200/30 rounded-full animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center w-full px-6 max-w-5xl mx-auto">
        {/* Badge elegante */}
        {badge && (
          <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm border border-blue-200/50 rounded-full shadow-lg">
              <SparklesIcon className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-semibold text-blue-700 uppercase tracking-wider">{badge}</span>
              <SparklesIcon className="h-4 w-4 text-indigo-500" />
            </div>
          </div>
        )}
        
        {/* Título principal */}
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="bg-gradient-to-r from-slate-800 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            {title}
          </span>
        </h1>
        
        {/* Subtítulo */}
        <div className={`mb-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-xl md:text-2xl font-medium text-slate-600 max-w-4xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>
        
        {/* Botón principal */}
        <div className={`mb-16 transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <a href={ctaHref} className="group relative inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative inline-flex items-center gap-4 px-10 py-5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <RocketLaunchIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {ctaText}
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
        </div>

        {/* Indicadores de beneficios */}
        <div className={`flex flex-wrap justify-center gap-8 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: CheckCircleIcon, text: 'Exenciones Fiscales', color: 'text-green-600' },
            { icon: StarIcon, text: 'Bonificaciones', color: 'text-amber-600' },
            { icon: SparklesIcon, text: 'Sorteos Anuales', color: 'text-purple-600' }
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3 text-slate-600 font-medium">
              <item.icon className={`h-5 w-5 ${item.color}`} />
              <span>{item.text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Efectos de luz sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-purple-400/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
}