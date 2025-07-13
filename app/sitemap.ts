import { MetadataRoute } from 'next';
import { locales } from './i18n/settings';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

    // Base routes available in all locales
    const routes = [
        '',
        '/gioi-thieu/tong-quan',
        '/gioi-thieu/lich-su-hinh-thanh',
        '/gioi-thieu/tam-nhin-su-menh',
        '/gioi-thieu/co-cau-to-chuc',
        '/gioi-thieu/loi-cam-ket',
        '/gioi-thieu/thanh-tich',
        '/san-pham/san-pham-soi',
        '/san-pham/san-pham-may-xuat-khau',
        '/nha-may-thuong-hieu',
        '/thi-truong-xuat-khau',
        '/tin-tuc',
        '/tuyen-dung',
        '/lien-he',
    ];

    // Generate sitemap entries for all routes in all locales
    const sitemap = locales.flatMap(locale => {
        return routes.map(route => {
            const path = locale === 'vi' ? route : `/${locale}${route}`;
            return {
                url: `${baseUrl}${path}`,
                lastModified: new Date(),
                changeFrequency: 'weekly' as const,
                priority: route === '' ? 1.0 : 0.8,
            };
        });
    });

    return sitemap;
}
