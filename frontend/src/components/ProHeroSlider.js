import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import wordpressService from '../services/wordpress';

function getBgColor(slide) {
    // Si tienes un campo ACF para color de fondo, úsalo aquí
    // return slide.acf?.color_fondo || 'from-purple-400 to-indigo-500';
    // Por ahora, alterna colores para demo
    const colors = [
        'from-purple-400 to-indigo-500',
        'from-blue-400 to-cyan-500',
        'from-pink-400 to-purple-500',
        'from-green-400 to-teal-500',
    ];
    return colors[slide.id % colors.length];
}

export default function ProHeroSlider({ cardMode }) {
    const [slides, setSlides] = useState([]);
    const [images, setImages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSlides = async () => {
            setLoading(true);
            const data = await wordpressService.getSlides();
            setSlides(data);
            const imagesObj = {};
            for (const slide of data) {
                if (slide.acf?.image_del_slide && typeof slide.acf.image_del_slide === 'number') {
                    const res = await fetch(`http://localhost:8000/wp-json/wp/v2/media/${slide.acf.image_del_slide}`);
                    const img = await res.json();
                    imagesObj[slide.id] = img.source_url;
                } else if (slide.acf?.image_del_slide?.url) {
                    imagesObj[slide.id] = slide.acf.image_del_slide.url;
                }
            }
            setImages(imagesObj);
            setLoading(false);
        };
        fetchSlides();
    }, []);

    if (loading) {
        return <div className="w-full h-full flex items-center justify-center text-lg text-gray-500">Cargando slides...</div>;
    }

    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 7000, disableOnInteraction: false }}
            loop={true}
            className="pro-hero-swiper w-full h-full"
        >
            {slides.map(slide => (
                <SwiperSlide key={slide.id}>
                    <div className="w-full h-full flex items-center justify-center transition-all duration-500 rounded-2xl p-2 md:p-4">
                        <div className="w-full flex flex-col md:flex-row items-center justify-between p-8 md:p-16 h-full gap-8 md:gap-16">
                            {/* Columna izquierda: textos */}
                            <div className="flex-1 flex flex-col justify-center items-start">
                                {/* Badge demo */}
                                {slide.acf?.badge && (
                                    <span className="inline-flex items-center mb-6 px-4 py-2 rounded-full bg-white/80 text-green-600 font-semibold text-base shadow">
                                        <span className="mr-2">✔️</span> {slide.acf.badge}
                                    </span>
                                )}
                                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg leading-tight break-words">
                                    {slide.title.rendered}
                                </h2>
                                {slide.acf?.descripcion && (
                                    <div className="mb-8 w-full">
                                        <div className="inline-block px-4 md:px-6 py-3 rounded-2xl bg-white/60 text-blue-900 text-sm md:text-base font-normal backdrop-blur-md leading-snug" style={{lineHeight: '1.6', maxWidth: '100%'}}>
                                            {slide.acf.descripcion.split('\n').map((line, idx) => (
                                                <div key={idx} className="mb-1 last:mb-0">{line}</div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {slide.acf?.link && (
                                    <a
                                        href={slide.acf.link}
                                        className="mt-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 w-full md:w-auto text-center whitespace-normal break-words"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {slide.acf?.texto_del_boton || 'Ver más'}
                                    </a>
                                )}
                            </div>
                            {/* Columna derecha: imagen */}
                            <div className="flex-1 flex items-center justify-center w-full h-full mt-10 md:mt-0">
                                {images[slide.id] && (
                                    <img
                                        src={images[slide.id]}
                                        alt={slide.title.rendered}
                                        className="max-h-[260px] md:max-h-[360px] w-auto rounded-3xl object-contain"
                                        style={{ minWidth: 220 }}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
} 