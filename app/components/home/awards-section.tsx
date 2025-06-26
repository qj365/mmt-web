'use client';

import Image from 'next/image';
import { useViewportHeight } from '../../hook/useViewportHeight';

const awards = [
    {
        image: 'https://picsum.photos/300/300',
        title: 'Doanh nghiệp ưu tiên về hải quan từ năm 2018 đến nay',
    },
    {
        image: 'https://picsum.photos/301/301',
        title: 'Giải thưởng Thương hiệu Quốc gia 2014, 2016, 2018, 2020, 2022, 2024',
    },
    {
        image: 'https://picsum.photos/302/302',
        title: 'Doanh nghiệp xuất khẩu uy tín',
    },
];

export default function AwardsSection() {
    const { sectionHeight } = useViewportHeight();

    return (
        <section
            className="awards-section py-16 flex flex-col"
            style={sectionHeight ? { minHeight: `${sectionHeight}px` } : {}}
        >
            <div className="container">
                <h2 className="block-title text-center text-black mb-12">
                    THÀNH TÍCH - GIẢI THƯỞNG
                </h2>
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
