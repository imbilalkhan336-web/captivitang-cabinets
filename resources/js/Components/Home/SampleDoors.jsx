/**
 * Auto-scrolling marquee of cabinet door samples followed by a centered CTA.
 * The door list is rendered twice so the CSS marquee (translateX -50%) loops
 * seamlessly; the animation pauses while the user hovers the row.
 */
const SAMPLE_DOORS = [
    { src: '/images/cabinets/galaxy-frost.jpg', label: 'Galaxy Frost' },
    { src: '/images/cabinets/galaxy-linen.jpg', label: 'Galaxy Linen' },
    { src: '/images/cabinets/jk-espresso-k8.jpg', label: 'J&K Espresso' },
    { src: '/images/cabinets/galaxy-cobblestone.jpg', label: 'Galaxy Cobblestone' },
    { src: '/images/cabinets/Galaxy_Truffle.webp', label: 'Galaxy Truffle' },
    { src: '/images/cabinets/jk-butterscotch-b8.jpg', label: 'J&K Butterscotch' },
    { src: '/images/cabinets/galaxy-indigo.jpg', label: 'Galaxy Indigo' },
    { src: '/images/cabinets/galaxy-pistachio-green.jpg', label: 'Galaxy Pistachio Green' },
    { src: '/images/cabinets/luna-dove.jpg', label: 'Luna Dove' },
    { src: '/images/cabinets/galaxy-timber.jpg', label: 'Galaxy Timber' },
    { src: '/images/cabinets/luna-desert-oak.png', label: 'Luna Desert Oak' },
    { src: '/images/cabinets/galaxy-horizon.jpg', label: 'Galaxy Horizon' },
    { src: '/images/cabinets/LunaTruffle.webp', label: 'Luna Truffle' },
    { src: '/images/cabinets/jk-pebble-b6.jpg', label: 'J&K Pebble' },
];

function DoorSample({ src, label, hidden }) {
    return (
        <div className="flex-shrink-0" aria-hidden={hidden}>
            <img
                src={src}
                alt={hidden ? '' : `${label} cabinet door sample`}
                loading="lazy"
                draggable="false"
                className="h-48 md:h-56 w-auto object-contain select-none"
            />
        </div>
    );
}

export default function SampleDoors() {
    return (
        <section className="bg-white py-12 lg:py-16 overflow-hidden" aria-label="Sample doors">
            {/* Heading — top left of the section */}
            <div className="max-w-container mx-auto px-6 lg:px-8 mb-8 flex flex-wrap items-end justify-between gap-4">
                <div>
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#14304E] tracking-tight">
                        Sample Doors
                    </h2>
                    <p className="mt-2 text-[#14304E]/70 text-base md:text-lg">
                        The first piece of your new kitchen
                    </p>
                </div>
                <a
                    href="#"
                    className="inline-flex items-center px-7 py-3 bg-teal-700 hover:bg-teal-800 text-white text-sm font-semibold rounded-md transition-colors"
                >
                    Shop Samples
                </a>
            </div>

            {/* Auto-scrolling marquee */}
            <div className="group relative">
                <div className="flex w-max gap-4 md:gap-6 animate-marquee group-hover:[animation-play-state:paused]">
                    {[...SAMPLE_DOORS, ...SAMPLE_DOORS].map((door, i) => (
                        <DoorSample
                            key={i}
                            src={door.src}
                            label={door.label}
                            hidden={i >= SAMPLE_DOORS.length}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
