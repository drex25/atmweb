import React, { useEffect, useRef } from 'react';
import HeroExenciones from '../components/HeroExenciones';
import { 
  CheckCircleIcon, 
  ArrowDownTrayIcon, 
  ShieldCheckIcon,
  DocumentTextIcon,
  ScaleIcon,
  HomeIcon,
  TruckIcon,
  DocumentIcon,
  SparklesIcon,
  StarIcon,
  ArrowRightIcon,
  InformationCircleIcon
} from '@heroicons/react/24/outline';

// Hook para animaciones de scroll
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

// Datos de exenciones con iconos y colores
const exenciones = [
  {
    id: 'ingresos-brutos',
    title: 'Exenciones del Impuesto sobre los Ingresos Brutos',
    icon: DocumentTextIcon,
    color: '#3B82F6',
    gradient: 'from-blue-500/20 to-indigo-500/20',
    borderColor: 'border-blue-200',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones: actividades ejercidas o prestación de servicios públicos.',
      'Bolsas de Comercio y Mercados de Valores.',
      'Edición, distribución y/o venta de libros.',
      'Representaciones diplomáticas y consulares de los países extranjeros acreditados en Argentina.',
      'Asociaciones mutualistas.',
      'Socios o accionistas de cooperativas de trabajo.',
      'Fundaciones, asociaciones civiles, instituciones religiosas y asociaciones gremialistas con personería jurídica y sin fines de lucro.',
      'Actividades de Producción Primaria - Certificado Tipo "A".',
      'Establecimientos educacionales privados incorporados a los planes de enseñanza oficial.',
      'Explotación de servicios de radiodifusión y televisión.',
      'Contratistas, Subcontratistas y Proveedores de la Entidad Binacional Yacyretá.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto sobre los Ingresos Brutos',
      href: '/pdfs/requisitos-iibb.pdf',
    },
  },
  {
    id: 'automotor',
    title: 'Exenciones del Impuesto Provincial al Automotor',
    icon: TruckIcon,
    color: '#10B981',
    gradient: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-200',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones.',
      'Instituciones Religiosas e Instituciones de Beneficencia Pública, con Personería Jurídica.',
      'Representaciones diplomáticas y cónsules acreditados en Argentina.',
      'Cuerpos de Bomberos Voluntarios.',
      'Personas sujetas a alguna discapacidad de carácter permanente.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto Provincial al Automotor',
      href: '/pdfs/requisitos-automotor.pdf',
    },
  },
  {
    id: 'inmobiliario',
    title: 'Exenciones del Impuesto Inmobiliario Básico',
    icon: HomeIcon,
    color: '#8B5CF6',
    gradient: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'border-purple-200',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones.',
      'Templos religiosos y sus dependencias.',
      'Asociaciones Civiles, con Personería Jurídica.',
      'Asociaciones obreras, gremiales, profesionales, de fomento o mutualistas y partidos políticos.',
      'Cooperativas de Trabajo.',
      'Legaciones extranjeras, embajadas, consulados, residencias de jefes de misión y de agencias extranjeras acreditados en Argentina.',
      'Ex-soldados conscriptos de las Islas Malvinas.',
      'Inmuebles adjudicados por IPRODHA o EBY.',
      'Inmuebles rurales afectados a emprendimientos turísticos alternativos educativos.',
      'Jubilados y pensionados.',
      'Inmuebles afectados a la Reserva Natural denominada "Reserva de la Biósfera Yabotí".',
      'Inmuebles afectados a Planes de Ordenación y/o de Enriquecimiento Forestal.',
      'Inmuebles afectados al Sistema de Áreas Naturales Protegidas, Adherentes a Reservas Privadas.',
      'Inmuebles afectados al Régimen de Patrimonio Cultural.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto Inmobiliario Básico',
      href: '/pdfs/requisitos-inmobiliario.pdf',
    },
  },
  {
    id: 'sellos',
    title: 'Exenciones del Impuesto de Sellos',
    icon: DocumentIcon,
    color: '#F59E0B',
    gradient: 'from-amber-500/20 to-orange-500/20',
    borderColor: 'border-amber-200',
    items: [
      'Estado Nacional, Estados Provinciales, Municipalidades y sus reparticiones.',
      'Estados extranjeros acreditados ante el Gobierno de la Nación.',
      'Partidos políticos reconocidos legalmente.',
      'Fundaciones, asociaciones civiles, gremiales, mutuales, instituciones religiosas, cooperativas de trabajo o consumo y entidades públicas no estatales sin fines de lucro. Obispados y sus dependencias jurisdiccionales.',
      'Créditos para adquisición de automotores registrables destinados a actividades comerciales y/o industriales.',
      'Créditos para inversión en maquinarias e instalaciones destinados a actividades primarias y/o industriales.',
    ],
    requisitos: {
      label: 'Requisitos Exención Impuesto de Sellos',
      href: '/pdfs/requisitos-sellos.pdf',
    },
  },
];

