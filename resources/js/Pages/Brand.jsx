import { useState } from 'react';
import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import PromoCards from '@/Components/Home/PromoCards';
import Faq from '@/Components/Home/Faq';
import Icon from '@/Components/Home/Icon';

/* ============================ Brand content ============================ */
/* Single source of truth for every brand landing page, keyed by slug.    */

const QUALITY = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
);
const SHIP = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
);
const PALETTE = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
);
const SHIELD = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
);

const BRANDS = {
    fabuwood: {
        name: 'Fabuwood',
        logo: '/images/brand-img/Fabuwood Cabinets.png',
        heroBg: '/images/brands/fabuwood/fabuwood-hero-bg.png',
        aboutImage: '/images/cabinets/fabuwood/echo-timber-dove-hero.jpg',
        tagline: 'Premium framed cabinetry, exceptional value',
        intro: 'One of America’s fastest-growing cabinet brands—celebrated for all-wood construction, designer finishes, and quick nationwide shipping.',
        about: [
            'Fabuwood pairs furniture-grade craftsmanship with prices that make sense for real projects. Every cabinet is built with solid wood frames, plywood boxes, and soft-close doors and drawers as standard—no upgrades required.',
            'From the warm neutrals of the Allure line to the refined European look of Illume, there’s a Fabuwood collection for every kitchen style. And because we keep popular lines in stock, your order ships in days, not months.',
        ],
        highlights: [
            { icon: QUALITY, title: 'All-Wood Construction', body: 'Solid wood face frames and plywood boxes—built to last, not to cut corners.' },
            { icon: PALETTE, title: 'Designer Finishes', body: 'On-trend door styles and colors across Allure, Illume, and Ovela.' },
            { icon: SHIP, title: 'Quick Shipping', body: 'Best-selling lines stay in stock for fast, fully insured nationwide delivery.' },
        ],
        collections: ['Allure Galaxy', 'Allure Fusion', 'Allure Nexus', 'Allure Luna', 'Ovela Catalina', 'Illume Catalina Matte', 'Illume Catalina Texture'],
        series: [
            {
                name: 'Allure — Galaxy',
                tag: '',
                image: '/images/cabinets/fabuwood/galaxy-frost.webp',
                kitchen: '/images/kichan-imgs/shop-by-brand.png',
                body: 'High-gloss, framed doors with Blum® soft-close hardware—brilliant reflections and timeless appeal.',
                colors: ['Truffle', 'Frost', 'Pistachio Green', 'Timber', 'Cobblestone', 'Horizon', 'Linen', 'Indigo', 'Nickel', 'Dove', 'Pitch Black', 'Desert Oak'],
                swatches: [
                    { c: 'Truffle', img: '/images/cabinets/fabuwood/galaxy-truffle.png' },
                    { c: 'Frost', img: '/images/cabinets/fabuwood/galaxy-frost.webp' },
                    { c: 'Pistachio Green', img: '/images/cabinets/fabuwood/galaxy-pistachio-green.webp' },
                    { c: 'Timber', img: '/images/cabinets/fabuwood/galaxy-timber.webp' },
                    { c: 'Cobblestone', img: '/images/cabinets/fabuwood/galaxy-cobblestone.webp' },
                    { c: 'Horizon', img: '/images/cabinets/fabuwood/galaxy-horizon.webp' },
                    { c: 'Linen', img: '/images/cabinets/fabuwood/galaxy-linen.webp' },
                    { c: 'Indigo', img: '/images/cabinets/fabuwood/galaxy-indigo.webp' },
                    { c: 'Nickel', img: '/images/cabinets/fabuwood/galaxy-nickel.webp' },
                    { c: 'Dove', img: '/images/cabinets/fabuwood/galaxy-dove.webp' },
                    { c: 'Pitch Black', img: '/images/cabinets/fabuwood/galaxy-pitch-black.webp' },
                    { c: 'Desert Oak', img: '/images/cabinets/fabuwood/galaxy-desert-oak.webp' },
                ],
            },
            {
                name: 'Allure — Luna',
                tag: 'Slab · Matte',
                image: '/images/cabinets/fabuwood/luna-dove.webp',
                kitchen: '/images/kichan-imgs/kitchen-natural-oak.png',
                body: 'Minimalist design with warm sophistication. A signature Dove matte finish, soft-close Blum® hinges, and customizable slab doors turn kitchens into serene, modern sanctuaries.',
                colors: ['Truffle', 'Dove', 'Desert Oak', 'Kona', 'Timber'],
                swatches: [
                    { c: 'Truffle', img: '/images/cabinets/fabuwood/luna-truffle.png' },
                    { c: 'Dove', img: '/images/cabinets/fabuwood/luna-dove.webp' },
                    { c: 'Desert Oak', img: '/images/cabinets/fabuwood/luna-desert-oak.webp' },
                    { c: 'Kona', img: '/images/cabinets/fabuwood/luna-kona.webp' },
                    { c: 'Timber', img: '/images/cabinets/fabuwood/luna-timber.webp' },
                ],
            },
            {
                name: 'Allure — Fusion',
                tag: 'Transitional · Wide-Rail',
                image: '/images/cabinets/fabuwood/fusion-dove.webp',
                kitchen: '/images/kichan-imgs/gallery-02.png',
                body: 'Transitional design bridges classic and contemporary. Distinctive wide-rail moldings, full-overlay doors, and solid wood construction combine timeless character with modern function.',
                colors: ['Dove', 'Oyster', 'Kona', 'Stone', 'Timber'],
                swatches: [
                    { c: 'Dove', img: '/images/cabinets/fabuwood/fusion-dove.webp' },
                    { c: 'Oyster', img: '/images/cabinets/fabuwood/fusion-oyster.webp' },
                    { c: 'Kona', img: '/images/cabinets/fabuwood/fusion-kona.webp' },
                    { c: 'Stone', img: '/images/cabinets/fabuwood/fusion-stone.webp' },
                    { c: 'Timber', img: '/images/cabinets/fabuwood/fusion-timber.webp' },
                ],
            },
            {
                name: 'Allure — Nexus',
                tag: 'Slab · Full-Overlay',
                image: '/images/cabinets/fabuwood/nexus-frost.webp',
                kitchen: '/images/kichan-imgs/gallery-04.png',
                body: 'Sleek minimalism meets timeless craftsmanship. Slab doors, full-overlay construction, and refined matte finishes create a sophisticated, modern aesthetic.',
                colors: ['Frost'],
                swatches: [
                    { c: 'Frost', img: '/images/cabinets/fabuwood/nexus-frost.webp' },
                ],
            },
            {
                name: 'Echo',
                tag: 'Shaker · 22 Finishes',
                image: '/images/cabinets/fabuwood/echo-timber-dove-hero.jpg',
                kitchen: '/images/kichan-imgs/gallery-06.png',
                body: 'Timeless shaker styling meets modern versatility — from warm Timber and Mocha stains to bold Cabernet Red and Sage Green. All-wood construction with premium Blum soft-close hardware.',
                colors: ['Dove', 'Mocha', 'Timber'],
            },
            {
                name: 'Luxe',
                tag: 'Flat-Panel · 22 Finishes',
                image: '/images/cabinets/fabuwood/luxe-canyon-oak-kitchen.jpg',
                kitchen: '/images/kichan-imgs/gallery-08.png',
                body: 'Contemporary flat-panel doors with a smooth wood-veneer finish deliver a seamless, ultra-modern look with no ornamentation. All-wood construction with premium Blum soft-close hardware.',
                colors: ['Frost', 'Desert Oak', 'Canyon Oak'],
            },
            {
                name: 'Illume — Catalina Gloss',
                tag: 'Slab · High-Gloss',
                image: '/images/cabinets/fabuwood/catalina-bianco.jpg',
                kitchen: '/images/kichan-imgs/gallery-10.png',
                body: 'Luminous high-gloss slab doors define the Catalina Gloss collection. Premium BLUM soft-close technology and reinforced metal drawer systems bring contemporary elegance with professional-grade function.',
                colors: ['Bianco Gloss', 'Grigio Gloss'],
            },
            {
                name: 'Illume — Catalina Matt & Texture',
                tag: 'Slab · Matte & Textured',
                image: '/images/cabinets/fabuwood/catalina-matt-natural-elm.png',
                kitchen: '/images/kichan-imgs/gallery-12.png',
                body: 'Minimalist slab doors meet premium BLUM hardware. Matte and textured finishes combine with commercial-grade durability for effortlessly elegant kitchens built to last.',
                colors: ['Natural Elm', 'Ferrara Oak', 'Light Artwood', 'Clubhouse Oak', 'Hickory Rock', 'Bianco Matte', 'Carbone Matte', 'Como Ash'],
            },
            {
                name: 'Ovela — Catalina',
                tag: 'European · 15 Finishes',
                image: '/images/cabinets/fabuwood/ovela-catalina-bianco-gloss.jpg',
                kitchen: '/images/kichan-imgs/shop-by-color.png',
                body: 'Fabuwood’s all-new Ovela series brings fifteen European-inspired Catalina slab finishes — luminous gloss, refined mattes, and natural wood textures from Ferrara Oak to Hickory Rock — all with premium BLUM soft-close hardware.',
                colors: ['Bianco', 'Grigio', 'Ferrara Oak', 'Hickory Rock'],
            },
        ],
        comparison: {
            rows: [
                { label: 'Design Philosophy', allure: 'Modern American Design', illume: 'European Sophistication' },
                { label: 'Door Styles', allure: 'Framed, Slab, Recessed Panel', illume: 'Slab only' },
                { label: 'Best For', allure: 'Modern, minimalist & transitional kitchens', illume: 'European-style, luxury designs' },
                { label: 'Collections', allure: '4 — Galaxy, Luna, Fusion, Nexus', illume: '2 — Catalina Gloss, Catalina Matt' },
                { label: 'Price Range', allure: 'Mid to premium', illume: 'Premium' },
            ],
        },
        ordering: [
            { title: 'Send Your Layout', body: 'Share your kitchen measurements, photos, or floor plan. Our team reviews every detail to ensure an accurate design tailored to your space.' },
            { title: 'Get Your Quote (24 hrs)', body: 'Receive a detailed 3D design and transparent pricing breakdown within 24 hours — no hidden fees, no obligations.' },
            { title: 'Approve & Order', body: 'Review your design, request unlimited revisions, and place your order once you’re completely satisfied with every detail.' },
            { title: 'Nationwide Shipping', body: 'Your cabinets are carefully packaged and shipped directly to your door anywhere in the continental United States.' },
            { title: 'Install with Support', body: 'Our team is available throughout installation to answer questions, troubleshoot issues, and ensure a flawless result.' },
        ],
        faqs: [
            { q: 'What’s the difference between Fabuwood Allure, Echo, and Illume?', a: 'Allure features modern American styles (Galaxy, Luna, Fusion, Nexus). Echo offers versatile shaker styling across multiple finish tiers. Illume provides European-inspired designs with the Catalina collections. All feature all-wood construction and BLUM hardware.' },
            { q: 'Are Fabuwood cabinets real wood?', a: 'Yes. All Fabuwood cabinets feature solid wood face frames and all-wood construction. The boxes are made from premium plywood, and door fronts use solid wood or wood veneer over solid wood cores.' },
            { q: 'What warranty does Fabuwood offer?', a: 'A limited lifetime warranty on cabinet boxes, plus a 5-year warranty on finishes, hinges, and drawer slides for residential installations. Commercial installations carry different terms.' },
            { q: 'How long does Fabuwood cabinet delivery take?', a: 'Standard delivery typically takes 2–4 weeks from order confirmation, depending on your location and the specific collection ordered.' },
            { q: 'Can I order Fabuwood cabinet samples?', a: 'Yes. Door samples are available for all collections, so you can see the actual finish, color, and construction quality before ordering.' },
        ],
    },
    jk: {
        name: 'J&K Cabinetry',
        logo: '/images/brand-img/jk-logo.png',
        heroBg: '/images/kichan-imgs/gallery-02.png',
        tagline: 'All-wood cabinetry with timeless door styles',
        intro: 'Solid wood doors, dovetail drawers, and a wide range of classic-to-transitional styles—dependable cabinetry trusted on countless kitchens.',
        about: [
            'J&K Cabinetry is built around all-wood construction: solid wood doors and frames, dovetailed drawer boxes, and soft-close hardware. The result is cabinetry that feels substantial and holds up to everyday use.',
            'With an extensive catalog of door styles and finishes—from raised-panel traditional to clean shaker—J&K makes it easy to match almost any design vision at a price that works.',
        ],
        highlights: [
            { icon: QUALITY, title: 'Solid Wood Doors', body: 'Real wood doors and frames for a substantial, premium feel.' },
            { icon: SHIELD, title: 'Dovetail Drawers', body: 'Dovetailed solid-wood drawer boxes with soft-close glides.' },
            { icon: PALETTE, title: 'Wide Style Range', body: 'Traditional, transitional, and shaker styles in many finishes.' },
        ],
        collections: ['Contemporary', 'Transitional', 'Traditional'],
    },
    modernform: {
        name: 'Modernform',
        logo: '/images/brand-img/modernform-logo.png',
        heroBg: '/images/kichan-imgs/gallery-04.png',
        tagline: 'Sleek frameless European-style cabinets',
        intro: 'Frameless full-access construction with flat-panel doors and matte finishes—clean, contemporary, and engineered for maximum storage.',
        about: [
            'Modernform brings European frameless design to your kitchen: no center stiles, full-overlay doors, and edge-to-edge access to every inch of storage.',
            'Slab and flat-panel doors in matte, high-gloss, and natural wood textures deliver a minimalist look that feels custom—without the custom lead time.',
        ],
        highlights: [
            { icon: SHIELD, title: 'Frameless Full-Access', body: 'No face frame means wider openings and more usable space.' },
            { icon: PALETTE, title: 'Modern Finishes', body: 'Matte, high-gloss, and textured woodgrain slab doors.' },
            { icon: QUALITY, title: 'Soft-Close Standard', body: 'Concealed European hinges and soft-close glides throughout.' },
        ],
        collections: ['Shaker', 'Slim Shaker', 'European'],
    },
    diamond: {
        name: 'Diamond',
        logo: '/images/brand-img/diamond-logo.jpg',
        heroBg: '/images/kichan-imgs/gallery-06.png',
        tagline: 'Semi-custom cabinetry built to fit your life',
        intro: 'Semi-custom sizing, smart organization, and furniture-grade finishes backed by a limited lifetime warranty.',
        about: [
            'Diamond cabinets are semi-custom, which means you can tailor sizes, depths, and modifications to fit your space exactly—no awkward fillers or wasted corners.',
            'Inside, thoughtful organization options keep everything in its place, while durable finishes and a limited lifetime warranty give you long-term peace of mind.',
        ],
        highlights: [
            { icon: SHIELD, title: 'Custom Sizing', body: 'Adjust dimensions and modifications to fit your room precisely.' },
            { icon: QUALITY, title: 'Furniture-Grade Finish', body: 'Multi-step finishing for a smooth, durable, lasting surface.' },
            { icon: PALETTE, title: 'Smart Organization', body: 'Roll-outs, dividers, and storage solutions tailored to you.' },
        ],
        collections: ['Vibe Series', 'Distinction Series', 'Edge Series'],
    },
    decora: {
        name: 'Decora',
        logo: '/images/brand-img/decora-cabinet.jpg',
        heroBg: '/images/kichan-imgs/gallery-08.png',
        tagline: 'Designer-inspired semi-custom cabinetry',
        intro: 'On-trend finishes, premium hardware, and personalized organization for kitchens that feel designed, not assembled.',
        about: [
            'Decora is for the design-forward homeowner. Its curated palette of finishes and door styles is built to follow the trends that matter—warm woods, soft neutrals, and statement colors.',
            'Premium soft-close hardware and a deep menu of interior organization options round out a brand that punches well above its price point.',
        ],
        highlights: [
            { icon: PALETTE, title: 'On-Trend Finishes', body: 'A curated palette of designer colors and door styles.' },
            { icon: QUALITY, title: 'Premium Hardware', body: 'Soft-close doors and drawers with a refined, quiet action.' },
            { icon: SHIELD, title: 'Custom Organization', body: 'Personalize the interior to match how you actually cook.' },
        ],
        collections: ['Decora Modern', 'Decora Traditional'],
    },
    mantra: {
        name: 'Mantra',
        logo: '/images/brand-img/mantra-logo.png',
        heroBg: '/images/kichan-imgs/gallery-10.png',
        tagline: 'Frameless, full-access cabinets that ship fast',
        intro: 'Full-access frameless design with soft-close everything and quick assembly—modern cabinetry without the wait.',
        about: [
            'Mantra is frameless cabinetry done right: full-access interiors, full-overlay doors, and a clean modern look that works in kitchens, baths, and beyond.',
            'Engineered for fast, tool-friendly assembly and kept in stock for quick shipping, Mantra is a favorite for projects that need to move.',
        ],
        highlights: [
            { icon: SHIELD, title: 'Full-Access Frameless', body: 'Edge-to-edge storage with no center stile in the way.' },
            { icon: QUALITY, title: 'Soft-Close Everywhere', body: 'Soft-close doors and dovetail drawers come standard.' },
            { icon: SHIP, title: 'Fast Assembly & Ship', body: 'In-stock lines assemble quickly and ship out fast.' },
        ],
        collections: ['Spectra', 'Classic', 'Omni'],
    },
    tribeca: {
        name: 'Tribeca',
        logo: '/images/brand-img/tribeca-logo.png',
        heroBg: '/images/kichan-imgs/gallery-12.png',
        tagline: 'Modern cabinetry with clean, urban styling',
        intro: 'Contemporary door styles, durable finishes, and great value—an easy way to bring a fresh, modern look home.',
        about: [
            'Tribeca delivers an of-the-moment aesthetic—clean lines, flat panels, and modern neutrals—at a price that keeps your project on budget.',
            'Durable finishes and soft-close hardware make it as practical as it is good-looking, whether you’re outfitting a full kitchen or a rental refresh.',
        ],
        highlights: [
            { icon: PALETTE, title: 'Contemporary Styles', body: 'Flat-panel and shaker doors in modern, on-trend tones.' },
            { icon: QUALITY, title: 'Durable Finishes', body: 'Tough, easy-to-clean surfaces built for daily life.' },
            { icon: SHIP, title: 'Great Value', body: 'Modern looks at a price that works for any project.' },
        ],
        collections: ['Hudson', 'Soho', 'Southampton'],
    },
    kcd: {
        name: 'KCD',
        logo: '/images/brand-img/kcd-logo.svg',
        heroBg: '/images/kichan-imgs/shop-by-brand.png',
        tagline: 'Quality RTA cabinets at wholesale value',
        intro: 'Ready-to-assemble cabinetry with all-wood boxes and budget-friendly pricing—quality you can build yourself.',
        about: [
            'KCD specializes in ready-to-assemble (RTA) cabinets that ship flat to keep costs down and arrive damage-free. Assembly is straightforward with cam-lock and dowel construction.',
            'All-wood boxes, solid wood doors, and soft-close hardware mean you don’t sacrifice quality for the savings.',
        ],
        highlights: [
            { icon: SHIP, title: 'Ready-to-Assemble', body: 'Ships flat to lower cost and prevent shipping damage.' },
            { icon: QUALITY, title: 'All-Wood Boxes', body: 'Plywood construction with solid wood doors and frames.' },
            { icon: PALETTE, title: 'Budget-Friendly', body: 'Wholesale pricing that keeps your remodel affordable.' },
        ],
        collections: ['Premier Series', 'Builder Series'],
    },
    uscd: {
        name: 'US Cabinet Depot',
        logo: '/images/brand-img/uscd-logo.jpg',
        heroBg: '/images/kichan-imgs/shop-by-color.png',
        tagline: 'Dependable cabinetry with a wide selection',
        intro: 'All-plywood options, a broad range of styles and colors, and honest value pricing across every collection.',
        about: [
            'US Cabinet Depot offers one of the widest selections in the business—dozens of door styles and finishes spanning traditional, transitional, and modern looks.',
            'With all-plywood construction available and soft-close hardware throughout, USCD is a reliable choice for builders and homeowners who want options without overpaying.',
        ],
        highlights: [
            { icon: QUALITY, title: 'All-Plywood Options', body: 'Sturdy plywood box construction available across lines.' },
            { icon: PALETTE, title: 'Many Styles & Colors', body: 'A deep catalog to match nearly any design direction.' },
            { icon: SHIP, title: 'Value Pricing', body: 'Honest pricing that works for builders and homeowners alike.' },
        ],
        collections: ['Shaker', 'Oxford', 'Haven', 'Edgeline', 'Casselberry', 'Palermo', 'Torino'],
    },
};

