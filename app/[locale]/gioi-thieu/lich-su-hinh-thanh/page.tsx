import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import PageTitle from '@/app/components/shared/PageTitle';
import Image from 'next/image';
import { BreadcrumbItem } from '@/app/types';

export default function LichSuPage() {
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Trang chủ', href: '/' },
        { label: 'Giới thiệu', href: '/gioi-thieu/tong-quan' },
        { label: 'Lịch sử hình thành', href: '/gioi-thieu/lich-su-hinh-thanh' },
    ];

    const timelineItems = [
        {
            year: '1996',
            image: '/images/gioi-thieu/lich-su/history.png',
            content: (
                <ul>
                    <li className="text-justify">
                        Bắt đầu hoạt động tại Việt Nam với Xưởng may Minh Tâm – chuyên sản xuất và gia công đồng phục y tế, gile, áo khoác,...
                    </li>
                </ul>
            ),
        },
        {
            year: '2009',
            image: '/images/gioi-thieu/lich-su/history.png',
            content: (
                <ul className="text-justify">
                    <li>
                        <p>Đầu tư mở rộng thành Công ty TNHH May Phú Minh Tâm: </p>
                        <ul className="list-disc pl-5">
                            <li>Chuyên sản xuất đồng phục và đồ bảo hộ y tế.</li>
                            <li>
                                Sản phẩm chính: sản xuất đồng phục y tế và đồ bảo hộ,
                                Recycled Yarn.
                            </li>
                            <li>
                                Các chứng nhận: Oeko-Tex standard 100, ISO
                                9001-2008, cotton USA, BCI, Usterized.
                            </li>
                        </ul>
                    </li>
                </ul>
            ),
        },
        {
            year: '2019',
            image: '/images/gioi-thieu/lich-su/history.png',
            content: (
                <ul className="text-justify">
                    <li>
                        Thành lập Công ty TNHH May Minh Minh Tâm, xây dựng nhà máy trong 2 năm trước khi vận hành chính thức.
                    </li>
                    <li>
                     Mở rộng quy mô nhà máy, tập trung tăng năng lực sản xuất đồng phục y tế và đồ bảo hộ.
                    </li>
                </ul>
            ),
        },
        {
            year: '2021',
            image: '/images/gioi-thieu/lich-su/history.png',
            content: (
                <ul className="text-justify">
                    <li>
                        <p>Tổng số nhân viên là 150 người với 04 chuyền may:</p>
                        <ul className="list-disc pl-5">
                            <li>Sản phẩm chính: Suits, Blazer, Pant.</li>
                            <li>
                                Các chứng nhận: WRAP, GSV, WCA(Haggar),
                                Kohl&apos;s, Macy&apos;s, Perry Elps.
                            </li>
                            <li>
                                Nhãn hàng: Haggar, Oakhill, Kohl&apos;s, Gold
                                Series, Island Passport,...
                            </li>
                        </ul>
                    </li>
                </ul>
            ),
        },
        {
            year: '2023',
            image: '/images/gioi-thieu/lich-su/history.png',
            content: (
                <ul className="text-justify">
                    <li>
                        <p>Dự kiến mở thêm 2-3 chuyền may mới:</p>
                        <ul className="list-disc pl-5">
                            <li>Sản phẩm chính: Suits, Blazer, Pant.</li>
                            <li>
                                Các chứng nhận: WRAP, GSV, WCA(Haggar), Walmart,
                                Kohl&apos;s, Express,...
                            </li>
                            <li>
                                Nhãn hàng: Express, Marc Anthony, Michael Kors,
                                Van Huesen, Calvin Klein, Bar III, Crown &amp;
                                Ivy,...
                            </li>
                        </ul>
                    </li>
                </ul>
            ),
        },
        // {
        //     year: '2001',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <ul className="text-justify">
        //             <li>
        //                 <p>Thành lập Công Ty May MINH MINH TÂM - Điện Bàn:</p>
        //                 <ul className="list-disc pl-5">
        //                     <li>Sản phẩm chính: Workwear, Uniform Knitwear.</li>
        //                     <li>
        //                         Các chứng nhận: WCA; 5.11; Seven &amp; I HLDGS,
        //                         AEON.
        //                     </li>
        //                     <li>
        //                         Nhãn hàng: Snickers, Kansai,Toyota, Yonex . . .
        //                     </li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     ),
        // },
        // {
        //     year: '2002',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <>
        //             <p>Thành lập mới hai đơn vị:</p>
        //             <ul className="text-justify">
        //                 <li>
        //                     Thành lập Nhà Máy May MINH MINH TÂM 3, đến năm 2010
        //                     sát nhập vào Nhà Máy May MINH MINH TÂM 2 (nay là Nhà
        //                     Máy May Veston MINH MINH TÂM)
        //                 </li>
        //                 <li>
        //                     Thành lập Công ty May MINH MINH TÂM - Quảng Nam.
        //                 </li>
        //             </ul>
        //         </>
        //     ),
        // },
        // {
        //     year: '2003',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <ul className="text-justify">
        //             <li>
        //                 <p>Thành lập Công Ty May MINH MINH TÂM - Hội An:</p>
        //                 <ul className="list-disc pl-5">
        //                     <li>Năng lực: 650.000 sản phẩm/năm</li>
        //                     <li>
        //                         Sản phẩm chính: Medical Uniform, Pants, Jacket
        //                     </li>
        //                     <li>Nhãn hàng: Fjallraven, Kazen</li>
        //                     <li>
        //                         Địa chỉ: 26 - Nguyễn Tất Thành, Phường Tân An,
        //                         TP Hội An, Tỉnh Quảng Nam, Việt Nam
        //                     </li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     ),
        // },
        // {
        //     year: '2006',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <ul className="text-justify">
        //             <li>
        //                 Ngày 15/11/2006, công ty đổi tên thành Tổng Công ty Cổ
        //                 phần Dệt May MINH MINH TÂM theo quyết định số
        //                 3252/QĐ-BCN của Bộ Công nghiệp, và chính thức đi vào
        //                 hoạt động vào ngày 01 tháng 02 năm 2007.
        //             </li>
        //         </ul>
        //     ),
        // },
        // {
        //     year: '2007',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <>
        //             <p>Đầu tư mới hai Công ty:</p>
        //             <ul className="text-justify">
        //                 <li>
        //                     <p>Công ty May MINH MINH TÂM - Duy Xuyên:</p>
        //                     <ul className="list-disc pl-5">
        //                         <li>Sản phẩm chính: Dress pants.</li>
        //                         <li>
        //                             Các chứng nhận: Perry Ellis Portfolio,
        //                             Farah, Savane, Stafford…
        //                         </li>
        //                         <li>
        //                             Địa chỉ: Khu Công Nghiệp Gò Dỗi, huyện Duy
        //                             Xuyên, tỉnh Quảng Nam, Việt Nam, cách Đà
        //                             Nẵng 32km.
        //                         </li>
        //                     </ul>
        //                 </li>
        //                 <li>
        //                     <p>Công ty May MINH MINH TÂM - Đông Hà:</p>
        //                     <ul className="list-disc pl-5">
        //                         <li>Sản phẩm chính: Jacket, Workwear.</li>
        //                         <li>Các chứng nhận: WRAP, BSCI, GMP, PVH.</li>
        //                         <li>
        //                             Nhãn hàng: Marc O&apos;s Polo, S.Oliver,
        //                             Head, Fjallraven, Lands&apos;end, Tommy
        //                             Hilger, Calvin Klein, DKNY…
        //                         </li>
        //                         <li>
        //                             Địa chỉ: Khu CN nam Đông Hà, Tp. Đông Hà,
        //                             Quảng Trị, cách Bình Thuận 165km.
        //                         </li>
        //                     </ul>
        //                 </li>
        //             </ul>
        //         </>
        //     ),
        // },
        // {
        //     year: '2011',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <ul className="text-justify">
        //             <li>
        //                 <p>Thành lập Nhà Máy May Veston MINH MINH TÂM:</p>
        //                 <ul className="list-disc pl-5">
        //                     <li>
        //                         Sản phẩm chính: Suits, Blazer, Vest, Dress
        //                         Pants.
        //                     </li>
        //                     <li>
        //                         Các chứng nhận: WRAP, GSV, PVH, Macy&apos;s,
        //                         Kohl&apos;s, Express, GAP (Banana Republic).
        //                     </li>
        //                     <li>
        //                         Nhãn hàng: Calvin Klein, Chaps, Marc Anthony,
        //                         Michael Kors, Express, Banana Republic, Bar III,
        //                         Crown &amp; Ivy....
        //                     </li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     ),
        // },
        // {
        //     year: '2012',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <ul className="text-justify">
        //             <li>
        //                 Góp vốn đầu tư vào Công Ty CP May MINH MINH TÂM - Phú
        //                 Ninh.
        //             </li>
        //             <li>
        //                 Thực hiện tách Công Ty Sợi MINH MINH TÂM thành 02 nhà
        //                 máy Sợi 1 và Sợi 2.
        //             </li>
        //         </ul>
        //     ),
        // },
        // {
        //     year: '2016',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <ul className="text-justify">
        //             <li>
        //                 <p>
        //                     Góp vốn đầu tư thành lập Công Ty CP Sợi MINH MINH
        //                     TÂM Thăng Bình:
        //                 </p>
        //                 <ul className="list-disc pl-5">
        //                     <li>
        //                         Sản phẩm chính: TC, CVC Carded và Combed yarn.
        //                     </li>
        //                     <li>
        //                         Các chứng nhận: Oeko-Tex standard 100, ISO
        //                         9001-2008, Cotton USA, Usterized.
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <p>Thành lập Nhà Máy May MINH MINH TÂM - Quãng Ngãi:</p>
        //                 <ul className="list-disc pl-5">
        //                     <li>
        //                         Sản phẩm chính: Knitwear, Sleepwear, Polo-shirt,
        //                         T-shirt
        //                     </li>
        //                     <li>Các chứng nhận: WRAP, Target</li>
        //                     <li>
        //                         Nhãn hàng: Dockers, Nautica, Chaps, Good Fellow,
        //                         Cat &amp; Jack.
        //                     </li>
        //                 </ul>
        //             </li>
        //             <li>
        //                 <p>Thành lập Nhà Máy May Hòa Quý:</p>
        //                 <ul className="list-disc pl-5">
        //                     <li>Sản phẩm chính: Knitwear, Blouse, Dress</li>
        //                     <li>Nhãn hàng: Mac, SA.HARA, OPUS&apos;</li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     ),
        // },
        // {
        //     year: '2017',
        //     image: '/images/gioi-thieu/lich-su/history.png',
        //     content: (
        //         <ul className="text-justify">
        //             <li>
        //                 <p>Thành lập Nhà máy May Quế Sơn:</p>
        //                 <ul className="list-disc pl-5">
        //                     <li>
        //                         Sản phẩm chính: Quần áo trẻ em, Đồ ngủ, Áo thun,
        //                         Áo Polo.
        //                     </li>
        //                     <li>
        //                         Các chứng nhận: WRAP, Costco, Kohl&apos;s,
        //                         Macy&apos;s.
        //                     </li>
        //                     <li>
        //                         Nhãn hàng: Jonna Michelle, CK, Cat&amp;Jack, The
        //                         Children Place.
        //                     </li>
        //                 </ul>
        //             </li>
        //         </ul>
        //     ),
        // },
        {
            year: '2023 - nay',
            image: '/images/gioi-thieu/lich-su/history.png',
            content: (
                <ul className="text-justify">
                    <li>
                        <p>
                            Tiếp tục phát triển:
                        </p>
                        <ul className="list-disc pl-5">
                            <li>Sản phẩm chính: Jacket, Workwear</li>
                            <li>Các chứng nhận: WRAP, LEED.</li>
                            <li>
                                Nhãn hàng: Quechua, Wedze, Björnkläder, True
                                Nation, Harbor Bay
                            </li>
                        </ul>
                    </li>
                </ul>
            ),
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/lich-su/banner.png"
            bannerAlt="Lịch sử hình thành - Dệt may MINH MINH TÂM"
            breadcrumbItems={breadcrumbItems}
            containerClassName="intro-lichsu section xl:pt-[80px] xl:pb-[100px]"
        >
            <div className="container">
                <PageTitle
                    title="Lịch sử hình thành"
                    className="text-center mb-8 md:mb-14"
                />

                <div className="year-list relative mt-8 xl:mt-14">
                    {timelineItems.map((item, index) => (
                        <div key={index} className="year-item relative">
                            <div className="box-news">
                                <div className="wrapper relative max-w-[calc(100%-25px)] lg:max-w-[50%] xl:max-w-[390px]">
                                    <div className="img relative h-[200px] md:h-[280px]">
                                        <Image
                                            src={item.image}
                                            alt={item.year}
                                            fill
                                            className="object-cover rounded-md"
                                        />
                                    </div>
                                    <div className="content mt-5 text-base leading-5 text-gray-700 font-normal">
                                        {item.content}
                                    </div>
                                    <div className="year absolute z-10 top-0 text-center font-normal text-xl md:text-4xl text-white py-2 px-6 bg-secondary rounded-r-md">
                                        {item.year}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </ContentPageLayout>
    );
}
