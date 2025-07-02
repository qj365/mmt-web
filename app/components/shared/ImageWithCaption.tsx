import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ImageWithCaptionProps {
    src: string;
    alt: string;
    caption?: string;
    width: number;
    height: number;
    className?: string;
    linkToFullSize?: boolean;
    minWidth?: string;
}

export default function ImageWithCaption({
    src,
    alt,
    caption,
    width,
    height,
    className = '',
    linkToFullSize = false,
    minWidth,
}: ImageWithCaptionProps) {
    const imageElement = (
        <Image
            src={src}
            alt={alt}
            className={`w-full h-auto ${minWidth ? minWidth : ''} ${className}`}
            width={width}
            height={height}
            loading="lazy"
        />
    );

    return (
        <div className="w-full px-4 sm:px-6 lg:px-[15px] overflow-x-auto">
            <div className="max-w-[1260px] mx-auto">
                {linkToFullSize ? (
                    <Link
                        href={src}
                        className="block"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {imageElement}
                    </Link>
                ) : (
                    imageElement
                )}

                {caption && (
                    <p className="text-center text-sm text-gray-500 mt-2">
                        {caption}
                    </p>
                )}
            </div>
        </div>
    );
}
