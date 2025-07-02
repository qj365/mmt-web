'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useViewportHeight } from '../../hook/useViewportHeight';

export default function ExportMarkets() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const { sectionHeight } = useViewportHeight();

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
            className="index-3 section py-4 md:py-0 flex flex-col"
            style={
                !isMobile && sectionHeight
                    ? { minHeight: `${sectionHeight}px` }
                    : {}
            }
        >
            <div className="container mt-0 md:mt-auto">
                <h2 className="block-title text-black text-center">
                    THỊ TRƯỜNG XUẤT KHẨU
                </h2>
            </div>
            <div
                className="image mt-2 md:mt-7 cursor-pointer mb-0 md:mb-auto flex-grow flex justify-center"
                onClick={handleMapClick}
            >
                <div className="relative h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full">
                    <Image
                        src="/images/home/global.gif"
                        alt="Thị trường xuất khẩu"
                        fill
                        className="object-contain scale-125 sm:scale-100"
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
                            alt="Thị trường xuất khẩu"
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
