import Icon from '@/Components/Home/Icon';

function CircleOption({ inner, label, href = '#', large = false }) {
    const size = large ? 'w-[140px] h-[140px]' : 'w-[88px] h-[88px]';
    return (
        <a href={href} className="group flex flex-col items-center gap-3 text-center">
            <div className={`${size} rounded-full bg-white border border-[#374151]/20 shadow-[0_10px_24px_rgba(55,65,81,0.12)] p-2 flex items-center justify-center transition-all group-hover:-translate-y-0.5 group-hover:border-[#374151]/40`}>
                <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-black/5 flex items-center justify-center">
                    {inner}
                </div>
            </div>
            <span className={`${large ? 'text-base' : 'text-sm'} text-[#374151] font-medium`}>{label}</span>
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
    centered = false,
    largeItems = false,
}) {
    if (centered) {
        return (
            <section className={`${bgClass} py-10 lg:py-12`}>
                <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 text-center">
                    <h2 className="font-display text-2xl md:text-3xl font-bold text-[#374151] tracking-tight">
                        {title}
                    </h2>
                    <p className="mt-3 text-[#374151]/75 text-base leading-relaxed max-w-2xl mx-auto">
                        {description}
                    </p>

                    <div className="mt-10 flex flex-wrap items-start justify-center gap-x-10 gap-y-8">
                        {items.map(({ label, inner, href }) => (
                            <CircleOption key={label} label={label} inner={inner} href={href} large />
                        ))}
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className={`${bgClass} py-10 lg:py-12`}>
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
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
                        <h2 className="font-display text-2xl md:text-3xl font-bold text-[#374151] tracking-tight">
                            {title}
                        </h2>
                        <p className="mt-3 text-[#374151]/75 text-base leading-relaxed max-w-xl">
                            {description}
                        </p>

                        <div className="mt-4 h-px bg-[#374151]/15" aria-hidden="true" />

                        <div className={`mt-5 grid gap-x-3 gap-y-6 ${largeItems ? 'grid-cols-2 sm:grid-cols-4' : 'grid-cols-3 sm:grid-cols-4 lg:grid-cols-5'}`}>
                            {items.map(({ label, inner, href }) => (
                                <CircleOption key={label} label={label} inner={inner} href={href} large={largeItems} />
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
            <span className="flex items-center justify-center w-full h-full text-[#374151]">
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
            <span className="flex items-center justify-center w-full h-full text-[#374151]">
                <Icon className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </Icon>
            </span>
        ),
    },
];

const TYPE_ICON = (src, alt) => (
    <img src={src} alt={alt} className="w-full h-full object-contain p-3" />
);

export const TYPE_ITEMS = [
    {
        label: 'Wall Cabinets',
        inner: TYPE_ICON('/images/cabinets-typ-icon/wall-cabinets.png', 'Wall cabinets'),
    },
    {
        label: 'Base Cabinets',
        inner: TYPE_ICON('/images/cabinets-typ-icon/base-cabinets.png', 'Base cabinets'),
    },
    {
        label: 'Tall Cabinets',
        inner: TYPE_ICON('/images/cabinets-typ-icon/tall-cabinets.png', 'Tall cabinets'),
    },
    {
        label: 'Vanity Cabinets',
        inner: TYPE_ICON('/images/cabinets-typ-icon/vanity-cabinets.png', 'Vanity cabinets'),
    },
];
