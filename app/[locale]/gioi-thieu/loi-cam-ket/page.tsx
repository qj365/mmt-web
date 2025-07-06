import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types';
import PageTitle from '@/app/components/shared/PageTitle';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    // Await params first to access the locale property
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: 'gioi-thieu.loi-cam-ket',
    });

    return {
        title: `${t('title')} - MINH MINH TÂM`,
    };
}

export default function LoiCamKet() {
    const t = useTranslations('gioi-thieu.loi-cam-ket');

    // Define breadcrumb items for navigation
    const breadcrumbItems: BreadcrumbItem[] = [
        {
            label: useTranslations('menu')('about'),
            href: '/gioi-thieu/tong-quan',
        },
        {
            label: useTranslations('menu')('commitment'),
            href: '/gioi-thieu/loi-cam-ket',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/tong-quan/banner.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/gioi-thieu/loi-cam-ket/bg.png"
        >
            <PageTitle title={t('title')} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Commitment to Customers */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow">
                    <h2 className="text-xl md:text-2xl font-bold mb-5 text-center text-secondary">
                        {t('customer.title')}
                    </h2>
                    <div className="space-y-4 text-base">
                        <p className="text-justify">
                            1. {t('customer.point1')}
                        </p>
                        <p className="text-justify">
                            2. {t('customer.point2')}
                        </p>
                        <p className="text-justify">
                            3. {t('customer.point3')}
                        </p>
                    </div>
                </div>

                {/* Commitment to Employees */}
                <div className="bg-white p-8 md:p-10 rounded-3xl shadow">
                    <h2 className="text-xl md:text-2xl font-bold mb-5 text-center text-secondary">
                        {t('employee.title')}
                    </h2>
                    <div className="space-y-4 text-base">
                        <p className="text-justify">
                            1. {t('employee.point1')}
                        </p>
                        <p className="text-justify">
                            2. {t('employee.point2')}
                        </p>
                        <p className="text-justify">
                            3. {t('employee.point3')}
                        </p>
                    </div>
                </div>
            </div>
        </ContentPageLayout>
    );
}
