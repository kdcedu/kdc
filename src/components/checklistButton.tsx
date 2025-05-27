import { CheckOutlined, CloseOutlined, ExclamationOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useMemo } from "react";

export interface Task {
  name: React.ReactNode;
  isDone: boolean;
}

export interface BigTask {
  title: string;
  taskList: Task[];
}

interface CheckListButtonProps {
  title: string;
  bigTaskList: BigTask[];
}

export default function CheckListButton({title, bigTaskList} : CheckListButtonProps) {
  const isFinish = useMemo(() => {
    return !bigTaskList.some(item => item.taskList.some(task => task.isDone === false))
  }, [bigTaskList])

  const CheckListContent = () => {
    return (
      bigTaskList.map((task) => {
        return <div key={task.title}>
          <div className="font-semibold w-full">{task.title}</div>
          {task.taskList.map((subTask, subIndex) => {
            return <div key={subIndex} className={`flex gap-3 p-2 ${subTask.isDone ? 'text-green-500' : 'text-red-500'}`}>
              <span>{subTask.isDone ? <CheckOutlined /> : <CloseOutlined />}</span>
            <span>{subTask.name}</span>
          </div>
        })}
      </div>
      })
    )
  }

  return <Popover content={<CheckListContent />} title={<div className="text-orange-400 text-lg w-full text-center">{title}</div>} trigger="click">
  <Button size="large" variant="solid" color={isFinish ? 'green' : 'orange'} shape="circle">{isFinish ? <CheckOutlined/> : <ExclamationOutlined />}</Button>
</Popover>
}