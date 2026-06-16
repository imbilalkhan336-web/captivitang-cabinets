import Icon from '@/Components/Home/Icon';
import HeroGoogleBadge from '@/Components/Home/HeroGoogleBadge';

const TRUST_BADGES = [
    {
        label: 'Nationwide Delivery',
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1m-6-1a1 1 0 001 1h1M5 17a2 2 0 104 0m-4 0a2 2 0 114 0m6 0a2 2 0 104 0m-4 0a2 2 0 114 0" />,
    },
    {
        label: '9 Premium Brands',
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

export default function Home2Hero({ bgImage = '/images/hero-bg-2.png' }) {
    return (
        <section className="relative min-h-[72vh] flex flex-col overflow-hidden pt-20" aria-label="Hero">
            {/* Full-width background image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${bgImage})` }}
                aria-hidden="true"
            />

            {/* Gradient overlay */}
            <div
                className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10"
                aria-hidden="true"
            />
            <div
                className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15"
                aria-hidden="true"
            />

            {/* Content */}
            <div className="relative z-10 flex-1 flex flex-col">
                <div className="flex-1 flex items-center">
                    <div className="w-full max-w-container mx-auto py-10 lg:py-12">
                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-end">
                            {/* LEFT — Heading, script, description */}
                            <div className="lg:col-span-8">
                                {/* Heading */}
                                <h1 className="font-sans font-normal text-white tracking-tight text-3xl/[3.5rem] md:text-4xl/[3.5rem] lg:text-[56px]/[3.5rem]">
                                    Custom Cabinets,
                                    <br />
                                    <span className="text-amber-400 font-normal">Designed</span> for You
                                </h1>

                                {/* Script tagline */}
                                <p className="font-great-vibes text-amber-400 text-3xl md:text-4xl lg:text-5xl leading-[1.3] mt-6">
                                    Style Without Limits
                                </p>

                                {/* Description */}
                                <p className="mt-3 text-white/85 text-lg leading-relaxed max-w-xl">
                                    Premium kitchen cabinetry with complimentary 3D design services, professional contractor pricing, and seamless delivery—transforming your vision into reality.
                                </p>

                                {/* Trust Badges */}
                                <div className="mt-8">
                                    <TrustBadges />
                                </div>

                                {/* Google reviews trust badge */}
                                <div className="mt-6">
                                    <HeroGoogleBadge />
                                </div>
                            </div>

                            {/* RIGHT — CTA Buttons */}
                            <div className="lg:col-span-4 flex flex-wrap items-center gap-3 lg:justify-end">
                                <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20 whitespace-nowrap">
                                    <Icon className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                    </Icon>
                                    Get Free 3D Design
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm whitespace-nowrap">
                                    <Icon className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </Icon>
                                    Talk to a Specialist
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
