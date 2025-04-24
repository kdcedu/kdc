'use client'

import { message, Modal } from "antd";

import { Button } from "antd";
import CustomCheckBox from "./customCheckBox";
import { useState } from "react";

interface ReportModalProps {
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
  isTrue?: boolean;
}

const reportReasons = [
  {
    id: 1,
    reason: 'Ngôn từ không phù hợp'
  },
  {
    id: 2,
    reason: 'Bắt nạt'
  },
  {
    id: 3,
    reason: 'Nội dung không phù hợp'
  },
  {
    id: 4,
    reason: 'Giả mạo'
  },
]

export default function ReportModal({ isModalOpen, handleCancel, handleOk, isTrue }: ReportModalProps) {

  const [selectedReason, setSelectedReason] = useState<string[]>([]);

  const [messageApi, contextHolder] = message.useMessage();

  const handleReport = () => {
    if (isTrue) {
      messageApi.open({
        type: 'success',
        content: <span className="text-green-500 text-xl">Bạn đã báo cáo đúng tin nhắn bắt nạt</span>,  
      });
    } else {
      messageApi.open({
        type: 'error',
        content: <span className="text-red-500 text-xl">Bạn đã báo cáo sai tin nhắn bắt nạt</span>,
      });
    }

    handleOk();
  }
  return (
    <Modal title={<div className="text-center text-xl text-orange-500">Tin nhắn này có vấn đề gì?</div>} open={isModalOpen} onCancel={handleCancel} footer={<div className="flex flex-col gap-2">
      <Button disabled={selectedReason.length === 0} className="w-full" variant="solid" color="orange" onClick={handleReport}>Gửi</Button>
    </div>}>
      {contextHolder}
    <div className="flex flex-col gap-5 ml-16 py-5"> 
      {reportReasons.map(reason => <div key={reason.id} className="flex items-center">
        <div className="w-fit" onClick={() => {
        if (selectedReason.includes(reason.reason)) {
          setSelectedReason(selectedReason.filter(r => r !== reason.reason));
        } else {
          setSelectedReason([...selectedReason, reason.reason]);
        }
      }}>
          <CustomCheckBox key={reason.id} answer={false} isSubmit={false} />
        </div>
        <div className="font-semibold text-lg">{reason.reason}</div>
      </div>)}
    </div>
    </Modal>
  );
}
