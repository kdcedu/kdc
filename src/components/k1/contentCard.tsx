import { ContentType } from "@/constant/content";
import { Image } from "antd";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

interface ContentCardProps {
    title: string;
    type: ContentType;
    id: string;
}

export default function ContentCard({ title, type, id }: ContentCardProps) {
    const imageSrc = useMemo(() => {
        switch (type) {
            case 'Image':
                return '/apps/photo.svg';
            case 'Video':
                return '/apps/youtube.svg';
            case 'Audio':
                return '/apps/voice.svg';
        }
    }, [type]);

    const router = useRouter();

    return (
        <div className="w-full flex flex-col justify-start items-center gap-2 active:bg-gray-200 cursor-pointer" onClick={() => {router.push(`/k1/hds02/${id}`)}}>
            <Image src={imageSrc} width={150} alt="Icon" preview={false} />
            <span className="font-semibold line-clamp-2">{title}</span>
        </div>
    )
}