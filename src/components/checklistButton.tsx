import { CheckOutlined, CloseOutlined, ExclamationOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useMemo } from "react";

export interface Task {
  name: React.ReactNode;
  isDone: boolean;
}

interface CheckListButtonProps {
  title: string;
  taskList: Task[];
}

export default function CheckListButton({title, taskList} : CheckListButtonProps) {
  const isFinish = useMemo(() => {
    return !taskList.some(item => item.isDone === false)
  }, [taskList])

  const CheckListContent = () => {
    return (
      taskList.map((task, index) => <div key={index} className={`flex gap-3 p-2 ${task.isDone ? 'text-green-500' : 'text-red-500'}`}>
        <span>{task.isDone ? <CheckOutlined /> : <CloseOutlined />}</span>
        <span>{task.name}</span>
      </div>)
    )
  }

  return <Popover content={<CheckListContent />} title={<div className="text-orange-400 text-lg w-full text-center">{title}</div>} trigger="click">
  <Button size="large" variant="solid" color={isFinish ? 'green' : 'orange'} shape="circle">{isFinish ? <CheckOutlined/> : <ExclamationOutlined />}</Button>
</Popover>
}