import React from 'react';
import Image from 'next/image';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types';
import PageTitle from '@/app/components/shared/PageTitle';

export default function ThanhTichPage() {
    const breadcrumbItems: BreadcrumbItem[] = [
        {
            label: 'Giới thiệu',
            href: '/gioi-thieu/tong-quan',
        },
        {
            label: 'Thành tích',
            href: '/gioi-thieu/thanh-tich',
        },
    ];

    const achievements = [
        {
            id: 1,
            title: 'Doanh nghiệp ưu tiên về hải quan từ năm 2018 đến nay',
            image: '/images/gioi-thieu/thanh-tich/trophy-1.png',
        },
        {
            id: 2,
            title: 'Giải thưởng Thương hiệu Quốc gia 2014, 2016, 2018, 2020, 2022, 2024',
            image: '/images/gioi-thieu/thanh-tich/trophy-2.png',
        },
        {
            id: 3,
            title: 'Doanh nghiệp xuất khẩu uy tín',
            image: '/images/gioi-thieu/thanh-tich/trophy-3.png',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/thanh-tich/banner.png"
            bannerAlt="Thành tích Hoà Thọ"
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/gioi-thieu/thanh-tich/bg.png"
        >
            <div className="py-10">
                <PageTitle title="Thành tích" className="text-center mb-10" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
                    {achievements.map(achievement => (
                        <div
                            key={achievement.id}
                            className="flex flex-col items-center"
                        >
                            <div className="bg-white rounded-full p-6 flex flex-col items-center shadow-lg mb-6">
                                <div className="border-b border-dashed border-gray-300 pb-6 mb-6 text-center">
                                    <div className="relative h-[170px] w-[170px]">
                                        <Image
                                            src={achievement.image}
                                            alt={achievement.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                </div>
                                <div className="max-w-[220px] mx-auto text-center">
                                    <p className="text-lg font-medium leading-6 line-clamp-3">
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
