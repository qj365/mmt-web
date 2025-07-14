import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/api/', // Protect API routes
                '/admin/', // Protect admin routes if any
                '/_next/', // Protect Next.js system files
                '/private/', // Protect private content if any
            ],
        },
        sitemap: 'https://detmayminhmintam.com/sitemap.xml',
        host: 'https://detmayminhmintam.com',
    };
}
