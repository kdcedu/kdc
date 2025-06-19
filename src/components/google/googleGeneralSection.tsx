import { RightOutlined } from "@ant-design/icons";
    
export interface SectionRow {
    icon?: React.ReactNode;
    title: string;
    content: React.ReactNode;
    onClick?: () => void;
}

interface GoogleGeneralSectionProps {
 title: string;
 description?: string;
 rows: SectionRow[];
 bottomContent?: React.ReactNode;
}

export default function GoogleGeneralSection({title, description, rows, bottomContent}: GoogleGeneralSectionProps) {
    return (
        <div className="flex flex-col w-full border border-gray-200 pt-5 rounded-lg">
            <div className="flex flex-col gap-2 px-5">
                <span className="text-xl">{title}</span>
                {description && <span className="text-xs text-gray-500">{description}</span>}
            </div>
            {rows.map((row, index) => (
                <div key={index} onClick={row.onClick} className="px-5 grid grid-cols-2 items-center justify-between gap-x-10 py-5 border-b border-gray-300 cursor-pointer active:bg-gray-200">
                <div className="flex items-center gap-4">
                    {row.icon && <span>{row.icon}</span>}

                    <span>{row.title}</span>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{row.content}</span>

                    <span><RightOutlined /></span>
                </div>
            </div>
            ))}
            <div className="flex justify-start px-5 py-3">
                {bottomContent}
            </div>
        </div>
    )
}