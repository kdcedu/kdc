'use client';

import axios from 'axios';
import { apiClient } from '@/lib/axios';

export interface ProductAPIResponse {
    id: number;
    title: string;
    description: string;
    price: number;
    size: string;
	color: string[];
	quantity: number;
    discount: number;
    featured_image_url: string;
    image_gallery: string[];
}


/**
 * Lấy danh sách tóm tắt của tất cả các sản phẩm từ API.
 * @returns {Promise<ProductAPIResponse[]>} Một mảng chứa tất cả sản phẩm.
 * @throws {Error} Nếu API phản hồi lỗi.
 */
export async function fetchAllProducts(): Promise<ProductAPIResponse[]> {
    try {
        const response = await apiClient.get<ProductAPIResponse[]>('/wp-json/k8/hds02/products');
        return response.data;
    } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorMessage = error.response.data?.message || `Không thể tải danh sách sản phẩm: ${error.response.status} ${error.response.statusText}`;
                throw new Error(errorMessage);
            } else if (error.request) {
                throw new Error('Không nhận được phản hồi từ máy chủ. Vui lòng kiểm tra kết nối mạng.');
            } else {
                // Lỗi xảy ra khi thiết lập request
                throw new Error('Lỗi thiết lập yêu cầu tải danh sách sản phẩm: ' + error.message);
            }
        } else if (error instanceof Error) {
            // Các lỗi khác (ví dụ: lỗi JavaScript)
            throw error;
        }
        // Lỗi không xác định
        throw new Error('Đã xảy ra lỗi không xác định khi tải danh sách sản phẩm.');
    }
}

/**
 * Lấy dữ liệu chi tiết của một sản phẩm từ API.
 * @param {number} productId ID của sản phẩm.
 * @returns {Promise<ProductAPIResponse>} Dữ liệu chi tiết của sản phẩm.
 * @throws {Error} Nếu API phản hồi lỗi (ví dụ: sản phẩm không tồn tại).
 */
export async function fetchProductById(productId: number): Promise<ProductAPIResponse> {
    try {
        // Sử dụng endpoint tùy chỉnh bạn đã tạo: /wp-json/k8/hds02/products/<id>
        const response = await apiClient.get<ProductAPIResponse>(`/wp-json/k8/hds02/products/${productId}`);
        return response.data;
    } catch (error: unknown) {
        // Xử lý lỗi một cách chi tiết
        if (axios.isAxiosError(error)) {
            if (error.response) {
                const errorMessage = error.response.data?.message || `Không thể tải sản phẩm ID ${productId}: ${error.response.status} ${error.response.statusText}`;
                throw new Error(errorMessage);
            } else if (error.request) {
                throw new Error('Không nhận được phản hồi từ máy chủ. Vui lòng kiểm tra kết nối mạng.');
            } else {
                throw new Error('Lỗi thiết lập yêu cầu tải sản phẩm: ' + error.message);
            }
        } else if (error instanceof Error) {
            throw error;
        }
        throw new Error(`Đã xảy ra lỗi không xác định khi tải sản phẩm ID ${productId}.`);
    }
}
