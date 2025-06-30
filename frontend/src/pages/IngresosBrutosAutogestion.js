import React, { useEffect, useState, useRef } from "react";
import HeroSellos from "../components/HeroSellos";

// Secciones con los IDs reales de la taxonomía "Trámite" en WordPress
const SECTIONS = [
  { name: "Trámites y Gestiones", id: 5 },
  { name: "Declaración Jurada", id: 7 },
  { name: "Certificado", id: 6 },
  { name: "Información General", id: 9 },
  { name: "Exenciones", id: 8 },
];

export default function IngresosBrutosAutogestion() {
  const [itemsBySection, setItemsBySection] = useState({});
  const [loading, setLoading] = useState(true);
  const [openItems, setOpenItems] = useState({});
  const sectionRefs = useRef({});

  useEffect(() => {
    async function fetchItems() {
      const result = {};
      for (const section of SECTIONS) {
        const res = await fetch(
          `http://localhost:8000/wp-json/wp/v2/item_autogestion?tramite=${section.id}&per_page=100`
        );
        const data = await res.json();
        result[section.name] = data;
      }
      setItemsBySection(result);
      setLoading(false);
    }
    fetchItems();
  }, []);

  // Scroll a la sección al hacer click en el menú
  const handleMenuClick = (sectionName) => {
    const ref = sectionRefs.current[sectionName];
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Toggle acordeón
  const toggleItem = (section, itemId) => {
    setOpenItems((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [itemId]: !prev[section]?.[itemId],
      },
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-pink-50">
      <HeroSellos
        title="Ingresos Brutos - Autogestión"
        description="Gestioná todos tus trámites de Ingresos Brutos de manera rápida, segura y eficiente."
        backgroundImage="/tramites.png"
        breadcrumbs={[
          { label: "ATM", active: false },
          { label: "Autogestión", active: false },
          { label: "Ingresos Brutos", active: true },
        ]}
      />
      <div className="max-w-7xl mx-auto flex gap-8 py-12 px-4">
        {/* Menú lateral sticky */}
        <aside className="w-72 flex-shrink-0 sticky top-24 self-start z-20">
          <nav className="bg-white rounded-2xl shadow-xl p-6 border border-pink-100">
            <h3 className="text-lg font-bold text-pink-700 mb-4 tracking-wide uppercase">Secciones</h3>
            <ul className="space-y-2">
              {SECTIONS.map((section) => (
                <li key={section.id}>
                  <button
                    onClick={() => handleMenuClick(section.name)}
                    className="w-full text-left px-4 py-3 rounded-lg font-semibold text-gray-700 hover:bg-pink-50 hover:text-pink-700 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-pink-300"
                  >
                    {section.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
        {/* Contenido principal */}
        <main className="flex-1">
          {loading ? (
            <div className="text-center text-lg py-20">Cargando trámites...</div>
          ) : (
            SECTIONS.map((section) => (
              <section
                key={section.id}
                ref={el => (sectionRefs.current[section.name] = el)}
                className="mb-16"
              >
                <h2 className="text-3xl font-black mb-8 text-pink-700 border-b-4 border-pink-200 pb-2 tracking-tight uppercase drop-shadow">
                  {section.name}
                </h2>
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  {itemsBySection[section.name] && itemsBySection[section.name].length > 0 ? (
                    <ul className="divide-y divide-gray-100">
                      {itemsBySection[section.name].map((item) => (
                        <li key={item.id} className="py-4">
                          <button
                            onClick={() => toggleItem(section.name, item.id)}
                            className={`w-full flex items-center justify-between px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-300 shadow group
                              ${openItems[section.name]?.[item.id] ? "bg-gradient-to-r from-pink-600 to-pink-400 text-white scale-105" : "bg-pink-50 text-pink-700 hover:bg-pink-100"}`}
                          >
                            <span>{item.title.rendered}</span>
                            <svg
                              className={`w-6 h-6 ml-4 transform transition-transform duration-300 ${openItems[section.name]?.[item.id] ? "rotate-90" : "rotate-0"}`}
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </button>
                          <div
                            className={`overflow-hidden transition-all duration-500 ${openItems[section.name]?.[item.id] ? "max-h-[1000px] mt-6 opacity-100" : "max-h-0 opacity-0"}`}
                          >
                            <div className="prose prose-pink max-w-none bg-pink-50 rounded-xl p-6 shadow-inner animate-fade-in">
                              <div dangerouslySetInnerHTML={{ __html: item.content.rendered }} />
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="text-gray-400 italic">No hay trámites en esta sección.</div>
                  )}
                </div>
              </section>
            ))
          )}
        </main>
      </div>
    </div>
  );
} 