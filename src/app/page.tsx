"use client";

// import CourseList from "@/components/courseList";
import '@ant-design/v5-patch-for-react-19';
import UndoneModal from "@/components/modal/undoneModal";
import { MenuOutlined, SearchOutlined, StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Footer from "@/components/footer";
import { Button, Input, Spin } from "antd";
import SectionDisplay from "@/components/sectionDisplay";

// Import hàm fetchCourseData từ services
import { fetchCourseData as getCourseData, CourseDataAPIResponse } from '@/services/course'; 

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

  const [courseData, setCourseData] = useState<CourseDataAPIResponse  | null>(null);
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
    // Chỉ gọi API nếu đã xác thực và không trong quá trình authLoading
    if (isAuthenticated && !authLoading) { 
      const fetchInitialCourseData = async () => {
        setDataLoading(true);

        const token = localStorage.getItem('kdc_token');
        if (!token) {
          logout();
          setDataLoading(false);
          return;
        }

        try {
          const data = await getCourseData(16, token);
          setCourseData(data);
        } catch (error) {
          console.error("Error fetching course data:", error);
          if (error instanceof Error && error.message.includes("403")) {
             logout();
          }
        } finally {
          setDataLoading(false);
        }
      };
      fetchInitialCourseData();
    }
  }, [isAuthenticated, authLoading, logout]); 

  const filteredCurriculum = courseData?.curriculum.map(section => {
    const filteredItems = section.items.filter(item => {
      const typeCheck = selectedMenu === "Tất cả" || item.type === selectedMenu;
      const searchCheck = item.title.toLowerCase().includes(search.toLowerCase());
      return typeCheck && searchCheck;
    });
    return { ...section, items: filteredItems };
  }).filter(section => section.items.length > 0);

 if (authLoading || (isAuthenticated && dataLoading)) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip={authLoading ? "Đang kiểm tra xác thực..." : "Đang tải dữ liệu khóa học..."}>
          <div style={{ height: '100px', width: '100px', background: 'white' }}></div>
        </Spin>
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
              className={`w-full flex flex-col gap-2 items-center justify-center hover:bg-orange-200 cursor-pointer py-2 ${menu === selectedMenu && "text-orange-400 bg-orange-200"
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
            <div className="bg-white flex flex-col flex-1 relative mt-10">
              <Spin spinning={dataLoading} size="large" tip="Đang tải dữ liệu khóa học...">
                <div className="h-full">
                  {dataLoading ? (
                    <div className="flex justify-center items-center h-full">
                    </div>
                  ) : (
                    filteredCurriculum?.map((section) => (
                      <SectionDisplay key={section.section_name} section={section} setOpenAction={setOpen} />
                    ))
                  )}
                </div>
              </Spin>
            </div>
          ) : (
            filteredCurriculum?.map((section) => (
              <SectionDisplay key={section.section_name} section={section} setOpenAction={setOpen} />
            ))
          )}
        </div>D
      </div>

      <Footer />
    </div>
  );
}
