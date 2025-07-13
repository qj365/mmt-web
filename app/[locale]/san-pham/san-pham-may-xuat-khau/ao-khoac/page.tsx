import { Metadata } from 'next';
import AoKhoacClient from './client';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    // Get the locale from params
    const { locale } = await params;

    // Define metadata for different languages
    const metadata: Record<string, Metadata> = {
        vi: {
            title: 'Áo khoác xuất khẩu - Dệt may Minh Minh Tâm',
            description:
                'Bộ sưu tập áo khoác xuất khẩu chất lượng cao từ Dệt may Minh Minh Tâm. Đa dạng kiểu dáng, chất liệu bền đẹp, đáp ứng tiêu chuẩn quốc tế.',
            keywords:
                'áo khoác, áo jacket, áo ngoài, áo phông gió, xuất khẩu, Minh Minh Tâm',
            openGraph: {
                title: 'Áo khoác xuất khẩu - Dệt may Minh Minh Tâm',
                description:
                    'Bộ sưu tập áo khoác xuất khẩu chất lượng cao từ Dệt may Minh Minh Tâm. Đa dạng kiểu dáng, chất liệu bền đẹp, đáp ứng tiêu chuẩn quốc tế.',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/ao-khoac/ao-khoac-1.jpg',
                ],
            },
        },
        ja: {
            title: 'ジャケット輸出製品 - ミン ミン タム紡織',
            description:
                'ミン ミン タム紡織の高品質なジャケット輸出コレクション。多様なデザイン、耐久性のある素材を使用し、国際基準を満たしています。',
            keywords:
                'ジャケット, アウター, コート, ウインドブレーカー, 輸出, ミン ミン タム',
            openGraph: {
                title: 'ジャケット輸出製品 - ミン ミン タム紡織',
                description:
                    'ミン ミン タム紡織の高品質なジャケット輸出コレクション。多様なデザイン、耐久性のある素材を使用し、国際基準を満たしています。',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/ao-khoac/ao-khoac-1.jpg',
                ],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function AoKhoacPage() {
    return <AoKhoacClient />;
}
