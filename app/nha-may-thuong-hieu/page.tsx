import React from 'react';
import Image from 'next/image';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import { BreadcrumbItem } from '@/app/types';

export default function NhaMaySoiHoaTho1() {
    // Breadcrumb data
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Nhà máy - Thương hiệu', href: '/nha-may-thuong-hieu' },
        { label: 'Nhà máy sợi', href: '/nha-may-thuong-hieu' },
    ];

    // Factory information data
    const factoryInfo = [
        {
            icon: '/images/nha-may-thuong-hieu/ic-1.svg',
            text: 'Diện tích 4.125m2',
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-2.svg',
            text: 'Lao động 150 người',
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-3.svg',
            text: 'Năng lực sản xuất 22.000 cọc sợi',
        },
        { icon: '/images/nha-may-thuong-hieu/ic-4.svg', text: '5.000 tấn/năm' },
        {
            icon: '/images/nha-may-thuong-hieu/ic-5.svg',
            text: 'Khu phố 1, Thị trấn Tân Nghĩa, Quận Hàm Tân, Tỉnh Bình Thuận, Việt Nam',
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-7.svg',
            text: 'Đồng phục y tế, đồng phục bảo hộ',
        },
        {
            icon: '/images/nha-may-thuong-hieu/ic-6.svg',
            text: 'OEKO-TEX STANDARD 100, ISO 9001-2015, COTTON USA, BCI, USTERIZED, GOTS, GRS CERTIFICATE',
        },
        { icon: '/images/nha-may-thuong-hieu/ic-7.svg', text: 'Ne16-Ne32' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/nha-may-thuong-hieu/banner-1.png"
            bannerAlt="Nhà máy - Thương hiệu"
            breadcrumbItems={breadcrumbItems}
        >
            <div>
                {/* Factory Title */}
                <PageTitle title="Nhà máy Sợi MINH MINH TÂM 1" className="mb-10" />

                {/* Factory Info Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-start">
                    {/* Factory Image */}
                    <div className="lg:mt-[40px] xl:mt-[50px] relative">
                        <div className="rounded-3xl overflow-hidden">
                            <Image
                                src="/images/nha-may-thuong-hieu/factory.png"
                                alt="Nhà máy May MINH MINH TÂM"
                                width={600}
                                height={400}
                                className="w-full h-auto rounded-3xl"
                            />
                        </div>
                    </div>

                    {/* Factory Info */}
                    <div className="mt-5 lg:mt-0">
                        <h2 className="font-bold text-2xl leading-7 uppercase text-black mb-5">
                            Thông tin nhà máy
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
                    <PageTitle title="Vị trí bản đồ" className="mb-7" />
                    <div className="overflow-hidden rounded-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.864858149773!2d108.20261200000002!3d16.020549000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421a280c163acf%3A0xd3dad95c5dbd82cb!2zVOG7lW5nIEPDtG5nIHR5IEPhu5UgcGjhuqduIEThu4d0IE1heSBIw7JhIFRo4buNIChIb2EgVGhvIFRleHRpbGUgQW5kIEdhcm1lbnQgSk9JTlQgU1RPQ0sgQ09SUE9SQVRJT04p!5e0!3m2!1svi!2s!4v1654594809023!5m2!1svi!2s"
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
