import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import PageTitle from '@/shared/PageTitle';
import { BreadcrumbItem } from '@/app/types';
import { JobItem } from '@/app/types/recruitment';
import { ApiListResponse } from '@/app/types/api';
import { getJobItems } from '@/app/lib/api';
import { formatDate } from '@/app/lib/utils';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    // Await params first to access the locale property
    const { locale } = await params;

    // Get translations for SEO metadata
    const t = await getTranslations({ locale, namespace: 'tuyen-dung' });

    return {
        title: `${t('meta_title')} - Minh Minh Tâm`,
        description: t('meta_description'),
        openGraph: {
            title: `${t('meta_title')} - Minh Minh Tâm`,
            description: t('meta_description'),
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/${locale}/tuyen-dung`,
            siteName: 'Minh Minh Tâm',
            locale: locale,
            type: 'website',
            images: [
                {
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/tuyen-dung/banner.png`,
                    width: 1200,
                    height: 630,
                    alt: t('meta_title'),
                },
            ],
        },
    };
}

export default async function TuyenDungPage({
    searchParams: searchParamsPromise,
}: {
    searchParams: Promise<{ page?: string }>;
}) {
    const searchParams = await searchParamsPromise;
    // Get current page from query params or default to page 1
    const currentPage = searchParams.page ? parseInt(searchParams.page) : 1;
    const pageSize = 9;

    // Fetch job items from API with pagination
    const response: ApiListResponse<JobItem> = await getJobItems(
        pageSize,
        currentPage
    );
    const jobItems = response.docs;
    const { totalPages, hasNextPage, hasPrevPage, nextPage, prevPage } =
        response;

    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Tuyển dụng', href: '/tuyen-dung' },
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
            bannerImage="/images/tuyen-dung/banner.png"
            bannerAlt="Tuyển dụng"
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-gray-50"
        >
            <section className="">
                <PageTitle
                    title="Vị trí tuyển dụng"
                    className="mb-10 text-center"
                />

                {!jobItems || jobItems.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                        <div className="w-16 h-16 mb-6 bg-gray-200 rounded-full flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-8 h-8 text-gray-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M9.5 15.5h5M12 20H7a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v12a2 2 0 01-2 2h-5z"
                                />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">
                            Không có vị trí tuyển dụng nào
                        </h3>
                        <p className="text-gray-500 max-w-md">
                            Hiện tại chúng tôi chưa có vị trí tuyển dụng nào.
                            Vui lòng quay lại sau.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
                            {jobItems.map(job => (
                                <Link
                                    key={job.id}
                                    href={`/tuyen-dung/${job.slug}`}
                                    className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col group"
                                >
                                    <div className="img">
                                        <div>
                                            <div className="aspect-[4/3] relative">
                                                <Image
                                                    src={`${process.env.NEXT_PUBLIC_API_URL}${job.featuredImage?.url}`}
                                                    fill
                                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                    alt={
                                                        job.featuredImage.alt ||
                                                        ''
                                                    }
                                                    className="object-cover rounded-t-3xl"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content p-4 flex flex-col justify-between h-full">
                                        <h3 className="font-bold text-lg text-[#338dcc] mb-4 uppercase line-clamp-3 group-hover:text-secondary transition-colors duration-300">
                                            {job.jobTitle}
                                        </h3>
                                        <div className="info-list space-y-3">
                                            <div className="info flex items-center">
                                                <div className="icon mr-3 flex items-center">
                                                    <Image
                                                        src="/images/tuyen-dung/calendar.svg"
                                                        width={24}
                                                        height={24}
                                                        alt="calendar"
                                                        className="w-6 h-6 text-[#338dcc]"
                                                    />
                                                </div>
                                                <div className="text-base text-black">
                                                    {formatDate(
                                                        job.applicationDeadline
                                                    )}
                                                </div>
                                            </div>
                                            <div className="info flex items-center">
                                                <div className="icon mr-3 flex items-center">
                                                    <Image
                                                        src="/images/tuyen-dung/location.svg"
                                                        width={24}
                                                        height={24}
                                                        alt="location"
                                                        className="w-6 h-6 text-[#338dcc]"
                                                    />
                                                </div>
                                                <div className="text-base text-black">
                                                    {job.location}
                                                </div>
                                            </div>
                                        </div>
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
                                                    href={`/tuyen-dung?page=1`}
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
                                                    href={`/tuyen-dung?page=${prevPage}`}
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
                                                    currentPage === page
                                                        ? 'active'
                                                        : ''
                                                }
                                            >
                                                <Link
                                                    href={`/tuyen-dung?page=${page}`}
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
                                                    href={`/tuyen-dung?page=${nextPage}`}
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
                                                    href={`/tuyen-dung?page=${totalPages}`}
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
                    </>
                )}
            </section>
        </ContentPageLayout>
    );
}
