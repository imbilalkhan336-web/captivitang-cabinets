import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Icon from '@/Components/Home/Icon';

/* ============================ Data ============================ */
/* Brand summaries — copy mirrors captivatingcabinets.com/cabinet-brands. */

const BRAND_CARDS = [
    {
        slug: 'fabuwood',
        name: 'Fabuwood Cabinets',
        logo: '/images/brand-img/Fabuwood Cabinets.png',
        description: 'Premium cabinetry with modern designs and superior craftsmanship. Fabuwood combines innovative design with exceptional craftsmanship to deliver high-quality kitchen and bathroom cabinets.',
        tags: ['Allure Galaxy', 'Allure Fusion', 'Allure Nexus', 'Allure Luna', 'Ovela Catalina', 'Illume Catalina'],
    },
    {
        slug: 'jk',
        name: 'J&K Cabinets',
        logo: '/images/brand-img/jk-logo.png',
        description: 'Quality kitchen cabinets with timeless style and durability. J&K offers distinctive, stylish kitchen and bath cabinetry with exceptional craftsmanship and environmentally friendly practices.',
        tags: ['Contemporary', 'Transitional', 'Traditional'],
    },
    {
        slug: 'modernform',
        name: 'Modernform Cabinets',
        logo: '/images/brand-img/modernform-logo.png',
        description: 'Contemporary cabinet solutions for modern living spaces. Modernform delivers high-quality, affordable, all-wood cabinets with over 10,000 kitchens produced monthly.',
        tags: ['Shaker', 'Slim Shaker', 'European'],
    },
    {
        slug: 'diamond',
        name: 'Diamond Cabinets',
        logo: '/images/brand-img/diamond-logo.jpg',
        description: 'Trusted brand delivering exceptional quality and value. A MasterBrand company combining trusted craftsmanship with innovative design.',
        tags: ['Vibe Series', 'Distinction Series', 'Edge Series'],
    },
    {
        slug: 'decora',
        name: 'Decorá Cabinets',
        logo: '/images/brand-img/decora-cabinet.jpg',
        description: 'Classic designs with attention to detail and quality. Premium cabinetry with maximum design flexibility and nearly 200 embellishment options.',
        tags: ['Decora Modern', 'Decora Traditional'],
    },
    {
        slug: 'mantra',
        name: 'Mantra Cabinets',
        logo: '/images/brand-img/mantra-logo.png',
        description: 'Modern luxury cabinetry for sophisticated spaces. Quality products with all the upgrades built-in, backed by MasterBrand Cabinets.',
        tags: ['Spectra', 'Classic', 'Omni'],
    },
    {
        slug: 'tribeca',
        name: 'Tribeca Cabinetry',
        logo: '/images/brand-img/tribeca-logo.png',
        description: 'Fashion-forward contemporary cabinetry re-imagined. Superior framed construction with full-overlay design, furniture-grade finishes, and quick lead times.',
        tags: ['Hudson', 'Soho', 'Southampton'],
    },
    {
        slug: 'kcd',
        name: 'Kitchen Cabinet Distributors',
        logo: '/images/brand-img/kcd-logo.svg',
        description: 'Quality cabinetry with Premier and Builder series options. KCD offers versatile collections for both premium projects and budget-conscious builds without compromising on quality.',
        tags: ['Premier Series', 'Builder Series'],
    },
    {
        slug: 'uscd',
        name: 'US Cabinet Depot',
        logo: '/images/brand-img/uscd-logo.jpg',
        description: 'Framed and frameless kitchen cabinets from Marietta, Georgia. USCD serves over 5,000 dealers nationwide with plywood construction, dovetail drawers, and soft-close hardware.',
        tags: ['Shaker', 'Oxford', 'Haven', 'Edgeline', 'Casselberry', 'Palermo', 'Torino'],
    },
];

/* ============================ Hero ============================ */

function Hero() {
    return (
        <section className="relative min-h-[44vh] flex flex-col overflow-hidden pt-20" aria-label="Cabinet brands hero">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/images/kichan-imgs/hero-img2.png)' }} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" aria-hidden="true" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 pt-10 lg:pt-12 pb-10 lg:pb-14">
                    <div className="max-w-2xl">
                        <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                            Nationwide Distributor · 9 Premium Brands
                        </span>
                        <h1 className="mt-4 font-sans font-normal text-white text-[44px] leading-[48px] md:text-[56px] md:leading-[56px]">
                            Our Premium <span className="text-amber-400">Cabinet Brands</span>
                        </h1>
                        <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                            Captivating Cabinets proudly partners with the industry’s top names, including Fabuwood, J&amp;K, Diamond, Decora, Mantra, Modernform, Tribeca, KCD, and US Cabinet Depot. Each brand offers unique styles, finishes, and price points—so you’ll find the perfect fit for any kitchen or bath project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ Brand card ============================ */

function BrandCard({ slug, name, logo, description, tags }) {
    return (
        <div className="flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]">
            {/* Logo panel */}
            <div className="flex items-center justify-center bg-[#F3F4F6] border-b border-[#374151]/10 h-36 px-8">
                <img src={logo} alt={`${name} logo`} loading="lazy" className="max-h-20 w-auto object-contain" />
            </div>

            <div className="flex flex-col flex-1 p-7">
                <h3 className="font-display text-xl font-bold text-[#374151] tracking-tight">{name}</h3>
                <p className="mt-2 text-[#374151]/70 text-[15px] leading-relaxed flex-1">{description}</p>

                {/* Collection chips */}
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((t) => (
                        <span key={t} className="inline-block rounded-full bg-amber-50 text-amber-700 ring-1 ring-amber-100 px-3 py-1 text-xs font-semibold">
                            {t}
                        </span>
                    ))}
                </div>

                {/* CTAs */}
                <div className="mt-6 flex flex-wrap gap-3">
                    <a
                        href={`/brands/${slug}`}
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors"
                    >
                        View Details
                        <Icon className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></Icon>
                    </a>
                    <a
                        href="/design-service"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#374151]/[0.04] hover:bg-[#374151]/[0.08] text-[#374151] text-sm font-semibold rounded-full border border-[#374151]/10 transition-colors"
                    >
                        Get Free Design
                    </a>
                </div>
            </div>
        </div>
    );
}

function BrandsGrid() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Cabinet brands">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {BRAND_CARDS.map((b) => (
                        <BrandCard key={b.slug} {...b} />
                    ))}
                </div>

                <p className="mt-10 text-center text-[#374151]/60 text-sm">
                    Not sure which brand fits your project? <a href="/design-service" className="text-amber-600 font-semibold hover:underline">Start a free 3D design</a> and our team will recommend the perfect match.
                </p>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function Brands() {
    return (
        <>
            <Head title="Cabinet Brands | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <Hero />
                    <BrandsGrid />
                </main>
                <FooterCTA />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
