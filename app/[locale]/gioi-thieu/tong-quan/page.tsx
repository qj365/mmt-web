import React from 'react';
import Image from 'next/image';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types/';
import PageTitle from '@/app/components/shared/PageTitle';

const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Giới thiệu', href: '/gioi-thieu/tong-quan' },
    { label: 'Tổng quan', href: '/gioi-thieu/tong-quan' },
];

export default function TongQuanPage() {
    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/tong-quan/banner.png"
            bannerAlt="Tổng quan - Dệt may MINH MINH TÂM"
            breadcrumbItems={breadcrumbItems}
        >
            {/* Section 1: Thư ngỏ (Letter Section) */}
            <section className="intro-tongquan-1 section xl:pt-[89px] xl:pb-[94px] py-16">
                <div className="container mx-auto px-4">
                    <div className="box-wrapper flex flex-wrap lg:justify-between gap-8">
                        <div className="box-left flex-auto lg:flex-[0_0_40%] xl:flex-[0_0_calc(460/1230*100%)] lg:mt-16">
                            <div className="img mx-auto lg:mx-0 w-fit lg:w-auto">
                                <Image
                                    src="https://picsum.photos/400/500?random=1"
                                    alt="Thưa Quý khách hàng, Quý đối tác và toàn thể cán bộ công nhân viên"
                                    width={400}
                                    height={500}
                                    className="rounded-lg"
                                />
                            </div>
                        </div>
                        <div className="box-right flex-auto lg:flex-[0_0_calc(60%-30px)] xl:flex-[0_0_calc(705/1230*100%)] mt-6 lg:mt-0">
                            <div className="content text-right">
                                <div className="big-title text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-tight text-red-600">
                                    Thư ngỏ
                                </div>
                                <div className="medium-title text-lg sm:text-2xl lg:text-3xl font-bold leading-tight uppercase text-gray-700 mt-[10px] mb-4 sm:mb-[30px]">
                                    Thưa Quý khách hàng, Quý đối tác và toàn thể
                                    cán bộ công nhân viên
                                </div>
                                <div className="des text-base leading-6 text-left text-gray-600 lg:pl-[44px]">
                                    <p className="mb-4">
                                        Trong hơn nửa thế kỷ qua, MINH MINH TÂM
                                        luôn nhất quán một tôn chỉ hoạt động:
                                        xây dựng Dệt May MINH MINH TÂM phát
                                        triển trường tồn, mang đậm tính nhân
                                        văn, không ngừng sáng tạo, hướng đến
                                        thỏa mãn cao nhất nhu cầu của khách hàng
                                        bằng cam kết chất lượng sản phẩm và dịch
                                        vụ. Nhờ vậy, sản phẩm của MINH MINH TÂM
                                        đã đi khắp năm châu và chúng tôi đã trở
                                        thành doanh nghiệp Dệt May nòng cốt tại
                                        khu vực, góp phần vào sự phát triển của
                                        ngành dệt may Việt Nam trên thị trường
                                        thế giới.
                                    </p>
                                    <p className="mb-4">
                                        Với tư duy không ngừng đổi mới, đội ngũ
                                        nhân sự giàu kinh nghiệm, tâm huyết,
                                        sáng tạo cùng sự tiên phong ứng dụng kỹ
                                        thuật công nghệ tiên tiến nhất, MINH
                                        MINH TÂM đã liên tục nâng cao lợi thế
                                        cạnh tranh bằng các sản phẩm mang tầm
                                        vóc và chất lượng quốc tế tại thị trường
                                        lớn như Hoa Kỳ, Châu Âu, Nhật Bản, Hàn
                                        Quốc... Niềm tin, sự đánh giá cao từ
                                        phía khách hàng là thành quả to lớn,
                                        đáng tự hào và là nguồn động lực của
                                        chúng tôi trong suốt hơn 60 năm qua.
                                        Chúng tôi nhất định sẽ giữ vững và phát
                                        huy hơn nữa.
                                    </p>
                                    <p className="mb-4">
                                        Chúng tôi tin rằng trong chặng đường sắp
                                        tới, MINH MINH TÂM sẽ viết nên những
                                        trang sử mới của riêng mình, và cả ngành
                                        dệt may Việt Nam. Trên hành trình này
                                        chắc chắn và luôn luôn cần sự đồng hành,
                                        ủng hộ vững chắc từ Quý đối tác cũng như
                                        tập thể cán bộ công nhân viên MINH MINH
                                        TÂM. MINH MINH TÂM cam kết tạo ra những
                                        giá trị phát triển bền vững cho khách
                                        hàng, đối tác, cán bộ công nhân viên,
                                        những con người đã, đang và sẽ gắn kết
                                        với MINH MINH TÂM.
                                    </p>
                                    <div className="signature text-right mt-8">
                                        <p>Trân trọng,</p>
                                        <p className="mt-4">Giám đốc</p>
                                        <p className="font-bold">
                                            Vũ Thị Thanh Thanh
                                        </p>
                                    </div>
                                </div>
                                <div className="quote text-red-600 sm:text-2xl leading-7 font-bold italic mt-6">
                                    &ldquo;May mặc tận tâm – An tâm sử dụng
                                    văn&rdquo;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Giới thiệu (Introduction Section) */}
            <section className="intro-tongquan-2 section xl:pb-[77px] py-16 relative">
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage:
                            'url(/images/gioi-thieu/tong-quan/intro-banner.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '100vw',
                        marginLeft: 'calc(50% - 50vw)',
                    }}
                ></div>
                <div className="container mx-auto px-4 relative z-10">
                    <PageTitle
                        title="Giới thiệu"
                        className="mb-10"
                        textColor="text-white"
                    />
                    <div className="box-wrapper flex flex-wrap lg:justify-between gap-8">
                        <div className="box-left flex-auto lg:flex-[0_0_50%] xl:flex-[0_0_calc(572/1230*100%)]">
                            <div className="image-wrapper relative">
                                <div className="img rounded-3xl lg:rounded-[200px] lg:rounded-br-none overflow-hidden">
                                    <Image
                                        src="https://picsum.photos/600/400?random=3"
                                        alt="Giới thiệu"
                                        width={600}
                                        height={400}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="content mt-7 sm:mt-0 rounded-3xl lg:rounded-[75px] sm:rounded-br-none lg:rounded-br-none bg-primary px-3 py-5 lg:p-10 lg:pb-12 lg:pr-6 sm:absolute sm:bottom-[-15px] sm:right-[-15px] lg:bottom-[-30px] lg:right-[-30px] w-full sm:max-w-[253px]">
                                    <div className="item mb-6">
                                        <div className="icon mb-[10px] flex justify-center sm:justify-start">
                                            <Image
                                                className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-contain"
                                                src="/images/gioi-thieu/tong-quan/intro-icon-1.png"
                                                alt="Sản xuất hàng may mặc"
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                        <div className="title text-white font-bold text-xl leading-[25px] uppercase text-center sm:text-left">
                                            Sản xuất hàng may mặc
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="icon mb-[10px] flex justify-center sm:justify-start">
                                            <Image
                                                className="w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] object-contain"
                                                src="/images/gioi-thieu/tong-quan/intro-icon-2.png"
                                                alt="Kéo sợi"
                                                width={60}
                                                height={60}
                                            />
                                        </div>
                                        <div className="title text-white font-bold text-xl leading-[25px] uppercase text-center sm:text-left">
                                            Kéo sợi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-right flex-auto lg:flex-[0_0_calc(50%-30px)] xl:flex-[0_0_calc(600/1230*100%)] mt-16">
                            <div className="content-wrapper xl:pl-16">
                                <div className="top flex items-baseline mb-10">
                                    <div className="title text-2xl font-bold text-white">
                                        Thành lập năm
                                    </div>
                                    <div className="year font-bold text-7xl leading-8 text-red-600 ml-5">
                                        1996
                                    </div>
                                </div>
                                <div className="des text-2xl text-white">
                                    <p className="mb-4">
                                        <strong>MINH MINH TÂM</strong> là một
                                        trong những doanh nghiệp dệt may có bề
                                        dày lịch sử và quy mô lớn với 2 lĩnh vực
                                        chính:
                                    </p>
                                    <p className="mb-2">
                                        <strong>
                                            1- Sản xuất hàng may mặc
                                        </strong>
                                    </p>
                                    <p className="mb-6">
                                        <strong>2- Kéo sợi</strong>
                                    </p>
                                    <p>
                                        Không chỉ là một hệ thống cung ứng{' '}
                                        <strong>
                                            Sợi - May hàng đầu Việt Nam
                                        </strong>
                                        , MINH MINH TÂM còn giữ vai trò nòng
                                        cốt, trong các hoạt động của Vinatex và
                                        Vitas, tích cực đóng góp to lớn vào
                                        ngành dệt may Việt Nam trong nhiều thập
                                        kỷ qua.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 3: Video Section */}
            <section className="intro-tongquan-3 section xl:pb-[80px] py-16">
                <div className="container mx-auto px-4">
                    <div className="box-wrapper flex flex-wrap lg:justify-between gap-8">
                        <div className="box-left hidden lg:flex items-center flex-[0_0_100%] lg:flex-[0_0_40%] xl:flex-[0_0_calc(460/1230*100%)] xl:max-w-[calc(460/1230*100%)] xl:mt-9">
                            <div className="logo-svg">
                                <Image
                                    src="/images/gioi-thieu/tong-quan/slogan.svg"
                                    alt="Slogan"
                                    width={442}
                                    height={196}
                                />
                            </div>
                        </div>
                        <div className="box-right flex-[0_0_100%] lg:flex-[0_0_calc(60%-30px)] xl:flex-[0_0_calc(704/1230*100%)] xl:-mr-6">
                            <div className="video-wrapper relative rounded-3xl overflow-hidden">
                                <div className="playBtn absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 cursor-pointer w-[66px] h-[40px] sm:w-[86px] sm:h-[60px] transition-all hover:scale-110">
                                    <div className="bg-white bg-opacity-80 rounded-full w-full h-full flex items-center justify-center">
                                        <svg
                                            className="w-6 h-6 ml-1"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="image w-full h-full">
                                    <Image
                                        src="https://picsum.photos/800/450?random=6"
                                        alt="Video giới thiệu MINH MINH TÂM"
                                        width={800}
                                        height={450}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="video-overlay absolute inset-0 bg-black bg-opacity-20"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ContentPageLayout>
    );
}
