interface ShopBreadcrumbProps {
    title?: string;
    
}

export default function ShopBreadcrumb({title}: ShopBreadcrumbProps) {
    return <div className="w-full flex items-center gap-2 p-5 border-b border-b-gray-200 text-lg">
        <span className="text-gray-500">Trang chủ</span>
        <span>/</span>
        <span className={`${title && "text-gray-500"}`}>Tất cả sản phẩm</span>
        {title && <>
        <span>/</span>
        <span>{title}</span>
        </>}
    </div>
}