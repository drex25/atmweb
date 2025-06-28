import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/modules';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
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

export default function HeroSliderMobile() {
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
  console.log('Render HeroSliderMobile:', { slides: slides.length, images: Object.keys(images).length, loading, error });

  if (loading) {
    return (
      <div className="text-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
        <p className="mt-2 text-gray-600">Cargando slides...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p className="text-red-600 font-semibold">Error al cargar slides</p>
        <p className="text-sm text-gray-500 mt-1">{error}</p>
      </div>
    );
  }

  if (!slides.length) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-600">No hay slides para mostrar</p>
        <p className="text-sm text-gray-500 mt-1">Verifica que existan slides en WordPress</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          nextEl: '.hero-swiper .swiper-button-next',
          prevEl: '.hero-swiper .swiper-button-prev',
        }}
        pagination={{ 
          clickable: true,
          el: '.hero-swiper .swiper-pagination'
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        loop={slides.length > 1}
        className="hero-swiper"
        onSlideChange={(swiper) => {
          console.log('Mobile slide changed to:', swiper.activeIndex);
        }}
        onSwiper={(swiper) => {
          console.log('Mobile swiper initialized:', swiper);
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={`mobile-slide-${slide.id}-${index}`}>
            <div className="slide-content p-6 flex flex-col items-center text-center">
              {images[slide.id] && (
                <img
                  src={images[slide.id]}
                  alt={slide.title.rendered}
                  className="slide-image mb-6 w-full max-w-sm mx-auto"
                  onError={(e) => {
                    console.error('Error loading image:', e.target.src);
                    e.target.style.display = 'none';
                  }}
                />
              )}
              <h2 className="font-bold text-2xl mb-3 text-gray-800">{slide.title.rendered}</h2>
              {slide.acf?.descripcion && (
                <p className="text-base text-gray-600 mb-6 max-w-md leading-relaxed">{slide.acf.descripcion}</p>
              )}
              {slide.acf?.link && (
                <a
                  href={slide.acf.link}
                  className="inline-block bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  {slide.acf?.texto_del_boton || 'Ver más'}
                </a>
              )}
            </div>
          </SwiperSlide>
        ))}
        
        {/* Controles solo si hay múltiples slides */}
        {slides.length > 1 && (
          <>
            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>
            <div className="swiper-pagination"></div>
          </>
        )}
      </Swiper>
    </div>
  );
}