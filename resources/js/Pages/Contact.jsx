import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';
import Icon from '@/Components/Home/Icon';

const PHONE = '609-900-3358';
const TEXT = '609-900-3552';
const EMAIL = 'Sales@CaptivatingCabinets.com';

/* ============================ Hero ============================ */

function Hero({ bgImage = '/images/kichan-imgs/hero-contact.png' }) {
    return (
        <section className="relative min-h-[42vh] flex flex-col overflow-hidden pt-20" aria-label="Contact hero">
            <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }} aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/10" aria-hidden="true" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/15" aria-hidden="true" />

            <div className="relative z-10 flex-1 flex items-center">
                <div className="w-full max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 pt-10 lg:pt-12 pb-10 lg:pb-14">
                    <div className="max-w-2xl">
                        <span className="inline-block text-amber-400 text-xs font-bold uppercase tracking-[0.22em]">
                            Contact Us
                        </span>
                        <h1 className="mt-4 font-sans font-normal text-white text-[40px] leading-[44px] md:text-[52px] md:leading-[56px]">
                            Let’s Talk About Your <span className="text-amber-400">Dream Kitchen</span>
                        </h1>
                        <p className="mt-5 text-white/85 text-lg leading-relaxed max-w-xl">
                            Our expert team is ready to help you bring your vision to life. Reach out today for personalized service and professional guidance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ====================== Contact details + form ====================== */

const FIELD = 'w-full rounded-xl border border-[#374151]/15 bg-[#F9FAFB] px-4 py-2.5 text-sm text-[#374151] placeholder:text-[#374151]/40 shadow-sm transition-colors hover:border-[#374151]/25 focus:bg-white focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400/25';
const LABEL = 'block text-sm font-medium text-[#374151] mb-1.5';

const DETAILS = [
    {
        title: 'Call Us',
        value: PHONE,
        href: `tel:+1${PHONE.replace(/-/g, '')}`,
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />,
    },
    {
        title: 'Text Us',
        value: TEXT,
        href: `sms:+1${TEXT.replace(/-/g, '')}`,
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4-.8L3 20l1.3-3.9A7.96 7.96 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />,
    },
    {
        title: 'Email Us',
        value: EMAIL,
        href: `mailto:${EMAIL}`,
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.6} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />,
    },
];

