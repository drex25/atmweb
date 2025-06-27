import React from "react";
import {
  TruckIcon,
  DocumentIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import HeroVehiculos from "../components/HeroVehiculos";

const CarIcon = (props) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M5 11l1.5-4.5A2 2 0 0 1 8.4 5h7.2a2 2 0 0 1 1.9 1.5L19 11v5a1 1 0 0 1-1 1h-1a2 2 0 1 1-4 0H9a2 2 0 1 1-4 0H4a1 1 0 0 1-1-1v-5zm2.4-4a1 1 0 0 0-.95.68L5.1 11h13.8l-1.35-3.32a1 1 0 0 0-.95-.68H7.4zM7 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
    </svg>
  );




const quickLinks = [
  {
    title: "Emisión de Boleta IPA",
    icon: CarIcon, // Ícono de vehículo más cercano en Heroicons
    description: "",
    href: "#",
  },
  {
    title:
      "Simulador de Sellos",
    icon: DocumentIcon,
    description: "",
    href: "#",
  },
  {
    title: "Autogestión",
    icon: UserGroupIcon,
    description: "",
    href: "#",
  },
];



export default function Vehículos() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <HeroVehiculos />
      {/* Quick Links Grid */}
      <div className="w-auto mx-auto -mt-0 pb-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    </div>
  );
}
