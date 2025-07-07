import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import ProductCard, { ProductType } from '@/app/components/shared/ProductCard';
import { useTranslations } from 'next-intl';

export default function SanPhamSoiPage() {
    const t = useTranslations('san-pham.san-pham-soi');

    // Breadcrumb items
    const breadcrumbItems = [
        { label: t('breadcrumb_products'), href: '/san-pham' },
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
