'use client';

import axios from 'axios';
import { apiClient } from '@/lib/axios';

export interface CourseItemAPIResponse {
    id: number;
    title: string;
    type: string;
    slug: string;
    description: string;
    content: string;
    render_type: 'frontend' | 'h5p';
}

export interface CourseSectionAPIResponse {
    section_name: string;
    grade: number;
    items: CourseItemAPIResponse[];
}

export interface CourseDataAPIResponse {
    id: number;
    title: string;
    slug: string;
    description: string;
    status: string;
    curriculum: CourseSectionAPIResponse[];
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
            `/wp-json/lp-custom/v1/course/${courseId}` // Đường dẫn tương đối với baseURL của apiClient
        );
        return response.data as CourseDataAPIResponse;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) { // axios.isAxiosError sẽ hoạt động sau khi import axios
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
