'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useViewportHeight } from '../../hook/useViewportHeight';
import { useTranslations } from 'next-intl';
import PageTitle from '../shared/PageTitle';

export default function BrandsSection() {
    const { sectionHeight } = useViewportHeight();
    const t = useTranslations('home.brands');

    const brands = [
        {
            name: t('items.merriman'),
            logo: 'https://picsum.photos/200/200',
            url: '/nha-may-thuong-hieu/thuong-hieu-truc-thuoc',
        },
        {
            name: t('items.fashion'),
            logo: 'https://picsum.photos/201/201',
            url: '/nha-may-thuong-hieu/thuong-hieu-truc-thuoc',
        },
        {
            name: t('items.commercialCenter'),
            logo: 'https://picsum.photos/202/202',
            url: '/nha-may-thuong-hieu/thuong-hieu-truc-thuoc',
        },
    ];

    return (
        <section
            className="index-5 section pb-0"
            style={sectionHeight ? { minHeight: `${sectionHeight}px` } : {}}
        >
            <div className="container pt-10">
                <PageTitle title={t('title')} />
                <div className="button mt-7 mb-11">
                    <Link
                        href="/gioi-thieu/tong-quan"
                        className="mx-auto mt-7 w-fit block border-2 border-primary rounded-3xl text-primary text-[16px] font-semibold px-[30px] py-2 hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                    >
                        {t('viewMore')}
                    </Link>
                </div>
            </div>

            <div
                className="icon-wrapper flex items-center px-7 flex-col sm:flex-row justify-center w-full sm:gap-x-12 md:gap-x-[115px] gap-y-12 py-12 sm:py-0 flex-grow"
                style={{
                    backgroundColor: '#f0f0f0',
                    backgroundImage: 'url(/images/home/brand-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    minHeight: '50%',
                }}
            >
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="icon w-[140px] sm:w-[120px] lg:w-[150px] 2xl:w-[180px] bg-white rounded-full flex items-center justify-center relative"
                        style={{ aspectRatio: '1/1' }}
                    >
                        <div className="img">
                            <Link href={brand.url} title={brand.name}>
                                <Image
                                    className="p-4 rounded-full"
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={180}
                                    height={180}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
