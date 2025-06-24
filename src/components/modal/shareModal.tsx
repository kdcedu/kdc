import { UserOutlined } from "@ant-design/icons";
import { Button, Image, Input, Modal } from "antd";

interface ShareModalProps {
    open: boolean;
    onCancel: () => void;
    onFinish: () => void;
    isAdult?: boolean;
}

export default function ShareModal({ open, onCancel, onFinish, isAdult }: ShareModalProps) {
  return <Modal
  styles={{
    header: {
      borderBottom: '1px solid #ccc',
      padding: '10px 20px',
      textAlign: 'center',
    },
    content: {
      padding: 0
    }
  }}
    title={<span className="text-xl">Chia sẻ</span>}
    open={open}
    onCancel={onCancel}
    footer={null}
    closable={false}
  >
    <div className="flex flex-col gap-5 p-5">
        <div className="flex items-center gap-2">
                <Image preview={false} src={isAdult ? "/avatars/Avatar_MinhKhoi.jpg" : "/icons/Bin.svg"} alt="Avatar" width={50} />
                <div className="flex flex-col gap-2">
                    <span className="font-semibold">{isAdult ? "Minh Khôi" : "Nguyễn Bin"}</span>
                    <div className="flex gap-2">
                        <Button size="small" variant="filled" color="default">Bảng feed</Button>
                        <Button size="small" variant="filled" color="default" icon={<UserOutlined />}>Bạn bè</Button>
                    </div>
                </div>

        </div>
        <Input className="!outline-none !border-none" placeholder="Hãy nói gì đó về nội dung này (không bắt buộc)" />
        <div className="flex justify-end gap-2">
            <Button variant="solid" color="blue" onClick={onFinish}>Chia sẻ ngay</Button>
            <Button variant="outlined" color="default" onClick={onCancel}>Đóng</Button>
        </div>
    </div>
  </Modal>
}