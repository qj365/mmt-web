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
        namespace: 'san-pham.san-pham-soi',
    });

    return {
        title: `${t('meta.title')} - Minh Minh Tâm`,
        description: t('meta.description'),
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-soi`,
            languages: {
                vi: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-soi`,
                ja: `${process.env.NEXT_PUBLIC_BASE_URL}/ja/san-pham/san-pham-soi`,
            },
        },
        openGraph: {
            title: t('meta.title'),
            description: t('meta.description'),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-soi`,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/san-pham/san-pham-soi/banner.png`,
                    width: 1200,
                    height: 630,
                    alt: t('banner.alt'),
                },
            ],
        },
    };
}

export default function SanPhamSoiPage() {
    const t = useTranslations('san-pham.san-pham-soi');
    const menuT = useTranslations('menu');

    // Breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: menuT('home'), href: '/' },
        { label: menuT('products'), href: '/san-pham' },
        {
            label: t('breadcrumb_yarn_products'),
            href: '/san-pham/san-pham-soi',
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
        <>
            <BreadcrumbJsonLd breadcrumbItems={breadcrumbJsonLd} />
            <JsonLd
                type="WebPage"
                data={{
                    name: t('meta.title'),
                    description: t('meta.description'),
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/san-pham/san-pham-soi`,
                }}
            />
            <ContentPageLayout
                bannerImage="/images/san-pham/san-pham-soi/banner.png"
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
