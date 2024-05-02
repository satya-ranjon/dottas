"use client";

import { motion } from "framer-motion";
import DropIndicator from "./dropIndicator";
import type { MenuProps } from "antd";
import dayjs from "dayjs";
import { Button, Dropdown } from "antd";
import { DeleteOutlined, EllipsisOutlined } from "@ant-design/icons";
import Link from "next/link";
import Image from "next/image";
import { useTasks } from "@/store/tasks";
import EditCard from "./editcard";
import { IUser } from "../projects/form";

interface CardProps {
  title: string;
  id: string;
  assigneds: IUser[];
  deadlines: string;
  projectId: string;
  column: string;
  handleDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    data: { title: string; id: string; column: string }
  ) => void;
}

const Card: React.FC<CardProps> = ({
  title,
  assigneds,
  id,
  deadlines,
  column,
  handleDragStart,
}) => {
  const { deleteTask } = useTasks();

  const handleDelete = async () => {
    await deleteTask(id);
  };

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <EditCard
          project={{
            title,
            id,
            assigneds,
            deadlines,
            column,
          }}
        />
      ),
    },
    {
      key: "2",
      label: (
        <div onClick={handleDelete} rel="noopener noreferrer">
          <DeleteOutlined /> Delete
        </div>
      ),
    },
  ];
  return (
    <>
      <DropIndicator beforeId={id} column={column} />
      <motion.div
        layout
        layoutId={id}
        draggable={true}
        onDragStart={(e: any) => handleDragStart(e, { title, id, column })}
        className="cursor-grab max-w-56 border border-neutral-400 bg-white p-3 active:cursor-grabbing">
        <div className="text-sm flex justify-between items-start gap-2 ">
          <Link href={`/dashboard/tasks/${id}/view`}>
            <h1 className="cursor-pointer">{title.slice(0, 50)}...</h1>
          </Link>

          <div className=" w-6">
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <Button
                icon={<EllipsisOutlined className=" text-xl rotate-90" />}
              />
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center mt-2">
          {deadlines && (
            <div className="text-xs text-neutral-500">
              {dayjs(deadlines).format("MMM D, YYYY")}
            </div>
          )}
          <div className="flex -space-x-1 overflow-hidden ">
            {assigneds.slice(0, 3).map((user: any) => (
              <Image
                key={user.id}
                width={28}
                height={28}
                className="inline-block rounded-full ring-2 ring-white"
                src={user.img}
                alt={`${user.name} profile picture`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Card;
