import React from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/types/index';
import { getNewsItemBySlug, getRelatedNewsItems } from '@/app/lib/api';
import { notFound } from 'next/navigation';
import { formatDate, rewriteImageSrc } from '@/app/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { NewsItem } from '@/app/types/news';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';
import { Metadata } from 'next';

export async function generateMetadata({
    params: paramsPromise,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    // Await the params object
    const params = await paramsPromise;
    const { locale, slug } = params;

    // Fetch the article data based on the slug parameter
    const article = await getNewsItemBySlug(slug);

    // If article not found, return a basic metadata object
    if (!article) {
        return {
            title: 'Article Not Found',
            description: 'The requested article could not be found.',
        };
    }

    // Define metadata based on the article content
    const imageUrl = article.featuredImage
        ? `${process.env.NEXT_PUBLIC_API_URL}${article.featuredImage.url}`
        : '/images/tin-tuc/banner.png';

    const metadata: Record<string, Metadata> = {
        vi: {
            title: `${article.title} - Dệt may Minh Minh Tâm`,
            description:
                article.excerpt ||
                'Thông tin chi tiết về bài viết từ Dệt may Minh Minh Tâm',
            keywords: `${article.title}, tin tức, dệt may, Minh Minh Tâm, thông tin công ty`,
            openGraph: {
                title: `${article.title} - Dệt may Minh Minh Tâm`,
                description:
                    article.excerpt ||
                    'Thông tin chi tiết về bài viết từ Dệt may Minh Minh Tâm',
                images: [imageUrl],
                type: 'article',
                publishedTime: article.publishedAt,
                modifiedTime: article.updatedAt,
            },
        },
        ja: {
            title: `${article.title} - ミン ミン タム紡織`,
            description:
                article.excerpt || 'ミン ミン タム紡織からの記事の詳細情報',
            keywords: `${article.title}, ニュース, 紡織, ミン ミン タム, 会社情報`,
            openGraph: {
                title: `${article.title} - ミン ミン タム紡織`,
                description:
                    article.excerpt || 'ミン ミン タム紡織からの記事の詳細情報',
                images: [imageUrl],
                type: 'article',
                publishedTime: article.publishedAt,
                modifiedTime: article.updatedAt,
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default async function NewsDetailPage({
    params: paramsPromise,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    // Await the params object as required by Next.js
    const params = await paramsPromise;
    // Fetch the article data based on the slug parameter
    const article = await getNewsItemBySlug(params.slug);

    // If article not found, return 404
    if (!article) {
        notFound();
    }

    // Fetch related articles
    const relatedArticles = await getRelatedNewsItems(params.slug, 3);

    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Tin tức', href: '/tin-tuc' },
        {
            label: 'Thông Tin Công Ty',
            href: '/tin-tuc',
        },
        { label: article.title, href: `/tin-tuc/${params.slug}` },
    ];

    // Convert Lexical JSON content to HTML
    const htmlContent = convertLexicalToHTML({
        data: article.content,
    });
    const htmlWithFullImageUrls = rewriteImageSrc(
        htmlContent,
        process.env.NEXT_PUBLIC_API_URL || ''
    );

    return (
        <ContentPageLayout
            bannerImage="/images/tin-tuc/banner.png"
            bannerAlt="Tin tức"
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-gray-50"
            containerBackground="/images/tin-tuc/bg.png"
        >
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
                {/* Article header */}
                <div className="p-8">
                    <div className="mb-7">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight uppercase text-[#338dcc] mb-5">
                            {article.title}
                        </h1>
                        <div className="flex items-center justify-between">
                            <div className="text-gray-600 font-normal text-lg">
                                {formatDate(article.publishedAt)}
                            </div>
                        </div>
                    </div>

                    {/* Article content */}
                    <div className="article-content prose max-w-none">
                        <div
                            dangerouslySetInnerHTML={{
                                __html: htmlWithFullImageUrls,
                            }}
                        />
                    </div>
                </div>
            </div>

            {/* Related articles */}
            {relatedArticles && relatedArticles.length > 0 && (
                <div className="mt-10">
                    <h2 className="text-2xl font-bold uppercase text-[#338dcc] text-center mb-8">
                        Tin tức khác
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {relatedArticles.map((article: NewsItem) => (
                            <Link
                                key={article.id}
                                href={`/tin-tuc/${article.slug}`}
                                className="bg-white shadow-md rounded-lg sm:rounded-3xl overflow-hidden"
                            >
                                <div className="relative w-full h-[200px]">
                                    {article.featuredImage ? (
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_API_URL}${article.featuredImage.url}`}
                                            alt={article.featuredImage.alt}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                                            <span className="text-gray-500">
                                                No image
                                            </span>
                                        </div>
                                    )}
                                </div>
                                <div className="p-4 sm:p-6">
                                    <div className="text-xs text-gray-500">
                                        {formatDate(article.publishedAt)}
                                    </div>
                                    <h3 className="font-bold text-md sm:text-xl uppercase text-[#338dcc] mt-2 mb-3 line-clamp-2">
                                        <Link href={`/tin-tuc/${article.slug}`}>
                                            {article.title}
                                        </Link>
                                    </h3>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </ContentPageLayout>
    );
}
