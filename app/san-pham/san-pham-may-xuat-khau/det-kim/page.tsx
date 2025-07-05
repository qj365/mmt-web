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

export default function DetKimPage() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
        null
    );

    // Breadcrumb items for the page
    const breadcrumbItems = [
        {
            label: 'Sản phẩm may xuất khẩu',
            href: '/san-pham/san-pham-may-xuat-khau',
        },
        { label: 'Dệt kim', href: '/san-pham/san-pham-may-xuat-khau/det-kim' },
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
            name: 'Bảo hộ lao động',
            slug: 'bao-ho-lao-dong',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/bao-ho.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
    ];

    // Product images for the gallery
    const productImages = [];
    for (let i = 1; i <= 30; i++) {
        productImages.push(
            `/images/san-pham/san-pham-may-xuat-khau/det-kim/det-kim-${i}.jpg`
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
                                                            alt={`Dệt kim - ảnh ${
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
                                                        alt={`Dệt kim - thumbnail ${
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
                                <VerticalPageTitle title="Dệt kim" />
                                <div className="brief mt-6">
                                    <p>
                                        <strong>Thông tin chung:</strong>
                                    </p>
                                    <p>
                                        Dệt kim là một trong những dòng sản phẩm
                                        xuất khẩu đa dạng của Hòa Thọ. Sản phẩm
                                        dệt kim được sản xuất bằng công nghệ
                                        hiện đại, đáp ứng các tiêu chuẩn chất
                                        lượng quốc tế và được xuất khẩu đến
                                        nhiều thị trường khó tính trên thế giới.
                                    </p>
                                </div>
                                <div className="full-content mt-6">
                                    <h3 className="font-bold text-lg mb-2">
                                        Chi tiết sản phẩm:
                                    </h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>
                                            Đa dạng về chất liệu: Cotton,
                                            Polyester, TC, CVC, Spandex, Viscose
                                            và các loại vải đặc biệt khác theo
                                            yêu cầu
                                        </li>
                                        <li>
                                            Phong phú về kiểu dáng: Áo thun, áo
                                            polo, áo hoodie, áo sweater, đồ thể
                                            thao,...
                                        </li>
                                        <li>
                                            Thiết kế đa dạng: Từ casual đến
                                            sporty, phù hợp mọi đối tượng
                                        </li>
                                        <li>
                                            Có khả năng co giãn tốt, thoáng khí,
                                            thoải mái khi mặc
                                        </li>
                                        <li>
                                            Màu sắc phong phú, bền màu, không xù
                                            lông, không co rút sau nhiều lần
                                            giặt
                                        </li>
                                        <li>
                                            Công nghệ in ấn hiện đại: In lụa, in
                                            chuyển nhiệt, thêu vi tính cao
                                            cấp,...
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
