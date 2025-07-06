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
            image: 'https://picsum.photos/600/800',
            url: '/san-pham/san-pham-soi',
        },
        {
            title: t('garment'),
            image: 'https://picsum.photos/601/800',
            url: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            title: t('domesticFashion'),
            image: 'https://picsum.photos/602/800',
            url: '/san-pham/thoi-trang-noi-dia',
        },
    ];

    return (
        <section
            className="index-4 section pb-5 flex items-center"
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
