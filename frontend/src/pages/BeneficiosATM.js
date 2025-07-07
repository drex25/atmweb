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
  BackwardIcon
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
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Fondo futurista con gradientes dinámicos */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      
      {/* Efectos de partículas y ondas */}
      <div className="absolute inset-0">
        {/* Ondas concéntricas animadas */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-cyan-400/20 rounded-full animate-ping" style={{animationDuration: '4s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-purple-400/20 rounded-full animate-ping" style={{animationDuration: '3s', animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-pink-400/20 rounded-full animate-ping" style={{animationDuration: '2s', animationDelay: '2s'}}></div>
        
        {/* Partículas flotantes */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header futurista */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-lg opacity-40 animate-pulse"></div>
              <div className="relative w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white/20">
                <TrophyIcon className="h-8 w-8 text-white" />
              </div>
            </div>
            <div className="text-left">
              <span className="block text-sm font-bold text-cyan-300 uppercase tracking-wider">Programa de Incentivos</span>
              <span className="block text-lg font-black text-white">Sorteos ATM 2025</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black mb-8 leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              SORTEOS
            </span>
            <br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              DIGITALES
            </span>
          </h2>
          
          <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
            Participá automáticamente en nuestros sorteos digitales cumpliendo con tus obligaciones fiscales
          </p>
        </div>
        
        {/* Panel principal holográfico */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Efectos de fondo del panel */}
          <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-xl"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-3xl backdrop-blur-xl border border-white/20"></div>
          
          <div className="relative p-12">
            {/* Estado actual */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-400/30 mb-6">
                <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                <span className="text-orange-200 font-bold text-sm uppercase tracking-wide">Estado Actual</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Sorteos 2024 Finalizados
              </h3>
              <p className="text-cyan-200 text-lg mb-8">
                Gracias a todos los participantes. Los próximos sorteos se anunciarán pronto.
              </p>
            </div>
            
            {/* Categorías de sorteos */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-emerald-400/30 hover:border-emerald-400/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-xl flex items-center justify-center">
                      <UsersIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Consumidores Finales</h4>
                      <p className="text-emerald-200 text-sm">Exigí tu factura</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Participá automáticamente al exigir facturas en tus compras. Cada factura es una oportunidad de ganar.
                  </p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <div className="relative bg-black/40 backdrop-blur-xl rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/50 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-xl flex items-center justify-center">
                      <HomeIcon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">Cumplidores Inmobiliarios</h4>
                      <p className="text-purple-200 text-sm">Mantené al día tus impuestos</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Cumplí con el Impuesto Inmobiliario en tiempo y forma para participar automáticamente.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Próximos sorteos */}
            <div className="text-center">
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-indigo-500/20 border border-blue-400/30 mb-6">
                <CalendarIcon className="h-5 w-5 text-blue-300" />
                <span className="text-blue-200 font-bold text-sm uppercase tracking-wide">Próximamente</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Sorteos 2025</h4>
              <p className="text-gray-300 mb-8">
                Mantente atento a nuestros canales oficiales para conocer las fechas de los próximos sorteos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Botones de acción futuristas */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-16">
          <button className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative inline-flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-2xl shadow-xl hover:scale-105 transition-all duration-300 border border-cyan-400/30">
              <TrophyIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              Ver Resultados 2024
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button className="group relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-lg opacity-40 group-hover:opacity-60 transition-opacity"></div>
            <div className="relative inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-purple-400/50 text-purple-200 font-bold text-lg rounded-2xl hover:bg-purple-500/10 transition-all duration-300 backdrop-blur-md">
              <InformationCircleIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              Cómo Participar
            </div>
          </button>
        </div>
        
        {/* Call to action final */}
        <div className="text-center">
          <div className="relative inline-block">
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
            <div className="relative bg-black/60 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center justify-center gap-4 text-white">
                <SparklesIcon className="h-8 w-8 text-cyan-400 animate-pulse" />
                <span className="text-xl md:text-2xl font-bold">
                  ¡Cumplí con tus obligaciones y participá automáticamente!
                </span>
                <SparklesIcon className="h-8 w-8 text-pink-400 animate-pulse" />
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