import React from 'react';
import Header from './header';
import Footer from './footer';
import PageBanner from '../shared/PageBanner';
import Breadcrumb from '../shared/Breadcrumb';
import Container from '../shared/Container';
import { BreadcrumbItem } from '../../types';

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
    return (
        <>
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
