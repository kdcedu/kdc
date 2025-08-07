// components/drive/optionPopoverComponents/ShareMessageInput.tsx
import { Input, Checkbox } from "antd";
import clsx from "clsx";
import { useState } from "react";

interface ShareMessageInputProps {
  message: string;
  onChangeMessage: (msg: string) => void;
  notify: boolean;
  onToggleNotify: (value: boolean) => void;
}

export default function ShareMessageInput({
  message,
  onChangeMessage,
  notify,
  onToggleNotify,
}: ShareMessageInputProps) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="transition-all duration-500">
      <Checkbox checked={notify} onChange={(e) => onToggleNotify(e.target.checked)}>
        Thông báo cho những người này
      </Checkbox>

      {notify && (
        <div className="relative my-4">
          <label
            className={clsx(
              "absolute z-20 left-3 text-gray-500 transition-all pointer-events-none bg-white px-1",
              {
                "text-xs -top-2.5 !text-blue-600": focused || message,
                "text-base top-2.5": !focused && !message,
              }
            )}
          >
            Lời nhắn
          </label>
          <Input.TextArea
            rows={5}
            className="z-10 pt-5 border border-gray-500 hover:!border-black focus:!border-2 focus:!border-blue-600 transition-all duration-200"
            value={message}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            onChange={(e) => onChangeMessage(e.target.value)}
          />
        </div>
      )}
    </div>
  );
}
