import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import Home2Hero from '@/Components/Home/Home2Hero';
import ShopByCategory, { COLOR_ITEMS, BRAND_ITEMS, TYPE_ITEMS } from '@/Components/Home/ShopByCategory';
import PromoCards from '@/Components/Home/PromoCards';
import FeatureHighlights from '@/Components/Home/FeatureHighlights';
import SampleDoors from '@/Components/Home/SampleDoors';
import Gallery from '@/Components/Home/Gallery';
import AudiencePaths from '@/Components/Home/AudiencePaths';
import HowItWorks from '@/Components/Home/HowItWorks';
import Testimonials from '@/Components/Home/Testimonials';
import Faq from '@/Components/Home/Faq';
import FooterCTA from '@/Components/Home/FooterCTA';
import Footer from '@/Components/Home/Footer';
import StickyCTABar from '@/Components/Home/StickyCTABar';

export default function Home2() {
    return (
        <>
            <Head title="Home 2 | Captivating Cabinets" />

            <div className="bg-gray-950 min-h-screen">
                <TopContactBar />
                <Navbar />
                <Home2Hero bgImage="/images/home-hero-bg.png" />
                <main>
                    <FeatureHighlights />
                    <PromoCards />
                    <ShopByCategory
                        title="Shop Kitchen Cabinets By Brand"
                        description="From boutique craftsmen to industry leaders — we partner with the brands trusted by designers and contractors nationwide. Choose the maker your kitchen deserves."
                        items={BRAND_ITEMS}
                        imageSrc="/images/ShopByCategory/shop-by-brand.png"
                        imageAlt="Bright white and wood kitchen with a large island"
                    />

                    <ShopByCategory
                        title="Shop by Cabinet Type"
                        description="From wall and base cabinets to tall pantries and vanities, find the right cabinet for every part of your kitchen, bath, and beyond."
                        items={TYPE_ITEMS}
                        centered
                    />

                    <ShopByCategory
                        title="Shop Kitchen Cabinets By Color"
                        description="Classic White Shaker Cabinets? Trendy Green Shades? Find the perfect kitchen cabinets to match your style. Browse by color to create a space that feels just right for you."
                        items={COLOR_ITEMS}
                        imageSrc="/images/gallery/Gallery-8-Captivating-Cabinets.webp"
                        imageAlt="Classic kitchen with cream cabinets and a dark granite island"
                    />

                    <SampleDoors />
                    <Gallery />
                    <AudiencePaths />
                    <HowItWorks />
                    <Testimonials />
                    <Faq />
                </main>

                <FooterCTA />
                <Footer />
                <StickyCTABar />
            </div>
        </>
    );
}
