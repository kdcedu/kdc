import ShopBreadCum from "./ShopBreadcrumb";
import ShopSideBar from "./shopSideBar";
import ShopMainProductList from "./shopMainProductList";

export default function ShopProductListPage() {
    return <div className="w-full">
        <ShopBreadCum/>
        <div className="flex w-full">
            <ShopSideBar/>
            <ShopMainProductList/>
        </div>
        
    </div>
}