import React from "react";

export default function SellosInfoAdicional() {
  return (
    <section className="relative px-6 py-14 md:py-20 overflow-hidden bg-gradient-to-br from-white via-gray-100 to-white rounded-2xl shadow-2xl max-w-5xl mx-auto border border-white/40 backdrop-blur-md">
    <div className="relative z-10">
      <h2 className="text-4xl font-extrabold text-center text-gray-800 tracking-wide mb-8 animate-pulse">
        Información Importante
      </h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
        A partir del 01-07-2020 entró en vigencia la <strong>Resolución General N.º 26-2020</strong>, la misma establece que las liquidaciones del impuesto de sellos deben realizarse exclusivamente desde la plataforma web oficial de la Agencia Tributaria Misiones.
      </p>
      <p className="text-gray-700 text-lg leading-relaxed mb-4 text-justify">
        Este trámite permite liquidar el Impuesto de Sellos y/o Tasas Retributivas de Servicios administrativas y/o judiciales a través de una aplicación web. Además, permite reimprimir las liquidaciones realizadas por estos conceptos.
      </p>
      <div className="bg-rose-100/60 border-l-4 border-rose-500 text-rose-700 p-4 rounded-xl font-medium shadow-md mb-6 animate-bounce">
        Recordamos que el sellado es <strong>AUTOLIQUIDABLE</strong>, y el comprobante de pago es el documento respaldatorio del sellado.
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-rose-500 inline-block pb-1 mb-3">Excepto para los siguientes casos:</h3>
      <ul className="space-y-2 text-gray-700 text-base mb-6">
        <li className="flex items-start gap-2"><i className="fas fa-car text-rose-500"></i> Transmisión de automotores y/u obtención de dominio (Acto 2235077).</li>
        <li className="flex items-start gap-2"><i className="fas fa-tractor text-rose-500"></i> Transmisión de maquinarias según Res. Hacienda 2193-22 y RG 1-23.</li>
        <li className="flex items-start gap-2"><i className="fas fa-times-circle text-rose-500"></i> Actos exentos y no gravados.</li>
      </ul>
      <p className="text-gray-700 mb-8">
        En estos casos, la liquidación debe realizarse de forma presencial o a través del correo <a className="text-blue-600 underline" href="mailto:liquidacion.sellos@dgr.misiones.gov.ar">liquidacion.sellos@dgr.misiones.gov.ar</a>.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-rose-500 inline-block pb-1 mb-3">Plazos y Anulación</h3>
      <ul className="space-y-2 text-gray-700 text-base mb-6">
        <li className="flex items-start gap-2"><i className="fas fa-clock text-rose-500"></i> El impuesto debe abonarse dentro del plazo de quince (15) días hábiles, a contar desde el día siguiente de la fecha del instrumento. Pasado el mismo, se generan intereses y multas.</li>
        <li className="flex items-start gap-2"><i className="fas fa-ban text-rose-500"></i> Las anulaciones de sellados deben solicitarse dentro de los treinta (30) días corridos de la generación del mismo.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-rose-500 inline-block pb-1 mb-3">Requisitos</h3>
      <ul className="space-y-2 text-gray-700 text-base mb-6">
        <li className="flex items-start gap-2"><i className="fas fa-key text-rose-500"></i> Poseer Clave Nivel 2.</li>
        <li className="flex items-start gap-2"><i className="fas fa-envelope text-rose-500"></i> Tener constituido su DFE (Domicilio Fiscal Electrónico).</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 border-b-2 border-rose-500 inline-block pb-1 mb-3">Consideraciones</h3>
      <ul className="space-y-2 text-gray-700 text-base mb-8">
        <li className="flex items-start gap-2"><i className="fas fa-file-pdf text-rose-500"></i> Los documentos deben ser en formato PDF y no superar los 5 Mb.</li>
        <li className="flex items-start gap-2"><i className="fas fa-globe text-rose-500"></i> Se recomienda usar Mozilla Firefox para el correcto funcionamiento del sistema.</li>
        <li className="flex items-start gap-2"><i className="fas fa-print text-rose-500"></i> La liquidación siempre debe imprimirse, sin importar el método de pago.</li>
        <li className="flex items-start gap-2"><i className="fas fa-file-alt text-rose-500"></i> Para acreditar el pago ante terceros deberá adjuntar la liquidación impresa con el ticket de pago correspondiente.</li>
      </ul>

      <div className="flex flex-wrap justify-center gap-4 animate-fade-in">
        <a className="bg-gradient-to-r from-[#023F5E] to-[#612247] text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform duration-300" href="../wp-content/uploads/2024/09/Manual-Carga-Sellos-Extranet-‎5-‎de-‎septiembre-‎de-‎2024.pdf" target="_blank" rel="noopener">Manual</a>
        <a className="bg-gradient-to-r from-[#023F5E] to-[#612247] text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform duration-300" href="#" onClick={() => alert('Abrir video')}>Video</a>
        <a className="bg-gradient-to-r from-[#023F5E] to-[#612247] text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform duration-300" href="../mesa/" target="_blank" rel="noopener">Consulta Técnica</a>
        <a className="bg-gradient-to-r from-[#023F5E] to-[#612247] text-white px-6 py-3 rounded-full font-semibold shadow hover:scale-105 transition-transform duration-300" href="https://wp-test.atmisiones.gob.ar/wp-content/uploads/2025/02/Codigo-de-Actos_3.pdf" target="_blank" rel="noopener">Listado de Actos</a>
      </div>
    </div>
  </section>
  );
}
