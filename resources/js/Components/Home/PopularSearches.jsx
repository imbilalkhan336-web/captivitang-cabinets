/* SEO-friendly internal links for high-intent "popular search" queries.
   Sits just above the closing CTA on the home page. */

const GROUPS = [
    {
        title: 'Popular Colors',
        links: [
            'White Kitchen Cabinets',
            'Gray Kitchen Cabinets',
            'Blue Kitchen Cabinets',
            'Black Kitchen Cabinets',
            'Green Kitchen Cabinets',
            'Beige Kitchen Cabinets',
        ],
    },
    {
        title: 'View By Type',
        links: [
            'RTA Cabinets',
            'Pre Assembled Cabinets',
            'Base Cabinets',
            'Wall Cabinets',
            'Tall Pantry Cabinets',
            'Bathroom Vanities',
        ],
    },
    {
        title: 'Popular Styles',
        links: [
            'White Shaker Cabinets',
            'Blue Shaker Cabinets',
            'Slim Shaker Cabinets',
            'Transitional Cabinets',
            'Modern Kitchen Cabinets',
            'Traditional Cabinets',
        ],
    },
    {
        title: 'Shop By Brand',
        links: [
            'Fabuwood Cabinets',
            'J&K Cabinets',
            'Diamond Cabinets',
            'Decora Cabinets',
            'Mantra Cabinets',
            'Modernform Cabinets',
        ],
    },
];

export default function PopularSearches() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Popular cabinet searches">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="max-w-2xl">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        Popular Searches
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        Find the cabinets you're looking for
                    </h2>
                    <p className="mt-4 text-[#374151]/70 text-base md:text-lg leading-relaxed">
                        Jump straight to the most-shopped colors, styles, types, and brands.
                    </p>
                </div>

                <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                    {GROUPS.map(({ title, links }) => (
                        <div key={title}>
                            <h3 className="font-display text-base font-bold text-[#374151] tracking-tight">
                                {title}
                            </h3>
                            <span className="mt-2 block w-8 h-0.5 bg-amber-400 rounded-full" aria-hidden="true" />
                            <ul className="mt-5 space-y-3">
                                {links.map((label) => (
                                    <li key={label}>
                                        <a
                                            href="#"
                                            className="text-[15px] text-[#374151]/70 hover:text-amber-600 transition-colors"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
