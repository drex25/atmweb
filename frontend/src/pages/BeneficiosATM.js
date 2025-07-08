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

// Sección de Sorteos Minimalista
const ModernSorteosSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header minimalista */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <TrophyIcon className="h-6 w-6 text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">Programa de Incentivos</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black mb-6 text-gray-900">
            Sorteos Digitales
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Participá automáticamente en nuestros sorteos digitales cumpliendo con tus obligaciones fiscales.
          </p>
        </div>
        
        {/* Estado actual */}
        <div className="bg-gradient-to-r from-orange-50 to-red-50 border border-orange-200 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-orange-100 border border-orange-300 mb-4">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span className="text-orange-700 font-semibold text-sm">Estado del Sistema</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Sorteos 2024 Finalizados
            </h3>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Gracias a todos los participantes por hacer de este programa un éxito. 
              Los próximos sorteos se anunciarán en nuestros canales oficiales.
            </p>
          </div>
        </div>
        
        {/* Categorías de sorteos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                  <UsersIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Consumidores Finales</h4>
                  <p className="text-blue-600 text-sm font-medium">Exigí tu factura y participá</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Participá automáticamente al exigir facturas en tus compras. Cada factura válida es una oportunidad de ganar increíbles premios.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-blue-600 text-xs font-medium">Participación automática</span>
              </div>
            </div>
          </div>
          
          <div className="group">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
                  <HomeIcon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Cumplidores Inmobiliarios</h4>
                  <p className="text-indigo-600 text-sm font-medium">Mantené al día tus impuestos</p>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Cumplí con el Impuesto Inmobiliario en tiempo y forma para participar automáticamente en sorteos exclusivos.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
                <span className="text-indigo-600 text-xs font-medium">Cumplimiento premiado</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Próximos sorteos */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-100 border border-blue-300 mb-4">
              <CalendarIcon className="h-4 w-4 text-blue-600" />
              <span className="text-blue-700 font-semibold text-sm uppercase tracking-wider">Próximamente 2025</span>
            </div>
            <h4 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">Nueva Temporada de Sorteos</h4>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Mantente atento a nuestros canales oficiales para conocer las fechas, premios y modalidades de los próximos sorteos.
            </p>
          </div>
        </div>
        
        {/* Botones de acción */}
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button className="group">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 text-white font-bold text-lg rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300 hover:scale-105">
              <TrophyIcon className="h-6 w-6" />
              Ver Resultados 2024
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </div>
          </button>
          
          <button className="group">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-blue-600 text-blue-600 font-bold text-lg rounded-xl hover:bg-blue-50 transition-all duration-300">
              <InformationCircleIcon className="h-6 w-6" />
              Cómo Participar
            </div>
          </button>
        </div>
        
        {/* Call to action final */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <SparklesIcon className="h-8 w-8 text-blue-600" />
              <span className="text-xl md:text-2xl font-black text-gray-900 text-center leading-tight">
                ¡Cumplí con tus obligaciones y participá automáticamente!
              </span>
              <SparklesIcon className="h-8 w-8 text-blue-600" />
            </div>
            <div className="mt-3 text-center">
              <p className="text-gray-700 font-medium">
                Tu cumplimiento fiscal tiene recompensa
              </p>
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