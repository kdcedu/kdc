import { Button, Image, Modal } from "antd";

interface NotificationModalProps {
  open: boolean;
  onCancel: () => void;
  isTrue: boolean;
  handleNext: () => void;
  isEnd: boolean;
  trueResult?: string;
  falseResult?: string;
  trueContent?: string;
  falseContent?: string;
}

export default function NotificationModal({
  open,
  onCancel,
  isTrue,
  handleNext,
  isEnd,
  trueResult,
  falseResult,
  trueContent,
  falseContent
}: NotificationModalProps) {
  const TrueContent = (
    <div className="w-full flex flex-col items-center gap-2 ">
      <div className="flex items-center justify-center w-full p-2 rounded-lg bg-green-100 gap-2 text-xl font-semibold text-green-500">
        Chúc mừng bạn đã đưa ra lựa chọn đúng
      </div>
      <div className="w-1/2">
        <Image preview={false} alt="Result" src={trueResult} />
      </div>
      <div className="font-semibold text-center">
          {trueContent}
        </div>
    </div>
  );

  const FalseContent = (
    <div className="w-full flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 w-full justify-center bg-red-100 p-2 rounded-lg text-red-500 text-xl font-semibold">
        Tiếc quá bạn đã đưa ra lựa chọn sai
      </div>
      <div className="w-1/2">
        <Image preview={false} alt="Result" src={falseResult} />
      </div>
      
      <div className="font-semibold text-center">
          {falseContent}
        </div>
    </div>
  );

  return (
    <Modal
      key={isTrue ? 'true-content' : 'false-content'}
      open={open}
      onCancel={onCancel}
      footer={
        <div className="flex w-full justify-center gap-2">
          <Button
            variant="solid"
            color="green"
            onClick={handleNext}
          >
            {isEnd ? "Hoàn thành" : "Bài tiếp theo"}
          </Button>
          <Button variant="outlined" color="default" onClick={onCancel}>
            Làm lại
          </Button>
        </div>
      }
      closable={false}
    >
      {isTrue ? TrueContent : FalseContent}
    </Modal>
  );
}
