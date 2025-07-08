'use client';

import axios from 'axios';
import { apiClient } from '@/lib/axios';

export interface CourseItemAPIResponse {
    id: number;
    title: string;
    type: string;
    content: string;
    render_type: 'frontend' | 'h5p';
}

export interface CourseSectionAPIResponse {
    section_name: string;
    items: CourseItemAPIResponse[];
}

export interface CourseDataAPIResponse {
    id: number;
    title: string;
    slug: string;
    description: string;
    image: string;
    grade_level: number;
    curriculum: CourseSectionAPIResponse[];
}

export interface CourseSummaryAPIResponse {
    id: number;
    title: string;
    slug: string;
    grade_level: number;
}

/**
 * Lấy dữ liệu khóa học từ API.
 * @param courseId ID của khóa học.
 * @returns Promise<CourseDataAPIResponse> Dữ liệu khóa học.
 * @throws Error Nếu API phản hồi lỗi
 */
export async function fetchCourseData(courseId: number): Promise<CourseDataAPIResponse> {
    try {
        const response = await apiClient.get(
            `/wp-json/lp-custom/v1/course/${courseId}`
        );
        return response.data as CourseDataAPIResponse;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                if (error.response.status === 403) {
                    throw new Error("Forbidden: Token hợp lệ nhưng không có đủ quyền truy cập.");
                }
                const errorMessage = error.response.data?.message || `Không thể tải dữ liệu khóa học: ${error.response.status} ${error.response.statusText}`;
                throw new Error(errorMessage);
            } else if (error.request) {
                throw new Error('Không nhận được phản hồi từ máy chủ khi tải dữ liệu khóa học. Vui lòng kiểm tra kết nối mạng.');
            } else {
                throw new Error('Lỗi thiết lập yêu cầu tải khóa học: ' + error.message);
            }
        } else if (error instanceof Error) {
            throw error;
        }
        throw new Error('Đã xảy ra lỗi không xác định khi tải dữ liệu khóa học.');
    }
}

/**
 * Sẽ được dùng ở trang chủ.
 * @returns Promise<CourseDataAPIResponse[]>
 */
export async function fetchAllCourseDetails(): Promise<CourseDataAPIResponse[]> {
    try {
        const summaryResponse = await apiClient.get<CourseSummaryAPIResponse[]>('/wp-json/lp-custom/v1/courses');
        const coursesSummary = summaryResponse.data;

        if (!coursesSummary || coursesSummary.length === 0) {
            return [];
        }

        const detailPromises = coursesSummary.map(course =>
            fetchCourseData(course.id)
        );

        const allCoursesDetails = await Promise.all(detailPromises);
        
        return allCoursesDetails.sort((a, b) => a.grade_level - b.grade_level);

    } catch (error) {
        console.error("Lỗi khi tải toàn bộ dữ liệu khóa học:", error);
        throw new Error("Không thể tải được danh sách các khóa học.");
    }
}
