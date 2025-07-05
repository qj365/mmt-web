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

export default function SoiCVCPage() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
        null
    );

    // Breadcrumb items for the page
    const breadcrumbItems = [
        { label: 'Sản phẩm sợi', href: '/san-pham/san-pham-soi' },
        { label: 'Sợi CVC', href: '/san-pham/san-pham-soi/soi-cvc' },
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
            name: 'Sợi CD',
            slug: 'soi-cd',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cd.png',
            basePath: '/san-pham/san-pham-soi',
        },
    ];

    // Product images for the gallery
    const productImages = [
        '/images/san-pham/san-pham-soi/soi-cvc.png',
        '/images/san-pham/san-pham-soi/soi-cvc.png',
        '/images/san-pham/san-pham-soi/soi-cvc.png',
        '/images/san-pham/san-pham-soi/soi-cvc.png',
        '/images/san-pham/san-pham-soi/soi-cvc.png',
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
                                                            alt={`Sợi CVC - ảnh ${
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
                                                        alt={`Sợi CVC - thumbnail ${
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
                                <VerticalPageTitle title="Sợi CVC" />
                                <div className="brief mt-6">
                                    <p className="mb-4">
                                        Sợi CVC là loại sợi pha giữa sợi
                                        polyester và cotton. Ngược lại với sợi
                                        TC, sợi CVC có thành phần cotton chiếm
                                        trên 50%.
                                    </p>
                                    <p>
                                        Sợi CVC khi sử dụng cho cảm giác dễ
                                        chịu, dễ thấm mồ hôi khi tiếp xúc da
                                        người.
                                    </p>
                                </div>
                                <div className="full-content mt-8">
                                    <h3 className="font-bold text-lg mb-2">
                                        Đặc điểm nổi bật:
                                    </h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>
                                            Thành phần: Pha giữa polyester và
                                            cotton, với cotton chiếm trên 50%
                                        </li>
                                        <li>
                                            So với TC: Ngược lại với sợi TC, sợi
                                            CVC có tỷ lệ cotton cao hơn
                                        </li>
                                        <li>
                                            Cảm giác: Mang lại cảm giác dễ chịu
                                            khi tiếp xúc với da
                                        </li>
                                        <li>
                                            Tính năng: Dễ thấm hút mồ hôi,
                                            thoáng khí tốt
                                        </li>
                                    </ul>

                                    <h3 className="font-bold text-lg mb-2">
                                        Thông số kỹ thuật:
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        <li>
                                            Thành phần: Cotton chiếm trên 50%,
                                            phần còn lại là polyester
                                        </li>
                                        <li>
                                            Tỷ lệ phổ biến: 60% cotton / 40%
                                            polyester
                                        </li>
                                        <li>
                                            Độ mảnh: Ne 20/1, Ne 30/1, Ne 32/1,
                                            Ne 40/1
                                        </li>
                                        <li>Độ xoắn: TM 3.8 - 4.2</li>
                                        <li>
                                            Độ bền: Kết hợp độ bền của cotton và
                                            polyester
                                        </li>
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
