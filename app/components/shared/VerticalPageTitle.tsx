import React from 'react';

interface VerticalPageTitleProps {
    title: string;
    underlineColor?: string;
    className?: string;
}

export default function VerticalPageTitle({
    title,
    underlineColor = 'bg-[#D60000]',
    className = '',
}: VerticalPageTitleProps) {
    return (
        <div
            className={`w-full flex flex-row items-center gap-4 relative ${className}`}
        >
            <div
                className={`w-[3px] h-[40px] ${underlineColor} self-center`}
            ></div>
            <h1 className="text-2xl sm:text-3xl md:text-[32px] lg:text-[38px] leading-[1.25em] text-[#111111] font-[500] uppercase">
                {title}
            </h1>
        </div>
    );
}
