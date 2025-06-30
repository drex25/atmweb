import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import HeroSellos from "../components/HeroSellos";

export default function AutogestionItemDetail() {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/wp-json/wp/v2/item_autogestion/${id}`)
      .then((res) => res.json())
      .then(setItem);
  }, [id]);

  if (!item) return <div className="p-8">Cargando...</div>;

  return (
    <div>
      <HeroSellos
        title={item.title.rendered}
        description="Detalle del trámite de autogestión"
        backgroundImage="/tramites.png"
        breadcrumbs={[
          { label: "ATM", active: false },
          { label: "Ingresos Brutos", active: false },
          { label: item.title.rendered, active: true },
        ]}
      />
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 mt-8 mb-16">
        <div
          className="prose prose-lg"
          dangerouslySetInnerHTML={{ __html: item.content.rendered }}
        />
        <div className="mt-8">
          <Link
            to="/tramites/ingresos-brutos"
            className="text-blue-600 hover:underline"
          >
            ← Volver a Ingresos Brutos
          </Link>
        </div>
      </div>
    </div>
  );
} 