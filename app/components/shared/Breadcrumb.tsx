import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbItem } from '@/app/types';

interface BreadcrumbProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
    return (
        <section className="w-full bg-white border-b border-[#F5F5F5]">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px] py-2 sm:py-[10px]">
                <ol className="flex flex-wrap items-center text-sm sm:text-base">
                    <li className="flex items-center">
                        <Link
                            href="/"
                            className="flex items-center hover:text-[#338dcc] transition-colors duration-300"
                        >
                            <div className="w-[18px] h-[24px] flex items-center justify-center">
                                <Image
                                    src="/images/shared/home.svg"
                                    alt="Home"
                                    width={19}
                                    height={25}
                                />
                            </div>
                        </Link>
                    </li>
                    {items.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center pl-2 sm:pl-[10px] relative"
                        >
                            <Link
                                href={item.href}
                                className="text-[13px] sm:text-[14px] leading-[1.5em] text-[#666666] pl-3 sm:pl-[13px] hover:text-[#338dcc] transition-colors duration-300"
                            >
                                {item.label}
                            </Link>
                            <span className="text-[14px] leading-[1.5em] text-[#666666] absolute left-[10px] sm:left-[13px]">
                                /
                            </span>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
}
