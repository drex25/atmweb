import React, { useEffect, useRef, useState } from 'react';
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
  LightBulbIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  ClockIcon,
  DocumentTextIcon,
  BuildingOfficeIcon,
  AcademicCapIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  BanknotesIcon,
  BuildingStorefrontIcon,
  HandRaisedIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  PlayIcon,
  PauseIcon,
  ForwardIcon,
  BackwardIcon,
  InformationCircleIcon
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

// Componente contador animado mejorado
function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1500, className = '' }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const startTime = performance.now();
    function animate(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const current = Math.floor(progress * value);
      setDisplayValue(current);
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    }
    requestAnimationFrame(animate);
    return () => setDisplayValue(value);
  }, [value, duration]);

  return (
    <span className={className}>
      {prefix}{displayValue.toLocaleString()}{suffix}
    </span>
  );
}

// Sección de Estadísticas Interactivas Modernas
const ModernStatsSection = () => {
  const stats = [
    { label: "PREMIOS ENTREGADOS", value: 465, icon: TrophyIcon, color: "from-amber-500 to-orange-500" },
    { label: "EXIMIDOS IMPOSITIVAMENTE", value: 5400, icon: CurrencyDollarIcon, color: "from-emerald-500 to-green-500", suffix: " millones anuales", prefix: "+ $" },
    { label: "EXENCIONES IMPOSITIVAS OTORGADAS", value: 61000, icon: ScaleIcon, color: "from-purple-500 to-violet-500" }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <ChartBarIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Estadísticas en Tiempo Real</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Impacto de Nuestros Beneficios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubrí los números que reflejan nuestro compromiso con la comunidad misionera
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group scroll-animate opacity-0 translate-y-20 transition-all duration-700 cascade-item"
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 flex flex-col items-center justify-center min-h-[340px] max-h-[340px] w-full md:w-[380px] mx-auto text-center">
                {/* Fondo gradiente sutil */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-5 rounded-3xl`}></div>
                
                {/* Icono */}
                <div className={`relative w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Valor */}
                <div className="text-center mb-4">
                  <div className="text-5xl font-black mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </div>
                  <div className="text-base font-bold text-gray-700 uppercase tracking-wider">{stat.label}</div>
                </div>
                
                {/* Indicador de progreso */}
                <div className="w-full bg-gray-200 rounded-full h-2 mt-auto">
                  <div 
                    className={`h-2 bg-gradient-to-r ${stat.color} rounded-full transition-all duration-1000`}
                    style={{width: `${Math.min((stat.value / 1000) * 100, 100)}%`}}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección de Moratoria Moderna
const ModernMoratoriaSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <ScaleIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Alivio Fiscal</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Moratoria 2024
          </h2>
          
          <div className="text-3xl font-black mb-8 text-blue-600">
            <AnimatedCounter value={10883} suffix=" planes por $5.528 millones" />
          </div>
          
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Facilitamos el cumplimiento tributario con planes de pago accesibles y beneficios especiales para contribuyentes.
          </p>
        </div>
        
        {/* Botón principal */}
        <div className="text-center mb-12">
          <button className="group relative inline-block">
            <div className="absolute -inset-1 bg-blue-500 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
            <div className="relative inline-flex items-center gap-4 px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
              <RocketLaunchIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              Más información
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
        </div>
        
        {/* Beneficios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[
            { icon: ClockIcon, title: 'Planes Flexibles', desc: 'Pagos adaptados a tu capacidad económica' },
            { icon: ShieldCheckIcon, title: 'Sin Intereses', desc: 'Beneficios especiales sin cargos adicionales' },
            { icon: DocumentTextIcon, title: 'Fácil Gestión', desc: 'Proceso simplificado y accesible' }
          ].map((benefit, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm border-2 border-blue-200 rounded-3xl p-8 text-center hover:shadow-xl transition-all duration-500 hover:scale-105">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección de Sorteos Moderna
const ModernSorteosSection = () => {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Fondo premium con múltiples capas */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,72,153,0.1),transparent_70%)]"></div>
        
        {/* Textura sutil */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Sistema de partículas mejorado */}
      <div className="absolute inset-0">
        {/* Ondas concéntricas más sofisticadas */}
        <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] border border-indigo-400/10 rounded-full animate-spin" style={{animationDuration: '20s'}}></div>
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] border border-purple-400/10 rounded-full animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-pink-400/5 rounded-full animate-pulse" style={{animationDuration: '4s'}}></div>
        
        {/* Partículas flotantes más elegantes */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-pulse ${
              i % 3 === 0 ? 'w-1 h-1 bg-cyan-400/40' :
              i % 3 === 1 ? 'w-0.5 h-0.5 bg-purple-400/30' :
              'w-1.5 h-1.5 bg-pink-400/20'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Líneas de conexión sutiles */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.3"/>
              <stop offset="50%" stopColor="#a855f7" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1"/>
            </linearGradient>
          </defs>
          <path d="M0,100 Q400,50 800,100 T1600,100" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse"/>
          <path d="M0,200 Q600,150 1200,200 T2400,200" stroke="url(#lineGradient)" strokeWidth="1" fill="none" className="animate-pulse" style={{animationDelay: '2s'}}/>
        </svg>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header premium mejorado */}
        <div className="text-center mb-24">
          {/* Badge premium */}
          <div className="inline-flex items-center gap-4 mb-12">
            <div className="relative">
              <div className="absolute -inset-3 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-50 animate-pulse"></div>
              <div className="relative w-20 h-20 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-600 rounded-3xl flex items-center justify-center shadow-2xl border-2 border-white/30 backdrop-blur-sm">
                <TrophyIcon className="h-10 w-10 text-white drop-shadow-lg" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full animate-ping"></div>
              </div>
            </div>
            <div className="text-left space-y-1">
              <span className="block text-sm font-bold text-cyan-300 uppercase tracking-[0.2em] opacity-90">Programa de Incentivos</span>
              <span className="block text-2xl font-black text-white tracking-tight">Sorteos ATM 2025</span>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-300 font-medium">Sistema Activo</span>
              </div>
            </div>
          </div>
          
          {/* Título principal mejorado */}
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-black mb-12 leading-none tracking-tighter">
            <span className="bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent drop-shadow-2xl">
              SORTEOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent drop-shadow-2xl">
              DIGITALES
            </span>
          </h2>
          
          {/* Subtítulo mejorado */}
          <p className="text-xl md:text-2xl text-cyan-100/90 max-w-4xl mx-auto leading-relaxed font-light">
            Participá automáticamente en nuestros sorteos digitales cumpliendo con tus obligaciones fiscales.
            <span className="block mt-2 text-lg text-purple-200/80">Una nueva forma de premiar el cumplimiento tributario.</span>
          </p>
        </div>
        
        {/* Panel principal premium */}
        <div className="relative max-w-6xl mx-auto mb-20">
          {/* Efectos de fondo del panel mejorados */}
          <div className="absolute -inset-6 bg-gradient-to-r from-cyan-500/15 via-purple-500/15 to-pink-500/15 rounded-[3rem] blur-2xl"></div>
          <div className="absolute -inset-2 bg-gradient-to-br from-white/5 to-white/10 rounded-[2.5rem] backdrop-blur-2xl border border-white/20"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 rounded-[2rem] backdrop-blur-xl"></div>
          
          <div className="relative p-12 md:p-16">
            {/* Estado actual mejorado */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/40 mb-8 backdrop-blur-md shadow-xl">
                <div className="relative">
                  <div className="w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-4 h-4 bg-orange-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-orange-200 font-bold text-base uppercase tracking-wider">Estado Actual del Sistema</span>
              </div>
              
              <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tight">
                Sorteos 2024 Finalizados
              </h3>
              <p className="text-cyan-200/90 text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
                Gracias a todos los participantes por hacer de este programa un éxito. 
                <span className="block mt-2 text-lg text-purple-200/80">Los próximos sorteos se anunciarán en nuestros canales oficiales.</span>
              </p>
            </div>
            
            {/* Categorías de sorteos mejoradas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative bg-black/30 backdrop-blur-2xl rounded-3xl p-10 border border-emerald-400/40 hover:border-emerald-400/60 transition-all duration-500 hover:scale-105 transform">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-xl">
                      <UsersIcon className="h-8 w-8 text-white drop-shadow-lg" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-300 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white tracking-tight">Consumidores Finales</h4>
                      <p className="text-emerald-200 text-base font-medium">Exigí tu factura y participá</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Participá automáticamente al exigir facturas en tus compras. Cada factura válida es una oportunidad de ganar increíbles premios.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                    <span className="text-emerald-300 text-sm font-medium">Participación automática</span>
                  </div>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 group-hover:opacity-60 transition-all duration-500"></div>
                <div className="relative bg-black/30 backdrop-blur-2xl rounded-3xl p-10 border border-purple-400/40 hover:border-purple-400/60 transition-all duration-500 hover:scale-105 transform">
                  <div className="flex items-center gap-5 mb-6">
                    <div className="relative w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl flex items-center justify-center shadow-xl">
                      <HomeIcon className="h-8 w-8 text-white drop-shadow-lg" />
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-pink-300 rounded-full animate-pulse"></div>
                    </div>
                    <div>
                      <h4 className="text-2xl font-black text-white tracking-tight">Cumplidores Inmobiliarios</h4>
                      <p className="text-purple-200 text-base font-medium">Mantené al día tus impuestos</p>
                    </div>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Cumplí con el Impuesto Inmobiliario en tiempo y forma para participar automáticamente en sorteos exclusivos.
                  </p>
                  <div className="mt-6 flex items-center gap-2">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-purple-300 text-sm font-medium">Cumplimiento premiado</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Próximos sorteos mejorado */}
            <div className="text-center">
              <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/40 mb-8 backdrop-blur-md shadow-xl">
                <div className="relative">
                  <CalendarIcon className="h-6 w-6 text-blue-300" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-blue-200 font-bold text-base uppercase tracking-wider">Próximamente 2025</span>
              </div>
              <h4 className="text-3xl md:text-4xl font-black text-white mb-6 tracking-tight">Nueva Temporada de Sorteos</h4>
              <p className="text-gray-200 text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
                Mantente atento a nuestros canales oficiales para conocer las fechas, premios y modalidades de los próximos sorteos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Botones de acción premium */}
        <div className="flex flex-col md:flex-row gap-8 justify-center mb-20">
          <button className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl blur-xl opacity-50 group-hover:opacity-70 transition-all duration-500"></div>
            <div className="relative inline-flex items-center gap-4 px-12 py-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black text-xl rounded-3xl shadow-2xl hover:scale-105 transition-all duration-300 border-2 border-cyan-400/40 backdrop-blur-sm">
              <TrophyIcon className="h-7 w-7 group-hover:scale-110 transition-transform drop-shadow-lg" />
              Ver Resultados 2024
              <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button className="group relative">
            <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-all duration-500"></div>
            <div className="relative inline-flex items-center gap-4 px-12 py-6 bg-transparent border-2 border-purple-400/60 text-purple-200 font-black text-xl rounded-3xl hover:bg-purple-500/20 transition-all duration-300 backdrop-blur-md shadow-xl hover:scale-105">
              <InformationCircleIcon className="h-7 w-7 group-hover:scale-110 transition-transform" />
              Cómo Participar
            </div>
          </button>
        </div>
        
        {/* Call to action final mejorado */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-[2.5rem] blur-2xl opacity-40 animate-pulse"></div>
            <div className="relative bg-black/50 backdrop-blur-2xl rounded-[2rem] p-12 border-2 border-white/30 shadow-2xl">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-white">
                <SparklesIcon className="h-10 w-10 text-cyan-400 animate-pulse" />
                <span className="text-2xl md:text-3xl font-black text-center leading-tight">
                  ¡Cumplí con tus obligaciones y participá automáticamente!
                </span>
                <SparklesIcon className="h-10 w-10 text-pink-400 animate-pulse" />
              </div>
              <div className="mt-4 text-center">
                <p className="text-lg text-gray-300 font-medium">
                  Tu cumplimiento fiscal tiene recompensa
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección de Sectores Beneficiados Moderna
const ModernSectoresSection = () => {
  const sectores = [
    {
      icon: UserGroupIcon, 
      label: 'Productores Primarios', 
      value: '+9,000', 
      desc: 'Conocé los requisitos para acceder a los beneficios del Impuesto sobre los Ingresos Brutos para productores primarios.', 
      href: '/requisitos/productores-primarios',
      color: 'from-emerald-500 to-green-500',
      bgColor: 'from-emerald-50 to-green-50',
      borderColor: 'border-emerald-200'
    },
    {
      icon: UserIcon, 
      label: 'Jubilados y Pensionados', 
      value: '+4,080', 
      desc: 'Conocé los requisitos para acceder a los beneficios del Impuesto Inmobiliario Básico para jubilados y pensionados.', 
      href: '/requisitos/jubilados-pensionados',
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50',
      borderColor: 'border-red-200'
    },
    {
      icon: IdentificationIcon, 
      label: 'Personas con CUD', 
      value: '+1,222', 
      desc: 'Beneficios del Impuesto Provincial Automotor para personas con discapacidad permanente.', 
      href: '/requisitos/personas-cud',
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50',
      borderColor: 'border-purple-200'
    },
    {
      icon: KeyIcon, 
      label: 'Adjudicatarios Vivienda IPRODHA', 
      value: '+20,781', 
      desc: 'Conocé los requisitos para acceder a los beneficios del Impuesto Provincial Automotor para personas con discapacidad permanente.', 
      href: '/requisitos/adjudicatarios-vivienda',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200'
    },
    {
      icon: ScaleIcon, 
      label: 'Otras Exenciones y Bonificaciones', 
      value: '+26,000', 
      desc: 'Conocé sobre las demás exenciones impositivas disponibles para diversas actividades y grupos.', 
      href: '/requisitos/otras-exenciones',
      color: 'from-orange-500 to-amber-500',
      bgColor: 'from-orange-50 to-amber-50',
      borderColor: 'border-orange-200'
    },
  ];

  return (
    <section id="sectores" className="py-24 px-6 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <HandRaisedIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Sectores Beneficiados</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Sectores Beneficiados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conocé los diferentes grupos que se benefician con nuestros programas
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sectores.slice(0, 3).map((sector, i) => (
            <div 
              key={i}
              className="group scroll-animate opacity-0 translate-y-20 transition-all duration-700 cascade-item"
              style={{transitionDelay: `${i * 150}ms`}}
            >
              <div className={`relative bg-gradient-to-br ${sector.bgColor} border-2 border-transparent rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group-hover:border-gray-200 flex flex-col items-center justify-center min-h-[340px] max-h-[340px] w-full md:w-[380px] mx-auto text-center`}>
                {/* Icono */}
                <div className={`w-16 h-16 bg-gradient-to-r ${sector.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <sector.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Valor */}
                <div className="text-center mb-4">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    <AnimatedCounter value={parseInt(sector.value.replace(/[^\d]/g, ''))} prefix={sector.value.match(/^[^\d]+/)?.[0] || ''} suffix={sector.value.match(/[^\d]+$/)?.[0] || ''} />
                  </div>
                  <div className="text-lg font-bold text-gray-800 uppercase tracking-wide">{sector.label}</div>
                </div>
                
                {/* Descripción */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">{sector.desc}</p>
                </div>
                
                {/* Botón de acción */}
                <div className="text-center">
                  <a 
                    href={sector.href} 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group/link"
                  >
                    Ver requisitos
                    <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sectores.slice(3, 5).map((sector, i) => (
            <div 
              key={i + 3}
              className="group scroll-animate opacity-0 translate-y-20 transition-all duration-700 cascade-item"
              style={{transitionDelay: `${(i + 3) * 150}ms`}}
            >
              <div className={`relative bg-gradient-to-br ${sector.bgColor} border-2 border-transparent rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group-hover:border-gray-200 flex flex-col items-center justify-center min-h-[340px] max-h-[340px] w-full md:w-[380px] mx-auto text-center`}>
                {/* Icono */}
                <div className={`w-16 h-16 bg-gradient-to-r ${sector.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg`}>
                  <sector.icon className="h-8 w-8 text-white" />
                </div>
                
                {/* Valor */}
                <div className="text-center mb-4">
                  <div className="text-3xl font-black mb-2 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                    <AnimatedCounter value={parseInt(sector.value.replace(/[^\d]/g, ''))} prefix={sector.value.match(/^[^\d]+/)?.[0] || ''} suffix={sector.value.match(/[^\d]+$/)?.[0] || ''} />
                  </div>
                  <div className="text-lg font-bold text-gray-800 uppercase tracking-wide">{sector.label}</div>
                </div>
                
                {/* Descripción */}
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 leading-relaxed">{sector.desc}</p>
                </div>
                
                {/* Botón de acción */}
                <div className="text-center">
                  <a 
                    href={sector.href} 
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group/link"
                  >
                    Ver requisitos
                    <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default function BeneficiosATM() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* HERO INSTITUCIONAL */}
      <section className="w-full px-0 bg-white">
        <HeroBeneficiosATM 
          badge="🚀 Agencia Tributaria Misiones"
          title="Beneficios otorgados por la Agencia Tributaria de Misiones"
          subtitle="Exenciones, bonificaciones, sorteos y más. Descubrí cómo aprovechar estas oportunidades."
        />
      </section>

      {/* ESTADÍSTICAS INTERACTIVAS MODERNAS */}
      <ModernStatsSection />

      {/* MORATORIA MODERNA */}
      <ModernMoratoriaSection />

      {/* SORTEOS MODERNOS */}
      <ModernSorteosSection />

      {/* SECTORES BENEFICIADOS MODERNOS */}
      <ModernSectoresSection />

      {/* Animaciones CSS */}
      <style jsx>{`
        .animate-slide-up {
          opacity: 0;
          transform: translateY(40px);
          animation: slideUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        @keyframes slideUp {
          to {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}