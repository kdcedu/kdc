'use client'

import { CheckCircleOutlined, MessageOutlined, MobileOutlined } from "@ant-design/icons";
import { Button, Image, Modal } from "antd";

interface Google2faModalProps {
    open: boolean;
    onClose: () => void;
    title: string;
    onConfirm?: () => void;
}

export default function Google2faModal({open, onClose, title, onConfirm}: Google2faModalProps) {
    return (
        <Modal styles={{content: {padding: 20}}} title={<span className="text-3xl font-normal">{title}</span>} open={open} onCancel={onClose} footer={null} closable={false}>
            <div className={`flex flex-col ${onConfirm ? "gap-10" : "gap-2"}`}>
            {!onConfirm && <div className="w-full flex items-center justify-center">
                <Image src="/images/k7/lock_check.png" alt="2fa" preview={false} width={150}/>
            </div>}
            <span className="text-sm text-gray-500">{onConfirm ? "Khi tắt tính năng Xác minh 2 bước, bạn cũng sẽ xoá lớp bảo mật bổ sung trong tài khoản của mình." : "Khi đăng nhập, bạn sẽ được yêu cầu hoàn tất bước thứ hai an toàn nhất. Do đó, hãy đảm bảo rằng thông tin này luôn được cập nhật"}</span>
            {!onConfirm && <div className="grid grid-cols-2 p-8 gap-y-8">
                <div className="flex items-center gap-3">
                    <span className="text-3xl"><MobileOutlined /></span>
                    <span>Lời nhắc của Google</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl"><CheckCircleOutlined /></span>
                    <span>1 thiết bị</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-3xl"><MessageOutlined /></span>
                    <span>Số điện thoại</span>
                </div>

                <div className="flex items-center gap-3">
                    <span className="text-green-500 text-xl"><CheckCircleOutlined /></span>
                    <span>0345 *** ***</span>
                </div>
            </div>}

            {!onConfirm ? <div className="flex w-full justify-end">
                <Button onClick={onClose} size="large" className="!rounded-full" variant="solid" color="blue">Xong</Button>
            </div> : <div className="flex w-full justify-end gap-5">
                <Button onClick={onClose} size="large" variant="link" color="blue">Hủy</Button>
                <Button onClick={onConfirm} size="large" variant="link" color="blue">Tắt</Button>
            </div>}
            </div>
            
        </Modal>
    )
}