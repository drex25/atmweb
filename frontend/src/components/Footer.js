import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-atm-primary text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <p className="mb-2">Av.</p>
            <p className="mb-2">Posadas, Misiones</p>
            <p className="mb-2">Tel: (0376) 444-4444</p>
            <p>Email: info@atmisiones.gob.ar</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-atm-accent">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-atm-accent">
                  Contacto
                </Link>
              </li>
              <li>
                <a
                  href="https://atmisiones.gob.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-atm-accent"
                >
                  Sitio Actual
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-atm-accent"
              >
                Facebook
              </a>
              <a
                href="https://twitter.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-atm-accent"
              >
                Twitter
              </a>
              <a
                href="https://instagram.com/atmisiones"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-atm-accent"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} ATM Misiones. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 