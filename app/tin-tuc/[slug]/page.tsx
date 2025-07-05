'use client';

import React from 'react';
import ContentPageLayout from '../../components/layout/ContentPageLayout';
import { BreadcrumbItem } from '../../types';

// Mock data for the article
const article = {
    id: '8500',
    title: 'LỄ PHÁT ĐỘNG THI ĐUA CHÀO MỪNG ĐẠI HỘI ĐẢNG BỘ TỔNG CÔNG TY CP DỆT MAY MINH MINH TÂM LẦN THỨ XVI, NHIỆM KỲ 2025 - 2030',
    date: '09/06/2025',
    content: [
        '<p style="text-align: justify;"><span style="white-space: pre;">	</span>Hướng tới Đại hội đại biểu Đảng bộ Tổng Công ty Cổ phần Dệt May MINH MINH TÂM lần thứ XVI, Nhiệm kỳ 2025 – 2030, sáng ngày 9/6/2025, tại Hội trường Tổng Công ty, Đảng ủy Tổng Công ty đã trang trọng tổ chức "Lễ phát động thi đua chào mừng Đại hội Đảng bộ Tổng Công ty".</p>',
        '<p style="text-align: center;"><img alt="" src="/images/tin-tuc/l1.jpg" /></p>',
        '<p style="text-align: center;"><em>Tinh thần quyết tâm thi đua đạt thành tích cao của tập thể<br />Đảng bộ Tổng Công ty Cổ phần Dệt May MINH MINH TÂM</em></p>',
        '<div style="text-align: justify;"><span style="white-space: pre;">	</span>Tham dự buổi lễ có các đồng chí trong Ban Thường vụ, Ban Chấp hành Đảng bộ, Ban điều hành Tổng Công ty cùng đại diện cấp ủy, lãnh đạo quản lý các phòng ban và nhà máy thành viên, Công đoàn, Đoàn Thanh niên.</div>',
        '<p style="text-align: center;"><img alt="" src="/images/tin-tuc/l2.jpg" /></p>',
        '<p style="text-align: center;"><em>Đồng chí Nguyễn Thanh Sơn - Phó Bí thư Đảng ủy, Chủ tịch Công đoàn<br />Tổng Công ty phát biểu khai mạc</em></p>',
        '<div style="text-align: justify;"><span style="white-space: pre;">	</span>Phát biểu khai mạc buổi lễ, đồng chí Nguyễn Thanh Sơn - Phó Bí thư Đảng ủy, Chủ tịch Công đoàn Tổng Công ty khẳng định: "Đợt phát động thi đua là dịp để toàn Đảng bộ và người lao động MINH MINH TÂM nhìn lại chặng đường đã qua, phát huy truyền thống vẻ vang, từ đó tiếp tục nỗ lực, phấn đấu vươn lên, xây dựng Tổng Công ty phát triển vững mạnh trong giai đoạn mới".</div>',
        '<p style="text-align: center;"><img alt="" src="/images/tin-tuc/l3.jpg" /></p>',
        '<p style="text-align: center;"><em>Đồng chí Nguyễn Ngọc Bình -&nbsp; Ủy viên Ban Thường vụ Đảng ủy,<br />Thành viên HĐQT, Tổng Giám đốc Tổng Công ty phát biểu phát động thi đua</em></p>',
        '<div style="text-align: justify;"><span style="white-space: pre;">	</span>Phong trào thi đua được phát động sâu rộng trong toàn Đảng bộ với phương châm: "Đoàn kết - Dân chủ - Kỷ cương - Sáng tạo - Phát triển". Phát biểu phát động thi đua tại buổi lễ, đồng chí Nguyễn Ngọc Bình - Ủy viên Ban Thường vụ Đảng ủy, Tổng Giám đốc Tổng Công ty nhấn mạnh 04 mục tiêu trong đợt thi đua này gồm:<br /><span style="white-space: pre;">	</span>1 - Thi đua lao động sản xuất hoàn thành vượt mức kế hoạch sản xuất - kinh doanh, đảm bảo chất lượng, tiến độ đơn hàng, giữ vững uy tín với khách hàng.<br /><span style="white-space: pre;">	</span>2 - Thực hiện tốt công tác an toàn lao động, phòng chống cháy nổ, an toàn vệ sinh thực phẩm, xây dựng môi trường làm việc an toàn - sạch đẹp - kỷ cương. Thực hiện chăm lo tốt hơn đời sống người lao động.<br /><span style="white-space: pre;">	</span>3 - Phát huy sáng kiến, cải tiến kỹ thuật, tiết kiệm nguyên vật liệu, giảm chi phí sản xuất, nâng cao hiệu quả.<br /><span style="white-space: pre;">	</span>4 - Xây dựng hình ảnh người lao động MINH MINH TÂM chuyên nghiệp, trách nhiệm, đoàn kết, đổi mới, sáng tạo, góp phần xây dựng Tổng Công ty phát triển bền vững.<br /><span style="white-space: pre;">	</span>Tại buổi lễ, các đơn vị trong toàn hệ thống MINH MINH TÂM đã cam kết thi đua bằng những chỉ tiêu cụ thể, gắn liền với đặc thù sản xuất kinh doanh của từng đơn vị, thể hiện rõ quyết tâm chính trị cao, hành động thiết thực hướng tới thành công của Đại hội Đảng bộ Tổng Công ty lần thứ XVI.</div>',
        '<p style="text-align: center;"><img alt="" src="/images/tin-tuc/l4.jpg" /></p>',
        '<p style="text-align: center;"><em>Khen thưởng các tập thể đạt thành tích xuất sắc toàn diện trong phong trào thi đua lao động sản xuất 5 tháng đầu năm 2025</em></p>',
        '<p style="text-align: justify;"><span style="white-space: pre;">	</span>Nhân dịp này, nhằm khích lệ và tạo không khí thi đua trong các đơn vị, Tổng Công ty đã khen thưởng cho các tập thể đạt thành tích xuất sắc toàn diện trong phong trào thi đua lao động sản xuất 5 tháng đầu năm 2025.<br /><span style="white-space: pre;">	</span>Phong trào thi đua chính là môi trường rèn luyện, khơi dậy tinh thần tiên phong, gương mẫu của tổ chức Đảng và từng cán bộ, đảng viên. Đây cũng là bước chuẩn bị tích cực, tạo khí thế sôi nổi, đoàn kết và tin tưởng hướng tới thành công của Đại hội Đảng bộ Tổng Công ty lần thứ XVI./.</p>',
    ],
    images: [
        '/images/tin-tuc/l1.jpg',
        '/images/tin-tuc/l2.jpg',
        '/images/tin-tuc/l3.jpg',
        '/images/tin-tuc/l4.jpg',
    ],
};

