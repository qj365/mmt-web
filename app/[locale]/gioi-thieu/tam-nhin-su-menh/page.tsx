import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types';
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
        namespace: 'gioi-thieu.tam-nhin-su-menh',
    });

    return {
        title: `${t('title')} - MINH MINH TÂM`,
    };
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
