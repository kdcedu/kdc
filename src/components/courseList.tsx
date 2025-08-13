import { ROUTES } from "@/constant/route";
import { StarOutlined } from "@ant-design/icons";
import { useState } from "react";
// import LessonCard from "./lessonCard";
import UndoneModal from "./modal/undoneModal";

interface CourseListProps {
  grade: number;
  filter?: string;
  search?: string;
}

export default function CourseList({ grade, filter, search }: CourseListProps) {

  const [open, setOpen] = useState(false);

  const lesson = ROUTES.filter((item) => {
    const gradeCheck = item.grade === grade;
    if (filter === "Tất cả") return gradeCheck;
    return gradeCheck && item.type === filter;
  }).filter((item) => item.name.toLowerCase().includes(search?.toLowerCase() || "") || item.title.toLowerCase().includes(search?.toLowerCase() || ""));

  return (
    <div className="pb-5 px-5">
      <UndoneModal open={open} setOpen={setOpen}/>
      {lesson.length !== 0 && <div className="flex justify-between items-center py-5">
        <div className="flex gap-3 items-center justify-center text-xl font-semibold bg-orange-100 text-orange-400 px-5 py-2 rounded-xl">
          <span><StarOutlined /></span>
          <span>Khối {grade}</span>
        </div>
      </div>}

      <div className="flex gap-5 flex-wrap">
        {/* {lesson.map((route, index) => (
          <LessonCard key={index} grade={grade} name={route.name} title={route.title} type={route.type} setOpen={setOpen} />
        ))} */}
      </div>
    </div>
  );
}
