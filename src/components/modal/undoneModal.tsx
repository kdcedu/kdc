import { Button, Modal } from "antd";

interface UndoneModalProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export default function UndoneModal({ open, setOpen }: UndoneModalProps) {
  return (
    <Modal
        onCancel={() => setOpen(false)}
        open={open}
        title={
          <span className="text-orange-400 text-center">
            Bài tập này chưa hoàn thiện, bạn vui lòng chọn bài khác nhé!
          </span>
        }
        footer={
          <div>
            <Button className="w-full" variant="solid" color="orange" onClick={() => setOpen(false)}>
              OK
            </Button>
          </div>
        }
      />
  );
}