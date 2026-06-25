/* Shared catalog data for the Shop Cabinets mega menu (desktop) and the
   dynamic mobile menu. Keep this the single source of truth. */

export const BRANDS = [
    {
        name: 'Fabuwood',
        slug: 'fabuwood',
        lines: [
            {
                name: 'Allure',
                series: [
                    { name: 'Galaxy', collections: ['Frost', 'Linen', 'Dove', 'Nickel', 'Cobblestone', 'Pistachio Green', 'Indigo', 'Horizon', 'Timber', 'Desert Oak', 'Truffle', 'Pitch Black'] },
                    { name: 'Luna', collections: ['Dove', 'Kona', 'Timber', 'Desert Oak', 'Truffle'] },
                    { name: 'Fusion', collections: ['Dove', 'Oyster', 'Kona', 'Stone', 'Timber'] },
                    { name: 'Nexus', collections: ['Frost'] },
                ],
            },
            { name: 'Illume', series: [
                { name: 'Catalina Gloss', images: [
                    '/images/brands/fabuwood/illume/Catalina%20Gloss%20Cabinets/6481aa87-2be4-4688-8504-74f4d3a49651.png',
                    '/images/brands/fabuwood/illume/Catalina%20Gloss%20Cabinets/d1193fa1-463b-4dc4-a1cc-18261d7c36c3.png',
                ] },
                { name: 'Catalina Matt & Texture', images: [
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/00b7308f-f900-49e9-b374-e858f38e70a3.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/017b545e-8b42-40a1-b9a1-f0b64d283013.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/0476e2fc-d2be-4b32-aa3a-ef1e23821c81.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/0ec482a1-f570-4d7a-8021-b99a7d664751.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/0f7c3a36-b379-4c78-9231-086e8c7e05cd.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/33618583-18cd-433a-b619-d374bd4835e6.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/4bcc2096-6cad-4af8-802b-fed1fbab6e55.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/69780b17-c998-4f78-96d6-233b5b06d7f1.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/7992ba7f-0718-464b-a899-5c41381f48bf.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/7f10d08e-6947-462e-affd-068fd9c2f42d.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/efe46172-fd31-4184-b9fe-0aeaddd0beea.png',
                    '/images/brands/fabuwood/illume/Catalina%20Matt%20%26%20Texture/f726b889-968f-4254-ba7c-c8dbd7cda263.png',
                ] },
            ] },
            { name: 'Ovela', series: [
                { name: 'Catalina', images: [
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/2a147bbb-b431-43e4-bce9-b70aa06069e3.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/3380d717-6bca-44ef-9659-f658612a6849.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/66ffe9fe-14b2-4a35-8ea4-f082c80f89e2.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/69d66e47-4712-43f3-8f05-beda1a4ada5c.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/6c86c868-5eb3-4200-b63f-6bf12a699df1.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/a1872d7a-ab84-4650-8786-4e8173ea6486.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/b81713a9-855c-4406-8f87-caf2f9491313.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/c4b263bf-da12-4c4d-9e34-b18520aab8a8.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/e12300e2-8795-4ccb-8507-524abbde1cc3.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/e9bd2279-f210-4d25-85b0-e071dcbae15f.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/f3c6f4f1-f4e1-401f-921a-930a0e92b517.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/fc8c725a-6b18-4e23-99da-04d98d869845.png',
                    '/images/brands/fabuwood/ovela/Catalina%20Cabinets/fe577910-5818-4724-a7fd-83c0919372ab.png',
                ] },
            ] },
        ],
    },
    { name: 'J&K', slug: 'jk', lines: [] },
    { name: 'Modernform', slug: 'modernform', lines: [] },
    { name: 'Diamond', slug: 'diamond', lines: [] },
    { name: 'Decora', slug: 'decora', lines: [] },
    { name: 'Mantra', slug: 'mantra', lines: [] },
    { name: 'Tribeca', slug: 'tribeca', lines: [] },
    { name: 'KCD', slug: 'kcd', lines: [] },
    { name: 'USCD', slug: 'uscd', lines: [] },
];

