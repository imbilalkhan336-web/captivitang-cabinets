import Icon from '@/Components/Home/Icon';

const ARROW = (
    <Icon className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </Icon>
);

const STEPS = [
    {
        num: '01',
        title: 'Browse & Explore',
        description:
            'Explore our extensive collection of premium cabinet brands. Browse styles from contemporary to traditional, compare features, and find the perfect match for your project.',
        cta: 'Choose Your Cabinet Brand',
        href: '#',
    },
    {
        num: '02',
        title: 'Design Your Space',
        description:
            "Work with our expert designers to create a 3D visualization of your dream kitchen. We'll help you plan every detail, from layout to finishes—completely free of charge.",
        cta: 'Get Free 3D Design',
        href: '/design-service',
    },
    {
        num: '03',
        title: 'Order & Deliver',
        description:
            'Place your order with confidence. We handle everything from processing to delivery, ensuring your cabinets arrive on time and in perfect condition, ready for installation.',
        cta: 'View Shipping & Delivery Details',
        href: '#',
    },
];

function StepCard({ num, title, description, cta, href }) {
    return (
        <div className="relative flex flex-col h-full rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7 lg:p-8 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]">
            {/* Number badge */}
            <div className="relative z-10 mb-5 flex items-center gap-4">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-gray-100 text-amber-600 ring-1 ring-gray-200 font-display text-xl font-bold">
                    {num}
                </span>
                <span className="h-px flex-1 bg-gradient-to-r from-[#374151]/15 to-transparent" aria-hidden="true" />
            </div>

            <h3 className="font-display text-xl lg:text-2xl font-bold text-[#374151] tracking-tight">
                {title}
            </h3>
            <p className="mt-3 text-[#374151]/70 text-[15px] leading-relaxed flex-1">
                {description}
            </p>

            <a
                href={href}
                className="group/link mt-6 inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 text-sm font-semibold transition-colors"
            >
                {cta}
                {ARROW}
            </a>
        </div>
    );
}

export default function HowItWorks() {
    return (
        <section className="relative bg-white py-16 lg:py-24 overflow-hidden" aria-label="How it works">
            {/* Soft ambient accents */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl" aria-hidden="true" />
            <div className="pointer-events-none absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-[#374151]/10 blur-3xl" aria-hidden="true" />

            <div className="relative max-w-container mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        Process
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl lg:text-[42px] font-bold text-[#374151] tracking-tight leading-tight">
                        Our 3 Step Easy Process
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        From browsing our extensive cabinet collections to receiving your perfectly designed
                        kitchen—we make premium cabinetry simple, affordable, and accessible for every project.
                    </p>
                </div>

                {/* Steps */}
                <div className="relative mt-14">
                    {/* Connecting line (desktop) */}
                    <div
                        className="hidden lg:block absolute top-[52px] left-[16%] right-[16%] h-px border-t-2 border-dashed border-[#374151]/15"
                        aria-hidden="true"
                    />
                    <div className="relative grid md:grid-cols-3 gap-6 lg:gap-8">
                        {STEPS.map((step) => (
                            <StepCard key={step.num} {...step} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
