import Icon from '@/Components/Home/Icon';

export default function FooterCTA({ bgImage = '/images/home-hero-bg.png' }) {
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
                        Let's choose a <span className="text-amber-400">route</span>
                    </h2>

                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a href="/design-service" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20 whitespace-nowrap">
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </Icon>
                            Get Free 3D Design
                        </a>
                        <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm whitespace-nowrap">
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </Icon>
                            Contractor Program
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
