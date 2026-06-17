import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Icon from '@/Components/Home/Icon';

/* ============================ Bits ============================ */

function Stars({ className = 'w-4 h-4' }) {
    return (
        <div className="flex items-center gap-0.5 text-amber-400" aria-label="5 out of 5 stars">
            {[0, 1, 2, 3, 4].map((i) => (
                <svg key={i} className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

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

const initials = (name) =>
    name.split(' ').map((p) => p[0]).slice(0, 2).join('').toUpperCase();

/* ============================ Data ============================ */

const TESTIMONIALS = [
    { name: 'Kemp Herzberg', date: 'May 19, 2026', quote: 'Ryan was amazing—patient, played devil’s advocate with kindness, and after 150+ emails, downloads, and the occasional phone call, our cabinets were ordered perfectly.' },
    { name: 'Rudy Ram', date: 'May 12, 2026', quote: 'Worked with Dan and his team on my multi-unit project and it was easy and flawless.' },
    { name: 'Shanaaz Eisenberg', date: 'May 12, 2026', quote: 'We dealt with Dan Strauss remotely—he made the process seamless and is trustworthy. Our local dealer didn’t even offer 3D visuals.' },
    { name: 'Angelo Perline', date: 'Apr 26, 2026', quote: 'Best cabinet dealer I’ve worked with. Ryan was fast, dependable, and super supportive through the entire process.' },
    { name: 'Christopher Bilbao', date: 'Apr 26, 2026', quote: 'Dan was great to work with. He was very responsive and offered prices much better than other places.' },
    { name: 'Jessica Bilbao', date: 'Apr 26, 2026', quote: 'Dan was super responsive, helpful with our design, and worked to get us everything we wanted within budget.' },
    { name: 'Matthew Toto', date: 'Apr 26, 2026', quote: 'Very knowledgeable and courteous service. Most people I called before could barely answer my questions.' },
    { name: 'Alex Grey', date: 'Apr 26, 2026', quote: 'Working with Ryan has been wonderful. They are incredibly responsive and helpful. As a designer, he’s amazing.' },
    { name: 'Pamela McArthur', date: 'Apr 26, 2026', quote: 'Ryan has been a great resource for our residential remodeling business—attentive, easy to reach, and prompt.' },
    { name: 'Meghan Martin', date: 'Apr 26, 2026', quote: 'Amazing service from beginning to end and the cabinets are beautiful!!' },
    { name: 'Milissa Garon', date: 'Apr 26, 2026', quote: 'Captivating Cabinets made my kitchen renovation seamless and easy. The entire team was great!' },
    { name: 'Haley Hogan', date: 'Apr 26, 2026', quote: 'Captivating made purchasing and designing my kitchen and bath project flawless and easy—all from home.' },
    { name: 'Rob Bain', date: 'Apr 26, 2026', quote: 'Incredible from start to finish. Communication was great. Professionals all the way!' },
    { name: 'Mike Gallo', date: 'Mar 26, 2026', quote: 'Outstanding job on our kitchen. From design through installation, the team was professional and organized.' },
    { name: 'Robert Marrocco', date: 'Mar 26, 2026', quote: 'Great experience start to finish. On time and fairly priced. The whole process was seamless.' },
    { name: 'Antonio Lacava', date: 'Mar 26, 2026', quote: 'The team at Captivating Cabinets are simply the best. I felt no pressure and the communication was great.' },
    { name: 'TJ Krempa', date: 'Jan 22, 2026', quote: 'Dan and team were instrumental in the success of our kitchen project—they turned around drawings in a day.' },
    { name: 'Greg Lehto', date: 'Jan 15, 2026', quote: 'Working with Captivating Cabinets was wonderful. They designed a custom kitchen exactly as I envisioned.' },
    { name: 'Joe Bags', date: 'Dec 31, 2025', quote: 'Great prices, great products, great service. Dan was very easy to work with.' },
    { name: 'Mike Clemente', date: 'Nov 28, 2025', quote: 'The team was extremely knowledgeable, respectful, and easy to work with. Quality exceeded expectations.' },
    { name: 'Mary Jean Pawley', date: 'Nov 20, 2025', quote: 'Customer service here is top notch! Dan knows his product, listens to your needs, and delivers!' },
    { name: 'Norm Miller', date: 'Aug 22, 2025', quote: 'Working with Dan, I’ve purchased 20–30 projects with great success. I love the 3D drawings.' },
    { name: 'Vanina Rimoli', date: 'Aug 19, 2025', quote: 'Captivating Cabinets did a meticulous, beautiful job. I’m beyond pleased with the craftsmanship.' },
    { name: 'Sheryl George', date: 'Aug 15, 2025', quote: 'Worked with Dan designing a new kitchen—super helpful and knowledgeable. The cabinets are beautiful.' },
];

const REASONS = [
    {
        num: '01',
        title: 'Premium Quality Cabinets',
        body: 'We partner with top brands like Fabuwood, J&K, Diamond, Decora, and US Cabinet Depot to deliver exceptional quality and craftsmanship.',
    },
    {
        num: '02',
        title: 'Free 3D Design Services',
        body: 'Our professional design team creates detailed 3D renderings, helping you visualize your dream kitchen before making any commitment.',
    },
    {
        num: '03',
        title: 'Competitive Pricing',
        body: 'From homeowner pricing to contractor wholesale rates, we offer competitive pricing without compromising on quality or service.',
    },
    {
        num: '04',
        title: 'Exceptional Customer Service',
        body: 'Our dedicated team provides personalized support throughout your entire project, from initial consultation to final installation.',
    },
];

/* ============================ Sections ============================ */

function Header() {
    return (
        <section className="bg-white pt-28 pb-14 lg:pt-32 lg:pb-16" aria-label="Client reviews">
            <div className="max-w-container mx-auto px-6 lg:px-8 text-center">
                <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                    Client Reviews
                </span>
                <h1 className="mt-3 font-display text-4xl md:text-5xl font-bold text-[#14304E] tracking-tight leading-tight">
                    What Our Customers Say
                </h1>
                <p className="mt-4 max-w-2xl mx-auto text-[#14304E]/70 text-base md:text-lg leading-relaxed">
                    Real testimonials from homeowners, contractors, and builders who transformed their spaces with Captivating Cabinets. See why clients trust us for premium cabinetry, free 3D design services, and exceptional customer support.
                </p>

                {/* Google reviews badge */}
                <div className="mt-8 inline-flex items-center gap-3 rounded-2xl bg-white border border-[#14304E]/10 shadow-[0_10px_30px_rgba(20,48,78,0.08)] px-5 py-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5F7FB] flex items-center justify-center">
                        <GoogleG className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                        <div className="flex items-center gap-2">
                            <span className="font-bold text-[#14304E] leading-none">5.0</span>
                            <Stars />
                        </div>
                        <p className="mt-1 text-xs text-[#14304E]/55 leading-none">50+ Google Reviews</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

function TestimonialCard({ name, date, quote }) {
    return (
        <div className="mb-5 break-inside-avoid rounded-2xl bg-white border border-[#14304E]/10 shadow-[0_10px_30px_rgba(20,48,78,0.06)] p-6">
            <div className="flex items-center justify-between">
                <Stars />
                <GoogleG className="w-5 h-5" />
            </div>
            <p className="mt-3 text-[#14304E]/80 text-[15px] leading-relaxed">“{quote}”</p>
            <div className="mt-5 flex items-center gap-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#14304E] text-amber-400 flex items-center justify-center font-display font-bold text-sm">
                    {initials(name)}
                </div>
                <div>
                    <p className="text-sm font-semibold text-[#14304E]">{name}</p>
                    <p className="text-xs text-[#14304E]/50">{date} · Google Review</p>
                </div>
            </div>
        </div>
    );
}

function Reviews() {
    return (
        <section className="bg-[#F5F7FB] py-16 lg:py-24" aria-label="Customer reviews">
            <div className="max-w-container mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <h2 className="font-display text-3xl md:text-4xl font-bold text-[#14304E] tracking-tight leading-tight">
                        Customer Reviews
                    </h2>
                    <p className="mt-4 text-[#14304E]/70 text-base md:text-lg leading-relaxed">
                        Hear from real customers who have transformed their kitchens with our premium cabinetry and design services.
                    </p>
                </div>

                <div className="mt-12 columns-1 sm:columns-2 lg:columns-3 gap-5">
                    {TESTIMONIALS.map((t) => (
                        <TestimonialCard key={t.name + t.date} {...t} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function WhyChoose() {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="Why customers choose us">
            <div className="max-w-container mx-auto px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        Why Choose Us
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#14304E] tracking-tight leading-tight">
                        Why customers choose Captivating Cabinets
                    </h2>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {REASONS.map(({ num, title, body }) => (
                        <div
                            key={num}
                            className="flex flex-col rounded-2xl bg-white border border-[#14304E]/10 shadow-[0_10px_30px_rgba(20,48,78,0.06)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(20,48,78,0.12)]"
                        >
                            <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-[#14304E] text-amber-400 font-display text-xl font-bold shadow-lg shadow-[#14304E]/20">
                                {num}
                            </span>
                            <h3 className="mt-5 font-display text-lg font-bold text-[#14304E] tracking-tight">{title}</h3>
                            <p className="mt-2 text-[#14304E]/70 text-[15px] leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CtaSection({ bgImage = '/images/home-hero-bg.png' }) {
    return (
        <section className="relative w-full overflow-hidden" aria-label="Transform your kitchen">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/15" aria-hidden="true" />

            <div className="relative max-w-container mx-auto px-6 lg:px-8 py-16 lg:py-20">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="font-display font-bold text-white tracking-tight leading-tight text-2xl md:text-3xl lg:text-[34px]">
                        Transform your kitchen with <span className="text-amber-400">premium cabinets</span>
                    </h2>
                    <p className="mt-4 text-white/80 text-base md:text-lg leading-relaxed">
                        Join hundreds of happy homeowners and contractors. Get a free 3D design or unlock exclusive trade pricing today.
                    </p>
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm shadow-lg shadow-amber-400/20">
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                            </Icon>
                            Get Free Design
                        </a>
                        <a href="/contractor-program" className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white hover:bg-white/90 text-gray-900 font-semibold rounded-full transition-colors text-sm">
                            Contractor Program
                            <Icon className="w-4 h-4">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </Icon>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function Testimonials() {
    return (
        <>
            <Head title="Testimonials | Captivating Cabinets" />

            <div className="bg-gray-950 min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <Header />
                    <Reviews />
                    <WhyChoose />
                </main>
                <CtaSection />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
