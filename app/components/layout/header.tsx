'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface NavMenuItem {
    title: string;
    href: string;
    children?: NavMenuItem[];
}

const navItems: NavMenuItem[] = [
    // { title: 'Trang chủ', href: '/' },
    {
        title: 'Giới thiệu',
        href: '/gioi-thieu/tong-quan',
        children: [
            { title: 'Tổng quan', href: '/gioi-thieu/tong-quan' },
            {
                title: 'Lịch sử hình thành',
                href: '/gioi-thieu/lich-su-hinh-thanh',
            },
            { title: 'Cơ cấu tổ chức', href: '/gioi-thieu/co-cau-to-chuc' },
            { title: 'Tầm nhìn sứ mệnh', href: '/gioi-thieu/tam-nhin-su-menh' },
            { title: 'Lời cam kết', href: '/gioi-thieu/loi-cam-ket' },
            { title: 'Thành tích', href: '/gioi-thieu/thanh-tich' },
        ],
    },
    { title: 'Thị trường xuất khẩu', href: '/thi-truong-xuat-khau' },
    {
        title: 'Sản phẩm',
        href: '/san-pham/san-pham-soi',
        children: [
            { title: 'Sản phẩm sợi', href: '/san-pham/san-pham-soi' },
            {
                title: 'Sản phẩm may xuất khẩu',
                href: '/san-pham/san-pham-may-xuat-khau',
            },
            {
                title: 'Thời trang nội địa',
                href: '/san-pham/thoi-trang-noi-dia',
            },
        ],
    },
    {
        title: 'Nhà máy - Thương hiệu',
        href: '/nha-may-thuong-hieu',
    },
    {
        title: 'Tin tức',
        href: '/tin-tuc',
    },
    {
        title: 'Quan hệ cổ đông',
        href: '/quan-he-co-dong',
        children: [
            {
                title: 'Thông tin cổ đông',
                href: '/quan-he-co-dong/thong-tin-co-dong/2025',
            },
            {
                title: 'Phát triển bền vững',
                href: '/quan-he-co-dong/phat-trien-ben-vung',
            },
            {
                title: 'Đại hội đồng cổ đông',
                href: '/quan-he-co-dong/dai-hoi-dong-co-dong/2025-5',
            },
            {
                title: 'Tình hình tài chính',
                href: '/quan-he-co-dong/tinh-hinh-tai-chinh/2025-1',
            },
            {
                title: 'Điều lệ quy chế',
                href: '/quan-he-co-dong/dieu-le-quy-che/2025-3',
            },
            {
                title: 'Biểu đồ cổ đông',
                href: '/quan-he-co-dong/bieu-do-co-dong',
            },
        ],
    },
    { title: 'Tuyển dụng', href: '/tuyen-dung' },
    { title: 'Liên hệ', href: '/lien-he' },
];

