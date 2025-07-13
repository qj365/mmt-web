import React from 'react';
import Image from 'next/image';
import { BreadcrumbItem } from '@/app/types';
import PageTitle from '@/app/components/shared/PageTitle';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
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
            title: 'Thị trường xuất khẩu - Dệt may Minh Minh Tâm',
            description:
                'Khám phá các thị trường xuất khẩu chính của Công ty TNHH May Minh Minh Tâm - danh sách quốc gia, biểu đồ thống kê và sản phẩm chủ lực xuất khẩu.',
            keywords:
                'thị trường xuất khẩu, dệt may xuất khẩu, Minh Minh Tâm, thị phần xuất khẩu, quốc gia nhập khẩu, sản phẩm xuất khẩu',
            openGraph: {
                title: 'Thị trường xuất khẩu - Dệt may Minh Minh Tâm',
                description:
                    'Khám phá các thị trường xuất khẩu chính của Công ty TNHH May Minh Minh Tâm - danh sách quốc gia, biểu đồ thống kê và sản phẩm chủ lực xuất khẩu.',
                images: ['/images/thanh-tich/banner.png'],
            },
        },
        ja: {
            title: '輸出市場 - ミン ミン タム紡織',
            description:
                'ミン ミン タム縫製有限会社の主要輸出市場の探索 - 国のリスト、統計チャート、および主要輸出製品。',
            keywords:
                '輸出市場, 繊維輸出, ミン ミン タム, 輸出シェア, 輸入国, 輸出製品',
            openGraph: {
                title: '輸出市場 - ミン ミン タム紡織',
                description:
                    'ミン ミン タム縫製有限会社の主要輸出市場の探索 - 国のリスト、統計チャート、および主要輸出製品。',
                images: ['/images/thanh-tich/banner.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function ExportMarketsPage() {
    const t = useTranslations('thi-truong-xuat-khau');
    const menuT = useTranslations('menu');

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: menuT('export_markets'), href: '/thi-truong-xuat-khau' },
    ];

    return (
        <>
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
