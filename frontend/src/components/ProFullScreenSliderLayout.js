import React, { useRef, useLayoutEffect, useState } from 'react';
import ProHeroSlider from './ProHeroSlider';
import { LockClosedIcon } from '@heroicons/react/24/solid';

export default function ProFullScreenSliderLayout() {
  // Referencia y estado para igualar alturas
  const loginRef = useRef(null);
  const [loginHeight, setLoginHeight] = useState(500); // Altura por defecto

  useLayoutEffect(() => {
    const updateHeight = () => {
      if (loginRef.current) {
        const height = loginRef.current.offsetHeight;
        setLoginHeight(height);
        console.log('Login height updated:', height);
      }
    };

    // Actualizar altura inicial
    updateHeight();
    
    // Actualizar en resize
    const handleResize = () => {
      setTimeout(updateHeight, 100); // Pequeño delay para asegurar que el DOM se haya actualizado
    };
    
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    {/* ✅ FONDO UNIFICADO - Sin colores diferentes en bordes */}
    <div className="w-full min-h-[500px] bg-gradient-to-br from-purple-400 to-indigo-500 flex flex-col justify-center">
      {/* Bloque principal sin padding que cause bordes */}
      <div className="flex flex-col md:flex-row items-stretch justify-center flex-1 h-full">
        {/* Slider protagonista - SIN FONDO ADICIONAL */}
        <main
          className="flex-1 flex items-stretch justify-center order-2 md:order-1"
          style={{ minHeight: Math.max(loginHeight, 500) }}
        >
          <div className="flex-1 flex items-center justify-center h-full w-full">
            <div className="w-full h-full max-w-6xl">
              <ProHeroSlider cardMode height={loginHeight || 500} />
            </div>
          </div>
        </main>
        
        {/* Login lateral a la derecha */}
        <aside
          ref={loginRef}
          className="w-full md:w-80 lg:w-96 flex flex-col justify-center items-center bg-gradient-to-br from-blue-600 to-cyan-500 p-0 order-1 md:order-2"
          style={{ minHeight: 500 }}
        >
          <div className="flex flex-col items-center w-full h-full justify-center p-6 md:p-8 bg-white/20 backdrop-blur-md shadow-2xl border border-white/30">
            {/* Icono en círculo glass */}
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/60 to-purple-500/60 shadow-lg mb-6">
              <LockClosedIcon className="h-10 w-10 text-white drop-shadow-lg" />
            </div>
            
            {/* Botón principal */}
            <button className="w-full flex items-center justify-center gap-2 py-4 mb-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-bold text-lg shadow-xl hover:from-pink-600 hover:to-purple-600 transition-all">
              <LockClosedIcon className="h-6 w-6 text-white" />
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
            <button className="w-full py-3 mb-3 rounded-2xl border border-white/40 bg-white/10 text-white font-semibold shadow-sm hover:bg-white/20 hover:text-blue-900 transition-all">
              Guía para Clave Fiscal
            </button>
            <button className="w-full py-3 rounded-2xl border border-white/40 bg-white/10 text-white font-semibold shadow-sm hover:bg-white/20 hover:text-blue-900 transition-all">
              Constancia de Inscripción
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}