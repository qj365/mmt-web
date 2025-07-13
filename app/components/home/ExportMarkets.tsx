'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useViewportHeight } from '../../hook/useViewportHeight';
import { useTranslations } from 'next-intl';
import PageTitle from '../shared/PageTitle';

export default function ExportMarkets() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { sectionHeight } = useViewportHeight();
    const t = useTranslations('home.exportMarkets');

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMapClick = () => {
        setIsLightboxOpen(true);
    };

    return (
        <section
            className="index-3 section md:py-0 flex flex-col overflow-hidden"
            style={
                !isMobile && sectionHeight
                    ? { minHeight: `${sectionHeight}px` }
                    : {}
            }
        >
            <div className="container mt-0 md:mt-auto">
                <PageTitle title={t('title')} />
            </div>
            <div
                className="image mt-7 cursor-pointer mb-0 md:mb-auto flex-grow flex justify-center w-full"
                onClick={handleMapClick}
            >
                <div className="relative h-[200px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
                    <Image
                        src="/images/home/global.gif"
                        alt={t('altText')}
                        fill
                        className="object-contain scale-150 sm:scale-125 md:scale-120"
                        priority={false}
                    />
                </div>
            </div>

            {/* Simple Lightbox implementation */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div className="relative max-w-5xl w-full">
                        <button
                            className="absolute -top-10 right-0 text-white text-2xl"
                            onClick={() => setIsLightboxOpen(false)}
                        >
                            &times; Close
                        </button>
                        <Image
                            src="https://picsum.photos/1200/600"
                            alt={t('altText')}
                            width={1200}
                            height={600}
                            className="w-full"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
