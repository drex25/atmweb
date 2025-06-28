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
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
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
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Ondas de energía sutiles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/10 rounded-full animate-ping" style={{animationDuration: '6s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/10 rounded-full animate-ping" style={{animationDuration: '8s', animationDelay: '3s'}}></div>
      </div>
      
      {/* Contenido principal centrado */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 py-20 text-center">
        
        {/* Badge holográfico */}
        {badge && (
          <div className="group mb-8 inline-block">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <span className="relative inline-flex items-center gap-3 text-base md:text-lg text-white font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl px-8 py-4 rounded-full shadow-xl border-2 border-cyan-400/30">
              <ShieldCheckIcon className="h-6 w-6 text-cyan-400 animate-pulse" />
              {badge}
              <SparklesIcon className="h-6 w-6 text-purple-400 animate-pulse" />
            </span>
          </div>
        )}
        
        {/* Título principal con efectos */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight animate-fade-in">
          <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
            {title}
          </span>
        </h1>
        
        {/* Subtítulo elegante */}
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-200 animate-fade-in delay-100">
          {subtitle}
        </h2>
        
        {/* Descripción centrada */}
        <p className="text-lg md:text-xl text-cyan-100 mb-12 leading-relaxed max-w-3xl mx-auto animate-fade-in delay-200">
          {description}
        </p>
        
        {/* Breadcrumbs mejorados */}
        <div className="flex items-center justify-center gap-2 text-white/80 text-base font-medium mb-12 animate-fade-in delay-200">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <span
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  crumb.active
                    ? 'bg-gradient-to-r from-cyan-500/30 to-purple-500/30 text-white border border-cyan-400/50 shadow-lg backdrop-blur-md'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 backdrop-blur-sm'
                }`}
              >
                {crumb.label}
              </span>
              {idx < breadcrumbs.length - 1 && (
                <ArrowRightIcon className="h-4 w-4 text-cyan-400 mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>
        
        {/* Botones de acción centrados */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in delay-300">
          <a 
            href="#tipos-exenciones" 
            className="group relative"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
            <div className="relative inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-cyan-400/50">
              <ScaleIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              Explorar Exenciones
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </a>
          
          <a 
            href="/autogestion" 
            className="group inline-flex items-center gap-3 px-10 py-4 bg-transparent border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-md"
          >
            <DocumentTextIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
            Autogestión
          </a>
        </div>
      </div>
      
      {/* Efectos de luz adicionales sutiles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-30"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping opacity-30" style={{animationDelay: '2s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-30" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* CSS personalizado para animaciones */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
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