"use client";

import '@ant-design/v5-patch-for-react-19';
import UndoneModal from "@/components/modal/undoneModal";
import { MenuOutlined, SearchOutlined, StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import Footer from "@/components/footer";
import { Button, Input, Spin } from "antd";
import SectionDisplay from "@/components/sectionDisplay";
import { useMemo } from 'react';
import { CourseDataAPIResponse, fetchAllCourseDetails } from '@/services/course';

export default function Home() {
  const router = useRouter();
  const { isAuthenticated, loading: authLoading, logout } = useAuth();

  // remove later
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

  const [coursesData, setCoursesData] = useState<CourseDataAPIResponse[]>([]);
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
        try {
          const data = await fetchAllCourseDetails();
          setCoursesData(data);
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

  const filteredCourses = useMemo(() => {
    if (!coursesData) return [];

    return coursesData.map(course => {
      const filteredCurriculum = course.curriculum.map(section => {
        const filteredItems = section.items.filter(item => {
          const searchCheck = item.title.toLowerCase().includes(search.toLowerCase());
          const categoryCheck = selectedMenu === "Tất cả" || (item.categories && item.categories.includes(selectedMenu));
          return searchCheck && categoryCheck;
        });
        return { ...section, items: filteredItems };
      }).filter(section => section.items.length > 0);

      return { ...course, curriculum: filteredCurriculum };
    }).filter(course => course.curriculum.length > 0);
  }, [coursesData, selectedMenu, search]);

  if (authLoading || (isAuthenticated && dataLoading)) {
    const tipMessage = authLoading ? "Đang kiểm tra xác thực..." : "Đang tải dữ liệu khóa học...";
    return (
      <div className="flex justify-center items-center h-screen">
        <Spin size="large" tip={tipMessage}>
          <div style={{ height: '100px', width: '100px', background: 'white' }}></div>
        </Spin>
      </div>
    );
  }

  if (!isAuthenticated) return null;

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
        <div className="bg-white flex flex-col flex-1 p-5">
          {filteredCourses.length > 0 ? (
            <div className="space-y-1">
              {filteredCourses.map((course) => (
                <div key={course.id}>
                  <div className="flex justify-between items-center py-5">
                    <div className="flex gap-3 items-center justify-center text-xl font-semibold bg-orange-100 text-orange-400 px-5 py-2 rounded-xl">
                      <span><StarOutlined /></span>
                      {/* Hiển thị tên của Khóa học (Khối) */}
                      <span>{course.title}</span>
                    </div>
                  </div>

                  {/* Vùng chứa danh sách các bài học */}
                  <div className="flex gap-5 flex-wrap">
                    {course.curriculum.map((section) => (
                      // SectionDisplay giờ sẽ render trực tiếp các LessonCard
                      <SectionDisplay
                        key={section.section_name}
                        section={section}
                        grade={course.grade_level}
                        setOpenAction={setOpen}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center h-full">
              <span>Không tìm thấy nội dung phù hợp.</span>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
