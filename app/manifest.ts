import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dệt may Minh Minh Tâm',
        short_name: 'Minh Minh Tâm',
        description:
            'Công ty TNHH May Minh Minh Tâm - Chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#338dcc',
        icons: [
            {
                src: '/images/home/logo.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                src: '/images/home/logo.png',
                sizes: '512x512',
                type: 'image/png',
            },
        ],
        related_applications: [
            {
                platform: 'web',
                url: 'https://example.com',
            },
        ],
        prefer_related_applications: false,
        shortcuts: [
            {
                name: 'Sản phẩm',
                description: 'Xem các sản phẩm của Minh Minh Tâm',
                url: '/san-pham',
            },
            {
                name: 'Liên hệ',
                description: 'Liên hệ với Minh Minh Tâm',
                url: '/lien-he',
            },
        ],
    };
}
