import React from 'react';
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon } from '@heroicons/react/24/outline';

export default function HeroBeneficiosATM({
  title = 'Beneficios otorgados por la Agencia Tributaria de Misiones',
  subtitle = 'Exenciones, bonificaciones, sorteos y más. Descubrí cómo aprovechar estas oportunidades.',
  ctaText = 'Descubre Más',
  ctaHref = '#sectores',
  badge = 'Agencia tributaria misiones',
  image = '/iibb-image.jpeg',
}) {
  return (
    <section className="relative flex items-center justify-center min-h-[400px] py-16 md:py-20 px-4 overflow-hidden">
      {/* Fondo espacial con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      />
      
      {/* Overlay espacial */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-purple-900/80" />
      
      {/* Efectos de partículas */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      {/* Ondas de energía */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/30 rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/30 rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
        {/* Badge holográfico */}
        {badge && (
          <div className="group mb-8">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <span className="relative inline-flex items-center gap-3 text-base md:text-lg text-white font-bold mb-2 tracking-widest uppercase bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl px-8 py-4 rounded-full shadow-xl border-2 border-cyan-400/30">
              <SparklesIcon className="h-6 w-6 text-cyan-400 animate-pulse" />
              {badge}
              <SparklesIcon className="h-6 w-6 text-purple-400 animate-pulse" />
            </span>
          </div>
        )}
        
        {/* Título principal */}
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
        </h1>
        
        {/* Subtítulo */}
        <p className="text-lg md:text-xl lg:text-2xl font-medium mb-10 text-cyan-100 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
          {subtitle}
        </p>
        
        {/* Botón de acción espacial */}
        <a href={ctaHref} className="group relative">
          <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
          <div className="relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-white/20 backdrop-blur-md">
            <RocketLaunchIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
            {ctaText}
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </div>
        </a>
      </div>
      
      {/* Efectos de luz adicionales */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      </div>
    </section>
  );
}