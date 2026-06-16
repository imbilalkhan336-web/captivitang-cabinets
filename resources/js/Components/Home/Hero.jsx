import Icon from '@/Components/Home/Icon';
import ChoosePathCard from '@/Components/Home/ChoosePathCard';

const TRUST_BADGES = [
    {
        label: 'Nationwide',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />,
    },
    {
        label: 'Discounted',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />,
    },
    {
        label: '10 Brands',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
    },
];

function TrustBadges() {
    return (
        <div className="flex items-center gap-4 sm:gap-6">
            {TRUST_BADGES.map(({ label, icon }, i) => (
                <div key={label} className="flex items-center gap-4 sm:gap-6">
                    {i > 0 && <hr className="hidden sm:block w-px h-10 bg-white/20 border-0" />}
                    <div className="flex items-center gap-2 text-white/80">
                        <Icon className="w-8 h-8">{icon}</Icon>
                        <span className="text-sm whitespace-nowrap">{label}</span>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default function Hero({ bgImage = '/images/hero-bg.jpg' }) {
    return (
        <section className="relative min-h-[80vh] flex flex-col" aria-label="Hero">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
            />

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                {/* Main Hero Content */}
                <div className="flex-1 flex items-center">
                    <div className="w-full max-w-container mx-auto px-6 lg:px-8 py-12">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* Left Column - Text Content */}
                            <div className="max-w-xl lg:mt-16">
                                <h1 className="font-display text-4xl/[1.25] md:text-5xl/[1.25] lg:text-[3.25rem]/[1.25] font-medium text-white mb-6 tracking-tight">
                                    Custom Cabinets, Designed for You
                                </h1>

                                <p className="text-gray-300 text-base leading-relaxed mb-8 max-w-md">
                                    Free 3D design, contractor pricing, and nationwide delivery — built around your space.
                                </p>

                                {/* CTA Buttons */}
                                <div className="flex flex-wrap gap-3 mb-10">
                                    <button className="inline-flex items-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm">
                                        <Icon className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                        </Icon>
                                        Get Free 3D Design
                                    </button>
                                    <button className="inline-flex items-center gap-2 px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full border border-white/30 transition-colors backdrop-blur-sm text-sm">
                                        <Icon className="w-4 h-4">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </Icon>
                                        Talk to a Specialist
                                    </button>
                                </div>

                                <TrustBadges />
                            </div>

                            {/* Right Column - Choose Your Path Card */}
                            <ChoosePathCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
