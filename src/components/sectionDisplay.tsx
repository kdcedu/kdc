"use client";
import LessonCard from './lessonCard';
import { CourseSectionAPIResponse } from '@/services/course'; 

interface SectionDisplayProps {
  section: CourseSectionAPIResponse;
  setOpenAction: (open: boolean) => void;
  grade: number;
}

export default function SectionDisplay({ section, setOpenAction , grade }: SectionDisplayProps) {
   return (
    <>
      {section.items.map((item, index) => (
        <LessonCard 
            key={`${grade}-${item.id}-${index}`} // Key nên là duy nhất
            grade={grade} 
            name={item.content} 
            title={item.title} 
            categories={item.categories} 
            render_type={item.render_type} 
            setOpen={setOpenAction}
        />
      ))}
    </>
  );
}
