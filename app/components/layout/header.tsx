'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Link } from '../../i18n/navigation';
import { usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';
import { useLanguageSwitcher } from '../../i18n/client';
import { localeLabels, locales } from '../../i18n/settings';
import { useTranslations } from 'next-intl';

interface NavMenuItem {
    title: string;
    href: string;
    children?: NavMenuItem[];
    isHome?: boolean;
}

// Base navigation structure using pathnames mapping
const getNavItems = (t: (key: string) => string): NavMenuItem[] => {
    return [
        { title: t('home'), href: '/', isHome: true },
        {
            title: t('about'),
            href: '/gioi-thieu/tong-quan',
            children: [
                { title: t('overview'), href: '/gioi-thieu/tong-quan' },
                { title: t('history'), href: '/gioi-thieu/lich-su-hinh-thanh' },
                { title: t('structure'), href: '/gioi-thieu/co-cau-to-chuc' },
                { title: t('vision'), href: '/gioi-thieu/tam-nhin-su-menh' },
                { title: t('commitment'), href: '/gioi-thieu/loi-cam-ket' },
                { title: t('achievements'), href: '/gioi-thieu/thanh-tich' },
            ],
        },
        { title: t('export_markets'), href: '/thi-truong-xuat-khau' },
        {
            title: t('products'),
            href: '/san-pham/san-pham-soi',
            children: [
                { title: t('yarn_products'), href: '/san-pham/san-pham-soi' },
                {
                    title: t('garment_products'),
                    href: '/san-pham/san-pham-may-xuat-khau',
                },
            ],
        },
        {
            title: t('factories'),
            href: '/nha-may-thuong-hieu',
        },
        {
            title: t('news'),
            href: '/tin-tuc',
        },
        { title: t('careers'), href: '/tuyen-dung' },
        { title: t('contact'), href: '/lien-he' },
    ];
};

const NavLink = ({
    item,
    isMobile = false,
}: {
    item: NavMenuItem;
    isMobile?: boolean;
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Check if the current path matches this nav item or its children
    const isActive =
        pathname === item.href ||
        (item.children?.some(child => pathname === child.href) ?? false);

    // Check if active style should be applied to children items
    const isChildActive = (childHref: string) => pathname === childHref;

    if (!item.children) {
        // Special handling for home link
        if (item.isHome) {
            if (isMobile) {
                // Text version for mobile
                return (
                    <Link
                        href={item.href}
                        title={item.title}
                        className={`inline-block rounded-[50px] px-[15px] py-1 ${
                            isActive
                                ? isMobile
                                    ? 'bg-white text-secondary'
                                    : 'bg-secondary text-white'
                                : 'text-[#111111] hover:bg-secondary hover:text-white'
                        } ${
                            isMobile ? 'text-[18px]' : 'text-base'
                        } font-medium leading-6 whitespace-nowrap`}
                    >
                        {item.title}
                    </Link>
                );
            } else {
                // Icon version for desktop - kept in desktop nav section
                return null;
            }
        }

        return (
            <Link
                href={item.href}
                title={item.title}
                className={`inline-block rounded-[50px] px-[15px] py-1 ${
                    isActive
                        ? isMobile
                            ? 'bg-white text-secondary'
                            : 'bg-secondary text-white'
                        : 'text-[#111111] hover:bg-secondary hover:text-white'
                } ${
                    isMobile ? 'text-[18px]' : 'text-base'
                } font-medium leading-6 whitespace-nowrap`}
            >
                {item.title}
            </Link>
        );
    }

    return (
        <div className="has-child relative w-full whitespace-nowrap group">
            <div className="parent flex justify-between">
                <Link
                    href={item.href}
                    title={item.title}
                    className={`inline-block rounded-[50px] px-[15px] py-1 ${
                        isActive
                            ? isMobile
                                ? 'bg-white text-secondary'
                                : 'bg-secondary text-white'
                            : 'text-[#111111] hover:bg-secondary hover:text-white'
                    } ${
                        isMobile ? 'text-[18px]' : 'text-base'
                    } font-medium leading-6 whitespace-nowrap`}
                >
                    {item.title}
                </Link>
                <button
                    type="button"
                    className="flex items-center justify-center w-10 flex-none xl:hidden"
                    onClick={() => isMobile && setIsOpen(!isOpen)}
                    aria-label={isOpen ? 'Close submenu' : 'Open submenu'}
                >
                    <i
                        className="fal fa-angle-down xl:!hidden text-[1.875rem]"
                        style={{
                            transform: isOpen
                                ? 'rotate(180deg)'
                                : 'rotate(0deg)',
                            transition:
                                'transform 0.4s cubic-bezier(0.45, 0, 0.55, 1)',
                        }}
                    ></i>
                </button>
            </div>
            <div
                className={`child ${
                    isMobile
                        ? 'overflow-hidden transition-all duration-500 ease-in-out'
                        : 'xl:absolute xl:min-w-[230px] xl:bg-white xl:left-[-20px] xl:top-[calc(100%+10px)] xl:shadow-[2px_4px_12px_rgba(0,0,0,0.1)] xl:transition-all xl:duration-300 xl:ease-in-out xl:py-[10px] xl:px-0 xl:opacity-0 xl:pointer-events-none xl:translate-y-[-10px] group-hover:xl:opacity-100 group-hover:xl:pointer-events-auto group-hover:xl:translate-y-0'
                }`}
                style={
                    isMobile
                        ? {
                              maxHeight: isOpen ? '500px' : '0px',
                              opacity: isOpen ? 1 : 0,
                              transform: isOpen
                                  ? 'translateY(0)'
                                  : 'translateY(-10px)',
                              transition:
                                  'all 0.4s cubic-bezier(0.45, 0, 0.55, 1)',
                          }
                        : undefined
                }
            >
                <ul className="list-none p-0 flex flex-col ul-child xl:items-start items-center">
                    {item.children.map((child, index) => (
                        <li key={index} className="xl:font-normal w-full">
                            <Link
                                href={child.href}
                                title={child.title}
                                className={`block py-2 px-5 ${
                                    isChildActive(child.href)
                                        ? isMobile
                                            ? 'bg-white text-secondary'
                                            : 'bg-secondary text-white'
                                        : 'hover:bg-secondary hover:text-white'
                                } ${
                                    isMobile
                                        ? isChildActive(child.href)
                                            ? 'text-[16px] font-normal'
                                            : 'text-[16px] font-normal'
                                        : isChildActive(child.href)
                                        ? 'text-base text-white'
                                        : 'text-base xl:text-inherit'
                                }`}
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
    const { switchLanguage } = useLanguageSwitcher();
    const params = useParams();
    const currentLocale = (params.locale || 'vi') as string;
    const t = useTranslations('menu');

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

    // Add effect to control body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen || searchOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen, searchOpen]);

    return (
        <>
            <header
                className={`bg-white border-b border-[#e5e5e5] fixed w-full left-1/2 -translate-x-1/2 top-0 z-[1000] h-[60px] sm:h-[70px] lg:h-[80px] transition-all duration-300 ${
                    mobileMenuOpen ? 'navMobileOpen' : ''
                } ${isScrollingDown ? '-translate-y-full' : 'translate-y-0'}`}
            >
                <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px] h-full">
                    <div className="header-wrapper flex items-center relative w-full h-full xl:justify-between justify-between">
                        <div
                            className={`burger xl:hidden relative ${
                                mobileMenuOpen ? 'active' : ''
                            } before:content-[""] before:absolute before:w-10 before:h-10 before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2`}
                            onClick={toggleMobileMenu}
                        >
                            <div
                                className={`line-1 bg-[#338dcc] h-[3px] w-[22px] my-1 mx-0 transition-all duration-500 ${
                                    mobileMenuOpen
                                        ? 'transform -rotate-45 translate-x-[-7px] translate-y-[7px]'
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
                                        ? 'transform rotate-45 translate-x-[-7px] translate-y-[-7px]'
                                        : ''
                                }`}
                            ></div>
                        </div>

                        <div className="logo xl:static xl:translate-x-0 xl:mr-8 flex items-center justify-center h-full xl:w-[180px]">
                            <Link
                                href="/"
                                className="flex items-center justify-center h-full w-full relative"
                            >
                                <Image
                                    src="/images/home/logo.png"
                                    alt="Dệt may MINH MINH TÂM"
                                    width={150}
                                    height={80}
                                    className="w-full h-full object-contain py-[5px] relative z-[1] xl:translate-y-5"
                                    priority
                                />
                                <span className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-[90px] w-[160px] h-[160px] z-0 transition-all duration-300 after:content-['']"></span>
                            </Link>
                        </div>

                        <div className="nav-desktop xl:block hidden">
                            <nav className="flex items-center">
                                <Link
                                    href="/"
                                    className="bg-secondary rounded-[16px] w-8 h-8 flex items-center justify-center mr-[4px]"
                                >
                                    <Image
                                        src="/images/home/menu-icon.svg"
                                        alt="Trang chủ"
                                        width={18}
                                        height={14}
                                        className="text-white"
                                    />
                                </Link>
                                <ul className="list-none p-0 flex ul-parent xl:flex-row flex-col items-center xl:gap-1 xl:flex-nowrap overflow-visible">
                                    {getNavItems(t)
                                        .filter(item => !item.isHome)
                                        .map((item, index) => (
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

                        <div className="tool-items flex items-center">
                            <div className="language">
                                <div className="language-list">
                                    <ul className="list-none p-0 flex items-center">
                                        {locales.map(locale => (
                                            <li
                                                key={locale}
                                                className={`text-sm font-normal uppercase ${
                                                    locale !== 'vi'
                                                        ? 'border-l border-[#e5e5e5] ml-[11px] pl-[11px]'
                                                        : ''
                                                } ${
                                                    currentLocale === locale
                                                        ? 'active'
                                                        : ''
                                                }`}
                                            >
                                                <button
                                                    onClick={() =>
                                                        switchLanguage(locale)
                                                    }
                                                    className={`
                                                        cursor-pointer ${
                                                            currentLocale ===
                                                            locale
                                                                ? 'text-[#ea222d]'
                                                                : 'text-[#999] hover:text-[#338dcc]'
                                                        }`}
                                                >
                                                    {localeLabels[locale]}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
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
                    <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                        <div className="mobile-nav">
                            <ul className="list-none p-0 flex flex-col items-center max-w-full mx-auto sm:max-w-[320px]">
                                {getNavItems(t).map((item, index) => (
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
                    <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
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
