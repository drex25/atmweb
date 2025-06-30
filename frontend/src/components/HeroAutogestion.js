import React from 'react';
import { 
  UserGroupIcon, 
  MagnifyingGlassIcon, 
  ArrowRightIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function HeroAutogestion() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-indigo-400/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-200/10 via-purple-200/10 to-pink-200/10 rounded-full blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top badge with enhanced design */}
        <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200/50 mb-8 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 group">
          <div className="relative">
            <UserGroupIcon className="h-5 w-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
            <SparklesIcon className="absolute -top-1 -right-1 h-3 w-3 text-yellow-500 animate-pulse" />
          </div>
          <span className="text-blue-700 font-bold text-sm tracking-wide uppercase">Centro de Autogestión Digital</span>
        </div>

        {/* Main heading with enhanced typography and effects */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
          <span className="bg-gradient-to-r from-[#023F5E] via-[#612247] to-[#2563eb] bg-clip-text text-transparent">
            AUTOGESTIÓN
          </span>
          <br />
          <span className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-700">
            DIGITAL
          </span>
        </h1>

        {/* Subtitle with enhanced styling */}
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 mb-12 max-w-5xl mx-auto font-medium leading-relaxed">
          Gestioná todos tus trámites tributarios de manera{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold">
            rápida, segura y eficiente
          </span>{' '}
          desde un solo lugar
        </p>

        {/* Feature highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ShieldCheckIcon className="h-6 w-6 text-green-600" />
            </div>
            <span className="font-semibold text-gray-700">100% Seguro</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MagnifyingGlassIcon className="h-6 w-6 text-blue-600" />
            </div>
            <span className="font-semibold text-gray-700">Búsqueda Inteligente</span>
          </div>
          
          <div className="flex items-center justify-center gap-3 p-4 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <ArrowRightIcon className="h-6 w-6 text-purple-600" />
            </div>
            <span className="font-semibold text-gray-700">Trámites Rápidos</span>
          </div>
        </div>

        {/* Call to action section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 transform">
            <span className="flex items-center gap-2">
              Comenzar Ahora
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button className="group px-8 py-4 bg-white/80 backdrop-blur-md text-gray-700 rounded-2xl font-bold text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-gray-200/50">
            <span className="flex items-center gap-2">
              Ver Tutorial
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-sm text-gray-600 font-medium">Trámites Disponibles</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-sm text-gray-600 font-medium">Disponibilidad</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">99.9%</div>
            <div className="text-sm text-gray-600 font-medium">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">10k+</div>
            <div className="text-sm text-gray-600 font-medium">Usuarios Activos</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
} 