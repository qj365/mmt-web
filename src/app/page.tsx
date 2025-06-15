import MainBanner from '../components/home/main-banner';
import IntroSection from '../components/home/intro-section';
import VideoSection from '../components/home/video-section';
import ExportMarkets from '../components/home/export-markets';
import ProductsSection from '../components/home/products-section';
import BrandsSection from '../components/home/brands-section';
import AwardsSection from '../components/home/awards-section';

export default function Home() {
    return (
        <>
            <MainBanner />
            <IntroSection />
            <VideoSection />
            <ExportMarkets />
            <ProductsSection />
            <BrandsSection />
            <AwardsSection />
        </>
    );
}
