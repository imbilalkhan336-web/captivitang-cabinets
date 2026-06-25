import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import Testimonials from '@/Components/Home/Testimonials';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Icon from '@/Components/Home/Icon';
import { BRANDS } from '@/Components/Home/shopCatalog';

/* ============================ Hero ============================ */

const HERO_BADGES = [
    {
        label: 'Nationwide Delivery',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />,
    },
    {
        label: `${BRANDS.length} Premium Brands`,
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
];

function BrandsHero({ bgImage = '/images/kichan-imgs/hero-img2.png' }) {
    return (
        <section className="relative min-h-[60vh] flex flex-col overflow-hidden pt-20" aria-label="Cabinet brands hero">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" aria-hidden="true" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 py-10 lg:py-12">
                    <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                        {/* LEFT — copy */}
                        <div className="lg:col-span-8">
                            <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                                Our Brands
                            </span>
                            <h1 className="mt-4 font-sans font-semibold lg:font-normal text-white tracking-tight text-[34px]/[2.5rem] md:text-5xl/[3.25rem] lg:text-[56px]/[3.5rem]">
                                Premium cabinet
                                <br />
                                <span className="text-amber-400 font-normal">brands</span> we carry
                            </h1>

                            <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                                We partner with the most trusted names in cabinetry so you can shop with confidence. Explore each brand below and find the perfect fit for your kitchen.
                            </p>

                            {/* Trust badges */}
                            <div className="mt-8 flex items-center gap-4 sm:gap-6">
                                {HERO_BADGES.map(({ label, icon }, i) => (
                                    <div key={label} className="flex items-center gap-4 sm:gap-6">
                                        {i > 0 && <hr className="hidden sm:block w-px h-10 bg-white/20 border-0" />}
                                        <div className="flex items-center gap-2 text-white/80">
                                            <Icon className="w-8 h-8">{icon}</Icon>
                                            <span className="text-sm whitespace-nowrap">{label}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT — CTAs */}
                        <div className="lg:col-span-4 flex flex-wrap items-center gap-3 lg:justify-end">
                            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20 whitespace-nowrap">
                                <Icon className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </Icon>
                                Get Free 3D Design
                            </a>
                            <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm whitespace-nowrap">
                                Browse Cabinets
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============= Stats strip (matches home FeatureHighlights) ============= */

const STATS = [
    {
        value: `${BRANDS.length}`,
        label: 'Trusted Brands',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
        value: '500+',
        label: 'Door Styles',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM4 14a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zM13 14a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5z" />,
    },
    {
        value: '50+',
        label: 'Finishes',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828L11 18.657M7 17h.01" />,
    },
    {
        value: 'Free',
        label: '3D Design',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    },
];

function StatsStrip() {
    return (
        <section className="bg-[#F3F4F6] py-8 lg:py-10" aria-label="Brand highlights">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    {STATS.map(({ value, label, icon }) => (
                        <div key={label} className="flex items-center gap-3 flex-1 min-w-[180px]">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#BDD7F0] flex items-center justify-center text-[#1E3A5F]">
                                <Icon className="w-7 h-7" strokeWidth={1.8}>{icon}</Icon>
                            </div>
                            <div>
                                <p className="font-display font-bold text-2xl md:text-[26px] text-[#1E3A5F] leading-none">{value}</p>
                                <p className="mt-1.5 text-[#1E3A5F]/70 text-sm leading-none">{label}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ==================== Featured brand spotlight ==================== */

const SPOTLIGHT_FINISHES = [
    { name: 'Galaxy Frost', img: '/images/cabinets/fabuwood/galaxy-frost.webp' },
    { name: 'Galaxy Dove', img: '/images/cabinets/fabuwood/galaxy-dove.webp' },
    { name: 'Galaxy Nickel', img: '/images/cabinets/fabuwood/galaxy-nickel.webp' },
    { name: 'Luna Desert Oak', img: '/images/cabinets/fabuwood/luna-desert-oak.webp' },
    { name: 'Galaxy Truffle', img: '/images/cabinets/fabuwood/galaxy-truffle.png' },
    { name: 'Galaxy Pitch Black', img: '/images/cabinets/fabuwood/galaxy-pitch-black.webp' },
];

function FeaturedBrand() {
    const brand = BRANDS[0]; // Fabuwood
    const lineNames = (brand.lines || []).map((l) => l.name);

    return (
        <section className="bg-white py-16 lg:py-24" aria-label="Featured brand">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/images/kichan-imgs/shop-by-brand.png"
                            alt="Kitchen featuring Fabuwood cabinetry"
                            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                        />
                        {/* Floating logo chip */}
                        <div className="absolute -bottom-5 left-5 lg:-left-5 bg-white rounded-2xl shadow-[0_18px_40px_rgba(55,65,81,0.16)] px-5 py-4 flex items-center">
                            <img src={brand.logo} alt={`${brand.name} logo`} className="h-9 max-w-[150px] object-contain" />
                        </div>
                    </div>

                    {/* Content */}
                    <div>
                        <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                            Featured Brand
                        </span>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                            {brand.name} — our most popular cabinetry
                        </h2>
                        <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed max-w-xl">
                            {brand.blurb}. Loved by designers and contractors for its all-wood construction, soft-close hardware, and an exceptional range of on-trend finishes—available across three signature lines.
                        </p>

                        {/* Lines */}
                        <div className="mt-6 flex flex-wrap gap-2.5">
                            {lineNames.map((name) => (
                                <span
                                    key={name}
                                    className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold px-3.5 py-1.5"
                                >
                                    <Icon className="w-3.5 h-3.5">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                    </Icon>
                                    {name}
                                </span>
                            ))}
                        </div>

                        {/* Finish swatches */}
                        <div className="mt-7 grid grid-cols-6 gap-2.5">
                            {SPOTLIGHT_FINISHES.map((f) => (
                                <div key={f.name} className="group/sw relative hover:z-10" title={f.name}>
                                    <img
                                        src={f.img}
                                        alt={f.name}
                                        loading="lazy"
                                        className="w-full aspect-square object-contain bg-[#F3F4F6] p-1.5 rounded-xl ring-1 ring-[#374151]/10 transition-transform duration-300 ease-out group-hover/sw:scale-[1.6] group-hover/sw:shadow-[0_18px_40px_rgba(55,65,81,0.25)]"
                                    />
                                </div>
                            ))}
                        </div>

                        <a
                            href="#"
                            className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20"
                        >
                            Shop {brand.name}
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </Icon>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ====================== Brand cards ====================== */

// Lifestyle photo paired with each brand (reused from the inspiration gallery).
const BRAND_PHOTOS = [
    '/images/kichan-imgs/gallery-01.png',
    '/images/kichan-imgs/gallery-02.png',
    '/images/kichan-imgs/gallery-03.png',
    '/images/kichan-imgs/gallery-04.png',
    '/images/kichan-imgs/gallery-05.png',
    '/images/kichan-imgs/gallery-06.png',
    '/images/kichan-imgs/gallery-07.png',
    '/images/kichan-imgs/gallery-08.png',
    '/images/kichan-imgs/gallery-09.png',
];

function BrandCard({ brand, photo }) {
    return (
        <div className="group flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)] hover:border-amber-400">
            {/* Photo header with floating logo chip */}
            <div className="relative h-44 overflow-hidden">
                <img
                    src={photo}
                    alt={`Kitchen featuring ${brand.name} cabinets`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-black/0" aria-hidden="true" />
                <div className="absolute bottom-3 left-3 bg-white rounded-xl shadow-[0_8px_20px_rgba(0,0,0,0.18)] h-12 px-3.5 flex items-center">
                    <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="h-7 w-auto max-w-[130px] object-contain"
                    />
                </div>
            </div>

            {/* Body */}
            <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-xl font-bold text-[#374151] tracking-tight">{brand.name}</h3>
                {brand.blurb && (
                    <p className="mt-3 text-[#374151]/70 text-[15px] leading-relaxed">{brand.blurb}</p>
                )}
                <a
                    href="#"
                    className="mt-auto pt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors"
                >
                    Shop {brand.name}
                    <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </Icon>
                </a>
            </div>
        </div>
    );
}

function BrandsGrid() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="All cabinet brands">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        Shop by Brand
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        Every brand, all in one place
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        From budget-friendly ready-to-assemble lines to designer collections, browse the full range of cabinetry we carry.
                    </p>
                </div>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                    {BRANDS.map((b, i) => (
                        <BrandCard key={b.name} brand={b} photo={BRAND_PHOTOS[i % BRAND_PHOTOS.length]} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ====================== Why our brands ====================== */

const REASONS = [
    {
        title: 'Quality you can trust',
        body: 'Every brand we carry is vetted for all-wood construction, durable finishes, and dependable hardware—so your kitchen lasts for decades.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />,
    },
    {
        title: 'Styles for every budget',
        body: 'Whether you want premium designer cabinets or affordable RTA options, our range of brands has a finish and price point to match your project.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3v18h18M9 17V9m4 8V5m4 12v-6" />,
    },
    {
        title: 'Free 3D design help',
        body: 'Not sure which brand is right? Our designers will help you compare options and plan your space with a complimentary 3D rendering.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    },
];

function WhyOurBrands() {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="Why shop our brands">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        Why Captivating Cabinets
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        Shop the best brands with confidence
                    </h2>
                </div>

                <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
                    {REASONS.map(({ title, body, icon }) => (
                        <div
                            key={title}
                            className="flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]"
                        >
                            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-600">
                                <Icon className="w-6 h-6">{icon}</Icon>
                            </span>
                            <h3 className="mt-5 font-display text-xl font-bold text-[#374151] tracking-tight">{title}</h3>
                            <p className="mt-3 text-[#374151]/70 text-[15px] leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ========================= Closing CTA ========================= */

function BrandsCTA({ bgImage = '/images/kichan-imgs/cta-about.png' }) {
    return (
        <section className="relative w-full overflow-hidden" aria-label="Ready to choose your cabinets">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" aria-hidden="true" />

            <div className="relative max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 py-16 lg:py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-display font-bold text-white tracking-tight leading-tight text-2xl md:text-3xl lg:text-[34px]">
                        Not sure which brand is <span className="text-amber-400">right for you?</span>
                    </h2>
                    <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
                        Get a free 3D design and our team will help you compare brands, finishes, and prices for your space.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20">
                            Get Free 3D Design
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </Icon>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm">
                            Browse Cabinets
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function CabinetBrands() {
    return (
        <>
            <Head title="Cabinet Brands | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <BrandsHero />
                <main>
                    <StatsStrip />
                    <FeaturedBrand />
                    <BrandsGrid />
                    <WhyOurBrands />
                    <Testimonials />
                </main>
                <BrandsCTA />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
