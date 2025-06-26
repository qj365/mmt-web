'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MainBanner() {
    const [viewportHeight, setViewportHeight] = useState(0);
    const [headerHeight, setHeaderHeight] = useState(0);

    useEffect(() => {
        // Get viewport height
        const updateViewportHeight = () => {
            setViewportHeight(window.innerHeight);

            // Get header height
            const header = document.querySelector('header');
            if (header) {
                setHeaderHeight(header.offsetHeight);
            }
        };

        // Initial calculation
        updateViewportHeight();

        // Update on resize
        window.addEventListener('resize', updateViewportHeight);

        return () => {
            window.removeEventListener('resize', updateViewportHeight);
        };
    }, []);

    // Calculate banner height (viewport height minus header height)
    const bannerHeight =
        viewportHeight > 0 ? viewportHeight - headerHeight : 600;

    return (
        <section id="main-banner">
            <div className="main-banner relative">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={0}
                    slidesPerView={1}
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.swiper-pagination',
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    className="swiper"
                >
                    <SwiperSlide>
                        <div className="swiper-slide relative">
                            <div className="img">
                                <Image
                                    src="https://picsum.photos/1920/1080"
                                    alt="Banner 1"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                    style={{ height: `${bannerHeight}px` }}
                                    priority
                                />
                            </div>
                            <div className="container absolute left-1/2 -translate-x-1/2 bottom-[13px] sm:bottom-[30px] lg:bottom-[60px] xl:bottom-[80px] 2xl:bottom-[120px] 3xl:bottom-[165px]">
                                <div className="box-content text-center">
                                    <div className="content"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="swiper-slide relative">
                            <div className="img">
                                <Image
                                    src="https://picsum.photos/1920/1081"
                                    alt="Banner 2"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                    style={{ height: `${bannerHeight}px` }}
                                    priority
                                />
                            </div>
                            <div className="container absolute left-1/2 -translate-x-1/2 bottom-[13px] sm:bottom-[30px] lg:bottom-[60px] xl:bottom-[80px] 2xl:bottom-[120px] 3xl:bottom-[165px]">
                                <div className="box-content text-center">
                                    <div className="content"></div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="arrow-button no-responsive !hidden sm:!block absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2 w-full z-10">
                    <div className="container w-full">
                        <div className="wrapper relative">
                            <div className="swiper-button-prev"></div>
                            <div className="swiper-button-next"></div>
                        </div>
                    </div>
                </div>

                <div className="swiper-pagination sm:hidden"></div>
            </div>
        </section>
    );
}
