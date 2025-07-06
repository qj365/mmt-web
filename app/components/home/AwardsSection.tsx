'use client';

import Image from 'next/image';
import { useViewportHeight } from '../../hook/useViewportHeight';
import { useTranslations } from 'next-intl';
import PageTitle from '../shared/PageTitle';

export default function AwardsSection() {
    const { sectionHeight } = useViewportHeight();
    const t = useTranslations('home.awards');

    const awards = [
        {
            id: 1,
            image: '/images/gioi-thieu/thanh-tich/trophy-1.png',
            title: t('items.customs'),
        },
        {
            id: 2,
            image: '/images/gioi-thieu/thanh-tich/trophy-2.png',
            title: t('items.nationalBrand'),
        },
        {
            id: 3,
            image: '/images/gioi-thieu/thanh-tich/trophy-3.png',
            title: t('items.exportCredibility'),
        },
    ];

    return (
        <section
            className="awards-section py-16 flex flex-col"
            style={sectionHeight ? { minHeight: `${sectionHeight}px` } : {}}
        >
            <div className="container">
                <PageTitle title={t('title')} />
            </div>

            <div
                className="awards-bg flex-grow flex items-center mt-7"
                style={{
                    backgroundImage: 'url(/images/home/award-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container">
                    <div className="relative section py-16 lg:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {awards.map(award => (
                                <div
                                    key={award.id}
                                    className="flex flex-col items-center w-full"
                                >
                                    <div className="bg-white rounded-2xl p-6 flex flex-col items-center shadow-lg mb-6 w-full max-w-[280px] h-[320px]">
                                        <div className="border-b border-dashed border-gray-300 pb-6 mb-6 text-center w-full">
                                            <div className="relative h-[170px] w-[170px] mx-auto">
                                                <Image
                                                    src={award.image}
                                                    alt={award.title}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </div>
                                        <div className="w-full text-center h-[70px] flex items-center justify-center">
                                            <p className="text-lg font-medium leading-6 line-clamp-3 overflow-hidden">
                                                {award.title}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
