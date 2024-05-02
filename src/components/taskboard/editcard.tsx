"use client";

import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, DatePicker, Modal, Select, Space } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { use, useEffect, useState } from "react";
import type { DatePickerProps, SelectProps } from "antd";
import dayjs from "dayjs";
import { getAllUsers } from "@/lib/actions";
import Image from "next/image";
import { IUser } from "../projects/form";
import { useParams } from "next/navigation";
import { useTasks } from "@/store/tasks";

const EditCard = ({ project }) => {
  const { updateTasks } = useTasks();
  const [users, setUsers] = useState<IUser[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deadlines, setDatelines] = useState(project.deadlines);
  const [title, setTitle] = useState(project.title);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const { id: projectId } = useParams();

  const options: SelectProps["options"] = users.map((user) => {
    return { label: user.name, value: user.id, data: user };
  });

  const handleChange = (value: string[]) => {
    const filteredUsers = users.filter((user) => value.includes(user.id));
    setSelectedUsers(filteredUsers);
  };

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDatelines(dateString);
  };

  const getUser = async () => {
    await getAllUsers().then((data) => {
      setUsers(data);
    });
  };
  useEffect(() => {
    getUser();
  }, []);

  const handleAddTask = async () => {
    const data = {
      id: project.id,
      projectId,
      column: project.column,
      title,
      deadlines,
      assigneds: selectedUsers,
    };
    await updateTasks(project.id, data).then(() => {
      setIsModalOpen(false);
    });
  };

  return (
    <div>
      {/* <Button
        icon={<PlusOutlined />}
        onClick={() => setIsModalOpen(true)}
        block>
        Edit Task
      </Button> */}
      <div onClick={() => setIsModalOpen(true)} rel="noopener noreferrer">
        <EditOutlined /> Edit
      </div>

      <Modal
        title="ADD TASK"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer="">
        <div className=" space-y-3">
          <TextArea
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            rows={4}
            placeholder="Descriptions"
          />
          <Select
            id="users"
            size="large"
            mode="multiple"
            style={{ width: "100%" }}
            placeholder="Select Team Members"
            defaultValue={project.assigneds.map((user) => user.id)}
            onChange={handleChange}
            options={options}
            optionRender={(option) => (
              <Space>
                <Image
                  width={28}
                  height={28}
                  className="inline-block rounded-full ring-2 ring-white"
                  src={option.data.data.img}
                  alt={`${option.data.data.name} profile picture`}
                />
                {option.data.data.name}
              </Space>
            )}
          />
          <DatePicker
            format={"YYYY/MM/DD"}
            defaultValue={dayjs(deadlines, "YYYY/MM/DD")}
            placeholder="Dateline"
            onChange={onChange}
          />

          <Button
            onClick={handleAddTask}
            type="primary"
            icon={<EditOutlined />}
            block>
            Edit Task
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default EditCard;
