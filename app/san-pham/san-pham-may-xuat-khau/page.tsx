import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import ProductCard, { ProductType } from '@/app/components/shared/ProductCard';

export default function SanPhamMayXuatKhauPage() {
    // Breadcrumb items
    const breadcrumbItems = [
        { label: 'Sản phẩm', href: '/san-pham' },
        {
            label: 'Sản phẩm may xuất khẩu',
            href: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    // Products data
    const products: ProductType[] = [
        {
            name: 'Veston',
            slug: 'veston',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/vesto.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: 'Quần tây',
            slug: 'quan-tay',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/quan-tay.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: 'Bảo hộ lao động',
            slug: 'bao-ho-lao-dong',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/bao-ho.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: 'Áo khoác',
            slug: 'ao-khoac',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/ao-khoac.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: 'Dệt kim',
            slug: 'det-kim',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/det-kim.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/san-pham/san-pham-may-xuat-khau/banner.png"
            bannerAlt="Sản phẩm"
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-[#F5F5F5]"
        >
            <div className="flex flex-col items-center">
                <PageTitle title="Sản phẩm may xuất khẩu" />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-7 w-full">
                    {products.map(product => (
                        <ProductCard key={product.slug} {...product} />
                    ))}
                </div>
            </div>
        </ContentPageLayout>
    );
}
