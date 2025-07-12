import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContentPageLayout from '@/components/layout/ContentPageLayout';
import { getJobItemBySlug, getJobItems } from '@/app/lib/api';
import { JobItem } from '@/app/types/recruitment';
import { notFound } from 'next/navigation';
import { formatDate, rewriteImageSrc } from '@/app/lib/utils';
import { convertLexicalToHTML } from '@payloadcms/richtext-lexical/html';

export default async function JobDetail({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { slug } = await params;

    // Fetch job details from API
    const job = await getJobItemBySlug(slug);

    // If job not found, return 404
    if (!job) {
        notFound();
    }

    // Fetch other jobs (limit to 2)
    const otherJobsResponse = await getJobItems(3, 1);
    const otherJobs = otherJobsResponse.docs
        .filter((item: JobItem) => item.slug !== slug)
        .slice(0, 2);

    const education = {
        vocational: 'Trung cấp',
        associate: 'Cao đẳng',
        bachelor: 'Đại học',
        postgraduate: 'Sau đại học',
        noRequirement: 'Không yêu cầu',
    };

    const workType = {
        fullTime: 'Toàn thời gian',
        partTime: 'Bán thời gian',
        internship: 'Thực tập',
        remote: 'Từ xa',
    };
    const gender = {
        male: 'Nam',
        female: 'Nữ',
        any: 'Nam/nữ',
    };

    // Map job details to UI format
    const jobDetails = [
        {
            icon: 'attach_money',
            label: 'Mức lương',
            value: job.salary,
        },
        {
            icon: 'work',
            label: 'Hình thức làm việc',
            value: workType[job.workType as keyof typeof workType],
        },
        {
            icon: 'maps_home_work',
            label: 'Địa điểm làm việc',
            value: job.location,
        },
        {
            icon: 'supervisor_account',
            label: 'Chức vụ',
            value: job.position,
        },
        {
            icon: 'school',
            label: 'Bằng cấp',
            value: education[job.education as keyof typeof education],
        },
        {
            icon: 'person',
            label: 'Độ tuổi',
            value: job.ageRange,
        },
        {
            icon: 'poll',
            label: 'Kinh nghiệm',
            value: job.experience,
        },
        {
            icon: 'male',
            label: 'Yêu cầu giới tính',
            value: gender[job.gender as keyof typeof gender],
        },
        {
            icon: 'calendar_today',
            label: 'Thời hạn nộp hồ sơ',
            value: formatDate(job.applicationDeadline),
        },
    ];

    const breadcrumbItems = [
        { label: 'Tuyển dụng', href: '/tuyen-dung' },
        { label: job.jobTitle, href: `/tuyen-dung/${slug}` },
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
                                                src={`${process.env.NEXT_PUBLIC_API_URL}${job.featuredImage.url}`}
                                                alt={
                                                    job.featuredImage?.alt ||
                                                    job.jobTitle
                                                }
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className="information p-6 md:w-3/5 flex flex-col">
                                        <h1 className="font-bold text-2xl leading-7 text-[#338dcc] uppercase mb-6">
                                            {job.jobTitle}
                                        </h1>
                                        <div className="table mb-6">
                                            <table className="w-full opacity-80 border-t border-gray-300">
                                                <tbody>
                                                    {jobDetails.map(
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

                                <div className="job-description bg-white shadow-lg rounded-3xl mt-8 px-8 py-6 space-y-8">
                                    <div className="block">
                                        <h2 className="text-[#338dcc] font-bold text-2xl leading-6 mb-4">
                                            Mô tả công việc
                                        </h2>
                                        <div
                                            className="text-gray-700 text-base leading-7 font-normal"
                                            dangerouslySetInnerHTML={{
                                                __html: rewriteImageSrc(
                                                    convertLexicalToHTML({
                                                        data: job.description,
                                                    }),
                                                    process.env
                                                        .NEXT_PUBLIC_API_URL ||
                                                        ''
                                                ),
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
                                                __html: rewriteImageSrc(
                                                    convertLexicalToHTML({
                                                        data: job.requirements,
                                                    }),
                                                    process.env
                                                        .NEXT_PUBLIC_API_URL ||
                                                        ''
                                                ),
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
                                                __html: rewriteImageSrc(
                                                    convertLexicalToHTML({
                                                        data: job.benefits,
                                                    }),
                                                    process.env
                                                        .NEXT_PUBLIC_API_URL ||
                                                        ''
                                                ),
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
                                                __html: rewriteImageSrc(
                                                    convertLexicalToHTML({
                                                        data: job.application,
                                                    }),
                                                    process.env
                                                        .NEXT_PUBLIC_API_URL ||
                                                        ''
                                                ),
                                            }}
                                        />
                                    </div>

                                    <div className="block border-t border-gray-200 pt-4">
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
                                                href="mailto:minhminhtam.binhthuan@gmail.com"
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
                                    {otherJobs.map((job: JobItem) => (
                                        <Link
                                            href={`/tuyen-dung/${job.slug}`}
                                            className="item"
                                            key={job.id}
                                        >
                                            <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col group">
                                                <div className="img">
                                                    <div>
                                                        <div className="aspect-[4/3] relative">
                                                            <Image
                                                                src={`${process.env.NEXT_PUBLIC_API_URL}${job.featuredImage.url}`}
                                                                alt={
                                                                    job
                                                                        .featuredImage
                                                                        ?.alt ||
                                                                    job.jobTitle
                                                                }
                                                                fill
                                                                className="object-cover rounded-t-3xl"
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="font-bold text-lg text-[#338dcc] mb-4 uppercase line-clamp-3 group-hover:text-secondary transition-colors duration-300">
                                                        {job.jobTitle}
                                                    </h3>
                                                    <div className="info-list space-y-3">
                                                        <div className="info flex items-center">
                                                            <div className="icon mr-3 flex items-center">
                                                                <Image
                                                                    src="/images/tuyen-dung/calendar.svg"
                                                                    width={24}
                                                                    height={24}
                                                                    alt="calendar"
                                                                    className="w-6 h-6 text-[#338dcc]"
                                                                />
                                                            </div>
                                                            <div className="text-base text-black">
                                                                {formatDate(
                                                                    job.applicationDeadline
                                                                )}
                                                            </div>
                                                        </div>
                                                        <div className="info flex items-center">
                                                            <div className="icon mr-3 flex items-center">
                                                                <Image
                                                                    src="/images/tuyen-dung/location.svg"
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
                                        </Link>
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
