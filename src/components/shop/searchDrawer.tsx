import { CloseOutlined, SearchOutlined } from "@ant-design/icons";
import { Drawer } from "antd";
import { Button, Input } from "antd";
import { useState } from "react";

export default function SearchDrawer() {
    const [open, setOpen] = useState(false);
    return <>
    <Button type="text" onClick={() => setOpen(true)} icon={<span className="text-xl"><SearchOutlined /></span>} />

    <Drawer
    closable={false}
    onClose={() => setOpen(false)}
    open={open}
    height={100}
    placement="top">
        <div className="flex items-center gap-10 px-10">
            <Input placeholder="Search" size="large" suffix={<SearchOutlined />}/>
            <Button type="text" onClick={() => setOpen(false)} icon={<span className="text-xl"><CloseOutlined /></span>}/>
        </div>
    </Drawer>
    </>
}