import React from 'react';
import Image from 'next/image';
import { BreadcrumbItem } from '@/app/types';
import PageTitle from '@/app/components/shared/PageTitle';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import JsonLd, { BreadcrumbJsonLd } from '@/app/components/shared/JsonLd';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: 'thi-truong-xuat-khau',
    });

    return {
        title: `${t('meta.title')} - Minh Minh Tâm`,
        description: t('meta.description'),
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/thi-truong-xuat-khau`,
            languages: {
                vi: `${process.env.NEXT_PUBLIC_BASE_URL}/thi-truong-xuat-khau`,
                ja: `${process.env.NEXT_PUBLIC_BASE_URL}/ja/thi-truong-xuat-khau`,
            },
        },
        openGraph: {
            title: t('meta.title'),
            description: t('meta.description'),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/thi-truong-xuat-khau`,
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/thanh-tich/banner.png`,
                    width: 1200,
                    height: 630,
                    alt: t('banner.alt'),
                },
            ],
        },
    };
}

export default function ExportMarketsPage() {
    const t = useTranslations('thi-truong-xuat-khau');
    const menuT = useTranslations('menu');

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: menuT('home'), href: '/' },
        { label: menuT('export_markets'), href: '/thi-truong-xuat-khau' },
    ];

    // Convert breadcrumb items for JSON-LD
    const breadcrumbJsonLd = breadcrumbItems.map(item => ({
        name: item.label,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${item.href}`,
    }));

    return (
        <>
            <BreadcrumbJsonLd breadcrumbItems={breadcrumbJsonLd} />
            <JsonLd
                type="WebPage"
                data={{
                    name: t('meta.title'),
                    description: t('meta.description'),
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/thi-truong-xuat-khau`,
                }}
            />
            <ContentPageLayout
                bannerImage="/images/thanh-tich/banner.png"
                bannerAlt={t('banner.alt')}
                breadcrumbItems={breadcrumbItems}
            >
                <section className="">
                    <div className="container">
                        <PageTitle title={t('chart_title')} />
                        <div className="image mt-7">
                            <div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px]">
                                <Image
                                    src="/images/thanh-tich/chart.png"
                                    alt={t('chart_alt')}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full ">
                    <div className="container mx-auto">
                        <PageTitle title={t('market_title')} />
                    </div>
                    <div className="w-full mt-7">
                        <div className="max-w-full">
                            <Image
                                src="/images/thanh-tich/global.gif"
                                alt={t('market_alt')}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                    maxWidth: '100%',
                                }}
                                priority
                            />
                        </div>
                    </div>
                </section>
            </ContentPageLayout>
        </>
    );
}
