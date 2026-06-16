import Icon from '@/Components/Home/Icon';

const FEATURES = [
    {
        title: 'ALL 50 STATES',
        desc: 'We proudly deliver to every state in the nation.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M3 10c0-3 2-5 5-5h2l1 2h3l1-2h2c3 0 5 2 5 5v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7z"
            />
        ),
    },
    {
        title: 'CURBSIDE & LIFTGATE DELIVERY',
        desc: 'Safe, reliable delivery right to your curb.',
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
            </>
        ),
    },
    {
        title: 'DAMAGE-FREE GUARANTEE',
        desc: 'Your cabinets arrive protected and ready to install.',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
        ),
    },
];

const STATS = [
    {
        title: 'Nationwide Delivery',
        desc: 'Across All 50 States',
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
            </>
        ),
    },
    {
        title: 'Contractor Pricing',
        desc: 'Save More on Every Order',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z"
            />
        ),
    },
    {
        title: '10,000+ Projects',
        desc: 'Trusted by Professionals',
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
            />
        ),
    },
    {
        title: 'Expert Support',
        desc: "We're Here to Help",
        icon: (
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.6}
                d="M18.364 5.636A9 9 0 105.636 18.364 9 9 0 0018.364 5.636zM12 8v4l3 2"
            />
        ),
    },
];

function IconBadge({ size = 'md', children }) {
    const dims = size === 'lg' ? 'w-14 h-14' : size === 'sm' ? 'w-10 h-10' : 'w-12 h-12';
    const iconSize = size === 'lg' ? 'w-6 h-6' : size === 'sm' ? 'w-4 h-4' : 'w-5 h-5';
    return (
        <div className={`${dims} rounded-2xl bg-amber-100/70 ring-1 ring-amber-200/60 flex items-center justify-center flex-shrink-0 text-amber-500`}>
            <Icon className={iconSize}>{children}</Icon>
        </div>
    );
}

export default function ShipNationwide() {
    return (
        <section className="bg-white lg:h-screen lg:min-h-[640px] flex flex-col justify-center py-8 lg:py-6" aria-label="Nationwide shipping">
            <div className="max-w-container mx-auto px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8 lg:gap-12 items-center">
                    {/* Left - Content */}
                    <div>
                        {/* Pill badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-amber-100/70 ring-1 ring-amber-200/60 text-amber-500 mb-4">
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
                            </Icon>
                            <span className="text-xs font-bold tracking-wider">NATIONWIDE</span>
                        </div>

                        {/* Heading */}
                        <h2 className="font-display text-3xl md:text-4xl font-bold leading-[1.1] text-gray-900 tracking-tight">
                            We Ship to Every State<br />in the <span className="text-amber-500">Nation</span>
                        </h2>

                        {/* Accent line */}
                        <div className="mt-4 h-[3px] w-16 bg-amber-400 rounded-full" />

                        {/* Description */}
                        <p className="mt-4 text-gray-600 text-sm leading-relaxed max-w-lg">
                            From coast to coast, Captivating Cabinets delivers premium kitchen cabinetry to all 50 states. Whether you're renovating in New York or building new in California, your dream kitchen is just an order away.
                        </p>

                        {/* Features */}
                        <ul className="mt-6 space-y-3 divide-y divide-gray-200/70">
                            {FEATURES.map(({ title, desc, icon }, i) => (
                                <li key={title} className={`flex items-start gap-3 ${i > 0 ? 'pt-3' : ''}`}>
                                    <IconBadge size="sm">{icon}</IconBadge>
                                    <div>
                                        <h3 className="text-sm font-bold tracking-wide text-gray-900">{title}</h3>
                                        <p className="mt-0.5 text-xs text-gray-600">{desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        {/* CTA link */}
                        <a
                            href="#"
                            className="group inline-flex items-center gap-2 mt-6 text-amber-500 hover:text-amber-600 text-sm font-bold tracking-wider transition-colors"
                        >
                            VIEW SHIPPING DETAILS
                            <Icon className="w-4 h-4 transition-transform group-hover:translate-x-0.5">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </Icon>
                        </a>
                    </div>

                    {/* Right - Image */}
                    <img
                        src="/images/kitchen.png"
                        alt="Modern white kitchen with marble island and gold pendant lights"
                        className="block w-full aspect-[5/4] lg:h-full lg:aspect-auto lg:min-h-[480px] object-cover rounded-3xl shadow-xl"
                    />
                </div>

                {/* Bottom stats bar */}
                <div className="mt-8 rounded-2xl bg-white/60 ring-1 ring-gray-200/70 px-4 lg:px-8 py-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        {STATS.map(({ title, desc, icon }) => (
                            <div key={title} className="flex items-center gap-3">
                                <IconBadge>{icon}</IconBadge>
                                <div>
                                    <h4 className="text-sm font-bold text-gray-900 leading-tight">{title}</h4>
                                    <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
