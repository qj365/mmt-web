import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContentPageLayout from '@/components/layout/ContentPageLayout';

// This is a sample job data - in a real app, this would come from an API or CMS
const jobData = {
    'it-developer': {
        title: 'CHUYÊN VIÊN PHÁT TRIỂN PHẦN MỀM (IT DEVELOPER)',
        image: '/images/tuyen-dung/tuyen-dung-1.png',
        details: [
            { icon: 'attach_money', label: 'Mức lương', value: 'Thỏa thuận' },
            {
                icon: 'work',
                label: 'Hình thức làm việc',
                value: 'Toàn thời gian',
            },
            {
                icon: 'maps_home_work',
                label: 'Địa điểm làm việc',
                value: 'Bình Thuận',
            },
            {
                icon: 'supervisor_account',
                label: 'Chức vụ',
                value: 'Nhân viên',
            },
            { icon: 'school', label: 'Bằng cấp', value: 'Đại học' },
            { icon: 'person', label: 'Độ tuổi', value: '22-35' },
            { icon: 'poll', label: 'Kinh nghiệm', value: '2-5 năm' },
            { icon: 'male', label: 'Yêu cầu giới tính', value: 'Nam/nữ' },
            {
                icon: 'calendar_today',
                label: 'Thời hạn nộp hồ sơ',
                value: '20/09/2024',
            },
        ],
        description: `
      <p>- Tham gia phát triển và triển khai các dự án chuyển đổi số của Tổng Công ty.</p>
      <p>- Khảo sát, phân tích yêu cầu người sử dụng.</p>
      <p>- Xây dựng hồ sơ thiết kế ứng dụng.</p>
      <p>- Lập trình phát triển các chức năng của ứng dụng.</p>
      <p>- Chạy thử và sửa lỗi, điều chỉnh cho phù hợp.</p>
      <p>- Viết tài liệu hướng dẫn sử dụng phần mềm.</p>
      <p>- Đào tạo hướng dẫn sử dụng.</p>
      <p>- Bảo trì: xử lý lỗi khi triển khai ứng dụng, phát triển các yêu cầu bổ sung từ phía người sử dụng, cải tiến nâng cấp chức năng, ...</p>
    `,
        requirements: `
      <p>- Sử dụng thành thạo một số ngôn ngữ lập trình như VB.NET, ASP.NET, C#.NET, Xamarin, React Native … và cơ sở dữ liệu SQL, JSON.</p>
      <p>- Lập trình phát triển ứng dụng winform và web.</p>
      <p>- Lập trình phát triển ứng dụng trên thiết bị di động.</p>
      <p>- Am hiểu về các công nghệ 4.0 như AI, Big Data, Blockchain, BI, RFID, RPA, IoT, Smart Factory,…</p>
      <p>- Kỹ năng làm việc theo nhóm, nghiên cứu, sáng tạo.</p>
      <p>- Kỹ năng quản lý dự án theo phương pháp luận Agile.</p>
      <p>- Kỹ năng phân tích, thiết kế hệ thống tin quản trị doanh nghiệp.</p>
    `,
        benefits: `
      <p>- Mức lương: Từ 20.000.000đ trở lên</p>
      <p>- Được đài thọ bữa ăn sáng, trưa, chiều hoặc phụ cấp ăn chiều.</p>
      <p>- Được hưởng lương tháng 13, thưởng Tết âm lịch; đóng BHXH, BHYT, BHTN, Bảo hiểm rủi ro (24/24); thưởng ngày Lễ, Tết, các chế độ nghỉ ốm đau, thai sản, và các chế độ khác theo quy định của Pháp luật và Tổng Công ty.</p>
      <p>- Được làm việc trong môi trường chuyên nghiệp, an toàn sạch sẽ, công việc ổn định, lâu dài, nhiều cơ hội thăng tiến.</p>
      <p>- Được đào tạo miễn phí.</p>
    `,
        application: `
      <p>- Đơn xin việc.</p>
      <p>- Sơ yếu lý lịch, Phiếu khám sức khỏe; Bản sao các giấy tờ Sổ hộ khẩu/Xác nhận nơi cư trú, CCCD, Giấy khai sinh, Các văn bằng, chứng chỉ có liên quan đến công việc.</p>
      <p>- Bảng thông tin ứng viên theo mẫu của Tổng công ty được đăng tại mục Tuyển dụng trên website: www.minhminhtam.com.vn. Link tải trực tiếp: bit.ly/3XZvd7A.</p>
      <p>• Nộp hồ sơ qua email hoặc trực tiếp tại: Văn phòng Tổng Công ty CP Dệt May MINH MINH TÂM - Khu phố 1, Thị trấn Tân Nghĩa, Quận Hàm Tân, Tỉnh Bình Thuận, Việt Nam. Mọi chi tiết xin liên hệ: Mr Dũng - Chuyên viên Văn phòng qua điện thoại số: 0252 672 5858 hoặc email: minhminhtam.binhthuan@gmail.com.</p>
      <p>THỜI GIAN NHẬN HỒ SƠ: đến 20/09/2024 hoặc khi đã tuyển được ứng viên.</p>
    `,
    },
    // Add more job data as needed
};

