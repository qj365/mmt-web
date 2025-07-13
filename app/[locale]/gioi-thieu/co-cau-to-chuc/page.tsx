import { Metadata } from 'next';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { BreadcrumbItem } from '@/app/types/';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    // Await params first to access the locale property
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: 'gioi-thieu.co-cau-to-chuc',
    });

    return {
        title: `${t('title')} - Minh Minh Tâm`,
        description: t('meta_description'),
        openGraph: {
            title: t('title'),
            description: t('meta_description'),
            siteName: 'Dệt may Minh Minh Tâm',
        },
    };
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
