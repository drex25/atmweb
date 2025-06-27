import React from "react";

const infoBlocks = [
  {
    title: "¿Qué es el trámite de Sellos?",
    icon: "fa-file-signature",
    content: (
      <>
        A partir del <strong>01-07-2020</strong> entró en vigencia la <strong>Resolución General N.º 26-2020</strong>, la cual establece que las liquidaciones del impuesto de sellos deben realizarse exclusivamente desde la plataforma web oficial de la Agencia Tributaria Misiones.
        <br />
        Este trámite permite liquidar el Impuesto de Sellos y/o Tasas Retributivas de Servicios administrativas y/o judiciales a través de una aplicación web. Además, permite reimprimir las liquidaciones realizadas por estos conceptos.
      </>
    ),
    highlight: (
      <>
        Recordamos que el sellado es <strong>AUTOLIQUIDABLE</strong>, y el comprobante de pago es el documento respaldatorio del sellado.
      </>
    ),
  },
  {
    title: "Excepto para los siguientes casos:",
    icon: "fa-ban",
    content: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2"><i className="fas fa-car text-rose-500 mt-1" /> Transmisión de automotores y/u obtención de dominio (Acto 2235077).</li>
        <li className="flex items-start gap-2"><i className="fas fa-tractor text-rose-500 mt-1" /> Transmisión de maquinarias según Res. Hacienda 2193-22 y RG 1-23.</li>
        <li className="flex items-start gap-2"><i className="fas fa-times-circle text-rose-500 mt-1" /> Actos exentos y no gravados.</li>
      </ul>
    ),
    note: (
      <>
        En estos casos, la liquidación debe realizarse de forma presencial o a través del correo <a className="text-blue-600 underline" href="mailto:liquidacion.sellos@dgr.misiones.gov.ar">liquidacion.sellos@dgr.misiones.gov.ar</a>.
      </>
    ),
  },
  {
    title: "Plazos y Anulación",
    icon: "fa-clock",
    content: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2"><i className="fas fa-clock text-rose-500 mt-1" /> El impuesto debe abonarse dentro del plazo de quince (15) días hábiles, a contar desde el día siguiente de la fecha del instrumento. Pasado el mismo, se generan intereses y multas.</li>
        <li className="flex items-start gap-2"><i className="fas fa-ban text-rose-500 mt-1" /> Las anulaciones de sellados deben solicitarse dentro de los treinta (30) días corridos de la generación del mismo.</li>
      </ul>
    ),
  },
  {
    title: "Requisitos",
    icon: "fa-key",
    content: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2"><i className="fas fa-key text-rose-500 mt-1" /> Poseer Clave Nivel 2.</li>
        <li className="flex items-start gap-2"><i className="fas fa-envelope text-rose-500 mt-1" /> Tener constituido su DFE (Domicilio Fiscal Electrónico).</li>
      </ul>
    ),
  },
  {
    title: "Consideraciones",
    icon: "fa-lightbulb",
    content: (
      <ul className="space-y-2">
        <li className="flex items-start gap-2"><i className="fas fa-file-pdf text-rose-500 mt-1" /> Los documentos deben ser en formato PDF y no superar los 5 Mb.</li>
        <li className="flex items-start gap-2"><i className="fas fa-globe text-rose-500 mt-1" /> Se recomienda usar Mozilla Firefox para el correcto funcionamiento del sistema.</li>
        <li className="flex items-start gap-2"><i className="fas fa-print text-rose-500 mt-1" /> La liquidación siempre debe imprimirse, sin importar el método de pago.</li>
        <li className="flex items-start gap-2"><i className="fas fa-file-alt text-rose-500 mt-1" /> Para acreditar el pago ante terceros deberá adjuntar la liquidación impresa con el ticket de pago correspondiente.</li>
      </ul>
    ),
  },
];

