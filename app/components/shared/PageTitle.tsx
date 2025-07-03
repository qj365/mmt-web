import React from 'react';

interface PageTitleProps {
    title: string;
    underlineWidth?: string;
    underlineColor?: string;
    className?: string;
    alignment?: 'center' | 'left' | 'left-vertical';
}

export default function PageTitle({
    title,
    underlineWidth = 'w-[80px]',
    underlineColor = 'bg-[#D60000]',
    className = '',
}: PageTitleProps) {
    // Original layout with horizontal underline
    return (
        <div
            className={`w-full flex flex-col items-center relative ${className}`}
        >
            <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] leading-[1.25em] text-[#111111] font-bold uppercase">
                {title}
            </h1>
            <div
                className={`h-[3px] ${underlineWidth} ${underlineColor} mt-4`}
            ></div>
        </div>
    );
}
