import React, { useRef, useLayoutEffect, useState } from 'react';
import ProHeroSlider from './ProHeroSlider';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function ProFullScreenSliderLayout() {
  // Referencia y estado para igualar alturas
  const loginRef = useRef(null);
  const [loginHeight, setLoginHeight] = useState(0);

  useLayoutEffect(() => {
    if (loginRef.current) {
      setLoginHeight(loginRef.current.offsetHeight);
    }
    const handleResize = () => {
      if (loginRef.current) {
        setLoginHeight(loginRef.current.offsetHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="w-full h-[500px] bg-gradient-to-br from-blue-100 to-indigo-100 flex flex-col justify-center">
      {/* Bloque principal centrado horizontal y verticalmente, sin espacio excesivo arriba */}
      <div className="flex flex-row items-stretch justify-center flex-1 mt-0 h-full">
        {/* Slider protagonista a la izquierda, iguala altura al login */}
        <main
          className="flex-1 flex items-stretch justify-center p-4 bg-gradient-to-br from-blue-400 to-cyan-400"
          style={{ maxHeight: 500 }}
        >
          <div className="flex-1 flex items-center justify-center h-full">
            <ProHeroSlider cardMode height={loginHeight || 500} />
          </div>
        </main>
        {/* Login lateral angosto a la derecha */}
        <aside
          ref={loginRef}
          className="w-full max-w-xs md:max-w-sm flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-cyan-500 p-0 h-full"
        >
          <div className="flex flex-col items-center w-full h-full justify-center p-6 md:p-8 bg-white/20 backdrop-blur-md shadow-2xl border border-white/30">
            {/* Icono en círculo glass */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-500/60 shadow-lg mb-6">
              <LockClosedIcon className="h-10 w-10 text-white drop-shadow-lg" />
            </div>
            {/* Botón principal */}
            <button className="w-full flex items-center justify-center gap-2 py-4 mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:from-pink-600 hover:to-purple-600 transition-all">
              <LockClosedIcon className="h-6 w-6 text-white mr-2" />
              Iniciar Sesión
            </button>
            {/* Separador visual */}
            <div className="w-full flex items-center my-2 mb-4">
              <div className="flex-1 h-px bg-white/30" />
              <span className="mx-2 text-xs text-white/60">o</span>
              <div className="flex-1 h-px bg-white/30" />
            </div>
            {/* Texto y link secundarios */}
            <p className="text-white/90 text-sm mb-1 font-medium text-center">¿No tenés Clave Fiscal?</p>
            <a href="#" className="text-blue-100 underline mb-6 hover:text-white transition text-sm">Obtenela</a>
            {/* Botones secundarios minimalistas */}
            <button className="w-full py-3 mb-3 rounded-2xl border border-white/40 bg-white/10 text-white font-semibold shadow-sm hover:bg-white/20 hover:text-blue-900 transition-all">Guía para Clave Fiscal</button>
            <button className="w-full py-3 rounded-2xl border border-white/40 bg-white/10 text-white font-semibold shadow-sm hover:bg-white/20 hover:text-blue-900 transition-all">Constancia de Inscripción</button>
          </div>
        </aside>
      </div>
    </div>
  );
} 