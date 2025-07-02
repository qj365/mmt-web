import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import MainBanner from './components/home/MainBanner';
import IntroSection from './components/home/IntroSection';
import VideoSection from './components/home/VideoSection';
import ExportMarkets from './components/home/ExportMarkets';
import ProductsSection from './components/home/';
import BrandsSection from './components/home/BrandsSection';
import AwardsSection from './components/home/AwardsSection';

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <MainBanner />
                <IntroSection />
                <VideoSection />
                <ExportMarkets />
                <ProductsSection />
                <BrandsSection />
                <AwardsSection />
            </main>
            <Footer />
        </>
    );
}
