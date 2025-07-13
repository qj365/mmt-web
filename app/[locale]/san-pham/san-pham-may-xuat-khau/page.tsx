import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import ProductCard, { ProductType } from '@/app/components/shared/ProductCard';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import JsonLd, { BreadcrumbJsonLd } from '@/app/components/shared/JsonLd';
import { BreadcrumbItem } from '@/app/types';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: 'san-pham.may-xuat-khau',
    });

    return {
        title: `${t('meta.title')} - Minh Minh Tâm`,
        description: t('meta.description'),
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-may-xuat-khau`,
            languages: {
                vi: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-may-xuat-khau`,
                ja: `${process.env.NEXT_PUBLIC_BASE_URL}/ja/san-pham/san-pham-may-xuat-khau`,
            },
        },
        openGraph: {
            title: t('meta.title'),
            description: t('meta.description'),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-may-xuat-khau`,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/san-pham/san-pham-may-xuat-khau/banner.png`,
                    width: 1200,
                    height: 630,
                    alt: t('banner.alt'),
                },
            ],
        },
    };
}

export default function SanPhamMayXuatKhauPage() {
    const t = useTranslations('san-pham.may-xuat-khau');
    const menuT = useTranslations('menu');

    // Breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: menuT('home'), href: '/' },
        { label: menuT('products'), href: '/san-pham' },
        {
            label: menuT('export_garment_products'),
            href: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    // Convert breadcrumb items for JSON-LD
    const breadcrumbJsonLd = breadcrumbItems.map(item => ({
        name: item.label,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${item.href}`,
    }));

    // Products data
    const products: ProductType[] = [
        {
            name: t('products.veston.name'),
            slug: 'veston',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/veston.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: t('products.quan_tay.name'),
            slug: 'quan-tay',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/quan-tay.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: t('products.bao_ho.name'),
            slug: 'bao-ho-lao-dong',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/bao-ho.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: t('products.ao_khoac.name'),
            slug: 'ao-khoac',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/ao-khoac.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: t('products.det_kim.name'),
            slug: 'det-kim',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/det-kim.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    return (
        <>
            <BreadcrumbJsonLd breadcrumbItems={breadcrumbJsonLd} />
            <JsonLd
                type="WebPage"
                data={{
                    name: t('meta.title'),
                    description: t('meta.description'),
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-may-xuat-khau`,
                }}
            />
            <ContentPageLayout
                bannerImage="/images/san-pham/san-pham-may-xuat-khau/banner.png"
                bannerAlt={t('banner.alt')}
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
        </>
    );
}
