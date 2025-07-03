import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import ProductCard, { ProductType } from '@/app/components/shared/ProductCard';

export default function SanPhamSoiPage() {
    // Breadcrumb items
    const breadcrumbItems = [
        { label: 'Sản phẩm', href: '/san-pham' },
        { label: 'Sản phẩm sợi', href: '/san-pham/san-pham-soi' },
    ];

    // Products data
    const products: ProductType[] = [
        {
            name: 'Sợi TC',
            slug: 'soi-tc',
            imageSrc: '/images/san-pham/san-pham-soi/soi-tc.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: 'Sợi xe các loại',
            slug: 'soi-xe',
            imageSrc: '/images/san-pham/san-pham-soi/so-xe-cac-loai.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: 'Sợi CD',
            slug: 'soi-cd',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cd.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: 'Sợi CVC',
            slug: 'soi-cvc',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cvc.png',
            basePath: '/san-pham/san-pham-soi',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/san-pham/san-pham-soi/banner.png"
            bannerAlt="Sản phẩm"
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-[#F5F5F5]"
        >
            <div className="flex flex-col items-center">
                <PageTitle title="Sản phẩm sợi" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-7 w-full">
                    {products.map(product => (
                        <ProductCard key={product.slug} {...product} />
                    ))}
                </div>
            </div>
        </ContentPageLayout>
    );
}
