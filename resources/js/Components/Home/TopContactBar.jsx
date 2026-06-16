import { useEffect, useState } from 'react';
import Icon from '@/Components/Home/Icon';

const OFFERS = [
    {
        icon: (
            <>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h2.586a1 1 0 01.707.293l3.414 3.414a1 1 0 01.293.707V16a1 1 0 01-1 1h-1" />
            </>
        ),
        text: <>Free Shipping on orders over <span className="font-semibold">$2,500</span></>,
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M5 6h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2z" />,
        text: <><span className="font-semibold">0% APR</span> Financing with Affirm</>,
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M7 7h.01M7 3h5a1.99 1.99 0 011.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />,
        text: <><span className="font-semibold text-amber-300">40% OFF</span> Fabuwood Allure Galaxy Frost</>,
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12a9 9 0 1118 0 9 9 0 01-18 0zm9-9v18m-9-9h18" />,
        text: <>We Ship Nationwide</>,
    },
    {
        icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />,
        text: <>Quality Guaranteed</>,
    },
];

const PHONE_ICON = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />;
const SMS_ICON = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />;
const MAIL_ICON = <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />;

function Divider({ className }) {
    return <span className={`${className} text-white/20`} aria-hidden="true">|</span>;
}

function ContactLink({ href, icon, label, value, className = '' }) {
    return (
        <a href={href} className={`items-center gap-1.5 hover:text-amber-400 transition-colors whitespace-nowrap ${className}`}>
            <Icon className="w-3.5 h-3.5">{icon}</Icon>
            <span><span className="text-white/55">{label}</span> {value}</span>
        </a>
    );
}

export default function TopContactBar() {
    const [offerIndex, setOfferIndex] = useState(0);

    useEffect(() => {
        const id = setInterval(() => {
            setOfferIndex((i) => (i + 1) % OFFERS.length);
        }, 3800);
        return () => clearInterval(id);
    }, []);

    const offer = OFFERS[offerIndex];

    return (
        <div className="w-full bg-black text-white/90 text-xs">
            <div className="max-w-container mx-auto px-4 sm:px-6 min-[1440px]:px-0 py-2 flex items-center justify-between gap-4">
                {/* Left - Rotating Offers */}
                <div className="min-w-0 overflow-hidden">
                    <span key={offerIndex} className="inline-flex items-center gap-1.5 whitespace-nowrap animate-offer-in">
                        <Icon className="w-3.5 h-3.5 text-amber-400 flex-shrink-0">{offer.icon}</Icon>
                        <span>{offer.text}</span>
                    </span>
                </div>

                {/* Right - Contact + Contractor link */}
                <div className="flex items-center gap-3 flex-shrink-0">
                    <ContactLink href="tel:+16099003358" icon={PHONE_ICON} label="Call:" value="(609) 900-3358" className="inline-flex" />
                    <Divider className="hidden sm:inline" />
                    <ContactLink href="sms:+16099003552" icon={SMS_ICON} label="Text:" value="(609) 900-3552" className="hidden sm:inline-flex" />
                    <Divider className="hidden lg:inline" />
                    <ContactLink href="mailto:sales@captivatingcabinets.com" icon={MAIL_ICON} label="Email:" value="sales@captivatingcabinets.com" className="hidden lg:inline-flex" />
                    <Divider className="hidden md:inline" />
                    <a href="#" className="hidden md:inline-flex items-center gap-1.5 text-amber-400 hover:text-amber-300 transition-colors whitespace-nowrap font-semibold">
                        <Icon className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </Icon>
                        <span>Contractor Program</span>
                    </a>
                </div>
            </div>
        </div>
    );
}
