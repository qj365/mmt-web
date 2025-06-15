'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

const awards = [
    {
        image: 'https://picsum.photos/300/300',
        title: 'Doanh nghiệp ưu tiên về hải quan từ năm 2018 đến nay',
    },
    {
        image: 'https://picsum.photos/301/301',
        title: 'Giải thưởng Thương hiệu Quốc gia 2014, 2016, 2018, 2020, 2022, 2024',
    },
    {
        image: 'https://picsum.photos/302/302',
        title: 'Doanh nghiệp xuất khẩu uy tín',
    },
];

export default function AwardsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = awards.length;
    const swiperRef = useRef<HTMLDivElement>(null);

    // Simple swiper implementation with auto-rotation
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prev => (prev + 1) % totalSlides);
        }, 5000);

        return () => clearInterval(interval);
    }, [totalSlides]);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    const goToPrevSlide = () => {
        setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);
    };

    const goToNextSlide = () => {
        setCurrentSlide(prev => (prev + 1) % totalSlides);
    };

    return (
        <section className="index-6 section pb-0">
            <div className="container">
                <h2 className="block-title text-center">
                    Thành tích - Giải thưởng
                </h2>
            </div>

            <div
                className="index-6-bg mt-10"
                style={{ backgroundColor: '#e5e5e5' }}
            >
                <div className="container">
                    <div className="index-6-slide relative section xl:pt-[85px] xl:pb-[95px]">
                        <div ref={swiperRef} className="swiper">
                            <div className="swiper-wrapper flex justify-center">
                                {awards.map((award, index) => (
                                    <div
                                        key={index}
                                        className={`swiper-slide transition-opacity duration-500 ${
                                            currentSlide === index
                                                ? 'opacity-100'
                                                : 'opacity-0 absolute'
                                        }`}
                                        style={{
                                            display:
                                                currentSlide === index
                                                    ? 'block'
                                                    : 'none',
                                            maxWidth: '350px',
                                            margin: '0 auto',
                                        }}
                                    >
                                        <div
                                            className="item rounded-full bg-white flex flex-col"
                                            style={{
                                                aspectRatio: '1/1',
                                                padding: '20px',
                                            }}
                                        >
                                            <div className="logo">
                                                <div className="img border-b-2 text-center border-dashed border-b-[#ccc] pb-7 pt-8 xl:pt-14 mb-6">
                                                    <Image
                                                        className="mx-auto h-[150px] sm:h-[100px] md:h-[170px] object-contain"
                                                        src={award.image}
                                                        alt={award.title}
                                                        width={170}
                                                        height={170}
                                                        loading="lazy"
                                                    />
                                                </div>
                                            </div>
                                            <div className="title max-w-[90%] sm:max-w-[195px] xl:max-w-[220px] mx-auto w-full text-black text-[18px] font-medium leading-6 text-center flex-1">
                                                <p className="line-clamp-3">
                                                    {award.title}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="shadow-img mt-11 text-center">
                                            <div className="h-[30px] bg-black opacity-10 w-[80%] mx-auto rounded-full"></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="arrow-button">
                            <div
                                className="swiper-button-prev absolute left-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                                onClick={goToPrevSlide}
                            >
                                <span className="text-2xl">&lt;</span>
                            </div>
                            <div
                                className="swiper-button-next absolute right-0 top-1/2 transform -translate-y-1/2 cursor-pointer bg-white w-10 h-10 rounded-full flex items-center justify-center shadow-md"
                                onClick={goToNextSlide}
                            >
                                <span className="text-2xl">&gt;</span>
                            </div>
                        </div>

                        <div className="swiper-pagination flex justify-center gap-2 mt-6">
                            {awards.map((_, index) => (
                                <span
                                    key={index}
                                    className={`inline-block w-3 h-3 rounded-full cursor-pointer ${
                                        currentSlide === index
                                            ? 'bg-gray-800'
                                            : 'bg-gray-300'
                                    }`}
                                    onClick={() => goToSlide(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
