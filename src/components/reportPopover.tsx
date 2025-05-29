import { MoreOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import ReportModal from "./modal/reportModal";
import { useState } from "react";

interface ReportPopoverProps {
  answer?: boolean;
  handleConfirm: () => void;
  icon?: React.ReactNode;
  isUserReport?: boolean;
}

export default function ReportPopover({ answer, handleConfirm, icon, isUserReport }: ReportPopoverProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    if(answer || isUserReport) {
      handleConfirm();
    }
    setIsModalOpen(false);
  };

  const ReportContent = (
    <div className="flex flex-col gap-2 font-semibold">
      <div className="hover:bg-gray-100 p-2 rounded-lg text-orange-500 cursor-pointer" onClick={() => {setIsModalOpen(true); setOpen(false)}}>Báo cáo</div>
      <div className="text-gray-400 p-2 rounded-lg">Trả lời</div>
      <div className="text-gray-400 p-2 rounded-lg">Chuyển tiếp</div>
    </div>
  );

  const UserReport = (
    <div className="flex flex-col gap-2 font-semibold">
      <div className="text-gray-400 p-2 rounded-lg">Trang cá nhân</div>
      <div className="text-gray-400 p-2 rounded-lg">Tắt thông báo</div>
      <div className="hover:bg-gray-100 p-2 rounded-lg text-orange-500 cursor-pointer" onClick={() => {setIsModalOpen(true); setOpen(false)}}>Báo cáo</div>
    </div>
  )

  return (
    <>
      <ReportModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} isTrue={answer} />
      <div className="flex items-center justify-center w-1/3">
        <Popover open={open} content={isUserReport ? UserReport : ReportContent} onOpenChange={() => setOpen(false)} trigger="click">
          <Button shape="circle" variant="filled" color="default" onClick={() => setOpen(true)}>{icon ? icon : <MoreOutlined />}</Button>
        </Popover>
      </div>
    </>
  );
}
