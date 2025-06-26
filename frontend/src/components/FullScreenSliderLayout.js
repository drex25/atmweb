import React from 'react';
import HeroSliderMobile from './HeroSliderMobile';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function FullScreenSliderLayout() {
  return (
    <div className="w-full h-[420px] flex flex-col md:flex-row items-stretch overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 mt-0">
      {/* Columna Izquierda: Login Fijo */}
      <div className="md:w-2/5 w-full h-1/2 md:h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-cyan-500 shadow-2xl z-10 relative">
        <div className="flex flex-col items-center w-full max-w-sm px-8 py-12 bg-white/10 rounded-3xl shadow-xl backdrop-blur-md border border-white/20">
          <LockClosedIcon className="h-16 w-16 text-white mb-8 drop-shadow-lg" />
          <button className="w-full py-3 mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all">Iniciar Sesión</button>
          <p className="text-white text-base mb-2 font-medium">¿No tenés Clave Fiscal?</p>
          <a href="#" className="text-blue-100 underline mb-8 hover:text-white transition">Obtenela</a>
          <button className="w-full py-3 mb-4 rounded-full bg-gray-900/90 text-white font-semibold shadow hover:bg-gray-800 transition">Guía para Clave Fiscal</button>
          <button className="w-full py-3 rounded-full bg-gray-900/90 text-white font-semibold shadow hover:bg-gray-800 transition">Constancia de Inscripción</button>
        </div>
      </div>
      {/* Columna Derecha: Slider Dinámico */}
      <div className="md:w-3/5 w-full h-1/2 md:h-full flex items-center justify-center relative overflow-hidden">
        {/* Fondo decorativo sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50 to-blue-100 opacity-80 pointer-events-none" />
        <div className="relative w-full h-full flex items-center justify-center p-4 md:p-12">
          <div className="w-full max-w-2xl h-full flex items-center justify-center rounded-3xl shadow-2xl bg-white/90 backdrop-blur-md border border-indigo-100">
            <HeroSliderMobile />
          </div>
        </div>
      </div>
    </div>
  );
} 