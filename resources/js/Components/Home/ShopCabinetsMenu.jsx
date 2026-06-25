import { useState, useRef } from 'react';
import { usePage } from '@inertiajs/react';
import Icon from '@/Components/Home/Icon';
import { BRANDS, TYPES, STYLES, INCHES, DEPTHS, SHELVES, DRAWERS, finishImage, brandHref } from '@/Components/Home/shopCatalog';

const TABS = [
    { key: 'brand', label: 'By Brand' },
    { key: 'type', label: 'By Type' },
    { key: 'style', label: 'By Style' },
    { key: 'inch', label: 'By Inch' },
    { key: 'depth', label: 'By Depth' },
    { key: 'shelf', label: 'By Shelf' },
    { key: 'drawers', label: 'By Drawers' },
];

/* ---------- Contextual feature image (right rail, per tab) ---------- */

const FEATURES = {
    brand: { image: '/images/kichan-imgs/shop-by-brand.png', title: 'Shop by Brand', subtitle: 'Explore every cabinet maker we carry.', cta: 'View All Brands', href: '/cabinet-brands' },
    type: { image: '/images/kichan-imgs/gallery-02.png', title: 'Find your cabinet type', subtitle: 'Base, wall, tall & vanity — built to fit.', cta: 'Shop by Type', href: '#' },
    style: { image: '/images/kichan-imgs/gallery-12.png', title: 'Browse by Style', subtitle: 'Shaker, modern, traditional & more.', cta: 'View All Styles', href: '#' },
    inch: { image: '/images/kichan-imgs/gallery-04.png', title: 'Sized to your space', subtitle: 'Widths from 6" to 60" for a perfect fit.', cta: 'View All Sizes', href: '#' },
    depth: { image: '/images/kichan-imgs/gallery-06.png', title: 'Every depth covered', subtitle: 'Base & wall depths for any layout.', cta: 'View All Depths', href: '#' },
    shelf: { image: '/images/kichan-imgs/gallery-08.png', title: 'Storage that works', subtitle: 'Pick the shelf count you need.', cta: 'View All', href: '#' },
    drawers: { image: '/images/kichan-imgs/gallery-10.png', title: 'Drawers for every job', subtitle: 'From single to multi-drawer bases.', cta: 'View All', href: '#' },
};

function FeaturePanel({ image, title, subtitle, cta, href }) {
    return (
        <a href={href} className="group/img relative block h-full min-h-[300px] rounded-xl overflow-hidden">
            <img
                src={image}
                alt={title}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" aria-hidden="true" />
            <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-white font-display text-lg font-bold leading-tight">{title}</p>
                <p className="mt-1 text-white/80 text-[13px] leading-snug">{subtitle}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-400 group-hover/img:bg-amber-500 text-gray-900 text-[13px] font-semibold transition-colors">
                    {cta}
                    <Icon className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></Icon>
                </span>
            </div>
        </a>
    );
}

// Brands that have dedicated per-line landing pages (e.g. /brands/fabuwood/illume).
const LINE_PAGE_BRANDS = { fabuwood: ['allure', 'illume', 'ovela'] };

// Normalize a series name to match the anchor ids used on the Brand page.
const norm = (s) => s.replace(/[^a-z0-9]/gi, '').toLowerCase();

// URL for a brand line's landing page, or null when no dedicated page exists.
function lineHref(brand, line) {
    const valid = LINE_PAGE_BRANDS[brand.slug];
    if (valid && line && valid.includes(line.name.toLowerCase())) {
        return `${brandHref(brand)}/${line.name.toLowerCase()}`;
    }
    return null;
}

/* ---------- Small pieces ---------- */

