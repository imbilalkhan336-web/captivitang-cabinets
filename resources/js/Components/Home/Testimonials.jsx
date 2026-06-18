import { useState, useEffect, useCallback, useRef } from 'react';
import Icon from '@/Components/Home/Icon';

const REVIEWS_URL = 'https://maps.app.goo.gl/w5VxDXHNPuB6nVpA8';

const REVIEWS = [
    { name: 'Rudy Ram', text: 'Worked with Dan and his team on my multi-unit project and it was easy and flawless. HIGHLY recommend.', href: REVIEWS_URL },
    { name: 'Meghan Martin', text: 'Amazing service from beginning all the way to the end and the cabinets are beautiful!!', href: REVIEWS_URL },
    { name: 'Robert Marrocco', text: 'Great experience start to finish. On time and fairly priced. Made the process seamless.', href: REVIEWS_URL },
    { name: 'Mike Gallo', text: 'Captivating Cabinets did an outstanding job on our kitchen. From the initial design process to delivery, everything was first class.', href: REVIEWS_URL },
    { name: 'Matthew Falotico', text: 'Worked with Dan and he was professionalism personified. Would highly recommend them!', href: 'https://maps.app.goo.gl/UJEtrbkMqAHJTUbN9' },
    { name: 'Chris Weiss', text: 'Worked with Dan on our kitchen — it came out beautiful, couldn’t be more pleased.', href: 'https://maps.app.goo.gl/tVJFBEyevAerkxeM6' },
    { name: 'Philip Wickham', text: 'Very professional from start to finish. Am using again for another project.', href: REVIEWS_URL },
    { name: 'Mary Jean Pawley', text: 'Customer service here is top notch! Can’t recommend them enough, especially Dan who knows his stuff.', href: 'https://maps.app.goo.gl/oHFCAixUu42p6qeq5' },
    { name: 'Norm Miller', text: 'I have purchased 20–30 full kitchens and vanities with Dan. Quality and service are consistently excellent.', href: 'https://maps.app.goo.gl/X6oRP73eWo99Wz7f7' },
    { name: 'Vanina Rimoli', text: 'Captivating Cabinets did a meticulous and beautiful job on my kitchen. I’m beyond pleased with the results.', href: 'https://maps.app.goo.gl/PAuyi4BpxVZ5KfdM7' },
    { name: 'Melodie Morgan', text: 'Love these guys — easy to work with, and I love my kitchen.', href: REVIEWS_URL },
    { name: 'Sheryl George', text: 'We worked with Dan designing our new kitchen. He was super helpful and knowledgeable. The result is stunning.', href: 'https://maps.app.goo.gl/m96WmatryoF8CUTu9' },
];

function GoogleG({ className = 'w-5 h-5' }) {
    return (
        <svg viewBox="0 0 24 24" className={className} aria-label="Google">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
        </svg>
    );
}

function Stars() {
    return (
        <div className="flex items-center gap-0.5 text-amber-400">
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

const AVATAR_COLORS = ['bg-amber-500', 'bg-amber-600', 'bg-amber-400', 'bg-amber-500', 'bg-amber-600', 'bg-amber-400'];

function ReviewCard({ name, text, href, colorIndex }) {
    const initials = name.split(' ').map((w) => w[0]).slice(0, 2).join('');
    return (
        <article className="flex h-full flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-6">
            <div className="flex items-center justify-between">
                <Stars />
                <GoogleG className="w-5 h-5" />
            </div>
            <p className="mt-4 text-[#374151]/80 text-[15px] leading-relaxed flex-1">“{text}”</p>
            <div className="mt-5 pt-4 border-t border-[#374151]/10 flex items-center gap-3">
                <span className={`flex items-center justify-center w-10 h-10 rounded-full text-white text-sm font-semibold ${AVATAR_COLORS[colorIndex % AVATAR_COLORS.length]}`}>
                    {initials}
                </span>
                <div className="flex-1 min-w-0">
                    <p className="text-[#374151] text-sm font-semibold truncate">{name}</p>
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#374151]/50 hover:text-amber-600 text-xs transition-colors inline-flex items-center gap-1"
                    >
                        View on Google
                        <Icon className="w-3 h-3">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </Icon>
                    </a>
                </div>
            </div>
        </article>
    );
}

function usePerPage() {
    const [perPage, setPerPage] = useState(1);
    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            setPerPage(w >= 1024 ? 3 : w >= 640 ? 2 : 1);
        };
        update();
        window.addEventListener('resize', update);
        return () => window.removeEventListener('resize', update);
    }, []);
    return perPage;
}

export default function Testimonials() {
    const perPage = usePerPage();
    const maxIndex = Math.max(0, REVIEWS.length - perPage);
    const [index, setIndex] = useState(0);
    const timer = useRef(null);

    // Clamp index when perPage changes
    useEffect(() => {
        setIndex((i) => Math.min(i, maxIndex));
    }, [maxIndex]);

    const next = useCallback(() => setIndex((i) => (i >= maxIndex ? 0 : i + 1)), [maxIndex]);
    const prev = useCallback(() => setIndex((i) => (i <= 0 ? maxIndex : i - 1)), [maxIndex]);

    // Auto-advance
    useEffect(() => {
        timer.current = setInterval(next, 5000);
        return () => clearInterval(timer.current);
    }, [next]);

    const pause = () => clearInterval(timer.current);
    const resume = () => {
        clearInterval(timer.current);
        timer.current = setInterval(next, 5000);
    };

    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Customer reviews">
            <div className="max-w-container mx-auto px-6 lg:px-8">
                {/* Header */}
                <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                    <div className="max-w-2xl">
                        <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                            Reviews
                        </span>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                            What Our Customers Say
                        </h2>
                        <div className="mt-4 flex items-center gap-3">
                            <GoogleG className="w-6 h-6" />
                            <span className="text-[#374151] font-bold">5.0</span>
                            <Stars />
                            <span className="text-[#374151]/60 text-sm">· 50+ Google Reviews</span>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-2.5">
                        <button
                            onClick={prev}
                            aria-label="Previous reviews"
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#374151]/15 text-[#374151] hover:bg-[#374151] hover:text-white transition-colors"
                        >
                            <Icon className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></Icon>
                        </button>
                        <button
                            onClick={next}
                            aria-label="Next reviews"
                            className="w-11 h-11 flex items-center justify-center rounded-full bg-white border border-[#374151]/15 text-[#374151] hover:bg-[#374151] hover:text-white transition-colors"
                        >
                            <Icon className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></Icon>
                        </button>
                    </div>
                </div>

                {/* Slider — negative margin offsets the slides' px-3 so the
                    first/last card edges line up exactly with the heading */}
                <div className="mt-10 -mx-3 py-4 overflow-hidden" onMouseEnter={pause} onMouseLeave={resume}>
                    <div
                        className="flex transition-transform duration-500 ease-out"
                        style={{ transform: `translateX(-${index * (100 / perPage)}%)` }}
                    >
                        {REVIEWS.map((review, i) => (
                            <div
                                key={i}
                                className="shrink-0 px-3"
                                style={{ width: `${100 / perPage}%` }}
                            >
                                <ReviewCard {...review} colorIndex={i} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="mt-8 flex items-center justify-center gap-2">
                    {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Go to slide ${i + 1}`}
                            className={`h-2 rounded-full transition-all ${
                                i === index ? 'w-6 bg-amber-500' : 'w-2 bg-[#374151]/20 hover:bg-[#374151]/40'
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
