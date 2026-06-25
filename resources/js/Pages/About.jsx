import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import ShopByCategory, { BRAND_ITEMS } from '@/Components/Home/ShopByCategory';
import Icon from '@/Components/Home/Icon';

/* ============================ Hero ============================ */

function AboutHero({ bgImage = '/images/kichan-imgs/hero-img5.png' }) {
    return (
        <section className="relative min-h-[52vh] flex flex-col overflow-hidden pt-20" aria-label="About us hero">
            {/* Full-width background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
            />

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" aria-hidden="true" />

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex-1 flex items-center">
                    <div className="w-full max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 pt-10 lg:pt-12 pb-4 lg:pb-6">
                        <div className="max-w-2xl">
                            <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                                About Captivating Cabinets
                            </span>
                            <h1 className="mt-4 font-sans font-normal text-white text-[44px] leading-[48px] md:text-[56px] md:leading-[56px]">
                                Premium cabinets, <span className="text-amber-400">priced for everyone</span>
                            </h1>
                            <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                                We bring nine premium cabinet brands, free 3D design, and nationwide delivery together in one place—so homeowners and contractors can build beautiful kitchens without the showroom markup.
                            </p>

                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a href="/design-service" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20 whitespace-nowrap">
                                    <Icon className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </Icon>
                                    Get Free 3D Design
                                </a>
                                <a href="#our-story" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm whitespace-nowrap">
                                    Our Story
                                    <Icon className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </Icon>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ Stats ============================ */

const STATS = [
    { value: '9', label: 'Premium cabinet brands' },
    { value: '10k+', label: 'Kitchens designed' },
    { value: '48', label: 'States shipped nationwide' },
    { value: '0%', label: 'APR financing available' },
];

function Stats() {
    return (
        <section className="bg-[#F3F4F6] border-y border-[#374151]/10" aria-label="Captivating Cabinets by the numbers">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 py-7 lg:py-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {STATS.map(({ value, label }) => (
                        <div key={label} className="text-center">
                            <div className="font-display text-4xl md:text-5xl font-bold text-amber-500 tracking-tight">
                                {value}
                            </div>
                            <p className="mt-2 text-[#374151]/70 text-sm leading-relaxed">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* =========================== Our Story =========================== */

function OurStory() {
    return (
        <section id="our-story" className="relative bg-white py-16 lg:py-24" aria-label="Our story">
            <div className="relative max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/images/financing/easy-steps.png"
                            alt="Warm wood-tone kitchen with island seating"
                            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_20px_50px_rgba(55,65,81,0.16)]"
                        />
                        <div className="hidden md:block pointer-events-none absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl bg-amber-400/15 -z-10" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div>
                        <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                            Our Story
                        </span>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                            Built to make great kitchens attainable
                        </h2>
                        <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                            Captivating Cabinets started with a simple belief: a beautiful, well-built kitchen shouldn't require a showroom budget. For years we watched homeowners and contractors pay steep markups for cabinets that came from the same factories we could source directly.
                        </p>
                        <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                            So we cut out the middlemen. Today we curate nine premium cabinet brands, pair every order with complimentary 3D design, and ship straight to your door—nationwide. Whether you're remodeling a single kitchen or running dozens of projects a year, you get the same honest pricing and hands-on support.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ========================= Mission / Values ========================= */

const VALUES = [
    {
        title: 'Honest, wholesale pricing',
        body: 'Premium cabinets without the showroom markup. We source directly so you keep more of your budget for the things that matter.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
    },
    {
        title: 'Design-first service',
        body: 'Complimentary professional 3D design on every project—floor plans, elevations, and renderings so you see it before you build it.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    },
    {
        title: 'Quality you can trust',
        body: 'Only premium, well-built brands make our lineup—solid construction and finishes that hold up to everyday life.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
    {
        title: 'People over transactions',
        body: 'A real team that answers, guides, and follows through—from your first question to final install.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-2a3 3 0 10-2.4-1.2" />,
    },
];

function Values() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="What we stand for">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        What We Stand For
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        Values that shape every order
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        We measure success by the kitchens we help create and the relationships we build along the way.
                    </p>
                </div>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {VALUES.map(({ title, body, icon }) => (
                        <div
                            key={title}
                            className="flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]"
                        >
                            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                                <Icon className="w-6 h-6">{icon}</Icon>
                            </span>
                            <h3 className="mt-4 font-display text-base font-bold text-[#374151] tracking-tight">{title}</h3>
                            <p className="mt-1.5 text-[#374151]/70 text-sm leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ======================= How We Help (steps) ======================= */

const STEPS = [
    {
        title: 'Tell us about your space',
        body: 'Share your kitchen dimensions, style, and goals. Homeowner or contractor—we tailor the process to you.',
    },
    {
        title: 'Get a free 3D design',
        body: 'Our designers turn your vision into detailed renderings, floor plans, and elevations at no cost.',
    },
    {
        title: 'Order with confidence',
        body: 'Choose from nine premium brands at wholesale pricing, with financing available through Affirm.',
    },
    {
        title: 'We ship nationwide',
        body: 'Curbside, lift-gate, and inside-delivery options bring your cabinets straight to your door.',
    },
];

function HowWeHelp() {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="How we help">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        How We Help
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        From idea to installed—simplified
                    </h2>
                </div>

                <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {STEPS.map(({ title, body }, i) => (
                        <div
                            key={title}
                            className="relative flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]"
                        >
                            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-amber-400 text-gray-900 font-display text-lg font-bold">
                                {i + 1}
                            </span>
                            <h3 className="mt-4 font-display text-lg font-bold text-[#374151] tracking-tight">{title}</h3>
                            <p className="mt-2 text-[#374151]/70 text-[15px] leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ===================== Brands (reused section) ===================== */

function Brands() {
    return (
        <ShopByCategory
            title="Nine premium brands under one roof"
            description="We partner with the most trusted names in cabinetry—so you get the right look, build, and price for every project."
            items={BRAND_ITEMS}
            centered
            bgClass="bg-[#F3F4F6]"
        />
    );
}

/* ============================ Page ============================ */

export default function About() {
    return (
        <>
            <Head title="About Us | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <AboutHero />
                <main>
                    <Stats />
                    <OurStory />
                    <Values />
                    <HowWeHelp />
                    <Brands />
                </main>
                <FooterCTA bgImage="/images/kichan-imgs/cta-about.png" />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