/* ============================ Helpers ============================ */

// Normalize a series name so the page's "Allure — Galaxy" matches the gallery's
// folder-derived "Allure Galaxy" coming from the backend scan.
const normKey = (str) => str.replace(/[^a-z0-9]/gi, '').toLowerCase();

// Short label for the circular series nav — drop the line prefix when present.
const seriesLabel = (name) => name.replace(/^.*?—\s*/, '').trim() || name;

// Per-line page metadata (hero background, heading label, intro). Drop the hero
// images into these paths — the page picks them up automatically.
const FABUWOOD_LINES = {
    allure: {
        label: 'Allure',
        bg: '/images/brands/fabuwood/fabuwood-hero-bg.png',
        blurb: 'Modern American design — framed, slab & shaker doors with all-wood construction and BLUM® soft-close hardware.',
    },
    illume: {
        label: 'Illume',
        bg: '/images/brands/fabuwood/illume-hero-bg.png',
        blurb: 'European-inspired Catalina slab finishes in luminous gloss, refined matte, and natural wood texture.',
    },
    ovela: {
        label: 'Ovela',
        bg: '/images/brands/fabuwood/ovela-hero-bg.png',
        blurb: 'Fifteen Catalina slab finishes — from gloss to wood textures — all with premium BLUM® soft-close hardware.',
    },
};

