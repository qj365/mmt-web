import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types';
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
            title: 'Tầm nhìn sứ mệnh - Dệt may Minh Minh Tâm',
            description:
                'Khám phá tầm nhìn, sứ mệnh và giá trị cốt lõi của Công ty TNHH May Minh Minh Tâm - những định hướng phát triển và triết lý kinh doanh của doanh nghiệp.',
            keywords:
                'tầm nhìn, sứ mệnh, giá trị cốt lõi, Minh Minh Tâm, phát triển bền vững, đối tác tin cậy',
            openGraph: {
                title: 'Tầm nhìn sứ mệnh - Dệt may Minh Minh Tâm',
                description:
                    'Khám phá tầm nhìn, sứ mệnh và giá trị cốt lõi của Công ty TNHH May Minh Minh Tâm - những định hướng phát triển và triết lý kinh doanh của doanh nghiệp.',
                images: ['/images/gioi-thieu/tam-nhin/banner.png'],
            },
        },
        ja: {
            title: 'ビジョンと使命 - ミン ミン タム紡織',
            description:
                'ミン ミン タム縫製有限会社のビジョン、使命、そして企業としての開発指針とビジネス哲学を支える中核的価値観について。',
            keywords:
                'ビジョン, 使命, 中核的価値観, ミン ミン タム, 持続可能な発展, 信頼できるパートナー',
            openGraph: {
                title: 'ビジョンと使命 - ミン ミン タム紡織',
                description:
                    'ミン ミン タム縫製有限会社のビジョン、使命、そして企業としての開発指針とビジネス哲学を支える中核的価値観について。',
                images: ['/images/gioi-thieu/tam-nhin/banner.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function TamNhinSuMenh() {
    const t = useTranslations('gioi-thieu.tam-nhin-su-menh');

    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        {
            label: useTranslations('menu')('about'),
            href: '/gioi-thieu/tong-quan',
        },
        {
            label: useTranslations('menu')('vision'),
            href: '/gioi-thieu/tam-nhin-su-menh',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/tam-nhin/banner.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/gioi-thieu/tam-nhin/bg.png"
            containerClassName="py-24 sm:py-[134px]"
        >
            <div className="wrapper max-w-[495px]">
                <h1 className="block-title border-left uppercase">
                    {t('title')}
                </h1>
                <div className="des mt-8">
                    <p>
                        <strong>
                            <span className="text-red-600">
                                {t('vision.title')}
                            </span>
                        </strong>
                        <br />• {t('vision.content')}
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                {t('mission.title')}
                            </span>
                        </strong>
                        <br />• {t('mission.content')}
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                {t('core_values.title')}
                            </span>
                        </strong>
                        <br />• {t('core_values.value1')}
                        <br />• {t('core_values.value2')}
                        <br />• {t('core_values.value3')}
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                {t('strategy.title')}
                            </span>
                        </strong>
                        <br />• {t('strategy.content')}
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                {t('slogan.title')}{' '}
                            </span>
                        </strong>
                        <em>&ldquo;{t('slogan.content')}&rdquo;</em>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                {t('principles.title')}
                            </span>
                        </strong>
                        <br />• {t('principles.principle1')}
                        <br />• {t('principles.principle2')}
                        <br />• {t('principles.principle3')}
                        <br />• {t('principles.principle4')}
                        <br />• {t('principles.principle5')}
                    </p>
                </div>
            </div>
        </ContentPageLayout>
    );
}
