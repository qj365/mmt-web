import { MetadataRoute } from 'next';
import { locales } from './i18n/settings';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Define routes for Vietnamese locale
    const routesVi = [
        '',
        '/gioi-thieu',
        '/gioi-thieu/tong-quan',
        '/gioi-thieu/lich-su-hinh-thanh',
        '/gioi-thieu/tam-nhin-su-menh',
        '/gioi-thieu/loi-cam-ket',
        '/gioi-thieu/co-cau-to-chuc',
        '/gioi-thieu/thanh-tich',
        '/lien-he',
        '/tuyen-dung',
        '/tuyen-dung/[slug]',
        '/tin-tuc',
        '/tin-tuc/[slug]',
        '/nha-may-thuong-hieu',
        '/thi-truong-xuat-khau',
        '/san-pham',
        '/san-pham/san-pham-may-xuat-khau',
        '/san-pham/san-pham-may-xuat-khau/veston',
        '/san-pham/san-pham-may-xuat-khau/quan-tay',
        '/san-pham/san-pham-may-xuat-khau/det-kim',
        '/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong',
        '/san-pham/san-pham-may-xuat-khau/ao-khoac',
        '/san-pham/san-pham-soi',
        '/san-pham/san-pham-soi/soi-cvc',
        '/san-pham/san-pham-soi/soi-cd',
        '/san-pham/san-pham-soi/soi-xe-cac-loai',
        '/san-pham/san-pham-soi/soi-tc',
    ];

    // Define routes for Japanese locale
    const routesJa = [
        '',
        '/about',
        '/about/overview',
        '/about/history',
        '/about/vision-mission',
        '/about/commitment',
        '/about/organization',
        '/about/achievements',
        '/contact',
        '/careers',
        '/careers/[slug]',
        '/news',
        '/news/[slug]',
        '/factory-brands',
        '/export-markets',
        '/products',
        '/products/export-garments',
        '/products/export-garments/suits',
        '/products/export-garments/trousers',
        '/products/export-garments/knitwear',
        '/products/export-garments/workwear',
        '/products/export-garments/jackets',
        '/products/yarn',
        '/products/yarn/cvc-yarn',
        '/products/yarn/cd-yarn',
        '/products/yarn/various-yarn',
        '/products/yarn/tc-yarn',
    ];

    // Generate sitemap entries for all locale-route combinations
    const sitemapEntries: MetadataRoute.Sitemap = [];

    locales.forEach(locale => {
        // Use appropriate routes array for each locale
        const routes = locale === 'vi' ? routesVi : routesJa;

        routes.forEach(route => {
            // For default locale (vi), don't include locale prefix
            const path = locale === 'vi' ? route : `/${locale}${route}`;

            sitemapEntries.push({
                url: `${baseUrl}${path}`,
                lastModified: new Date(),
                changeFrequency: route === '' ? 'daily' : 'weekly',
                priority: route === '' ? 1 : 0.8,
            });
        });
    });

    return sitemapEntries;
}
