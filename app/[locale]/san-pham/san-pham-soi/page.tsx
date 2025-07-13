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
            title: 'Sản phẩm sợi - Dệt may Minh Minh Tâm',
            description:
                'Khám phá các sản phẩm sợi chất lượng cao của Dệt may Minh Minh Tâm, bao gồm sợi TC, sợi xe các loại, sợi CD và sợi CVC đáp ứng tiêu chuẩn xuất khẩu.',
            keywords:
                'sợi dệt, sợi TC, sợi xe, sợi CD, sợi CVC, sản phẩm sợi, dệt may, Minh Minh Tâm',
            openGraph: {
                title: 'Sản phẩm sợi - Dệt may Minh Minh Tâm',
                description:
                    'Khám phá các sản phẩm sợi chất lượng cao của Dệt may Minh Minh Tâm, bao gồm sợi TC, sợi xe các loại, sợi CD và sợi CVC đáp ứng tiêu chuẩn xuất khẩu.',
                images: ['/images/san-pham/san-pham-soi/banner.png'],
            },
        },
        ja: {
            title: '糸製品 - ミン ミン タム紡織',
            description:
                'ミン ミン タム紡織の高品質な糸製品をご覧ください。TC糸、混紡糸、CD糸、CVC糸など、輸出基準を満たす各種糸を提供しています。',
            keywords:
                '紡績糸, TC糸, 混紡糸, CD糸, CVC糸, 糸製品, 紡織, ミン ミン タム',
            openGraph: {
                title: '糸製品 - ミン ミン タム紡織',
                description:
                    'ミン ミン タム紡織の高品質な糸製品をご覧ください。TC糸、混紡糸、CD糸、CVC糸など、輸出基準を満たす各種糸を提供しています。',
                images: ['/images/san-pham/san-pham-soi/banner.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function SanPhamSoiPage() {
    const t = useTranslations('san-pham.san-pham-soi');

    // Breadcrumb items
    const breadcrumbItems = [
        { label: t('breadcrumb_products'), href: '/san-pham-soi' },
        {
            label: t('breadcrumb_yarn_products'),
            href: '/san-pham/san-pham-soi',
        },
    ];

    // Products data
    const products: ProductType[] = [
        {
            name: t('products.soi-tc.name'),
            slug: 'soi-tc',
            imageSrc: '/images/san-pham/san-pham-soi/soi-tc.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: t('products.soi-xe-cac-loai.name'),
            slug: 'soi-xe-cac-loai',
            imageSrc: '/images/san-pham/san-pham-soi/so-xe-cac-loai.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: t('products.soi-cd.name'),
            slug: 'soi-cd',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cd.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: t('products.soi-cvc.name'),
            slug: 'soi-cvc',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cvc.png',
            basePath: '/san-pham/san-pham-soi',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/san-pham/san-pham-soi/banner.png"
            bannerAlt={t('breadcrumb_products')}
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-[#F5F5F5]"
        >
            <div className="flex flex-col items-center">
                <PageTitle title={t('title')} />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-7 w-full">
                    {products.map(product => (
                        <ProductCard key={product.slug} {...product} />
                    ))}
                </div>
            </div>
        </ContentPageLayout>
    );
}
