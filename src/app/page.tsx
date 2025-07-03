"use client";

// import CourseList from "@/components/courseList";
import UndoneModal from "@/components/modal/undoneModal";
import { MenuOutlined, SearchOutlined, StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import { logout } from "@/services/auth";
import Footer from "@/components/footer";
import { Button, Input, Spin } from "antd";
import SectionDisplay from "@/components/sectionDisplay";

interface CourseItem {
  id: number;
  title: string;
  type: string;
  content: string;
  render_type: string;
}
interface CourseSection {
  section_name: string;
  items: CourseItem[];
  grade: number
}
interface CourseData {
  id: number;
  title: string;
  curriculum: CourseSection[];
}

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading, logout } = useAuth();

  useEffect(() => {
    // Profile context
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");

    // Drive context
    localStorage.removeItem("folders");
    localStorage.removeItem("files");

    // Auth context
    localStorage.removeItem("isAuth");

    // Shop context
    localStorage.removeItem("cart");
    localStorage.removeItem("address");
    localStorage.removeItem("balance");
    localStorage.removeItem("order");
    localStorage.removeItem("voucher");
  }, []);

  const menus = ["Tất cả", "Thao tác số", "Xử lý tình huống"];

  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [selectedMenu, setSelectedMenu] = useState("Tất cả");
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(false);
  
  // Kiểm tra trạng thái đăng nhập
  useEffect(() => {
    // Chỉ thực hiện khi context đã kiểm tra xong (authLoading === false)
    if (!authLoading && !isAuthenticated) {
      router.push('/login');
    }
  }, [isAuthenticated, authLoading, router]);

  // GỌI API VỚI TOKEN XÁC THỰC
  useEffect(() => {
    if (isAuthenticated) {
      const fetchCourseData = async () => {
        setDataLoading(true);
        
        // Lấy token
        const token = localStorage.getItem('kdc_token');
        if (!token) {
          logout();
          return;
        }

        try {
          const response = await fetch("/api/wp-json/lp-custom/v1/course/16", {
            headers: {'Authorization': `Bearer ${token}` }
          });

          if (!response.ok) {
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
  }, [isAuthenticated, logout]); 

  const handleLogout = () => {
    logout(); 
  };
  
  const filteredCurriculum = courseData?.curriculum.map(section => {
    const filteredItems = section.items.filter(item => {
      const typeCheck = selectedMenu === "Tất cả" || item.type === selectedMenu;
      const searchCheck = item.title.toLowerCase().includes(search.toLowerCase());
      return typeCheck && searchCheck;
    });
    return { ...section, items: filteredItems };
  }).filter(section => section.items.length > 0);

  if (authLoading || !isAuthenticated) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip="Đang kiểm tra xác thực..." />
      </div>
    );
  }

  return (
    <div className="max-w-screen min-h-screen">
      <UndoneModal open={open} setOpen={setOpen} />
      {/* Header */}
      <div className="flex justify-between items-center bg-white border-b border-b-gray-200 py-3 px-20">
        <span className="text-orange-400 font-bold text-2xl">
          KDC PLAY & LEARN STATION
        </span>
        <div className="flex gap-10 items-center w-1/2">
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="!bg-orange-100 !text-orange-400 !border-orange-400 !rounded-full"
            placeholder="Tìm kiếm"
            size="large"
            prefix={<SearchOutlined />}
          />
        </div>
        {isAuthenticated ? (
          <Button variant="solid" color="orange" onClick={logout}>
            Đăng xuất
          </Button>
        ) : (
          <Button
            variant="solid"
            color="orange"
            onClick={() => router.push("/login")}
          >
            Đăng nhập
          </Button>
        )}
      </div>
	  {/* Body */}
      <div className="min-h-screen bg-orange-100 py-5 flex">
        <div className="md:flex hidden w-[8%] flex-col gap-5 items-center">
          <MenuOutlined />
          {menus.map((menu) => (
            <div onClick={() => setSelectedMenu(menu)} key={menu}
              className={`w-full flex flex-col gap-2 items-center justify-center hover:bg-orange-200 cursor-pointer py-2 ${
                menu === selectedMenu && "text-orange-400 bg-orange-200"
              }`}>
              <StarOutlined />
              <span className="text-sm text-center capitalize">{menu}</span>
            </div>
          ))}

          <Button
            variant="solid"
            color="orange"
            onClick={() => window.location.reload()}
          >
            Reload App
          </Button>
        </div>
        
        {/* Main Content */}
        <div className="bg-white flex flex-col flex-1">
          {dataLoading ? (
            <div className="flex justify-center items-center h-full">
              <Spin size="large" tip="Đang tải dữ liệu khóa học..." />
            </div>
          ) : (
            filteredCurriculum?.map((section) => (
              <SectionDisplay key={section.section_name} section={section} setOpenAction={setOpen} />
            ))
          )}
        </div>D
      </div>

      <Footer/>
    </div>
  );
}
