import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContentPageLayout from '../components/layout/ContentPageLayout';
import PageTitle from '../components/shared/PageTitle';

export default function TuyenDungPage() {
    const breadcrumbItems = [{ label: 'Tuyển dụng', href: '/tuyen-dung' }];

    const jobPositions = [
        {
            id: 'it-developer',
            title: 'Chuyên gia cao cấp Nghiên cứu và phát triển sản phẩm may (R&D Team Leader)',
            imageSrc: '/images/tuyen-dung/tuyen-dung-1.png',
            imageAlt:
                'Chuyên gia cao cấp Nghiên cứu và phát triển sản phẩm may',
            location: 'Đà Nẵng',
        },
        {
            id: 'it-developer',
            title: 'Nhân viên theo dõi đơn hàng may mặc xuất khẩu (Merchandiser)',
            imageSrc: '/images/tuyen-dung/tuyen-dung-1.png',
            imageAlt: 'Nhân viên theo dõi đơn hàng may mặc xuất khẩu',
            location: 'Đà Nẵng',
        },
        {
            id: 'it-developer',
            title: 'Chuyên viên phát triển phần mềm (IT Developer)',
            imageSrc: '/images/tuyen-dung/tuyen-dung-1.png',
            imageAlt: 'Chuyên viên phát triển phần mềm',
            location: 'Đà Nẵng',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/tuyen-dung/banner.png"
            bannerAlt="Tuyển dụng"
            breadcrumbItems={breadcrumbItems}
        >
            <section className="">
                <PageTitle
                    title="Vị trí tuyển dụng"
                    className="mb-10 text-center"
                />

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                    {jobPositions.map(job => (
                        <div
                            key={job.id}
                            className="bg-white rounded-3xl overflow-hidden shadow-md"
                        >
                            <div className="img">
                                <Link href={`/tuyen-dung/${job.id}`}>
                                    <div className="aspect-[4/3] relative">
                                        <Image
                                            src={job.imageSrc}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            alt={job.imageAlt}
                                            className="object-cover rounded-t-3xl"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="content p-5">
                                <h3 className="font-bold text-lg leading-6 text-[#338dcc] mb-4 uppercase">
                                    <Link href={`/tuyen-dung/${job.id}`}>
                                        {job.title}
                                    </Link>
                                </h3>
                                <div className="info-list space-y-3">
                                    <div className="info flex items-center">
                                        <div className="icon mr-3 flex items-center">
                                            <Image
                                                src="/images/tuyen-dung/calendar.svg"
                                                width={24}
                                                height={24}
                                                alt="calendar"
                                                className="w-6 h-6 text-[#338dcc]"
                                            />
                                        </div>
                                        <div className="text-base text-black">
                                            ...
                                        </div>
                                    </div>
                                    <div className="info flex items-center">
                                        <div className="icon mr-3 flex items-center">
                                            <Image
                                                src="/images/tuyen-dung/location.svg"
                                                width={24}
                                                height={24}
                                                alt="location"
                                                className="w-6 h-6 text-[#338dcc]"
                                            />
                                        </div>
                                        <div className="text-base text-black">
                                            {job.location}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </ContentPageLayout>
    );
}
