import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types';
import PageTitle from '@/app/components/shared/PageTitle';
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
            title: 'Lời cam kết - Dệt may Minh Minh Tâm',
            description:
                'Những cam kết của Công ty TNHH May Minh Minh Tâm đối với khách hàng và nhân viên - đảm bảo chất lượng sản phẩm, thực hiện trách nhiệm xã hội và tạo môi trường làm việc chuyên nghiệp.',
            keywords:
                'lời cam kết, cam kết với khách hàng, cam kết với nhân viên, trách nhiệm xã hội, Minh Minh Tâm',
            openGraph: {
                title: 'Lời cam kết - Dệt may Minh Minh Tâm',
                description:
                    'Những cam kết của Công ty TNHH May Minh Minh Tâm đối với khách hàng và nhân viên - đảm bảo chất lượng sản phẩm, thực hiện trách nhiệm xã hội và tạo môi trường làm việc chuyên nghiệp.',
                images: ['/images/gioi-thieu/loi-cam-ket/bg.png'],
            },
        },
        ja: {
            title: 'コミットメント - ミン ミン タム紡織',
            description:
                'ミン ミン タム縫製有限会社のお客様と従業員に対する約束 - 製品品質の保証、社会的責任の実行、そしてプロフェッショナルな職場環境の創出。',
            keywords:
                'コミットメント, お客様への約束, 従業員への約束, 社会的責任, ミン ミン タム',
            openGraph: {
                title: 'コミットメント - ミン ミン タム紡織',
                description:
                    'ミン ミン タム縫製有限会社のお客様と従業員に対する約束 - 製品品質の保証、社会的責任の実行、そしてプロフェッショナルな職場環境の創出。',
                images: ['/images/gioi-thieu/loi-cam-ket/bg.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
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
