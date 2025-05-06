"use client";

import CourseList from "@/components/courseList";
import { MenuOutlined, SearchOutlined, SettingOutlined, StarOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

export default function Home() {
  useEffect(() => {
    localStorage.removeItem('user');
    localStorage.removeItem('avatar');
  }, [])

  const menus = ['Tất cả', 'Thao tác số', 'Xử lý tình huống']

  const [selectedMenu, setSelectedMenu] = useState('Tất cả');

  return (
    <div className="max-w-screen min-h-screen">
      <div className="flex justify-between items-center bg-white border-b border-b-gray-200 py-3 px-20">
        <span className="text-orange-400 font-bold text-2xl">KDC PLAYGROUND</span>
        <div className="flex gap-10">
          <div className="bg-orange-100 text-orange-400 w-72 flex items-center justify-between px-5 py-2 rounded-full">
            <MenuOutlined />
            <SearchOutlined />
          </div>
          <div className="flex justify-center items-center w-12 text-orange-400 rounded-full bg-orange-100">
            <SettingOutlined />
          </div>
        </div>
      </div>

      <div className="bg-orange-100 pt-5 flex">
        <div className="w-[8%] flex flex-col gap-5 items-center">
          <MenuOutlined />

          {menus.map(menu => <div onClick={() => setSelectedMenu(menu)} key={menu} className={`w-full flex flex-col gap-2 items-center justify-center hover:bg-orange-200 cursor-pointer py-2 ${menu === selectedMenu && 'text-orange-400 bg-orange-200'}`}>
            <StarOutlined />
            <span className="text-sm text-center">{menu}</span>
          </div>)}
        </div>
        <div className="bg-white flex flex-col flex-1">
        <CourseList grade={1} filter={selectedMenu}/>

<CourseList grade={2} filter={selectedMenu}/>

<CourseList grade={3} filter={selectedMenu}/>

<CourseList grade={4} filter={selectedMenu}/>

<CourseList grade={5} filter={selectedMenu}/>
        </div>
        
      </div>

      


      {/* <div className="flex flex-1 items-center w-full gap-5">

        <div className="m-auto p-10 rounded-3xl">
          {pin === '' ? <>
            <div className="font-semibold text-xl text-orange-500 text-center mb-10">
            Danh sách Bài thực hành
          </div>

          <div>
            {ROUTES.map(route => <div key={route.name} onClick={() => {
              setPin(route.pin);
              setLink(route.name)
            }} className="bg-orange-500 text-white px-3 py-3 rounded-xl mb-5 text-center cursor-pointer active:opacity-70 active:scale-95 text-lg">
              {route.title}
            </div>)}
          </div>
          </> : <>
            <CustomPIN to={link} password={pin} />
          </>}
          
        </div>
      </div> */}
    </div>
  );
}
