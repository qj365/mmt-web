import React from 'react';
import Image from 'next/image';
import { BreadcrumbItem } from '../types';
import PageTitle from '../components/shared/PageTitle';
import Header from '../components/layout/header';
import Footer from '../components/layout/Footer';
import PageBanner from '../components/shared/PageBanner';
import Breadcrumb from '../components/shared/Breadcrumb';
import Container from '../components/shared/Container';

export default function ExportMarketsPage() {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Thị trường xuất khẩu', href: '/thi-truong-xuat-khau' },
    ];

    return (
        <>
            <Header />
            <main className="flex flex-col w-full">
                <PageBanner
                    imageSrc="/images/thanh-tich/banner.png"
                    altText="Thị trường xuất khẩu"
                />

                <Breadcrumb items={breadcrumbItems} />

                <Container>
                    <section>
                        <div className="container">
                            <PageTitle title="Biểu đồ kim ngạch xuất khẩu" />
                            <div className="image">
                                <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px]">
                                    <Image
                                        src="/images/thanh-tich/chart.png"
                                        alt="Biểu đồ kim ngạch xuất khẩu"
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>
                </Container>

                {/* Full width section outside of Container */}
                <section className="w-full">
                    <div className="container mx-auto mb-8">
                        <PageTitle title="Thị trường xuất khẩu" />
                    </div>
                    <div className="w-full">
                        <Image
                            src="/images/thanh-tich/global.gif"
                            alt="Thị trường xuất khẩu"
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full h-auto"
                            style={{ width: '100%', height: 'auto' }}
                            priority
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
