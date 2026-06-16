import { useEffect, useState } from 'react';
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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <nav
            className={`fixed inset-x-0 z-50 px-6 lg:px-8 py-2 transition-all duration-300 ${
                scrolled ? 'top-0 bg-white shadow-lg' : 'top-8 bg-transparent'
            }`}
            aria-label="Primary"
        ><div className="max-w-container mx-auto">
            <div className="flex items-center justify-between">
                {/* Logo — white over the transparent header, black once scrolled */}
                <a href="/" className="flex items-center" aria-label="Captivating Cabinets home">
                    <img
                        src={scrolled ? '/images/black-logo.png' : '/images/white-logo.png'}
                        alt="Captivating Cabinets"
                        className="h-[64px] w-auto"
                    />
                </a>

                <div className="flex items-center gap-6 ml-auto">
                    {/* Nav Links */}
                    <div className="hidden lg:flex items-center gap-0">
                        {NAV_LINKS.map(({ label, href }) => (
                            <AnimatedNavLink key={label} label={label} href={href} scrolled={scrolled} />
                        ))}
                    </div>

                    <div className="flex items-center gap-3">
                        {/* Cart */}
                        <a
                            href="#"
                            aria-label="Cart"
                            className={`relative inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors ${
                                scrolled ? 'text-gray-900 hover:bg-gray-900/5' : 'text-white/85 hover:text-white hover:bg-white/10'
                            }`}
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
                        <a href="#" className="hidden md:inline-flex px-5 py-2.5 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors">
                            Get a Quote
                        </a>

                        {/* Mobile Menu Button */}
                        <button className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`} aria-label="Open menu">
                            <Icon className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </Icon>
                        </button>
                    </div>
                </div>
            </div>
            </div>
        </nav>
    );
}
