import { Metadata } from 'next';
import SoiCVCClient from './client';

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
            title: 'Sợi CVC - Sản phẩm sợi Dệt may Minh Minh Tâm',
            description:
                'Sản phẩm sợi CVC chất lượng cao của Dệt may Minh Minh Tâm, kết hợp bông, viscose và polyester cho độ mềm mại, thoáng khí và bền màu vượt trội.',
            keywords:
                'sợi CVC, cotton viscose, sợi dệt, chất liệu mềm mại, thoáng khí, Minh Minh Tâm',
            openGraph: {
                title: 'Sợi CVC - Sản phẩm sợi Dệt may Minh Minh Tâm',
                description:
                    'Sản phẩm sợi CVC chất lượng cao của Dệt may Minh Minh Tâm, kết hợp bông, viscose và polyester cho độ mềm mại, thoáng khí và bền màu vượt trội.',
                images: ['/images/san-pham/san-pham-soi/soi-cvc.png'],
            },
        },
        ja: {
            title: 'CVC糸 - ミン ミン タム紡織の糸製品',
            description:
                'ミン ミン タム紡織の高品質CVC糸は、コットン、ビスコース、ポリエステルを組み合わせ、優れた柔らかさ、通気性、色の持続性を提供します。',
            keywords:
                'CVC糸, コットンビスコース, 紡績糸, 柔らかい素材, 通気性, ミン ミン タム',
            openGraph: {
                title: 'CVC糸 - ミン ミン タム紡織の糸製品',
                description:
                    'ミン ミン タム紡織の高品質CVC糸は、コットン、ビスコース、ポリエステルを組み合わせ、優れた柔らかさ、通気性、色の持続性を提供します。',
                images: ['/images/san-pham/san-pham-soi/soi-cvc.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function SoiCVCPage() {
    return <SoiCVCClient />;
}
