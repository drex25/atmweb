import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function HeroBeneficiosATM({
  title = 'Beneficios otorgados por la Agencia Tributaria de Misiones',
  subtitle = 'Exenciones, bonificaciones, sorteos y más. Descubrí cómo aprovechar estas oportunidades.',
  ctaText = 'Descubre Más',
  ctaHref = '#sectores',
  badge = 'Agencia tributaria misiones',
  image = '/iibb-image.jpeg',
}) {
  return (
    <section
      className="relative flex items-center justify-center min-h-[260px] py-8 md:py-12 px-4 bg-gradient-to-br from-atm-primary via-[#612247] to-atm-accent overflow-hidden"
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay oscuro para legibilidad */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/70 opacity-90 z-0" />
      <div className="relative z-10 flex flex-col items-center text-center w-full max-w-3xl mx-auto">
        {badge && (
          <span className="text-xs md:text-sm text-white/90 font-semibold mb-2 tracking-widest uppercase bg-white/10 px-3 py-1.5 rounded-full shadow border border-white/20">{badge}</span>
        )}
        <h1 className="text-2xl md:text-3xl font-extrabold mb-2 text-white drop-shadow-2xl" style={{textShadow:'0 4px 16px #2563eb55'}}>{title}</h1>
        <p className="text-sm md:text-base font-medium mb-4 text-white/90 max-w-2xl mx-auto" style={{textShadow:'0 2px 8px #1a365d33'}}>{subtitle}</p>
        <a href={ctaHref} className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-atm-accent text-white font-bold text-base shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-white/20 animate-fade-in backdrop-blur-md">
          <ArrowRightIcon className="w-4 h-4" /> {ctaText}
        </a>
      </div>
    </section>
  );
} 