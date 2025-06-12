'use client'

import { DeleteOutlined, MoreOutlined } from "@ant-design/icons";
import { Popover } from "antd";
import { useState } from "react";

interface OptionPopoverProps {
    onFinish: () => void;
}

export default function OptionPopover({ onFinish }: OptionPopoverProps) {
    const [open, setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation();
        setOpen(!open);
    };

    return (
        <Popover
            title={null}
            trigger="click"
            placement="bottom"
            styles={{
                body: {
                    padding: 0,
                },
            }}
            open={open}
            onOpenChange={setOpen}
            content={
                <div className="flex gap-2 p-3 active:opacity-80" onClick={(e) => {
                        e.stopPropagation();
                        onFinish();
                        setOpen(false);
                    }}>
                    <span><DeleteOutlined /></span>
                    <span>Chuyển vào thùng rác</span>
                </div>
            }
        >
           <MoreOutlined onClick={handleClick}/>
        </Popover>
    )
}