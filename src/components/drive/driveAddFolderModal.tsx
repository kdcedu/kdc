import { Button, Input, Modal } from "antd";
import { useState } from "react";

interface DriveAddFolderModalProps {
  open: boolean;
  onClose: () => void;
  onFinish: (name: string) => void;
}

export default function DriveAddFolderModal({
  open,
  onClose,
  onFinish,
}: DriveAddFolderModalProps) {
  const [name, setName] = useState("");

  return (
    <Modal
      title="Thư mục mới"
      open={open}
      onOk={onClose}
      onCancel={onClose}
      footer={
        <div className="flex gap-2 justify-end">
          <Button variant="text" color="blue" onClick={onClose}>
            Hủy
          </Button>
          <Button variant="text" color="blue" onClick={() => onFinish(name)}>
            Tạo
          </Button>
        </div>
      }
    >
      <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tên thư mục" />
    </Modal>
  );
}
