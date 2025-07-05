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

export default function QuanTayPage() {
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
            label: 'Quần tây',
            href: '/san-pham/san-pham-may-xuat-khau/quan-tay',
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
            name: 'Bảo hộ lao động',
            slug: 'bao-ho-lao-dong',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/bao-ho.png',
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

    // Product images for the gallery - selecting 6 images to display
    const productImages = [];
    for (let i = 1; i <= 110; i++) {
        productImages.push(
            `/images/san-pham/san-pham-may-xuat-khau/quan-tay/quan-tay-${i}.jpg`
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
                                                            alt={`Quần tây - ảnh ${
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
                                                        alt={`Quần tây - thumbnail ${
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
                                <VerticalPageTitle title="Quần tây" />
                                <div className="brief mt-6">
                                    <p>
                                        <strong>Thông tin chung:</strong>
                                    </p>
                                    <p>
                                        Quần tây là một trong những dòng sản
                                        phẩm xuất khẩu chủ lực của Hòa Thọ. Với
                                        nhiều kinh nghiệm sản xuất, sản phẩm
                                        quần tây của Hòa Thọ được nhiều khách
                                        hàng trong và ngoài nước tin dùng nhờ
                                        chất lượng đảm bảo, thiết kế phù hợp
                                        nhiều phong cách, và giá thành hợp lý.
                                    </p>
                                </div>
                                <div className="full-content mt-6">
                                    <h3 className="font-bold text-lg mb-2">
                                        Chi tiết sản phẩm:
                                    </h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>
                                            Form dáng phù hợp với nhiều đối
                                            tượng: Regular fit, Slim fit, Skinny
                                            fit
                                        </li>
                                        <li>
                                            Chất liệu đa dạng: Polyester,
                                            Cotton, Wool blend, Kaki, Vải
                                            stretch co giãn
                                        </li>
                                        <li>
                                            Đa dạng về màu sắc và kiểu dáng:
                                            Trơn màu, caro, kẻ sọc
                                        </li>
                                        <li>
                                            Phù hợp nhiều mục đích sử dụng: công
                                            sở, dự tiệc, đi làm, đi chơi
                                        </li>
                                        <li>
                                            Chi tiết tinh xảo: Đường may chắc
                                            chắn, túi quần thiết kế đẹp mắt,
                                            khóa kéo cao cấp, cúc và chốt quần
                                            chắc chắn
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
