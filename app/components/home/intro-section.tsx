'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Stats data
const stats = [
    {
        icon: 'https://picsum.photos/100/100',
        number: 20.5,
        unit: 'HA',
        text: 'Tổng diện tích',
    },
    {
        icon: 'https://picsum.photos/101/101',
        number: 11300,
        unit: '',
        text: 'Thiết bị may mặc',
    },
    {
        icon: 'https://picsum.photos/102/102',
        number: 11230,
        unit: '',
        text: 'Nhân sự',
    },
    {
        icon: 'https://picsum.photos/103/103',
        number: 26.6,
        unit: 'Triệu',
        text: 'Sản phẩm may/năm',
    },
    {
        icon: 'https://picsum.photos/104/104',
        number: 73600,
        unit: '',
        text: 'Cọc sợi',
    },
    {
        icon: 'https://picsum.photos/105/105',
        number: 18200,
        unit: '',
        text: 'Tấn sợi/ năm',
    },
];

export default function IntroSection() {
    // Counter animation using vanilla JS
    useEffect(() => {
        const counters = document.querySelectorAll('.counter');

        const animateCounter = (counter: Element, target: number) => {
            let count = 0;
            const speed = 50; // Lower is faster
            const increment = Math.ceil(target / (1000 / speed)); // Adjust for different target sizes

            const timer = setInterval(() => {
                count += increment;
                if (count >= target) {
                    counter.textContent = target.toString();
                    clearInterval(timer);
                } else {
                    counter.textContent = count.toString();
                }
            }, speed);
        };

        const observer = new IntersectionObserver(
            entries => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const counter = entry.target;
                        const target = parseFloat(
                            counter.getAttribute('data-target') || '0'
                        );
                        animateCounter(counter, target);
                        observer.unobserve(counter);
                    }
                });
            },
            { threshold: 0.5 }
        );

        counters.forEach(counter => {
            observer.observe(counter);
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section
            className="index-1 section bg-white xl:pb-[80px]"
            style={{ backgroundColor: '#f5f5f5' }}
        >
            <div className="container">
                <h2 className="block-title text-black text-center">
                    Giới thiệu
                </h2>
                <div className="des text-center mx-auto leading-6 text-[18px] max-w-[1050px] w-full font-medium mt-5">
                    Không chỉ là một hệ thống cung ứng Sợi - May hàng đầu Việt
                    Nam, Hòa Thọ còn giữ vai trò nòng cốt, trong các hoạt động
                    của Vinatex và Vitas, tích cực đóng góp to lớn vào ngành dệt
                    may Việt Nam trong nhiều thập kỷ qua với quy mô lớn.
                </div>

                <div className="icon-wrapper grid gap-y-5 gap-x-4 sm:gap-x-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-10 xl:mt-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="icon text-center flex flex-col group"
                        >
                            <div
                                className="img relative group-hover:bg-red transition-all flex items-center rounded-full mx-auto border-white justify-center w-[100px] sm:w-[130px] shadow-[3px_4px_50px_rgba(0,0,0,0.1)]"
                                style={{ aspectRatio: '1/1' }}
                            >
                                <Image
                                    src={stat.icon}
                                    alt={stat.text}
                                    width={80}
                                    height={80}
                                    loading="lazy"
                                />
                            </div>
                            <div className="block-title no-border flex flex-col group-hover:text-red transition-all flex-1 text-[#338dcc] uppercase mt-4">
                                <span
                                    className="number counter"
                                    data-target={stat.number}
                                >
                                    {stat.number}
                                </span>
                                {stat.unit && (
                                    <span className="text-[18px]">
                                        {stat.unit}
                                    </span>
                                )}
                            </div>
                            <div className="des text-[16px] font-semibold leading-6 mt-3">
                                {stat.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="button">
                    <Link
                        href="/gioi-thieu/tong-quan"
                        className="btn btn-1 mx-auto mt-7 block w-fit"
                    >
                        Xem thêm
                    </Link>
                </div>
            </div>
        </section>
    );
}