const NavLink = ({
    item,
    isMobile = false,
}: {
    item: NavMenuItem;
    isMobile?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!item.children) {
        return (
            <Link
                href={item.href}
                title={item.title}
                className={
                    item.href === '/'
                        ? 'flex items-center justify-center bg-red-600 text-white rounded-full w-8 h-8 p-0 before:content-["\\f015"] before:font-["Font_Awesome_5_Pro"] before:text-base before:font-light before:transition-all'
                        : 'inline-block rounded-[50px] px-[15px] py-1 hover:bg-red-600 hover:text-white text-[#111111] font-medium text-base leading-6 whitespace-nowrap'
                }
            >
                {item.title}
            </Link>
        );
    }

    return (
        <div className="has-child relative w-full whitespace-nowrap">
            <div className="parent flex justify-between">
                <Link
                    href={item.href}
                    title={item.title}
                    className="inline-block rounded-[50px] px-[15px] py-1 hover:bg-red-600 hover:text-white text-[#111111] font-medium text-base leading-6 whitespace-nowrap"
                >
                    {item.title}
                </Link>
                <em
                    className="fal fa-angle-down xl:!hidden text-[1.875rem] relative transition-all cursor-pointer flex-none w-10"
                    onClick={() => isMobile && setIsOpen(!isOpen)}
                    style={{
                        transform: isOpen ? 'rotate(180deg)' : 'none',
                    }}
                ></em>
            </div>
            <div
                className={`child ${
                    isMobile
                        ? isOpen
                            ? 'block'
                            : 'hidden'
                        : 'xl:absolute xl:min-w-[230px] xl:bg-white xl:left-[-20px] xl:top-[calc(100%-1px)] xl:shadow-[2px_4px_12px_rgba(0,0,0,0.1)] xl:opacity-0 xl:pointer-events-none xl:transition-all xl:duration-300 xl:py-[10px] xl:px-0 xl:group-hover:opacity-100 xl:group-hover:pointer-events-auto'
                }`}
            >
                <ul className="list-none p-0 flex flex-col ul-child xl:items-start items-center">
                    {item.children.map((child, index) => (
                        <li key={index} className="xl:font-normal w-full">
                            <Link
                                href={child.href}
                                title={child.title}
                                className="block py-2 px-5 hover:bg-red-600 hover:text-white"
                            >
                                {child.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [searchOpen, setSearchOpen] = useState(false);
    const [isScrollingDown, setIsScrollingDown] = useState(false);
    const [prevScrollY, setPrevScrollY] = useState(0);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    // const toggleSearch = () => {
    //     setSearchOpen(!searchOpen);
    // };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > prevScrollY && currentScrollY > 75) {
                setIsScrollingDown(true);
            } else {
                setIsScrollingDown(false);
            }

            setPrevScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollY]);

    return (
        <>
            <header
                className={`bg-white border-b border-[#e5e5e5] fixed w-full left-1/2 -translate-x-1/2 top-0 z-[1000] h-[60px] sm:h-[70px] lg:h-[80px] transition-all duration-300 ${
                    mobileMenuOpen ? 'navMobileOpen' : ''
                } ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}
            >
                <div className="container w-full h-full xl:block flex items-center 2xl:px-[210px] 2xl:pr-[263px] xl:min-w-max">
                    <div className="header-wrapper flex items-center relative w-full h-full xl:justify-start justify-between">
                        <div
                            className={`burger xl:hidden relative ${
                                mobileMenuOpen ? 'active' : ''
                            } before:content-[""] before:absolute before:w-10 before:h-10 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2`}
                            onClick={toggleMobileMenu}
                        >
                            <div
                                className={`line-1 bg-[#338dcc] h-[3px] w-[22px] my-1 mx-0 transition-all duration-500 ${
                                    mobileMenuOpen
                                        ? 'transform -rotate-45 translate-x-[-4px] translate-y-[5px]'
                                        : ''
                                }`}
                            ></div>
                            <div
                                className={`line-2 bg-[#338dcc] h-[3px] w-[22px] my-1 mx-0 transition-all duration-500 ${
                                    mobileMenuOpen ? 'opacity-0' : ''
                                }`}
                            ></div>
                            <div
                                className={`line-3 bg-[#338dcc] h-[3px] w-[22px] my-1 mx-0 transition-all duration-500 ${
                                    mobileMenuOpen
                                        ? 'transform rotate-45 translate-x-[-5px] translate-y-[-6px]'
                                        : ''
                                }`}
                            ></div>
                        </div>

                        <div className="logo absolute xl:static -translate-x-1/2 xl:translate-x-0 left-1/2 top-0 h-full xl:w-[180px] xl:ml-16">
                            <Link
                                href="/"
                                className="flex items-center justify-center h-full w-full relative"
                            >
                                <Image
                                    src="/images/home/logo.png"
                                    alt="Dệt may Hoà Thọ"
                                    width={150}
                                    height={80}
                                    className="w-full h-full object-contain py-[5px] relative z-[1] xl:transform xl:scale-100 xl:translate-y-[20px] transition-all duration-300"
                                    priority
                                />
                                <span className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[90px] w-[160px] h-[160px] z-0 transition-all duration-300 after:content-['']"></span>
                            </Link>
                        </div>

                        <div className="nav-desktop xl:block hidden ml-auto">
                            <nav className="flex items-center">
                                <div className="bg-secondary rounded-[16px] w-8 h-8 flex items-center justify-center mr-[4px]">
                                    <Image
                                        src="/images/home/menu-icon.svg"
                                        alt="Menu"
                                        width={18}
                                        height={14}
                                        className="text-white"
                                    />
                                </div>
                                <ul className="list-none p-0 flex ul-parent xl:flex-row flex-col items-center xl:flex-nowrap overflow-visible">
                                    {navItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className="group font-medium py-7 first:text-0 flex-shrink-0"
                                        >
                                            <NavLink item={item} />
                                        </li>
                                    ))}
                                </ul>
                            </nav>
                        </div>

                        <div className="tool-items ml-[18px]">
                            <div className="flex items-center">
                                {/* <div
                                    className="search-icon text-[#338dcc] cursor-pointer text-base font-normal"
                                    onClick={toggleSearch}
                                >
                                    <em className="far fa-search"></em>
                                </div> */}
                                <div className="language ml-[19px]">
                                    <div className="language-list">
                                        <ul className="list-none p-0 flex items-center">
                                            <li className="active text-sm font-normal leading-[1.8571428571428572em] uppercase">
                                                <Link
                                                    href="/"
                                                    title="VI"
                                                    className="text-[#ea222d]"
                                                >
                                                    VI
                                                </Link>
                                            </li>
                                            <li className="text-sm font-normal leading-[1.8571428571428572em] uppercase border-l border-[#e5e5e5] ml-[11px] pl-[11px]">
                                                <Link
                                                    href="/en-US/"
                                                    title="EN"
                                                    className="text-[#999] hover:text-[#338dcc]"
                                                >
                                                    EN
                                                </Link>
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
                    className={`nav-mobile fixed bg-white w-full xl:hidden h-[calc(100vh-var(--header-height))] overflow-auto pb-[50px] transition-all duration-300 z-10 ${
                        mobileMenuOpen
                            ? 'active opacity-100 pointer-events-auto top-[60px] sm:top-[70px] lg:top-[80px]'
                            : 'opacity-0 pointer-events-none top-[15vh]'
                    }`}
                >
                    <div className="nav-mobile-wrapper p-3">
                        <div className="mobile-nav">
                            <ul className="list-none p-0 flex flex-col items-center max-w-full mx-auto sm:max-w-[320px]">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="text-[1.375rem] font-medium py-[10px] w-full"
                                    >
                                        <NavLink
                                            key={index}
                                            item={item}
                                            isMobile={true}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>

            {/* Search Overlay */}
            {searchOpen && (
                <div
                    className={`search-overlay fixed w-full bg-white shadow-[0_0_15px_rgba(0,0,0,0.15)] z-[10000] transition-all duration-300 opacity-100 pointer-events-auto top-[60px] sm:top-[70px] lg:top-[80px] hover:bg-[#f5f5f5] ${
                        isScrollingDown ? '-translate-y-full' : 'translate-y-0'
                    }`}
                >
                    <div className="container w-full">
                        <div className="wrapper">
                            <div className="searchbox productsearchbox flex items-center w-full py-[10px] xl:py-[20px]">
                                <input
                                    type="text"
                                    className="searchinput flex-1 bg-transparent border-b border-[#111] text-[#111] text-sm font-semibold h-10 px-[15px] py-[9px] mr-[10px] w-full"
                                    placeholder="Tìm kiếm"
                                    title="Tìm kiếm"
                                />
                                <button className="searchbutton flex items-center justify-center flex-none w-10 h-10 border border-[#111] transition-all hover:bg-[#338dcc] hover:border-transparent hover:text-white">
                                    <em className="far fa-search"></em>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Overlay for mobile menu and search */}
            {(mobileMenuOpen || searchOpen) && (
                <div
                    id="overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => {
                        setMobileMenuOpen(false);
                        setSearchOpen(false);
                    }}
                ></div>
            )}

            {/* Add margin to push content below fixed header */}
            <style jsx global>{`
                :root {
                    --header-height: 60px;
                }
                @media (min-width: 576px) {
                    :root {
                        --header-height: 70px;
                    }
                }
                @media (min-width: 1024px) {
                    :root {
                        --header-height: 80px;
                    }
                }
                main {
                    padding-top: var(--header-height);
                }
            `}</style>
        </>
    );
};

export default Header;
