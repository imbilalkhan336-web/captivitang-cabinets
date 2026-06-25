import { useState } from 'react';
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Icon from '@/Components/Home/Icon';

const ARROW = (
    <Icon className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </Icon>
);

/* ============================ Hero ============================ */

const HERO_FEATURES = [
    'Exclusive Wholesale Pricing',
    'Free 3D Design Services',
    'Priority Delivery',
];

function FaqItem({ q, a, isOpen, onToggle }) {
    return (
        <div className="border-b border-[#374151]/12">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                aria-expanded={isOpen}
            >
                <span className="font-display text-lg font-semibold text-[#374151] tracking-tight">{q}</span>
                <span
                    className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full border transition-all ${
                        isOpen
                            ? 'bg-amber-500 border-amber-500 text-white rotate-180'
                            : 'border-[#374151]/25 text-[#374151] group-hover:border-[#374151]/60'
                    }`}
                >
                    <Icon className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </Icon>
                </span>
            </button>
            <div
                className={`grid transition-all duration-300 ease-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
            >
                <div className="overflow-hidden">
                    <p className="pb-5 pr-12 text-[#374151]/70 text-[15px] leading-relaxed">{a}</p>
                </div>
            </div>
        </div>
    );
}

function HeroText() {
    return (
        <div className="order-1 lg:col-span-7 lg:row-start-1 lg:min-h-[360px] lg:flex lg:flex-col lg:justify-center">
            <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                Contractor Program
            </span>
            <h1 className="mt-4 font-sans font-semibold lg:font-normal text-white tracking-tight text-[34px]/[2.5rem] md:text-5xl/[3.25rem] lg:text-[56px]/[3.5rem]">
                Wholesale Cabinet <span className="text-amber-400">Contractor</span> Program
            </h1>
            <p className="mt-3 text-white/85 text-lg leading-relaxed max-w-xl">
                Join our exclusive contractor program and unlock wholesale pricing, complimentary 3D design services, dedicated support, and priority delivery.
            </p>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
                {HERO_FEATURES.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-white/85 text-sm">
                        <Icon className="w-5 h-5 text-amber-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </Icon>
                        {f}
                    </li>
                ))}
            </ul>
        </div>
    );
}

/* ============================ Data ============================ */

