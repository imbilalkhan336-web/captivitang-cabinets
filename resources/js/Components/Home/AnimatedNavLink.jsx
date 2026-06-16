import { Link } from '@inertiajs/react';

/**
 * Header nav link with a vertical "roll up" hover effect.
 * Base text is white over the transparent header and dark once scrolled;
 * both states roll up to amber on hover.
 * Uses Inertia <Link> for internal routes, plain <a> for external/hash links.
 */
export default function AnimatedNavLink({ label, href = '#', scrolled = false }) {
    const isInternal = href.startsWith('/') && !href.startsWith('//');
    const Tag = isInternal ? Link : 'a';

    return (
        <Tag href={href} className="group relative inline-block h-5 overflow-hidden text-[15px] leading-5 px-2">
            <span className="block transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                <span className={`block ${scrolled ? 'text-gray-800' : 'text-white/80'}`}>{label}</span>
                <span className="block text-amber-400">{label}</span>
            </span>
        </Tag>
    );
}
