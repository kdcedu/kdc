import { Button, Input, Modal } from "antd";
import { useState } from "react";

interface DriveAddFolderModalProps {
    open: boolean;
    onClose: () => void;
    onFinish: (name: string) => void;
}

export default function DriveAddFolderModal({ open, onClose, onFinish }: DriveAddFolderModalProps) {
    const [name, setName] = useState('');

    return (
        <Modal title="Thêm thư mục" open={open} onOk={onClose} onCancel={onClose} footer={<Button variant="solid" color="blue" onClick={() => onFinish(name)}>Thêm</Button>}>
            <Input value={name} onChange={(e) => setName(e.target.value)} />
        </Modal>
    )
}