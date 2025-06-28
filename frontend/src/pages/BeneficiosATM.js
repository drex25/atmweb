import React, { useEffect, useRef } from 'react';
import { 
  TrophyIcon, 
  UsersIcon, 
  ScaleIcon, 
  GiftIcon, 
  CalendarIcon, 
  ArrowUpCircleIcon, 
  HomeIcon, 
  UserGroupIcon, 
  KeyIcon, 
  UserIcon, 
  IdentificationIcon,
  SparklesIcon,
  StarIcon,
  FireIcon,
  BoltIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';
import HeroBeneficiosATM from '../components/HeroBeneficiosATM';

// Hook para efectos de scroll
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Métricas con efectos visuales mejorados
const metrics = [
  {
    icon: TrophyIcon, 
    label: 'Premios Entregados', 
    value: 465, 
    color: '#F59E0B',
    bgGradient: 'from-yellow-500/20 to-orange-500/20',
    explanation: 'Premios y reconocimientos entregados a contribuyentes destacados.',
    particles: '🏆'
  },
  {
    icon: CurrencyDollarIcon, 
    label: 'Eximidos Impositivamente', 
    value: 5400, 
    prefix: '+ $', 
    suffix: ' millones anuales', 
    color: '#10B981',
    bgGradient: 'from-emerald-500/20 to-green-500/20',
    explanation: 'Monto anual eximido en impuestos a beneficiarios.',
    particles: '💰'
  },
  {
    icon: ScaleIcon, 
    label: 'Exenciones Impositivas Otorgadas', 
    value: 61000, 
    color: '#8B5CF6',
    bgGradient: 'from-purple-500/20 to-violet-500/20',
    explanation: 'Cantidad de exenciones impositivas otorgadas por ATM.',
    particles: '⚖️'
  },
];

// Sectores beneficiados con contenido original de las imágenes
const sectores = [
  {
    icon: UserGroupIcon, 
    label: 'Productores Primarios', 
    value: '+9,000', 
    desc: 'Beneficios del Impuesto sobre los Ingresos Brutos para productores primarios.', 
    href: '/requisitos/productores-primarios',
    color: '#059669',
    gradient: 'from-emerald-600 to-green-600'
  },
  {
    icon: UserIcon, 
    label: 'Jubilados y Pensionados', 
    value: '+4,080', 
    desc: 'Beneficios del Impuesto Inmobiliario Básico para jubilados y pensionados.', 
    href: '/requisitos/jubilados-pensionados',
    color: '#DC2626',
    gradient: 'from-red-600 to-rose-600'
  },
  {
    icon: IdentificationIcon, 
    label: 'Personas con CUD', 
    value: '+1,222', 
    desc: 'Beneficios del Impuesto Provincial Automotor para personas con discapacidad permanente.', 
    href: '/requisitos/personas-cud',
    color: '#7C3AED',
    gradient: 'from-violet-600 to-purple-600'
  },
  {
    icon: KeyIcon, 
    label: 'Adjudicatarios Vivienda IPRODHA', 
    value: '+20,781', 
    desc: 'Beneficios del Impuesto Inmobiliario Básico para adjudicatarios de primera vivienda del IPRODHA.', 
    href: '/requisitos/adjudicatarios-vivienda',
    color: '#0891B2',
    gradient: 'from-cyan-600 to-blue-600'
  },
  {
    icon: ScaleIcon, 
    label: 'Otras Exenciones y Bonificaciones', 
    value: '+26,000', 
    desc: 'Otras exenciones impositivas para diversas actividades y grupos.', 
    href: '/requisitos/otras-exenciones',
    color: '#EA580C',
    gradient: 'from-orange-600 to-amber-600'
  },
];

// Componente contador animado mejorado
function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1200, className = '', particles }) {
  const ref = useRef();
  const [showParticles, setShowParticles] = React.useState(false);
  
  React.useEffect(() => {
    let startTime = null;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const current = Math.floor(progress * value);
      if (ref.current) ref.current.textContent = prefix + current.toLocaleString() + (suffix || '');
      if (progress < 1) requestAnimationFrame(animate);
      else {
        if (ref.current) ref.current.textContent = prefix + value.toLocaleString() + (suffix || '');
        setShowParticles(true);
      }
    }
    requestAnimationFrame(animate);
  }, [value, prefix, suffix, duration]);
  
  return (
    <div className="relative">
      <span ref={ref} className={className}>{prefix}{value.toLocaleString()}{suffix}</span>
      {showParticles && particles && (
        <div className="absolute -top-2 -right-2 text-2xl animate-bounce">
          {particles}
        </div>
      )}
    </div>
  );
}

