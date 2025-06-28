import React from 'react';
import { 
  ShieldCheckIcon, 
  SparklesIcon, 
  ArrowRightIcon,
  ScaleIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function HeroExenciones({
  title = 'EXENCIONES FISCALES',
  subtitle = 'Beneficios Tributarios para Contribuyentes',
  description = 'Conocé todas las exenciones impositivas vigentes en Misiones. Accedé a los requisitos y normativa para cada tributo.',
  backgroundImage = '/sellos.png',
  badge = 'Agencia Tributaria Misiones',
  breadcrumbs = [
    { label: 'ATM', active: false },
    { label: 'Exenciones Impositivas', active: true },
  ],
}) {
  return (
    <section className="relative h-[420px] flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay principal con gradiente espacial */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-purple-900/80" />
      
      {/* Efectos de partículas sutiles */}
      <div className="absolute inset-0">
        {/* Partículas flotantes más sutiles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Ondas de energía sutiles */}
        <div className="absolute top-1/4 left-1/4 w-24 h-24 border border-cyan-400/10 rounded-full animate-ping" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 border border-purple-400/10 rounded-full animate-ping" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
      </div>
      
      {/* Contenido principal centrado con más padding inferior */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-12 pb-16 text-center">
        
        {/* Badge holográfico más pequeño */}
        {badge && (
          <div className="group mb-4 inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <span className="relative inline-flex items-center gap-2 text-sm md:text-base text-white font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl px-6 py-3 rounded-full shadow-xl border-2 border-cyan-400/30">
              <ShieldCheckIcon className="h-5 w-5 text-cyan-400 animate-pulse" />
              {badge}
              <SparklesIcon className="h-5 w-5 text-purple-400 animate-pulse" />
            </span>
          </div>
        )}
        
        {/* Título principal más compacto */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-3 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
        </h1>
        
        {/* Subtítulo más pequeño */}
        <h2 className="text-lg md:text-xl font-bold mb-3 text-cyan-200 animate-fade-in delay-100">
          {subtitle}
        </h2>
        
        {/* Descripción más compacta */}
        <p className="text-base md:text-lg text-cyan-100 mb-5 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
          {description}
        </p>
        
        {/* Breadcrumbs más compactos */}
        <div className="flex items-center justify-center gap-2 text-white/80 text-sm font-medium mb-8 animate-fade-in delay-200">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span
                className={`px-3 py-1 rounded-full transition-all duration-300 ${
                  crumb.active
                    ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border border-cyan-400/50 shadow-lg backdrop-blur-md'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {crumb.label}
              </span>
              {idx < breadcrumbs.length - 1 && (
                <ArrowRightIcon className="h-4 w-4 text-cyan-400 mx-1" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Botones de acción más compactos y centrados con más espacio */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-300 mb-8">
          <a 
            href="#tipos-exenciones" 
            className="group relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
            <div className="relative inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-base rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-cyan-400/50">
              <ScaleIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Explorar Exenciones
              <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          
          <a 
            href="/autogestion" 
            className="group inline-flex items-center gap-2 px-8 py-3 bg-transparent border-2 border-white/30 text-white font-bold text-base rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md"
          >
            <DocumentTextIcon className="h-5 w-5 group-hover:scale-110 transition-transform" />
            Autogestión
          </a>
        </div>
      </div>
      
      {/* Efectos de luz adicionales sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-30" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* CSS personalizado para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .delay-100 {
          animation-delay: 0.1s;
        }
        
        .delay-200 {
          animation-delay: 0.2s;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
      `}</style>
    </section>
  );
}