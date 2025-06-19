import { Button } from "antd";

export default function GoogleWaiting2faConfirm() {
    return <div className="w-1/2 flex flex-col gap-20">
        <div className="flex flex-col gap-3">
            <span className="text-xl">Kiểm tra Thiết bị di động của bạn</span>
            <span className="text-sm text-gray-500">Google đã gửi thông báo đến thiết bị di động của bạn. Nhấn vào Có trên thông báo để xác nhận danh tính của bạn.</span>
        </div>
        <div className="flex gap-2 justify-end">
          <Button size="large" variant="link" color="blue">
            Thử cách khác
          </Button>
        </div>
      </div>
}