// Componente de métrica espacial con altura uniforme
const SpaceMetricCard = ({ metric, index }) => (
  <div 
    className="group relative scroll-animate opacity-0 translate-y-10 transition-all duration-700"
    style={{transitionDelay: `${index * 200}ms`}}
  >
    {/* Anillo de energía */}
    <div className="absolute -inset-4 rounded-full border-2 opacity-30 animate-spin group-hover:opacity-60 transition-opacity duration-500" 
         style={{borderColor: metric.color, animationDuration: '8s'}}></div>
    
    {/* Contenedor principal con altura fija */}
    <div className={`relative h-[380px] rounded-3xl bg-gradient-to-br ${metric.bgGradient} backdrop-blur-xl border-2 shadow-2xl p-8 flex flex-col items-center justify-between hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden`}
         style={{borderColor: `${metric.color}40`, boxShadow: `0 20px 40px ${metric.color}20`}}>
      
      {/* Efectos de fondo */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
      <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full opacity-20 animate-pulse"
           style={{backgroundColor: metric.color}}></div>
      
      {/* Sección superior: Icono */}
      <div className="flex flex-col items-center">
        <div className="relative mb-6 flex items-center justify-center w-24 h-24 rounded-full border-4 shadow-inner group-hover:scale-110 transition-transform duration-300"
             style={{
               backgroundColor: `${metric.color}20`,
               borderColor: metric.color,
               boxShadow: `0 0 30px ${metric.color}40`
             }}>
          <metric.icon className="h-12 w-12" style={{color: metric.color}} />
          
          {/* Partículas orbitales */}
          <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
            <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full" style={{backgroundColor: metric.color}}></div>
          </div>
        </div>
      </div>
      
      {/* Sección central: Valor y etiqueta */}
      <div className="flex flex-col items-center text-center flex-1 justify-center">
        <div className="text-5xl font-black mb-3 drop-shadow-xl relative z-10" style={{color: metric.color}}>
          <AnimatedCounter 
            value={metric.value} 
            prefix={metric.prefix} 
            suffix={metric.suffix}
            particles={metric.particles}
          />
        </div>
        
        <div className="text-lg font-bold mb-4 text-center text-white uppercase tracking-wide relative z-10 leading-tight">
          {metric.label}
        </div>
      </div>
      
      {/* Sección inferior: Descripción y barra */}
      <div className="w-full">
        <div className="text-sm text-white/80 text-center font-medium relative z-10 mb-4 leading-relaxed">
          {metric.explanation}
        </div>
        
        {/* Barra de progreso decorativa */}
        <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <div className="h-full rounded-full animate-pulse" 
               style={{backgroundColor: metric.color, width: '100%'}}></div>
        </div>
      </div>
    </div>
  </div>
);

// Componente de sector beneficiado como enlace completo con altura uniforme
const SectorCardWhite = ({ sector, index }) => (
  <a
    href={sector.href}
    className="group relative block scroll-animate opacity-0 translate-y-10 transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-blue-300/50 rounded-3xl"
    style={{transitionDelay: `${index * 150}ms`}}
  >
    {/* Contenedor principal con altura fija y fondo blanco */}
    <div className="relative h-[380px] bg-white/95 backdrop-blur-xl rounded-3xl border-2 border-gray-200/50 shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden group-hover:border-gray-300 group-hover:shadow-xl">
      
      {/* Efectos de fondo sutiles */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl"></div>
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full opacity-5 animate-pulse group-hover:opacity-10 transition-opacity"
           style={{backgroundColor: sector.color}}></div>
      
      {/* Sección superior: Icono con círculo de color */}
      <div className="mb-6">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full border-4 shadow-lg group-hover:scale-110 transition-transform duration-300 bg-white"
             style={{
               borderColor: sector.color,
               boxShadow: `0 8px 25px ${sector.color}20`
             }}>
          <sector.icon className="h-10 w-10" style={{color: sector.color}} />
        </div>
      </div>
      
      {/* Sección central: Valor y etiqueta */}
      <div className="flex flex-col items-center mb-6">
        <div className="text-4xl font-black mb-3 drop-shadow-sm" style={{color: sector.color}}>
          <AnimatedCounter value={parseInt(sector.value.replace(/[^\d]/g, ''))} 
                          prefix={sector.value.match(/^[^\d]+/)?.[0] || ''} 
                          suffix={sector.value.match(/[^\d]+$/)?.[0] || ''} />
        </div>
        
        <div className="text-xl font-bold mb-4 text-gray-800 uppercase tracking-wide leading-tight text-center">
          {sector.label}
        </div>
      </div>
      
      {/* Sección inferior: Descripción optimizada */}
      <div className="flex-1 flex flex-col justify-center w-full">
        <div className="text-base text-gray-600 font-medium leading-relaxed text-center">
          {sector.desc}
        </div>
      </div>
      
      {/* Indicador de hover sutil */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="w-8 h-8 rounded-full flex items-center justify-center"
             style={{backgroundColor: `${sector.color}20`}}>
          <ArrowUpCircleIcon className="h-5 w-5 rotate-90" style={{color: sector.color}} />
        </div>
      </div>
      
      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
           style={{
             background: `linear-gradient(135deg, transparent 0%, ${sector.color}10 50%, transparent 100%)`
           }}></div>
    </div>
  </a>
);

export default function BeneficiosATM() {
  useScrollAnimation();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo espacial */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      
      {/* Estrellas animadas */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>

      {/* Ondas de energía */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-cyan-400/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 border border-purple-400/20 rounded-full animate-ping" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-pink-400/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
      </div>

      {/* HERO INSTITUCIONAL */}
      <div className="relative z-10">
        <HeroBeneficiosATM 
          badge="🚀 Agencia Tributaria Misiones"
          title="Beneficios otorgados por la Agencia Tributaria de Misiones"
          subtitle="Exenciones, bonificaciones, sorteos y más. Descubrí cómo aprovechar estas oportunidades espaciales."
        />
      </div>

      {/* MÉTRICAS ESPACIALES */}
      <section className="relative z-10 w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-20 px-0">
        {metrics.map((metric, i) => (
          <SpaceMetricCard key={i} metric={metric} index={i} />
        ))}
      </section>

      {/* MORATORIA ESPACIAL */}
      <section className="relative z-10 w-[95%] mx-auto flex justify-center py-16 px-0">
        <div className="group relative w-full scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          {/* Anillo de energía */}
          <div className="absolute -inset-4 rounded-3xl border-2 border-blue-400/30 animate-spin opacity-50 group-hover:opacity-80 transition-opacity" style={{animationDuration: '12s'}}></div>
          
          {/* Contenedor principal */}
          <div className="relative w-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-2 border-blue-400/40 rounded-3xl shadow-2xl flex flex-col items-center p-12 text-center overflow-hidden">
            
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
            
            {/* Icono principal */}
            <div className="relative mb-6 flex items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-4 border-blue-400 shadow-inner group-hover:scale-110 transition-transform duration-500">
              <ScaleIcon className="h-14 w-14 text-blue-300" />
              
              {/* Partículas orbitales */}
              <div className="absolute inset-0 animate-spin" style={{animationDuration: '8s'}}>
                <div className="absolute -top-2 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-2 w-2 h-2 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
            
            {/* Título */}
            <h2 className="relative text-4xl md:text-5xl font-black mb-4 z-10 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-xl">
              ALIVIO FISCAL Moratoria 2024
            </h2>
            
            {/* Estadística principal */}
            <div className="relative text-3xl md:text-4xl font-black mb-6 z-10 text-blue-300 drop-shadow-xl">
              <AnimatedCounter value={10883} suffix=" planes por $5.528 millones" particles="💫" />
            </div>
            
            {/* Botón de acción */}
            <button className="relative z-10 group/btn">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover/btn:opacity-60 transition-opacity"></div>
              <div className="relative px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-blue-400/50">
                <span className="flex items-center gap-2">
                  <RocketLaunchIcon className="h-6 w-6" />
                  Más información
                </span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* SORTEOS ESPACIALES */}
      <section className="relative z-10 w-[95%] mx-auto flex justify-center py-16 px-0">
        <div className="group relative w-full scroll-animate opacity-0 translate-y-10 transition-all duration-700">
          {/* Efectos de confeti espacial */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 rounded-full animate-bounce"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  backgroundColor: ['#F59E0B', '#EF4444', '#8B5CF6', '#10B981'][i % 4],
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random()}s`
                }}
              ></div>
            ))}
          </div>
          
          {/* Contenedor principal */}
          <div className="relative w-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 backdrop-blur-xl border-2 border-pink-400/40 rounded-3xl shadow-2xl p-12 text-center overflow-hidden">
            
            {/* Efectos de fondo */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
            
            {/* Título con efectos */}
            <h2 className="relative text-4xl md:text-5xl font-black mb-6 z-10 bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300 bg-clip-text text-transparent drop-shadow-xl">
              🎉 ¡Sorteos de ATM! 🎉
            </h2>
            
            {/* Información de sorteos */}
            <div className="relative flex flex-col gap-4 mb-8 z-10">
              <div className="flex items-center justify-center gap-3 text-lg font-bold text-white">
                <GiftIcon className="h-6 w-6 text-pink-400" />
                <span>Sorteos de Consumidores Finales y Cumplidores del Impuesto Inmobiliario</span>
                <HomeIcon className="h-6 w-6 text-purple-400" />
              </div>
              
              <div className="flex items-center justify-center gap-3 text-xl font-bold text-pink-300">
                <SparklesIcon className="h-6 w-6 animate-pulse" />
                <span>Los sorteos han finalizado. Gracias por participar.</span>
                <SparklesIcon className="h-6 w-6 animate-pulse" />
              </div>
              
              <div className="flex items-center justify-center gap-2 text-base text-white/80">
                <CalendarIcon className="h-5 w-5 text-cyan-400" />
                <span>Próximamente anunciaremos nuevas fechas para los próximos sorteos.</span>
              </div>
            </div>
            
            {/* Botón principal */}
            <button className="relative z-10 group/btn mb-6">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full blur-lg opacity-40 group-hover/btn:opacity-60 transition-opacity"></div>
              <div className="relative px-10 py-4 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border border-pink-400/50">
                Ver los resultados de los Sorteos 2025
              </div>
            </button>
            
            {/* Botones secundarios */}
            <div className="relative flex flex-col md:flex-row gap-4 justify-center z-10">
              <button className="group/secondary px-8 py-3 rounded-full border-2 border-pink-400/50 text-pink-300 font-bold bg-black/20 hover:bg-pink-500/20 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105">
                <GiftIcon className="h-5 w-5 group-hover/secondary:text-pink-200 transition-colors" />
                Sorteo Consumidores Finales
              </button>
              
              <button className="group/secondary px-8 py-3 rounded-full border-2 border-purple-400/50 text-purple-300 font-bold bg-black/20 hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-2 justify-center hover:scale-105">
                <GiftIcon className="h-5 w-5 group-hover/secondary:text-purple-200 transition-colors" />
                Sorteo Cumplidores Inmobiliarios
              </button>
            </div>
            
            {/* Mensaje final */}
            <div className="relative mt-6 text-base text-white/70 z-10">
              ¡Exigí tu factura o mantené tu impuesto al día y participá automáticamente!
            </div>
          </div>
        </div>
      </section>

      {/* SECTORES BENEFICIADOS - 3 COLUMNAS CON FONDO BLANCO */}
      <section id="sectores" className="relative z-10 py-20 px-4">
        {/* Fondo blanco para la sección */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black mb-16 text-center bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-xl scroll-animate opacity-0 translate-y-10 transition-all duration-700">
            Sectores Beneficiados
          </h2>
          
          {/* Grid de 3 columnas para los primeros 3 elementos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {sectores.slice(0, 3).map((sector, i) => (
              <SectorCardWhite key={i} sector={sector} index={i} />
            ))}
          </div>
          
          {/* Grid de 2 columnas centradas para los últimos 2 elementos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {sectores.slice(3, 5).map((sector, i) => (
              <SectorCardWhite key={i + 3} sector={sector} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE ESPACIAL */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute -inset-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
        <div className="relative w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-cyan-400/50">
          <ArrowUpCircleIcon className="h-8 w-8 text-white group-hover:scale-110 transition-transform" />
        </div>
      </button>

      {/* CSS personalizado para animaciones */}
      <style jsx>{`
        .animate-slide-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}