const actionLinks = [
  {
    label: "Manual",
    href: "../wp-content/uploads/2024/09/Manual-Carga-Sellos-Extranet-‎5-‎de-‎septiembre-‎de-‎2024.pdf",
    icon: "fa-book-open",
    target: "_blank",
  },
  {
    label: "Video",
    href: "#",
    icon: "fa-video",
    onClick: () => alert('Abrir video'),
  },
  {
    label: "Consulta Técnica",
    href: "../mesa/",
    icon: "fa-headset",
    target: "_blank",
  },
  {
    label: "Listado de Actos",
    href: "https://wp-test.atmisiones.gob.ar/wp-content/uploads/2025/02/Codigo-de-Actos_3.pdf",
    icon: "fa-list-alt",
    target: "_blank",
  },
];

export default function SellosInfoAdicional() {
  return (
    <section className="w-full relative py-0">
      {/* Fondo degradado animado */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-pink-100 via-white to-blue-100 animate-gradient-x" style={{minHeight:'100%'}} />
      <div className="relative z-10 w-full">
        {/* Título principal */}
        <div className="w-full py-16 md:py-24 flex flex-col items-center justify-center text-center">
          <h2 className="text-5xl md:text-6xl font-extrabold text-gray-800 tracking-tight mb-4 animate-fade-in drop-shadow-xl">Información Importante</h2>
          <p className="text-2xl text-gray-600 max-w-3xl mx-auto animate-fade-in delay-100 font-medium">Todo lo que necesitás saber para liquidar el impuesto de sellos de manera ágil y segura.</p>
        </div>
        {/* Tarjetas de información */}
        <div className="w-full flex flex-wrap justify-center gap-8 px-2 md:px-8 mb-20">
          {infoBlocks.map((block, idx) => (
            <div
              key={idx}
              className="w-full md:w-[46%] xl:w-[30%] bg-white/90 rounded-3xl shadow-2xl border border-pink-200 p-8 flex flex-col gap-4 backdrop-blur-lg hover:scale-105 hover:shadow-pink-300/80 transition-all duration-300 animate-fade-in relative overflow-hidden"
              style={{ minHeight: '340px' }}
            >
              <div className="absolute -top-8 -right-8 opacity-10 text-pink-300 text-[8rem] pointer-events-none select-none"><i className={`fas ${block.icon}`} /></div>
              <div className="flex items-center gap-3 mb-2">
                <i className={`fas ${block.icon} text-3xl text-pink-500 drop-shadow`} />
                <h3 className="text-2xl font-bold text-gray-800 tracking-tight drop-shadow">{block.title}</h3>
              </div>
              <div className="text-gray-700 text-lg leading-relaxed font-medium">{block.content}</div>
              {block.highlight && (
                <div className="bg-rose-100/70 border-l-4 border-rose-500 text-rose-700 p-3 rounded-xl font-semibold shadow animate-pulse">
                  {block.highlight}
                </div>
              )}
              {block.note && (
                <div className="text-blue-700 bg-blue-50 border-l-4 border-blue-400 p-3 rounded-xl font-semibold shadow animate-fade-in">
                  {block.note}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* Línea divisoria animada */}
        <div className="flex justify-center my-12">
          <div className="h-2 w-64 bg-gradient-to-r from-pink-400 via-pink-200 to-blue-300 rounded-full animate-pulse shadow-xl" />
        </div>
        {/* Botones de acción */}
        <div className="w-full flex flex-wrap justify-center gap-6 pb-16 animate-fade-in delay-200">
          {actionLinks.map((link, idx) => (
            <a
              key={idx}
              className="bg-gradient-to-r from-[#023F5E] to-[#612247] text-white px-8 py-4 rounded-full font-extrabold shadow-2xl hover:scale-110 hover:shadow-pink-400/40 transition-transform duration-300 flex items-center gap-3 text-lg tracking-wide border-2 border-white/30"
              href={link.href}
              target={link.target}
              rel={link.target === '_blank' ? 'noopener' : undefined}
              onClick={link.onClick}
            >
              <i className={`fas ${link.icon} text-2xl`} />
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
