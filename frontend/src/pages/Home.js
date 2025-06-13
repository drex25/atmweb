import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative bg-atm-primary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
              <span className="block">ATM Misiones</span>
              <span className="block text-atm-accent">Administración de Transporte de Misiones</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Gestionando el transporte público de la provincia de Misiones con eficiencia y compromiso.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/contact"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-atm-primary bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Contactanos
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Nuestros Servicios
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Brindamos soluciones integrales para el transporte público en Misiones
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Service Card 1 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Gestión de Transporte</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Administración eficiente de las líneas de transporte público provincial.
                  </p>
                </div>
              </div>

              {/* Service Card 2 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Control y Fiscalización</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Supervisión y control del cumplimiento de las normativas vigentes.
                  </p>
                </div>
              </div>

              {/* Service Card 3 */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-gray-900">Atención al Usuario</h3>
                  <p className="mt-2 text-sm text-gray-500">
                    Servicio de atención y resolución de consultas para los usuarios.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-atm-secondary">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            <span className="block">¿Necesitas información?</span>
            <span className="block text-atm-accent">Estamos aquí para ayudarte.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-atm-secondary bg-white hover:bg-gray-50"
              >
                Contactanos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 