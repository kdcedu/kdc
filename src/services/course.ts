'use client';

import axios from 'axios';

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

const API_PROXY_PATH = '/api';

/**
 * Lấy dữ liệu khóa học từ API.
 * @param courseId ID của khóa học.
 * @param token Token xác thực JWT.
 * @returns Promise<CourseDataAPIResponse> Dữ liệu khóa học.
 * @throws Error Nếu API phản hồi lỗi hoặc token không hợp lệ.
 */
export async function fetchCourseData(
  courseId: number,
  token: string
): Promise<CourseDataAPIResponse> {
  const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

  if (!API_BASE_URL) {
    console.error("Lỗi cấu hình: NEXT_PUBLIC_API_URL không được định nghĩa.");
    throw new Error("Lỗi cấu hình ứng dụng.");
  }

  try {
    const response = await axios.get(
      `${API_PROXY_PATH}/wp-json/lp-custom/v1/course/${courseId}`,
      {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      }
    );

    return response.data as CourseDataAPIResponse;

  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        if (error.response.status === 403) {
          throw new Error("Forbidden: Invalid token or insufficient permissions.");
        }
        const errorMessage = error.response.data?.message || `Failed to fetch course data: ${error.response.status} ${error.response.statusText}`;
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
