import { useState } from 'react';
import Icon from '@/Components/Home/Icon';

const FILTERS = [
    { key: 'room', label: 'Room' },
    { key: 'door', label: 'Door Style' },
    { key: 'color', label: 'Color Group' },
    { key: 'style', label: 'Room Style' },
    { key: 'construction', label: 'Construction' },
    { key: 'features', label: 'Features' },
];

const KITCHEN_ICON = (
    <>
        <rect x="4" y="4" width="16" height="6" rx="1" />
        <rect x="4" y="10" width="16" height="10" rx="1" />
        <path d="M8 14h8M8 17h4" strokeWidth={1.2} />
        <circle cx="8" cy="7" r="0.5" fill="currentColor" />
        <circle cx="12" cy="7" r="0.5" fill="currentColor" />
        <circle cx="16" cy="7" r="0.5" fill="currentColor" />
    </>
);

const ROOM_TYPES = [
    { key: 'kitchen', label: 'Kitchen', icon: KITCHEN_ICON },
    {
        key: 'bar',
        label: 'Bar',
        icon: (
            <>
                <path d="M5 5h14l-2 6H7L5 5z" />
                <path d="M9 11v5a2 2 0 002 2h2a2 2 0 002-2v-5" />
                <path d="M12 18v3" />
            </>
        ),
    },
    {
        key: 'bathroom',
        label: 'Bathroom',
        icon: (
            <>
                <path d="M4 11h16v4a3 3 0 01-3 3H7a3 3 0 01-3-3v-4z" />
                <path d="M6 11V6a2 2 0 014 0M3 11h18M7 18v3M17 18v3" />
            </>
        ),
    },
    {
        key: 'laundry',
        label: 'Laundry / Mud Room',
        icon: (
            <>
                <rect x="5" y="3" width="14" height="18" rx="1.5" />
                <circle cx="12" cy="13" r="4" />
                <circle cx="8" cy="6" r="0.5" fill="currentColor" />
                <circle cx="11" cy="6" r="0.5" fill="currentColor" />
            </>
        ),
    },
    {
        key: 'desk',
        label: 'Desk / Built-In',
        icon: (
            <>
                <rect x="3" y="4" width="18" height="12" rx="1" />
                <path d="M3 16h18M8 20h8M10 16v4M14 16v4" />
            </>
        ),
    },
];

const GALLERY_IMAGES = [
    { src: '/images/ShopByCategory/shop-by-brand.png', alt: 'Modern white kitchen', span: 'large' },
    { src: '/images/ShopByCategory/shop-by-style.png', alt: 'Contemporary two-tone kitchen', span: 'large' },
    { src: '/images/kitchen.png', alt: 'Bright kitchen with island', span: 'small' },
    { src: '/images/ShopByCategory/shop-by-color.png', alt: 'Black and white kitchen', span: 'small' },
    { src: '/images/kitchen.png', alt: 'Marble countertop kitchen', span: 'small' },
];

function FilterPill({ label, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors min-w-[140px] justify-between ${
                active
                    ? 'bg-[#0F6E7E] text-white'
                    : 'bg-white text-[#0F6E7E] border border-[#0F6E7E]/25 hover:border-[#0F6E7E]/60'
            }`}
        >
            <span>{label}</span>
            <Icon className={`w-3.5 h-3.5 transition-transform ${active ? '-rotate-180' : ''}`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
            </Icon>
        </button>
    );
}

function RoomCard({ label, icon, active, onClick }) {
    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center gap-2 w-[120px] py-4 px-3 rounded-md border transition-all ${
                active
                    ? 'border-[#0F6E7E] bg-[#0F6E7E]/5 ring-1 ring-[#0F6E7E]/40'
                    : 'border-gray-200 bg-white hover:border-[#0F6E7E]/40'
            }`}
        >
            <Icon className="w-10 h-10 text-[#0F6E7E]" strokeWidth={1.2}>
                {icon}
            </Icon>
            <span className="text-xs font-medium text-[#0F6E7E] text-center leading-tight">{label}</span>
        </button>
    );
}

export default function Gallery() {
    const [activeFilter, setActiveFilter] = useState('room');
    const [activeRoom, setActiveRoom] = useState('kitchen');

    return (
        <section className="bg-white" aria-label="Inspiration gallery">
            {/* Filter Bar */}
            <div className="border-b border-gray-200 py-5">
                <div className="max-w-container mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        {FILTERS.map(({ key, label }) => (
                            <FilterPill
                                key={key}
                                label={label}
                                active={activeFilter === key}
                                onClick={() => setActiveFilter(key)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Room Type Cards */}
            <div className="border-b border-gray-200 py-6">
                <div className="max-w-container mx-auto px-6 lg:px-8">
                    <div className="flex flex-wrap items-stretch justify-center gap-3">
                        {ROOM_TYPES.map(({ key, label, icon }) => (
                            <RoomCard
                                key={key}
                                label={label}
                                icon={icon}
                                active={activeRoom === key}
                                onClick={() => setActiveRoom(key)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Gallery */}
            <div className="bg-[#F5F5F5] py-8">
                <div className="max-w-container mx-auto px-6 lg:px-8">
                    <p className="text-sm text-gray-700 font-medium mb-5">538 Results</p>

                    <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4">
                        {GALLERY_IMAGES.map((img, i) => (
                            <a
                                key={i}
                                href="#"
                                className={`group block overflow-hidden rounded-sm ${
                                    img.span === 'large' ? 'col-span-2 lg:col-span-3' : 'col-span-1 lg:col-span-2'
                                }`}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover aspect-[4/3] transition-transform duration-500 group-hover:scale-105"
                                />
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
