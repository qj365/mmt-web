'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Footer = () => {
    const t = useTranslations('footer');
    const menuT = useTranslations('menu');

    return (
        <footer className="bg-[#171717] pt-[40px] pb-[20px]">
            <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                <div className="flex flex-col sm:flex-row flex-wrap">
                    <div className="flex-1 px-0 md:px-[15px] mb-[30px] md:min-w-[310px] max-w-full">
                        <div className="logo">
                            <Link href="/">
                                <Image
                                    src="/images/home/logo.png"
                                    alt="MINH MINH TÂM"
                                    width={180}
                                    height={95}
                                />
                            </Link>
                        </div>
                        <div className="info mt-5">
                            <ul className="list-none p-0 m-0 text-white">
                                <li className="mb-[15px] pl-0 relative text-sm font-normal leading-5 flex items-start">
                                    <i className="far fa-map-marker-alt mt-[3px] mr-[10px] text-[#338dcc] w-5 text-center block flex-none"></i>
                                    <div className="contact-info">
                                        <span className="block font-bold mb-1">
                                            {t('address')}:
                                        </span>
                                        Tháp B, Tòa nhà Sông Đà, đường Phạm
                                        Hùng, phường Mỹ Đình 1, quận Nam Từ
                                        Liêm, Hà Nội, Việt Nam
                                    </div>
                                </li>
                                <li className="mb-[15px] pl-0 relative text-sm font-normal leading-5 flex items-start">
                                    <i className="far fa-phone-alt mt-[3px] mr-[10px] text-[#338dcc] w-5 text-center block flex-none"></i>
                                    <div className="contact-info">
                                        <span className="block font-bold mb-1">
                                            {t('phone')}:
                                        </span>
                                        (84-24) 38264063
                                    </div>
                                </li>
                                <li className="mb-[15px] pl-0 relative text-sm font-normal leading-5 flex items-start">
                                    <i className="far fa-fax mt-[3px] mr-[10px] text-[#338dcc] w-5 text-center block flex-none"></i>
                                    <div className="contact-info">
                                        <span className="block font-bold mb-1">
                                            {t('fax')}:
                                        </span>
                                        (84-24) 38264063
                                    </div>
                                </li>
                                <li className="mb-[15px] pl-0 relative text-sm font-normal leading-5 flex items-start">
                                    <i className="far fa-envelope mt-[3px] mr-[10px] text-[#338dcc] w-5 text-center block flex-none"></i>
                                    <div className="contact-info">
                                        <span className="block font-bold mb-1">
                                            {t('email')}:
                                        </span>
                                        contact@hoatho.com.vn
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 px-0 md:px-[15px] mb-[30px] min-w-[200px]">
                        <div className="title font-medium text-base text-white mb-[10px] pb-[10px] uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-[40px] before:bg-[#338dcc]">
                            {menuT('about')}
                        </div>
                        <div className="content">
                            <ul className="list-none p-0 m-0">
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/gioi-thieu/tong-quan"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('overview')}
                                    </Link>
                                </li>
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/gioi-thieu/tam-nhin-su-menh"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('vision')}
                                    </Link>
                                </li>
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/gioi-thieu/lich-su-hinh-thanh"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('history')}
                                    </Link>
                                </li>
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/gioi-thieu/co-cau-to-chuc"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('structure')}
                                    </Link>
                                </li>
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/nha-may-thuong-hieu"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('factories')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 px-0 md:px-[15px] mb-[30px] min-w-[200px]">
                        <div className="title font-medium text-base text-white mb-[10px] pb-[10px] uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-[40px] before:bg-[#338dcc]">
                            {menuT('products')}
                        </div>
                        <div className="content">
                            <ul className="list-none p-0 m-0">
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/san-pham/san-pham-soi"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('yarn_products')}
                                    </Link>
                                </li>
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/san-pham/san-pham-may-xuat-khau"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('garment_products')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="title font-medium text-base text-white mb-[10px] mt-[20px] pb-[10px] uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-[40px] before:bg-[#338dcc]">
                            {menuT('news')}
                        </div>
                        <div className="content">
                            <ul className="list-none p-0 m-0">
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/tin-tuc"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('news')}
                                    </Link>
                                </li>
                                <li className="mb-2 text-sm font-normal text-white">
                                    <Link
                                        href="/tuyen-dung"
                                        className="text-sm font-normal text-white hover:text-[#338dcc] transition-all"
                                    >
                                        {menuT('careers')}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex-1 px-0 md:px-[15px] mb-[30px] md:min-w-[310px]">
                        <div className="title font-medium text-base text-white mb-[10px] pb-[10px] uppercase relative before:content-[''] before:absolute before:left-0 before:bottom-0 before:h-[3px] before:w-[40px] before:bg-[#338dcc]">
                            Facebook
                        </div>
                        <div className="relative overflow-hidden">
                            <iframe
                                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fminhminhcorp&tabs=timeline&width=290&height=250&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=1041651659294940"
                                width="290"
                                height="250"
                                style={{ border: 'none', overflow: 'hidden' }}
                                allow="encrypted-media"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright py-3 bg-[#111]">
                <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                    <div className="flex items-center justify-between">
                        <div className="text-xs sm:text-sm font-normal text-white">
                            {t('copyright')}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
