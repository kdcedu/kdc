import { Card, Image } from "antd";
import { useRouter } from "next/navigation";

interface LessonCardProps {
  grade: number | 1;
  name: string;
  title: string;
  type: string;
  setOpen: (open: boolean) => void;
  render_type: string;
}

export default function LessonCard({ grade, name, title, type, setOpen, render_type }: LessonCardProps) {
  const router = useRouter();
  if (!grade) grade = 1;
  return (
    <Card
      onClick={() => {
        switch (render_type) {
          case 'frontend':
            if (name) {
              router.push(name);
            } else {
              setOpen(true);
            }
            break;
          case 'h5p':
            if (name) {
              router.push(`/h5p/${name}`);
            } else {
              setOpen(true);
            }
            break;
          default:
            setOpen(true);
            break;
        }
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
            src={`/images/k${grade <= 5 ? grade : 1}.jpg`}
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
