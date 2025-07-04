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
  RocketLaunchIcon,
  CheckCircleIcon,
  HeartIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';
import HeroBeneficiosATM from '../components/HeroBeneficiosATM';

// Hook para efectos de scroll mejorado
const useScrollAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-slide-up');
          entry.target.classList.remove('opacity-0', 'translate-y-20');
          
          // Efecto de cascada para elementos hijos
          const children = entry.target.querySelectorAll('.cascade-item');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('animate-slide-up');
              child.classList.remove('opacity-0', 'translate-y-10');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Métricas con textos ajustados perfectamente
const metrics = [
  {
    icon: TrophyIcon, 
    label: 'PREMIOS ENTREGADOS', 
    value: 465, 
    color: '#F59E0B',
    bgGradient: 'from-yellow-500/20 to-orange-500/20',
    explanation: 'Premios y reconocimientos entregados a contribuyentes destacados.',
    particles: '🏆',
    glowColor: 'shadow-yellow-500/30'
  },
  {
    icon: CurrencyDollarIcon, 
    label: 'EXIMIDOS IMPOSITIVAMENTE', 
    sublabel: 'Monto anual eximido en impuestos a beneficiarios.',
    value: 5400, 
    prefix: '+ $', 
    suffix: ' millones anuales', 
    color: '#10B981',
    bgGradient: 'from-emerald-500/20 to-green-500/20',
    explanation: 'Beneficios fiscales otorgados anualmente.',
    particles: '💰',
    glowColor: 'shadow-emerald-500/30'
  },
  {
    icon: ScaleIcon, 
    label: 'EXENCIONES IMPOSITIVAS OTORGADAS', 
    value: 61000, 
    color: '#8B5CF6',
    bgGradient: 'from-purple-500/20 to-violet-500/20',
    explanation: 'Cantidad de exenciones impositivas otorgadas por ATM.',
    particles: '⚖️',
    glowColor: 'shadow-purple-500/30'
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

// Componente contador animado mejorado con feedback visual
function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1500, className = '', particles, onComplete }) {
  const ref = useRef();
  const [showParticles, setShowParticles] = React.useState(false);
  const [isComplete, setIsComplete] = React.useState(false);
  
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
        setIsComplete(true);
        if (onComplete) onComplete();
      }
    }
    requestAnimationFrame(animate);
  }, [value, prefix, suffix, duration, onComplete]);
  
  return (
    <div className="relative">
      <span ref={ref} className={`${className} ${isComplete ? 'animate-pulse' : ''}`}>
        {prefix}{value.toLocaleString()}{suffix}
      </span>
      {showParticles && particles && (
        <div className="absolute -top-4 -right-4 text-3xl animate-bounce">
          {particles}
        </div>
      )}
    </div>
  );
}

