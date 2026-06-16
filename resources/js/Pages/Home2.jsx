import { Head } from '@inertiajs/react';
import TopContactBar from '@/Components/Home/TopContactBar';
import Navbar from '@/Components/Home/Navbar';
import Home2Hero from '@/Components/Home/Home2Hero';
import ShopByCategory, { COLOR_ITEMS, BRAND_ITEMS, TYPE_ITEMS } from '@/Components/Home/ShopByCategory';
import PromoCards from '@/Components/Home/PromoCards';
import FeatureHighlights from '@/Components/Home/FeatureHighlights';
import SampleDoors from '@/Components/Home/SampleDoors';
import Gallery from '@/Components/Home/Gallery';

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
                        title="Shop Kitchen Cabinets By Type"
                        description="Whether you love the timeless lines of a Shaker door or the seamless look of a slab front, find the style that fits the way you cook, gather, and live."
                        items={TYPE_ITEMS}
                        imageSrc="/images/ShopByCategory/shop-by-style.png"
                        imageAlt="Two-tone wood and black contemporary kitchen"
                        reverse
                    />

                    <ShopByCategory
                        title="Shop Kitchen Cabinets By Color"
                        description="Classic White Shaker Cabinets? Trendy Green Shades? Find the perfect kitchen cabinets to match your style. Browse by color to create a space that feels just right for you."
                        items={COLOR_ITEMS}
                        imageSrc="/images/ShopByCategory/shop-by-color.png"
                        imageAlt="Black and white modern kitchen with gold accents"
                    />

                    <SampleDoors />
                    <Gallery />
                </main>
            </div>
        </>
    );
}
