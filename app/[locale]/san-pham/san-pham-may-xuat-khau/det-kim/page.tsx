import { Metadata } from 'next';
import DetKimClient from './client';

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
            title: 'Sản phẩm dệt kim xuất khẩu - Dệt may Minh Minh Tâm',
            description:
                'Bộ sưu tập sản phẩm dệt kim xuất khẩu từ Dệt may Minh Minh Tâm. Đa dạng mẫu mã, chất liệu cao cấp, đáp ứng tiêu chuẩn quốc tế.',
            keywords:
                'dệt kim, knitwear, áo len, áo thun, đồ dệt kim, xuất khẩu, Minh Minh Tâm',
            openGraph: {
                title: 'Sản phẩm dệt kim xuất khẩu - Dệt may Minh Minh Tâm',
                description:
                    'Bộ sưu tập sản phẩm dệt kim xuất khẩu từ Dệt may Minh Minh Tâm. Đa dạng mẫu mã, chất liệu cao cấp, đáp ứng tiêu chuẩn quốc tế.',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/det-kim/det-kim-1.jpg',
                ],
            },
        },
        ja: {
            title: 'ニット製品輸出 - ミン ミン タム紡織',
            description:
                'ミン ミン タム紡織の高品質なニット製品輸出コレクション。多様なデザイン、高級素材を使用し、国際基準を満たしています。',
            keywords:
                'ニット製品, ニット, セーター, Tシャツ, 輸出, ミン ミン タム',
            openGraph: {
                title: 'ニット製品輸出 - ミン ミン タム紡織',
                description:
                    'ミン ミン タム紡織の高品質なニット製品輸出コレクション。多様なデザイン、高級素材を使用し、国際基準を満たしています。',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/det-kim/det-kim-1.jpg',
                ],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function DetKimPage() {
    return <DetKimClient />;
}
