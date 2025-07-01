import { RightOutlined } from "@ant-design/icons";

interface InformationCardProps {
    title: string;
    description: string;
}

export default function InformationCard({title, description}: InformationCardProps) {
    return <div className="w-full flex items-center justify-between">
        <div className="flex flex-col">
            <span className="font-semibold">{title}</span>
            <span className="text-xs text-gray-500">{description}</span>
        </div>
        <span><RightOutlined /></span>
    </div>
}