function ColumnItem({ label, active, onMouseEnter, hasChildren, href }) {
    const cls = `group/i w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-[15px] text-left transition-colors ${
        active ? 'bg-amber-50 text-[#374151] font-semibold' : 'text-[#374151]/70 hover:bg-[#374151]/[0.04] hover:text-[#374151]'
    }`;
    const inner = (
        <>
            <span className="truncate">{label}</span>
            {hasChildren && (
                <Icon className={`w-4 h-4 flex-shrink-0 transition-all ${active ? 'text-amber-500 translate-x-0' : 'text-[#374151]/20 group-hover/i:text-[#374151]/40'}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </Icon>
            )}
        </>
    );

    // When an href is provided the row navigates on click while still
    // driving the hover-preview via onMouseEnter.
    return href ? (
        <a href={href} onMouseEnter={onMouseEnter} className={cls}>{inner}</a>
    ) : (
        <button onMouseEnter={onMouseEnter} className={cls}>{inner}</button>
    );
}

function ColTitle({ children }) {
    return <p className="px-3 mb-2.5 text-[13px] font-bold text-[#374151]">{children}</p>;
}

/* ---------- By Brand view ---------- */

function ByBrand() {
    const [brandIdx, setBrandIdx] = useState(0);
    const [lineIdx, setLineIdx] = useState(0);
    const [seriesIdx, setSeriesIdx] = useState(0);

    const shopFinishes = usePage().props.shopFinishes || {};
    // Overlay auto-scanned folder images onto brands that have no static lines.
    const brands = BRANDS.map((b) => {
        if (b.lines && b.lines.length) return b;
        const fin = shopFinishes[b.slug];
        return fin && fin.length ? { ...b, lines: [{ name: 'Collections', series: fin }] } : b;
    });

    const brand = brands[brandIdx];
    const lines = brand.lines || [];
    const line = lines[lineIdx];
    const series = (line && line.series) || [];
    const activeSeries = series[seriesIdx];
    const finishes = activeSeries
        ? (activeSeries.images
            ? activeSeries.images.map((img, i) => ({ key: img, img, label: `${activeSeries.name} ${i + 1}` }))
            : (activeSeries.collections || []).map((c) => ({ key: c, img: finishImage(activeSeries.name, c), label: `${activeSeries.name} ${c}` })))
        : [];

    const selectBrand = (i) => { setBrandIdx(i); setLineIdx(0); setSeriesIdx(0); };
    const selectLine = (i) => { setLineIdx(i); setSeriesIdx(0); };

    const lineUrl = lineHref(brand, line);
    const seriesUrl = (s) => (lineUrl ? `${lineUrl}#series-${norm(`${line.name} ${s.name}`)}` : undefined);

    return (
        <div className="grid grid-cols-[180px_180px_170px_1fr] divide-x divide-[#374151]/8 h-full">
            {/* Brands */}
            <div className="pr-3 overflow-y-auto">
                <ColTitle>Brands</ColTitle>
                {brands.map((b, i) => (
                    <ColumnItem key={b.name} label={b.name} active={i === brandIdx} hasChildren={(b.lines || []).length > 0} href={brandHref(b)} onMouseEnter={() => selectBrand(i)} />
                ))}
                <a href="/cabinet-brands" className="mt-1 flex items-center gap-1.5 px-3 py-2 text-sm text-amber-600 hover:text-amber-700 font-semibold">
                    View All Brands
                    <Icon className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></Icon>
                </a>
            </div>

            {/* Lines */}
            <div className="px-3 overflow-y-auto">
                <ColTitle>{brand.name} Series</ColTitle>
                {lines.length > 0 ? (
                    lines.map((l, i) => (
                        <ColumnItem key={l.name} label={l.name} active={i === lineIdx} hasChildren={(l.series || []).length > 0} href={lineHref(brand, l)} onMouseEnter={() => selectLine(i)} />
                    ))
                ) : (
                    <a href={brandHref(brand)} className="block px-3 py-2 text-sm text-amber-600 hover:text-amber-700 font-semibold">Browse {brand.name} →</a>
                )}
            </div>

            {/* Series */}
            <div className="px-3 overflow-y-auto">
                <ColTitle>{line ? `${line.name} Styles` : 'Styles'}</ColTitle>
                {series.length > 0 ? (
                    series.map((s, i) => (
                        <ColumnItem key={s.name} label={s.name} active={i === seriesIdx} hasChildren href={seriesUrl(s)} onMouseEnter={() => setSeriesIdx(i)} />
                    ))
                ) : (
                    <p className="px-3 py-2 text-xs text-[#374151]/40">Coming soon</p>
                )}
            </div>

            {/* Collections / finishes */}
            <div className="pl-4 flex flex-col min-h-0">
                {activeSeries ? (
                    <>
                        <ColTitle>{activeSeries.name} Finishes</ColTitle>
                        {finishes.length ? (
                            <div className="grid grid-cols-6 gap-2.5 max-h-[480px] overflow-y-auto pr-1">
                                {finishes.map((f) => (
                                    <a key={f.key} href={seriesUrl(activeSeries) || '#'} className="group/f block">
                                        <div className="aspect-[3/4] rounded-md overflow-hidden bg-[#374151]/5 ring-1 ring-[#374151]/10 p-1">
                                            <img
                                                src={f.img}
                                                alt={f.label}
                                                loading="lazy"
                                                className="w-full h-full object-contain transition-transform duration-300 group-hover/f:scale-105"
                                            />
                                        </div>
                                        <p className="mt-1.5 text-[11px] text-gray-900 font-medium truncate">{f.label}</p>
                                    </a>
                                ))}
                            </div>
                        ) : (
                            <p className="px-1 py-3 text-sm text-[#374151]/40">Images coming soon</p>
                        )}
                        <div className="mt-auto pt-4 flex justify-end">
                            <a href={lineUrl || '#'} className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold transition-colors">
                                View All {activeSeries.name}
                                <Icon className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></Icon>
                            </a>
                        </div>
                    </>
                ) : (
                    <div className="h-full flex items-center justify-center text-sm text-[#374151]/40">
                        Select a series to view finishes
                    </div>
                )}
            </div>
        </div>
    );
}

/* ---------- By Type view ---------- */

function ByType() {
    const [typeIdx, setTypeIdx] = useState(0);
    const type = TYPES[typeIdx];
    const subs = type.subs || [];

    return (
        <div className="grid grid-cols-[180px_1fr] divide-x divide-[#374151]/8 h-full">
            {/* Type list */}
            <div className="pr-3 overflow-y-auto">
                <ColTitle>Cabinet Types</ColTitle>
                {TYPES.map((t, i) => (
                    <ColumnItem key={t.name} label={t.name} active={i === typeIdx} hasChildren={t.subs.length > 0} onMouseEnter={() => setTypeIdx(i)} />
                ))}
            </div>

            {/* Subcategories */}
            <div className="pl-4 flex flex-col min-h-0">
                <ColTitle>{type.name}</ColTitle>
                {subs.length > 0 ? (
                    <>
                        <div className="grid grid-cols-3 gap-x-3 gap-y-0.5 flex-1 min-h-0 overflow-y-auto pr-1 content-start">
                            {subs.map((s) => (
                                <a key={s.name} href="#" className="block px-3 py-2 rounded-md text-sm text-gray-900 hover:bg-[#374151]/[0.04] hover:text-[#374151] transition-colors truncate">
                                    {s.name}
                                </a>
                            ))}
                        </div>
                    </>
                ) : (
                    <p className="px-3 py-2 text-sm text-[#374151]/40">Coming soon</p>
                )}
            </div>
        </div>
    );
}

/* ---------- By Style view (circular door-style tiles) ---------- */

function ByStyle() {
    return (
        <div className="flex flex-col h-full">
            <ColTitle>Browse by Style</ColTitle>
            <div className="flex flex-wrap gap-x-6 gap-y-6 flex-1 min-h-0 overflow-y-auto pr-1 pt-1 content-start">
                {STYLES.map((s) => (
                    <a key={s.name} href="#" className="group/f flex flex-col items-center gap-2.5 w-[128px] text-center">
                        <div className="w-[120px] h-[120px] rounded-full bg-white border border-[#374151]/15 shadow-[0_8px_20px_rgba(55,65,81,0.10)] flex items-center justify-center overflow-hidden transition-all group-hover/f:-translate-y-0.5 group-hover/f:border-amber-400 group-hover/f:shadow-[0_12px_26px_rgba(55,65,81,0.16)]">
                            <img src={s.image} alt={`${s.name} cabinet door`} loading="lazy" className="w-full h-full object-cover transition-transform duration-300 group-hover/f:scale-105" />
                        </div>
                        <span className="text-sm text-[#374151]/75 leading-tight group-hover/f:text-[#374151]">{s.name}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

/* ---------- Generic facet list view (Inch / Material / Depth / Shelf / Drawers) ---------- */

// Cabinet illustration for a "<n> Inch Cabinets" facet, keyed by the number.
function inchImage(item) {
    const m = item.match(/^(\d+)/);
    return m ? `/images/header-icon/shop-by-inches/${m[1]}.png` : null;
}

// Cabinet illustration for a "<n> Deep Base/Wall Cabinets" facet.
function depthImage(item) {
    const m = item.match(/^(\d+)\s+Deep\s+(Base|Wall)/i);
    return m ? `/images/header-icon/shop-by-depth/${m[1]}-${m[2].toLowerCase()}.png` : null;
}

// Cabinet illustration for a "<n> Shelf Cabinets" facet, keyed by shelf count.
function shelfImage(item) {
    const m = item.match(/^(\d+)/);
    return m ? `/images/header-icon/shop-by-shelf/${m[1]}.png` : null;
}

// Cabinet illustration for a "<n> Drawer Cabinets" facet, keyed by drawer count.
function drawerImage(item) {
    const m = item.match(/^(\d+)/);
    return m ? `/images/header-icon/shop-by-drawers/${m[1]}.png` : null;
}

// Derive the short badge shown inside the circle + the label below it.
function facetCircle(item) {
    const label = item.replace(/\s*Cabinets$/i, '');
    const num = item.match(/^(\d+)\s+(Inch|Deep)?/i);
    if (num && num[1]) {
        const unit = (num[2] || '').toLowerCase();
        const badge = unit === 'inch' || unit === 'deep' ? `${num[1]}"` : num[1];
        return { badge, numeric: true, label };
    }
    return { badge: label.split(' ')[0], numeric: false, label };
}

function FacetList({ title, items, imageSrc }) {
    return (
        <div className="flex flex-col h-full">
            <ColTitle>{title}</ColTitle>
            <div className="flex flex-wrap gap-x-6 gap-y-6 flex-1 min-h-0 overflow-y-auto pr-1 pt-1 content-start">
                {items.map((item) => {
                    const { badge, numeric, label } = facetCircle(item);
                    const img = imageSrc ? imageSrc(item) : null;
                    return (
                        <a key={item} href="#" className="group/f flex flex-col items-center gap-2.5 w-[128px] text-center">
                            <div className="w-[120px] h-[120px] rounded-full bg-white border border-[#374151]/15 shadow-[0_8px_20px_rgba(55,65,81,0.10)] flex items-center justify-center overflow-hidden transition-all group-hover/f:-translate-y-0.5 group-hover/f:border-amber-400 group-hover/f:shadow-[0_12px_26px_rgba(55,65,81,0.16)]">
                                {img ? (
                                    <img src={img} alt={label} loading="lazy" className="w-full h-full object-contain p-2.5 transition-transform duration-300 group-hover/f:scale-105" />
                                ) : (
                                    <span className={`font-bold text-[#374151] ${numeric ? 'text-3xl' : 'text-base leading-tight px-2'}`}>{badge}</span>
                                )}
                            </div>
                            <span className="text-sm text-[#374151]/75 leading-tight group-hover/f:text-[#374151]">{label}</span>
                        </a>
                    );
                })}
            </div>
        </div>
    );
}

/* ---------- Main ---------- */

export default function ShopCabinetsMenu() {
    const [open, setOpen] = useState(false);
    const [tab, setTab] = useState('brand');
    const closeTimer = useRef(null);

    const openMenu = () => { clearTimeout(closeTimer.current); setOpen(true); };
    const scheduleClose = () => { closeTimer.current = setTimeout(() => setOpen(false), 140); };

    return (
        <div className="inline-flex" onMouseEnter={openMenu} onMouseLeave={scheduleClose}>
            {/* Trigger */}
            <button
                className={`inline-flex items-center gap-1 text-[15px] font-semibold leading-5 px-2 py-1 transition-colors ${open ? 'text-amber-500' : 'text-gray-800 hover:text-amber-500'}`}
                aria-expanded={open}
            >
                Shop Cabinets
                <Icon className={`w-3.5 h-3.5 transition-transform ${open ? 'rotate-180' : ''}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </Icon>
            </button>

            {/* Mega panel — spans the navbar width (nav is relative) */}
            <div
                className={`absolute left-0 right-0 top-full pt-3 transition-all duration-200 ${
                    open ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-1'
                }`}
                onMouseEnter={openMenu}
                onMouseLeave={scheduleClose}
            >
              <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="rounded-2xl bg-white shadow-2xl ring-1 ring-[#374151]/10 overflow-hidden">
                    {/* Tabs */}
                    <div className="flex items-center gap-1 px-5 pt-4 border-b border-[#374151]/8">
                        {TABS.map((t) => (
                            <button
                                key={t.key}
                                onMouseEnter={() => setTab(t.key)}
                                onClick={() => setTab(t.key)}
                                className={`relative px-4 py-2.5 text-sm font-semibold transition-colors ${
                                    tab === t.key ? 'text-[#374151]' : 'text-[#374151]/55 hover:text-[#374151]'
                                }`}
                            >
                                {t.label}
                                {tab === t.key && <span className="absolute left-3 right-3 -bottom-px h-0.5 bg-amber-500 rounded-full" />}
                            </button>
                        ))}
                    </div>

                    {/* Panel body — tab content (left) + contextual feature image (right).
                        Fixed height so the right image never elongates; tall grids scroll inside. */}
                    <div className="grid grid-cols-[1fr_380px] divide-x divide-[#374151]/8 h-[460px]">
                        <div className="p-5 min-w-0 overflow-hidden">
                            {tab === 'brand' && <ByBrand />}
                            {tab === 'type' && <ByType />}
                            {tab === 'style' && <ByStyle />}
                            {tab === 'inch' && <FacetList title="Shop by Inch" items={INCHES} imageSrc={inchImage} />}
                            {tab === 'depth' && <FacetList title="Shop by Depth" items={DEPTHS} imageSrc={depthImage} />}
                            {tab === 'shelf' && <FacetList title="Number of Shelves" items={SHELVES} imageSrc={shelfImage} />}
                            {tab === 'drawers' && <FacetList title="Number of Drawers" items={DRAWERS} imageSrc={drawerImage} />}
                        </div>
                        <div className="p-5">
                            <FeaturePanel {...FEATURES[tab]} />
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}
