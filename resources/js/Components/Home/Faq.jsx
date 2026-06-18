import { useState } from 'react';
import Icon from '@/Components/Home/Icon';

const DEFAULT_FAQS = [
    {
        q: 'Is the 3D design really free?',
        a: 'Yes—completely free with no obligation. Share your measurements and inspiration, and our designers will create a full 3D rendering of your space along with a detailed quote.',
    },
    {
        q: 'Which cabinet brands do you carry?',
        a: 'We partner with nine premium brands including Fabuwood, J&K, Modernform, Diamond, Decora, Mantra, Tribeca, KCD, and USCD—covering everything from boutique craftsmanship to industry leaders.',
    },
    {
        q: 'Do you offer contractor pricing?',
        a: 'Absolutely. Our Contractor Program unlocks exclusive pricing, dedicated support, and priority fulfillment on every project. Join in minutes to start saving.',
    },
    {
        q: 'How does shipping and delivery work?',
        a: 'We ship nationwide with curbside and liftgate options and a damage-free guarantee. Orders over $2,500 ship free, and we keep you updated from processing through arrival.',
    },
    {
        q: 'Is financing available?',
        a: 'Yes. Through Affirm you can split your purchase into affordable monthly payments with 0% APR options, so you can get the kitchen you want now.',
    },
    {
        q: 'Can I order door samples before buying?',
        a: 'Of course. Browse our sample doors and order the finishes you love so you can see and feel the quality in your own space before committing.',
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
                <span className="font-display text-lg font-semibold text-[#374151] tracking-tight">
                    {q}
                </span>
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

export default function Faq({
    faqs = DEFAULT_FAQS,
    title = 'Frequently Asked Questions',
    description = 'Everything you need to know about designing, ordering, and receiving your cabinets.',
    bgClass = 'bg-white',
}) {
    const [open, setOpen] = useState(0);

    return (
        <section className={`${bgClass} py-16 lg:py-24`} aria-label="Frequently asked questions">
            <div className="max-w-3xl mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        FAQ
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        {title}
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Accordion */}
                <div className="mt-10">
                    {faqs.map((faq, i) => (
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
