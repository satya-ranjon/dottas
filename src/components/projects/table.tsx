"use client";

import Image from "next/image";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { deleteProject, getAllProject } from "@/lib/actions";

export default function ProjectsTable() {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getAllProject,
  });

  const handleDelete = async (id: any) => {
    await deleteProject(id);
  };

  return (
    <div className="mt-6 flow-root ">
      <div className="inline-block min-w-full align-middle">
        <div className=" bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {projects.map((project: any) => (
              <div key={project.id} className="mb-2 w-full  bg-white p-4">
                <div className=" border-b pb-4 flex justify-between items-start">
                  <h1 className="mb-2">{project.name}</h1>
                  <div className="flex -space-x-1 overflow-hidden">
                    {project.users.slice(0, 2).map((user: any) => (
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
                <div className="flex w-full items-center justify-between pt-4">
                  <span>{project.createAt}</span>

                  <div className="flex justify-end gap-2">
                    <Link href={`/dashboard/projects/${project.id}/view`}>
                      <Button size="middle" icon={<EyeOutlined />} />
                    </Link>
                    <Link href={`/dashboard/projects/${project.id}/edit`}>
                      <Button size="middle" icon={<EditOutlined />} />{" "}
                    </Link>

                    <Button size="middle" icon={<DeleteOutlined />} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full  text-gray-900 md:table">
            <thead className=" text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Name
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Users
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {projects?.map((project: any) => (
                <tr
                  key={project.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none">
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <h1>{project.name}</h1>
                  </td>

                  <td className="whitespace-nowrap px-3 py-3 min-w-40">
                    <div className="flex -space-x-1 overflow-hidden">
                      {project.users.slice(0, 5).map((user: any) => (
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
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {project.createAt}
                  </td>

                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <Link href={`/dashboard/projects/${project.id}/view`}>
                        <Button size="middle" icon={<EyeOutlined />} />
                      </Link>
                      <Link href={`/dashboard/projects/${project.id}/edit`}>
                        <Button size="middle" icon={<EditOutlined />} />{" "}
                      </Link>

                      <Button
                        onClick={() => handleDelete(project.id)}
                        size="middle"
                        icon={<DeleteOutlined />}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
