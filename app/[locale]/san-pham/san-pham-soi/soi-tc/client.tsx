'use client';

import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import ProductCard, { ProductType } from '@/app/components/shared/ProductCard';
import VerticalPageTitle from '@/app/components/shared/VerticalPageTitle';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/thumbs';
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperClass } from 'swiper/types';

export default function SoiTCClient() {
    const [thumbsSwiper, setThumbsSwiper] = React.useState<SwiperClass | null>(
        null
    );
    const t = useTranslations('san-pham.san-pham-soi');
    const product = 'soi-tc';

    // Breadcrumb items for the page
    const breadcrumbItems = [
        {
            label: t('breadcrumb_yarn_products'),
            href: '/san-pham/san-pham-soi',
        },
        {
            label: t(`products.${product}.breadcrumb`),
            href: '/san-pham/san-pham-soi/soi-tc',
        },
    ];

    // Related products
    const relatedProducts: ProductType[] = [
        {
            name: t('products.soi-cvc.name'),
            slug: 'soi-cvc',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cvc.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: t('products.soi-cd.name'),
            slug: 'soi-cd',
            imageSrc: '/images/san-pham/san-pham-soi/soi-cd.png',
            basePath: '/san-pham/san-pham-soi',
        },
        {
            name: t('products.soi-xe-cac-loai.name'),
            slug: 'soi-xe-cac-loai',
            imageSrc: '/images/san-pham/san-pham-soi/so-xe-cac-loai.png',
            basePath: '/san-pham/san-pham-soi',
        },
    ];

    // Product images for the gallery
    const productImages = [
        '/images/san-pham/san-pham-soi/soi-tc.png',
        '/images/san-pham/san-pham-soi/soi-tc.png',
        '/images/san-pham/san-pham-soi/soi-tc.png',
        '/images/san-pham/san-pham-soi/soi-tc.png',
        '/images/san-pham/san-pham-soi/soi-tc.png',
    ];

    // Get features and specs as arrays
    const features = t.raw(`products.${product}.features`) as string[];
    const specs = t.raw(`products.${product}.specs`) as string[];

    return (
        <>
            <ContentPageLayout
                bannerImage="/images/san-pham/san-pham-soi/banner.png"
                bannerAlt={t('breadcrumb_products')}
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
                                                                `products.${product}.alt`
                                                            )} - ${index + 1}`}
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
                                                            `products.${product}.thumbnail_alt`
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
                                <VerticalPageTitle
                                    title={t(`products.${product}.name`)}
                                />
                                <div className="brief mt-6">
                                    <p>{t(`products.${product}.brief`)}</p>
                                </div>
                                <div className="full-content">
                                    <h3 className="font-bold text-lg mb-2">
                                        {t(
                                            `products.${product}.features_title`
                                        )}
                                    </h3>
                                    <ul className="list-disc pl-5 mb-4">
                                        {features.map((feature, index) => (
                                            <li key={index}>{feature}</li>
                                        ))}
                                    </ul>

                                    <h3 className="font-bold text-lg mb-2">
                                        {t(`products.${product}.specs_title`)}
                                    </h3>
                                    <ul className="list-disc pl-5">
                                        {specs.map((spec, index) => (
                                            <li key={index}>{spec}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Related Products */}
                    <div className="mt-12">
                        <VerticalPageTitle title={t('related_products')} />
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
