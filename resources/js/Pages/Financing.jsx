import { useState } from 'react';
import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import ShopByCategory from '@/Components/Home/ShopByCategory';
import HeroGoogleBadge from '@/Components/Home/HeroGoogleBadge';
import Icon from '@/Components/Home/Icon';

/* ============================ Hero ============================ */

function FinancingHero({ bgImage = '/images/home-hero-bg.png' }) {
    return (
        <section className="relative min-h-[52vh] flex flex-col overflow-hidden pt-20" aria-label="Financing hero">
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
                    <div className="w-full max-w-container mx-auto pt-10 lg:pt-12 pb-4 lg:pb-6">
                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                            {/* LEFT — Heading, script, description */}
                            <div className="lg:col-span-8">
                                {/* Heading */}
                                <h1 className="font-sans font-normal text-white text-[56px] leading-[56px]">
                                    Buy Now, Pay Later
                                    <br />
                                    with <span className="text-amber-400 font-normal">Affirm</span>
                                </h1>

                                {/* Description */}
                                <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                                    Split your dream kitchen into easy monthly payments with 0% APR financing on qualifying orders—no hidden fees, ever. Checking your eligibility takes ~15 seconds and won't affect your credit score.
                                </p>

                                {/* Google reviews trust badge — temporarily hidden */}
                                {/* <div className="mt-6">
                                    <HeroGoogleBadge />
                                </div> */}
                            </div>

                            {/* RIGHT — CTA Buttons */}
                            <div className="lg:col-span-4 flex flex-wrap items-center gap-3 lg:justify-end">
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20 whitespace-nowrap">
                                    <Icon className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </Icon>
                                    Start Shopping
                                </a>
                                <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm whitespace-nowrap">
                                    <Icon className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </Icon>
                                    Get Free 3D Design
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ========================= Why Affirm (Shop-by style) ========================= */

const BENEFIT_ITEMS = [
    {
        label: '0% APR Available',
        inner: <img src="/images/icon-imgs/apr.png" alt="0% APR Available" className="w-full h-full object-cover" />,
    },
    {
        label: 'No Hidden Fees',
        inner: <img src="/images/icon-imgs/no-fees.png" alt="No Hidden Fees" className="w-full h-full object-cover" />,
    },
    {
        label: 'Soft Credit Check',
        inner: <img src="/images/icon-imgs/soft-credit.png" alt="Soft Credit Check" className="w-full h-full object-cover" />,
    },
    {
        label: 'Flexible Terms',
        inner: <img src="/images/icon-imgs/flexible-terms.png" alt="Flexible Terms" className="w-full h-full object-cover" />,
    },
];

function WhyAffirm() {
    return (
        <ShopByCategory
            title="Financing made simple and transparent"
            description="Get the kitchen you want today and pay over time—on your terms, with none of the surprises. Enjoy 0% APR, no hidden fees, and flexible monthly plans."
            items={BENEFIT_ITEMS}
            centered
        />
    );
}

/* ======================== How It Works ======================== */

const STEPS = [
    {
        title: 'Prequalify in seconds',
        body: 'Answer a few quick questions to see your options. It only takes a soft credit inquiry, so there is no impact on your score.',
    },
    {
        title: 'Design your kitchen',
        body: 'Browse our nine premium cabinet brands and use our free 3D design service to plan every detail of your space.',
    },
    {
        title: 'Pay over time',
        body: 'Select Affirm at checkout, choose your monthly plan, and we ship nationwide—straight to your door.',
    },
];

function HowItWorksFinancing() {
    return (
        <section className="relative bg-[#F3F4F6] py-16 lg:py-24" aria-label="How financing works">
            <div className="relative max-w-container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                    {/* Image — left, sticks while the steps scroll, releases at the last card */}
                    <div className="relative lg:sticky lg:top-24">
                        <img
                            src="/images/financing/easy-steps.png"
                            alt="Warm wood-tone kitchen with island seating"
                            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-[0_20px_50px_rgba(55,65,81,0.16)]"
                        />
                        <div className="hidden md:block pointer-events-none absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl bg-amber-400/15 -z-10" aria-hidden="true" />
                    </div>

                    {/* Content — right */}
                    <div>
                        <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                            How It Works
                        </span>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                            Three easy steps to finance
                        </h2>

                        <div className="mt-8 space-y-6">
                            {STEPS.map(({ title, body }) => (
                                <div
                                    key={title}
                                    className="relative flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]"
                                >
                                    <h3 className="font-display text-xl font-bold text-[#374151] tracking-tight">{title}</h3>
                                    <p className="mt-3 text-[#374151]/70 text-[15px] leading-relaxed">{body}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ====================== Example Payments ====================== */

const TOTALS = [1500, 2500, 5000, 10000, 20000];
const TERMS = [3, 6, 12, 24];

const money = (n) =>
    `$${n.toLocaleString('en-US', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 })}`;

function ExamplePayments() {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="Example monthly payments">
            <div className="max-w-container mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        Example Payments
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        See what your monthly payment could be
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        Estimated monthly payments at 0% APR. Your actual rate (0%–30% APR) and terms are based on your credit.
                    </p>
                </div>

                <div className="mt-12 overflow-x-auto rounded-2xl border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)]">
                    <table className="w-full min-w-[640px] text-left bg-white">
                        <thead>
                            <tr className="bg-gray-200 text-[#374151]">
                                <th className="px-5 py-4 text-sm font-semibold">Purchase total</th>
                                {TERMS.map((t) => (
                                    <th key={t} className="px-5 py-4 text-sm font-semibold whitespace-nowrap">
                                        {t} months
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TOTALS.map((total, i) => (
                                <tr key={total} className="bg-white border-t border-[#374151]/10">
                                    <td className="px-5 py-4 font-display font-bold text-[#374151] whitespace-nowrap">
                                        {money(total)}
                                    </td>
                                    {TERMS.map((t) => (
                                        <td key={t} className="px-5 py-4 text-[#374151]/80 whitespace-nowrap">
                                            <span className="font-semibold text-[#374151]">
                                                {money(Math.round((total / t) * 100) / 100)}
                                            </span>
                                            <span className="text-[#374151]/50 text-sm">/mo</span>
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <p className="mt-4 text-center text-[#374151]/50 text-xs">
                    Figures are illustrative estimates and not an offer of credit. Payment options through Affirm are subject to eligibility.
                </p>
            </div>
        </section>
    );
}

/* ============================ FAQ ============================ */

const FAQS = [
    {
        q: 'What is Affirm?',
        a: 'Affirm is a buy-now-pay-later provider that lets you split a purchase into fixed monthly payments instead of paying all at once. You choose a plan at checkout and pay over time.',
    },
    {
        q: 'Will checking my eligibility affect my credit score?',
        a: 'No. Prequalifying uses a soft credit check that takes about 15 seconds and has no impact on your credit score. A hard inquiry only happens if you accept a loan.',
    },
    {
        q: 'How quickly will I be approved?',
        a: 'Most decisions are instant. After answering a few quick questions, you will see your available payment options right away at checkout.',
    },
    {
        q: 'When is my first payment due?',
        a: 'Your first installment is typically due about a month after your order ships. Affirm will send reminders before each payment date.',
    },
    {
        q: 'What interest rate will I pay?',
        a: 'Qualifying orders may be eligible for 0% APR. Otherwise rates range from 0%–30% APR based on your credit—always shown upfront before you commit, with no hidden fees.',
    },
    {
        q: 'Who is eligible to use Affirm?',
        a: 'You must be 18 or older (19 in some states), have a valid mobile number and email, and meet Affirm’s eligibility criteria. Availability can vary by region.',
    },
    {
        q: 'Can contractors use financing too?',
        a: 'Yes. Financing is available alongside our Contractor Program. Reach out and our team will help you choose the best option for your project.',
    },
    {
        q: 'Are there fees for paying early?',
        a: 'Never. There are no prepayment penalties—pay off your balance early at any time and you’ll save on any remaining interest.',
    },
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
                            ? 'bg-[#374151] border-[#374151] text-white rotate-180'
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

function FinancingFaq() {
    const [open, setOpen] = useState(0);
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Financing FAQ">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                <div className="text-center">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">FAQ</span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        Financing questions, answered
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        Everything you need to know about paying for your cabinets over time with Affirm.
                    </p>
                </div>

                <div className="mt-10">
                    {FAQS.map((faq, i) => (
                        <FaqItem
                            key={i}
                            q={faq.q}
                            a={faq.a}
                            isOpen={open === i}
                            onToggle={() => setOpen(open === i ? -1 : i)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ========================= Closing CTA ========================= */

function FinancingCTA({ bgImage = '/images/home-hero-bg.png' }) {
    return (
        <section className="relative w-full overflow-hidden" aria-label="Ready to finance your kitchen">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" aria-hidden="true" />

            <div className="relative max-w-container mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-display font-bold text-white tracking-tight leading-tight text-2xl md:text-3xl lg:text-[34px]">
                        Ready to finance your <span className="text-amber-400">dream kitchen?</span>
                    </h2>
                    <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
                        Browse our premium cabinets or get a free 3D design—then check out with Affirm and pay over time.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20">
                            Browse Cabinets
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </Icon>
                        </a>
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm">
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </Icon>
                            Get Free 3D Design
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ========================= Disclaimer ========================= */

function Disclaimer() {
    return (
        <section className="bg-white border-t border-[#374151]/10" aria-label="Financing disclaimer">
            <div className="max-w-container mx-auto px-6 lg:px-8 py-8">
                <p className="text-[#374151]/45 text-xs leading-relaxed max-w-4xl">
                    Payment options through Affirm are subject to an eligibility check and are provided by these
                    lending partners: affirm.com/lenders. Options depend on your purchase amount, and a down payment
                    may be required. APRs range from 0% to 30%. Estimated payment amounts shown on this page exclude
                    taxes and shipping charges, which are added at checkout. Availability may vary by region.
                    Affirm loans are made by Cross River Bank and other lending partners; CA residents: loans by
                    Affirm Loan Services, LLC are made or arranged pursuant to a California Finance Lender license.
                </p>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function Financing() {
    return (
        <>
            <Head title="Financing with Affirm | Captivating Cabinets" />

            <div className="bg-gray-950 min-h-screen">
                <TopContactBar />
                <Navbar />
                <FinancingHero />
                <main>
                    <WhyAffirm />
                    <HowItWorksFinancing />
                    <ExamplePayments />
                    <FinancingFaq />
                </main>
                <FinancingCTA />
                <Footer />
                <Disclaimer />
                <StickyCTABar />
            </div>
        </>
    );
}
