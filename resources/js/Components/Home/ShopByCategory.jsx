import Icon from '@/Components/Home/Icon';

function CircleOption({ inner, label, href = '#' }) {
    return (
        <a href={href} className="group flex flex-col items-center gap-3 text-center">
            <div className="w-[88px] h-[88px] rounded-full bg-white border border-[#14304E]/20 shadow-[0_10px_24px_rgba(20,48,78,0.12)] p-2 flex items-center justify-center transition-all group-hover:-translate-y-0.5 group-hover:border-[#14304E]/40">
                <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-black/5 flex items-center justify-center">
                    {inner}
                </div>
            </div>
            <span className="text-sm text-[#14304E] font-medium">{label}</span>
        </a>
    );
}

export default function ShopByCategory({
    title,
    description,
    items,
    imageSrc,
    imageAlt = '',
    reverse = false,
    bgClass = 'bg-white',
}) {
    return (
        <section className={`${bgClass} py-10 lg:py-12`}>
            <div className="max-w-container mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-center">
                    {/* Image */}
                    <div className={reverse ? 'lg:order-2' : 'lg:order-1'}>
                        <img
                            src={imageSrc}
                            alt={imageAlt}
                            className="w-full aspect-[4/3] object-cover rounded-2xl shadow-lg"
                        />
                    </div>

                    {/* Content */}
                    <div className={reverse ? 'lg:order-1' : 'lg:order-2'}>
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#14304E] tracking-tight">
                            {title}
                        </h2>
                        <p className="mt-3 text-[#14304E]/75 text-base leading-relaxed max-w-xl">
                            {description}
                        </p>

                        <div className="mt-4 h-px bg-[#14304E]/15" aria-hidden="true" />

                        <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-x-3 gap-y-5">
                            {items.map(({ label, inner, href }) => (
                                <CircleOption key={label} label={label} inner={inner} href={href} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ---------- Data ---------- */

const COLOR_SWATCH = (hex, border = false) => (
    <div
        className={`w-full h-full ${border ? 'ring-2 ring-inset ring-gray-200' : ''}`}
        style={{ background: hex }}
    />
);

export const COLOR_ITEMS = [
    { label: 'White', inner: COLOR_SWATCH('#F5F3EE', true) },
    { label: 'Grey', inner: COLOR_SWATCH('#7A7C7E') },
    { label: 'Brown', inner: COLOR_SWATCH('#8B5E3C') },
    { label: 'Blue', inner: COLOR_SWATCH('#22466B') },
    { label: 'Beige', inner: COLOR_SWATCH('#C9B89A') },
    { label: 'Green', inner: COLOR_SWATCH('#2E4A3A') },
    { label: 'Black', inner: COLOR_SWATCH('#161616') },
    { label: 'Red', inner: COLOR_SWATCH('#A14D2A') },
    {
        label: 'View All',
        inner: (
            <span className="flex items-center justify-center w-full h-full text-[#14304E]">
                <Icon className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </Icon>
            </span>
        ),
    },
];

const BRAND_LOGO = (src, alt) => (
    <img src={src} alt={alt} className="w-full h-full object-contain p-1.5" />
);

export const BRAND_ITEMS = [
    { label: 'Fabuwood', inner: BRAND_LOGO('/images/brand-img/Fabuwood%20Cabinets.png', 'Fabuwood') },
    { label: 'J&K', inner: BRAND_LOGO('/images/brand-img/jk-logo.png', 'J&K') },
    { label: 'Modernform', inner: BRAND_LOGO('/images/brand-img/modernform-logo.png', 'Modernform') },
    { label: 'Diamond', inner: BRAND_LOGO('/images/brand-img/diamond-logo.jpg', 'Diamond') },
    { label: 'Decora', inner: BRAND_LOGO('/images/brand-img/decora-cabinet.jpg', 'Decora') },
    { label: 'Mantra', inner: BRAND_LOGO('/images/brand-img/mantra-logo.png', 'Mantra') },
    { label: 'Tribeca', inner: BRAND_LOGO('/images/brand-img/tribeca-logo.png', 'Tribeca') },
    { label: 'KCD', inner: BRAND_LOGO('/images/brand-img/kcd-logo.svg', 'KCD') },
    { label: 'USCD', inner: BRAND_LOGO('/images/brand-img/uscd-logo.jpg', 'USCD') },
    {
        label: 'View All',
        inner: (
            <span className="flex items-center justify-center w-full h-full text-[#14304E]">
                <Icon className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </Icon>
            </span>
        ),
    },
];

const TYPE_ICON = (svgChildren) => (
    <span className="flex items-center justify-center w-full h-full text-[#14304E]">
        <Icon className="w-7 h-7" strokeWidth={1.6}>
            {svgChildren}
        </Icon>
    </span>
);

export const TYPE_ITEMS = [
    {
        label: 'Shaker',
        inner: TYPE_ICON(
            <>
                <rect x="4" y="4" width="16" height="16" rx="1.5" />
                <rect x="7" y="7" width="10" height="10" rx="0.8" />
            </>
        ),
    },
    {
        label: 'Flat Panel',
        inner: TYPE_ICON(<rect x="4" y="4" width="16" height="16" rx="1.5" />),
    },
    {
        label: 'Slab',
        inner: TYPE_ICON(
            <>
                <rect x="4" y="4" width="16" height="16" rx="1.5" />
                <circle cx="17" cy="12" r="0.6" fill="currentColor" />
            </>
        ),
    },
    {
        label: 'Inset',
        inner: TYPE_ICON(
            <>
                <rect x="3" y="3" width="18" height="18" rx="1.5" />
                <rect x="6" y="6" width="12" height="12" rx="0.8" />
                <rect x="9" y="9" width="6" height="6" rx="0.5" />
            </>
        ),
    },
    {
        label: 'Glass Front',
        inner: TYPE_ICON(
            <>
                <rect x="4" y="4" width="16" height="16" rx="1.5" />
                <path d="M4 4l16 16M20 4L4 20" strokeWidth={0.8} opacity="0.5" />
            </>
        ),
    },
    {
        label: 'Beadboard',
        inner: TYPE_ICON(
            <>
                <rect x="4" y="4" width="16" height="16" rx="1.5" />
                <path d="M8 4v16M12 4v16M16 4v16" strokeWidth={0.8} />
            </>
        ),
    },
    {
        label: 'Open Shelf',
        inner: TYPE_ICON(
            <>
                <path d="M4 7h16M4 13h16M4 19h16" />
            </>
        ),
    },
    {
        label: 'Distressed',
        inner: TYPE_ICON(
            <>
                <rect x="4" y="4" width="16" height="16" rx="1.5" />
                <path d="M7 8c2 1 4-1 6 0M7 12c2-1 4 1 6 0M7 16c2 1 4-1 6 0" strokeWidth={0.9} />
            </>
        ),
    },
    {
        label: 'View All',
        inner: (
            <span className="flex items-center justify-center w-full h-full text-[#14304E]">
                <Icon className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </Icon>
            </span>
        ),
    },
];
