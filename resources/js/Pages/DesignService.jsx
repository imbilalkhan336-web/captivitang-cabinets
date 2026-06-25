import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Faq from '@/Components/Home/Faq';
import Icon from '@/Components/Home/Icon';

/* ============================ Hero ============================ */

function Hero({ bgImage = '/images/kichan-imgs/hero-design.png' }) {
    return (
        <section className="relative min-h-[48vh] flex flex-col overflow-hidden pt-20" aria-label="3D design hero">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/30 to-black/10" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" aria-hidden="true" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 pt-10 lg:pt-12 pb-10 lg:pb-14">
                    <div className="max-w-2xl">
                        <span className="inline-flex items-center gap-2 rounded-full bg-amber-400/15 ring-1 ring-amber-400/30 px-3 py-1 text-amber-300 text-xs font-bold uppercase tracking-[0.18em]">
                            Free · Ready in 1 business day
                        </span>
                        <h1 className="mt-4 font-sans font-normal text-white text-[40px] leading-[44px] md:text-[54px] md:leading-[56px]">
                            Free <span className="text-amber-400">3D Kitchen Design</span> Service
                        </h1>
                        <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                            See your dream kitchen come to life before you spend a dime. Our designers create photorealistic 3D renderings with accurate cabinet pricing—completely free, with no obligation.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <a href="#request" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20">
                                <Icon className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                </Icon>
                                Get My Free 3D Design
                            </a>
                            <a href="/" className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm">
                                Browse Cabinets
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

/* ====================== What's Included ====================== */

const INCLUDED = [
    {
        title: 'Professional Layout Design',
        body: 'A functional, expertly planned layout that maximizes storage, flow, and every inch of your space.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H5a1 1 0 01-1-1V5zm0 5h16M10 4v16" />,
    },
    {
        title: '3D Photorealistic Renderings',
        body: 'Lifelike renderings so you can see exactly how your finished kitchen will look before you order.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    },
    {
        title: 'Accurate Pricing Breakdown',
        body: 'A clear, itemized quote with real cabinet pricing—no surprises, no guesswork.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 7h6m-6 4h6m-6 4h4M5 3h14a1 1 0 011 1v16l-3-2-2 2-2-2-2 2-2-2-3 2V4a1 1 0 011-1z" />,
    },
    {
        title: 'Complete Cabinet Specifications',
        body: 'Full specs—dimensions, finishes, and configurations—for every cabinet in your design.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    },
    {
        title: 'Expert Consultation',
        body: 'One-on-one guidance from a dedicated designer who helps you choose the right brand, style, and finish.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-2a3 3 0 10-2.4-1.2" />,
    },
    {
        title: 'Unlimited Revisions',
        body: 'We refine your design as many times as it takes until it’s exactly what you envisioned.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0A8.003 8.003 0 014.582 13m15.836 0H15" />,
    },
];

function WhatsIncluded() {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="What's included">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        What’s Included
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        Everything in your free design
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        A complete, professional design package—at no cost and with no obligation.
                    </p>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {INCLUDED.map(({ title, body, icon }) => (
                        <div
                            key={title}
                            className="flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]"
                        >
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                                <Icon className="w-7 h-7">{icon}</Icon>
                            </span>
                            <h3 className="mt-5 font-display text-lg font-bold text-[#374151] tracking-tight">{title}</h3>
                            <p className="mt-2 text-[#374151]/70 text-[15px] leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ====================== How It Works ====================== */

const STEPS = [
    { num: '01', title: 'Share your measurements & vision', body: 'Send us rough room dimensions, photos, and any inspiration. A simple sketch with measurements is perfect.' },
    { num: '02', title: 'Initial design consultation', body: 'A dedicated designer reaches out within 1 business day to understand your goals, style, and budget.' },
    { num: '03', title: 'Receive your 3D design', body: 'In 3–5 business days you’ll get photorealistic renderings, a layout, and an itemized price.' },
    { num: '04', title: 'Review & refine', body: 'Tweak finishes, layout, or hardware—we revise as many times as you need, free of charge.' },
    { num: '05', title: 'Finalize & order', body: 'Approve the design and place your order with confidence. We ship nationwide to your door.' },
];

function HowItWorks() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="How our design process works">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        How It Works
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        Your design in five simple steps
                    </h2>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                    {STEPS.map(({ num, title, body }) => (
                        <div
                            key={num}
                            className="flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]"
                        >
                            <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#374151]/5 text-amber-600 font-display text-lg font-bold ring-1 ring-[#374151]/10">
                                {num}
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

/* ====================== Why our design ====================== */

const WHY_POINTS = [
    'Professional design software for true-to-life renderings and precise measurements',
    'Designers who optimize the work triangle, ergonomics, and ADA-friendly layouts',
    'Smart layout choices that often save money by reducing wasted cabinets and fillers',
    'Built for homeowners and contractors alike—single kitchens to large multi-unit projects',
];

function WhyOurDesign() {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="Why our design service">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
                    {/* Image */}
                    <div className="relative">
                        <img
                            src="/images/kichan-imgs/gallery-05.png"
                            alt="Photorealistic 3D kitchen rendering with island and custom cabinetry"
                            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_20px_50px_rgba(55,65,81,0.16)]"
                        />
                        <div className="hidden md:block pointer-events-none absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl bg-amber-400/15 -z-10" aria-hidden="true" />
                    </div>

                    {/* Content */}
                    <div>
                        <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                            Why It’s Different
                        </span>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                            Designed by experts, not by guesswork
                        </h2>
                        <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                            A great kitchen is more than pretty cabinets. Our designers combine professional software with real expertise to plan a space that works beautifully and costs less.
                        </p>

                        <ul className="mt-7 space-y-3">
                            {WHY_POINTS.map((point) => (
                                <li key={point} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-gray-900">
                                        <Icon className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </Icon>
                                    </span>
                                    <span className="text-[#374151] text-[15px] leading-relaxed">{point}</span>
                                </li>
                            ))}
                        </ul>

                        <a href="#request" className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors">
                            Start My Free Design
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

/* ====================== Request form ====================== */

const FIELD = 'w-full rounded-xl border border-[#374151]/15 bg-[#F9FAFB] px-4 py-2.5 text-sm text-[#374151] placeholder:text-[#374151]/40 shadow-sm transition-colors hover:border-[#374151]/25 focus:bg-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none';
const LABEL = 'block text-sm font-medium text-[#374151] mb-1.5';

const PERKS = [
    'Reply within 1 business day',
    'Full 3D renderings in 3–5 days',
    '100% free, zero obligation',
    'Unlimited revisions',
];

const PROJECT_TYPES = ['Kitchen', 'Bathroom / Vanity', 'Laundry Room', 'Mudroom', 'Home Office', 'Bar / Entertainment', 'Whole Home', 'Other'];
const BRANDS = ['Fabuwood', 'J&K', 'Modernform', 'Diamond', 'Decora', 'Mantra', 'Tribeca', 'KCD', 'USCD', 'Not sure yet'];
const MEASUREMENTS = ['Yes, I have measurements', 'Partial measurements', 'No, I need help measuring'];
const TIMELINES = ['As soon as possible', '1–3 months', '3–6 months', '6+ months', 'Just exploring'];
const ROOM_STYLES = ['Shaker', 'Flat Panel / Modern', 'Raised Panel / Traditional', 'Inset', 'Not sure yet'];
const COLORS = ['White', 'Gray', 'Blue', 'Green', 'Black', 'Natural Wood', 'Two-Tone', 'Other / Not sure'];

function Field({ id, label, type = 'text', required = false, placeholder, inputMode }) {
    return (
        <div>
            <label htmlFor={id} className={LABEL}>{label}{required && ' *'}</label>
            <input id={id} type={type} required={required} placeholder={placeholder} inputMode={inputMode} className={FIELD} />
        </div>
    );
}

function SelectField({ label, options, required = false }) {
    const [value, setValue] = useState('');
    return (
        <div>
            <span className={LABEL}>{label}{required && ' *'}</span>
            <Listbox value={value} onChange={setValue}>
                <div className="relative">
                    <ListboxButton className={`${FIELD} group flex items-center justify-between gap-2 text-left ${value ? 'text-[#374151]' : 'text-[#374151]/40'}`}>
                        <span className="truncate">{value || 'Select…'}</span>
                        <Icon className="w-4 h-4 flex-shrink-0 text-[#374151]/45 transition-transform group-data-[open]:rotate-180">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </Icon>
                    </ListboxButton>
                    <ListboxOptions className="absolute z-30 mt-2 w-full max-h-60 overflow-auto rounded-xl border border-[#374151]/10 bg-white p-1.5 shadow-[0_20px_50px_rgba(55,65,81,0.18)] focus:outline-none">
                        {options.map((o) => (
                            <ListboxOption
                                key={o}
                                value={o}
                                className="group flex cursor-pointer select-none items-center justify-between gap-2 rounded-lg px-3 py-2 text-sm text-[#374151] transition-colors data-[focus]:bg-amber-50 data-[focus]:text-amber-700 data-[selected]:font-semibold"
                            >
                                <span className="truncate">{o}</span>
                                <Icon className="w-4 h-4 flex-shrink-0 text-amber-500 opacity-0 group-data-[selected]:opacity-100">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </Icon>
                            </ListboxOption>
                        ))}
                    </ListboxOptions>
                </div>
            </Listbox>
        </div>
    );
}

function FileField() {
    const [names, setNames] = useState([]);
    return (
        <div>
            <span className={LABEL}>Photos, measurements, or floor plans</span>
            <label htmlFor="d-files" className="flex flex-col items-center justify-center gap-1.5 rounded-xl border border-dashed border-[#374151]/25 bg-[#F9FAFB] px-4 py-6 text-center cursor-pointer transition-colors hover:border-amber-400 hover:bg-amber-50/40">
                <Icon className="w-7 h-7 text-amber-500">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M7 16a4 4 0 01-.88-7.9A5 5 0 1115.9 6 4.5 4.5 0 0117 15M12 12v9m0-9l-3 3m3-3l3 3" />
                </Icon>
                <span className="text-sm font-semibold text-[#374151]">Browse a file</span>
                <span className="text-xs text-[#374151]/50">PNG, JPG, or PDF — up to 10MB each</span>
            </label>
            <input
                id="d-files"
                type="file"
                multiple
                accept="image/*,.pdf"
                className="sr-only"
                onChange={(e) => setNames(Array.from(e.target.files || []).map((f) => f.name))}
            />
            {names.length > 0 && (
                <ul className="mt-2 space-y-1">
                    {names.map((n) => (
                        <li key={n} className="text-xs text-[#374151]/70 truncate">• {n}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

function RequestSection() {
    return (
        <section id="request" className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Request your free design">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                    {/* Left — copy + perks */}
                    <div>
                        <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                            Get Started
                        </span>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                            Request your free 3D design
                        </h2>
                        <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                            Tell us a little about your project and a designer will reach out within one business day. No cost, no pressure.
                        </p>

                        <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                            {PERKS.map((perk) => (
                                <li key={perk} className="flex items-start gap-3">
                                    <span className="flex-shrink-0 mt-0.5 flex items-center justify-center w-6 h-6 rounded-full bg-amber-400 text-gray-900">
                                        <Icon className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </Icon>
                                    </span>
                                    <span className="text-[#374151] text-[15px] leading-relaxed">{perk}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right — form */}
                    <div className="rounded-2xl bg-white shadow-[0_20px_50px_rgba(55,65,81,0.14)] ring-1 ring-[#374151]/10 p-6 sm:p-8">
                        <h3 className="font-display text-xl font-bold text-[#374151] tracking-tight">Start your free design</h3>
                        <p className="mt-1 text-[#374151]/60 text-sm">A designer will contact you within 1 business day.</p>

                        <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field id="d-name" label="Full name" required placeholder="Jane Doe" />
                                <Field id="d-phone" label="Phone number" type="number" required placeholder="6099003358" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <Field id="d-email" label="E-mail" type="email" required placeholder="jane@example.com" />
                                <Field id="d-zip" label="Zip code" type="number" required placeholder="08550" />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <SelectField label="Project type" options={PROJECT_TYPES} required />
                                <SelectField label="Preferred brand" options={BRANDS} required />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <SelectField label="Do you have measurements?" options={MEASUREMENTS} required />
                                <SelectField label="Project timeline" options={TIMELINES} required />
                            </div>

                            <FileField />

                            <div className="grid sm:grid-cols-2 gap-4">
                                <SelectField label="Room style" options={ROOM_STYLES} required />
                                <SelectField label="Color" options={COLORS} required />
                            </div>

                            <div>
                                <label htmlFor="d-msg" className={LABEL}>Additional information</label>
                                <textarea id="d-msg" rows={3} placeholder="Anything else we should know about your project…" className={FIELD} />
                            </div>

                            {/* Consent */}
                            <label className="flex items-start gap-3 text-xs text-[#374151]/60 leading-relaxed">
                                <input type="checkbox" required className="mt-0.5 h-4 w-4 flex-shrink-0 rounded border-[#374151]/30 text-amber-500 focus:ring-amber-400/30" />
                                <span>
                                    I agree to the <a href="#" className="text-amber-600 hover:underline">Privacy Policy</a> and{' '}
                                    <a href="#" className="text-amber-600 hover:underline">Terms</a>.
                                </span>
                            </label>

                            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm">
                                Get My Free 3D Design
                                <Icon className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </Icon>
                            </button>
                            <p className="text-xs text-[#374151]/50 text-center">Free and no obligation. We’ll only use your details to prepare your design.</p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ FAQ ============================ */

const FAQS = [
    { q: 'How long does the 3D design take?', a: 'A designer reaches out within 1 business day, and your full 3D design—renderings, layout, and pricing—is typically ready in 3–5 business days.' },
    { q: 'Is the design really free?', a: 'Yes. Your 3D design and quote are completely free with no obligation to purchase. You only pay if you decide to order your cabinets.' },
    { q: 'What measurements do you need?', a: 'Rough room dimensions, ceiling height, and the locations of windows, doors, and appliances. A simple hand sketch with measurements works great.' },
    { q: 'Can I request revisions?', a: 'Absolutely—revisions are unlimited. We keep refining the layout, finishes, and details until the design is exactly right.' },
    { q: 'Which cabinet brands can I choose from?', a: 'You can design with any of our nine premium brands, including Fabuwood, J&K, Diamond, Decora, and US Cabinet Depot.' },
    { q: 'Does the design include a quote?', a: 'Yes. Every design comes with an accurate, itemized price for the cabinets in your layout—so you know exactly what it costs.' },
];

/* ============================ Page ============================ */

export default function DesignService() {
    return (
        <>
            <Head title="Free 3D Kitchen Design | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <Hero />
                    <WhatsIncluded />
                    <HowItWorks />
                    <WhyOurDesign />
                    <RequestSection />
                    <Faq faqs={FAQS} title="Free 3D design questions" description="Everything you need to know about getting your free design." />
                </main>
                <FooterCTA bgImage="/images/kichan-imgs/cta-design.png" />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
