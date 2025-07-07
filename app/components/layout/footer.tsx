'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Footer() {
    const params = useParams();
    const currentLocale = (params.locale || 'vi') as string;
    const t = useTranslations('footer');

    return (
        <footer className="text-white bg-[#338dcc]">
            <div className="footer-1 section xl:pb-16">
                <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                    <div className="top-title text-white text-xl leading-normal mb-7">
                        {t('contactInfo')}
                    </div>
                    <div className="flex flex-wrap gap-x-[30px] gap-y-[30px]">
                        <div className="item w-full sm:w-[calc(50%-15px)] lg:w-[calc(33.3333%-20px)]">
                            <div className="wrapper">
                                <div className="title text-lg uppercase leading-normal font-bold mb-6">
                                    {currentLocale === 'ja'
                                        ? 'ミン ミン タム縫製有限責任会社'
                                        : 'Công ty TNHH May Minh Minh Tâm'}
                                </div>
                                <div className="content">
                                    <p>
                                        {t('address')}: 36 Đ. Số 19B, Phường An
                                        Khánh, Thủ Đức, Hồ Chí Minh, Việt Nam
                                    </p>
                                    <br />
                                    <p>
                                        {t('email')}:{' '}
                                        <a href="mailto:minhminhtam.binhthuan@gmail.com">
                                            minhminhtam.binhthuan@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        {t('phone')}:{' '}
                                        <a href="tel:(+84) 252 672 5858">
                                            (+84) 252 672 5858
                                        </a>
                                    </p>
                                    <p>
                                        {t('fax')}:{' '}
                                        <a href="fax:(+84) 28 6272 5525">
                                            (+84) 28 6272 5525
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="item w-full sm:w-[calc(50%-15px)] lg:w-[calc(33.3333%-20px)]">
                            <div className="wrapper">
                                <div className="title text-lg uppercase leading-normal font-bold mb-6">
                                    {t('certification')}
                                </div>
                                <div className="image-wrapper grid grid-cols-5 gap-x-[15px]">
                                    <div className="flex justify-center relative w-16 h-16">
                                        <Image
                                            src="/images/footer/i-1.png"
                                            alt={t('certification')}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex justify-center relative">
                                        <Image
                                            src="/images/footer/i-2.png"
                                            alt={t('certification')}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="flex justify-center relative">
                                        <Image
                                            src="/images/footer/i-3.png"
                                            alt={t('certification')}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="title text-fs18px uppercase leading-normal font-bold mt-6">
                                    <Link href="" target="_blank">
                                        {t('downloadBrochure')}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item w-full lg:w-[calc(33.3333%-20px)]">
                            <div className="iframe !w-full h-[256px] rounded-[20px] overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d944.7519601883434!2d106.72944777790516!3d10.798034781972312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752604ae5036bd%3A0xf53ae4ee26f67df7!2zMzYgxJAuIFPhu5EgMTlCLCBQaMaw4budbmcgQW4gS2jDoW5oLCBUaOG7pyDEkOG7qWMsIEjhu5MgQ2jDrSBNaW5oLCBWaeG7h3QgTmFt!5e1!3m2!1svi!2s!4v1751769339570!5m2!1svi!2s"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-2 bg-[#56c1f9] py-4 sm:py-[22px]">
                <div className="max-w-[1260px] mx-auto px-4 sm:px-6 lg:px-[15px]">
                    <div className="title text-center text-xs sm:text-sm leading-4 font-normal">
                        © {new Date().getFullYear()} {t('copyright')}
                    </div>
                </div>
            </div>
        </footer>
    );
}
