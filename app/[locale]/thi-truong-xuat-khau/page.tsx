import React from 'react';
import Image from 'next/image';
import { BreadcrumbItem } from '@/app/types';
import PageTitle from '@/app/components/shared/PageTitle';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { useTranslations } from 'next-intl';

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
                <section className="overflow-hidden">
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

                <section className="w-full overflow-hidden">
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
