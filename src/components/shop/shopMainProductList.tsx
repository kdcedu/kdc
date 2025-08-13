'use client';

import { useEffect, useState } from 'react';
import { Dropdown, Spin, Alert } from "antd";
import ProductCard from "./productCard";
import { fetchAllProducts, ProductAPIResponse } from '@/services/k8/product'; // Đảm bảo đường dẫn này đúng

export default function ShopMainProductList() {
    // State để lưu danh sách sản phẩm
    const [products, setProducts] = useState<ProductAPIResponse[]>([]);
    // State để quản lý trạng thái tải dữ liệu
    const [isLoading, setIsLoading] = useState<boolean>(true);
    // State để lưu lỗi nếu có
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Định nghĩa một hàm async bên trong useEffect để gọi API
        const getProducts = async () => {
            try {
                setIsLoading(true); // Bắt đầu tải
                const fetchedProducts = await fetchAllProducts();
                setProducts(fetchedProducts);
                setError(null); // Xóa lỗi nếu gọi thành công
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            } catch (err: any) {
                // Nếu có lỗi, lưu lại thông báo lỗi
                setError(err.message || 'Đã có lỗi xảy ra.');
            } finally {
                // Dù thành công hay thất bại, kết thúc trạng thái tải
                setIsLoading(false);
            }
        };

        getProducts(); // Gọi hàm để lấy dữ liệu
    }, []); // Mảng rỗng [] đảm bảo useEffect chỉ chạy 1 lần khi component được mount

    // Xử lý trạng thái đang tải
    if (isLoading) {
        return (
            <div className="w-4/5 flex justify-center items-center h-96">
                <Spin size="large" />
            </div>
        );
    }

    // Xử lý trạng thái lỗi
    if (error) {
        return (
            <div className="w-4/5 p-10">
                <Alert message="Lỗi" description={error} type="error" showIcon />
            </div>
        );
    }

    // Xử lý khi không có sản phẩm
    if (products.length === 0) {
        return (
            <div className="w-4/5 p-10">
                <Alert message="Chưa có sản phẩm nào." type="info" showIcon />
            </div>
        );
    }

    return (
        <div className="w-4/5">
            <div className="flex items-center justify-between px-10 py-6 border-b border-l border-gray-200">
                <span>{products.length} sản phẩm</span>
                <div className="flex items-center gap-2">
                    <span>Sắp xếp theo: </span>
                    <Dropdown menu={{ items: [/* Logic sắp xếp sẽ được thêm vào sau */] }} trigger={['click']}>
                        <span>Mới nhất</span>
                    </Dropdown>
                </div>
            </div>
            <div className="grid grid-cols-3">
                {products.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        id={product.id} 
                        title={product.title} 
                        price={product.price} 
                        color={product.color}
                        images={product.image_gallery} 
                        discount={product.discount}
                    />
                ))}
            </div>
        </div>
    );
}
