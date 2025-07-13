import React from 'react';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import PageTitle from '@/components/shared/PageTitle';
import { BreadcrumbItem } from '@/app/types';
import { useTranslations } from 'next-intl';
import { Metadata } from 'next';

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
            title: 'Liên hệ - Dệt may Minh Minh Tâm',
            description:
                'Thông tin liên hệ Công ty TNHH May Minh Minh Tâm - địa chỉ, số điện thoại, email và bản đồ chỉ đường đến trụ sở chính và các nhà máy.',
            keywords:
                'liên hệ, địa chỉ công ty may, Minh Minh Tâm, số điện thoại, email, bản đồ',
            openGraph: {
                title: 'Liên hệ - Dệt may Minh Minh Tâm',
                description:
                    'Thông tin liên hệ Công ty TNHH May Minh Minh Tâm - địa chỉ, số điện thoại, email và bản đồ chỉ đường đến trụ sở chính và các nhà máy.',
                images: ['/images/lien-he/banner.png'],
            },
        },
        ja: {
            title: 'お問い合わせ - ミン ミン タム紡織',
            description:
                'ミン ミン タム縫製有限会社の連絡先情報 - 住所、電話番号、メールアドレス、および本社と工場への地図。',
            keywords:
                'お問い合わせ, 縫製会社の住所, ミン ミン タム, 電話番号, メール, 地図',
            openGraph: {
                title: 'お問い合わせ - ミン ミン タム紡織',
                description:
                    'ミン ミン タム縫製有限会社の連絡先情報 - 住所、電話番号、メールアドレス、および本社と工場への地図。',
                images: ['/images/lien-he/banner.png'],
            },
        },
    };

    // Return metadata for the current locale, or fall back to vi
    return metadata[locale] || metadata.vi;
}

export default function ContactPage() {
    // Get translations
    const t = useTranslations('contact');
    const menuT = useTranslations('menu');

    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: menuT('home'), href: '/' },
        { label: menuT('contact'), href: '/lien-he' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/lien-he/banner.png"
            bannerAlt={t('banner.alt')}
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/lien-he/bg.png"
            containerClassName="py-10"
        >
            <div className="contact-information">
                <PageTitle title={t('company_name')} />

                <div className="content-wrapper mt-8 bg-white shadow-lg rounded-[20px] p-8">
                    <div className="block mb-6">
                        <div className="ctn">
                            <p>{t('address')}</p>
                            <p>
                                {t('email_label')}{' '}
                                <a href="mailto:minhminhtam.binhthuan@gmail.com">
                                    minhminhtam.binhthuan@gmail.com
                                </a>
                            </p>
                            <p>
                                {t('phone_label')}{' '}
                                <a href="tel:(+84) 252 672 5858">
                                    (+84) 252 672 5858
                                </a>
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">
                        <div>
                            <div className="ctn">
                                <div className="title font-bold mb-4">
                                    <p>{t('department.title')}</p>
                                </div>
                                <p>
                                    <strong>
                                        {t('department.block1.name')}
                                    </strong>
                                    <br />
                                    {t('department.main_products')}
                                    <br />
                                    <span className="ml-4">
                                        - {t('department.block1.product1')}
                                    </span>
                                    <br />
                                    <span className="ml-4">
                                        - {t('department.block1.product2')}
                                    </span>
                                    <br />
                                    {t('email_label')}{' '}
                                    <a href="mailto:minhminhtam.binhthuan@gmail.com">
                                        minhminhtam.binhthuan@gmail.com
                                    </a>
                                    <br />
                                    {t('tel_label')}{' '}
                                    <a href="(+84) 252 672 5858">
                                        (+84) 252 672 5858
                                    </a>
                                    <br />
                                    {t('fax_label')} (+84) 28 6272 5525
                                    <br />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Google Map */}
                <div className="map mt-10 rounded-[20px] overflow-hidden h-[450px]">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.7519601883434!2d106.72944777790516!3d10.798034781972312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752604ae5036bd%3A0xf53ae4ee26f67df7!2zMzYgxJAuIFPhu5EgMTlCLCBQaMaw4budbmcgQW4gS2jDoW5oLCBUaOG7pyDEkOG7qWMsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1751769339570!5m2!1svi!2s"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title={t('map.title')}
                    ></iframe>
                </div>
            </div>
        </ContentPageLayout>
    );
}
