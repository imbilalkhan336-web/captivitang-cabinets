import { useState } from 'react';
import Icon from '@/Components/Home/Icon';
import { BRANDS, TYPES, STYLES, INCHES, DEPTHS, SHELVES, DRAWERS, finishImage } from '@/Components/Home/shopCatalog';

const facetNode = (label, title, items) => ({
    label,
    title,
    items: items.map((name) => ({ label: name, href: '#' })),
});

/* ---------- Build the navigable node tree from the catalog ---------- */

const byBrandNode = {
    label: 'By Brand',
    title: 'Shop by Brand',
    items: BRANDS.map((b) =>
        b.lines.length
            ? {
                  label: b.name,
                  title: b.name,
                  items: b.lines.map((line) =>
                      line.series.length
                          ? {
                                label: line.name,
                                title: `${b.name} ${line.name}`,
                                items: line.series.map((s) => ({
                                    label: s.name,
                                    title: `${line.name} ${s.name}`,
                                    finishes: { seriesName: s.name, collections: s.collections },
                                })),
                            }
                          : { label: line.name, href: '#' }
                  ),
              }
            : { label: b.name, href: '#' }
    ),
};

const byTypeNode = {
    label: 'By Type',
    title: 'Shop by Type',
    items: TYPES.map((t) =>
        t.subs.length
            ? { label: t.name, title: t.name, items: t.subs.map((s) => ({ label: s.name, href: '#' })) }
            : { label: t.name, href: '#' }
    ),
};

const brandsNode = {
    label: 'Our Brands',
    title: 'Our Brands',
    items: BRANDS.map((b) => ({ label: b.name, href: '#' })),
};

const shopNode = {
    label: 'Shop Cabinets',
    title: 'Shop Cabinets',
    items: [
        byBrandNode,
        byTypeNode,
        facetNode('By Style', 'Browse by Style', STYLES.map((s) => s.name)),
        facetNode('By Inch', 'Shop by Inch', INCHES),
        facetNode('By Depth', 'Shop by Depth', DEPTHS),
        facetNode('By Shelf', 'Number of Shelves', SHELVES),
        facetNode('By Drawers', 'Number of Drawers', DRAWERS),
    ],
};

/* ---------- Component ---------- */

function hasChildren(node) {
    return !!(node.items || node.finishes || node.colors);
}

export default function MobileMenu({ links, onClose }) {
    // Root screen built from the navbar links
    const rootItems = links.map((link) =>
        link.mega
            ? shopNode
            : link.brands
            ? brandsNode
            : link.logo
            ? { label: 'Financing', href: link.href, logo: link.logo }
            : { label: link.label, href: link.href }
    );
    const root = { title: 'Menu', items: rootItems, isRoot: true };

    const [stack, setStack] = useState([root]);
    const current = stack[stack.length - 1];
    const depth = stack.length;

    const push = (node) => setStack((s) => [...s, node]);
    const back = () => setStack((s) => s.slice(0, -1));

    return (
        <div className="lg:hidden mt-2 border-t border-gray-900/10 max-h-[72vh] overflow-y-auto">
            {/* Header (back + title) — hidden on the root screen */}
            {depth > 1 && (
                <div className="sticky top-0 bg-white z-10 flex items-center gap-2 py-3 border-b border-gray-900/10">
                    <button
                        onClick={back}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full text-gray-700 hover:bg-gray-900/5"
                        aria-label="Back"
                    >
                        <Icon className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></Icon>
                    </button>
                    <span className="font-semibold text-[#374151]">{current.title}</span>
                </div>
            )}

            {/* Screen body (re-keyed so it animates on each level change) */}
            <div key={depth} className="animate-menu-in py-2">
                {current.colors ? (
                    <div className="grid grid-cols-4 gap-4 px-1 py-2">
                        {current.colors.map((c) => (
                            <a key={c.name} href="#" onClick={onClose} className="flex flex-col items-center gap-2">
                                <span className={`w-12 h-12 rounded-full ring-1 ring-black/10 ${c.border ? 'ring-2 ring-gray-200' : ''}`} style={{ background: c.hex }} />
                                <span className="text-xs text-gray-900">{c.name}</span>
                            </a>
                        ))}
                    </div>
                ) : current.finishes ? (
                    <div className="grid grid-cols-3 gap-3 px-1 py-2">
                        {current.finishes.collections.map((f) => (
                            <a key={f} href="#" onClick={onClose} className="block">
                                <div className="aspect-[3/4] rounded-md overflow-hidden bg-[#374151]/5 ring-1 ring-[#374151]/10 p-1">
                                    <img
                                        src={finishImage(current.finishes.seriesName, f)}
                                        alt={`${current.finishes.seriesName} ${f}`}
                                        loading="lazy"
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                                <p className="mt-1 text-[11px] text-gray-900 font-medium truncate">{current.finishes.seriesName} {f}</p>
                            </a>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col">
                        {current.items.map((node) =>
                            hasChildren(node) ? (
                                <button
                                    key={node.label}
                                    onClick={() => push(node)}
                                    className="flex items-center justify-between gap-2 py-3 text-left text-[15px] font-medium text-gray-800 hover:text-amber-600 transition-colors"
                                >
                                    <span>{node.label}</span>
                                    <Icon className="w-4 h-4 text-gray-400"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></Icon>
                                </button>
                            ) : (
                                <a
                                    key={node.label}
                                    href={node.href}
                                    onClick={onClose}
                                    className="flex items-center gap-2 py-3 text-[15px] font-medium text-gray-800 hover:text-amber-600 transition-colors"
                                >
                                    {node.logo && <img src={node.logo} alt="Affirm" className="h-5 w-auto" />}
                                    <span className={node.logo ? 'text-[#0FA0EA]' : ''}>{node.label}</span>
                                </a>
                            )
                        )}

                        {/* CTA on the root screen */}
                        {current.isRoot && (
                            <a
                                href="#"
                                onClick={onClose}
                                className="mt-3 mb-3 inline-flex items-center justify-center px-5 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors"
                            >
                                Free 3D Design
                            </a>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
