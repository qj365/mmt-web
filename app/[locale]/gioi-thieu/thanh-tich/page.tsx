import React from 'react';
import Image from 'next/image';
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
        namespace: 'gioi-thieu.thanh-tich',
    });

    return {
        title: `${t('title')} - Minh Minh Tâm`,
    };
}

export default function ThanhTichPage() {
    const t = useTranslations('gioi-thieu.thanh-tich');
    const menuT = useTranslations('menu');

    const breadcrumbItems: BreadcrumbItem[] = [
        {
            label: menuT('about'),
            href: '/gioi-thieu/tong-quan',
        },
        {
            label: menuT('achievements'),
            href: '/gioi-thieu/thanh-tich',
        },
    ];

    const achievements = [
        {
            id: 1,
            title: t('achievements.customs'),
            image: '/images/gioi-thieu/thanh-tich/trophy-1.png',
        },
        {
            id: 2,
            title: t('achievements.nationalBrand'),
            image: '/images/gioi-thieu/thanh-tich/trophy-2.png',
        },
        {
            id: 3,
            title: t('achievements.exportCredibility'),
            image: '/images/gioi-thieu/thanh-tich/trophy-3.png',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/thanh-tich/banner.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/gioi-thieu/thanh-tich/bg.png"
        >
            <div className="w-full overflow-hidden">
                <PageTitle title={t('title')} className="text-center mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {achievements.map(achievement => (
                        <div
                            key={achievement.id}
                            className="flex flex-col items-center w-full"
                        >
                            <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg mb-6 w-full max-w-[280px] h-[320px]">
                                <div className="border-b border-dashed border-gray-300 pb-6 mb-6 text-center w-full">
                                    <div className="relative h-[170px] w-[170px] mx-auto">
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="w-full text-center h-[70px] flex items-center justify-center">
                                    <p className="text-lg font-medium leading-6 line-clamp-3 overflow-hidden">
                                        {achievement.title}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentPageLayout>
    );
}
