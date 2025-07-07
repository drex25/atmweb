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
    <section className="py-24 px-6 bg-gradient-to-br from-white via-yellow-50 to-yellow-100 relative overflow-hidden">
      {/* Efectos decorativos dorados sutiles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-yellow-200/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-yellow-300/20 rounded-full blur-2xl z-0"></div>
      <div className="relative z-10 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-yellow-300 rounded-2xl flex items-center justify-center shadow-2xl">
              <TrophyIcon className="h-8 w-8 text-yellow-600" />
            </div>
            <span className="text-lg font-bold text-yellow-700 uppercase tracking-wider" style={{fontFamily: 'serif'}}>¡Sorteos de ATM!</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black mb-6 text-gray-800 tracking-tight" style={{fontFamily: 'serif', letterSpacing: '-1px'}}>
            ¡Participá y Ganá!
          </h2>
        </div>
        {/* Tarjeta central glassmorphism dorado */}
        <div className="mx-auto max-w-3xl mb-12">
          <div className="relative bg-white/70 backdrop-blur-xl border-2 border-yellow-300 rounded-3xl shadow-2xl p-12 flex flex-col items-center justify-center">
            <div className="flex items-center justify-center gap-4 text-2xl md:text-3xl font-bold text-gray-700 mb-4" style={{fontFamily: 'serif'}}>
              <TrophyIcon className="h-8 w-8 text-yellow-500" />
              Sorteos de Consumidores Finales y Cumplidores del Impuesto Inmobiliario
            </div>
            <div className="flex items-center justify-center gap-4 text-2xl font-bold text-yellow-700 mb-2" style={{fontFamily: 'serif'}}>
              Los sorteos han finalizado. Gracias por participar.
            </div>
            <div className="flex items-center justify-center gap-3 text-lg text-gray-600 mb-2">
              <CalendarIcon className="h-6 w-6 text-yellow-500" />
              Próximamente anunciaremos nuevas fechas para los próximos sorteos.
            </div>
          </div>
        </div>
        {/* Botón principal dorado */}
        <div className="text-center mb-10">
          <button className="group relative inline-block">
            <span className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full blur opacity-30 group-hover:opacity-60 transition-opacity"></span>
            <span className="relative inline-flex items-center gap-4 px-12 py-6 bg-white text-yellow-700 font-extrabold text-xl rounded-full shadow-xl border-2 border-yellow-400 hover:bg-yellow-50 transition-all duration-300" style={{fontFamily: 'serif'}}>
              <TrophyIcon className="h-7 w-7 text-yellow-500" />
              Ver los resultados de los Sorteos 2025
              <StarIcon className="h-6 w-6 text-yellow-400" />
            </span>
          </button>
        </div>
        {/* Botones secundarios */}
        <div className="flex flex-col md:flex-row gap-6 justify-center mb-12">
          <button className="px-10 py-4 rounded-full border-2 border-yellow-300 text-yellow-700 font-bold bg-white hover:bg-yellow-50 transition-all duration-300 flex items-center gap-3 justify-center hover:scale-105 shadow-md" style={{fontFamily: 'serif'}}>
            <GiftIcon className="h-6 w-6 text-yellow-500" />
            Sorteo Consumidores Finales
          </button>
          <button className="px-10 py-4 rounded-full border-2 border-yellow-300 text-yellow-700 font-bold bg-white hover:bg-yellow-50 transition-all duration-300 flex items-center gap-3 justify-center hover:scale-105 shadow-md" style={{fontFamily: 'serif'}}>
            <GiftIcon className="h-6 w-6 text-yellow-500" />
            Sorteo Cumplidores Inmobiliarios
          </button>
        </div>
        {/* Mensaje final elegante */}
        <div className="text-center">
          <div className="inline-block text-lg text-yellow-800 bg-white/90 backdrop-blur rounded-2xl p-6 border-2 border-yellow-200 shadow-lg font-semibold" style={{fontFamily: 'serif'}}>
            <TrophyIcon className="h-6 w-6 text-yellow-500 inline mr-2" />
            ¡Exigí tu factura o mantené tu impuesto al día y participá automáticamente!
            <TrophyIcon className="h-6 w-6 text-yellow-500 inline ml-2" />
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

