import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Icon from '@/Components/Home/Icon';

/* ============================ Hero ============================ */

function Hero({ bgImage = '/images/kichan-imgs/hero-img7.png' }) {
    return (
        <section className="relative min-h-[42vh] flex flex-col overflow-hidden pt-20" aria-label="Blog hero">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-black/5" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5" aria-hidden="true" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-container mx-auto px-6 lg:px-8 pt-10 lg:pt-12 pb-10 lg:pb-14">
                    <div className="max-w-2xl">
                        <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                            Blog
                        </span>
                        <h1 className="mt-4 font-sans font-normal text-white text-[44px] leading-[48px] md:text-[56px] md:leading-[56px]">
                            Kitchen Cabinet <span className="text-amber-400">Insights</span>
                        </h1>
                        <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                            Expert tips, design inspiration, and industry insights to help you make the best decisions for your kitchen project.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ============================ Data ============================ */

const THUMBS = [
    '/images/gallery/Gallery-8-Captivating-Cabinets.webp',
    '/images/gallery/Gallery-2--Captivating-Cabinets.webp',
    '/images/gallery/Gallery-3--Captivating-Cabinets.webp',
    '/images/gallery/Gallery-4--Captivating-Cabinets.webp',
    '/images/gallery/Gallery-5--Captivating-Cabinets.webp',
    '/images/gallery/Gallery-6--Captivating-Cabinets.webp',
    '/images/gallery/Gallery-9-Captivating-Cabinets.webp',
    '/images/gallery/Gallery-10-Captivating-Cabinets.webp',
    '/images/gallery/Gallery-11-Captivating-Cabinets.webp',
    '/images/gallery/Gallery-13-Captivating-Cabinets.webp',
    '/images/gallery/Gallery-21-Driftwood-Captivating-Cabinets.webp',
    '/images/gallery/Gallery-3-Driftwood.webp',
];

const POSTS = [
    { title: 'Popular Kitchen Cabinet Brands', date: 'May 28, 2026' },
    { title: 'What to Know Before Hiring a Kitchen Cabinet Design Service', date: 'May 5, 2026' },
    { title: 'Custom vs RTA Kitchen Cabinets: Which Is Right for Your Remodel?', date: 'Mar 16, 2026' },
    { title: 'How to Choose the Right Kitchen Cabinets for Your Home', date: 'Mar 16, 2026' },
    { title: 'Kitchen Cabinet Styles: Popular Designs and Color Trends for 2026', date: 'Jan 22, 2026' },
    { title: 'Types of Kitchen Cabinets: A Complete Guide to Styles and Options', date: 'Jan 22, 2026' },
    { title: 'Kitchen Cabinet Brands: Choosing the Best for Your Dream Kitchen', date: 'Jan 22, 2026' },
    { title: 'Free 3D Kitchen Design: Everything You Need to Know Before You Start', date: 'Jan 22, 2026' },
    { title: 'Choosing Durable Cabinet Materials That Last for Years', date: 'Nov 18, 2025' },
    { title: 'RTA Cabinet Assembly: A Step-by-Step Beginner’s Guide', date: 'Nov 4, 2025' },
    { title: 'Cabinet Hardware Trends That Elevate Any Kitchen', date: 'Sep 12, 2025' },
    { title: 'Designing a Functional Kitchen Layout From Scratch', date: 'Jun 26, 2025' },
];

function PostCard({ title, date, img }) {
    return (
        <a href="#" className="group flex flex-col overflow-hidden rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_48px_rgba(55,65,81,0.12)]">
            <div className="relative aspect-[16/10] overflow-hidden">
                <img src={img} alt={title} loading="lazy" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <span className="absolute top-3 left-3 inline-block rounded-full bg-amber-400 text-gray-900 text-[11px] font-bold px-3 py-1">
                    Sales Info
                </span>
            </div>
            <div className="flex flex-col flex-1 p-6">
                <p className="text-xs text-[#374151]/50">{date}</p>
                <h3 className="mt-2 font-display text-lg font-bold text-[#374151] tracking-tight leading-snug group-hover:text-amber-600 transition-colors">
                    {title}
                </h3>
                <span className="mt-4 inline-flex items-center gap-1.5 text-amber-600 text-sm font-semibold">
                    Read article
                    <Icon className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </Icon>
                </span>
            </div>
        </a>
    );
}

function PostsGrid() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="Blog posts">
            <div className="max-w-container mx-auto px-6 lg:px-8">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {POSTS.map((p, i) => (
                        <PostCard key={p.title} title={p.title} date={p.date} img={THUMBS[i % THUMBS.length]} />
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function Blogs() {
    return (
        <>
            <Head title="Blog | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <Hero />
                    <PostsGrid />
                </main>
                <FooterCTA bgImage="/images/kichan-imgs/cta-blogs.png" />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
