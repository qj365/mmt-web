import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types';

export default function TamNhinSuMenh() {
    // Define breadcrumb items
    const breadcrumbItems: BreadcrumbItem[] = [
        {
            label: 'Giới thiệu',
            href: '/gioi-thieu/tong-quan',
        },
        {
            label: 'Tầm nhìn sứ mệnh',
            href: '/gioi-thieu/tam-nhin-su-menh',
        },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/tam-nhin/banner.png"
            bannerAlt="Tầm nhìn sứ mệnh"
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/gioi-thieu/tam-nhin/bg.png"
            containerClassName="py-24 sm:py-[134px]"
        >
            <div className="wrapper max-w-[495px]">
                <h1 className="block-title border-left uppercase">
                    Tầm nhìn - sứ mệnh
                </h1>
                <div className="des mt-8">
                    <p>
                        <strong>
                            <span className="text-red-600">Tầm nhìn:</span>
                        </strong>
                        <br />• Trở thành Doanh nghiệp tiên phong và phát triển
                        bền vững trong ngành dệt may.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">Sứ mệnh:</span>
                        </strong>
                        <br />• Là Đối tác tin cậy trong chuỗi cung ứng dệt may
                        toàn cầu.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                Giá trị cốt lõi:
                            </span>
                        </strong>
                        <br />
                        • Thượng tôn pháp luật, quản trị minh bạch, phát triển
                        bền vững.
                        <br />
                        • Thỏa mãn khách hàng khi sử dụng sản phẩm và dịch vụ.
                        <br />• Hài hòa lợi ích cổ đông, người lao động và đóng
                        góp cho xã hội.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                Tuyên bố chiến lược:
                            </span>
                        </strong>
                        <br />• Tiên phong trong các giải pháp kinh doanh, liên
                        tục cải tiến để đồng hành cùng đối tác, khách hàng trong
                        ngành dệt may toàn cầu.
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">Khẩu hiệu: </span>
                        </strong>
                        <em>
                            &ldquo;May mặc tận tâm – An tâm sử dụng&rdquo;
                        </em>
                    </p>
                    <p>&nbsp;</p>
                    <p>
                        <strong>
                            <span className="text-red-600">
                                Nguyên tắc hoạt động:
                            </span>
                        </strong>
                        <br />
                        • Cân bằng giữa công việc và cuộc sống: tổ chức thời gian sản xuất hợp lý, tối ưu hiệu quả, giảm làm thêm giờ, giúp nhân viên có cuộc sống khỏe mạnh.
                        • Mục tiêu lâu dài: đảm bảo chất lượng cao để duy trì sự tồn tại và sự hài lòng của khách hàng.

                        • Kinh doanh với sự trung thực & tuân thủ.
                        <br />
                        • Tạo ra giá trị thực sự cho khách hàng, người lao động
                        và cổ đông.
                        <br />• Đóng góp vào sự phát triển của đất nước, môi
                        trường sống và đáp ứng kỳ vọng của các cổ đông.
                    </p>
                    
                </div>
            </div>
        </ContentPageLayout>
    );
}
