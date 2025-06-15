'use client';

import Image from 'next/image';
import Link from 'next/link';

const brands = [
    {
        name: 'THỜI TRANG NAM MERRIMAN',
        logo: 'https://picsum.photos/200/200',
        url: '/nha-may-thuong-hieu/thuong-hieu-truc-thuoc',
    },
    {
        name: 'HÒA THỌ FASHION',
        logo: 'https://picsum.photos/201/201',
        url: '/nha-may-thuong-hieu/thuong-hieu-truc-thuoc',
    },
    {
        name: 'TRUNG TÂM THƯƠNG MẠI HÒA THỌ',
        logo: 'https://picsum.photos/202/202',
        url: '/nha-may-thuong-hieu/thuong-hieu-truc-thuoc',
    },
];

export default function BrandsSection() {
    return (
        <section className="index-5 section pb-0">
            <div className="container">
                <h2 className="block-title text-center text-black">
                    Thương hiệu trực thuộc
                </h2>
                <div className="button mt-7 mb-11">
                    <Link
                        className="btn btn-1 mx-auto block w-fit"
                        href="/nha-may-thuong-hieu/thuong-hieu-truc-thuoc"
                    >
                        Xem thêm
                    </Link>
                </div>
            </div>

            <div
                className="icon-wrapper flex items-center px-7 flex-col sm:flex-row justify-center w-full sm:gap-x-12 md:gap-x-[115px] gap-y-12 py-12 sm:py-0 sm:h-[60vh] 2xl:h-[570px]"
                style={{ backgroundColor: '#f0f0f0' }}
            >
                {brands.map((brand, index) => (
                    <div
                        key={index}
                        className="icon w-[140px] sm:w-[120px] lg:w-[150px] 2xl:w-[180px] bg-white rounded-full flex items-center justify-center relative"
                        style={{ aspectRatio: '1/1' }}
                    >
                        <div className="img">
                            <Link href={brand.url} title={brand.name}>
                                <Image
                                    className="p-4 rounded-full"
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={180}
                                    height={180}
                                    loading="lazy"
                                />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
