import { Metadata } from 'next';
import BaoHoLaoDongClient from './client';

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
            title: 'Đồ bảo hộ lao động - Sản phẩm may xuất khẩu Minh Minh Tâm',
            description:
                'Bộ sưu tập đồ bảo hộ lao động xuất khẩu từ Dệt may Minh Minh Tâm. Sản phẩm đạt chuẩn an toàn quốc tế, chất liệu bền bỉ, thiết kế thoải mái cho người lao động.',
            keywords:
                'bảo hộ lao động, đồ bảo hộ, workwear, safety wear, xuất khẩu, Minh Minh Tâm',
            openGraph: {
                title: 'Đồ bảo hộ lao động - Sản phẩm may xuất khẩu Minh Minh Tâm',
                description:
                    'Bộ sưu tập đồ bảo hộ lao động xuất khẩu từ Dệt may Minh Minh Tâm. Sản phẩm đạt chuẩn an toàn quốc tế, chất liệu bền bỉ, thiết kế thoải mái cho người lao động.',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong/bao-ho-lao-dong-1.jpg',
                ],
            },
        },
        ja: {
            title: '作業服 - ミン ミン タム紡織の輸出縫製製品',
            description:
                'ミン ミン タム紡織の輸出作業服コレクション。国際安全基準を満たし、耐久性のある素材で作られた快適なデザインの製品です。',
            keywords: '作業服, 安全服, 労働保護服, 輸出, ミン ミン タム',
            openGraph: {
                title: '作業服 - ミン ミン タム紡織の輸出縫製製品',
                description:
                    'ミン ミン タム紡織の輸出作業服コレクション。国際安全基準を満たし、耐久性のある素材で作られた快適なデザインの製品です。',
                images: [
                    '/images/san-pham/san-pham-may-xuat-khau/bao-ho-lao-dong/bao-ho-lao-dong-1.jpg',
                ],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function BaoHoLaoDongPage() {
    return <BaoHoLaoDongClient />;
}
