// components/drive/optionPopoverComponents/ShareHeader.tsx
import { ArrowLeftOutlined, QuestionCircleOutlined, SettingOutlined } from "@ant-design/icons";

interface ShareHeaderProps {
  showHandleShared: boolean;
  onBack?: () => void;
}

export default function ShareHeader({ showHandleShared, onBack }: ShareHeaderProps) {
  return (
    <div className="flex justify-between items-center">
      <div>
        {showHandleShared && (
          <ArrowLeftOutlined className="mr-5" onClick={onBack} />
        )}
        <span className="text-lg">Chia sẻ file</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer">
          <QuestionCircleOutlined className="text-gray-500 text-base" />
        </div>
        <div className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-200 cursor-pointer">
          <SettingOutlined className="text-gray-500 text-base" />
        </div>
      </div>
    </div>
  );
}
