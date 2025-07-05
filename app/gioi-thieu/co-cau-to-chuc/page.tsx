import { Metadata } from 'next';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import Image from 'next/image';

export const metadata: Metadata = {
    title: 'Cơ cấu tổ chức - Dệt may MINH MINH TÂM',
    description:
        'Cơ cấu tổ chức Tổng Công ty CP Dệt May MINH MINH TÂM (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
    openGraph: {
        title: 'Cơ cấu tổ chức',
        description:
            'Cơ cấu tổ chức Tổng Công ty CP Dệt May MINH MINH TÂM (TP Bình Thuận, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
        siteName: 'Dệt may MINH MINH TÂM',
    },
};

export default function OrganizationalStructure() {
    const breadcrumbItems = [
        { label: 'Giới thiệu', href: '/gioi-thieu' },
        { label: 'Cơ cấu tổ chức', href: '/gioi-thieu/co-cau-to-chuc' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/home/banner-1.png"
            bannerAlt="Banner Cơ cấu tổ chức"
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/home/background.png"
        >
            <PageTitle title="Cơ cấu tổ chức" />

            <Image
                src="/images/co-cau-to-chuc/image.png"
                alt="Cơ cấu tổ chức"
                width={1920}
                height={950}
                className="min-w-[768px]"
            />
        </ContentPageLayout>
    );
}
