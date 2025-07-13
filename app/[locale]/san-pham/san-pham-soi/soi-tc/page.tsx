import { Metadata } from 'next';
import SoiTCClient from './client';

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
            title: 'Sợi TC - Sản phẩm sợi Dệt may Minh Minh Tâm',
            description:
                'Sản phẩm sợi TC chất lượng cao của Dệt may Minh Minh Tâm, lý tưởng cho các sản phẩm dệt may, với tỷ lệ polyester/cotton tối ưu và độ bền cao.',
            keywords:
                'sợi TC, polyester cotton, sợi dệt, sản xuất vải, Minh Minh Tâm, chất lượng cao',
            openGraph: {
                title: 'Sợi TC - Sản phẩm sợi Dệt may Minh Minh Tâm',
                description:
                    'Sản phẩm sợi TC chất lượng cao của Dệt may Minh Minh Tâm, lý tưởng cho các sản phẩm dệt may, với tỷ lệ polyester/cotton tối ưu và độ bền cao.',
                images: ['/images/san-pham/san-pham-soi/soi-tc.png'],
            },
        },
        ja: {
            title: 'TC糸 - ミン ミン タム紡織の糸製品',
            description:
                'ミン ミン タム紡織の高品質TC糸は、最適なポリエステルとコットンの比率を持ち、高い耐久性を提供します。繊維製品に最適です。',
            keywords:
                'TC糸, ポリエステルコットン, 紡績糸, 布地製造, ミン ミン タム, 高品質',
            openGraph: {
                title: 'TC糸 - ミン ミン タム紡織の糸製品',
                description:
                    'ミン ミン タム紡織の高品質TC糸は、最適なポリエステルとコットンの比率を持ち、高い耐久性を提供します。繊維製品に最適です。',
                images: ['/images/san-pham/san-pham-soi/soi-tc.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function SoiTCPage() {
    return <SoiTCClient />;
}
