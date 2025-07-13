import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./app/i18n/request.ts');

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '3000',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'mmt-cms.vercel.app',
                port: '',
                pathname: '/**',
            },
        ],
        // Improved image quality settings for SEO
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60 * 60 * 24 * 7, // 7 days
    },
    // Enable output compression for better performance
    compress: true,
    // Configure output for better performance
    output: 'standalone',
    // Enable static exports for pages that don't require server-side rendering
    staticPageGenerationTimeout: 90,
    // Improve SEO with proper asset prefixing if deploying to a CDN
    assetPrefix: process.env.NEXT_PUBLIC_ASSET_PREFIX,
    // Configure headers for security and performance
    headers: async () => [
        {
            source: '/(.*)',
            headers: [
                {
                    key: 'X-Content-Type-Options',
                    value: 'nosniff',
                },
                {
                    key: 'X-Frame-Options',
                    value: 'DENY',
                },
                {
                    key: 'X-XSS-Protection',
                    value: '1; mode=block',
                },
            ],
        },
        {
            source: '/images/(.*)',
            headers: [
                {
                    key: 'Cache-Control',
                    value: 'public, max-age=31536000, immutable',
                },
            ],
        },
    ],
};

export default withNextIntl(nextConfig);
