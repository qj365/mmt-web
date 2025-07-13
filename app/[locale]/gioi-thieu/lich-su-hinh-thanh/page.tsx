import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import Image from 'next/image';
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
        namespace: 'gioi-thieu.lich-su',
    });

    return {
        title: `${t('title')} - Minh Minh Tâm`,
        description: `${t('meta_description')}`,
    };
}

export default function LichSuPage() {
    const t = useTranslations('gioi-thieu.lich-su');
    const menuT = useTranslations('menu');

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: menuT('home'), href: '/' },
        { label: menuT('about'), href: '/gioi-thieu/tong-quan' },
        { label: menuT('history'), href: '/gioi-thieu/lich-su-hinh-thanh' },
    ];

    const timelineItems = [
        {
            year: '1996',
            image: '/images/gioi-thieu/lich-su/history-1.png',
            content: (
                <ul>
                    <li className="text-justify">{t('timeline.1996')}</li>
                </ul>
            ),
        },
        {
            year: '2009',
            image: '/images/gioi-thieu/lich-su/history-2.png',
            content: (
                <ul className="text-justify">
                    <li>
                        <p>{t.rich('timeline.2009.title')}</p>
                        <ul className="list-disc pl-5">
                            <li>{t('timeline.2009.products')}</li>
                            <li>{t('timeline.2009.certifications')}</li>
                        </ul>
                    </li>
                </ul>
            ),
        },
        {
            year: '2019',
            image: '/images/gioi-thieu/lich-su/history-3.png',
            content: (
                <ul className="text-justify">
                    <li>{t('timeline.2019.title')}</li>
                    <li>
                        <p>{t('timeline.2019.factory_info')}</p>
                        <ul className="list-disc pl-5">
                            <li>{t('timeline.2019.area')}</li>
                            <li>{t('timeline.2019.investment')}</li>
                            <li>{t('timeline.2019.business_scope')}</li>
                        </ul>
                    </li>
                </ul>
            ),
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/lich-su/banner.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
            containerClassName="intro-lichsu section xl:pt-[80px] xl:pb-[100px]"
        >
            <div className="container">
                <PageTitle
                    title={t('title')}
                    className="text-center mb-8 md:mb-14"
                />

                <div className="year-list relative mt-8 xl:mt-14">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="year-item relative">
                            <div className="box-news">
                                <div className="wrapper relative max-w-[calc(100%-25px)] lg:max-w-[50%] xl:max-w-[390px]">
                                    <div className="img relative h-[200px] md:h-[280px]">
                                        <Image
                                            src={item.image}
                                            alt={item.year}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="content mt-5 text-base leading-5 text-gray-700 font-normal">
                                        {item.content}
                                    </div>
                                    <div className="year absolute z-10 top-0 text-center font-normal text-xl md:text-4xl text-white py-2 px-6 bg-secondary rounded-r-md">
                                        {item.year}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentPageLayout>
    );
}
