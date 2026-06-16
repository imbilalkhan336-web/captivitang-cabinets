import { useState } from 'react';
import Icon from '@/Components/Home/Icon';
import AnimatedNavLink from '@/Components/Home/AnimatedNavLink';

const NAV_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Brands', href: '#' },
    { label: 'Affirm Financing', href: '#' },
    { label: 'Contractor Program', href: '#' },
    { label: 'Testimonials', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Specbooks', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav
            className="sticky top-0 z-50 py-2 bg-white shadow-lg"
            aria-label="Primary"
        ><div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
            <div className="flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center" aria-label="Captivating Cabinets home">
                    <img
                        src="/images/captivating-cabinets.svg"
                        alt="Captivating Cabinets"
                        className="h-9 sm:h-[44px] w-auto"
                    />
                </a>

                <div className="flex items-center gap-4 lg:gap-6 ml-auto">
                    {/* Nav Links (desktop) */}
                    <div className="hidden lg:flex items-center gap-0">
                        {NAV_LINKS.map(({ label, href }) => (
                            <AnimatedNavLink key={label} label={label} href={href} scrolled={true} />
                        ))}
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Cart */}
                        <a
                            href="#"
                            aria-label="Cart"
                            className="relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors text-gray-900 hover:bg-gray-900/5"
                        >
                            <Icon>
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-1.6 3.2A1 1 0 006.3 18H19" />
                                <circle cx="9" cy="20" r="1.5" fill="currentColor" />
                                <circle cx="18" cy="20" r="1.5" fill="currentColor" />
                            </Icon>
                            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 rounded-full bg-amber-400 text-gray-900 text-[10px] font-bold flex items-center justify-center">
                                0
                            </span>
                        </a>

                        {/* CTA */}
                        <a href="#" className="hidden md:inline-flex px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors whitespace-nowrap">
                            Free 3D Design
                        </a>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen((o) => !o)}
                            className="lg:hidden text-gray-900 inline-flex items-center justify-center w-10 h-10"
                            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                            aria-expanded={menuOpen}
                        >
                            <Icon className="w-6 h-6">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </Icon>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu panel */}
            {menuOpen && (
                <div className="lg:hidden mt-2 pt-3 border-t border-gray-900/10">
                    <div className="flex flex-col">
                        {NAV_LINKS.map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                onClick={() => setMenuOpen(false)}
                                className="py-2.5 text-gray-800 hover:text-amber-600 text-[15px] font-medium transition-colors"
                            >
                                {label}
                            </a>
                        ))}
                        <a
                            href="#"
                            onClick={() => setMenuOpen(false)}
                            className="mt-3 mb-1 inline-flex items-center justify-center px-5 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors"
                        >
                            Free 3D Design
                        </a>
                    </div>
                </div>
            )}
            </div>
        </nav>
    );
}
