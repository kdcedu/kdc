'use client'

import { message, Modal } from "antd";

import { Button } from "antd";
import CustomCheckBox from "../customCheckBox";
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
    reason: 'Bắt nạt - Quấy rối'
  },
  {
    id: 2,
    reason: 'Nội dung không phù hợp'
  },
  {
    id: 3,
    reason: 'Giả mạo người khác'
  },
  {
    id: 4,
    reason: 'Khác'
  },
]

export default function ReportModal({ isModalOpen, handleCancel, handleOk, isTrue }: ReportModalProps) {

  const [selectedReason, setSelectedReason] = useState<string[]>([]);

  const [renderKey, setRenderKey] = useState(0);

  const [messageApi, contextHolder] = message.useMessage();

  const resetCheckBox = () => {
    setRenderKey(prev => prev + 1);
    setSelectedReason([]);
  }

  const handleReport = () => {
    if (isTrue) {
      messageApi.open({
        type: 'success',
        content: <span className="text-green-500 text-xl">Bạn đã báo cáo đúng tin nhắn</span>,  
      });
    } else {
      messageApi.open({
        type: 'error',
        content: <span className="text-red-500 text-xl">Bạn đã báo cáo sai tin nhắn</span>,
      });
    }
    
    resetCheckBox();

    handleOk();
  }

  return (
    <Modal title={<div className="text-center text-xl text-orange-500">Tin nhắn này có vấn đề gì?</div>} open={isModalOpen} onCancel={() => {handleCancel(); resetCheckBox();}} footer={<div className="flex flex-col gap-2">
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
          <CustomCheckBox key={renderKey + '-' + reason.id} answer={false} isSubmit={false} />
        </div>
        <div className="font-semibold text-lg">{reason.reason}</div>
      </div>)}
    </div>
    </Modal>
  );
}
