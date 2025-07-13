import { Metadata } from 'next';
import QuanTayClient from './client';

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
            title: 'Quần tây xuất khẩu - Dệt may Minh Minh Tâm',
            description:
                'Bộ sưu tập quần tây xuất khẩu chất lượng cao từ Dệt may Minh Minh Tâm. Đa dạng mẫu mã, kiểu dáng hiện đại, chất liệu cao cấp đáp ứng tiêu chuẩn quốc tế.',
            keywords:
                'quần tây, quần âu, quần nam, quần xuất khẩu, trousers, slacks, Minh Minh Tâm',
            openGraph: {
                title: 'Quần tây xuất khẩu - Dệt may Minh Minh Tâm',
                description:
                    'Bộ sưu tập quần tây xuất khẩu chất lượng cao từ Dệt may Minh Minh Tâm. Đa dạng mẫu mã, kiểu dáng hiện đại, chất liệu cao cấp đáp ứng tiêu chuẩn quốc tế.',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/quan-tay/quan-tay-1.jpg',
                ],
            },
        },
        ja: {
            title: 'スラックス輸出 - ミン ミン タム紡織',
            description:
                'ミン ミン タム紡織の高品質なスラックス輸出コレクション。多様なデザイン、現代的なスタイル、国際基準を満たす高級素材を使用しています。',
            keywords:
                'スラックス, パンツ, 紳士ズボン, 輸出, トラウザー, ミン ミン タム',
            openGraph: {
                title: 'スラックス輸出 - ミン ミン タム紡織',
                description:
                    'ミン ミン タム紡織の高品質なスラックス輸出コレクション。多様なデザイン、現代的なスタイル、国際基準を満たす高級素材を使用しています。',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/quan-tay/quan-tay-1.jpg',
                ],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function QuanTayPage() {
    return <QuanTayClient />;
}
