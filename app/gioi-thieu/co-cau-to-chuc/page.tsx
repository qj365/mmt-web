import { Metadata } from 'next';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import ImageWithCaption from '@/app/components/shared/ImageWithCaption';

export const metadata: Metadata = {
    title: 'Cơ cấu tổ chức - Dệt may Hoà Thọ',
    description:
        'Cơ cấu tổ chức Tổng Công ty CP Dệt May Hòa Thọ (TP Đà Nẵng, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
    openGraph: {
        title: 'Cơ cấu tổ chức',
        description:
            'Cơ cấu tổ chức Tổng Công ty CP Dệt May Hòa Thọ (TP Đà Nẵng, Việt Nam) – thành viên Vinatex, chuyên sản xuất kinh doanh sợi và may mặc xuất khẩu.',
        siteName: 'Dệt may Hoà Thọ',
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

            <ImageWithCaption
                src="/images/co-cau-to-chuc/image.png"
                alt="Cơ cấu tổ chức"
                width={1920}
                height={950}
                minWidth="min-w-[768px]"
                linkToFullSize={true}
                caption="Nhấn vào hình để xem kích thước đầy đủ"
            />
        </ContentPageLayout>
    );
}
