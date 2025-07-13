import React from 'react';
import Header from './header';
import Footer from './footer';
import PageBanner from '../shared/PageBanner';
import Breadcrumb from '../shared/Breadcrumb';
import Container from '../shared/Container';
import { BreadcrumbItem } from '@/app/types';
import { BreadcrumbJsonLd } from '../shared/JsonLd';
import { useLocale } from 'next-intl';

interface ContentPageLayoutProps {
    children: React.ReactNode;
    bannerImage: string;
    bannerAlt?: string;
    bannerHeight?: string;
    breadcrumbItems: BreadcrumbItem[];
    containerBackground?: string;
    containerClassName?: string;
}

export default function ContentPageLayout({
    children,
    bannerImage,
    bannerAlt = 'Banner',
    bannerHeight,
    breadcrumbItems,
    containerBackground,
    containerClassName,
}: ContentPageLayoutProps) {
    // Get current locale for building full URLs
    const locale = useLocale();

    // Create breadcrumb items with full URLs for JSON-LD
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';
    const breadcrumbItemsWithFullUrl = breadcrumbItems.map(item => ({
        name: item.label,
        url: `${baseUrl}${locale === 'vi' ? '' : '/' + locale}${item.href}`,
    }));

    // Add home page as first item if not already included
    if (breadcrumbItems[0]?.href !== '/') {
        breadcrumbItemsWithFullUrl.unshift({
            name: 'Home',
            url: `${baseUrl}${locale === 'vi' ? '' : '/' + locale}/`,
        });
    }

    return (
        <>
            <BreadcrumbJsonLd breadcrumbItems={breadcrumbItemsWithFullUrl} />
            <Header />
            <main className="flex flex-col w-full">
                <PageBanner
                    imageSrc={bannerImage}
                    altText={bannerAlt}
                    height={bannerHeight}
                />

                <Breadcrumb items={breadcrumbItems} />

                <Container
                    backgroundImage={containerBackground}
                    className={containerClassName}
                >
                    {children}
                </Container>
            </main>
            <Footer />
        </>
    );
}
