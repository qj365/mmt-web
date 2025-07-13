'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { useViewportHeight } from '../../hook/useViewportHeight';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MainBanner() {
    const { sectionHeight } = useViewportHeight();

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
                                    src="/images/home/factory.png"
                                    alt="Banner 1"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                    style={
                                        sectionHeight
                                            ? { height: `${sectionHeight}px` }
                                            : {}
                                    }
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
                                    src="/images/home/factory-4.png"
                                    alt="Banner 2"
                                    width={1920}
                                    height={1080}
                                    className="w-full h-full object-cover"
                                    style={
                                        sectionHeight
                                            ? { height: `${sectionHeight}px` }
                                            : {}
                                    }
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
