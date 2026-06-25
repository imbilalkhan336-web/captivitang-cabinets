import { useState, useRef } from 'react';
import Icon from '@/Components/Home/Icon';
import { BRANDS } from '@/Components/Home/shopCatalog';

/* ---------- Circular brand option (matches the home "Shop by Brand" style) ---------- */

function BrandCircle({ brand }) {
    return (
        <a href="/cabinet-brands" className="group/b flex flex-col items-center gap-2.5 text-center">
            <div className="w-[96px] h-[96px] rounded-full bg-white border border-[#374151]/20 shadow-[0_10px_24px_rgba(55,65,81,0.12)] p-2 flex items-center justify-center transition-all group-hover/b:-translate-y-0.5 group-hover/b:border-amber-400 group-hover/b:shadow-[0_14px_28px_rgba(55,65,81,0.18)]">
                <div className="w-full h-full rounded-full overflow-hidden ring-1 ring-black/5 flex items-center justify-center">
                    <img
                        src={brand.logo}
                        alt={`${brand.name} cabinets`}
                        loading="lazy"
                        className="w-full h-full object-contain p-1.5 transition-transform duration-300 group-hover/b:scale-105"
                    />
                </div>
            </div>
            <span className="text-sm text-[#374151] font-medium group-hover/b:text-amber-600 transition-colors">{brand.name}</span>
        </a>
    );
}

/* ---------- Main ---------- */

export default function OurBrandsMenu() {
    const [open, setOpen] = useState(false);
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
                Our Brands
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
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-[#374151]/8">
                        <div>
                            <p className="text-[13px] font-bold text-[#374151]">Our Brands</p>
                            <p className="text-[12px] text-[#374151]/55 mt-0.5">Shop trusted cabinetry makers we carry</p>
                        </div>
                        <a href="/cabinet-brands" className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-600 hover:text-amber-700 transition-colors">
                            View All Brands
                            <Icon className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></Icon>
                        </a>
                    </div>

                    {/* Body — circular brand grid (left) + feature image (right) */}
                    <div className="grid grid-cols-[1fr_300px] divide-x divide-[#374151]/8">
                        {/* Circular brand grid */}
                        <div className="p-6">
                            <div className="grid grid-cols-5 gap-x-5 gap-y-7">
                                {BRANDS.map((b) => (
                                    <BrandCircle key={b.name} brand={b} />
                                ))}
                            </div>
                        </div>

                        {/* Feature image */}
                        <div className="p-5">
                            <a href="/cabinet-brands" className="group/img relative block h-full min-h-[260px] rounded-xl overflow-hidden">
                                <img
                                    src="/images/kichan-imgs/shop-by-brand.png"
                                    alt="Explore all cabinet brands"
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" aria-hidden="true" />
                                <div className="absolute inset-x-0 bottom-0 p-5">
                                    <p className="text-white font-display text-lg font-bold leading-tight">Explore every brand</p>
                                    <p className="mt-1 text-white/80 text-[13px] leading-snug">Compare styles, finishes & prices in one place.</p>
                                    <span className="mt-3 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-amber-400 group-hover/img:bg-amber-500 text-gray-900 text-[13px] font-semibold transition-colors">
                                        View All Brands
                                        <Icon className="w-3.5 h-3.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></Icon>
                                    </span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    );
}
