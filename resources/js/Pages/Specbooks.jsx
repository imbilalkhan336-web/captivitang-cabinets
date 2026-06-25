import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Icon from '@/Components/Home/Icon';

/* ============================ Hero ============================ */

function Hero({ bgImage = '/images/kichan-imgs/hero-img6.png' }) {
    return (
        <section className="relative min-h-[42vh] flex flex-col overflow-hidden pt-20" aria-label="Specbooks hero">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" aria-hidden="true" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 pt-10 lg:pt-12 pb-10 lg:pb-14">
                    <div className="max-w-2xl">
                        <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                            Resources
                        </span>
                        <h1 className="mt-4 font-sans font-normal text-white text-[44px] leading-[48px] md:text-[56px] md:leading-[56px]">
                            Cabinet <span className="text-amber-400">Specification</span> Books
                        </h1>
                        <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                            Download detailed specification books for our premium cabinet collections. Get comprehensive information on materials, construction, finishes, dimensions, and available options.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ Data ============================ */

const SPECBOOKS = [
    {
        line: 'Allure',
        title: 'Fabuwood Allure Line',
        body: 'Discover the elegance of Fabuwood Allure with its timeless design and impeccable craftsmanship. Elevate your space with premium materials and exquisite finishes that exude sophistication and style.',
        href: '#',
    },
    {
        line: 'Illume',
        title: 'Fabuwood Illume Line',
        body: 'Experience the refined European aesthetic of Fabuwood Illume. Its sophisticated design language and superior construction bring continental elegance and modern functionality to your kitchen.',
        href: '#',
    },
    {
        line: 'Quest',
        title: 'Fabuwood Quest Line',
        body: 'Versatile design options and exceptional value. Quest offers quality construction with a range of styles—perfect for budget-conscious projects without compromising on looks.',
        href: '#',
    },
    {
        line: 'Valencia',
        title: 'Fabuwood Valencia Line',
        body: 'Contemporary styling with clean lines and modern finishes, combined with affordability and quality craftsmanship for a fresh, on-trend kitchen.',
        href: '#',
    },
    {
        line: 'Value',
        title: 'Fabuwood Value Line',
        body: 'The Value collection delivers essential quality and reliable performance at an accessible price point—dependable cabinetry for any project.',
        href: '#',
    },
];

function SpecbookCard({ line, title, body, href }) {
    return (
        <div className="flex flex-col rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]">
            <div className="flex items-start justify-between gap-4">
                <span className="flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                    <Icon className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </Icon>
                </span>
                <span className="mt-1 inline-block text-amber-600 text-[11px] font-bold uppercase tracking-[0.18em]">{line}</span>
            </div>

            <h3 className="mt-5 font-display text-xl font-bold text-[#374151] tracking-tight">{title}</h3>
            <p className="mt-2 text-[#374151]/70 text-[15px] leading-relaxed flex-1">{body}</p>

            <a
                href={href}
                className="mt-6 inline-flex items-center justify-center gap-2 px-5 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 text-sm font-semibold rounded-full transition-colors"
            >
                <Icon className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </Icon>
                Download Specbook
            </a>
        </div>
    );
}

function SpecbooksGrid() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Specification books">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {SPECBOOKS.map((s) => (
                        <SpecbookCard key={s.line} {...s} />
                    ))}
                </div>

                <p className="mt-10 text-center text-[#374151]/60 text-sm">
                    Need pricing or a custom specbook? <a href="/contact" className="text-amber-600 font-semibold hover:underline">Contact our team</a> and we’ll send it right over.
                </p>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function Specbooks() {
    return (
        <>
            <Head title="Cabinet Specbooks | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <Hero />
                    <SpecbooksGrid />
                </main>
                <FooterCTA bgImage="/images/kichan-imgs/cta-specbooks.png" />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
