import { useState, useEffect, useCallback } from 'react';
import Icon from '@/Components/Home/Icon';

const GALLERY_IMAGES = [
    { src: '/images/gallery/Gallery-2--Captivating-Cabinets.webp', alt: 'Modern white shaker kitchen cabinets with quartz countertops and stainless steel appliances' },
    { src: '/images/gallery/Gallery-3--Captivating-Cabinets.webp', alt: 'Contemporary two-tone kitchen design with dark lower cabinets and white upper cabinets' },
    { src: '/images/gallery/Gallery-3-Driftwood.webp', alt: 'Coastal driftwood finish kitchen cabinets with natural texture and modern coastal design' },
    { src: '/images/gallery/Gallery-21-Driftwood-Captivating-Cabinets.webp', alt: 'Natural driftwood finish kitchen cabinets with organic wood grain texture and modern hardware' },
    { src: '/images/gallery/Gallery-4--Captivating-Cabinets.webp', alt: 'Luxury kitchen featuring premium wood cabinets with marble island and designer lighting' },
    { src: '/images/gallery/Gallery-5--Captivating-Cabinets.webp', alt: 'Traditional kitchen with classic raised panel cabinets and decorative hardware' },
    { src: '/images/gallery/Gallery-6--Captivating-Cabinets.webp', alt: 'Bright modern kitchen with white cabinets, large island, and natural light' },
    { src: '/images/gallery/Gallery-13-Captivating-Cabinets.webp', alt: 'Elegant kitchen remodel featuring custom cabinetry with premium finishes and modern design' },
    { src: '/images/gallery/Gallery-8-Captivating-Cabinets.webp', alt: 'Elegant transitional kitchen with gray cabinets and gold hardware accents' },
    { src: '/images/gallery/Gallery-9-Captivating-Cabinets.webp', alt: 'Rustic farmhouse kitchen featuring distressed wood cabinets and vintage fixtures' },
    { src: '/images/gallery/Gallery-10-Captivating-Cabinets.webp', alt: 'Contemporary open concept kitchen with sleek flat-panel cabinets and modern appliances' },
    { src: '/images/gallery/Gallery-11-Captivating-Cabinets.webp', alt: 'Custom kitchen design with premium cabinetry, waterfall edge counters, and integrated storage solutions' },
];

function Lightbox({ index, onClose, onPrev, onNext }) {
    // Keyboard navigation
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === 'Escape') onClose();
            else if (e.key === 'ArrowLeft') onPrev();
            else if (e.key === 'ArrowRight') onNext();
        };
        window.addEventListener('keydown', onKey);
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = '';
        };
    }, [onClose, onPrev, onNext]);

    const img = GALLERY_IMAGES[index];

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
            onClick={onClose}
        >
            {/* Close */}
            <button
                onClick={onClose}
                aria-label="Close gallery"
                className="absolute top-4 right-4 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
                <Icon className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </Icon>
            </button>

            {/* Prev */}
            <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                aria-label="Previous image"
                className="absolute left-4 md:left-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
                <Icon className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </Icon>
            </button>

            {/* Image */}
            <figure className="max-w-[90vw] max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <img
                    src={img.src}
                    alt={img.alt}
                    className="max-w-[90vw] max-h-[78vh] object-contain rounded-lg shadow-2xl"
                />
                <figcaption className="mt-4 text-white/80 text-sm text-center max-w-2xl">
                    {img.alt}
                </figcaption>
                <p className="mt-1 text-white/50 text-xs">{index + 1} / {GALLERY_IMAGES.length}</p>
            </figure>

            {/* Next */}
            <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                aria-label="Next image"
                className="absolute right-4 md:right-8 w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
                <Icon className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </Icon>
            </button>
        </div>
    );
}

export default function Gallery() {
    const [activeIndex, setActiveIndex] = useState(null);

    const close = useCallback(() => setActiveIndex(null), []);
    const prev = useCallback(
        () => setActiveIndex((i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length),
        []
    );
    const next = useCallback(
        () => setActiveIndex((i) => (i + 1) % GALLERY_IMAGES.length),
        []
    );

    return (
        <section className="bg-white" aria-label="Inspiration gallery">
            {/* Gallery */}
            <div className="bg-[#F5F5F5] py-12 lg:py-16">
                <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                    {/* Heading */}
                    <div className="text-center mb-10 max-w-3xl mx-auto px-6">
                        <h2 className="font-display text-3xl md:text-4xl font-bold text-[#14304E] tracking-tight">
                            Kitchen Inspiration
                        </h2>
                        <p className="mt-3 text-[#14304E]/70 text-base md:text-lg leading-relaxed">
                            Explore our collection of beautiful kitchen designs featuring premium cabinetry from our trusted brands—crafted to inspire your next project.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                        {GALLERY_IMAGES.map((img, i) => (
                            <button
                                key={i}
                                type="button"
                                onClick={() => setActiveIndex(i)}
                                aria-label={`View image: ${img.alt}`}
                                className="group block overflow-hidden rounded-2xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {activeIndex !== null && (
                <Lightbox index={activeIndex} onClose={close} onPrev={prev} onNext={next} />
            )}
        </section>
    );
}
