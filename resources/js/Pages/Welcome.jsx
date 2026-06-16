import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import Hero from '@/Components/Home/Hero';
import ShipNationwide from '@/Components/Home/ShipNationwide';
import ShopByCategory, { COLOR_ITEMS, BRAND_ITEMS, TYPE_ITEMS } from '@/Components/Home/ShopByCategory';

const SITE_URL = 'https://captivatingcabinets.com';
const OG_IMAGE = `${SITE_URL}/images/cc.webp`;
const TITLE = 'Custom Kitchen Cabinets | Free 3D Design & Nationwide Delivery';
const DESCRIPTION =
    'Captivating Cabinets designs custom kitchen cabinets with free 3D design, contractor pricing, 0% APR financing, and nationwide delivery. Rated 5.0 on Google.';

const STRUCTURED_DATA = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: 'Captivating Cabinets',
    image: OG_IMAGE,
    url: SITE_URL,
    telephone: '+1-609-900-3358',
    email: 'sales@captivatingcabinets.com',
    description: DESCRIPTION,
    priceRange: '$$',
    aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '50',
    },
};

export default function Welcome() {
    return (
        <>
            <Head title={TITLE}>
                <meta name="description" content={DESCRIPTION} head-key="description" />
                <link rel="canonical" href={SITE_URL} head-key="canonical" />

                {/* Open Graph */}
                <meta property="og:type" content="website" head-key="og:type" />
                <meta property="og:title" content={TITLE} head-key="og:title" />
                <meta property="og:description" content={DESCRIPTION} head-key="og:description" />
                <meta property="og:url" content={SITE_URL} head-key="og:url" />
                <meta property="og:image" content={OG_IMAGE} head-key="og:image" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" head-key="twitter:card" />
                <meta name="twitter:title" content={TITLE} head-key="twitter:title" />
                <meta name="twitter:description" content={DESCRIPTION} head-key="twitter:description" />
                <meta name="twitter:image" content={OG_IMAGE} head-key="twitter:image" />

                {/* Structured data for rich results */}
                <script type="application/ld+json">{JSON.stringify(STRUCTURED_DATA)}</script>
            </Head>

            <div className="bg-gray-950 min-h-screen">
                <TopContactBar />
                <Navbar />
                <Hero />
                <main>
                    <ShipNationwide />

                    <ShopByCategory
                        title="Shop Kitchen Cabinets By Brand"
                        description="Premium cabinetry from the brands contractors and designers trust most."
                        items={BRAND_ITEMS}
                        imageSrc="/images/ShopByCategory/shop-by-brand.png"
                        imageAlt="Bright white and wood kitchen with a large island"
                        bgClass="bg-white"
                    />

                    <ShopByCategory
                        title="Shop Kitchen Cabinets By Type"
                        description="Shaker, flat panel, slab and more — pick the door style that defines your look."
                        items={TYPE_ITEMS}
                        imageSrc="/images/ShopByCategory/shop-by-style.png"
                        imageAlt="Two-tone wood and black contemporary kitchen"
                        reverse
                        bgClass="bg-gray-50"
                    />

                    <ShopByCategory
                        title="Shop Kitchen Cabinets By Color"
                        description="From timeless whites to bold, modern tones — find the finish that fits your space."
                        items={COLOR_ITEMS}
                        imageSrc="/images/ShopByCategory/shop-by-color.png"
                        imageAlt="Black and white modern kitchen with gold accents"
                        bgClass="bg-white"
                    />
                </main>
            </div>
        </>
    );
}
