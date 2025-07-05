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

export default function AoKhoacPage() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
        null
    );

    // Breadcrumb items for the page
    const breadcrumbItems = [
        {
            label: 'Sản phẩm may xuất khẩu',
            href: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            label: 'Áo khoác',
            href: '/san-pham/san-pham-may-xuat-khau/ao-khoac',
        },
    ];

    // Related products
    const relatedProducts: ProductType[] = [
        {
            name: 'Veston',
            slug: 'veston',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/veston.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: 'Quần tây',
            slug: 'quan-tay',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/quan-tay.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: 'Bảo hộ lao động',
            slug: 'bao-ho-lao-dong',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/bao-ho.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: 'Dệt kim',
            slug: 'det-kim',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/det-kim.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    // Product images for the gallery
    const productImages = [];
    for (let i = 1; i <= 18; i++) {
        productImages.push(
            `/images/san-pham/san-pham-may-xuat-khau/ao-khoac/ao-khoac-${i}.jpg`
        );
    }

    return (
        <>
            <ContentPageLayout
                bannerImage="/images/san-pham/san-pham-may-xuat-khau/banner.png"
                bannerAlt="Sản phẩm may xuất khẩu"
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
                                                            alt={`Áo khoác - ảnh ${
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
                                                        alt={`Áo khoác - thumbnail ${
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
                                <VerticalPageTitle title="Áo khoác" />
                                <div className="brief mt-6">
                                    <p>
                                        <strong>Thông tin chung</strong>
                                    </p>
                                    <p>
                                        Dòng sản phẩm Jacket có nhiều kiểu dáng
                                        và thiết kế đa dạng từ formal (sang
                                        trọng, nghiêm túc) cho đến casual (giản
                                        dị, thoải mái). Sản phẩm dễ phối đồ và
                                        phù hợp nhiều loại thời tiết. Jackets
                                        được sử dụng rộng rãi trong nhiều hoạt
                                        động khác nhau như chơi thể thao, đi
                                        chơi, làm việc (môi trường công nghiệp
                                        nặng, công nghiệp nhẹ).
                                    </p>
                                </div>
                                <div className="full-content mt-6">
                                    <p>
                                        <span className="font-bold">
                                            Thông tin chi tiết
                                        </span>
                                    </p>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>
                                            Đa dạng về chất liệu vải: vải denim,
                                            da thật hoặc giả da, Nylon,
                                            Polyester, Fleece…để đáp ứng yêu cầu
                                            sử dụng, sở thích khác nhau của
                                            khách hàng
                                        </li>
                                        <li>
                                            Đa dạng về thiết kế: Jacket seamseal
                                            (chống thấm nước), Jacket Down (Lông
                                            vịt giữ nhiệt tốt), Jacket Padding,
                                            Jacket 1 lớp, 2 lớp, 3 lớp …
                                        </li>
                                        <li>
                                            Các mẫu được thiết kế ở form rộng
                                            rãi để khoác ngoài nên rất thoải mái
                                            cho người mặc, dễ dàng vận động mà
                                            không làm khó chịu.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-12">
                        <VerticalPageTitle title="Sản phẩm khác" />
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
