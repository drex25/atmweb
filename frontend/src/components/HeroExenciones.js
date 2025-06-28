import React from 'react';
import { 
  ShieldCheckIcon, 
  SparklesIcon, 
  ScaleIcon,
  DocumentTextIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon
} from '@heroicons/react/24/outline';

export default function HeroExenciones({
  title = 'EXENCIONES FISCALES',
  subtitle = 'Beneficios Tributarios Inteligentes',
  description = 'Conocé todas las exenciones impositivas vigentes en Misiones. Accedé a los requisitos y normativa para cada tributo de manera clara y transparente.',
  backgroundImage = '/sellos.png',
  badge = 'Agencia Tributaria Misiones',
  breadcrumbs = [
    { label: 'ATM', active: false },
    { label: 'Exenciones Impositivas', active: true },
  ],
}) {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Fondo con imagen y overlays */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      
      {/* Overlay principal con gradiente espacial */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-blue-900/70 to-purple-900/80" />
      
      {/* Efectos de partículas y luces */}
      <div className="absolute inset-0">
        {/* Partículas flotantes */}
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
        
        {/* Ondas de energía */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-cyan-400/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-purple-400/20 rounded-full animate-ping" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border border-pink-400/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      </div>
      
      {/* Contenido principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Columna izquierda: Contenido textual */}
          <div className="text-center lg:text-left">
            {/* Badge holográfico */}
            {badge && (
              <div className="group mb-8 inline-block">
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <span className="relative inline-flex items-center gap-3 text-base md:text-lg text-white font-bold tracking-widest uppercase bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-xl px-8 py-4 rounded-full shadow-xl border-2 border-cyan-400/30">
                  <ShieldCheckIcon className="h-6 w-6 text-cyan-400 animate-pulse" />
                  {badge}
                  <SparklesIcon className="h-6 w-6 text-purple-400 animate-pulse" />
                </span>
              </div>
            )}
            
            {/* Breadcrumbs mejorados */}
            <div className="flex items-center justify-center lg:justify-start gap-2 text-white/80 text-base font-medium mb-8 animate-fade-in delay-200">
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
                    <ArrowRightIcon className="h-4 w-4 text-cyan-400" />
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Título principal con efectos */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-none animate-fade-in">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent drop-shadow-2xl">
                {title}
              </span>
            </h1>
            
            {/* Subtítulo elegante */}
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-cyan-200 animate-fade-in delay-100">
              {subtitle}
            </h2>
            
            {/* Descripción mejorada */}
            <p className="text-lg md:text-xl text-cyan-100 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in delay-200">
              {description}
            </p>
            
            {/* Botones de acción */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start animate-fade-in delay-300">
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
          
          {/* Columna derecha: Panel de estadísticas flotante */}
          <div className="relative">
            {/* Efectos de fondo para el panel */}
            <div className="absolute -inset-8 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-3xl blur-3xl animate-pulse"></div>
            
            {/* Panel principal */}
            <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/20 shadow-2xl">
              {/* Header del panel */}
              <div className="text-center mb-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-cyan-500/30 to-purple-500/30 flex items-center justify-center border-2 border-cyan-400/50 shadow-lg">
                  <ShieldCheckIcon className="h-10 w-10 text-cyan-300" />
                </div>
                <h3 className="text-2xl font-black text-white mb-2">
                  Beneficios Fiscales
                </h3>
                <p className="text-cyan-200 font-medium">
                  Impacto de nuestras exenciones
                </p>
              </div>
              
              {/* Estadísticas */}
              <div className="space-y-6">
                {[
                  { 
                    icon: ScaleIcon, 
                    value: '61,000+', 
                    label: 'Exenciones Otorgadas',
                    color: 'text-purple-300'
                  },
                  { 
                    icon: DocumentTextIcon, 
                    value: '4', 
                    label: 'Tipos de Impuestos',
                    color: 'text-cyan-300'
                  },
                  { 
                    icon: CheckCircleIcon, 
                    value: '100%', 
                    label: 'Transparencia',
                    color: 'text-green-300'
                  }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center border border-white/20">
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className={`text-2xl font-black ${stat.color}`}>
                        {stat.value}
                      </div>
                      <div className="text-white/80 font-medium text-sm">
                        {stat.label}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Indicadores de beneficios */}
              <div className="mt-8 pt-6 border-t border-white/20">
                <div className="flex flex-wrap gap-2 justify-center">
                  {['Ingresos Brutos', 'Inmobiliario', 'Automotor', 'Sellos'].map((benefit, index) => (
                    <span key={index} className="inline-flex items-center gap-2 px-3 py-2 bg-white/10 rounded-full border border-white/20 text-white/80 text-sm font-medium">
                      <StarIcon className="h-4 w-4 text-yellow-400" />
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Efectos de luz adicionales */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
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