'use client';

import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import ProductCard, { ProductType } from '@/app/components/shared/ProductCard';
import VerticalPageTitle from '@/app/components/shared/VerticalPageTitle';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

export default function SoiCDPage() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
        null
    );

    // Breadcrumb items for the page
    const breadcrumbItems = [
        { label: 'Sản phẩm sợi', href: '/san-pham/san-pham-soi' },
        { label: 'Sợi CD', href: '/san-pham/san-pham-soi/soi-cd' },
    ];

    // Related products
    const relatedProducts: ProductType[] = [
        {
            name: 'Sợi TC',
            slug: 'soi-tc',
            imageSrc: '/images/san-pham/san-pham-soi/soi-tc.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: 'Sợi xe các loại',
            slug: 'soi-xe-cac-loai',
            imageSrc: '/images/san-pham/san-pham-soi/so-xe-cac-loai.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: 'Sợi CVC',
            slug: 'soi-cvc',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cvc.png',
            basePath: '/san-pham/san-pham-soi',
        },
    ];

    // Product images for the gallery
    const productImages = [
        '/images/san-pham/san-pham-soi/soi-cd.png',
        '/images/san-pham/san-pham-soi/soi-cd.png',
        '/images/san-pham/san-pham-soi/soi-cd.png',
        '/images/san-pham/san-pham-soi/soi-cd.png',
        '/images/san-pham/san-pham-soi/soi-cd.png',
    ];

    return (
        <>
            <ContentPageLayout
                bannerImage="/images/san-pham/san-pham-soi/banner.png"
                bannerAlt="Sản phẩm"
                breadcrumbItems={breadcrumbItems}
                containerClassName="bg-[#F5F5F5]"
            >
                <div className="mx-auto">
                    {/* Product Detail */}
                    <div className="product-detail bg-white shadow-sm rounded-3xl overflow-hidden p-[30px]">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {/* Product Image Gallery */}
                            <div className="product-image">
                                <div className="main mb-4">
                                    <Swiper
                                        spaceBetween={10}
                                        navigation={true}
                                        thumbs={{ swiper: thumbsSwiper }}
                                        modules={[Navigation, Thumbs]}
                                        className="product-swiper"
                                    >
                                        {productImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="img">
                                                    <div className="relative h-[400px] flex items-center justify-center">
                                                        <Image
                                                            src={image}
                                                            alt={`Sợi CD - ảnh ${
                                                                index + 1
                                                            }`}
                                                            width={800}
                                                            height={600}
                                                            className="w-full h-full object-contain"
                                                        />
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                                <div className="thumb">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        spaceBetween={10}
                                        slidesPerView={4}
                                        watchSlidesProgress={true}
                                        modules={[Navigation, Thumbs]}
                                        className="product-thumbs-swiper"
                                    >
                                        {productImages.map((image, index) => (
                                            <SwiperSlide key={index}>
                                                <div className="img cursor-pointer">
                                                    <Image
                                                        src={image}
                                                        alt={`Sợi CD - thumbnail ${
                                                            index + 1
                                                        }`}
                                                        width={100}
                                                        height={70}
                                                        className="w-auto h-auto object-contain"
                                                    />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div>

                            {/* Product Information */}
                            <div className="product-info">
                                <VerticalPageTitle title="Sợi CD" />
                                <div className="brief mt-6">
                                    <p className="mb-4">
                                        Sợi CD là loại sợi cotton có thành phần
                                        100% từ xơ bông. Đây là chất liệu được
                                        dùng phổ biến nhất trong ngành may mặc
                                        hiện nay.
                                    </p>
                                    <p>
                                        Sợi CD có tính năng hút ẩm cao, thấm hút
                                        mồ hôi rất tốt, vì thế các loại vải được
                                        dệt bằng sợi CD khi sử dụng rất thoáng
                                        mát, dễ chịu.
                                    </p>
                                </div>
                                <div className="full-content mt-8">
                                    <h3 className="font-bold text-lg mb-2">
                                        Đặc điểm nổi bật:
                                    </h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>
                                            Thành phần: 100% cotton từ xơ bông
                                            tự nhiên
                                        </li>
                                        <li>
                                            Tính năng: Hút ẩm cao, thấm hút mồ
                                            hôi tốt
                                        </li>
                                        <li>
                                            Cảm giác: Tạo cảm giác thoáng mát,
                                            dễ chịu khi sử dụng
                                        </li>
                                        <li>
                                            Phổ biến: Được sử dụng nhiều nhất
                                            trong ngành may mặc
                                        </li>
                                    </ul>

                                    <h3 className="font-bold text-lg mb-2">
                                        Thông số kỹ thuật:
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        <li>Thành phần: 100% cotton</li>
                                        <li>
                                            Độ mảnh: Ne 20/1, Ne 30/1, Ne 32/1,
                                            Ne 40/1
                                        </li>
                                        <li>Độ xoắn: TM 3.8 - 4.2</li>
                                        <li>Độ đều: CVm% 13 - 15</li>
                                        <li>Độ bền: CSP 2200 - 2400</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-12">
                        <VerticalPageTitle title="Sản phẩm liên quan" />
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
                            {relatedProducts.map((product, index) => (
                                <ProductCard key={index} {...product} />
                            ))}
                        </div>
                    </div>
                </div>
            </ContentPageLayout>
        </>
    );
}
