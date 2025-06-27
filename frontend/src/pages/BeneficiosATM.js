import React from 'react';
import { TrophyIcon, UsersIcon, ScaleIcon, GiftIcon, CalendarIcon, ArrowUpCircleIcon, HomeIcon, UserGroupIcon, KeyIcon, UserIcon, IdentificationIcon } from '@heroicons/react/24/outline';
import HeroBeneficiosATM from '../components/HeroBeneficiosATM';

const azulATM = 'text-atm-primary';
const metrics = [
  {
    icon: <TrophyIcon className={`h-12 w-12 mx-auto mb-2 ${azulATM}`} />, label: 'Premios Entregados', value: 465, explanation: 'Premios y reconocimientos entregados a contribuyentes destacados.'
  },
  {
    icon: <UsersIcon className={`h-12 w-12 mx-auto mb-2 ${azulATM}`} />, label: 'Eximidos Impositivamente', value: 5400, prefix: '+ $', suffix: ' millones anuales', explanation: 'Monto anual eximido en impuestos a beneficiarios.'
  },
  {
    icon: <ScaleIcon className={`h-12 w-12 mx-auto mb-2 ${azulATM}`} />, label: 'Exenciones Impositivas Otorgadas', value: 61000, explanation: 'Cantidad de exenciones impositivas otorgadas por ATM.'
  },
];
const sectores = [
  {
    icon: <UserGroupIcon className={`h-8 w-8 ${azulATM}`} />, label: 'Productores Primarios', value: '+9,000', desc: 'Beneficios del Impuesto sobre los Ingresos Brutos para productores primarios.', href: '/requisitos/productores-primarios'
  },
  {
    icon: <UserIcon className={`h-8 w-8 ${azulATM}`} />, label: 'Jubilados y Pensionados', value: '+4,080', desc: 'Beneficios del Impuesto Inmobiliario Básico para jubilados y pensionados.', href: '/requisitos/jubilados-pensionados'
  },
  {
    icon: <IdentificationIcon className={`h-8 w-8 ${azulATM}`} />, label: 'Personas con CUD', value: '+1,222', desc: 'Beneficios del Impuesto Provincial Automotor para personas con discapacidad permanente.', href: '/requisitos/personas-cud'
  },
  {
    icon: <KeyIcon className={`h-8 w-8 ${azulATM}`} />, label: 'Adjudicatarios Vivienda IPRODHA', value: '+20,781', desc: 'Beneficios del Impuesto Inmobiliario Básico para adjudicatarios de primera vivienda del IPRODHA.', href: '/requisitos/adjudicatarios-vivienda'
  },
  {
    icon: <ScaleIcon className={`h-8 w-8 ${azulATM}`} />, label: 'Otras Exenciones y Bonificaciones', value: '+26,000', desc: 'Otras exenciones impositivas para diversas actividades y grupos.', href: '/requisitos/otras-exenciones'
  },
];

// Componente contador animado
function AnimatedCounter({ value, prefix = '', suffix = '', duration = 1200, className = '' }) {
  const ref = React.useRef();
  React.useEffect(() => {
    let startTime = null;
    function animate(ts) {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const current = Math.floor(progress * value);
      if (ref.current) ref.current.textContent = prefix + current.toLocaleString() + (suffix || '');
      if (progress < 1) requestAnimationFrame(animate);
      else if (ref.current) ref.current.textContent = prefix + value.toLocaleString() + (suffix || '');
    }
    requestAnimationFrame(animate);
  }, [value, prefix, suffix, duration]);
  return <span ref={ref} className={className}>{prefix}{value.toLocaleString()}{suffix}</span>;
}

