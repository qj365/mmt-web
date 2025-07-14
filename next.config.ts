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
    },
    // Add server-side redirects for common patterns
    redirects: async () => {
        return [
            {
                source: '/home',
                destination: '/',
                permanent: true,
            },
            {
                source: '/about',
                destination: '/gioi-thieu/tong-quan',
                permanent: true,
            },
            {
                source: '/contact',
                destination: '/lien-he',
                permanent: true,
            },
        ];
    },
    // Prefer onDemandEntries for development performance
    onDemandEntries: {
        // period (in ms) where the server will keep pages in the buffer
        maxInactiveAge: 25 * 1000,
        // number of pages that should be kept simultaneously without being disposed
        pagesBufferLength: 5,
    },
};

export default withNextIntl(nextConfig);
