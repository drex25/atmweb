import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import wordpressService from '../services/wordpress';

async function getImageUrlFromId(id) {
  if (!id) return null;
  try {
    console.log('Fetching image for ID:', id);
    const res = await fetch(`http://localhost:8000/wp-json/wp/v2/media/${id}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();
    console.log('Image data received:', data);
    return data.source_url;
  } catch (error) {
    console.error('Error fetching image:', error);
    return null;
  }
}

function getBgColor(slide, index) {
  // Si tienes un campo ACF para color de fondo, úsalo aquí
  // return slide.acf?.color_fondo || 'from-purple-400 to-indigo-500';
  // Por ahora, alterna colores para demo
  const colors = [
    'from-purple-400 to-indigo-500',
    'from-blue-400 to-cyan-500',
    'from-pink-400 to-purple-500',
    'from-green-400 to-teal-500',
    'from-orange-400 to-red-500',
    'from-indigo-400 to-purple-500',
  ];
  return colors[index % colors.length];
}

export default function ProHeroSlider({ cardMode, height }) {
  const [slides, setSlides] = useState([]);
  const [images, setImages] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        setError(null);
        console.log('Fetching slides...');
        
        const data = await wordpressService.getSlides();
        console.log('Slides recibidos:', data);
        
        if (!data || data.length === 0) {
          console.log('No slides found');
          setSlides([]);
          setLoading(false);
          return;
        }
        
        setSlides(data);
        
        // Cargar imágenes para todos los slides
        const imagesObj = {};
        for (const slide of data) {
          console.log('Processing slide:', slide.id, 'ACF data:', slide.acf);
          
          if (slide.acf?.image_del_slide) {
            if (typeof slide.acf.image_del_slide === 'number') {
              console.log('Image ID is a number:', slide.acf.image_del_slide);
              const imageUrl = await getImageUrlFromId(slide.acf.image_del_slide);
              if (imageUrl) {
                imagesObj[slide.id] = imageUrl;
              }
            } else if (slide.acf.image_del_slide?.url) {
              console.log('Image has URL:', slide.acf.image_del_slide.url);
              imagesObj[slide.id] = slide.acf.image_del_slide.url;
            } else if (typeof slide.acf.image_del_slide === 'string') {
              console.log('Image is string URL:', slide.acf.image_del_slide);
              imagesObj[slide.id] = slide.acf.image_del_slide;
            } else {
              console.log('Image data structure:', slide.acf.image_del_slide);
            }
          } else {
            console.log('No image data found for slide:', slide.id);
          }
        }
        
        console.log('Imágenes resueltas:', imagesObj);
        setImages(imagesObj);
      } catch (error) {
        console.error('Error fetching slides:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  // Log en cada render
  console.log('Render ProHeroSlider:', { slides: slides.length, images: Object.keys(images).length, loading, error });

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center text-lg text-white bg-gradient-to-br from-blue-500 to-purple-600">
        <div className="text-center">
          <div className="animate-spin h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
          <p className="text-white/90 font-medium">Cargando slides...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center text-lg text-white bg-gradient-to-br from-red-500 to-pink-600">
        <div className="text-center p-8">
          <p className="text-white font-bold mb-2">Error al cargar slides</p>
          <p className="text-white/80 text-sm">{error}</p>
        </div>
      </div>
    );
  }

  if (!slides.length) {
    return (
      <div className="w-full h-full flex items-center justify-center text-lg text-white bg-gradient-to-br from-gray-500 to-gray-700">
        <div className="text-center p-8">
          <p className="text-white font-bold mb-2">No hay slides para mostrar</p>
          <p className="text-white/80 text-sm">Verifica que existan slides en WordPress</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.swiper-pagination'
        }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={slides.length > 1}
        className="pro-hero-swiper w-full h-full"
        style={{ height: height || '100%' }}
        onSlideChange={(swiper) => {
          console.log('Slide changed to:', swiper.activeIndex);
        }}
        onSwiper={(swiper) => {
          console.log('Swiper initialized:', swiper);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`slide-${slide.id}-${index}`}>
            {/* TODO EL SLIDE USA EL MISMO FONDO - SIN CONTENEDORES SEPARADOS */}
            <div 
              className={`w-full h-full flex items-center justify-center transition-all duration-500 bg-gradient-to-br ${getBgColor(slide, index)} p-6 md:p-12`}
            >
              {/* CONTENIDO DIRECTO SIN CONTENEDORES ADICIONALES */}
              <div className="w-full flex flex-col md:flex-row items-center justify-between h-full gap-6 md:gap-12 max-w-7xl mx-auto">
                
                {/* Columna izquierda: textos - INTEGRADOS CON EL FONDO */}
                <div className="flex-1 flex flex-col justify-center items-start text-center md:text-left">
                  {/* Badge - Con fondo semi-transparente para contraste */}
                  {slide.acf?.badge && (
                    <span className="inline-flex items-center mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm text-white font-semibold text-sm border border-white/30 shadow-lg">
                      <span className="mr-2">✨</span> {slide.acf.badge}
                    </span>
                  )}
                  
                  {/* Título - Texto blanco con sombra */}
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 drop-shadow-xl leading-tight">
                    {slide.title.rendered}
                  </h2>
                  
                  {/* Descripción - COMPLETAMENTE INTEGRADA */}
                  {slide.acf?.descripcion && (
                    <div className="mb-6 w-full">
                      {/* SIN FONDO - Solo texto blanco con sombra para legibilidad */}
                      <div className="text-white/95 text-base md:text-lg font-medium leading-relaxed drop-shadow-lg">
                        {slide.acf.descripcion.split('\n').map((line, idx) => (
                          <div key={idx} className="mb-2 last:mb-0">{line}</div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* Botón de acción */}
                  {slide.acf?.link && (
                    <a
                      href={slide.acf.link}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-4 font-bold text-base md:text-lg shadow-xl hover:from-pink-600 hover:to-purple-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl border border-white/20"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>{slide.acf?.texto_del_boton || 'Ver más'}</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  )}
                </div>
                
                {/* Columna derecha: imagen - TAMBIÉN INTEGRADA */}
                <div className="flex-1 flex items-center justify-center w-full h-full">
                  {images[slide.id] ? (
                    <img
                      src={images[slide.id]}
                      alt={slide.title.rendered}
                      className="max-h-[200px] md:max-h-[300px] lg:max-h-[360px] w-auto object-contain drop-shadow-2xl"
                      style={{ minWidth: 180 }}
                      onError={(e) => {
                        console.error('Error loading image:', e.target.src);
                        e.target.style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-white/10 flex items-center justify-center backdrop-blur-sm border border-white/20">
                      <span className="text-white/60 text-sm font-medium">Sin imagen</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        
        {/* Controles de navegación */}
        {slides.length > 1 && (
          <>
            <div className="swiper-button-prev !text-white !w-12 !h-12 !bg-black/20 !backdrop-blur-sm hover:!bg-black/40 !transition-all !duration-300"></div>
            <div className="swiper-button-next !text-white !w-12 !h-12 !bg-black/20 !backdrop-blur-sm hover:!bg-black/40 !transition-all !duration-300"></div>
            <div className="swiper-pagination !bottom-4"></div>
          </>
        )}
      </Swiper>
    </div>
  );
}