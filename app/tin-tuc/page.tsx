'use client';

import React from 'react';
import ContentPageLayout from '../components/layout/ContentPageLayout';
import PageTitle from '../components/shared/PageTitle';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbItem } from '../types';

interface NewsItem {
    id: string;
    title: string;
    date: string;
    content: string;
    image: string;
    url: string;
}

export default function NewsPage() {
    // Mock data based on the HTML content
    const newsItems: NewsItem[] = [
        {
            id: '8500',
            title: 'LỄ PHÁT ĐỘNG THI ĐUA CHÀO MỪNG ĐẠI HỘI ĐẢNG BỘ TỔNG CÔNG TY CP DỆT MAY MINH MINH TÂM LẦN THỨ XVI, NHIỆM KỲ 2025 - 2030',
            date: '09/06/2025',
            content:
                'Hướng tới Đại hội đại biểu Đảng bộ Tổng Công ty Cổ phần Dệt May MINH MINH TÂM lần thứ XVI, Nhiệm kỳ 2025 – 2030, sáng ngày 9/6/2025, tại Hội trường Tổng Công ty, Đảng ủy Tổng Công ty đã trang trọng tổ chức "Lễ phát động thi đua chào mừng Đại hội Đảng bộ Tổng Công ty".',
            image: '/images/tin-tuc/image.png',
            url: '/tin-tuc/1',
        },
    ];

    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Tin tức', href: '/tin-tuc' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/tin-tuc/banner.png"
            bannerAlt="Tin tức"
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-gray-50"
        >
            <div className="flex flex-col items-center">
                <PageTitle title="Thông Tin Tổng Công Ty" className="mb-10" />

                {/* News items grid */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                    {newsItems.map(item => (
                        <Link
                            href={item.url}
                            key={item.id}
                            className="block bg-white shadow-md rounded-lg sm:rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="text-xs text-gray-500">
                                    {item.date}
                                </div>
                                <h3 className="font-bold text-md sm:text-xl uppercase text-[#338dcc] mt-2 mb-3 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                                    {item.content}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                {/* <div className="w-full flex justify-center mt-10">
                    <nav className="flex">
                        <ul className="flex items-center gap-2">
                            <li className="active">
                                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#338dcc] text-white">
                                    1
                                </span>
                            </li>
                            {[2, 3, 4, 5, 6, 7, 8, 9, 10].map(page => (
                                <li key={page}>
                                    <Link
                                        href="#"
                                        className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                                    >
                                        {page}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                                >
                                    &rsaquo;
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="#"
                                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                                >
                                    &raquo;
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div> */}
            </div>
        </ContentPageLayout>
    );
}
