'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useViewportHeight } from '../../hook/useViewportHeight';

// Video data with YouTube embed ID
const videoData = {
    thumbnail: 'https://picsum.photos/800/450',
    title: 'MINH MINH TÂM Dệt may',
    youtubeId: '-jIQSApVKbI',
};

export default function VideoSection() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef<HTMLIFrameElement>(null);
    const { sectionHeight } = useViewportHeight();

    const handlePlayVideo = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            videoRef.current.src = `https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1`;
        }
    };

    return (
        <section
            className="index-2 section xl:pb-[85px] flex items-center"
            style={{
                backgroundColor: '#e0e0e0',
                ...(sectionHeight ? { minHeight: `${sectionHeight}px` } : {}),
            }}
        >
            <div className="container">
                <div className="box-wrapper flex gap-x-[30px] flex-col lg:flex-row">
                    {/* Quote box */}
                    <div className="box-left flex-shrink-0 mb-5 lg:mb-0 flex-grow-0 lg:flex-[calc(495/1230*100%)] lg:max-w-[calc(495/1230*100%)]">
                        <div className="content w-full h-full bg-white rounded-3xl lg:rounded-[50px] italic p-8">
                            <div className="text-gray-800 text-lg italic">
                                &ldquo;Không chỉ là một hệ thống cung ứng Sợi -
                                May hàng đầu Việt Nam, MINH MINH TÂM còn giữ vai trò
                                nòng cốt, trong các hoạt động của Vinatex và
                                Vitas, tích cực đóng góp to lớn vào ngành dệt
                                may Việt Nam trong nhiều thập kỷ qua với quy mô
                                lớn.&rdquo;
                            </div>
                        </div>
                    </div>

                    {/* Video box */}
                    <div className="box-right flex-shrink-0 flex-grow-0 lg:flex-[calc(705/1230*100%)] lg:max-w-[calc(705/1230*100%)]">
                        <div className="index-2-slide relative">
                            <div className="swiper rounded-3xl lg:rounded-[50px] bg-black">
                                <div className="video-wrapper relative h-0 pb-[56.25%]">
                                    {' '}
                                    {/* 16:9 aspect ratio */}
                                    {!isPlaying ? (
                                        <>
                                            <div
                                                className="icon absolute playBtn -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[66px] h-[40px] sm:w-[86px] sm:h-[60px] z-20 cursor-pointer transition-all"
                                                onClick={handlePlayVideo}
                                            >
                                                <svg
                                                    viewBox="0 0 68 48"
                                                    width="100%"
                                                    height="100%"
                                                >
                                                    <path
                                                        d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                                                        fill="red"
                                                    ></path>
                                                    <path
                                                        d="M 45,24 27,14 27,34"
                                                        fill="white"
                                                    ></path>
                                                </svg>
                                            </div>
                                            <div
                                                className="img absolute w-full h-full top-0 left-0 z-10 transition-all cursor-pointer"
                                                onClick={handlePlayVideo}
                                            >
                                                <Image
                                                    src={videoData.thumbnail}
                                                    alt={videoData.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </>
                                    ) : (
                                        <iframe
                                            ref={videoRef}
                                            className="absolute top-0 left-0 w-full h-full z-20"
                                            src={`https://www.youtube.com/embed/${videoData.youtubeId}?autoplay=1`}
                                            title={videoData.title}
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
