import Icon from '@/Components/Home/Icon';

const FEATURES = [
    {
        title: 'Free 3D Design',
        desc: 'See your dream kitchen come to life before you buy',
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </>
        ),
    },
    {
        title: 'Free Shipping',
        desc: 'Fast, fully insured delivery on all orders over $2,500',
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
            </>
        ),
    },
    {
        title: '0% APR Financing',
        desc: 'Affordable monthly payments through Affirm',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />
        ),
    },
    {
        title: 'Nationwide Delivery',
        desc: 'Curbside & liftgate with damage-free guarantee',
        icon: (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-9v18m-9-9h18" />
        ),
    },
];

export default function FeatureHighlights() {
    return (
        <section className="bg-[#F3F4F6] py-8 lg:py-10" aria-label="Why choose us">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    {FEATURES.map(({ title, desc, icon }) => (
                        <div key={title} className="flex items-center gap-3 flex-1 min-w-[220px]">
                            <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-[#BDD7F0] flex items-center justify-center text-[#1E3A5F]">
                                <Icon className="w-7 h-7" strokeWidth={1.8}>{icon}</Icon>
                            </div>
                            <p className="text-[#1E3A5F] text-sm leading-snug">
                                <span className="font-display font-bold">{title}</span>{' '}
                                <span className="text-[#1E3A5F]/70">{desc}</span>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