// Mock data for related articles
// const relatedArticles = [
//     {
//         id: '7493',
//         title: 'Tổng Công ty CP Dệt May MINH MINH TÂM: Đào tạo, bồi dưỡng, thu hút nhân tài, tạo nguồn nhân lực chất lượng cao',
//         date: '26/04/2025',
//         content:
//             'Sáng 26/4, Tổng Công ty Cổ phần Dệt May MINH MINH TÂM (MINH MINH TÂM) tổ chức Đại hội đồng cổ đông thường niên năm 2025. Dự Đại hội có ông Lê Tiến Trường – Chủ tịch HĐQT Tập đoàn Dệt May Việt Nam (Vinatex), ông Nguyễn Đức Trị – Phó Tổng Giám đốc Tập đoàn, Thành viên HĐQT Tổng Công ty CP Dệt May MINH MINH TÂM. Đại hội có sự tham dự của 135 cổ đông và người được uỷ quyền đại diện cho 29.874.048 cổ phần, chiếm 82,98% tổng số cổ phần Tổng Công ty.',
//         image: '/images/tin-tuc/anh-truong-2.jpg',
//         slug: 'tong-cong-ty-cp-det-may-hoa-tho-dao-tao-boi-dung-thu-hut-nhan-tai-tao-nguon-nhan-luc-chat-luong-cao',
//     },
//     {
//         id: '7489',
//         title: 'SƠ KẾT HOẠT ĐỘNG SẢN XUẤT KINH DOANH QUÝ I/2025, TRIỂN KHAI NHIỆM VỤ, KẾ HOẠCH QUÝ II/2025',
//         date: '16/04/2025',
//         content:
//             'Sáng ngày 15/4/2025, Tổng Công ty Cổ phần Dệt May MINH MINH TÂM tổ chức Hội nghị Sơ kết hoạt động sản xuất kinh doanh Quý I, triển khai nhiệm vụ, kế hoạch Quý II năm 2025. Ông Nguyễn Văn Hải - Bí thư Đảng ủy, Chủ tịch HĐQT chủ trì và điều hành hội nghị.',
//         image: '/images/tin-tuc/a.-q11.jpg',
//         slug: 'so-ket-hoat-dong-san-xuat-kinh-doanh-quy-i2025-trien-khai-nhiem-vu-ke-hoach-quy-ii2025',
//     },
//     {
//         id: '7488',
//         title: 'Quý I/2025 – Khởi đầu bứt phá của MINH MINH TÂM',
//         date: '16/04/2025',
//         content:
//             'Hành trình ba tháng đầu năm đã ghi dấu nhiều nỗ lực và thành quả đáng tự hào trong toàn hệ thống MINH MINH TÂM.',
//         image: '/images/tin-tuc/1anh-video.jpg',
//         slug: 'quy-i2025-khoi-dau-but-pha-cua-hoa-tho',
//     },
// ];

