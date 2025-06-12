'use client'

import { Button, Modal } from "antd";

interface DeletePopupProps {
    open: boolean;
    onClose: () => void;
    onFinish: () => void;
    name: string;
}

export default function DeletePopup({ open, onClose, onFinish, name }: DeletePopupProps) {
    return (
        <Modal
            title={null}
            closable={false}
            open={open}
            onOk={onFinish}
            onCancel={onClose}
            maskClosable={true}
            footer={
                <div className="flex gap-2 justify-end">
                    <Button variant="text" color="blue" onClick={onClose}>Hủy</Button>
                    <Button variant="solid" color="blue" onClick={onFinish}>Xác nhận</Button>
                </div>
            }
        >
            <span className="text-2xl block pt-2 pb-4">Chuyển vào thùng rác?</span>
            <p>&quot;{name}&quot; sẽ bị xóa vĩnh viễn sau 30 ngày. Cộng tác viên vẫn có thể xem và tạo bản sao của các tệp trên KDC Drive cho đến khi các tệp này bị xóa vĩnh viễn.</p>
        </Modal>
    )
}    