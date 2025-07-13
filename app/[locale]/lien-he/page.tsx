import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import { BreadcrumbItem } from '@/app/types';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import JsonLd, { BreadcrumbJsonLd } from '@/app/components/shared/JsonLd';

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;

    const t = await getTranslations({
        locale,
        namespace: 'contact',
    });

    return {
        title: `${t('meta.title')} - Minh Minh Tâm`,
        description: t('meta.description'),
        alternates: {
            canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/lien-he`,
            languages: {
                vi: `${process.env.NEXT_PUBLIC_BASE_URL}/lien-he`,
                ja: `${process.env.NEXT_PUBLIC_BASE_URL}/ja/lien-he`,
            },
        },
    };
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

    // Convert breadcrumb items for JSON-LD
    const breadcrumbJsonLd = breadcrumbItems.map(item => ({
        name: item.label,
        url: `${process.env.NEXT_PUBLIC_BASE_URL}${item.href}`,
    }));

    return (
        <>
            <BreadcrumbJsonLd breadcrumbItems={breadcrumbJsonLd} />
            <JsonLd
                type="WebPage"
                data={{
                    name: t('meta.title'),
                    description: t('meta.description'),
                    url: `${process.env.NEXT_PUBLIC_BASE_URL}/lien-he`,
                }}
            />
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
                                        <a href="tel:(+84) 252 672 5858">
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
        </>
    );
}
