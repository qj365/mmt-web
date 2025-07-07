import React from 'react';
import Image from 'next/image';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import { BreadcrumbItem } from '@/app/types';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: 'nha-may-thuong-hieu',
    });

    return {
        title: t('meta.title'),
        description: t('meta.description'),
    };
}

export default function NhaMaySoi() {
    const t = useTranslations('nha-may-thuong-hieu');

    // Breadcrumb data
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: t('breadcrumb.factory_brand'), href: '/nha-may-thuong-hieu' },
        { label: t('breadcrumb.yarn_factory'), href: '/nha-may-thuong-hieu' },
    ];

    // Factory information data
    const factoryInfo = [
        {
            icon: '/images/nha-may-thuong-hieu/ic-1.svg',
            text: t('factory_info.area'),
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-2.svg',
            text: t('factory_info.workers'),
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-3.svg',
            text: t('factory_info.production_capacity'),
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-4.svg',
            text: t('factory_info.annual_output'),
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-5.svg',
            text: t('factory_info.address'),
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-7.svg',
            text: t('factory_info.main_products'),
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-6.svg',
            text: t('factory_info.certifications'),
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-7.svg',
            text: t('factory_info.yarn_count'),
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/nha-may-thuong-hieu/banner-1.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
        >
            <div>
                {/* Factory Title */}
                <PageTitle title={t('title')} className="mb-10" />

                {/* Factory Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-start">
                    {/* Factory Image */}
                    <div className="lg:mt-[40px] xl:mt-[50px] relative">
                        <div className="rounded-3xl overflow-hidden">
                            <Image
                                src="/images/nha-may-thuong-hieu/factory.png"
                                alt={t('factory_image.alt')}
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Factory Info */}
                    <div className="mt-5 lg:mt-0">
                        <h2 className="font-bold text-2xl leading-7 uppercase text-black mb-5">
                            {t('factory_info.title')}
                        </h2>
                        <div className="rounded-md bg-white p-6 shadow-sm">
                            {factoryInfo.map((info, index) => (
                                <div
                                    key={index}
                                    className="info flex items-center mb-4 last:mb-0"
                                >
                                    <div className="icon flex-[0_0_40px] h-[40px] mr-4 sm:mr-6 flex items-center justify-center">
                                        <Image
                                            src={info.icon}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <div className="ctn">{info.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Map Section */}
                <div className="mt-16">
                    <PageTitle title={t('map.title')} className="mb-7" />
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1602.3281546998924!2d107.71732293423482!3d10.80894916508426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175cb7c2eb86f71%3A0xe890a128060c9391!2zVHJ1bmcgdMOibSBow6BuaCBjaMOtbmggSMOgbSBUw6Ju!5e1!3m2!1svi!2s!4v1751903415120!5m2!1svi!2s"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        </ContentPageLayout>
    );
}