export default function BeneficiosATM() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-x-hidden">
      {/* HERO INSTITUCIONAL */}
      <HeroBeneficiosATM badge="Agencia tributaria misiones" />

      {/* MÉTRICAS */}
      <section className="relative z-10 w-[95%] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 py-14 px-0">
        {metrics.map((m, i) => (
          <div key={i} className="rounded-3xl bg-white/60 backdrop-blur-xl border-2 border-gradient-to-br from-atm-primary via-pink-500 to-atm-accent shadow-2xl p-10 flex flex-col items-center hover:scale-105 hover:shadow-3xl transition-all duration-300 group relative overflow-hidden animate-fade-in" style={{animationDelay: `${i * 80}ms`}}>
            <div className="mb-4 flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 border-b-4 border-atm-accent shadow-inner group-hover:scale-110 transition-transform">
              <span className="text-[#8F3260]">{React.cloneElement(m.icon, { className: m.icon.props.className + ' text-[#8F3260]' })}</span>
            </div>
            <div className="text-4xl font-extrabold mb-2 text-[#8F3260] drop-shadow-xl">
              <AnimatedCounter value={m.value} prefix={m.prefix} suffix={m.suffix} />
            </div>
            <div className="text-base font-semibold mb-1 text-center bg-gradient-to-r from-[#50376F] to-[#007CB6] bg-clip-text text-transparent uppercase tracking-wide">{m.label}</div>
            <div className="text-xs text-gray-600 text-center mt-1 font-medium">{m.explanation}</div>
          </div>
        ))}
      </section>

      {/* MORATORIA */}
      <section className="relative z-10 w-[95%] mx-auto flex justify-center py-12 px-0">
        <div className="w-full bg-gradient-to-br from-blue-100 via-white to-pink-100 border border-blue-200 rounded-3xl shadow-2xl flex flex-col items-center p-12 text-center relative overflow-hidden animate-fade-in backdrop-blur-md">
          <div className="absolute -top-10 -left-10 opacity-20 pointer-events-none select-none">
            <svg width="160" height="160"><circle cx="80" cy="80" r="80" fill="#2563eb" /></svg>
          </div>
          <span className="z-10 text-[#8F3260]">
            <ScaleIcon className="h-14 w-14 mb-2 text-[#8F3260]" />
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2 z-10 bg-gradient-to-r from-[#50376F] to-[#007CB6] bg-clip-text text-transparent">ALIVIO FISCAL Moratoria 2024</h2>
          <div className="text-2xl md:text-3xl font-extrabold mb-2 z-10 text-[#8F3260]">10.883 planes por $5.528 millones</div>
          <a href="#" className="mt-4 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-atm-accent text-white font-bold text-lg shadow hover:scale-105 hover:shadow-2xl transition z-10">Más información</a>
        </div>
      </section>

      {/* SORTEOS */}
      <section className="relative z-10 w-[95%] mx-auto flex justify-center py-14 px-0">
        <div className="w-full bg-white/80 border-2 border-gradient-to-br from-pink-500 via-purple-500 to-atm-accent rounded-3xl shadow-2xl p-12 text-center relative overflow-hidden animate-fade-in backdrop-blur-md">
          {/* Fondo confeti SVG */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10" viewBox="0 0 600 200" fill="none"><circle cx="100" cy="60" r="30" fill="#fbbf24" /><circle cx="500" cy="140" r="20" fill="#2563eb" /><rect x="250" y="80" width="60" height="20" rx="10" fill="#f472b6" /></svg>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-3 z-10 bg-gradient-to-r from-[#50376F] to-[#007CB6] bg-clip-text text-transparent">¡Sorteos de ATM!</h2>
          <div className="flex flex-col gap-1 mb-4 z-10">
            <div className="flex items-center justify-center gap-2 text-base font-medium">
              <span className="text-[#8F3260]"><GiftIcon className="h-6 w-6 text-[#8F3260]" /></span> Sorteos de Consumidores Finales y Cumplidores del Impuesto Inmobiliario <span className="text-[#8F3260]"><HomeIcon className="h-5 w-5 text-[#8F3260]" /></span>
            </div>
            <div className="flex items-center justify-center gap-2 text-lg font-semibold text-blue-700"><span role="img" aria-label="party">🎉</span> Los sorteos han finalizado. Gracias por participar. <span role="img" aria-label="party">🎉</span></div>
            <div className="flex items-center justify-center gap-2 text-sm font-normal text-gray-500"><CalendarIcon className={`h-5 w-5 ${azulATM}`} /> Próximamente anunciaremos nuevas fechas para los próximos sorteos.</div>
          </div>
          <a href="#" className="relative z-10 inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-atm-accent text-white font-bold text-lg shadow hover:scale-105 hover:shadow-2xl transition mb-2">Ver los resultados de los Sorteos 2025</a>
          <div className="flex flex-col md:flex-row gap-3 mt-2 justify-center z-10">
            <button className="px-6 py-2 rounded-full border border-atm-accent text-atm-accent font-semibold bg-white/80 hover:bg-blue-50 transition flex items-center gap-2 shadow group hover:scale-105">
              <GiftIcon className="h-5 w-5 group-hover:text-pink-500 transition-colors" /> Sorteo Consumidores Finales
            </button>
            <button className="px-6 py-2 rounded-full border border-atm-accent text-atm-accent font-semibold bg-white/80 hover:bg-blue-50 transition flex items-center gap-2 shadow group hover:scale-105">
              <GiftIcon className="h-5 w-5 group-hover:text-pink-500 transition-colors" /> Sorteo Cumplidores Inmobiliarios
            </button>
          </div>
          <div className="mt-4 text-sm text-gray-500 z-10">¡Exigí tu factura o mantené tu impuesto al día y participá automáticamente!</div>
        </div>
      </section>

      {/* SECTORES BENEFICIADOS */}
      <section id="sectores" className="relative z-10 w-[95%] mx-auto py-16 px-0">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12 text-center text-gray-900 bg-gradient-to-r from-pink-500 via-purple-500 to-atm-accent bg-clip-text text-transparent drop-shadow-xl">Sectores Beneficiados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {sectores.map((s, i) => (
            <a
              key={i}
              href={s.href}
              className="bg-white/70 rounded-3xl border-2 border-gradient-to-br from-atm-primary via-pink-500 to-atm-accent shadow-2xl p-10 flex flex-col items-center text-center hover:scale-105 hover:shadow-3xl hover:border-pink-500 transition-all duration-300 relative overflow-hidden animate-fade-in focus:outline-none focus:ring-2 focus:ring-pink-500"
              style={{animationDelay: `${i * 80}ms`} }
            >
              <div className="mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-100 via-pink-100 to-purple-100 border-b-4 border-atm-accent shadow-inner">
                <span className="text-[#8F3260]">{React.cloneElement(s.icon, { className: s.icon.props.className + ' text-[#8F3260]' })}</span>
              </div>
              <div className="text-2xl font-extrabold mb-1 text-[#8F3260] drop-shadow-xl">
                <AnimatedCounter value={parseInt(s.value.replace(/[^\d]/g, ''))} prefix={s.value.match(/^[^\d]+/)?.[0] || ''} suffix={s.value.match(/[^\d]+$/)?.[0] || ''} />
              </div>
              <div className="text-lg font-bold mb-1 text-black uppercase tracking-wide">{s.label}</div>
              <div className="text-base text-gray-600 mb-3 font-medium">{s.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* BOTÓN IR ARRIBA */}
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-pink-500 via-purple-500 to-atm-accent p-4 rounded-full shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300 border-2 border-white/40 backdrop-blur-md animate-bounce">
        <ArrowUpCircleIcon className="h-8 w-8 text-white" />
      </button>
    </div>
  );
} 