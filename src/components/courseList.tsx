import { ROUTES } from "@/constant/route";
import { StarOutlined } from "@ant-design/icons";
import { Button, Card, Image, Modal } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface CourseListProps {
  grade: number;
  filter?: string;
}

export default function CourseList({ grade, filter }: CourseListProps) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <div className="pb-5 px-5">
      <Modal
        onCancel={() => setOpen(false)}
        open={open}
        title={
          <span className="text-orange-400 text-center">
            Bài tập này chưa hoàn thiện, bạn vui lòng chọn bài khác nhé!
          </span>
        }
        footer={
          <div>
            <Button className="w-full" variant="solid" color="orange" onClick={() => setOpen(false)}>
              OK
            </Button>
          </div>
        }
      />
      <div className="flex justify-between items-center py-5">
        <div className="flex gap-3 items-center justify-center text-xl font-semibold bg-orange-100 text-orange-400 px-5 py-2 rounded-xl">
          <StarOutlined />
          Khối {grade}
        </div>
      </div>

      <div className="flex gap-5">
        {ROUTES.filter((item) => {
          const gradeCheck = item.grade === grade;
          if (filter === "Tất cả") return gradeCheck;
          return gradeCheck && item.type === filter;
        }).map((route, index) => (
          <Card
            onClick={() => {
              if (route.name !== "") router.push(route.name);
              else setOpen(true);
            }}
            key={index}
            hoverable
            className="w-[15%]"
            styles={{
              body: {
                padding: 10,
              },
            }}
            cover={
              <div className="overflow-hidden">
                <Image
                  alt="Thumbnail"
                  preview={false}
                  src={`/images/k${grade}.jpg`}
                />
              </div>
            }
          >
            <div className="flex flex-col gap-2">
              <div className="font-semibold text-base">{route.title}</div>
              <div className="text-gray-400">{route.type}</div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
