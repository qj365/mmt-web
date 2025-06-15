'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function ExportMarkets() {
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    const handleMapClick = () => {
        setIsLightboxOpen(true);
    };

    return (
        <section className="index-3 section pb-0">
            <div className="container">
                <h2 className="block-title text-black text-center">
                    Thị trường xuất khẩu
                </h2>
            </div>
            <div className="image mt-7 cursor-pointer" onClick={handleMapClick}>
                <div className="relative h-[400px] w-full">
                    <Image
                        src="https://picsum.photos/1200/600"
                        alt="Thị trường xuất khẩu"
                        fill
                        className="object-cover"
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
