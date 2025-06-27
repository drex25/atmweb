import React from "react";
import {
  DocumentCurrencyDollarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";
import HeroTasasAranceles from "../components/HeroTasasAranceles";

const quickLinks = [
  {
    title: "Estado del sellado",
    icon: ChartBarIcon,
    description: "Consultá el estado de tus sellados en línea.",
    href: "#",
  },
  {
    title: "Emisión de Tasas",
    icon: DocumentCurrencyDollarIcon,
    description: "Emití tasas de manera rápida y sencilla.",
    href: "#",
  },
  {
    title: "Aranceles",
    icon: DocumentCurrencyDollarIcon,
    description: "Consultá y gestioná aranceles vigentes.",
    href: "#",
  },
];

export default function TasasYAranceles() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Hero Section */}
      <HeroTasasAranceles />
      {/* Quick Links Grid Mejorado */}
      <section className="max-w-7xl mx-auto -mt-24 z-10 relative px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {quickLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="backdrop-blur-xl bg-white/70 border border-pink-100 rounded-3xl shadow-2xl p-10 flex flex-col items-center transition-all hover:-translate-y-2 hover:shadow-pink-200/80 hover:bg-white/90 group duration-300"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-tr from-pink-200 via-pink-100 to-pink-50 mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <link.icon className="h-10 w-10 text-pink-500 drop-shadow" />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-extrabold text-gray-800 mb-2 tracking-tight group-hover:text-pink-600 transition-colors">
                  {link.title}
                </h3>
                {link.description && (
                  <p className="text-gray-500 text-base font-medium mb-1 group-hover:text-gray-700 transition-colors">{link.description}</p>
                )}
              </div>
              <span className="mt-4 text-pink-600 font-semibold text-sm opacity-0 group-hover:opacity-100 transition-opacity">Ir &rarr;</span>
            </a>
          ))}
        </div>
      </section>
      {/* Línea divisoria animada */}
      <div className="flex justify-center my-16">
        <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-pink-200 to-pink-400 rounded-full animate-pulse shadow-lg" />
      </div>
    </div>
  );
}
