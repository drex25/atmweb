import React from "react";
import { DocumentIcon, ChartBarIcon } from "@heroicons/react/24/solid";
import HeroSellos from "../components/HeroSellos";
import SellosInfoAdicional from "../components/SellosInfoAdicional";

const quickLinks = [
  {
    title: "Ingresar para Liquidar de Sellado",
    icon: DocumentIcon,
    description: "",
    href: "#",
  },
  {
    title: "Estado del Sellado",
    icon: ChartBarIcon,
    description: "",
    href: "#",
  },
];

export default function Sellos() {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <HeroSellos />
  
        {/* Quick Links Grid */}
        <div className="w-auto mx-auto pb-12 px-4 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
            {quickLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="bg-white rounded-3xl shadow-xl p-8 flex flex-col items-center transition-transform hover:-translate-y-2 hover:shadow-2xl border border-gray-100 group"
              >
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-pink-100 mb-4 group-hover:bg-pink-200 transition">
                  <link.icon className="h-8 w-8 text-pink-500" />
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-gray-500 text-sm">{link.description}</p>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
  
        {/* Información adicional */}
        <SellosInfoAdicional/>
      </div>
    );
  }
  
