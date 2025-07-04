"use client";
import { StarOutlined } from '@ant-design/icons';
import LessonCard from './lessonCard';
import { CourseSectionAPIResponse } from '@/services/course'; 

interface SectionDisplayProps {
  section: CourseSectionAPIResponse;
  setOpenAction: (open: boolean) => void;
}

export default function SectionDisplay({ section, setOpenAction }: SectionDisplayProps) {
  return (
    <div className="pb-5 px-5">
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-3 items-center justify-center text-xl font-semibold bg-orange-100 text-orange-400 px-5 py-2 rounded-xl">
          <span><StarOutlined /></span>
          <span>{section.section_name}</span>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {section.items.map((item, index) => (
          <LessonCard key={index} grade={section.grade} name={item.content} title={item.title} type={""} render_type={item.render_type} setOpen={setOpenAction}/>
        ))}
      </div>
    </div>
  );
}