// Sección de Beneficios por Categoría
const BenefitsByCategorySection = () => {
  const categories = [
    {
      title: "Productores Primarios",
      icon: UserGroupIcon,
      color: "from-emerald-500 to-green-500",
      bgColor: "from-emerald-50 to-green-50",
      stats: { beneficiaries: 9000, savings: 25 },
      features: ["Exención IIBB", "Bonificaciones especiales", "Asesoramiento técnico"],
      href: "/requisitos/productores-primarios"
    },
    {
      title: "Jubilados y Pensionados",
      icon: UserIcon,
      color: "from-red-500 to-pink-500",
      bgColor: "from-red-50 to-pink-50",
      stats: { beneficiaries: 4080, savings: 15 },
      features: ["Exención Inmobiliario", "Descuentos especiales", "Trámites simplificados"],
      href: "/requisitos/jubilados-pensionados"
    },
    {
      title: "Personas con Discapacidad",
      icon: IdentificationIcon,
      color: "from-purple-500 to-violet-500",
      bgColor: "from-purple-50 to-violet-50",
      stats: { beneficiaries: 1222, savings: 30 },
      features: ["Exención Automotor", "Accesibilidad total", "Acompañamiento personalizado"],
      href: "/requisitos/personas-cud"
    },
    {
      title: "Adjudicatarios IPRODHA",
      icon: KeyIcon,
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-50 to-blue-50",
      stats: { beneficiaries: 20781, savings: 40 },
      features: ["Exención Inmobiliario", "Primera vivienda", "Planes de pago"],
      href: "/requisitos/adjudicatarios-vivienda"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-gray-50 to-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <HandRaisedIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wider">Beneficios por Categoría</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Beneficios Especializados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada sector tiene beneficios específicos diseñados para sus necesidades particulares
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="group scroll-animate opacity-0 translate-y-20 transition-all duration-700 cascade-item"
              style={{transitionDelay: `${index * 150}ms`}}
            >
              <div className={`relative bg-gradient-to-br ${category.bgColor} border-2 border-transparent rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group-hover:border-gray-200`}>
                {/* Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-gray-800">{category.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <UsersIcon className="h-4 w-4" />
                        {category.stats.beneficiaries.toLocaleString()} beneficiarios
                      </span>
                      <span className="flex items-center gap-1">
                        <CurrencyDollarIcon className="h-4 w-4" />
                        ${category.stats.savings}M ahorro
                      </span>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-6">
                  {category.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircleIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex justify-between items-center">
                  <a 
                    href={category.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors group/link"
                  >
                    Ver requisitos
                    <ArrowRightIcon className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                  </a>
                  <div className="text-right">
                    <div className="text-2xl font-black text-gray-800">
                      <AnimatedCounter value={category.stats.beneficiaries} />
                    </div>
                    <div className="text-xs text-gray-500">beneficiarios</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección de Testimonios Modernos
const ModernTestimonialsSection = () => {
  const testimonials = [
    {
      name: "María González",
      role: "Productora Primaria",
      location: "Posadas",
      content: "Los beneficios de ATM me permitieron mantener mi producción sin preocupaciones impositivas. El proceso fue muy simple y el ahorro significativo.",
      avatar: "👩‍🌾",
      rating: 5
    },
    {
      name: "Carlos Rodríguez",
      role: "Jubilado",
      location: "Oberá",
      content: "Como jubilado, los descuentos en el impuesto inmobiliario me ayudan mucho. ATM hace que todo sea accesible y transparente.",
      avatar: "👨‍🦳",
      rating: 5
    },
    {
      name: "Ana Martínez",
      role: "Adjudicataria IPRODHA",
      location: "Eldorado",
      content: "Gracias a las exenciones de ATM, pude acceder a mi primera vivienda sin la carga adicional de impuestos. Excelente programa.",
      avatar: "👩‍💼",
      rating: 5
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-amber-50 via-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-amber-600 to-orange-600 rounded-xl flex items-center justify-center shadow-lg">
              <StarIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-amber-600 uppercase tracking-wider">Testimonios Reales</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Lo que dicen nuestros beneficiarios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Historias reales de personas que se han beneficiado con nuestros programas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group scroll-animate opacity-0 translate-y-20 transition-all duration-700 cascade-item"
              style={{transitionDelay: `${index * 200}ms`}}
            >
              <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.location}</div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 text-4xl opacity-10">"</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Sección de Proceso de Beneficios
const BenefitsProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Identificación",
      description: "Identificamos si calificás para algún beneficio según tu situación",
      icon: MagnifyingGlassIcon,
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      title: "Documentación",
      description: "Te guiamos en la documentación necesaria para tu caso específico",
      icon: DocumentTextIcon,
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "03",
      title: "Presentación",
      description: "Presentamos tu solicitud de manera eficiente y transparente",
      icon: HandRaisedIcon,
      color: "from-purple-500 to-violet-500"
    },
    {
      number: "04",
      title: "Aprobación",
      description: "Recibís la aprobación y comenzás a disfrutar de tus beneficios",
      icon: CheckCircleIcon,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-slate-600 to-gray-600 rounded-xl flex items-center justify-center shadow-lg">
              <RocketLaunchIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Proceso Simplificado</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-800">
            Cómo acceder a tus beneficios
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un proceso simple y transparente para que puedas disfrutar de todos los beneficios
          </p>
        </div>

        <div className="relative">
          {/* Línea conectora */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-200 via-green-200 via-purple-200 to-amber-200 transform -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="group scroll-animate opacity-0 translate-y-20 transition-all duration-700 cascade-item"
                style={{transitionDelay: `${index * 200}ms`}}
              >
                <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 text-center">
                  {/* Número */}
                  <div className="text-6xl font-black text-gray-200 mb-4">{step.number}</div>
                  
                  {/* Icono */}
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Contenido */}
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                  
                  {/* Indicador de progreso */}
                  <div className="mt-6">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${step.color} rounded-full transition-all duration-1000`}
                        style={{width: `${((index + 1) / steps.length) * 100}%`}}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Sección CTA Moderna
const ModernCTASection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center text-white">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
              <RocketLaunchIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">¡Comienza Ahora!</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            ¿Listo para acceder a tus beneficios?
          </h2>
          
          <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Descubrí qué beneficios te corresponden y comenzá a ahorrar en tus impuestos hoy mismo
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="group relative inline-block">
              <div className="absolute -inset-1 bg-white/20 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative inline-flex items-center gap-4 px-10 py-5 bg-white text-indigo-600 font-bold text-lg rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
                <MagnifyingGlassIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
                Verificar mi elegibilidad
                <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
            
            <button className="inline-flex items-center gap-4 px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-full hover:bg-white/10 transition-all duration-300">
              <PhoneIcon className="h-6 w-6" />
              Contactar asesor
            </button>
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { icon: ClockIcon, text: "Respuesta en 24h" },
              { icon: ShieldCheckIcon, text: "Proceso seguro" },
              { icon: CheckCircleIcon, text: "100% gratuito" }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 justify-center text-white/90">
                <item.icon className="h-5 w-5" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
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

      {/* BENEFICIOS POR CATEGORÍA */}
      <BenefitsByCategorySection />

      {/* TESTIMONIOS MODERNOS */}
      <ModernTestimonialsSection />

      {/* PROCESO DE BENEFICIOS */}
      <BenefitsProcessSection />

      {/* CTA MODERNA */}
      <ModernCTASection />

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