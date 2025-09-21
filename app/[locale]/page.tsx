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
        '@type': 'Organization',
        name:
            locale === 'vi'
                ? 'Công ty TNHH May Minh Minh Tâm'
                : 'ミンミンタム縫製有限責任会社',
        alternateName:
            locale === 'vi' ? 'Dệt may Minh Minh Tâm' : 'ミンミンタム織物',
        url: process.env.NEXT_PUBLIC_BASE_URL,
        logo: `${process.env.NEXT_PUBLIC_BASE_URL}/images/home/logo.png`,
        description:
            locale === 'vi'
                ? 'Nhà sản xuất hàng đầu về dệt may và sản phẩm xuất khẩu tại Việt Nam với hơn 25 năm kinh nghiệm'
                : 'ベトナムの主要な紡織・輸出製品メーカー、25年以上の経験',
        foundingDate: '1996',
        industry: locale === 'vi' ? 'Dệt may và may mặc' : '紡織・縫製',
        numberOfEmployees: 150,
        address: {
            '@type': 'PostalAddress',
            addressCountry: 'VN',
            addressRegion: locale === 'vi' ? 'Bình Thuận' : 'ビントゥアン省',
        },
        sameAs: [process.env.NEXT_PUBLIC_BASE_URL],
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
