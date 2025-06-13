import React from 'react';

function About() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-atm-primary text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Sobre Nosotros
            </h1>
            <p className="mt-4 text-xl">
              Conocé más sobre la Administración de Transporte de Misiones
            </p>
          </div>
        </div>
      </section>

      {/* Mission and Vision */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h2>
              <p className="text-gray-600">
                Administrar y regular el transporte público de la provincia de Misiones,
                garantizando un servicio eficiente, seguro y accesible para todos los
                ciudadanos, promoviendo la movilidad sustentable y el desarrollo
                económico de la región.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h2>
              <p className="text-gray-600">
                Ser el organismo líder en la gestión del transporte público provincial,
                reconocido por su excelencia, innovación y compromiso con la calidad
                del servicio, contribuyendo al desarrollo integral de Misiones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Nuestros Valores
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Value 1 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excelencia</h3>
              <p className="text-gray-600">
                Buscamos la excelencia en cada aspecto de nuestro trabajo, desde la
                atención al usuario hasta la gestión administrativa.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compromiso</h3>
              <p className="text-gray-600">
                Nos comprometemos con el bienestar de la comunidad y el desarrollo
                sostenible del transporte público.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovación</h3>
              <p className="text-gray-600">
                Fomentamos la innovación y la mejora continua en nuestros procesos
                y servicios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white shadow rounded-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Nuestra Historia</h2>
            <div className="prose prose-lg text-gray-600">
              <p>
                La Administración de Transporte de Misiones (ATM) fue creada con el
                objetivo de regular y administrar el transporte público en la provincia.
                Desde su fundación, hemos trabajado incansablemente para mejorar la
                calidad del servicio y la experiencia de los usuarios.
              </p>
              <p className="mt-4">
                A lo largo de los años, hemos implementado numerosas mejoras y
                programas que han contribuido significativamente al desarrollo del
                transporte público en Misiones, siempre manteniendo nuestro compromiso
                con la excelencia y la innovación.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About; 