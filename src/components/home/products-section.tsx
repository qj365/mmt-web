'use client';

import Image from 'next/image';
import Link from 'next/link';

const productCategories = [
    {
        title: 'Sản phẩm sợi',
        image: 'https://picsum.photos/600/800',
        url: '/san-pham/san-pham-soi',
    },
    {
        title: 'Sản phẩm may xuất khẩu',
        image: 'https://picsum.photos/601/800',
        url: '/san-pham/san-pham-may-xuat-khau',
    },
    {
        title: 'Thời trang nội địa',
        image: 'https://picsum.photos/602/800',
        url: '/san-pham/thoi-trang-noi-dia',
    },
];

export default function ProductsSection() {
    return (
        <section className="index-4 section pb-5">
            <div className="container">
                <h2 className="block-title text-black text-center">Sản phẩm</h2>
                <div className="index-4-grid grid grid-cols-1 sm:grid-cols-3 gap-[30px] mt-9">
                    {productCategories.map((category, index) => (
                        <div
                            key={index}
                            className="item relative zoom-img rounded-3xl overflow-hidden"
                        >
                            <div className="img h-[300px] sm:h-[400px] relative">
                                <Link
                                    href={category.url}
                                    title={category.title}
                                >
                                    <Image
                                        src={category.image}
                                        alt={category.title}
                                        fill
                                        className="object-cover"
                                        loading="lazy"
                                    />
                                </Link>
                            </div>
                            <div className="title text-white text-2xl text-center font-bold uppercase leading-[normal] absolute bottom-10 left-1/2 -translate-x-1/2 w-full px-2">
                                {category.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
