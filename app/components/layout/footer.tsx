'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="text-white bg-[#338dcc]">
            <div className="footer-1 section xl:pb-16">
                <div className="container">
                    <div className="top-title text-white text-xl leading-normal mb-7">
                        Thông tin liên hệ
                    </div>
                    <div className="flex flex-wrap gap-x-[30px] gap-y-[30px]">
                        <div className="item w-full sm:w-[calc(50%-15px)] lg:w-[calc(33.3333%-20px)]">
                            <div className="wrapper">
                                <div className="title text-lg uppercase leading-normal font-bold mb-6">
                                    Tổng Công ty Cổ phần Dệt may MINH MINH TÂM
                                </div>
                                <div className="content">
                                    <p>
                                        Địa chỉ: Khu phố 1, Thị trấn Tân Nghĩa, Quận Hàm Tân, Tỉnh Bình Thuận, Việt Nam
                                    </p>
                                    <br />
                                    <p>
                                        Email:{' '}
                                        <a href="mailto:minhminhtam.binhthuan@gmail.com">
                                            minhminhtam.binhthuan@gmail.com
                                        </a>
                                    </p>
                                    <p>
                                        Tel:{' '}
                                        <a href="tel:(+84) 252 672 5858">
                                            (+84) 252 672 5858
                                        </a>
                                    </p>
                                    <p>
                                        Fax:{' '}
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
                                    Chứng nhận
                                </div>
                                <div className="image-wrapper grid grid-cols-5 gap-x-[15px]">
                                    <div className="flex justify-center relative w-16 h-16">
                                        <Image
                                            src="/images/footer/i-1.png"
                                            alt="Certification"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <div className="flex justify-center relative">
                                        <Image
                                            src="/images/footer/i-2.png"
                                            alt="Certification"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                    <div className="flex justify-center relative">
                                        <Image
                                            src="/images/footer/i-3.png"
                                            alt="Certification"
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="wrapper">
                                <div className="title text-fs18px uppercase leading-normal font-bold mt-6">
                                    <Link href="" target="_blank">
                                        Tải Brochure
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="item w-full lg:w-[calc(33.3333%-20px)]">
                            <div className="iframe !w-full h-[256px] rounded-[20px] overflow-hidden">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.7195267909299!2d108.2019516325409!3d16.019859584145987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421988058f36a1%3A0xf8adf44d71cae063!2zMzYgw5RuZyDDjWNoIMSQLiwgS2h1w6ogVHJ1bmcsIEPhuqltIEzhu4csIMSQw6AgTuG6tW5nIDU1MDAwMA!5e0!3m2!1svi!2s!4v1651653674352!5m2!1svi!2s"
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
                <div className="container">
                    <div className="title text-center text-xs sm:text-sm leading-4 font-normal">
                        © {new Date().getFullYear()} Tổng Công ty Cổ phần Dệt
                        may MINH MINH TÂM.
                    </div>
                </div>
            </div>
        </footer>
    );
}
