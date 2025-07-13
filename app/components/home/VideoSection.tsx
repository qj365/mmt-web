'use client';

import Image from 'next/image';
import { useViewportHeight } from '../../hook/useViewportHeight';
import { useTranslations } from 'next-intl';

export default function VideoSection() {
    const { sectionHeight } = useViewportHeight();
    const t = useTranslations('home.video');

    return (
        <section
            className="index-2 section xl:pb-[85px] flex items-center"
            style={{
                backgroundColor: '#e0e0e0',
                ...(sectionHeight ? { minHeight: `${sectionHeight}px` } : {}),
            }}
        >
            <div className="max-w-[1260px] mx-auto">
                <div className="box-wrapper flex gap-x-[30px] flex-col lg:flex-row">
                    {/* Quote box */}
                    <div className="box-left flex-shrink-0 mb-5 lg:mb-0 flex-grow-0 lg:flex-[calc(495/1230*100%)] lg:max-w-[calc(495/1230*100%)]">
                        <div className="content w-full h-full bg-white rounded-3xl lg:rounded-[50px] italic p-8">
                            <div className="text-gray-800 text-lg italic">
                                &ldquo;{t('quote')}&rdquo;
                            </div>
                        </div>
                    </div>

                    {/* Factory image box */}
                    <div className="box-right flex-shrink-0 flex-grow-0 lg:flex-[calc(705/1230*100%)] lg:max-w-[calc(705/1230*100%)]">
                        <div className="index-2-slide relative">
                            <div className="rounded-3xl lg:rounded-[50px] overflow-hidden">
                                <div className="image-wrapper relative h-0 pb-[56.25%]">
                                    <Image
                                        src="/images/home/factory.png"
                                        alt="Factory"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
