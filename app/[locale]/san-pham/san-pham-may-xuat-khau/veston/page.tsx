import { Metadata } from 'next';
import VestonClient from './client';

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
            title: 'Veston - Sản phẩm may xuất khẩu Minh Minh Tâm',
            description:
                'Bộ sưu tập veston cao cấp xuất khẩu từ Dệt may Minh Minh Tâm. Sản phẩm được thiết kế tinh tế, may đo tỉ mỉ với chất liệu cao cấp đáp ứng tiêu chuẩn quốc tế.',
            keywords:
                'veston, áo vest, suit, bộ comple, may đo, xuất khẩu, Minh Minh Tâm',
            openGraph: {
                title: 'Veston - Sản phẩm may xuất khẩu Minh Minh Tâm',
                description:
                    'Bộ sưu tập veston cao cấp xuất khẩu từ Dệt may Minh Minh Tâm. Sản phẩm được thiết kế tinh tế, may đo tỉ mỉ với chất liệu cao cấp đáp ứng tiêu chuẩn quốc tế.',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/veston/image-1.png',
                ],
            },
        },
        ja: {
            title: 'スーツ - ミン ミン タム紡織の輸出縫製製品',
            description:
                'ミン ミン タム紡織の高級輸出スーツコレクション。国際基準を満たす高品質素材を使用し、精巧にデザインされ丁寧に縫製された製品です。',
            keywords:
                'スーツ, ジャケット, ベスト, テーラード, 輸出, ミン ミン タム',
            openGraph: {
                title: 'スーツ - ミン ミン タム紡織の輸出縫製製品',
                description:
                    'ミン ミン タム紡織の高級輸出スーツコレクション。国際基準を満たす高品質素材を使用し、精巧にデザインされ丁寧に縫製された製品です。',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/veston/image-1.png',
                ],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function VestonPage() {
    return <VestonClient />;
}
