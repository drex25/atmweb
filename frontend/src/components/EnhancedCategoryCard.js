import React from 'react';
import { 
  ChevronRightIcon,
  SparklesIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function EnhancedCategoryCard({ category, isExpanded, onToggle, index }) {
  const getStatusColor = (serviceName) => {
    if (serviceName.includes('Trámites')) return 'text-blue-600';
    if (serviceName.includes('Información')) return 'text-green-600';
    if (serviceName.includes('Exenciones')) return 'text-purple-600';
    if (serviceName.includes('Declaración')) return 'text-orange-600';
    if (serviceName.includes('Certificados')) return 'text-pink-600';
    return 'text-gray-600';
  };

  const getStatusIcon = (serviceName) => {
    if (serviceName.includes('Trámites')) return '⚡';
    if (serviceName.includes('Información')) return 'ℹ️';
    if (serviceName.includes('Exenciones')) return '🎯';
    if (serviceName.includes('Declaración')) return '📋';
    if (serviceName.includes('Certificados')) return '📄';
    return '📝';
  };

  return (
    <div 
      className="group relative h-full animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div 
        className={`relative overflow-hidden rounded-3xl shadow-2xl transition-all duration-700 hover:scale-105 hover:shadow-pink-200/50 cursor-pointer h-full flex flex-col min-h-[480px] ${
          isExpanded ? 'ring-4 ring-pink-300/50 scale-105' : ''
        }`}
        onClick={onToggle}
      >
        {/* Enhanced header with gradient and effects */}
        <div className={`bg-gradient-to-br ${category.color} p-8 text-center relative overflow-hidden flex-shrink-0`}>
          {/* Animated background effects */}
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Floating particles effect */}
          <div className="absolute inset-0">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-white/30 rounded-full animate-bounce"
                style={{
                  left: `${20 + i * 30}%`,
                  top: `${30 + i * 20}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: '2s'
                }}
              ></div>
            ))}
          </div>
          
          {/* Main content */}
          <div className="relative z-10">
            {/* Enhanced icon container */}
            <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${category.iconBg} flex items-center justify-center shadow-2xl border-4 border-white/40 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative`}>
              <category.icon className="h-10 w-10 text-[#612247] group-hover:scale-110 transition-transform duration-300" />
              <SparklesIcon className="absolute -top-2 -right-2 h-4 w-4 text-yellow-500 animate-pulse" />
            </div>
            
            {/* Enhanced title */}
            <h3 className="text-xl font-black text-white tracking-wide drop-shadow-2xl leading-tight mb-2">
              {category.title}
            </h3>
            
            {/* Service count badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-md border border-white/30">
              <CheckCircleIcon className="h-4 w-4 text-white" />
              <span className="text-white/90 font-bold text-sm">
                {category.services.length} servicios
              </span>
            </div>
          </div>
        </div>

        {/* Enhanced services list */}
        <div className="bg-white/98 backdrop-blur-md flex-1 flex flex-col relative">
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Ccircle cx='10' cy='10' r='1'/%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative z-10 p-6 space-y-3 flex-1">
            {category.services.map((service, idx) => (
              <div 
                key={idx}
                className="group/item relative overflow-hidden"
              >
                <div className="flex items-center justify-between p-4 rounded-2xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-500 cursor-pointer border border-transparent hover:border-blue-200 hover:shadow-lg hover:scale-105 transform">
                  {/* Service icon and name */}
                  <div className="flex items-center gap-3 flex-1">
                    <span className="text-lg">{getStatusIcon(service)}</span>
                    <div className="flex-1">
                      <span className={`font-semibold text-sm leading-tight transition-colors duration-300 ${getStatusColor(service)} group-hover/item:text-gray-900`}>
                        {service}
                      </span>
                    </div>
                  </div>
                  
                  {/* Enhanced arrow */}
                  <div className="flex items-center gap-2">
                    <ClockIcon className="h-4 w-4 text-gray-400 group-hover/item:text-blue-500 transition-colors duration-300" />
                    <ChevronRightIcon className="h-5 w-5 text-gray-400 group-hover/item:text-pink-500 group-hover/item:translate-x-2 transition-all duration-300 flex-shrink-0" />
                  </div>
                </div>
                
                {/* Hover effect line */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 group-hover/item:w-full transition-all duration-500"></div>
              </div>
            ))}
          </div>
          
          {/* Enhanced footer */}
          <div className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 border-t border-gray-100">
            <div className="flex items-center justify-between text-sm text-gray-600">
              <span className="font-medium">Hacé clic para expandir</span>
              <div className="flex items-center gap-1">
                <SparklesIcon className="h-4 w-4 text-blue-500" />
                <span className="font-bold text-blue-600">Pro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Enhanced glow effect */}
      <div className={`absolute -inset-1 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-blue-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 ${
        isExpanded ? 'opacity-100' : ''
      }`}></div>
    </div>
  );
} 