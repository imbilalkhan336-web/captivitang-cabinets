import Icon from '@/Components/Home/Icon';

const CARDS = [
    {
        line1: { text: 'FREE EXPERT 3D', accent: true },
        line2: { text: 'KITCHEN DESIGN', accent: false },
        description: 'BY EXPERIENCED DESIGNERS FOR OVER 20 YEARS IN THE BUSINESS',
        ctaText: 'EXPLORE MORE',
        href: '#',
    },
    {
        line1: { text: 'KITCHEN', accent: false },
        line2: { text: 'CONTRACTOR PROGRAM', accent: true },
        description: 'SPECIALIZED PRO PRICING, CUSTOMER SERVICE, AND DESIGN',
        ctaText: 'EXPLORE MORE',
        href: '#',
    },
];

function PromoCard({ line1, line2, description, ctaText, href }) {
    return (
        <a
            href={href}
            className="group block rounded-2xl bg-white p-2 shadow-[0_15px_40px_-12px_rgba(20,48,78,0.25)] hover:shadow-[0_20px_50px_-10px_rgba(20,48,78,0.35)] transition-shadow"
        >
            <div className="rounded-xl border-2 border-dashed border-[#16202E]/25 px-4 py-4 lg:px-6 lg:py-5 text-center">
                <h3 className="font-display font-extrabold tracking-tight leading-[1.1] text-lg md:text-xl lg:text-[24px] whitespace-nowrap">
                    <span className={line1.accent ? 'text-[#D97706]' : 'text-[#16202E]'}>{line1.text}</span>{' '}
                    <span className={line2.accent ? 'text-[#D97706]' : 'text-[#16202E]'}>{line2.text}</span>
                </h3>

                <p className="mt-3 text-[#16202E]/75 text-xs md:text-sm font-semibold tracking-wide whitespace-nowrap">
                    {description}
                </p>

                <span className="mt-3 inline-flex items-center gap-1.5 text-[#D97706] text-[11px] font-bold tracking-wider transition-transform group-hover:translate-x-0.5">
                    {ctaText}
                    <Icon className="w-3 h-3">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </Icon>
                </span>
            </div>
        </a>
    );
}

export default function PromoCards() {
    return (
        <section className="bg-white py-6 lg:py-8" aria-label="Promotions">
            <div className="max-w-container mx-auto px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
                    {CARDS.map((card, i) => (
                        <PromoCard key={i} {...card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