// Other job listings
const otherJobs = [
    {
        slug: 'chuyen-gia-cao-cap',
        title: 'Chuyên gia cao cấp Nghiên cứu và phát triển sản phẩm may (R&D Team Leader)',
        image: '/images/tuyen-dung/tuyen-dung-1.png',
        location: 'Bình Thuận',
    },
    {
        slug: 'nhan-vien-theo-doi-don-hang',
        title: 'NHÂN VIÊN THEO DÕI ĐƠN HÀNG MAY MẶC XUẤT KHẨU (MERCHANDISER)',
        image: '/images/tuyen-dung/tuyen-dung-1.png',
        location: 'Bình Thuận',
    },
];

export default function JobDetail({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const job = jobData[slug as keyof typeof jobData];

    // This would be a proper 404 page in a real app
    if (!job) {
        return <div>Job not found</div>;
    }

    const breadcrumbItems = [
        { label: 'Tuyển dụng', href: '/tuyen-dung' },
        { label: job.title, href: `/tuyen-dung/${slug}` },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/tuyen-dung/banner.png"
            bannerAlt="Tuyển dụng"
            breadcrumbItems={breadcrumbItems}
        >
            <section className="recruit-detail py-10">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Main job info */}
                        <div className="w-full lg:w-2/3">
                            <div className="recruit-info">
                                <div className="info-wrapper flex flex-col md:flex-row rounded-3xl bg-white overflow-hidden shadow-lg">
                                    <div className="img md:w-2/5 relative">
                                        <div className="relative h-full min-h-[250px]">
                                            <Image
                                                src={job.image}
                                                alt={job.title}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="information p-6 md:w-3/5 flex flex-col">
                                        <h1 className="font-bold text-2xl leading-7 text-[#338dcc] uppercase mb-6">
                                            {job.title}
                                        </h1>
                                        <div className="table mb-6 opacity-80">
                                            <table className="w-full">
                                                <tbody>
                                                    {job.details.map(
                                                        (detail, index) => (
                                                            <tr key={index}>
                                                                <td className="py-1.5 w-1/2">
                                                                    <div className="flex items-center">
                                                                        <span className="material-icons mr-2 text-[#338dcc]">
                                                                            {
                                                                                detail.icon
                                                                            }
                                                                        </span>
                                                                        <span>
                                                                            {
                                                                                detail.label
                                                                            }
                                                                        </span>
                                                                    </div>
                                                                </td>
                                                                <td className="py-1.5 pl-4 text-right w-1/2">
                                                                    {
                                                                        detail.value
                                                                    }
                                                                </td>
                                                            </tr>
                                                        )
                                                    )}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>

                                <div className="job-description bg-white shadow-lg rounded-3xl mt-8 p-6 space-y-8">
                                    <div className="block">
                                        <h2 className="text-[#338dcc] font-bold text-2xl leading-6 mb-4">
                                            Mô tả công việc
                                        </h2>
                                        <div
                                            className="text-gray-700 text-base leading-7 font-normal"
                                            dangerouslySetInnerHTML={{
                                                __html: job.description,
                                            }}
                                        />
                                    </div>

                                    <div className="block">
                                        <h2 className="text-[#338dcc] font-bold text-2xl leading-6 mb-4">
                                            Yêu cầu
                                        </h2>
                                        <div
                                            className="text-gray-700 text-base leading-7 font-normal"
                                            dangerouslySetInnerHTML={{
                                                __html: job.requirements,
                                            }}
                                        />
                                    </div>

                                    <div className="block">
                                        <h2 className="text-[#338dcc] font-bold text-2xl leading-6 mb-4">
                                            Quyền lợi
                                        </h2>
                                        <div
                                            className="text-gray-700 text-base leading-7 font-normal"
                                            dangerouslySetInnerHTML={{
                                                __html: job.benefits,
                                            }}
                                        />
                                    </div>

                                    <div className="block">
                                        <h2 className="text-[#338dcc] font-bold text-2xl leading-6 mb-4">
                                            Hồ sơ
                                        </h2>
                                        <div
                                            className="text-gray-700 text-base leading-7 font-normal"
                                            dangerouslySetInnerHTML={{
                                                __html: job.application,
                                            }}
                                        />
                                    </div>

                                    <div className="block">
                                        <h2 className="text-[#338dcc] font-bold text-2xl leading-6 mb-4">
                                            Liên hệ với chúng tôi
                                        </h2>
                                        <div className="contact-icon flex gap-4">
                                            <a
                                                href="tel:02363846290"
                                                className="w-10 h-10 bg-[#338dcc] text-white rounded-full flex items-center justify-center hover:bg-[#56c1f9] transition-colors"
                                            >
                                                <i className="fa fa-phone-alt text-white"></i>
                                            </a>
                                            <a
                                                href="mailto:office@hoatho.com.vn"
                                                className="w-10 h-10 bg-[#338dcc] text-white rounded-full flex items-center justify-center hover:bg-[#56c1f9] transition-colors"
                                            >
                                                <i className="fa fa-envelope text-white"></i>
                                            </a>
                                            <a
                                                href="#"
                                                className="w-10 h-10 bg-[#338dcc] text-white rounded-full flex items-center justify-center hover:bg-[#56c1f9] transition-colors"
                                            >
                                                <i className="fab fa-facebook-square text-white"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Side job listings */}
                        <div className="w-full lg:w-1/3">
                            <div className="wrapper">
                                <h2 className="relative font-bold text-[#338dcc] text-xl leading-6 uppercase mb-6 pb-2 border-b border-gray-200">
                                    Tuyển dụng khác
                                </h2>
                                <div className="other-recruit grid grid-cols-1 gap-6">
                                    {otherJobs.map((job, index) => (
                                        <div className="item" key={index}>
                                            <div className="bg-white rounded-3xl overflow-hidden shadow-md">
                                                <div className="img">
                                                    <Link
                                                        href={`/tuyen-dung/${job.slug}`}
                                                    >
                                                        <div className="aspect-[4/3] relative">
                                                            <Image
                                                                src={job.image}
                                                                alt={job.title}
                                                                fill
                                                                className="object-cover rounded-t-3xl"
                                                            />
                                                        </div>
                                                    </Link>
                                                </div>
                                                <div className="content p-4">
                                                    <h3 className="font-bold text-lg leading-6 text-[#338dcc] mb-4 uppercase">
                                                        <Link
                                                            href={`/tuyen-dung/${job.slug}`}
                                                        >
                                                            {job.title}
                                                        </Link>
                                                    </h3>
                                                    <div className="info-list space-y-3">
                                                        <div className="info flex items-center">
                                                            <div className="icon mr-3 flex items-center">
                                                                <Image
                                                                    src="/images/home/menu-icon.svg"
                                                                    width={24}
                                                                    height={24}
                                                                    alt="icon"
                                                                    className="w-6 h-6 text-[#338dcc]"
                                                                />
                                                            </div>
                                                            <div className="text-base text-black">
                                                                ...
                                                            </div>
                                                        </div>
                                                        <div className="info flex items-center">
                                                            <div className="icon mr-3 flex items-center">
                                                                <Image
                                                                    src="/images/shared/home.svg"
                                                                    width={24}
                                                                    height={24}
                                                                    alt="location"
                                                                    className="w-6 h-6 text-[#338dcc]"
                                                                />
                                                            </div>
                                                            <div className="text-base text-black">
                                                                {job.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </ContentPageLayout>
    );
}
