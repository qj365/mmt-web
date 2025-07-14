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
import SEO from '../components/shared/SEO';

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

    // Create homepage-specific JSON-LD
    const homeJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: locale === 'vi' ? 'Dệt may Minh Minh Tâm' : 'ミンミンタム織物',
        url: process.env.NEXT_PUBLIC_BASE_URL,
        potentialAction: {
            '@type': 'SearchAction',
            target: `${process.env.NEXT_PUBLIC_BASE_URL}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
        },
    };

    return (
        <>
            <SEO locale={locale} jsonLd={homeJsonLd} />
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
