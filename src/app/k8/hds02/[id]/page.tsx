'use client';

import { useEffect, useState } from 'react';
import { useParams } from "next/navigation";
import { Spin, Alert } from "antd";
import ProductDetail from "@/components/shop/productDetail";
import ShopBreadcrumb from "@/components/shop/ShopBreadcrumb";
import { fetchProductById, ProductAPIResponse } from '@/services/k8/product'; // Đảm bảo đường dẫn này đúng

export default function ProductDetailPage() {
    const params = useParams();
    // Lấy id từ URL, đảm bảo nó là một số
    const productId = +(params.id || 0)
    
    // State để lưu dữ liệu sản phẩm chi tiết
    const [product, setProduct] = useState<ProductAPIResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Chỉ gọi API khi có productId hợp lệ
        if (productId) {
            const getProductDetails = async () => {
                try {
                    setIsLoading(true);
                    const fetchedProduct = await fetchProductById(productId);
                    setProduct(fetchedProduct);
                    setError(null);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                } catch (err: any) {
                    setError(err.message || 'Không thể tải chi tiết sản phẩm.');
                } finally {
                    setIsLoading(false);
                }
            };

            getProductDetails();
        } else {
            setIsLoading(false);
            setError("ID sản phẩm không hợp lệ.");
        }
    }, [productId]); // useEffect sẽ chạy lại khi productId thay đổi

    // Xử lý trạng thái đang tải
    if (isLoading) {
        return (
            <div className="w-full flex justify-center items-center h-screen">
                <Spin size="large" />
            </div>
        );
    }

    // Xử lý trạng thái lỗi
    if (error) {
        return (
            <div className="p-10">
                <Alert message="Lỗi" description={error} type="error" showIcon />
            </div>
        );
    }

    // Xử lý khi không tìm thấy sản phẩm
    if (!product) {
        return (
            <div className="p-10">
                <Alert message="Sản phẩm không tồn tại." type="info" showIcon />
            </div>
        );
    }
    
    return (
        <div>
            <ShopBreadcrumb title={product.title} />
            <div className="flex flex-col">
                <ProductDetail product={product} />
            </div>
        </div>
    );
}
