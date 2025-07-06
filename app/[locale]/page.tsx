import Header from '../components/layout/header';
import Footer from '../components/layout/footer';
import MainBanner from '../components/home/MainBanner';
import IntroSection from '../components/home/IntroSection';
import ExportMarkets from '../components/home/ExportMarkets';
import AwardsSection from '../components/home/AwardsSection';
// import BrandsSection from '../components/home/BrandsSection';
import ProductsSection from '../components/home/ProductsSection';
import VideoSection from '../components/home/VideoSection';
import { setRequestLocale } from 'next-intl/server';
import { routing } from '../i18n/routing';

export function generateStaticParams() {
    return routing.locales.map(locale => ({ locale }));
}

export default async function Home({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    // Await params first to access the locale property
    const { locale } = await params;

    // Enable static rendering
    setRequestLocale(locale);

    return (
        <>
            <Header />
            <main>
                <MainBanner />
                <IntroSection />
                <ExportMarkets />
                <ProductsSection />
                <AwardsSection />
                <VideoSection />
                {/* <BrandsSection /> */}
            </main>
            <Footer />
        </>
    );
}
