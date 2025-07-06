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
            image: 'https://picsum.photos/300/300',
            title: t('items.customs'),
        },
        {
            image: 'https://picsum.photos/301/301',
            title: t('items.nationalBrand'),
        },
        {
            image: 'https://picsum.photos/302/302',
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
                className="awards-bg flex-grow flex items-center"
                style={{
                    backgroundImage: 'url(/images/home/award-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="container">
                    <div className="relative section py-16 lg:py-24">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                            {awards.map((award, index) => (
                                <div
                                    key={index}
                                    className="award-item flex flex-col items-center"
                                >
                                    <div className="relative w-full max-w-[380px]">
                                        <div className="rounded-full bg-white overflow-hidden w-full aspect-square flex flex-col items-center justify-center p-6">
                                            <div className="flex-1 flex items-center justify-center w-full">
                                                <Image
                                                    className="object-contain max-h-[150px]"
                                                    src={award.image}
                                                    alt={award.title}
                                                    width={200}
                                                    height={200}
                                                    loading="lazy"
                                                />
                                            </div>

                                            <div className="text-center mt-8">
                                                <p className="text-md font-medium text-black leading-tight mb-8">
                                                    {award.title}
                                                </p>
                                            </div>
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
