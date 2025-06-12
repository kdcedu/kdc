import { Card, Image } from "antd";
import { useRouter } from "next/navigation";

interface LessonCardProps {
  grade: number;
  name: string;
  title: string;
  type: string;
  setOpen: (open: boolean) => void;
}

export default function LessonCard({ grade, name, title, type, setOpen }: LessonCardProps) {
  const router = useRouter();
  
    return (
    <Card
            onClick={() => {
              if (name !== "") router.push(name);
              else setOpen(true);
            }}
            hoverable
            className="w-[30%]"
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
              <div className="font-semibold text-base">Bài: {title}</div>
              <div className="text-gray-400">{type}</div>
            </div>
          </Card>
  );
}