// Componente de métrica espacial con altura uniforme y textos ajustados
const SpaceMetricCard = ({ metric, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isAnimated, setIsAnimated] = React.useState(false);

  return (
    <div 
      className="group relative scroll-animate opacity-0 translate-y-20 transition-all duration-700 cascade-item"
      style={{transitionDelay: `${index * 200}ms`}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Anillo de energía múltiple */}
      <div className="absolute -inset-6 rounded-full border-2 opacity-20 animate-spin group-hover:opacity-40 transition-opacity duration-500" 
           style={{borderColor: metric.color, animationDuration: '12s'}}></div>
      <div className="absolute -inset-4 rounded-full border opacity-30 animate-spin group-hover:opacity-60 transition-opacity duration-500" 
           style={{borderColor: metric.color, animationDuration: '8s', animationDirection: 'reverse'}}></div>
      
      {/* Contenedor principal con altura fija y efectos mejorados */}
      <div className={`relative h-[420px] rounded-3xl bg-gradient-to-br ${metric.bgGradient} backdrop-blur-xl border-2 shadow-2xl ${metric.glowColor} p-8 flex flex-col items-center justify-between hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden group-hover:border-opacity-80`}
           style={{
             borderColor: `${metric.color}40`, 
             boxShadow: `0 25px 50px ${metric.color}20, 0 0 0 1px ${metric.color}10`
           }}>
        
        {/* Efectos de fondo mejorados */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
        <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full opacity-20 animate-pulse group-hover:opacity-40 transition-opacity"
             style={{backgroundColor: metric.color}}></div>
        <div className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full opacity-15 animate-pulse group-hover:opacity-30 transition-opacity"
             style={{backgroundColor: metric.color, animationDelay: '1s'}}></div>
        
        {/* Sección superior: Icono con efectos orbitales */}
        <div className="flex flex-col items-center">
          <div className="relative mb-6 flex items-center justify-center w-28 h-28 rounded-full border-4 shadow-inner group-hover:scale-110 transition-transform duration-500"
               style={{
                 backgroundColor: `${metric.color}20`,
                 borderColor: metric.color,
                 boxShadow: `0 0 40px ${metric.color}40, inset 0 0 20px ${metric.color}20`
               }}>
            <metric.icon className="h-14 w-14 group-hover:scale-110 transition-transform duration-300" style={{color: metric.color}} />
            
            {/* Partículas orbitales mejoradas */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '15s'}}>
              <div className="absolute -top-2 left-1/2 w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: metric.color}}></div>
              <div className="absolute top-1/2 -right-2 w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: metric.color, animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-2 left-1/2 w-2 h-2 rounded-full animate-pulse" style={{backgroundColor: metric.color, animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>
        
        {/* Sección central: Valor con mejor ajuste de texto */}
        <div className="flex flex-col items-center text-center flex-1 justify-center">
          <div className="text-5xl md:text-6xl font-black mb-4 drop-shadow-xl relative z-10 group-hover:scale-110 transition-transform duration-300" style={{color: metric.color}}>
            <AnimatedCounter 
              value={metric.value} 
              prefix={metric.prefix} 
              suffix={metric.suffix}
              particles={metric.particles}
              onComplete={() => setIsAnimated(true)}
            />
          </div>
          
          {/* Etiqueta principal ajustada */}
          <div className="text-lg md:text-xl font-bold mb-2 text-center text-white uppercase tracking-wide relative z-10 leading-tight group-hover:text-opacity-90 transition-all px-2">
            {metric.label}
          </div>
          
          {/* Sublabel para la caja del medio si existe */}
          {metric.sublabel && (
            <div className="text-sm md:text-base text-white/90 text-center font-medium relative z-10 leading-snug px-2 mb-2">
              {metric.sublabel}
            </div>
          )}
        </div>
        
        {/* Sección inferior: Descripción y barra de progreso animada */}
        <div className="w-full">
          <div className="text-sm text-white/90 text-center font-medium relative z-10 mb-6 leading-relaxed group-hover:text-white transition-colors px-2">
            {metric.explanation}
          </div>
          
          {/* Barra de progreso decorativa con animación */}
          <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-1000 ${isAnimated ? 'animate-pulse' : ''}`} 
                 style={{
                   backgroundColor: metric.color, 
                   width: isHovered ? '100%' : '80%',
                   boxShadow: `0 0 10px ${metric.color}60`
                 }}></div>
          </div>
          
          {/* Indicador de estado */}
          <div className="flex items-center justify-center mt-3 gap-2">
            <CheckCircleIcon className="h-5 w-5 text-white/60" />
            <span className="text-xs text-white/60 font-medium">Datos actualizados</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente de sector beneficiado mejorado con mejor feedback
const SectorCardWhite = ({ sector, index }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <a
      href={sector.href}
      className="group relative block scroll-animate opacity-0 translate-y-20 transition-all duration-700 focus:outline-none focus:ring-4 focus:ring-blue-300/50 rounded-3xl cascade-item"
      style={{transitionDelay: `${index * 150}ms`}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Contenedor principal con altura fija y efectos mejorados */}
      <div className="relative h-[420px] bg-white/98 backdrop-blur-xl rounded-3xl border-2 border-gray-200/50 shadow-2xl p-8 flex flex-col items-center text-center hover:scale-105 hover:shadow-3xl transition-all duration-500 overflow-hidden group-hover:border-gray-300 group-hover:shadow-xl">
        
        {/* Efectos de fondo sutiles mejorados */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-white rounded-3xl"></div>
        <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-5 animate-pulse group-hover:opacity-15 transition-opacity duration-500"
             style={{backgroundColor: sector.color}}></div>
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-3 animate-pulse group-hover:opacity-10 transition-opacity duration-700"
             style={{backgroundColor: sector.color, animationDelay: '1s'}}></div>
        
        {/* Sección superior: Icono con círculo de color mejorado */}
        <div className="mb-8">
          <div className="relative flex items-center justify-center w-24 h-24 rounded-full border-4 shadow-lg group-hover:scale-110 transition-transform duration-300 bg-white"
               style={{
                 borderColor: sector.color,
                 boxShadow: `0 10px 30px ${sector.color}20, 0 0 0 4px ${sector.color}10`
               }}>
            <sector.icon className="h-12 w-12 group-hover:scale-110 transition-transform duration-300" style={{color: sector.color}} />
            
            {/* Efecto de pulso en el icono */}
            <div className="absolute inset-0 rounded-full animate-ping opacity-20" style={{backgroundColor: sector.color}}></div>
          </div>
        </div>
        
        {/* Sección central: Valor y etiqueta con mejor contraste */}
        <div className="flex flex-col items-center mb-8">
          <div className="text-5xl font-black mb-4 drop-shadow-sm group-hover:scale-110 transition-transform duration-300" style={{color: sector.color}}>
            <AnimatedCounter value={parseInt(sector.value.replace(/[^\d]/g, ''))} 
                            prefix={sector.value.match(/^[^\d]+/)?.[0] || ''} 
                            suffix={sector.value.match(/[^\d]+$/)?.[0] || ''} />
          </div>
          
          {/* TÍTULO MÁS VISIBLE - Mejorado con mejor contraste */}
          <div className="text-xl font-black mb-2 text-gray-900 uppercase tracking-wide leading-tight text-center group-hover:text-gray-800 transition-colors">
            {sector.label}
          </div>
        </div>
        
        {/* Sección inferior: Descripción optimizada con mejor contraste */}
        <div className="flex-1 flex flex-col justify-center w-full">
          {/* DESCRIPCIÓN MÁS VISIBLE - Mejorado con mejor contraste */}
          <div className="text-base text-gray-800 font-semibold leading-relaxed text-center group-hover:text-gray-900 transition-colors">
            {sector.desc}
          </div>
        </div>
        
        {/* Indicador de hover mejorado */}
        <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110">
          <div className="w-10 h-10 rounded-full flex items-center justify-center shadow-lg"
               style={{backgroundColor: `${sector.color}20`, border: `2px solid ${sector.color}`}}>
            <ArrowUpCircleIcon className="h-6 w-6 rotate-90" style={{color: sector.color}} />
          </div>
        </div>
        
        {/* Efecto de brillo en hover mejorado */}
        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
             style={{
               background: `linear-gradient(135deg, transparent 0%, ${sector.color}08 30%, ${sector.color}15 50%, ${sector.color}08 70%, transparent 100%)`
             }}></div>
        
        {/* Barra de progreso inferior */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 rounded-b-3xl overflow-hidden">
          <div className={`h-full transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`} 
               style={{backgroundColor: sector.color}}></div>
        </div>
      </div>
    </a>
  );
};

// Componente de moratoria mejorado
const MoratoriaSection = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  return (
    <section className="relative z-10 w-[95%] mx-auto flex justify-center py-20 px-0">
      <div className="group relative w-full scroll-animate opacity-0 translate-y-20 transition-all duration-700">
        {/* Anillos de energía múltiples */}
        <div className="absolute -inset-6 rounded-3xl border-2 border-blue-400/20 animate-spin opacity-30 group-hover:opacity-60 transition-opacity" style={{animationDuration: '15s'}}></div>
        <div className="absolute -inset-4 rounded-3xl border border-purple-400/30 animate-spin opacity-40 group-hover:opacity-70 transition-opacity" style={{animationDuration: '12s', animationDirection: 'reverse'}}></div>
        
        {/* Contenedor principal mejorado */}
        <div className="relative w-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 backdrop-blur-xl border-2 border-blue-400/40 rounded-3xl shadow-2xl flex flex-col items-center p-16 text-center overflow-hidden group-hover:shadow-blue-500/30 transition-all duration-500">
          
          {/* Efectos de fondo mejorados */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-pink-400/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
          
          {/* Icono principal mejorado */}
          <div className="relative mb-8 flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 border-4 border-blue-400 shadow-inner group-hover:scale-110 transition-transform duration-500">
            <ScaleIcon className="h-16 w-16 text-blue-300 group-hover:scale-110 transition-transform duration-300" />
            
            {/* Partículas orbitales mejoradas */}
            <div className="absolute inset-0 animate-spin" style={{animationDuration: '10s'}}>
              <div className="absolute -top-3 left-1/2 w-4 h-4 bg-blue-400 rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -right-3 w-3 h-3 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-3 left-1/2 w-2 h-2 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
          
          {/* Título con efectos mejorados */}
          <h2 className="relative text-4xl md:text-6xl font-black mb-6 z-10 bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-xl group-hover:scale-105 transition-transform duration-300">
            ALIVIO FISCAL Moratoria 2024
          </h2>
          
          {/* Estadística principal con efectos */}
          <div className="relative text-3xl md:text-5xl font-black mb-8 z-10 text-blue-300 drop-shadow-xl">
            <AnimatedCounter value={10883} suffix=" planes por $5.528 millones" particles="💫" />
          </div>
          
          {/* Descripción adicional */}
          <div className="relative text-lg text-blue-200 mb-8 z-10 max-w-2xl leading-relaxed">
            Facilitamos el cumplimiento tributario con planes de pago accesibles y beneficios especiales para contribuyentes.
          </div>
          
          {/* Botón de acción mejorado */}
          <button className="relative z-10 group/btn">
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover/btn:opacity-60 transition-opacity animate-pulse"></div>
            <div className="relative px-12 py-5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold text-xl rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-blue-400/50">
              <span className="flex items-center gap-3">
                <RocketLaunchIcon className="h-7 w-7 group-hover/btn:scale-110 transition-transform" />
                Más información
                <SparklesIcon className="h-6 w-6 animate-pulse" />
              </span>
            </div>
          </button>
          
          {/* Indicadores de beneficios */}
          <div className="relative flex flex-wrap justify-center gap-4 mt-8 z-10">
            {['Planes flexibles', 'Sin intereses', 'Fácil gestión'].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20">
                <CheckCircleIcon className="h-5 w-5 text-green-400" />
                <span className="text-white font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Componente de sorteos mejorado
const SorteosSection = () => {
  return (
    <section className="relative z-10 w-[95%] mx-auto flex justify-center py-20 px-0">
      <div className="group relative w-full scroll-animate opacity-0 translate-y-20 transition-all duration-700">
        {/* Efectos de confeti espacial mejorados */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 rounded-full animate-bounce opacity-60 group-hover:opacity-100 transition-opacity"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#F59E0B', '#EF4444', '#8B5CF6', '#10B981', '#06B6D4'][i % 5],
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random()}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Contenedor principal mejorado */}
        <div className="relative w-full bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-orange-500/20 backdrop-blur-xl border-2 border-pink-400/40 rounded-3xl shadow-2xl p-16 text-center overflow-hidden group-hover:shadow-pink-500/30 transition-all duration-500">
          
          {/* Efectos de fondo mejorados */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-6 h-6 bg-pink-400/30 rounded-full animate-ping"></div>
            <div className="absolute top-3/4 right-1/4 w-4 h-4 bg-purple-400/30 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-1/4 left-1/2 w-5 h-5 bg-orange-400/30 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
          </div>
          
          {/* Título con efectos mejorados */}
          <h2 className="relative text-4xl md:text-6xl font-black mb-8 z-10 bg-gradient-to-r from-pink-300 via-purple-300 to-orange-300 bg-clip-text text-transparent drop-shadow-xl group-hover:scale-105 transition-transform duration-300">
            🎉 ¡Sorteos de ATM! 🎉
          </h2>
          
          {/* Información de sorteos mejorada */}
          <div className="relative flex flex-col gap-6 mb-10 z-10">
            <div className="flex items-center justify-center gap-4 text-xl font-bold text-white bg-white/10 rounded-2xl p-4 backdrop-blur-sm">
              <GiftIcon className="h-8 w-8 text-pink-400 animate-pulse" />
              <span>Sorteos de Consumidores Finales y Cumplidores del Impuesto Inmobiliario</span>
              <HomeIcon className="h-8 w-8 text-purple-400 animate-pulse" />
            </div>
            
            <div className="flex items-center justify-center gap-4 text-2xl font-bold text-pink-300 bg-pink-500/10 rounded-2xl p-4 backdrop-blur-sm">
              <SparklesIcon className="h-8 w-8 animate-pulse" />
              <span>Los sorteos han finalizado. Gracias por participar.</span>
              <SparklesIcon className="h-8 w-8 animate-pulse" />
            </div>
            
            <div className="flex items-center justify-center gap-3 text-lg text-white/90 bg-white/5 rounded-xl p-3">
              <CalendarIcon className="h-6 w-6 text-cyan-400" />
              <span>Próximamente anunciaremos nuevas fechas para los próximos sorteos.</span>
            </div>
          </div>
          
          {/* Botón principal mejorado */}
          <button className="relative z-10 group/btn mb-8">
            <div className="absolute -inset-2 bg-gradient-to-r from-pink-600 to-orange-600 rounded-full blur-lg opacity-40 group-hover/btn:opacity-60 transition-opacity animate-pulse"></div>
            <div className="relative px-12 py-5 bg-gradient-to-r from-pink-500 to-orange-500 text-white font-bold text-xl rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300 border-2 border-pink-400/50">
              <span className="flex items-center gap-3">
                <TrophyIcon className="h-7 w-7 group-hover/btn:scale-110 transition-transform" />
                Ver los resultados de los Sorteos 2025
                <StarIcon className="h-6 w-6 animate-pulse" />
              </span>
            </div>
          </button>
          
          {/* Botones secundarios mejorados */}
          <div className="relative flex flex-col md:flex-row gap-6 justify-center z-10 mb-8">
            <button className="group/secondary px-10 py-4 rounded-full border-2 border-pink-400/50 text-pink-300 font-bold bg-black/20 hover:bg-pink-500/20 transition-all duration-300 flex items-center gap-3 justify-center hover:scale-105 hover:border-pink-400">
              <GiftIcon className="h-6 w-6 group-hover/secondary:text-pink-200 transition-colors" />
              Sorteo Consumidores Finales
            </button>
            
            <button className="group/secondary px-10 py-4 rounded-full border-2 border-purple-400/50 text-purple-300 font-bold bg-black/20 hover:bg-purple-500/20 transition-all duration-300 flex items-center gap-3 justify-center hover:scale-105 hover:border-purple-400">
              <GiftIcon className="h-6 w-6 group-hover/secondary:text-purple-200 transition-colors" />
              Sorteo Cumplidores Inmobiliarios
            </button>
          </div>
          
          {/* Mensaje final mejorado */}
          <div className="relative text-lg text-white/80 z-10 bg-white/5 rounded-xl p-4 backdrop-blur-sm">
            <HeartIcon className="h-6 w-6 text-red-400 inline mr-2" />
            ¡Exigí tu factura o mantené tu impuesto al día y participá automáticamente!
            <HeartIcon className="h-6 w-6 text-red-400 inline ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default function BeneficiosATM() {
  useScrollAnimation();

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Fondo espacial mejorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900"></div>
      
      {/* Estrellas animadas mejoradas */}
      <div className="absolute inset-0">
        {[...Array(150)].map((_, i) => (
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

      {/* Ondas de energía mejoradas */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 border border-cyan-400/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 border border-purple-400/20 rounded-full animate-ping" style={{animationDuration: '6s', animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-pink-400/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 border border-yellow-400/15 rounded-full animate-ping" style={{animationDuration: '8s', animationDelay: '4s'}}></div>
      </div>

      {/* HERO INSTITUCIONAL */}
      <div className="relative z-10">
        <HeroBeneficiosATM 
          badge="🚀 Agencia Tributaria Misiones"
          title="Beneficios otorgados por la Agencia Tributaria de Misiones"
          subtitle="Exenciones, bonificaciones, sorteos y más. Descubrí cómo aprovechar estas oportunidades espaciales."
        />
      </div>

      {/* MÉTRICAS ESPACIALES CON TEXTOS AJUSTADOS */}
      <section className="relative z-10 w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-20 px-0 scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
        {metrics.map((metric, i) => (
          <SpaceMetricCard key={i} metric={metric} index={i} />
        ))}
      </section>

      {/* MORATORIA ESPACIAL */}
      <MoratoriaSection />

      {/* SORTEOS ESPACIALES */}
      <SorteosSection />

      {/* SECTORES BENEFICIADOS - FONDO BLANCO */}
      <section id="sectores" className="relative z-10 py-24 px-4">
        {/* Fondo blanco para la sección */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-blue-50"></div>
        
        {/* Efectos decorativos sutiles en fondo blanco */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-100/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-100/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-black mb-20 text-center bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent drop-shadow-xl scroll-animate opacity-0 translate-y-20 transition-all duration-700">
            Sectores Beneficiados
          </h2>
          
          {/* Grid de 3 columnas para los primeros 3 elementos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
            {sectores.slice(0, 3).map((sector, i) => (
              <SectorCardWhite key={i} sector={sector} index={i} />
            ))}
          </div>
          
          {/* Grid de 2 columnas centradas para los últimos 2 elementos */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto scroll-animate opacity-0 translate-y-20 transition-all duration-1000">
            {sectores.slice(3, 5).map((sector, i) => (
              <SectorCardWhite key={i + 3} sector={sector} index={i + 3} />
            ))}
          </div>
        </div>
      </section>

      {/* BOTÓN FLOTANTE ESPACIAL MEJORADO */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
        className="fixed bottom-8 right-8 z-50 group"
      >
        <div className="absolute -inset-4 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
        <div className="relative w-18 h-18 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 flex items-center justify-center border-2 border-cyan-400/50 p-4">
          <ArrowUpCircleIcon className="h-10 w-10 text-white group-hover:scale-110 transition-transform" />
        </div>
      </button>

      {/* CSS personalizado para animaciones mejoradas */}
      <style jsx>{`
        .animate-slide-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .cascade-item {
          transition-delay: inherit;
        }
      `}</style>
    </div>
  );
}