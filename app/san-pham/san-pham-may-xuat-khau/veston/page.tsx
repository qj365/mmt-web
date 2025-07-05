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

export default function VestonPage() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
        null
    );

    // Breadcrumb items for the page
    const breadcrumbItems = [
        {
            label: 'Sản phẩm may xuất khẩu',
            href: '/san-pham/san-pham-may-xuat-khau',
        },
        { label: 'Veston', href: '/san-pham/san-pham-may-xuat-khau/veston' },
    ];

    // Related products
    const relatedProducts: ProductType[] = [
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
    const productImages = [
        '/images/san-pham/san-pham-may-xuat-khau/veston/image-1.png',
        '/images/san-pham/san-pham-may-xuat-khau/veston/image-2.png',
        '/images/san-pham/san-pham-may-xuat-khau/veston/image-3.png',
        '/images/san-pham/san-pham-may-xuat-khau/veston/image-4.png',
        '/images/san-pham/san-pham-may-xuat-khau/veston/image-5.png',
        '/images/san-pham/san-pham-may-xuat-khau/veston/image-6.png',
    ];

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
                                                            alt={`Veston - ảnh ${
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
                                                        alt={`Veston - thumbnail ${
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
                                <VerticalPageTitle title="Veston" />
                                <div className="brief mt-6">
                                    <p>
                                        <strong>Thông tin chung:</strong>
                                    </p>
                                    <p>
                                        Là dòng sản phẩm may xuất khẩu chủ lực
                                        của MINH MINH TÂM. Với nhiều năm kinh nghiệm
                                        sản xuất, các dòng sản phẩm áo veston
                                        của MINH MINH TÂM đã tạo được sự tin tưởng và
                                        hợp tác từ các khách hàng trong và ngoài
                                        nước.
                                    </p>
                                </div>
                                <div className="full-content mt-6">
                                    <h3 className="font-bold text-lg mb-2">
                                        Chi tiết áo vest:
                                    </h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>
                                            Form dáng phù hợp với nhiều nhóm đối
                                            tượng khách hàng.
                                        </li>
                                        <li>
                                            Chất liệu đa dạng: cotton,
                                            polyester, wool, knit, linen,.. đi
                                            kèm nhiều chủng loại hoa văn khác
                                            nhau: trơn, caro, sọc, vải họa
                                            tiết...
                                        </li>
                                        <li>
                                            Đa dạng thiết kế: áo cơ bản, tuxedo,
                                            áo lót lửng, áo không lót...
                                        </li>
                                    </ul>

                                    <h3 className="font-bold text-lg mb-2">
                                        Chi tiết áo ghile:
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        <li>
                                            Form dáng phù hợp với nhiều nhóm đối
                                            tượng khách hàng.
                                        </li>
                                        <li>
                                            Chất liệu đa dạng: cotton,
                                            polyester, wool, knit, linen,
                                            nhung.... đi kèm nhiều chủng loại
                                            hoa văn khác nhau: trơn, caro, sọc,
                                            vải họa tiết...
                                        </li>
                                        <li>
                                            Đa dạng thiết kế: áo ghile 1 hàng
                                            cúc, áo ghile 2 hàng cúc, áo ghile
                                            có ve.
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