// Componente de tarjeta de exención mejorada
const ExencionCard = ({ exencion, index }) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div 
      className="group relative scroll-animate opacity-0 translate-y-10 transition-all duration-700"
      style={{transitionDelay: `${index * 200}ms`}}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Efectos de fondo */}
      <div className="absolute -inset-4 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl"
           style={{backgroundColor: exencion.color}}></div>
      
      {/* Contenedor principal */}
      <div className={`relative bg-white/95 backdrop-blur-xl rounded-3xl border-2 ${exencion.borderColor} shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-3xl`}
           style={{boxShadow: `0 25px 50px ${exencion.color}15`}}>
        
        {/* Header de la tarjeta */}
        <div className={`relative bg-gradient-to-br ${exencion.gradient} p-8 border-b ${exencion.borderColor}`}>
          {/* Efectos decorativos */}
          <div className="absolute top-4 right-4 w-20 h-20 rounded-full opacity-10 animate-pulse"
               style={{backgroundColor: exencion.color}}></div>
          <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full opacity-5 animate-pulse"
               style={{backgroundColor: exencion.color, animationDelay: '1s'}}></div>
          
          <div className="relative flex items-center gap-6">
            {/* Icono principal */}
            <div className="flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center border-2 shadow-lg"
                 style={{
                   backgroundColor: `${exencion.color}20`,
                   borderColor: exencion.color,
                   boxShadow: `0 10px 30px ${exencion.color}30`
                 }}>
              <exencion.icon className="h-10 w-10" style={{color: exencion.color}} />
            </div>
            
            {/* Título y badge */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold border shadow-sm"
                      style={{
                        backgroundColor: `${exencion.color}15`,
                        color: exencion.color,
                        borderColor: `${exencion.color}30`
                      }}>
                  <ShieldCheckIcon className="h-4 w-4" />
                  EXENCIÓN FISCAL
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-black text-gray-900 leading-tight">
                {exencion.title}
              </h2>
            </div>
            
            {/* Botón expandir */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 hover:scale-110"
              style={{
                backgroundColor: isExpanded ? exencion.color : 'white',
                borderColor: exencion.color,
                color: isExpanded ? 'white' : exencion.color
              }}
            >
              <ArrowRightIcon className={`h-6 w-6 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
            </button>
          </div>
        </div>
        
        {/* Contenido expandible */}
        <div className={`transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="p-8">
            {/* Lista de beneficiarios */}
            <div className="mb-8">
              <h3 className="flex items-center gap-3 text-xl font-bold text-gray-800 mb-6">
                <StarIcon className="h-6 w-6" style={{color: exencion.color}} />
                Beneficiarios de la Exención
              </h3>
              <div className="grid gap-4">
                {exencion.items.map((item, i) => (
                  <div key={i} className="group/item flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-all duration-200 border border-transparent hover:border-gray-200">
                    <div className="flex-shrink-0 mt-1">
                      <CheckCircleIcon className="h-6 w-6 transition-colors duration-200"
                                     style={{color: `${exencion.color}80`}} />
                    </div>
                    <span className="text-gray-700 font-medium leading-relaxed group-hover/item:text-gray-900 transition-colors">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Botón de descarga */}
            <div className="flex justify-center">
              <a
                href={exencion.requisitos.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-bold text-lg shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl border-2"
                style={{
                  backgroundColor: exencion.color,
                  borderColor: `${exencion.color}50`,
                  color: 'white',
                  boxShadow: `0 10px 30px ${exencion.color}30`
                }}
              >
                <ArrowDownTrayIcon className="h-6 w-6 group-hover/btn:scale-110 transition-transform" />
                {exencion.requisitos.label}
                <SparklesIcon className="h-5 w-5 animate-pulse" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Indicador de progreso */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-200 overflow-hidden">
          <div className={`h-full transition-all duration-700 ${isHovered ? 'w-full' : 'w-0'}`} 
               style={{backgroundColor: exencion.color}}></div>
        </div>
      </div>
    </div>
  );
};

// Componente de estadísticas
const StatsSection = () => {
  return (
    <section className="relative py-20 px-4">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16 scroll-animate opacity-0 translate-y-10">
          <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Impacto de las Exenciones
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Conocé el alcance y beneficio de nuestras políticas de exención fiscal
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { 
              icon: ScaleIcon, 
              value: '61,000+', 
              label: 'Exenciones Otorgadas', 
              desc: 'Total de exenciones fiscales concedidas',
              color: '#8B5CF6'
            },
            { 
              icon: ShieldCheckIcon, 
              value: '4', 
              label: 'Tipos de Impuestos', 
              desc: 'Categorías de impuestos con exenciones disponibles',
              color: '#10B981'
            },
            { 
              icon: InformationCircleIcon, 
              value: '100%', 
              label: 'Transparencia', 
              desc: 'Proceso completamente transparente y documentado',
              color: '#3B82F6'
            }
          ].map((stat, index) => (
            <div key={index} className="group relative scroll-animate opacity-0 translate-y-10"
                 style={{transitionDelay: `${index * 200}ms`}}>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 text-center shadow-2xl border border-gray-200 hover:scale-105 transition-all duration-500">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center border-2 shadow-lg"
                     style={{
                       backgroundColor: `${stat.color}20`,
                       borderColor: stat.color
                     }}>
                  <stat.icon className="h-10 w-10" style={{color: stat.color}} />
                </div>
                <div className="text-4xl font-black mb-2" style={{color: stat.color}}>
                  {stat.value}
                </div>
                <div className="text-xl font-bold text-gray-800 mb-2">
                  {stat.label}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.desc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default function Exenciones() {
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <HeroExenciones />
      
      {/* Sección de estadísticas */}
      <div className="-mt-24 relative z-10">
        <StatsSection />
      </div>
      
      {/* Sección principal de exenciones */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-20 scroll-animate opacity-0 translate-y-10">
            <h2 className="text-4xl md:text-6xl font-black mb-8 bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Tipos de Exenciones Fiscales
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Explorá las diferentes categorías de exenciones disponibles y conocé los requisitos específicos para cada una
            </p>
          </div>
          
          {/* Grid de exenciones */}
          <div className="space-y-12">
            {exenciones.map((exencion, index) => (
              <ExencionCard key={exencion.id} exencion={exencion} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        <div className="absolute inset-0 bg-black/20"></div>
        
        <div className="relative max-w-4xl mx-auto text-center text-white scroll-animate opacity-0 translate-y-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8">
            ¿Necesitás más información?
          </h2>
          <p className="text-xl mb-12 leading-relaxed">
            Nuestro equipo está disponible para ayudarte con cualquier consulta sobre exenciones fiscales
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a href="/contact" className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-600 rounded-2xl font-bold text-lg shadow-xl hover:scale-105 transition-all duration-300">
              <InformationCircleIcon className="h-6 w-6 group-hover:scale-110 transition-transform" />
              Contactar Asesor
            </a>
            <a href="/autogestion" className="group inline-flex items-center gap-3 px-10 py-5 bg-transparent border-2 border-white text-white rounded-2xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300">
              <ArrowRightIcon className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              Autogestión
            </a>
          </div>
        </div>
      </section>
      
      {/* CSS personalizado */}
      <style jsx>{`
        .animate-slide-up {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}