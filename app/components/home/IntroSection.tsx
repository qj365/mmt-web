'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useViewportHeight } from '../../hook/useViewportHeight';
import { useTranslations } from 'next-intl';
import PageTitle from '../shared/PageTitle';

const IntroSection = () => {
    const t = useTranslations('home.intro');
    const { sectionHeight } = useViewportHeight();

    // Stats data
    const stats = [
        {
            icon: '/images/home/introduce-1.png',
            number: 4.125,
            unit: 'HA',
            text: t('stats.totalArea'),
        },
        {
            icon: '/images/home/introduce-2.png',
            number: 11300,
            unit: '',
            text: t('stats.sewingEquipment'),
        },
        {
            icon: '/images/home/introduce-3.png',
            number: 150,
            unit: '',
            text: t('stats.personnel'),
        },
        {
            icon: '/images/home/introduce-4.png',
            number: 26.6,
            unit: 'Million',
            text: t('stats.productionYear'),
        },
        {
            icon: '/images/home/introduce-5.png',
            number: 73600,
            unit: '',
            text: t('stats.yarnSpindles'),
        },
        {
            icon: '/images/home/introduce-6.png',
            number: 18200,
            unit: '',
            text: t('stats.yarnTonsYear'),
        },
    ];

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
            className="index-1 section bg-white xl:pb-[80px] flex flex-col justify-center "
            style={{
                backgroundColor: '#f5f5f5',
                backgroundImage: 'url(/images/home/background.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                ...(sectionHeight ? { minHeight: `${sectionHeight}px` } : {}),
            }}
        >
            <div className="max-w-[1260px] mx-auto">
                <PageTitle title={t('title')} />
                <div className="des text-center mx-auto leading-6 text-[18px] max-w-[1050px] w-full font-medium mt-7">
                    {t('description')}
                </div>

                <div className="icon-wrapper grid gap-y-5 gap-x-4 sm:gap-x-7 grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 mt-10 xl:mt-16">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="icon text-center flex flex-col group"
                        >
                            <div
                                className="img relative bg-primary group-hover:bg-secondary transition-all flex items-center rounded-full mx-auto border-white justify-center w-[100px] sm:w-[130px] shadow-[3px_4px_50px_rgba(0,0,0,0.1)]"
                                style={{ aspectRatio: '1/1' }}
                            >
                                <div>
                                    <Image
                                        src={stat.icon}
                                        alt={stat.text}
                                        width={80}
                                        height={80}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            <div className="block-title no-border flex flex-col group-hover:text-secondary transition-all flex-1 text-primary uppercase mt-4">
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

                <div className="button w-full text-center">
                    <Link
                        href="/gioi-thieu/tong-quan"
                        className="mx-auto mt-7 w-fit block border-2 border-primary rounded-3xl text-primary text-[16px] font-semibold px-[30px] py-2 hover:bg-secondary hover:text-white hover:border-secondary transition-all"
                    >
                        {t('readMore')}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
