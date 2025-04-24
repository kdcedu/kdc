import { MoreOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import ReportModal from "./reportModal";
import { useState } from "react";

interface ReportPopoverProps {
  answer?: boolean;
  setReportIds: () => void;
}

export default function ReportPopover({ answer, setReportIds }: ReportPopoverProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [open, setOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleOk = () => {
    if(answer) {
      setReportIds();
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

  return (
    <>
      <ReportModal isModalOpen={isModalOpen} handleCancel={handleCancel} handleOk={handleOk} isTrue={answer} />
      <div className="flex items-center justify-center w-1/3">
        <Popover open={open} content={ReportContent} onOpenChange={() => setOpen(false)} trigger="click">
          <Button shape="circle" variant="filled" color="default" onClick={() => setOpen(true)}><MoreOutlined /></Button>
        </Popover>
      </div>
    </>
  );
}
