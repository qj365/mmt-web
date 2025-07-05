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

export default function BaoHoLaoDongPage() {
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
            label: 'Bảo hộ lao động',
            href: '/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong',
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
            name: 'Áo khoác',
            slug: 'ao-khoac',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/ao-khoac.png',
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
    for (let i = 1; i <= 24; i++) {
        productImages.push(
            `/images/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong/bao-ho-lao-dong-${i}.jpg`
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
                                                            alt={`Bảo hộ lao động - ảnh ${
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
                                                        alt={`Bảo hộ lao động - thumbnail ${
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
                                <VerticalPageTitle title="Bảo hộ lao động" />
                                <div className="brief mt-6">
                                    <p>
                                        <strong>Bảo hộ lao động (BHLĐ)</strong>
                                    </p>
                                    <p>
                                        Đây chính là một trong những dòng hàng
                                        xuất khẩu chủ lực của Hoà Thọ nhiều năm
                                        qua. Nhu cầu thị trường đồ BHLĐ ngày
                                        càng tăng khi nhận thức về an toàn lao
                                        động tại các công ty ngày càng tăng cao.
                                        Mỗi sản phẩm bảo hộ lao động được sản
                                        xuất để dành riêng cho những người lao
                                        động đặc thù và chuyên nghiệp trong các
                                        lĩnh vực khác nhau như: công xưởng sản
                                        xuất, xây dựng, cơ khí, y tế,...
                                    </p>
                                </div>
                                <div className="full-content mt-6">
                                    <p>
                                        Nắm bắt được nhu cầu của thị trường, Hoà
                                        Thọ đã tập trung năng lực sản xuất cho
                                        dòng sản phẩm này, tạo ra nhiều sản phẩm
                                        đẹp đúng tiêu chuẩn theo yêu cầu của
                                        khách hàng. Đến nay, các sản phẩm BHLĐ
                                        của Hòa Thọ luôn nhận được sự tin tưởng
                                        và đánh giá cao từ khách hàng trong và
                                        ngoài nước.
                                    </p>
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
