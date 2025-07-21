import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const AtencionAlPublico = () => {
  const [selectedDelegation, setSelectedDelegation] = useState('posadas');
  const [userLocation, setUserLocation] = useState(null);
  const [nearestDelegation, setNearestDelegation] = useState(null);
  const [map, setMap] = useState(null);
  const [directionsService, setDirectionsService] = useState(null);
  const [directionsRenderer, setDirectionsRenderer] = useState(null);
  const [routeInfo, setRouteInfo] = useState('');

  const delegations = [
    {
      name: "posadas",
      displayName: "Posadas - Casa Central",
      lat: -27.36600823108378,
      lng: -55.892998289260845,
      address: "San Martín 1754",
      phone: "0810-444-5505",
      email: "direcciondeinformatica@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/POSADAS.jpg"
    },
    {
      name: "apostoles",
      displayName: "Apóstoles",
      lat: -27.91101723581319,
      lng: -55.74808648616304,
      address: "Salta 215 Esq. Alvear",
      phone: "(03758) - 422463 / 3764528530",
      email: "delegacion.apostoles@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/APOSTOLES.png"
    },
    {
      name: "aristobulo",
      displayName: "Aristóbulo del Valle",
      lat: -27.09480572969625,
      lng: -54.89532981003871,
      address: "Pasaje Evaristo Rolin S/N°",
      phone: "(03755) - 471010 / 3764528521",
      email: "delegacion.aristobulo@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/ARISTOBULO.png"
    },
    {
      name: "irigoyen",
      displayName: "Bernardo de Irigoyen",
      lat: -26.255119884254242,
      lng: -53.648650161080326,
      address: "Vuelta de obligado 108 (esquina Sargento Bianchi)",
      phone: "(03741) - 420472 / 3764528243",
      email: "delegacion.irigoyen@dgr.misiones.gov.ar",
      hours: "",
      image: "/delegaciones/BNDOdeIRIGOYEN.jpg"
    },
    {
      name: "buenosaires",
      displayName: "Buenos Aires",
      lat: -34.59506277612126,
      lng: -58.38104123614955,
      address: "Santa Fé N° 989",
      phone: "3764890901 - fijo 011-43173750",
      email: "centroatencionbsas@dgr.misiones.gov.ar",
      hours: "De 7:15 a 15:00 hs.",
      image: "/delegaciones/CABA.png"
    },
    {
      name: "capioví",
      displayName: "Capioví",
      lat: -26.929607137335708,
      lng: -55.057528764022514,
      address: "Avda. San Luis Gonzaga y Calle Incienso Centro Cívico de Capioví",
      phone: "(03743) - 493600 / 3764528197",
      email: "delegacion.capiovi@dgr.misiones.gov.ar",
      hours: "",
      image: "/delegaciones/CAPIOVI.png"
    },
    {
      name: "wanda",
      displayName: "Colonia Wanda",
      lat: -25.971823489397416,
      lng: -54.561373068159845,
      address: "Av. Independencia 1390",
      phone: "(03757) - 470911 / 3764528495",
      email: "delegacion.wanda@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/WANDA.png"
    },
    {
      name: "andresito",
      displayName: "Comandante Andresito",
      lat: -25.671222290146,
      lng: -54.04370173776299,
      address: "Estados Unidos S/N°",
      phone: "(03757) - 497520 / 3764528340",
      email: "delegacion.andresito@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/ANDRESITO.png"
    },
    {
      name: "concepcion",
      displayName: "Concepción de La Sierra",
      lat: -27.990733330912164,
      lng: -55.52108522509731,
      address: "27 de Septiembre N° 210 Esq. Sorsana.",
      phone: "3764528249",
      email: "delegacion.concepcion@dgr.misiones.gov.ar",
      hours: "",
      image: "/delegaciones/CONCDELASIERRA.jpg"
    },
    {
      name: "eldorado",
      displayName: "Eldorado",
      lat: -26.407993363740307,
      lng: -54.60347104757392,
      address: "Av. San Martín \"E\" N° 2033",
      phone: "(03751) - 421290 / 3764528248",
      email: "delegacion.eldorado@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/ELDORADO.png"
    },
    {
      name: "jardin",
      displayName: "Jardín América",
      lat: -27.04214672506246,
      lng: -55.22526111908738,
      address: "Calle Brasil N° 649 (ex. N° 521) entre calle Paraguay y Avda. Iguazú",
      phone: "(03743) - 461126 / 3764528164",
      email: "delegacion.jardinamerica@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/fotoJardinAmerica.jpg"
    },
    {
      name: "alem",
      displayName: "Leandro N. Alem",
      lat: -27.606095768192837,
      lng: -55.322324554693274,
      address: "GDOR. LANUSSE 81",
      phone: "(03754) - 421775 / 3764528321",
      email: "delegacion.alem@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/ALEM.png"
    },
    {
      name: "montecarlo",
      displayName: "Montecarlo",
      lat: -26.56801982416008,
      lng: -54.76670459994448,
      address: "Cte.Andresito e/Aguaribayes y Paraguay",
      phone: "(03751) - 481680 / 3764900549",
      email: "delegacion.montecarlo@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/MONTECARLO.png"
    },
    {
      name: "obera",
      displayName: "Oberá",
      lat: -27.486278945965353,
      lng: -55.12470546156072,
      address: "Avenida Sarmiento N° 1168",
      phone: "(03755) - 421896 / 3764528384",
      email: "delegacion.obera@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/nuevaOBERA.jpg"
    },
    {
      name: "iguazu",
      displayName: "Puerto Iguazú",
      lat: -25.59992215563445,
      lng: -54.57449931935198,
      address: "Av. Victoria Aguirre y Marta Schwarz",
      phone: "(03757) - 422649 / 3764528509",
      email: "delegacion.iguazu@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/IGUAZU.png"
    },
    {
      name: "puerto",
      displayName: "Puerto Rico",
      lat: -26.81669070228028,
      lng: -55.02238861960577,
      address: "Av. 9 de Julio N°2512, entre calles Padre Lassberg y Catamarca",
      phone: "(03743) - 421700 / 3764528466",
      email: "delegacion.puertorico@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/PTORICO.jpg"
    },
    {
      name: "ignacio",
      displayName: "San Ignacio",
      lat: -27.254503122738374,
      lng: -55.53742600929875,
      address: "Avenida San Martín N° 1050 (Salón Modesto Aquino)",
      phone: "3764 528211",
      email: "delegacion.sanignacio@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/SANIGNACIO.jpg"
    },
    {
      name: "javier",
      displayName: "San Javier",
      lat: -27.873463416369365,
      lng: -55.136168901141325,
      address: "Libertad 552",
      phone: "(03754) - 482946 / 3764528525",
      email: "delegacion.sanjavier@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/SANJAVIER.png"
    },
    {
      name: "pedro",
      displayName: "San Pedro",
      lat: -26.62559471800619,
      lng: -54.113859349608795,
      address: "Güemes 841 entre 25 de Mayo y Nicanor Cordero - San Pedro",
      phone: "(03751) - 470252 / 3764528502",
      email: "delegacion.sanpedro@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/SanPedro-e1731417924481.jpg"
    },
    {
      name: "vicente",
      displayName: "San Vicente",
      lat: -26.99223738880299,
      lng: -54.48824548117921,
      address: "Democracia 381 y Ruta Nac. 14",
      phone: "(03755) - 460719 / 3764528576",
      email: "delegacion.sanvicente@dgr.misiones.gov.ar",
      hours: "De 6:45 a 14:30 hs.",
      image: "/delegaciones/SANVICENTE.png"
    },
    {
      name: "ruta",
      displayName: "Control Fiscal en Ruta",
      lat: -27.362840047215304,
      lng: -55.894212700043234,
      address: "Calle Colón 1352 1° piso Posadas-Misiones",
      phone: "",
      email: "",
      hours: "De 6:30 a 14:30 hs.",
      image: "/delegaciones/ctrl_fiscal.png"
    }
  ];

  const calculateDistance = (lat1, lng1, lat2, lng2) => {
    const R = 6371; // Radio de la Tierra en km
    const dLat = deg2rad(lat2 - lat1);
    const dLng = deg2rad(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLng / 2) *
      Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const deg2rad = (deg) => {
    return deg * (Math.PI / 180);
  };

  const findNearestDelegation = (position) => {
    const userLat = position.coords.latitude;
    const userLng = position.coords.longitude;
    let nearest = delegations[0];
    let minDistance = calculateDistance(
      userLat,
      userLng,
      delegations[0].lat,
      delegations[0].lng
    );

    for (let i = 1; i < delegations.length - 1; i++) {
      const distance = calculateDistance(
        userLat,
        userLng,
        delegations[i].lat,
        delegations[i].lng
      );
      if (distance < minDistance) {
        minDistance = distance;
        nearest = delegations[i];
      }
    }
    return nearest;
  };

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation(position);
          const nearest = findNearestDelegation(position);
          setNearestDelegation(nearest);
          setSelectedDelegation(nearest.name);
        },
        (error) => {
          console.error('Error getting location:', error);
          initMap();
        }
      );
    } else {
      alert("La geolocalización no es compatible con este navegador.");
      initMap();
    }
  };

  const initMap = () => {
    if (!window.google) return;

    const mapInstance = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: -27.36600823108378, lng: -55.892998289260845 },
      zoom: 8,
    });

    const directionsServiceInstance = new window.google.maps.DirectionsService();
    const directionsRendererInstance = new window.google.maps.DirectionsRenderer();
    directionsRendererInstance.setMap(mapInstance);

    setMap(mapInstance);
    setDirectionsService(directionsServiceInstance);
    setDirectionsRenderer(directionsRendererInstance);
  };

  const showDelegationOnMap = (delegationName) => {
    if (!map) return;

    const delegation = delegations.find(d => d.name === delegationName);
    if (!delegation) return;

    const center = { lat: delegation.lat, lng: delegation.lng };
    map.setCenter(center);
    map.setZoom(16);

    // Clear previous markers and directions
    if (directionsRenderer) {
      directionsRenderer.setDirections({ routes: [] });
    }

    new window.google.maps.Marker({
      position: center,
      map: map,
      title: delegation.displayName,
    });

    if (delegationName === 'ruta') {
      setRouteInfo('CORREOS DE CONTACTO – PUESTOS FISCALES');
    } else {
      setRouteInfo(`Delegación: ${delegation.displayName}`);
    }
  };

  const showDirectionsToNearestDelegation = () => {
    if (!map || !directionsService || !directionsRenderer || !userLocation || !nearestDelegation) return;

    const origin = {
      lat: userLocation.coords.latitude,
      lng: userLocation.coords.longitude,
    };
    const destination = { 
      lat: nearestDelegation.lat, 
      lng: nearestDelegation.lng 
    };

    const route = {
      origin: origin,
      destination: destination,
      travelMode: window.google.maps.TravelMode.DRIVING,
    };

    directionsService.route(route, (response, status) => {
      if (status === 'OK') {
        directionsRenderer.setDirections(response);
        const directionsData = response.routes[0].legs[0];
        
        if (directionsData.distance.value < 300000) { // Less than 300km
          setRouteInfo(
            `La Delegación más cercana a su ubicación es ${nearestDelegation.displayName} que se encuentra a ${directionsData.distance.text} (${directionsData.duration.text}).`
          );
        } else {
          showDelegationOnMap(selectedDelegation);
        }
      } else {
        showDelegationOnMap(selectedDelegation);
      }
    });
  };

  const handleDelegationChange = (delegationName) => {
    setSelectedDelegation(delegationName);
    
    if (nearestDelegation && delegationName === nearestDelegation.name && userLocation) {
      showDirectionsToNearestDelegation();
    } else {
      showDelegationOnMap(delegationName);
    }
  };

  useEffect(() => {
    // Load Google Maps script
    const script = document.createElement('script');
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap';
    script.async = true;
    script.defer = true;
    
    window.initMap = () => {
      initMap();
      getUserLocation();
    };
    
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  useEffect(() => {
    if (map && selectedDelegation) {
      if (nearestDelegation && selectedDelegation === nearestDelegation.name && userLocation) {
        showDirectionsToNearestDelegation();
      } else {
        showDelegationOnMap(selectedDelegation);
      }
    }
  }, [selectedDelegation, map, nearestDelegation, userLocation]);

  const currentDelegation = delegations.find(d => d.name === selectedDelegation);

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <label htmlFor="serviceoptions" className="block text-2xl font-bold text-gray-800 mb-4">
            Seleccione la delegación de su interés
          </label>
          <select
            id="serviceoptions"
            value={selectedDelegation}
            onChange={(e) => handleDelegationChange(e.target.value)}
            className="bg-white border-2 border-indigo-300 rounded-lg px-6 py-3 text-lg font-medium text-gray-700 focus:outline-none focus:ring-4 focus:ring-indigo-200 focus:border-indigo-500 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <option value="posadas">Posadas - Casa Central</option>
            <option value="apostoles">Apóstoles</option>
            <option value="aristobulo">Aristóbulo del Valle</option>
            <option value="irigoyen">Bernardo de Irigoyen</option>
            <option value="buenosaires">Buenos Aires</option>
            <option value="capioví">Capioví</option>
            <option value="wanda">Colonia Wanda</option>
            <option value="andresito">Comandante Andresito</option>
            <option value="concepcion">Concepción de La Sierra</option>
            <option value="eldorado">Eldorado</option>
            <option value="jardin">Jardín América</option>
            <option value="alem">Leandro N. Alem</option>
            <option value="montecarlo">Montecarlo</option>
            <option value="obera">Oberá</option>
            <option value="iguazu">Puerto Iguazú</option>
            <option value="puerto">Puerto Rico</option>
            <option value="ignacio">San Ignacio</option>
            <option value="javier">San Javier</option>
            <option value="pedro">San Pedro</option>
            <option value="vicente">San Vicente</option>
            <option value="ruta">Control Fiscal en Ruta</option>
          </select>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Delegation Info */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            {currentDelegation && (
              <>
                <img
                  src={currentDelegation.image}
                  alt={currentDelegation.displayName}
                  className="w-full h-64 object-cover rounded-xl mb-6 shadow-lg"
                  onError={(e) => {
                    e.target.src = 'https://images.pexels.com/photos/273230/pexels-photo-273230.jpeg?auto=compress&cs=tinysrgb&w=800';
                  }}
                />
                
                <div className="space-y-4">
                  {currentDelegation.address && (
                    <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                      <MapPin className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Dirección:</span>
                        <span className="ml-2 text-gray-700">{currentDelegation.address}</span>
                      </div>
                    </div>
                  )}
                  
                  {currentDelegation.phone && (
                    <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                      <Phone className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Teléfonos:</span>
                        <span className="ml-2 text-gray-700">{currentDelegation.phone}</span>
                      </div>
                    </div>
                  )}
                  
                  {currentDelegation.email && (
                    <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                      <Mail className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Email:</span>
                        <a
                          href={`mailto:${currentDelegation.email}`}
                          className="ml-2 text-indigo-600 hover:text-indigo-800 underline transition-colors"
                        >
                          {currentDelegation.email}
                        </a>
                      </div>
                    </div>
                  )}
                  
                  {currentDelegation.hours && (
                    <div className="flex items-start space-x-3 p-3 bg-red-50 rounded-lg">
                      <Clock className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold text-gray-800">Horarios:</span>
                        <span className="ml-2 text-gray-700">{currentDelegation.hours}</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Special content for Control Fiscal en Ruta */}
                {selectedDelegation === 'ruta' && (
                  <div className="mt-8 space-y-6">
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <p className="font-semibold text-center text-gray-800">ATENCIÓN LUNES A DOMINGO 24 HORAS</p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold text-gray-800">Centinela: RN N° 14 km.-785-San José</h4>
                        <p className="text-sm text-gray-600">Email: puestodecontroldgrcentinela@dgr.misiones.gov.ar</p>
                        <p className="text-sm text-gray-600">Tel. Cel.: 3764523359 y 3764743092</p>
                      </div>
                      
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold text-gray-800">El Arco: RN N° 12 -Km 1326 Posadas</h4>
                        <p className="text-sm text-gray-600">Email: puestodecontroldgrarco@dgr.misiones.gov.ar</p>
                        <p className="text-sm text-gray-600">Tel. Cel.: 3764741718</p>
                      </div>
                      
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold text-gray-800">Estación. Apóstoles: San Martin N°2751-Apostoles</h4>
                        <p className="text-sm text-gray-600">Email: puestodecontroldgrapostoles@dgr.misiones.gov.ar</p>
                        <p className="text-sm text-gray-600">Tel. Cel.: 3764741828</p>
                      </div>
                      
                      <div className="border-l-4 border-indigo-500 pl-4">
                        <h4 className="font-semibold text-gray-800">Azara: RP N°2 Km.1 Azara</h4>
                        <p className="text-sm text-gray-600">Email: puestodecontroldgrazara@dgr.misiones.gov.ar</p>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>

          {/* Map */}
          <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
            <div
              id="map"
              className="w-full h-96 rounded-xl shadow-inner bg-gray-100"
            ></div>
            {routeInfo && (
              <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                <p className="text-gray-700 font-medium">{routeInfo}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AtencionAlPublico;