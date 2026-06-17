/**
 * Continuously auto-scrolling row of Fabuwood Allure cabinet door samples
 * followed by a centered CTA. The list is rendered twice so the JS auto-scroll
 * loops seamlessly (when it passes the halfway point it resets back). Auto-
 * scroll pauses while the row is hovered. Prev/Next buttons (top-right) also
 * scroll the row, and it stays swipeable/scrollable directly. Hovering a single
 * door zooms it and reveals its name.
 */
import { useEffect, useRef } from 'react';

const SAMPLE_DOORS = [
    { src: '/images/cabinets/fabuwood/galaxy-truffle.png', label: 'Galaxy Truffle' },
    { src: '/images/cabinets/fabuwood/galaxy-frost.webp', label: 'Galaxy Frost' },
    { src: '/images/cabinets/fabuwood/galaxy-pistachio-green.webp', label: 'Galaxy Pistachio Green' },
    { src: '/images/cabinets/fabuwood/galaxy-timber.webp', label: 'Galaxy Timber' },
    { src: '/images/cabinets/fabuwood/galaxy-cobblestone.webp', label: 'Galaxy Cobblestone' },
    { src: '/images/cabinets/fabuwood/galaxy-horizon.webp', label: 'Galaxy Horizon' },
    { src: '/images/cabinets/fabuwood/galaxy-linen.webp', label: 'Galaxy Linen' },
    { src: '/images/cabinets/fabuwood/galaxy-indigo.webp', label: 'Galaxy Indigo' },
    { src: '/images/cabinets/fabuwood/galaxy-nickel.webp', label: 'Galaxy Nickel' },
    { src: '/images/cabinets/fabuwood/galaxy-dove.webp', label: 'Galaxy Dove' },
    { src: '/images/cabinets/fabuwood/galaxy-pitch-black.webp', label: 'Galaxy Pitch Black' },
    { src: '/images/cabinets/fabuwood/galaxy-desert-oak.webp', label: 'Galaxy Desert Oak' },
    { src: '/images/cabinets/fabuwood/luna-truffle.png', label: 'Luna Truffle' },
    { src: '/images/cabinets/fabuwood/luna-dove.webp', label: 'Luna Dove' },
    { src: '/images/cabinets/fabuwood/luna-desert-oak.webp', label: 'Luna Desert Oak' },
    { src: '/images/cabinets/fabuwood/luna-kona.webp', label: 'Luna Kona' },
    { src: '/images/cabinets/fabuwood/luna-timber.webp', label: 'Luna Timber' },
    { src: '/images/cabinets/fabuwood/fusion-dove.webp', label: 'Fusion Dove' },
    { src: '/images/cabinets/fabuwood/fusion-oyster.webp', label: 'Fusion Oyster' },
    { src: '/images/cabinets/fabuwood/fusion-kona.webp', label: 'Fusion Kona' },
    { src: '/images/cabinets/fabuwood/fusion-stone.webp', label: 'Fusion Stone' },
    { src: '/images/cabinets/fabuwood/fusion-timber.webp', label: 'Fusion Timber' },
    { src: '/images/cabinets/fabuwood/nexus-frost.webp', label: 'Nexus Frost' },
];

function DoorSample({ src, label, hidden }) {
    return (
        <div className="group/door relative z-0 hover:z-10 flex-shrink-0 snap-start" aria-hidden={hidden}>
            <img
                src={src}
                alt={hidden ? '' : `Fabuwood Allure ${label} cabinet door sample`}
                loading="lazy"
                draggable="false"
                className="h-64 md:h-80 lg:h-96 w-52 md:w-64 lg:w-72 object-contain select-none transition-transform duration-500 ease-out group-hover/door:scale-110"
            />
            {/* Name — fades in on hover, no backdrop */}
            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-center opacity-0 transition-opacity duration-300 group-hover/door:opacity-100">
                <span className="mt-4 px-3 text-center text-white text-sm font-semibold tracking-wide [text-shadow:0_1px_4px_rgba(0,0,0,0.9),0_1px_2px_rgba(0,0,0,0.7)]">
                    {label}
                </span>
            </div>
        </div>
    );
}

export default function SampleDoors() {
    const scrollerRef = useRef(null);
    const hoverRef = useRef(false); // pointer is over the row
    const dragRef = useRef(false); // user is dragging the row
    const dragState = useRef({ startX: 0, startLeft: 0 });

    // Continuous auto-scroll, driven by one rAF loop. Loops seamlessly by
    // wrapping once it passes the halfway point (the door list is rendered
    // twice). Pauses while hovered or while the user is grab-scrolling.
    useEffect(() => {
        const el = scrollerRef.current;
        if (!el) return;

        let raf;
        let last = null;
        const SPEED = 60; // px per second

        const tick = (now) => {
            if (last == null) last = now;
            const dt = (now - last) / 1000;
            last = now;

            if (!hoverRef.current && !dragRef.current && el.scrollWidth > el.clientWidth) {
                let next = el.scrollLeft + SPEED * dt;
                const half = el.scrollWidth / 2;
                if (next >= half) next -= half;
                el.scrollLeft = next;
            }
            raf = requestAnimationFrame(tick);
        };

        raf = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(raf);
    }, []);

    // Click/touch-and-drag to scroll the row.
    const onPointerDown = (e) => {
        const el = scrollerRef.current;
        if (!el) return;
        dragRef.current = true;
        dragState.current = { startX: e.clientX, startLeft: el.scrollLeft };
        el.setPointerCapture?.(e.pointerId);
    };

    const onPointerMove = (e) => {
        if (!dragRef.current) return;
        const el = scrollerRef.current;
        el.scrollLeft = dragState.current.startLeft - (e.clientX - dragState.current.startX);
    };

    const endDrag = (e) => {
        if (!dragRef.current) return;
        dragRef.current = false;
        scrollerRef.current?.releasePointerCapture?.(e.pointerId);
    };

    return (
        <section className="bg-white py-12 lg:py-16 overflow-hidden" aria-label="Sample doors">
            {/* Heading — centered above the slider */}
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 mb-8 text-center">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-[#14304E] tracking-tight">
                    Sample Doors
                </h2>
                <p className="mt-2 text-[#14304E]/70 text-base md:text-lg">
                    The first piece of your new kitchen
                </p>
            </div>

            {/* Auto-scrolling, grab-to-scroll door row */}
            <div
                ref={scrollerRef}
                onMouseEnter={() => (hoverRef.current = true)}
                onMouseLeave={() => (hoverRef.current = false)}
                onPointerDown={onPointerDown}
                onPointerMove={onPointerMove}
                onPointerUp={endDrag}
                onPointerCancel={endDrag}
                className="flex gap-4 md:gap-6 overflow-x-auto scroll-auto select-none cursor-grab active:cursor-grabbing [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
            >
                {[...SAMPLE_DOORS, ...SAMPLE_DOORS].map((door, i) => (
                    <DoorSample
                        key={i}
                        src={door.src}
                        label={door.label}
                        hidden={i >= SAMPLE_DOORS.length}
                    />
                ))}
            </div>

            {/* CTA — centered below the slider */}
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 mt-10 text-center">
                <a
                    href="#"
                    className="inline-flex items-center px-7 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors"
                >
                    Browse Samples
                </a>
            </div>
        </section>
    );
}