function ContactSection() {
    return (
        <section className="bg-white py-16 lg:py-24" aria-label="Contact details">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-start">
                    {/* Left — details */}
                    <div>
                        <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                            Get in touch
                        </span>
                        <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                            Choose your preferred way to connect
                        </h2>
                        <p className="mt-4 text-[#374151]/70 text-base leading-relaxed">
                            We typically respond to all inquiries within 2–4 business hours. Prefer to talk it through? Call or text us anytime during business hours.
                        </p>

                        <div className="mt-8 space-y-4">
                            {DETAILS.map(({ title, value, href, icon }) => (
                                <a
                                    key={title}
                                    href={href}
                                    className="group flex items-center gap-4 rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(55,65,81,0.12)]"
                                >
                                    <span className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-100">
                                        <Icon className="w-6 h-6">{icon}</Icon>
                                    </span>
                                    <div>
                                        <p className="text-sm font-semibold text-[#374151]">{title}</p>
                                        <p className="text-[#374151]/60 text-sm">{value}</p>
                                    </div>
                                    <Icon className="ml-auto w-4 h-4 text-[#374151]/30 transition-transform group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </Icon>
                                </a>
                            ))}
                        </div>

                        {/* Hours */}
                        <div className="mt-6 rounded-2xl bg-[#F3F4F6] border border-[#374151]/10 p-6">
                            <div className="flex items-center gap-2 text-[#374151] font-semibold">
                                <Icon className="w-5 h-5 text-amber-600">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </Icon>
                                Business Hours
                            </div>
                            <div className="mt-3 flex items-center justify-between text-sm">
                                <span className="text-[#374151]/70">Monday – Friday</span>
                                <span className="text-[#374151] font-medium">8:30 AM – 5:00 PM EST</span>
                            </div>
                            <div className="mt-1.5 flex items-center justify-between text-sm">
                                <span className="text-[#374151]/70">Saturday – Sunday</span>
                                <span className="text-[#374151] font-medium">Closed</span>
                            </div>
                        </div>
                    </div>

                    {/* Right — message form */}
                    <div className="rounded-2xl bg-white shadow-[0_20px_50px_rgba(55,65,81,0.14)] ring-1 ring-[#374151]/10 p-6 sm:p-8">
                        <h3 className="font-display text-xl font-bold text-[#374151] tracking-tight">Send us a message</h3>
                        <p className="mt-1 text-[#374151]/60 text-sm">Tell us about your project and we’ll be in touch.</p>

                        <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="c-name" className={LABEL}>Full name</label>
                                    <input id="c-name" type="text" required placeholder="Jane Doe" className={FIELD} />
                                </div>
                                <div>
                                    <label htmlFor="c-phone" className={LABEL}>Phone</label>
                                    <input id="c-phone" type="tel" inputMode="numeric" placeholder="(609) 900-3358" className={FIELD} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="c-email" className={LABEL}>Email</label>
                                <input id="c-email" type="email" required placeholder="jane@example.com" className={FIELD} />
                            </div>
                            <div>
                                <label htmlFor="c-subject" className={LABEL}>Subject</label>
                                <input id="c-subject" type="text" placeholder="How can we help?" className={FIELD} />
                            </div>
                            <div>
                                <label htmlFor="c-msg" className={LABEL}>Message</label>
                                <textarea id="c-msg" rows={4} required placeholder="Tell us about your kitchen project…" className={FIELD} />
                            </div>
                            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-full transition-colors text-sm">
                                Send Message
                                <Icon className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </Icon>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ====================== How can we help ====================== */

const HELP = [
    { title: 'Cabinet Selection', body: 'Not sure where to start? We’ll help you find the right brand, style, and finish.' },
    { title: 'Free 3D Design', body: 'Get a complimentary 3D rendering of your dream kitchen before you commit.' },
    { title: 'Pricing & Quotes', body: 'Request a detailed quote with transparent, competitive pricing.' },
    { title: 'Order Status', body: 'Already ordered? Reach out for an update on your project timeline.' },
    { title: 'Contractor Program', body: 'Builders and trade pros—unlock wholesale pricing and priority support.' },
    { title: 'Product Information', body: 'Questions on materials, construction, or specs? We’ve got answers.' },
];

function HowCanWeHelp() {
    return (
        <section className="bg-[#F3F4F6] py-16 lg:py-24" aria-label="How can we help">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0">
                <div className="text-center max-w-2xl mx-auto">
                    <span className="inline-block text-amber-600 text-xs font-bold uppercase tracking-[0.22em]">
                        Support
                    </span>
                    <h2 className="mt-3 font-display text-3xl md:text-4xl font-bold text-[#374151] tracking-tight leading-tight">
                        How can we help you?
                    </h2>
                </div>

                <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {HELP.map(({ title, body }) => (
                        <div key={title} className="rounded-2xl bg-white border border-[#374151]/10 shadow-[0_10px_30px_rgba(55,65,81,0.06)] p-7">
                            <h3 className="font-display text-lg font-bold text-[#374151] tracking-tight">{title}</h3>
                            <p className="mt-2 text-[#374151]/70 text-[15px] leading-relaxed">{body}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

/* ============================ Page ============================ */

export default function Contact() {
    return (
        <>
            <Head title="Contact Us | Captivating Cabinets" />

            <div className="bg-white min-h-screen">
                <TopContactBar />
                <Navbar />
                <main>
                    <Hero />
                    <ContactSection />
                    <HowCanWeHelp />
                </main>
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
