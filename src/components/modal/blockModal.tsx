import { Button, Modal } from "antd";

interface BlockModalProps {
  selectedUser: string;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleOk: () => void;
}

export default function BlockModal({ selectedUser, isModalOpen, handleCancel, handleOk }: BlockModalProps) {
  return (
    <Modal title={<div className="text-center text-xl">{`Chặn ${selectedUser}`}</div>} open={isModalOpen} onCancel={handleCancel} footer={<div className="flex flex-col gap-2">
      <Button className="w-full" variant="solid" color="red" onClick={handleOk}>Chặn</Button>
      <Button className="w-full" variant="outlined" color="red" onClick={handleCancel}>Hủy</Button>
    </div>}>
      <div>Bạn sẽ không thể nhận được tin nhắn từ {selectedUser} nữa.</div>
      <div>Bạn có muốn tiếp tục không?</div>
    </Modal>
  );
}
