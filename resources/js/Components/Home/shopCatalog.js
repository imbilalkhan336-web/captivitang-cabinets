/* Shared catalog data for the Shop Cabinets mega menu (desktop) and the
   dynamic mobile menu. Keep this the single source of truth. */

export const BRANDS = [
    {
        name: 'Fabuwood',
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
            { name: 'Illume', series: [] },
            { name: 'Ovela', series: [] },
        ],
    },
    { name: 'J&K', lines: [] },
    { name: 'Modernform', lines: [] },
    { name: 'Diamond', lines: [] },
    { name: 'Decora', lines: [] },
    { name: 'Mantra', lines: [] },
    { name: 'Tribeca', lines: [] },
    { name: 'KCD', lines: [] },
    { name: 'USCD', lines: [] },
];

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