const BENEFITS = [
    {
        title: 'Wholesale Pricing',
        body: 'Exclusive trade pricing on Fabuwood, J&K, Diamond, Decora, Mantra and more—premium brands at unbeatable rates.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />,
    },
    {
        title: 'Free 3D Design',
        body: 'Complimentary professional 3D design for every project—floor plans, elevations, and renderings included.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    },
    {
        title: 'Priority Delivery',
        body: 'Fast, reliable delivery on your schedule with curbside, lift-gate, and inside-delivery options nationwide.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />,
    },
    {
        title: 'Dedicated Support',
        body: 'A personal account manager and expert guidance from first quote through final install.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6-2a3 3 0 10-2.4-1.2" />,
    },
];

const PROGRAM_PERKS = [
    'Preferred trade pricing on every order',
    'Concierge 3D design service',
    'Earned perks & rewards',
    'Specialized & priority support',
    'Discounted product packages',
];

const SERVICES = [
    {
        title: 'Free 3D Design Support',
        body: 'Professional renderings, floor plans, and elevations for every job—so your clients can see it before you build it.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    },
    {
        title: 'Technical Specifications',
        body: 'Complete cut sheets and specs for accurate ordering, estimating, and installation on every cabinet.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
    },
    {
        title: 'Jobpack Fulfillment',
        body: 'Labeled, organized components packed by job site to keep your crews moving and reduce on-site sorting.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />,
    },
    {
        title: 'Flexible Shipping',
        body: 'Curbside, lift-gate, and inside-delivery options nationwide—delivered on the schedule your project needs.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />,
    },
    {
        title: 'Fast Claims Handling',
        body: 'Clear policies and quick warranty and returns handling—so a rare issue never stalls your timeline.',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
];

const CONTRACTOR_FAQS = [
    { q: 'What is the Contractor Program?', a: 'A trade program for builders, contractors, and industry professionals that unlocks wholesale cabinet pricing, free 3D design, dedicated account management, and priority delivery.' },
    { q: 'Who qualifies as a contractor?', a: 'Builders, remodelers, designers, and trade professionals are welcome to apply. Once you submit your details, an account manager confirms your eligibility and gets you set up.' },
    { q: 'How much can I save?', a: 'Members receive exclusive wholesale pricing across our premium brands. Your account manager will share project-specific pricing once you join.' },
    { q: 'Is 3D design really included?', a: 'Yes—complimentary professional 3D design, floor plans, elevations, and renderings are included on every project, with no obligation.' },
    { q: 'What are typical lead times?', a: 'Lead times vary by brand and order size. We provide clear timelines up front and offer priority fulfillment for program members.' },
    { q: 'Can I order cabinet samples?', a: 'Absolutely. Door-sample packages are available so you and your clients can see and feel the finishes before committing.' },
    { q: 'What shipping options are available?', a: 'We ship nationwide with curbside, lift-gate, and inside-delivery options, plus jobpack fulfillment with labeled components.' },
    { q: 'Are cabinets assembled or RTA?', a: 'Depending on the brand, cabinets are available assembled or ready-to-assemble (RTA). Your account manager will help you choose the best format for each job.' },
    { q: 'What about warranty and returns?', a: 'We keep policies clear and claims handling fast, so a rare issue is resolved quickly without stalling your timeline.' },
];

/* ====================== Application form ====================== */

const FIELD = 'w-full rounded-xl border border-[#374151]/15 bg-[#F9FAFB] px-4 py-2.5 text-sm text-[#374151] placeholder:text-[#374151]/40 shadow-sm transition-colors hover:border-[#374151]/25 focus:bg-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none';
const LABEL = 'block text-sm font-medium text-[#374151] mb-1.5';

const AUDIENCE_OPTIONS = ['General Contractor', 'Home Builder', 'Remodeler', 'Kitchen & Bath Designer', 'Architect / Designer', 'Property Manager', 'Homeowner', 'Other'];
const PROJECT_OPTIONS = ['1–5', '6–10', '11–25', '26–50', '50+'];
const CABINET_OPTIONS = ['Fabuwood', 'J&K', 'Modernform', 'Diamond', 'Decora', 'Mantra', 'Tribeca', 'KCD', 'USCD', 'Not sure yet'];
const DESIGN_OPTIONS = ['Yes', 'No', 'Maybe later'];

function Field({ id, label, type = 'text', required = false, placeholder }) {
    return (
        <div>
            <label htmlFor={id} className={LABEL}>{label}{required && ' *'}</label>
            <input id={id} type={type} required={required} placeholder={placeholder} className={FIELD} />
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

function ApplyForm() {
    return (
        <div className="rounded-2xl bg-white shadow-[0_20px_50px_rgba(55,65,81,0.16)] ring-1 ring-[#374151]/10 p-6 sm:p-7">
            <h3 className="font-display text-xl font-bold text-[#374151] tracking-tight">Join Our Program</h3>
            <p className="mt-1 text-[#374151]/60 text-sm">
                Apply in minutes—a dedicated account manager will reach out.
            </p>

            <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Field id="cp-name" label="Full name" required placeholder="Jane Contractor" />
                    <Field id="cp-phone" label="Phone number" type="number" required placeholder="6099003358" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <Field id="cp-email" label="E-mail" type="email" required placeholder="jane@acme.com" />
                    <Field id="cp-zip" label="Zip code" type="number" required placeholder="08550" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField id="cp-audience" label="Best describes you" options={AUDIENCE_OPTIONS} required />
                    <SelectField id="cp-projects" label="Projects per year" options={PROJECT_OPTIONS} required />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField id="cp-cabinets" label="Preferred cabinets" options={CABINET_OPTIONS} required />
                    <SelectField id="cp-design" label="Need design services?" options={DESIGN_OPTIONS} required />
                </div>
                <div>
                    <label htmlFor="cp-msg" className={LABEL}>Additional information</label>
                    <textarea id="cp-msg" rows={3} placeholder="Project types, volume, timeline…" className={FIELD} />
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
                    Submit
                    {ARROW}
                </button>
            </form>
        </div>
    );
}

/* ===== Hero + sticky form (right) + program content ===== */

function HeroApply({ bgImage = '/images/contractor-program.png' }) {
    const [openFaq, setOpenFaq] = useState(0);

    return (
        <section className="relative bg-white" aria-label="Contractor program">
            {/* Hero background — covers the top hero region, then fades into white */}
            <div className="absolute inset-x-0 top-0 h-[820px] sm:h-[660px] lg:h-[460px] overflow-hidden" aria-hidden="true">
                <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" />
            </div>

            <div className="relative max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 pt-16 lg:pt-20 pb-4 lg:pb-6">
                <div className="grid gap-x-10 lg:gap-x-14 gap-y-6 lg:grid-cols-12">
                    {/* Hero text — row 1, left */}
                    <HeroText />

                    {/* Form — right, sticky, spans both rows */}
                    <aside id="apply" className="order-2 lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 lg:-mt-12">
                        <div className="lg:sticky lg:top-16">
                            <ApplyForm />
                        </div>
                    </aside>

                    {/* Program content — row 2, left */}
                    <div className="order-3 lg:col-span-7 lg:col-start-1 lg:row-start-2 pt-2 lg:pt-4 space-y-14">
                        {/* Why partner */}
                        <div>
                            <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                                Why Partner With Us
                            </span>
                            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                                Built for builders, contractors, and the trade
                            </h2>
                            <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                                Whether you're a builder, contractor, or industry professional, our program cuts your overhead and elevates every project—free kitchen designs, floor plans, 3D renderings, elevations, and door-sample packages included.
                            </p>

                            <div className="mt-8 grid sm:grid-cols-2 gap-5">
                                {BENEFITS.map(({ title, body, icon }) => (
                                    <div
                                        key={title}
                                        className="flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(55,65,81,0.12)]"
                                    >
                                        <span className="flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                                            <Icon className="w-6 h-6">{icon}</Icon>
                                        </span>
                                        <h3 className="mt-4 font-display text-base font-bold text-[#374151] tracking-tight">{title}</h3>
                                        <p className="mt-1.5 text-[#374151]/70 text-sm leading-relaxed">{body}</p>
                                    </div>
                                ))}
                            </div>

                            <h3 className="mt-10 font-display text-lg font-bold text-[#374151] tracking-tight">What's included</h3>
                            <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                {PROGRAM_PERKS.map((perk) => (
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

                        {/* Workflows & services */}
                        <div>
                            <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                                Workflows & Services
                            </span>
                            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                                Designed to save you time
                            </h2>

                            <div className="mt-8 space-y-4">
                                {SERVICES.map(({ title, body, icon }) => (
                                    <div key={title} className="flex items-start gap-4 rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(55,65,81,0.12)]">
                                        <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                                            <Icon className="w-6 h-6">{icon}</Icon>
                                        </span>
                                        <div>
                                            <h3 className="font-display text-base font-bold text-[#374151] tracking-tight">{title}</h3>
                                            <p className="mt-1.5 text-[#374151]/70 text-sm leading-relaxed">{body}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ */}
                        <div>
                            <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                                FAQ
                            </span>
                            <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                                Frequently asked questions
                            </h2>
                            <div className="mt-6">
                                {CONTRACTOR_FAQS.map((faq, i) => (
                                    <FaqItem
                                        key={i}
                                        q={faq.q}
                                        a={faq.a}
                                        isOpen={openFaq === i}
                                        onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function ContractorProgram() {
    return (
        <>
            <Head title="Contractor Program | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <HeroApply />
                </main>
                <FooterCTA bgImage="/images/kichan-imgs/cta-contractor.png" />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