export default function NewsDetailPage({
    params,
}: {
    params: { slug: string };
}) {
    // In a real app, we would fetch the article data based on the slug parameter
    // For now, we'll just use our mock data
    const { slug } = params;

    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Tin tức', href: '/tin-tuc' },
        {
            label: 'Thông Tin Tổng Công Ty',
            href: '/tin-tuc/thong-tin-tong-cong-ty',
        },
        { label: article.title, href: `/tin-tuc/${slug}` },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/tin-tuc/banner.png"
            bannerAlt="Tin tức"
            breadcrumbItems={breadcrumbItems}
            containerClassName="bg-gray-50"
            containerBackground="/images/tin-tuc/bg.png"
        >
            <div className="bg-white rounded-[20px] shadow-lg p-6 md:p-8">
                {/* Article header */}
                <div className="p-8">
                    <div className="mb-7">
                        <h1 className="text-2xl md:text-3xl font-bold leading-tight uppercase text-[#338dcc] mb-5">
                            {article.title}
                        </h1>
                        <div className="flex items-center justify-between">
                            <div className="text-gray-600 font-normal text-lg">
                                {article.date}
                            </div>
                        </div>
                    </div>

                    {/* Article content */}
                    <div className="article-content prose max-w-none">
                        {article.content.map((paragraph, index) => (
                            <div
                                key={index}
                                dangerouslySetInnerHTML={{ __html: paragraph }}
                            />
                        ))}
                    </div>
                </div>
            </div>

            {/* Related articles */}
            {/* <div className="mt-10">
                <h2 className="text-2xl font-bold uppercase text-[#338dcc] text-center mb-8">
                    Tin tức khác
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedArticles.map(article => (
                        <div
                            key={article.id}
                            className="bg-white shadow-md rounded-lg sm:rounded-3xl overflow-hidden"
                        >
                            <div className="relative w-full h-[200px]">
                                <Image
                                    src={article.image}
                                    alt={article.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="p-4 sm:p-6">
                                <div className="text-xs text-gray-500">
                                    {article.date}
                                </div>
                                <h3 className="font-bold text-md sm:text-xl uppercase text-[#338dcc] mt-2 mb-3 line-clamp-2">
                                    <Link href={`/tin-tuc/${article.slug}`}>
                                        {article.title}
                                    </Link>
                                </h3>
                                <p className="text-sm sm:text-base text-gray-600 line-clamp-3">
                                    {article.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div> */}
        </ContentPageLayout>
    );
}
