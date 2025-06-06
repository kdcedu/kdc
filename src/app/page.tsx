"use client";

import CourseList from "@/components/courseList";
import {
  MenuOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
  }, []);

  const menus = ["Tất cả", "Thao tác số", "Xử lý tình huống"];

  const [selectedMenu, setSelectedMenu] = useState("Tất cả");

  return (
    <div className="max-w-screen min-h-screen">
      <div className="flex justify-between items-center bg-white border-b border-b-gray-200 py-3 px-20">
        <span className="text-orange-400 font-bold text-2xl">
          KDC PLAY&LEARN STATION
        </span>
        <div className="flex gap-10">
          <div className="hidden md:flex bg-orange-100 text-orange-400 w-72 items-center justify-between px-5 py-2 rounded-full">
            <MenuOutlined />
            <SearchOutlined />
          </div>
        </div>
        <Button variant="solid" color="orange" onClick={() => window.location.reload()}>
          Reload App
        </Button>
      </div>

      <div className="bg-orange-100 pt-5 flex">
        <div className="md:flex hidden w-[8%] flex-col gap-5 items-center">
          <MenuOutlined />

          {menus.map((menu) => (
            <div
              onClick={() => setSelectedMenu(menu)}
              key={menu}
              className={`w-full flex flex-col gap-2 items-center justify-center hover:bg-orange-200 cursor-pointer py-2 ${
                menu === selectedMenu && "text-orange-400 bg-orange-200"
              }`}
            >
              <StarOutlined />
              <span className="text-sm text-center">{menu}</span>
            </div>
          ))}
        </div>
        <div className="bg-white flex flex-col flex-1">
          <CourseList grade={1} filter={selectedMenu} />

          <CourseList grade={2} filter={selectedMenu} />

          <CourseList grade={3} filter={selectedMenu} />

          <CourseList grade={4} filter={selectedMenu} />

          <CourseList grade={5} filter={selectedMenu} />
        </div>
      </div>
    </div>
  );
}
