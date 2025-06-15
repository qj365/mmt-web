'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

interface MenuItem {
    title: string;
    url: string;
    children?: MenuItem[];
}

const mainMenu: MenuItem[] = [
    { title: 'Trang chủ', url: '/' },
    {
        title: 'Giới thiệu',
        url: '/gioi-thieu/tong-quan',
        children: [
            { title: 'Tổng quan', url: '/gioi-thieu/tong-quan' },
            {
                title: 'Lịch sử hình thành',
                url: '/gioi-thieu/lich-su-hinh-thanh',
            },
            { title: 'Cơ cấu tổ chức', url: '/gioi-thieu/co-cau-to-chuc' },
            { title: 'Tầm nhìn sứ mệnh', url: '/gioi-thieu/tam-nhin-su-menh' },
            { title: 'Lời cam kết', url: '/gioi-thieu/loi-cam-ket' },
            { title: 'Thành tích', url: '/gioi-thieu/thanh-tich' },
        ],
    },
    { title: 'Thị trường xuất khẩu', url: '/thi-truong-xuat-khau' },
    {
        title: 'Sản phẩm',
        url: '/san-pham/san-pham-soi',
        children: [
            { title: 'Sản phẩm sợi', url: '/san-pham/san-pham-soi' },
            {
                title: 'Sản phẩm may xuất khẩu',
                url: '/san-pham/san-pham-may-xuat-khau',
            },
            {
                title: 'Thời trang nội địa',
                url: '/san-pham/thoi-trang-noi-dia',
            },
        ],
    },
    {
        title: 'Nhà máy - Thương hiệu',
        url: '/nha-may-may-1',
        children: [
            { title: 'Nhà máy may', url: '/nha-may-thuong-hieu/nha-may-may-1' },
            { title: 'Nhà máy sợi', url: '/nha-may-thuong-hieu/nha-may-soi' },
            {
                title: 'Thương hiệu trực thuộc',
                url: '/nha-may-thuong-hieu/thuong-hieu-truc-thuoc',
            },
        ],
    },
    {
        title: 'Tin tức',
        url: '/tin-tuc/tin-tuc-2',
        children: [
            {
                title: 'Thông tin ngành',
                url: '/tin-tuc/tin-tuc-2/thong-tin-nganh',
            },
            {
                title: 'Thông Tin Tổng Công ty',
                url: '/tin-tuc/tin-tuc-2/thong-tin-tong-cong-ty',
            },
            { title: 'Hình Ảnh', url: '/tin-tuc/tin-tuc-2/hinh-anh' },
            { title: 'Video', url: '/tin-tuc/tin-tuc-2/video' },
        ],
    },
    {
        title: 'Quan hệ cổ đông',
        url: '/quan-he-co-dong',
        children: [
            {
                title: 'Thông tin cổ đông',
                url: '/quan-he-co-dong/thong-tin-co-dong/2025',
            },
            {
                title: 'Phát triển bền vững',
                url: '/quan-he-co-dong/phat-trien-ben-vung',
            },
            {
                title: 'Đại hội đồng cổ đông',
                url: '/quan-he-co-dong/dai-hoi-dong-co-dong/2025-5',
            },
            {
                title: 'Tình hình tài chính',
                url: '/quan-he-co-dong/tinh-hinh-tai-chinh/2025-1',
            },
            {
                title: 'Điều lệ quy chế',
                url: '/quan-he-co-dong/dieu-le-quy-che/2025-3',
            },
            {
                title: 'Biểu đồ cổ đông',
                url: '/quan-he-co-dong/bieu-do-co-dong',
            },
        ],
    },
    { title: 'Tuyển dụng', url: '/tuyen-dung' },
    { title: 'Liên hệ', url: '/lien-he' },
];

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    // Close mobile menu when screen size changes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 1280) {
                // xl breakpoint
                setIsMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <div className="container w-full h-full xl:block flex items-center w-full">
                <div className="header-wrapper flex items-center relative w-full h-full xl:justify-start justify-between">
                    {/* Mobile burger menu */}
                    <div
                        className={`burger xl:hidden ${
                            isMenuOpen ? 'active' : ''
                        }`}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                        <div className="line-3"></div>
                    </div>

                    {/* Logo */}
                    <div className="logo absolute xl:static -translate-x-1/2 xl:translate-x-0 left-1/2 top-0">
                        <Link href="/">
                            <Image
                                src="/images/logo.png"
                                alt="Dệt may Hoà Thọ"
                                width={180}
                                height={80}
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="nav-desktop xl:block hidden">
                        <nav>
                            <ul className="list-none p-0 flex ul-parent xl:flex-row flex-col items-center">
                                {mainMenu.map((item, index) => (
                                    <li
                                        key={index}
                                        className={
                                            item.children ? 'has-child' : ''
                                        }
                                    >
                                        {item.children ? (
                                            <>
                                                <div className="parent">
                                                    <Link href={item.url}>
                                                        {item.title}
                                                    </Link>
                                                    <em className="fal fa-angle-down xl:!hidden"></em>
                                                </div>
                                                <div className="child">
                                                    <ul className="list-none p-0 flex flex-col ul-child xl:items-start items-center">
                                                        {item.children.map(
                                                            (
                                                                child,
                                                                childIndex
                                                            ) => (
                                                                <li
                                                                    key={
                                                                        childIndex
                                                                    }
                                                                >
                                                                    <Link
                                                                        href={
                                                                            child.url
                                                                        }
                                                                    >
                                                                        {
                                                                            child.title
                                                                        }
                                                                    </Link>
                                                                </li>
                                                            )
                                                        )}
                                                    </ul>
                                                </div>
                                            </>
                                        ) : (
                                            <Link href={item.url}>
                                                {item.title}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>

                    {/* Tool items */}
                    <div className="tool-items">
                        <div className="flex items-center">
                            <div
                                className="search-icon"
                                onClick={() => setIsSearchOpen(!isSearchOpen)}
                            >
                                <em className="far fa-search"></em>
                            </div>
                            <div className="language">
                                <div className="language-list">
                                    <ul className="list-none p-0 flex items-center">
                                        <li className="active">
                                            <Link href="/">VI</Link>
                                        </li>
                                        <li>
                                            <Link href="/en-US/">EN</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div
                className={`nav-mobile fixed bg-white w-full xl:hidden ${
                    isMenuOpen ? 'active' : ''
                }`}
            >
                <div className="nav-mobile-wrapper p-3">
                    <nav>
                        <ul className="list-none p-0 flex ul-parent flex-col items-center">
                            {mainMenu.map((item, index) => (
                                <li
                                    key={index}
                                    className={item.children ? 'has-child' : ''}
                                >
                                    {item.children ? (
                                        <>
                                            <div className="parent">
                                                <Link href={item.url}>
                                                    {item.title}
                                                </Link>
                                                <em className="fal fa-angle-down"></em>
                                            </div>
                                            <div className="child">
                                                <ul className="list-none p-0 flex flex-col ul-child items-center">
                                                    {item.children.map(
                                                        (child, childIndex) => (
                                                            <li
                                                                key={childIndex}
                                                            >
                                                                <Link
                                                                    href={
                                                                        child.url
                                                                    }
                                                                >
                                                                    {
                                                                        child.title
                                                                    }
                                                                </Link>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                            </div>
                                        </>
                                    ) : (
                                        <Link href={item.url}>
                                            {item.title}
                                        </Link>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="search-overlay">
                    <div className="container w-full">
                        <div className="wrapper">
                            <div className="searchbox productsearchbox">
                                <input
                                    type="text"
                                    className="searchinput"
                                    placeholder="Tìm kiếm"
                                    autoComplete="off"
                                />
                                <button className="searchbutton">
                                    <em className="far fa-search"></em>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
