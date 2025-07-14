import { MetadataRoute } from 'next';
import { locales } from './i18n/settings';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

    // Define your site's common routes
    const routes = [
        '',
        '/gioi-thieu/tong-quan',
        '/gioi-thieu/lich-su-hinh-thanh',
        '/gioi-thieu/tam-nhin-su-menh',
        '/gioi-thieu/loi-cam-ket',
        '/gioi-thieu/co-cau-to-chuc',
        '/gioi-thieu/thanh-tich',
        '/san-pham/san-pham-soi',
        '/san-pham/san-pham-soi/soi-cd',
        '/san-pham/san-pham-soi/soi-tc',
        '/san-pham/san-pham-soi/soi-cvc',
        '/san-pham/san-pham-soi/soi-xe-cac-loai',
        '/san-pham/san-pham-may-xuat-khau',
        '/san-pham/san-pham-may-xuat-khau/ao-khoac',
        '/san-pham/san-pham-may-xuat-khau/veston',
        '/san-pham/san-pham-may-xuat-khau/quan-tay',
        '/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong',
        '/san-pham/san-pham-may-xuat-khau/det-kim',
        '/thi-truong-xuat-khau',
        '/nha-may-thuong-hieu',
        '/tin-tuc',
        '/tuyen-dung',
        '/lien-he',
    ];

    // Generate sitemap entries for all locale-route combinations
    const sitemapEntries: MetadataRoute.Sitemap = [];

    locales.forEach(locale => {
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
