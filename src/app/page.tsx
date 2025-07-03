"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import UndoneModal from "@/components/modal/undoneModal";
import { MenuOutlined, SearchOutlined, StarOutlined } from "@ant-design/icons";
import { Button, Input, Spin } from "antd";
import SectionDisplay from "@/components/sectionDisplay";

// Định nghĩa kiểu dữ liệu (giữ nguyên)
interface CourseItem {
  id: number;
  title: string;
  type: string;
  slug: string;
}
interface CourseSection {
  section_name: string;
  items: CourseItem[];
}
interface CourseData {
  id: number;
  title: string;
  curriculum: CourseSection[];
}

export default function Home() {
  const router = useRouter();
  // 1. LẤY ĐẦY ĐỦ STATE VÀ HÀM TỪ AUTHCONTEXT
  const { isAuthenticated, loading: authLoading, logout } = useAuth();

  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    localStorage.removeItem("folders");
    localStorage.removeItem("files");
    localStorage.removeItem("isAuth");
    localStorage.removeItem("cart");
  }, []);

  const menus = ["Tất cả", "Thao tác số", "Xử lý tình huống"];

  // State cho dữ liệu khóa học và bộ lọc (giữ nguyên)
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [dataLoading, setDataLoading] = useState(true); // Đổi tên để tránh nhầm lẫn
  const [selectedMenu, setSelectedMenu] = useState("Tất cả");
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  
  // 2. BẢO VỆ ROUTE: Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    // Chỉ thực hiện khi context đã kiểm tra xong (authLoading === false)
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // 3. GỌI API VỚI TOKEN XÁC THỰC
  useEffect(() => {
    // Chỉ gọi API nếu người dùng đã được xác thực
    if (isAuthenticated) {
      const fetchCourseData = async () => {
        setDataLoading(true);
        
        // Lấy token từ localStorage
        const token = localStorage.getItem('kdc_token');
        if (!token) {
          logout(); // Nếu không có token, logout và chuyển về trang login
          return;
        }

        try {
          const response = await fetch("https://wp.dongtrantd.io.vn/wp-json/lp-custom/v1/course/16", {
            headers: {
              // Gắn token vào header
              'Authorization': `Bearer ${token}`
            }
          });

          if (!response.ok) {
            // Nếu token hết hạn hoặc không hợp lệ (lỗi 403), tự động đăng xuất
            if (response.status === 403) {
              logout();
            }
            throw new Error("Failed to fetch course data");
          }
          const data: CourseData = await response.json();
          setCourseData(data);
        } catch (error) {
          console.error(error);
        } finally {
          setDataLoading(false);
        }
      };
      fetchCourseData();
    }
  }, [isAuthenticated, logout]); // Chạy lại khi trạng thái đăng nhập thay đổi

  // 4. CẬP NHẬT HÀM ĐĂNG XUẤT
  const handleLogout = () => {
    logout(); // Gọi hàm logout từ context
  };
  
  // Lọc dữ liệu (giữ nguyên)
  const filteredCurriculum = courseData?.curriculum.map(section => {
    const filteredItems = section.items.filter(item => {
      const typeCheck = selectedMenu === "Tất cả" || item.type === selectedMenu;
      const searchCheck = item.title.toLowerCase().includes(search.toLowerCase());
      return typeCheck && searchCheck;
    });
    return { ...section, items: filteredItems };
  }).filter(section => section.items.length > 0);

  // 5. HIỂN THỊ SPINNER TRONG KHI CHỜ XÁC THỰC
  // Giao diện sẽ không hiển thị gì cho đến khi việc kiểm tra auth hoàn tất
  if (authLoading || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip="Đang kiểm tra xác thực..." />
      </div>
    );
  }

  // Giao diện chính của trang
  return (
    <div className="max-w-screen min-h-screen">
      <UndoneModal open={open} setOpen={setOpen} />
      {/* Header */}
      <div className="flex justify-between items-center bg-white border-b border-b-gray-200 py-3 px-20">
        <span className="text-orange-400 font-bold text-2xl">
          KDC PLAY & LEARN STATION
        </span>
        <div className="flex gap-10 items-center w-1/2">
          <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Tìm kiếm bài học..." size="large" prefix={<SearchOutlined />} />
        </div>
        {isAuthenticated ? (
          <Button type="primary" danger onClick={handleLogout}>Đăng xuất</Button>
        ) : (
          <Button type="primary" onClick={() => router.push("/login")}>Đăng nhập</Button>
        )}
      </div>
      {/* Body */}
      <div className="min-h-screen bg-orange-100 pt-5 flex">
        {/* Sidebar menu */}
        <div className="md:flex hidden w-[8%] flex-col gap-5 items-center">
          <MenuOutlined />
          {["Tất cả", "lesson", "h5p"].map((menu) => (
            <div onClick={() => setSelectedMenu(menu)} key={menu}
              className={`w-full flex flex-col gap-2 items-center justify-center hover:bg-orange-200 cursor-pointer py-2 ${
                menu === selectedMenu && "text-orange-400 bg-orange-200"
              }`}>
              <StarOutlined />
              <span className="text-sm text-center capitalize">{menu}</span>
            </div>
          ))}
        </div>
        
        {/* Nội dung chính */}
        <div className="bg-white flex flex-col flex-1">
          {dataLoading ? ( // Dùng state loading của data
            <div className="flex justify-center items-center h-full">
              <Spin size="large" tip="Đang tải dữ liệu khóa học..." />
            </div>
          ) : (
            filteredCurriculum?.map((section) => (
              <SectionDisplay key={section.section_name} section={section} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
