import { CheckCircleFilled, CloseCircleFilled } from "@ant-design/icons";
import { Button, Modal } from "antd";

interface NotificationModalProps {
  open: boolean;
  onCancel: () => void;
  isTrue: boolean;
  answer?: boolean;
  handleNext: () => void;
  isEnd: boolean;
}

export default function NotificationModal({
  open,
  onCancel,
  isTrue,
  handleNext,
  isEnd,
  answer,
}: NotificationModalProps) {
  const TrueContent = (
    <div className="flex flex-col items-center gap-2 ">
      <div className="flex items-center gap-2 text-xl font-semibold text-green-500">
        Chúc mừng bạn đã đưa ra lựa chọn đúng
      </div>
      {answer ? <>
        <div className="text-lg text-orange-400 font-semibold">
              Bạn đã truy cập đúng vào:
            </div>
            <ul className="flex flex-col gap-3 text-green-400">
              <li className="flex items-center gap-5">
                <CheckCircleFilled />
                <div>Những chia sẻ thú vị của bạn bè</div>
              </li>
              <li className="flex items-center gap-5">
                <CheckCircleFilled />
                <div>Những khoảnh khắc đáng nhớ với gia đình</div>
              </li>
            </ul>
      </> : <>
      <div className="text-lg text-orange-400 font-semibold">
              Bạn đã bỏ qua đúng đường dẫn độc lại:
            </div>
            <ul className="flex flex-col gap-3 text-green-400">
            <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Ngăn chặn đánh cắp tài khoản cá nhân</div>
              </li>
              <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Ngăn chặn đánh cắp tiền trong tài khoản</div>
              </li>
              <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Ngăn chặn lây nhiễm các phần mềm độc hại</div>
              </li>
            </ul>
      </>}
    </div>
  );

  const FalseContent = (
    <div className="flex flex-col items-center gap-2">
      <div className="flex items-center gap-2 w-full justify-center bg-red-100 p-2 rounded-lg text-red-500 text-2xl font-semibold">
        Tiếc quá bạn đã đưa ra lựa chọn sai
      </div>
      <div className="flex flex-col items-center gap-5 mb-5">
        {answer ? (
          <>
            <div className="text-lg text-orange-400 font-semibold">
              Bạn đã bỏ qua:
            </div>
            <ul className="flex flex-col gap-3 text-red-400">
              <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Những chia sẻ thú vị của bạn bè</div>
              </li>
              <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Những khoảnh khắc đáng nhớ với gia đình</div>
              </li>
            </ul>
          </>
        ) : (
          <>
            <div className="text-lg text-orange-400 font-semibold">
              Những rủi ro bạn có thể gặp phải:
            </div>
            <ul className="flex flex-col gap-3 text-red-400">
              <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Bị đánh cắp tài khoản cá nhân</div>
              </li>
              <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Bị đánh cắp tiền trong tài khoản</div>
              </li>
              <li className="flex items-center gap-5">
                <CloseCircleFilled />
                <div>Bị lây nhiễm các phần mềm độc hại</div>
              </li>
            </ul>
          </>
        )}
      </div>
    </div>
  );

  return (
    <Modal
      open={open}
      onCancel={onCancel}
      footer={
        <div className="flex w-full justify-center gap-2">
          <Button
            variant="solid"
            color="green"
            onClick={() => {
              handleNext();
              onCancel();
            }}
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
