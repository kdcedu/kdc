"use client";

import CourseList from "@/components/courseList";
import UndoneModal from "@/components/modal/undoneModal";
import {
  MenuOutlined,
  SearchOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Button, Input } from "antd";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("avatar");
    localStorage.removeItem("folders");
    localStorage.removeItem("files");
  }, []);

  const menus = ["Tất cả", "Thao tác số", "Xử lý tình huống"];

  const [selectedMenu, setSelectedMenu] = useState("Tất cả");

  const [search, setSearch] = useState('');

  const [open, setOpen] = useState(false);

  return (
    <div className="max-w-screen min-h-screen">
      <UndoneModal open={open} setOpen={setOpen}/>
      <div className="flex justify-between items-center bg-white border-b border-b-gray-200 py-3 px-20">
        <span className="text-orange-400 font-bold text-2xl">
          KDC PLAY&LEARN STATION
        </span>
        <div className="flex gap-10 items-center w-1/2">
          <Input value={search} onChange={(e) => setSearch(e.target.value)} className="!bg-orange-100 !text-orange-400 !border-orange-400 !rounded-full" placeholder="Tìm kiếm" size="large" prefix={<SearchOutlined />} />
        </div>
        <Button variant="solid" color="orange" onClick={() => window.location.reload()}>
          Reload App
        </Button>
      </div>

      <div className="min-h-screen bg-orange-100 pt-5 flex">
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
          <CourseList grade={1} filter={selectedMenu} search={search}/>

          <CourseList grade={2} filter={selectedMenu} search={search}/>

          <CourseList grade={3} filter={selectedMenu} search={search}/>

          <CourseList grade={4} filter={selectedMenu} search={search}/>

          <CourseList grade={5} filter={selectedMenu} search={search}/>
        </div> 
      </div>
    </div>
  );
}
