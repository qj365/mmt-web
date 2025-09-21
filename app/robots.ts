import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            disallow: '',
        },
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
        host: process.env.NEXT_PUBLIC_BASE_URL,
    };
}
