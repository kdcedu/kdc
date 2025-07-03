"use client";

import { useRouter } from 'next/navigation';
import { StarOutlined } from '@ant-design/icons';

// Nhận lại các kiểu dữ liệu từ component cha
interface CourseItem {
  id: number;
  title: string;
  slug: string;
  // ...
}

interface CourseSection {
  section_name: string;
  items: CourseItem[];
}

export default function SectionDisplay({ section }: { section: CourseSection }) {
  const router = useRouter();

  // Chuyển đến trang chi tiết của khóa học, và có thể thêm hash để cuộn đến item
  const handleItemClick = (itemId: number) => {
    // URL sẽ là /course/16#item-43
    // Hoặc nếu bạn có trang riêng cho mỗi item: /course/item/43
    router.push(`/course/16#item-${itemId}`);
  };

  return (
    <div className="pb-5 px-5">
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-3 items-center justify-center text-xl font-semibold bg-orange-100 text-orange-400 px-5 py-2 rounded-xl">
          <span><StarOutlined /></span>
          <span>{section.section_name}</span>
        </div>
      </div>
      <div className="flex gap-5 flex-wrap">
        {section.items.map((item) => (
          <div
            key={item.id}
            className="w-full md:w-1/4 p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => handleItemClick(item.id)}
          >
            {/* Có thể thêm ảnh đại diện cho item ở đây */}
            <h3 className="font-semibold text-lg">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
