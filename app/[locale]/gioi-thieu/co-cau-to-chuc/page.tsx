import { Metadata } from 'next';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BreadcrumbItem } from '@/app/types/';

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
            title: 'Cơ cấu tổ chức - Dệt may Minh Minh Tâm',
            description:
                'Tìm hiểu về cơ cấu tổ chức và bộ máy quản lý của Công ty TNHH May Minh Minh Tâm - thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
            keywords:
                'cơ cấu tổ chức, bộ máy quản lý, sơ đồ tổ chức, Minh Minh Tâm, doanh nghiệp dệt may',
            openGraph: {
                title: 'Cơ cấu tổ chức - Dệt may Minh Minh Tâm',
                description:
                    'Tìm hiểu về cơ cấu tổ chức và bộ máy quản lý của Công ty TNHH May Minh Minh Tâm - thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
                images: ['/images/gioi-thieu/co-cau-to-chuc/image.png'],
            },
        },
        ja: {
            title: '組織体制 - ミン ミン タム紡織',
            description:
                'Vinatexのメンバーであり、糸と輸出衣料品の製造・販売を専門とするミン ミン タム縫製有限会社の組織体制と管理構造について。',
            keywords: '組織体制, 管理構造, 組織図, ミン ミン タム, 繊維企業',
            openGraph: {
                title: '組織体制 - ミン ミン タム紡織',
                description:
                    'Vinatexのメンバーであり、糸と輸出衣料品の製造・販売を専門とするミン ミン タム縫製有限会社の組織体制と管理構造について。',
                images: ['/images/gioi-thieu/co-cau-to-chuc/image.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function OrganizationalStructure() {
    const t = useTranslations('gioi-thieu.co-cau-to-chuc');
    const breadcrumbT = useTranslations('menu');

    const breadcrumbItems: BreadcrumbItem[] = [
        { label: breadcrumbT('about'), href: '/gioi-thieu/tong-quan' },
        { label: breadcrumbT('structure'), href: '/gioi-thieu/co-cau-to-chuc' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/home/banner-1.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/home/background.png"
        >
            <PageTitle title={breadcrumbT('structure')} />

            <Image
                src="/images/gioi-thieu/co-cau-to-chuc/image.png"
                alt={t('image_alt')}
                width={1920}
                height={950}
                className="w-full h-auto"
            />
        </ContentPageLayout>
    );
}
