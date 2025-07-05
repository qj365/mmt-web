'use client';

import React from 'react';
import ContentPageLayout from '../components/layout/ContentPageLayout';
import PageTitle from '../components/shared/PageTitle';
import { BreadcrumbItem } from '../types';

export default function ContactPage() {
    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Liên hệ', href: '/lien-he' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/lien-he/banner.png"
            bannerAlt="Liên hệ"
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/lien-he/bg.png"
            containerClassName="py-10"
        >
            <div className="contact-information">
                <PageTitle title="TỔNG CÔNG TY CỔ PHẦN DỆT MAY HOÀ THỌ" />

                <div className="content-wrapper mt-8 bg-white shadow-lg mt-10 rounded-[20px] p-8">
                    <div className="block mb-6">
                        <div className="ctn">
                            <p>
                                Địa chỉ: 36 Ông Ích Đường, Phường Hòa Thọ Đông,
                                Quận Cẩm Lệ, Đà Nẵng{' '}
                            </p>
                            <p>
                                Email:{' '}
                                <a href="mailto:office@hoatho.com.vn">
                                    office@hoatho.com.vn
                                </a>
                            </p>
                            <p>
                                Tổng đài:{' '}
                                <a href="tel:(+84)2363846290">
                                    (+84) 2363 846 290
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                        <div>
                            <div className="ctn">
                                <div className="title font-bold mb-4">
                                    <p>PHỤ TRÁCH NGÀNH MAY</p>
                                </div>
                                <p>
                                    <strong>
                                        Khối May 1: Ms. Hoàng Thùy Oanh – Phó
                                        Tổng Giám đốc
                                    </strong>
                                    <br />
                                    Mặt hàng chủ lực:
                                    <br />
                                    <span className="ml-4">
                                        - Thời trang nam: quần, áo veston các
                                        loại, áo ghi lê
                                    </span>
                                    <br />
                                    <span className="ml-4">
                                        - Thời trang nữ: quần, áo veston, áo ghi
                                        lê
                                    </span>
                                    <br />
                                    <span className="ml-4">
                                        - Thời trang trẻ em nam: quần, áo veston
                                        các loại, áo ghi lê
                                    </span>
                                    <br />
                                    Email:{' '}
                                    <a href="mailto:oanhht@hoatho.com.vn">
                                        oanhht@hoatho.com.vn
                                    </a>
                                    <br />
                                    Điện thoại:{' '}
                                    <a href="tel:+84.2363.846290">
                                        +84.2363.846290
                                    </a>
                                    <br />
                                    Fax: +84.2363.846216
                                    <br />
                                    <br />
                                    <strong>
                                        Khối May 2: Ms. Trần Hòa Châu – Phó Tổng
                                        Giám đốc
                                    </strong>
                                    <br />
                                    Mặt hàng chủ lực: Jacket, Bảo hộ lao động,
                                    hàng dệt kim, quần áo trẻ em, váy đầm các
                                    loại.
                                    <br />
                                    Email:{' '}
                                    <a href="mailto:chauth@hoatho.com.vn">
                                        chauth@hoatho.com.vn
                                    </a>
                                    <br />
                                    Điện thoại:{' '}
                                    <a href="tel:+84.2363.846290">
                                        +84.2363.846290
                                    </a>
                                    <br />
                                    Fax: +84.2363.846216
                                </p>
                                <p>
                                    <a
                                        href="/Data/Sites/1/media/hoatho_catalogue.pdf"
                                        className="underline"
                                    >
                                        Garment profile
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div>
                            <div className="ctn">
                                <div className="title font-bold mb-4">
                                    <p>PHỤ TRÁCH NGÀNH SỢI</p>
                                </div>
                                <p>
                                    Ms. Nguyễn Thị Hoài Thanh - Trưởng Phòng
                                    Kinh Doanh Sợi
                                </p>
                                <p>
                                    Email:{' '}
                                    <a href="mailto:thanhnth@hoatho.com.vn">
                                        thanhnth@hoatho.com.vn
                                    </a>
                                </p>
                                <p>
                                    Điện thoại:{' '}
                                    <a href="tel:+84.905408588">
                                        +84.905408588
                                    </a>
                                </p>
                                <p>Fax: +84.2363.846217</p>
                                <p>
                                    <a
                                        href="/Data/Sites/1/media/HoaThoYarnProfile2024.pdf"
                                        target="_blank"
                                        title="Yarn Profile"
                                        className="underline"
                                    >
                                        Yarn profile
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="map mt-10 rounded-[20px] overflow-hidden h-[450px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.879271427485!2d108.20179069999999!3d16.019799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421988058f36a1%3A0xf8adf44d71cae063!2zMzYgw5RuZyDDjWNoIMSQLiwgS2h1w6ogVHJ1bmcsIEPhuqltIEzhu4csIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1652072935880!5m2!1svi!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Hoà Thọ Location"
                    ></iframe>
                </div>
            </div>
        </ContentPageLayout>
    );
}
