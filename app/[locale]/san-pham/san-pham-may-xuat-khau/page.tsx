import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import ProductCard, { ProductType } from '@/app/components/shared/ProductCard';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    // Get the locale from params
    const { locale } = await params;

    // Define metadata for different languages
    const metadata: Record<string, Metadata> = {
        vi: {
            title: 'Sản phẩm may xuất khẩu - Dệt may Minh Minh Tâm',
            description:
                'Khám phá các sản phẩm may mặc xuất khẩu chất lượng cao của Dệt may Minh Minh Tâm, bao gồm veston, quần tây, áo khoác, đồ bảo hộ lao động và các sản phẩm dệt kim.',
            keywords:
                'sản phẩm may mặc, xuất khẩu, veston, quần tây, áo khoác, bảo hộ lao động, dệt kim, Minh Minh Tâm',
            openGraph: {
                title: 'Sản phẩm may xuất khẩu - Dệt may Minh Minh Tâm',
                description:
                    'Khám phá các sản phẩm may mặc xuất khẩu chất lượng cao của Dệt may Minh Minh Tâm, bao gồm veston, quần tây, áo khoác, đồ bảo hộ lao động và các sản phẩm dệt kim.',
                images: ['/images/san-pham/san-pham-may-xuat-khau/banner.png'],
            },
        },
        ja: {
            title: '縫製輸出製品 - ミン ミン タム紡織',
            description:
                'ミン ミン タム紡織の高品質な縫製輸出製品をご覧ください。スーツ、ズボン、ジャケット、作業服、ニット製品を含みます。',
            keywords:
                '縫製製品, 輸出, スーツ, ズボン, ジャケット, 作業服, ニット製品, ミン ミン タム',
            openGraph: {
                title: '縫製輸出製品 - ミン ミン タム紡織',
                description:
                    'ミン ミン タム紡織の高品質な縫製輸出製品をご覧ください。スーツ、ズボン、ジャケット、作業服、ニット製品を含みます。',
                images: ['/images/san-pham/san-pham-may-xuat-khau/banner.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function SanPhamMayXuatKhauPage() {
    const t = useTranslations('menu');
    const tGarments = useTranslations('san-pham.garments');

    // Breadcrumb items
    const breadcrumbItems = [
        { label: t('products'), href: '/san-pham' },
        {
            label: t('garment_products'),
            href: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    // Products data
    const products: ProductType[] = [
        {
            name: tGarments('suits.title'),
            slug: 'veston',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/veston.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: tGarments('trousers.title'),
            slug: 'quan-tay',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/quan-tay.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: tGarments('workwear.title'),
            slug: 'bao-ho-lao-dong',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/bao-ho.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: tGarments('jackets.title'),
            slug: 'ao-khoac',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/ao-khoac.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: tGarments('knitwear.title'),
            slug: 'det-kim',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/det-kim.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/san-pham/san-pham-may-xuat-khau/banner.png"
            bannerAlt={tGarments('jackets.banner.alt')}
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-[#F5F5F5]"
        >
            <div className="flex flex-col items-center">
                <PageTitle title={t('garment_products')} />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-7 w-full">
                    {products.map(product => (
                        <ProductCard key={product.slug} {...product} />
                    ))}
                </div>
            </div>
        </ContentPageLayout>
    );
}
