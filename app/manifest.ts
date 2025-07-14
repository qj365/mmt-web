import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Dệt may Minh Minh Tâm',
        short_name: 'MMT',
        description:
            'Dệt may Minh Minh Tâm - Nhà sản xuất và xuất khẩu hàng dệt may chất lượng cao từ Việt Nam',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#C12127',
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
    };
}
