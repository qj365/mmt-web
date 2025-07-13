'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useViewportHeight } from '../../hook/useViewportHeight';
import { useTranslations } from 'next-intl';
import PageTitle from '../shared/PageTitle';

export default function ProductsSection() {
    const t = useTranslations('home.products');
    const { sectionHeight } = useViewportHeight();

    const productCategories = [
        {
            title: t('yarn'),
            image: '/images/home/sp-soi.png',
            url: '/san-pham/san-pham-soi',
        },
        {
            title: t('garment'),
            image: '/images/home/may-xk.jpg',
            url: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            title: t('domesticFashion'),
            image: '/images/home/sp-noi-dia.png',
            url: '/san-pham/thoi-trang-noi-dia',
        },
    ];

    return (
        <section
            className="index-4 pb-5 flex items-center max-w-[1260px] mx-auto"
            style={sectionHeight ? { minHeight: `${sectionHeight}px` } : {}}
        >
            <div className="container">
                <PageTitle title={t('title')} />
                <div className="index-4-grid grid grid-cols-1 sm:grid-cols-3 gap-[30px] mt-7">
                    {productCategories.map((category, index) => (
                        <div
                            key={index}
                            className="item relative zoom-img rounded-3xl overflow-hidden flex flex-col"
                        >
                            <div className="img h-[400px] sm:h-[450px] md:h-[500px] relative flex-grow">
                                <Link
                                    href={category.url}
                                    title={category.title}
                                    className="block h-full"
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover"
                                        loading="lazy"
                                        sizes="(max-width: 640px) 100vw, 33vw"
                                    />
                                </Link>
                            </div>
                            <div className="title text-white text-2xl text-center font-bold uppercase leading-[normal] absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-2">
                                {category.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
