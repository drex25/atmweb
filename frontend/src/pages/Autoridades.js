import React from "react";
import HeroAutoridades from "../components/HeroAutoridades.js";


export default function Autoridades() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      {/* Hero Section */}
      <HeroAutoridades
        title="AUTORIDADES"
        description=""
        backgroundImage="/frente-atm.png"
        breadcrumbs={[
          { label: "ATM", active: false },
          { label: "Autoridades", active: true },
        ]}
      />
      {/* Quick Links Grid Mejorado */}
      <section className="max-w-7xl mx-auto relative px-4">
        {/* Espaciado para evitar superposición */}
        <div className="mt-12">
          <iframe
            src="/Organigrama-V03.pdf"
            width="100%"
            height="600px"
            title="Organigrama"
            className="border-0 shadow-lg"
          ></iframe>
        </div>
      </section>
      {/* Línea divisoria animada */}
      <div className="flex justify-center my-16">
        <div className="h-1 w-32 bg-gradient-to-r from-pink-400 via-pink-200 to-pink-400 rounded-full animate-pulse shadow-lg" />
      </div>
    </div>
  );
}