/* ============================ Sections ============================ */

function Hero({ brand, line }) {
    const meta = line ? FABUWOOD_LINES[line] : null;
    const bg = meta ? meta.bg : (brand.heroBg || '/images/kichan-imgs/hero-about.png');
    return (
        <section className="relative min-h-[46vh] flex flex-col overflow-hidden pt-20" aria-label={`${brand.name} hero`}>
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" aria-hidden="true" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 pt-10 lg:pt-12 pb-10 lg:pb-14">
                    <div className="max-w-2xl">
                        <h1 className="mt-4 font-sans font-normal text-white text-[44px] leading-[48px] md:text-[56px] md:leading-[56px]">
                            {meta ? `${brand.name} ${meta.label}` : brand.name}
                        </h1>
                        <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                            {meta ? meta.blurb : brand.intro}
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="/design-service" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20 whitespace-nowrap">
                                <Icon className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </Icon>
                                Get Free 3D Design
                            </a>
                            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm whitespace-nowrap">
                                Request a Quote
                                <Icon className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </Icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function Overview({ brand }) {
    const isPhoto = Boolean(brand.aboutImage);
    return (
        <section className="bg-white py-16 lg:py-24" aria-label={`${brand.name} overview`}>
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {isPhoto ? (
                    <div className="order-1 overflow-hidden rounded-2xl border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.08)]">
                        <img
                            src={brand.aboutImage}
                            alt={`${brand.name} kitchen cabinets`}
                            loading="lazy"
                            className="w-full h-full aspect-[4/3] object-cover"
                        />
                    </div>
                ) : (
                    <div className="order-1 flex items-center justify-center rounded-2xl bg-[#F3F4F6] border border-[#374151]/10 p-10 lg:p-14 shadow-[0_10px_30px_rgba(55,65,81,0.06)]">
                        <img
                            src={brand.logo}
                            alt={`${brand.name} logo`}
                            loading="lazy"
                            className="max-h-28 lg:max-h-36 w-auto object-contain"
                        />
                    </div>
                )}

                <div className="order-2">
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        {brand.tagline}
                    </h2>
                    {brand.about.map((p, i) => (
                        <p key={i} className="mt-4 text-[#374151]/70 text-base leading-relaxed">
                            {p}
                        </p>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Highlights({ brand }) {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label={`Why ${brand.name}`}>
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight">
                        Built to impress, priced to make sense
                    </h2>
                </div>

                <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {brand.highlights.map((h) => (
                        <div key={h.title} className="rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]">
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                                <Icon className="w-7 h-7">{h.icon}</Icon>
                            </span>
                            <h3 className="mt-5 font-display text-xl font-bold text-[#374151] tracking-tight">{h.title}</h3>
                            <p className="mt-2 text-[#374151]/70 text-[15px] leading-relaxed">{h.body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Collections({ brand }) {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label={`${brand.name} collections`}>
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight">
                        Explore {brand.name} lines &amp; finishes
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base leading-relaxed">
                        Browse the most popular collections below, or request a free design and we’ll help you pick the perfect style and finish.
                    </p>
                </div>

                <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {brand.collections.map((c) => (
                        <div key={c} className="group flex items-center justify-between gap-3 rounded-xl bg-[#F3F4F6] border border-[#374151]/10 px-5 py-4 transition-colors hover:border-amber-400 hover:bg-amber-50">
                            <span className="font-semibold text-[#374151]">{c}</span>
                            <Icon className="w-5 h-5 text-[#374151]/30 group-hover:text-amber-500 transition-colors">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </Icon>
                        </div>
                    ))}
                </div>

                <p className="mt-10 text-center text-[#374151]/60 text-sm">
                    Want pricing on {brand.name}? <a href="/contact" className="text-amber-600 font-semibold hover:underline">Contact our team</a> or <a href="/design-service" className="text-amber-600 font-semibold hover:underline">start a free 3D design</a>.
                </p>
            </div>
        </section>
    );
}

// Reusable series card — image left, content right (same pattern for every series).
function SeriesCard({ brand, series: s, galleryImages, reverse = false }) {
    const title = `${brand.name} ${s.name.replace(/\s*—\s*/, ' ')} Cabinets`;
    const img = s.kitchen || s.image;
    const lineLabel = s.name.split('—').pop().trim();
    return (
        <article id={`series-${normKey(s.name)}`} className="scroll-mt-28 grid lg:grid-cols-5 gap-2 lg:gap-3 items-start">
            {/* Image */}
            <div className={`lg:col-span-2 ${reverse ? 'lg:order-2' : ''}`}>
                <img src={img} alt={title} loading="lazy" className="w-full aspect-square object-cover rounded-2xl" />
            </div>

            {/* Content */}
            <div className={`lg:col-span-3 ${reverse ? 'lg:order-1' : ''}`}>
                <h3 className="font-display text-2xl lg:text-3xl font-bold text-[#374151] tracking-tight">{title}</h3>
                <p className="mt-3 text-[#374151]/70 text-[15px] leading-relaxed line-clamp-1">{s.body}</p>

                {s.swatches ? (
                    <div className="mt-6 grid grid-cols-6 gap-3">
                        {s.swatches.slice(0, 10).map((sw) => (
                            <div key={sw.c} className="group relative text-left transition-transform duration-300 hover:z-10 hover:scale-110">
                                <div className="overflow-hidden">
                                    <img src={sw.img} alt={`${lineLabel} ${sw.c}`} loading="lazy" className="block w-full h-48 object-contain object-left" />
                                </div>
                                <span className="mt-1 block truncate text-[11px] leading-tight text-[#374151]/70 transition-colors group-hover:text-amber-600">{`${lineLabel} ${sw.c}`}</span>
                            </div>
                        ))}
                    </div>
                ) : galleryImages && galleryImages.length ? (
                    <div className="mt-6 grid grid-cols-6 gap-3">
                        {galleryImages.slice(0, 10).map((src, i) => (
                            <div key={src} className="group relative transition-transform duration-300 hover:z-10 hover:scale-110">
                                <div className="overflow-hidden">
                                    <img src={src} alt={`${lineLabel} finish ${i + 1}`} loading="lazy" className="block w-full h-48 object-contain object-left" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="mt-6 flex flex-wrap gap-1.5">
                        {s.colors.map((c) => (
                            <span key={c} className="rounded-full bg-[#F3F4F6] border border-[#374151]/10 px-2.5 py-1 text-[11px] font-medium text-[#374151]/75">
                                {c}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </article>
    );
}

// Series lines used by the selector below (Allure, Illume, Ovela).
const SERIES_LINES = [
    { key: 'Allure', blurb: 'Framed, slab & shaker doors — modern American design.' },
    { key: 'Illume', blurb: 'European-inspired slab finishes in gloss, matte & texture.' },
    { key: 'Ovela', blurb: 'Fifteen Catalina slab finishes with premium BLUM hardware.' },
];

function SeriesExplorer({ brand, galleryByKey, line }) {
    const lines = SERIES_LINES.map((d) => {
        const members = brand.series.filter((s) => s.name.startsWith(d.key));
        const first = members[0];
        if (!first) return null;
        return { key: d.key, blurb: d.blurb, image: first.kitchen || first.image, members };
    }).filter(Boolean);

    const initial = (line && lines.find((l) => l.key.toLowerCase() === line)) || lines[0];
    const [active, setActive] = useState(initial ? initial.key : null);
    if (!lines.length) return null;
    const current = lines.find((l) => l.key === active) || lines[0];

    return (
        <section className="bg-white pt-8 lg:pt-10 pb-10 lg:pb-14" aria-label="Shop by series">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                {/* Temporarily hidden: heading + line selector
                <div className="text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight">
                        Explore every {brand.name} collection
                    </h2>
                    <p className="mt-3 text-[#374151]/70 text-base leading-relaxed max-w-2xl mx-auto">
                        Pick a line to explore its finishes — from framed Allure classics to Illume and Ovela's European-inspired slabs.
                    </p>

                    <div className="mt-8 flex flex-wrap items-start justify-center gap-x-2 gap-y-5">
                        {lines.map((l) => {
                            const isActive = l.key === current.key;
                            return (
                                <button
                                    key={l.key}
                                    type="button"
                                    onClick={() => setActive(l.key)}
                                    aria-pressed={isActive}
                                    className="group flex flex-col items-center gap-3 text-center w-[160px]"
                                >
                                    <div className={`w-[140px] h-[140px] rounded-full bg-white p-2 flex items-center justify-center transition-all ${isActive ? 'border-2 border-amber-400 ring-4 ring-amber-400/20 -translate-y-0.5' : 'border border-[#374151]/20 shadow-[0_10px_24px_rgba(55,65,81,0.12)] group-hover:-translate-y-0.5 group-hover:border-amber-400'}`}>
                                        <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-black/5">
                                            <img src={l.image} alt={`${brand.name} ${l.key}`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
                                        </div>
                                    </div>
                                    <span className={`text-base font-medium leading-tight ${isActive ? 'text-amber-600' : 'text-[#374151]'}`}>{l.key}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
                */}

                {/* Series — a specific line when set in the URL, otherwise all lines mixed */}
                <div className="mt-6 lg:mt-8 space-y-6 lg:space-y-8">
                    {(line ? current.members : lines.flatMap((l) => l.members)).map((s, idx) => (
                        <SeriesCard key={s.name} brand={brand} series={s} galleryImages={galleryByKey && galleryByKey[normKey(s.name)]} reverse={idx % 2 === 1} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// Per-series photo galleries, grouped under each series heading.
function CollectionGalleries({ brandName, items }) {
    if (!items.length) return null;
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label={`${brandName} collections`}>
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight">
                        {brandName} collections in detail
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base leading-relaxed">
                        Real project photography for each {brandName} series. Love a look? Start a free 3D design and we’ll build it around your space.
                    </p>
                </div>

                <div className="mt-12 space-y-16">
                    {items.map((s) => (
                        <div key={s.id} id={`series-${s.id}`} className="scroll-mt-28">
                            <div className="flex items-end justify-between gap-4 flex-wrap">
                                <div>
                                    <span className="text-amber-600 text-[11px] font-bold uppercase tracking-[0.18em]">{s.line}</span>
                                    <h3 className="mt-1 font-display text-2xl font-bold text-[#374151] tracking-tight">{s.name}</h3>
                                </div>
                                <a href="/design-service" className="inline-flex items-center gap-1.5 text-amber-600 text-sm font-semibold hover:underline">
                                    Design with {s.name}
                                    <Icon className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></Icon>
                                </a>
                            </div>

                            <div className="mt-5 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 -mx-6 px-6 lg:mx-0 lg:px-0 [scrollbar-width:thin]">
                                {s.images.map((src, i) => (
                                    <div key={src} className="snap-start shrink-0 w-[280px] sm:w-[340px] overflow-hidden rounded-2xl bg-white ring-1 ring-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)]">
                                        <img src={src} alt={`${s.name} kitchen ${i + 1}`} loading="lazy" className="w-full aspect-[4/3] object-cover transition-transform duration-500 hover:scale-105" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Comparison({ brand }) {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Allure vs Illume comparison">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight">
                        Which {brand.name} line is right for you?
                    </h2>
                </div>

                <div className="mt-12 overflow-hidden rounded-2xl border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)]">
                    <table className="w-full border-collapse text-left">
                        <thead>
                            <tr className="bg-[#374151] text-white">
                                <th className="px-5 py-4 text-sm font-semibold">Feature</th>
                                <th className="px-5 py-4 text-sm font-semibold">Allure</th>
                                <th className="px-5 py-4 text-sm font-semibold">Illume</th>
                            </tr>
                        </thead>
                        <tbody>
                            {brand.comparison.rows.map((row, i) => (
                                <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-[#F3F4F6]'}>
                                    <th scope="row" className="px-5 py-4 text-sm font-bold text-[#374151] align-top">{row.label}</th>
                                    <td className="px-5 py-4 text-sm text-[#374151]/75 align-top">{row.allure}</td>
                                    <td className="px-5 py-4 text-sm text-[#374151]/75 align-top">{row.illume}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}

function Ordering({ brand }) {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="How ordering works">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight">
                        From layout to install in five simple steps
                    </h2>
                </div>

                <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {brand.ordering.map((step, i) => (
                        <li key={step.title} className="relative rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-6">
                            <span className="flex items-center justify-center w-11 h-11 rounded-full bg-amber-400 text-gray-900 font-display font-bold text-lg">
                                {i + 1}
                            </span>
                            <h3 className="mt-4 font-display text-base font-bold text-[#374151] tracking-tight">{step.title}</h3>
                            <p className="mt-2 text-[#374151]/70 text-sm leading-relaxed">{step.body}</p>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}

function Faqs({ brand }) {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label={`${brand.name} FAQs`}>
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight">
                        {brand.name} questions, answered
                    </h2>
                </div>

                <div className="mt-10 divide-y divide-[#374151]/10 rounded-2xl border border-[#374151]/10 bg-white shadow-[0_10px_30px_rgba(55,65,81,0.06)]">
                    {brand.faqs.map((faq) => (
                        <details key={faq.q} className="group p-6 [&_summary]:list-none">
                            <summary className="flex cursor-pointer items-center justify-between gap-4 font-display text-lg font-semibold text-[#374151]">
                                {faq.q}
                                <Icon className="w-5 h-5 shrink-0 text-amber-500 transition-transform duration-300 group-open:rotate-180">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </Icon>
                            </summary>
                            <p className="mt-3 text-[#374151]/70 text-[15px] leading-relaxed">{faq.a}</p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function Brand({ slug, line = null, gallery = [] }) {
    const brand = BRANDS[slug];
    const lineLabel = line && FABUWOOD_LINES[line] ? FABUWOOD_LINES[line].label : '';

    // Map normalized series name -> image urls, and the ordered list of series
    // that actually have photos (used by the circular nav + galleries).
    const galleryByKey = Object.fromEntries(gallery.map((s) => [normKey(s.name), s.images]));
    const withImages = gallery
        .filter((s) => s.images && s.images.length)
        .map((s, i) => ({ ...s, id: i, image: s.images[0] }));

    // Route constraint should prevent this, but guard just in case.
    if (!brand) {
        return (
            <>
                <Head title="Brand not found | Captivating Cabinets" />
                <div className="bg-white min-h-screen">
                    <TopContactBar />
                    <Navbar />
                    <main className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 py-32 text-center">
                        <h1 className="font-display text-3xl font-bold text-[#374151]">Brand not found</h1>
                        <p className="mt-3 text-[#374151]/70">
                            We couldn’t find that brand. <a href="/" className="text-amber-600 font-semibold hover:underline">Back to home</a>.
                        </p>
                    </main>
                    <Footer />
                </div>
            </>
        );
    }

    return (
        <>
            <Head title={`${brand.name}${lineLabel ? ` ${lineLabel}` : ''} Cabinets | Captivating Cabinets`} />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <Hero brand={brand} line={line} />
                    <PromoCards />
                    {brand.series ? (
                        <SeriesExplorer brand={brand} galleryByKey={galleryByKey} line={line} />
                    ) : (
                        <>
                            {brand.about && <Overview brand={brand} />}
                            {brand.highlights && <Highlights brand={brand} />}
                            {withImages.length ? (
                                <CollectionGalleries brandName={brand.name} items={withImages} />
                            ) : (
                                <Collections brand={brand} />
                            )}
                        </>
                    )}
                    {brand.faqs && (
                        <Faq
                            faqs={brand.faqs}
                            title={`${brand.name} questions, answered`}
                            description={`Common questions about ${brand.name} cabinets, finishes, and ordering.`}
                            bgClass="bg-[#F3F4F6]"
                        />
                    )}
                </main>
                <FooterCTA />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
