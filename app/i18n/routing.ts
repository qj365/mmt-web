import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale } from './settings';

export const routing = defineRouting({
    locales,
    defaultLocale,
    pathnames: {
        // Home page
        '/': {
            vi: '/',
            ja: '/',
        },

        // About section
        '/gioi-thieu': {
            vi: '/gioi-thieu',
            ja: '/about',
        },
        '/gioi-thieu/tong-quan': {
            vi: '/gioi-thieu/tong-quan',
            ja: '/about/overview',
        },
        '/gioi-thieu/lich-su-hinh-thanh': {
            vi: '/gioi-thieu/lich-su-hinh-thanh',
            ja: '/about/history',
        },
        '/gioi-thieu/tam-nhin-su-menh': {
            vi: '/gioi-thieu/tam-nhin-su-menh',
            ja: '/about/vision-mission',
        },
        '/gioi-thieu/loi-cam-ket': {
            vi: '/gioi-thieu/loi-cam-ket',
            ja: '/about/commitment',
        },
        '/gioi-thieu/co-cau-to-chuc': {
            vi: '/gioi-thieu/co-cau-to-chuc',
            ja: '/about/organization',
        },
        '/gioi-thieu/thanh-tich': {
            vi: '/gioi-thieu/thanh-tich',
            ja: '/about/achievements',
        },

        // Contact
        '/lien-he': {
            vi: '/lien-he',
            ja: '/contact',
        },

        // Recruitment
        '/tuyen-dung': {
            vi: '/tuyen-dung',
            ja: '/careers',
        },
        '/tuyen-dung/[slug]': {
            vi: '/tuyen-dung/[slug]',
            ja: '/careers/[slug]',
        },

        // News
        '/tin-tuc': {
            vi: '/tin-tuc',
            ja: '/news',
        },
        '/tin-tuc/[slug]': {
            vi: '/tin-tuc/[slug]',
            ja: '/news/[slug]',
        },

        // Factory & Brands
        '/nha-may-thuong-hieu': {
            vi: '/nha-may-thuong-hieu',
            ja: '/factory-brands',
        },

        // Export Markets
        '/thi-truong-xuat-khau': {
            vi: '/thi-truong-xuat-khau',
            ja: '/export-markets',
        },

        // Products
        '/san-pham': {
            vi: '/san-pham',
            ja: '/products',
        },
        '/san-pham/san-pham-may-xuat-khau': {
            vi: '/san-pham/san-pham-may-xuat-khau',
            ja: '/products/export-garments',
        },
        '/san-pham/san-pham-may-xuat-khau/veston': {
            vi: '/san-pham/san-pham-may-xuat-khau/veston',
            ja: '/products/export-garments/suits',
        },
        '/san-pham/san-pham-may-xuat-khau/quan-tay': {
            vi: '/san-pham/san-pham-may-xuat-khau/quan-tay',
            ja: '/products/export-garments/trousers',
        },
        '/san-pham/san-pham-may-xuat-khau/det-kim': {
            vi: '/san-pham/san-pham-may-xuat-khau/det-kim',
            ja: '/products/export-garments/knitwear',
        },
        '/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong': {
            vi: '/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong',
            ja: '/products/export-garments/workwear',
        },
        '/san-pham/san-pham-may-xuat-khau/ao-khoac': {
            vi: '/san-pham/san-pham-may-xuat-khau/ao-khoac',
            ja: '/products/export-garments/jackets',
        },
        '/san-pham/san-pham-soi': {
            vi: '/san-pham/san-pham-soi',
            ja: '/products/yarn',
        },
        '/san-pham/san-pham-soi/soi-cvc': {
            vi: '/san-pham/san-pham-soi/soi-cvc',
            ja: '/products/yarn/cvc-yarn',
        },
        '/san-pham/san-pham-soi/soi-cd': {
            vi: '/san-pham/san-pham-soi/soi-cd',
            ja: '/products/yarn/cd-yarn',
        },
        '/san-pham/san-pham-soi/soi-xe-cac-loai': {
            vi: '/san-pham/san-pham-soi/soi-xe-cac-loai',
            ja: '/products/yarn/various-yarn',
        },
        '/san-pham/san-pham-soi/soi-tc': {
            vi: '/san-pham/san-pham-soi/soi-tc',
            ja: '/products/yarn/tc-yarn',
        },
    },
});
