import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Define product type
export interface ProductType {
    name: string;
    slug: string;
    imageSrc: string;
    basePath?: string;
}

// ProductCard component for reusability
const ProductCard: React.FC<ProductType> = ({
    name,
    slug,
    imageSrc,
    basePath = '',
}) => {
    const href = `${basePath}/${slug}`.replace(/\/+/g, '/');

    return (
        <div className="pd pd-1 group">
            <div className="img bg-white overflow-hidden">
                <Link href={href} className="relative block">
                    <Image
                        src={imageSrc}
                        alt={name}
                        width={300}
                        height={300}
                        className="w-full h-auto object-contain"
                    />
                </Link>
            </div>
            <div className="title font-medium sm:text-lg sm:leading-6 text-center text-[#111] rounded-b-3xl py-4 px-2 bg-white group-hover:bg-[#338dcc] group-hover:text-white transition-all cursor-pointer">
                <Link href={href}>{name}</Link>
            </div>
        </div>
    );
};

export default ProductCard;
