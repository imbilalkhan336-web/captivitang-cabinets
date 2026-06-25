import { useEffect, useState } from 'react';

export default function StickyCTABar() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            // Show once the user scrolls past the hero, hide near the very bottom (footer area)
            const y = window.scrollY;
            const nearBottom =
                window.innerHeight + y >= document.documentElement.scrollHeight - 220;
            setVisible(y > 600 && !nearBottom);
        };
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, []);

    return (
        <div
            className={`fixed inset-x-0 bottom-0 z-[90] transition-transform duration-500 ease-out ${
                visible ? 'translate-y-0' : 'translate-y-full'
            }`}
            aria-hidden={!visible}
        >
            <div className="bg-white/60 backdrop-blur-xl border-t border-white/60 text-[#374151] shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
                <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-wrap items-center justify-center md:justify-between gap-x-6 gap-y-3">
                    <p className="hidden md:block font-display text-base lg:text-lg font-semibold tracking-tight">
                        Not sure where to start? <span className="text-amber-600">Choose your direction.</span>
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 md:ml-auto">
                        <a
                            href="#"
                            className="inline-flex items-center px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full border border-[#374151]/25 hover:border-[#374151]/60 hover:bg-[#374151]/5 text-[#374151] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                        >
                            Browse Cabinets
                        </a>
                        <a
                            href="/design-service"
                            className="inline-flex items-center px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-gray-900 text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                        >
                            Free 3D Design
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#374151]/10 hover:bg-[#374151]/20 text-[#374151] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap"
                        >
                            Contractor Program
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
