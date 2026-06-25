import Icon from '@/Components/Home/Icon';

const PATHS = [
    {
        eyebrow: 'For Home Owners',
        title: 'Design the kitchen you’ve been dreaming of',
        description: 'Free 3D renderings, expert guidance, and premium cabinetry delivered to your door.',
        cta: 'Get Free 3D Design',
        href: '/design-service',
        image: '/images/kichan-imgs/Gallery-6--Captivating-Cabinets.webp',
    },
    {
        eyebrow: 'For Contractors',
        title: 'Build more, for less, on every project you take on',
        description: 'Exclusive contractor pricing, dedicated support, and priority fulfillment.',
        cta: 'Contractor Program',
        href: '#',
        image: '/images/kichan-imgs/Gallery-4--Captivating-Cabinets.webp',
    },
];

function PathCard({ eyebrow, title, description, cta, href, image }) {
    return (
        <a
            href={href}
            className="group relative flex min-h-[360px] lg:min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl p-8 lg:p-10"
        >
            {/* Background image */}
            <img
                src={image}
                alt=""
                aria-hidden="true"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Overlays — base tint + bottom-heavy gradient for legibility */}
            <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/20" aria-hidden="true" />

            {/* Content */}
            <div className="relative">
                <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.18em] [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]">
                    {eyebrow}
                </span>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl font-bold text-white leading-tight max-w-sm [text-shadow:0_2px_8px_rgba(0,0,0,0.85),0_1px_3px_rgba(0,0,0,0.7)]">
                    {title}
                </h3>
                <p className="mt-3 text-white text-base leading-relaxed max-w-sm [text-shadow:0_1px_5px_rgba(0,0,0,0.85)]">
                    {description}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 px-7 py-3 bg-amber-400 group-hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors">
                    {cta}
                    <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </Icon>
                </span>
            </div>
        </a>
    );
}

export default function AudiencePaths() {
    return (
        <section className="bg-white py-12 lg:py-16" aria-label="Choose your path">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {PATHS.map((path) => (
                        <PathCard key={path.eyebrow} {...path} />
                    ))}
                </div>
            </div>
        </section>
    );
}
