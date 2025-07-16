import React from 'react';
import { motion } from 'framer-motion';

export default function Ods() {
  return (
    <div className="min-h-screen bg-white flex flex-col relative overflow-hidden">
      <div className="w-[90%] mx-auto">
      {/* Fondo radial azul sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 70% 30%, #3B82F6 0%, #3B82F6 20%, #60A5FA 35%, transparent 60%)",
          opacity: 0.32,
          zIndex: 0
        }}
      />
      {/* Hero Section */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 w-full mx-auto px-0 py-20 gap-8 items-center">
        {/* Texto a la izquierda */}
        <motion.div
          className="text-left flex flex-col justify-center pl-0"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="mb-6">
            <div className="flex flex-col text-4xl md:text-5xl font-extrabold leading-tight">
              <span><span className="text-blue-500">O</span>bjetivos de</span>
              <span><span className="text-blue-500">D</span>esarollo</span>
              <span><span className="text-blue-500">S</span>ostenible</span>
            </div>
          </div>
          <motion.p
            className="text-lg md:text-xl text-gray-600 max-w-xl"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            Desde la Agencia Tributaria de Misiones, asumimos un firme compromiso con la sociedad. Por ello, hemos decidido implementar los Objetivos de Desarrollo Sostenible (ODS) como una de nuestras actividades principales. Estamos comprometidos en contribuir al bienestar de los contribuyentes y de la comunidad, promoviendo así un desarrollo sostenible, inclusivo y equitativo para todos los ciudadanos misioneros.
          </motion.p>
        </motion.div>
        {/* Imagen a la derecha */}
        <motion.div
          className="w-full flex justify-end items-center"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="w-full h-[400px] flex items-center justify-center shadow-2xl overflow-hidden">
            <img
              src="/imagen-3.png"
              alt="ODS Misiones"
              className="w-full h-full object-contain"
            />
          </div>
        </motion.div>
      </section>
      {/* Sección de tarjetas */}
      <section className="max-w-6xl mx-auto px-4 py-16 flex flex-col md:flex-row gap-40 justify-center items-center">
        {/* Tarjeta 1 */}
        <motion.div
          className="relative flex-1 min-w-[500px] max-w-3xl basis-1/2 h-64 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center group"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="/ods-image3.jpeg" alt="Nuestros Espacios" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h3 className="text-white text-3xl md:text-4xl font-light text-center tracking-wide mb-8">
              NUESTROS<br />ESPACIOS
            </h3>
            <button className="bg-white text-gray-900 font-semibold px-8 py-2 rounded-full shadow transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg">VER MÁS</button>
          </div>
        </motion.div>
        {/* Tarjeta 2 */}
        <motion.div
          className="relative flex-1 min-w-[500px] max-w-3xl basis-1/2 h-64 rounded-[2.5rem] shadow-2xl overflow-hidden flex items-center justify-center group"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <img src="/ods-image2.jpg" alt="Nuestras Acciones" className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative z-10 flex flex-col items-center justify-center w-full h-full">
            <h3 className="text-white text-3xl md:text-4xl font-light text-center tracking-wide mb-8">
              NUESTRAS<br />ACCIONES
            </h3>
            <button className="bg-white text-gray-900 font-semibold px-8 py-2 rounded-full shadow transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-lg">VER MÁS</button>
          </div>
        </motion.div>
      </section>
      </div>
    </div>
  );
}