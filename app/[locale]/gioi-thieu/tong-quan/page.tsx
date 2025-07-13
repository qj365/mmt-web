import React from 'react';
import Image from 'next/image';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types/';
import PageTitle from '@/app/components/shared/PageTitle';
import { useTranslations } from 'next-intl';

export default function TongQuanPage() {
    const t = useTranslations('gioi-thieu.tong-quan');
    const breadcrumbT = useTranslations('menu');

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: breadcrumbT('about'), href: '/gioi-thieu/tong-quan' },
        { label: breadcrumbT('overview'), href: '/gioi-thieu/tong-quan' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/tong-quan/banner.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
        >
            {/* Section 1: Thư ngỏ (Letter Section) */}
            <section className="intro-tongquan-1 section xl:pt-[89px] xl:pb-[94px] py-16">
                <div className="container mx-auto px-4">
                    <div className="box-wrapper flex flex-wrap lg:justify-between gap-8">
                        <div className="box-left flex-auto lg:flex-[0_0_40%] xl:flex-[0_0_calc(460/1230*100%)] lg:mt-16">
                            <div className="img mx-auto lg:mx-0 w-fit lg:w-auto">
                                <Image
                                    src="/images/gioi-thieu/tong-quan/factory-2.png"
                                    alt={t('letter.image_alt')}
                                    width={400}
                                    height={500}
                                    className="rounded-lg max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="box-right flex-auto lg:flex-[0_0_calc(60%-30px)] xl:flex-[0_0_calc(705/1230*100%)] mt-6 lg:mt-0">
                            <div className="content text-right">
                                <div className="big-title text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold uppercase leading-tight text-red-600 break-words">
                                    {t('letter.title')}
                                </div>
                                <div className="medium-title text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold leading-tight uppercase text-gray-700 mt-[10px] mb-4 sm:mb-[30px]">
                                    {t('letter.subtitle')}
                                </div>
                                <div className="des text-base leading-6 text-left text-gray-600 lg:pl-[44px]">
                                    <p className="mb-4">
                                        {t('letter.paragraph_1')}
                                    </p>
                                    <p className="mb-4">
                                        {t('letter.paragraph_2')}
                                    </p>
                                    <p className="mb-4">
                                        {t('letter.paragraph_3')}
                                    </p>
                                    <div className="signature text-right mt-8">
                                        <p>{t('letter.closing')}</p>
                                        <p className="mt-4">
                                            {t('letter.position')}
                                        </p>
                                        <p className="font-bold">
                                            {t('letter.name')}
                                        </p>
                                    </div>
                                </div>
                                <div className="quote text-red-600 text-xl sm:text-2xl leading-7 font-bold italic mt-6 break-words">
                                    &ldquo;{t('letter.quote')}&rdquo;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Giới thiệu (Introduction Section) */}
            <section className="intro-tongquan-2 section xl:pb-[77px] py-16 relative overflow-hidden">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            'url(/images/gioi-thieu/tong-quan/intro-banner.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                ></div>
                <div className="container mx-auto px-4 relative z-10">
                    <PageTitle
                        title={t('intro.title')}
                        className="mb-10"
                        textColor="text-white"
                    />
                    <div className="box-wrapper flex flex-wrap lg:justify-between gap-8">
                        <div className="box-left flex-auto lg:flex-[0_0_50%] xl:flex-[0_0_calc(572/1230*100%)]">
                            <div className="image-wrapper relative">
                                <div className="img rounded-3xl lg:rounded-[200px] lg:rounded-br-none overflow-hidden">
                                    <Image
                                        src="/images/gioi-thieu/tong-quan/worker.png"
                                        alt={t('intro.image_alt')}
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="content mt-7 sm:mt-0 rounded-3xl lg:rounded-[75px] sm:rounded-br-none lg:rounded-br-none bg-primary px-3 py-5 lg:p-10 lg:pb-12 lg:pr-6 sm:absolute sm:bottom-[-15px] sm:right-[-15px] lg:bottom-[-80px] lg:right-[-30px] w-full sm:max-w-[253px]">
                                    <div className="item mb-6">
                                        <div className="icon mb-[10px] flex justify-center sm:justify-start">
                                            <Image
                                                className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-contain"
                                                src="/images/gioi-thieu/tong-quan/intro-icon-1.png"
                                                alt={t('intro.icon1_alt')}
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                        <div className="title text-white font-bold text-xl leading-[25px] uppercase text-center sm:text-left">
                                            {t('intro.feature1')}
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="icon mb-[10px] flex justify-center sm:justify-start">
                                            <Image
                                                className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-contain"
                                                src="/images/gioi-thieu/tong-quan/intro-icon-2.png"
                                                alt={t('intro.icon2_alt')}
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                        <div className="title text-white font-bold text-xl leading-[25px] uppercase text-center sm:text-left">
                                            {t('intro.feature2')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-right flex-auto lg:flex-[0_0_calc(50%-30px)] xl:flex-[0_0_calc(600/1230*100%)] mt-16">
                            <div className="content-wrapper xl:pl-16">
                                <div className="top flex flex-wrap items-baseline mb-10">
                                    <div className="title text-xl sm:text-2xl font-bold text-white">
                                        {t('intro.established')}
                                    </div>
                                    <div className="year font-bold text-5xl sm:text-7xl leading-8 text-red-600 ml-2 sm:ml-5">
                                        {t('intro.year')}
                                    </div>
                                </div>
                                <div className="des text-lg sm:text-xl lg:text-2xl text-white">
                                    <p className="mb-4">
                                        <strong>
                                            {t('intro.company_name')}
                                        </strong>{' '}
                                        {t('intro.description')}
                                    </p>
                                    <p className="mb-2">
                                        <strong>{t('intro.area1')}</strong>
                                    </p>
                                    <p className="mb-6">
                                        <strong>{t('intro.area2')}</strong>
                                    </p>
                                    <p>
                                        {t('intro.not_only')}{' '}
                                        <strong>
                                            {t('intro.leading_supplier')}
                                        </strong>
                                        , {t('intro.core_role')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Video Section */}
            {/* <section className="intro-tongquan-3 section xl:pb-[80px] py-16">
                <div className="container mx-auto px-4">
                    <div className="box-wrapper flex flex-wrap lg:justify-between gap-8">
                        <div className="box-left hidden lg:flex items-center flex-[0_0_100%] lg:flex-[0_0_40%] xl:flex-[0_0_calc(460/1230*100%)] xl:max-w-[calc(460/1230*100%)] xl:mt-9">
                            <div className="logo-svg">
                                <Image
                                    src="/images/gioi-thieu/tong-quan/slogan.svg"
                                    alt={t('video.slogan_alt')}
                                    width={442}
                                    height={196}
                                    className="max-w-full h-auto"
                                />
                            </div>
                        </div>
                        <div className="box-right flex-[0_0_100%] lg:flex-[0_0_calc(60%-30px)] xl:flex-[0_0_calc(704/1230*100%)] xl:mr-0">
                            <div className="video-wrapper relative rounded-3xl overflow-hidden">
                                <div className="playBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer w-[66px] h-[40px] sm:w-[86px] sm:h-[60px] transition-all hover:scale-110">
                                    <div className="bg-white bg-opacity-80 rounded-full w-full h-full flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="image w-full h-full">
                                    <Image
                                        src="https://picsum.photos/800/450?random=6"
                                        alt={t('video.alt')}
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </ContentPageLayout>
    );
}
