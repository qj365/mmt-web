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
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function VestonPage() {
    const t = useTranslations('products.garments.suits');
    const params = useParams();
    const locale = params.locale as string;

    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
        null
    );

    // Breadcrumb items for the page
    const breadcrumbItems = [
        {
            label: t('breadcrumb.parent'),
            href: `/${locale}/san-pham/san-pham-may-xuat-khau`,
        },
        {
            label: t('breadcrumb.current'),
            href: `/${locale}/san-pham/san-pham-may-xuat-khau/veston`,
        },
    ];

    // Related products
    const relatedProducts: ProductType[] = [
        {
            name: t('related.trousers'),
            slug: 'quan-tay',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/quan-tay.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: t('related.workwear'),
            slug: 'bao-ho-lao-dong',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/bao-ho.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: t('related.jackets'),
            slug: 'ao-khoac',
            imageSrc: '/images/san-pham/san-pham-may-xuat-khau/ao-khoac.png',
            basePath: '/san-pham/san-pham-may-xuat-khau',
        },
        {
            name: t('related.knitwear'),
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
                bannerAlt={t('banner.alt')}
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
                                                            alt={`${t(
                                                                'product_image'
                                                            )} ${index + 1}`}
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
                                                        alt={`${t(
                                                            'thumbnail'
                                                        )} ${index + 1}`}
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
                                <VerticalPageTitle title={t('title')} />
                                <div className="brief mt-6">
                                    <p>
                                        <strong>
                                            {t('general_info.title')}
                                        </strong>
                                    </p>
                                    <p>{t('general_info.content')}</p>
                                </div>
                                <div className="full-content mt-6">
                                    <h3 className="font-bold text-lg mb-2">
                                        {t('details.suit.title')}
                                    </h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        <li>{t('details.suit.point1')}</li>
                                        <li>{t('details.suit.point2')}</li>
                                        <li>{t('details.suit.point3')}</li>
                                    </ul>

                                    <h3 className="font-bold text-lg mb-2">
                                        {t('details.vest.title')}
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        <li>{t('details.vest.point1')}</li>
                                        <li>{t('details.vest.point2')}</li>
                                        <li>{t('details.vest.point3')}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-12">
                        <VerticalPageTitle title={t('other_products')} />
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
