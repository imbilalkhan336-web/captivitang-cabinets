import Icon from '@/Components/Home/Icon';

// Shared icon paths for the CTA buttons.
export const CTA_ICONS = {
    design: 'M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4',
    phone: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
    contractor: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v1m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    brands: 'M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z',
    cabinets: 'M4 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM13 5a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1V5zM4 14a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1H5a1 1 0 01-1-1v-5zM13 14a1 1 0 011-1h5a1 1 0 011 1v5a1 1 0 01-1 1h-5a1 1 0 01-1-1v-5z',
};

const DEFAULT_TITLE = (
    <>Let's choose a <span className="text-amber-400">route</span></>
);

const DEFAULT_BUTTONS = [
    { label: 'Get Free 3D Design', icon: CTA_ICONS.design, href: '/design-service', primary: true },
    { label: 'Contractor Program', icon: CTA_ICONS.contractor, href: '/contractor-program' },
];

export default function FooterCTA({
    bgImage = '/images/home-hero-bg.png',
    title = DEFAULT_TITLE,
    buttons = DEFAULT_BUTTONS,
}) {
    return (
        <section className="relative w-full overflow-hidden" aria-label="Get your free quote and design">
            {/* Background image — same as hero */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
            />
            {/* Gradient overlays — same as hero */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" aria-hidden="true" />

            {/* Content */}
            <div className="relative max-w-container mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-sans font-bold text-white tracking-tight leading-tight text-2xl md:text-3xl lg:text-[34px]">
                        {title}
                    </h2>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        {buttons.map((b) => (
                            <a
                                key={b.label}
                                href={b.href || '#'}
                                className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 font-semibold rounded-full transition-colors text-sm whitespace-nowrap ${
                                    b.primary
                                        ? 'bg-amber-400 hover:bg-amber-500 text-gray-900 shadow-lg shadow-amber-400/20'
                                        : 'bg-white hover:bg-white/90 text-gray-900'
                                }`}
                            >
                                {b.icon && (
                                    <Icon className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d={b.icon} />
                                    </Icon>
                                )}
                                {b.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
