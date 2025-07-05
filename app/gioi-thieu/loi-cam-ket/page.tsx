import React from 'react';
import ContentPageLayout from '@/app/components/layout/ContentPageLayout';
import { BreadcrumbItem } from '@/app/types';
import PageTitle from '@/app/components/shared/PageTitle';

export default function LoiCamKet() {
    // Define breadcrumb items for navigation
    const breadcrumbItems: BreadcrumbItem[] = [
        { label: 'Giới thiệu', href: '/gioi-thieu/tong-quan' },
        { label: 'Lời cam kết', href: '/gioi-thieu/loi-cam-ket' },
    ];

    return (
        <ContentPageLayout
            bannerImage="/images/gioi-thieu/tong-quan/banner.png"
            bannerAlt="Lời cam kết"
            breadcrumbItems={breadcrumbItems}
            containerBackground="/images/gioi-thieu/loi-cam-ket/bg.png"
        >
            <div>
                <PageTitle title="Lời cam kết" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Commitment to Customers */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow">
                        <h2 className="text-xl md:text-2xl font-bold mb-5 text-center text-red-600">
                            Lời cam kết đến khách hàng
                        </h2>
                        <div className="space-y-4 text-base">
                            <p className="text-justify">
                                1. Chất lượng sản phẩm và dịch vụ ngày càng được
                                nâng lên, đáp ứng yêu cầu ngày càng cao của
                                khách hàng.
                            </p>
                            <p className="text-justify">
                                2. Thực hiện đầy đủ các quy tắc hành xử về trách
                                nhiệm xã hội, môi trường và an ninh.
                            </p>
                            <p className="text-justify">
                                3. Sự thịnh vượng của khách hàng là sự thành
                                công của Tổng Công Ty.
                            </p>
                        </div>
                    </div>

                    {/* Commitment to Employees */}
                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow">
                        <h2 className="text-xl md:text-2xl font-bold mb-5 text-center text-red-600">
                            Lời cam kết đến nhân viên
                        </h2>
                        <div className="space-y-4 text-base">
                            <p className="text-justify">
                                1. Thu nhập của người lao động là thước đo giá
                                trị phát triển của Tổng Công Ty Dệt May MINH MINH TÂM.
                                Tạo ra môi trường làm việc chuyên nghiệp, tôn
                                trọng lẫn nhau.
                            </p>
                            <p className="text-justify">
                                2. Văn hóa hướng đến Chân - Thiện - Mỹ, tôn vinh
                                các cá nhân làm việc có hiệu quả, xây dựng cá
                                nhân điển hình tiên tiến để làm gương cho tập
                                thể học tập.
                            </p>
                            <p className="text-justify">
                                3. Đào tạo nâng cao trình độ chuyên môn, tay
                                nghề và tạo cơ hội cho người lao động học tập,
                                phát triển khả năng và sự nghiệp.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </ContentPageLayout>
    );
}
