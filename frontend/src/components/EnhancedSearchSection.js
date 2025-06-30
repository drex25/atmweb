import React, { useState } from 'react';
import { 
  MagnifyingGlassIcon,
  SparklesIcon,
  XMarkIcon,
  MicrophoneIcon
} from '@heroicons/react/24/outline';

export default function EnhancedSearchSection({ searchTerm, setSearchTerm }) {
  const [isFocused, setIsFocused] = useState(false);
  const [isListening, setIsListening] = useState(false);

  const handleClearSearch = () => {
    setSearchTerm('');
  };

  const handleVoiceSearch = () => {
    setIsListening(true);
    // Simulate voice search activation
    setTimeout(() => setIsListening(false), 2000);
  };

  return (
    <div className="relative max-w-4xl mx-auto mb-16">
      {/* Search container with enhanced styling */}
      <div className="relative group">
        {/* Main search input */}
        <div className={`relative transition-all duration-500 ${
          isFocused ? 'scale-105' : 'scale-100'
        }`}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="¿Qué trámite necesitás realizar? Buscá por palabras clave..."
            className="w-full px-8 py-6 pl-16 pr-32 text-xl rounded-3xl border-2 border-white/40 bg-white/95 backdrop-blur-xl shadow-2xl focus:outline-none focus:ring-4 focus:ring-blue-300/50 focus:border-blue-400 transition-all duration-500 placeholder-gray-500 font-medium"
          />
          
          {/* Search icon with animation */}
          <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
            <MagnifyingGlassIcon className={`h-7 w-7 transition-all duration-300 ${
              isFocused ? 'text-blue-600 scale-110' : 'text-gray-400'
            }`} />
          </div>

          {/* Voice search button */}
          <button
            onClick={handleVoiceSearch}
            className={`absolute right-20 top-1/2 transform -translate-y-1/2 p-2 rounded-full transition-all duration-300 ${
              isListening 
                ? 'bg-red-500 text-white animate-pulse' 
                : 'bg-gray-100 text-gray-600 hover:bg-blue-100 hover:text-blue-600'
            }`}
          >
            <MicrophoneIcon className="h-5 w-5" />
          </button>

          {/* Clear button */}
          {searchTerm && (
            <button
              onClick={handleClearSearch}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-red-100 hover:text-red-600 transition-all duration-300"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Enhanced search button */}
        <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 group-hover:scale-110">
          <span className="flex items-center gap-2">
            <SparklesIcon className="h-5 w-5" />
            Buscar
          </span>
        </button>
      </div>

      {/* Search suggestions */}
      {isFocused && !searchTerm && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/50 p-6 z-50 animate-fade-in">
          <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <SparklesIcon className="h-5 w-5 text-blue-600" />
            Búsquedas populares
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {[
              'Ingresos Brutos',
              'Impuesto Inmobiliario',
              'Automotor',
              'Sellos',
              'CFR',
              'Clave Fiscal',
              'Declaración Jurada',
              'Certificados'
            ].map((suggestion, index) => (
              <button
                key={index}
                onClick={() => setSearchTerm(suggestion)}
                className="text-left p-3 rounded-xl hover:bg-blue-50 hover:text-blue-700 transition-all duration-300 flex items-center gap-2 group"
              >
                <MagnifyingGlassIcon className="h-4 w-4 text-gray-400 group-hover:text-blue-600" />
                <span className="font-medium">{suggestion}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Voice search feedback */}
      {isListening && (
        <div className="absolute top-full left-0 right-0 mt-4 bg-red-500/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-red-200/50 p-4 z-50 animate-fade-in">
          <div className="flex items-center gap-3 text-white">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
            <span className="font-medium">Escuchando... Hablá ahora</span>
          </div>
        </div>
      )}

      {/* Search tips */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 text-sm">
          💡 <strong>Tip:</strong> Usá palabras clave como "ingresos", "inmobiliario", "automotor" para encontrar trámites específicos
        </p>
      </div>
    </div>
  );
} 