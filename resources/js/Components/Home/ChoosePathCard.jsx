import PathOption from '@/Components/Home/PathOption';
import GoogleReviews from '@/Components/Home/GoogleReviews';

const GOOGLE_REVIEWS_URL =
    'https://www.google.com/maps/reviews/data=!4m8!14m7!1m6!2m5!1sCi9DQUlRQUNvZENodHljRjlvT2poa1dHeHdNMHAxV2xoNGVXMXNMV1ZCU214YVJrRRAB!2m1!1s0x0:0x7e5374e12422a88!3m1!1s2@1:CAIQACodChtycF9oOjhkWGxwM0p1Wlh4eW1sLWVBSmxaRkE%7C0dK1bEA4igk%7C';

const HOME_OWNER_ICON = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
);
const CONTRACTOR_ICON = (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
);

export default function ChoosePathCard() {
    return (
        <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px]">
                {/* Ambient glow */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-amber-400/20 via-amber-400/0 to-transparent blur-2xl" aria-hidden="true" />

                <div className="relative bg-gradient-to-br from-white/[0.14] to-white/[0.04] backdrop-blur-xl border border-white/15 rounded-2xl p-6 shadow-2xl">
                    {/* Header */}
                    <div className="mb-5">
                        <h2 className="font-display text-white text-xl font-semibold leading-tight">Where do you fit?</h2>
                        <p className="text-white/55 text-xs mt-1">Pick a path for a tailored experience</p>
                    </div>

                    <PathOption
                        icon={HOME_OWNER_ICON}
                        title="Home Owners"
                        description="Free 3D design & expert guidance"
                        className="mb-2.5"
                    />
                    <PathOption
                        icon={CONTRACTOR_ICON}
                        title="Contractors & Designers"
                        description="Exclusive pricing & support"
                    />

                    <GoogleReviews rating={4.9} count={247} href={GOOGLE_REVIEWS_URL} />
                </div>
            </div>
        </div>
    );
}
