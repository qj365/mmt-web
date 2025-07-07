import { Metadata } from 'next';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BreadcrumbItem } from '@/app/types/';

export const metadata: Metadata = {
    title: 'Cơ cấu tổ chức - Dệt may Minh Minh Tâm',
    description:
        'Cơ cấu tổ chức Công ty TNHH May Minh Minh Tâm (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
    openGraph: {
        title: 'Cơ cấu tổ chức',
        description:
            'Cơ cấu tổ chức Công ty TNHH May Minh Minh Tâm (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
        siteName: 'Dệt may Minh Minh Tâm',
    },
};

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
