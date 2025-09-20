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
        sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
        host: process.env.NEXT_PUBLIC_BASE_URL,
    };
}
