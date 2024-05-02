"use client";

import { updateProject } from "@/lib/actions";
import { Button, Input, Select, SelectProps, Space } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export interface IUser {
  id: string;
  name: string;
  img: string;
}
export interface IProject {
  id: string;
  createAt: string;
  name: string;
  users: IUser[];
}

export default function EditProjectForm({
  project,
  users,
}: {
  project: IProject;
  users: IUser[];
}) {
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([
    ...project.users,
  ]);
  const [projectName, setProjectName] = useState<string>(project.name);
  const defaultUsers = project.users.map((user) => user.id);

  const options: SelectProps["options"] = users.map((user) => {
    return { label: user.name, value: user.id, data: user };
  });

  const handleChange = (value: string[]) => {
    const filteredUsers = users.filter((user) => value.includes(user.id));
    setSelectedUsers(filteredUsers);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: IProject = {
      ...project,
      name: projectName,
      users: selectedUsers,
    };
    await updateProject(project.id, data);
  };

  return (
    <form onSubmit={handleSubmit} className=" bg-gray-50 p-4 md:p-6 space-y-3">
      <div className="">
        <label htmlFor="name" className="mb-2 block text-sm font-medium">
          Project Name
        </label>
        <Input
          value={projectName}
          id="name"
          size="large"
          placeholder="Project Name"
          onChange={(e) => setProjectName(e.target.value)}
        />
      </div>
      <div className="">
        <label htmlFor="users" className="mb-2 block text-sm font-medium">
          Select Team Members
        </label>
        <Select
          id="users"
          size="large"
          mode="multiple"
          style={{ width: "100%" }}
          placeholder="Select Team Members"
          defaultValue={defaultUsers}
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
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link href="/dashboard/projects">
          <Button size="large">Cancel </Button>
        </Link>
        <Button htmlType="submit" size="large" type="primary">
          Edit Project
        </Button>
      </div>
    </form>
  );
}
