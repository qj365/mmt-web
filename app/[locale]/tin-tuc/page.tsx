import React from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import PageTitle from '@/shared/PageTitle';
import Link from 'next/link';
import Image from 'next/image';
import { BreadcrumbItem } from '@/app/types';
import { NewsItem } from '@/app/types/news';
import { getNewsItems } from '@/app/lib/api';
import { ApiListResponse } from '@/app/types/api';
import { formatDate } from '@/app/lib/utils';

export default async function NewsPage({
    searchParams: searchParamsPromise,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const searchParams = await searchParamsPromise;
    // Get current page from query params or default to page 1
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const pageSize = 9;

    // Fetch news items from API with pagination
    const response: ApiListResponse<NewsItem> = await getNewsItems(
        pageSize,
        currentPage
    );
    const newsItems = response.docs;
    const { totalPages, hasNextPage, hasPrevPage, nextPage, prevPage } =
        response;

    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Tin tức', href: '/tin-tuc' },
    ];

    // Generate page numbers to display in pagination
    const generatePageNumbers = () => {
        const pageNumbers = [];
        const maxPagesToShow = 5;

        let startPage = Math.max(
            1,
            currentPage - Math.floor(maxPagesToShow / 2)
        );
        const endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

        if (endPage - startPage + 1 < maxPagesToShow) {
            startPage = Math.max(1, endPage - maxPagesToShow + 1);
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        return pageNumbers;
    };

    const pageNumbers = generatePageNumbers();

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
                    {newsItems?.map(item => (
                        <Link
                            href={`/tin-tuc/${item.slug}`}
                            key={item.id}
                            className="block bg-white shadow-md rounded-lg sm:rounded-3xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_API_URL}${item.featuredImage?.url}`}
                                    alt={item.featuredImage.alt || ''}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="text-xs text-gray-500">
                                    {formatDate(item.publishedAt)}
                                </div>
                                <h3 className="font-bold text-md sm:text-xl uppercase text-[#338dcc] mt-2 mb-3 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                                    {''}
                                </p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="w-full flex justify-center mt-10">
                        <nav className="flex">
                            <ul className="flex items-center gap-2">
                                {/* First page */}
                                {currentPage > 1 && (
                                    <li>
                                        <Link
                                            href={`/tin-tuc?page=1`}
                                            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                                        >
                                            &laquo;
                                        </Link>
                                    </li>
                                )}

                                {/* Previous page */}
                                {hasPrevPage && (
                                    <li>
                                        <Link
                                            href={`/tin-tuc?page=${prevPage}`}
                                            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                                        >
                                            &lsaquo;
                                        </Link>
                                    </li>
                                )}

                                {/* Page numbers */}
                                {pageNumbers.map(page => (
                                    <li
                                        key={page}
                                        className={
                                            currentPage === page ? 'active' : ''
                                        }
                                    >
                                        <Link
                                            href={`/tin-tuc?page=${page}`}
                                            className={`flex items-center justify-center w-8 h-8 rounded-full ${
                                                currentPage === page
                                                    ? 'bg-[#338dcc] text-white'
                                                    : 'hover:bg-gray-200'
                                            }`}
                                        >
                                            {page}
                                        </Link>
                                    </li>
                                ))}

                                {/* Next page */}
                                {hasNextPage && (
                                    <li>
                                        <Link
                                            href={`/tin-tuc?page=${nextPage}`}
                                            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                                        >
                                            &rsaquo;
                                        </Link>
                                    </li>
                                )}

                                {/* Last page */}
                                {currentPage < totalPages && (
                                    <li>
                                        <Link
                                            href={`/tin-tuc?page=${totalPages}`}
                                            className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-gray-200"
                                        >
                                            &raquo;
                                        </Link>
                                    </li>
                                )}
                            </ul>
                        </nav>
                    </div>
                )}
            </div>
        </ContentPageLayout>
    );
}