// URL to a brand's landing page.
export const brandHref = (brand) => `/brands/${brand.slug}`;

export const TYPES = [
    {
        name: 'Base Cabinets',
        subs: [
            { name: 'Single Door Base', count: 14 },
            { name: 'Double Door Base', count: 15 },
            { name: 'Sink Base', count: 10 },
            { name: 'Diagonal Sink Front', count: 2 },
            { name: 'Diagonal Sink Base', count: 2 },
            { name: 'Farm Sink', count: 3 },
            { name: 'Corner Base', count: 4 },
            { name: 'Easy Reach Base', count: 2 },
            { name: 'Lazy Susan Base', count: 2 },
            { name: 'Drawer Bench Seat', count: 3 },
            { name: 'Return Angle Base', count: 3 },
            { name: 'Specialty Base', count: 2 },
            { name: 'Full Height Door Base', count: 21 },
            { name: 'Oven Cabinet', count: 1 },
        ],
    },
    {
        name: 'Wall Cabinets',
        subs: [
            { name: 'Single Door Wall', count: 28 },
            { name: 'Double Door Wall', count: 46 },
            { name: 'Blind Wall', count: 12 },
            { name: 'Corner Wall', count: 16 },
            { name: 'Refrigerator Wall', count: 14 },
            { name: 'Lift-Up Wall', count: 2 },
            { name: 'Wall With Drawers', count: 4 },
            { name: 'Appliance Wall', count: 1 },
            { name: 'Microwave Wall', count: 5 },
            { name: 'No Door Wall / Matching Interior', count: 20 },
            { name: 'No Door Corner / Matching Interior', count: 4 },
            { name: 'Open Shelf / Matching Interior', count: 8 },
            { name: 'Wall End', count: 16 },
            { name: 'Wine Racks', count: 8 },
            { name: 'Wall Organizer', count: 2 },
        ],
    },
    { name: 'Tall Cabinets', subs: [] },
    { name: 'Vanity Cabinets', subs: [] },
];

export const INCHES = [6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 48, 60].map((n) => `${n} Inch Cabinets`);

export const MATERIALS = ['MDF Cabinets', 'Birch Cabinets', 'Eucalyptus Cabinets', 'Plywood Cabinets', 'Wood Cabinets', 'Solid Maple'];

export const DEPTHS = [
    '12 Deep Wall Cabinets',
    '15 Deep Base Cabinets',
    '15 Deep Wall Cabinets',
    '18 Deep Base Cabinets',
    '18 Deep Wall Cabinets',
    '21 Deep Base Cabinets',
    '21 Deep Wall Cabinets',
    '24 Deep Base Cabinets',
    '24 Deep Wall Cabinets',
];

export const SHELVES = ['1 Shelf Cabinets', '2 Shelf Cabinets', '3 Shelf Cabinets', '4 Shelf Cabinets', '5 Shelf Cabinets', '7 Shelf Cabinets'];

export const DRAWERS = ['1 Drawer Cabinets', '2 Drawer Cabinets', '3 Drawer Cabinets'];

export const COLORS = [
    { name: 'White', hex: '#F5F3EE', border: true },
    { name: 'Grey', hex: '#7A7C7E' },
    { name: 'Brown', hex: '#8B5E3C' },
    { name: 'Blue', hex: '#22466B' },
    { name: 'Beige', hex: '#C9B89A' },
    { name: 'Green', hex: '#2E4A3A' },
    { name: 'Black', hex: '#161616' },
    { name: 'Red', hex: '#A14D2A' },
];

// Build the door-sample image path for a Fabuwood Allure finish.
export function finishImage(seriesName, finishName) {
    const slug = finishName.toLowerCase().replace(/\s+/g, '-');
    const ext = finishName === 'Truffle' ? 'png' : 'webp';
    return `/images/cabinets/fabuwood/${seriesName.toLowerCase()}-${slug}.${ext}`;
}
