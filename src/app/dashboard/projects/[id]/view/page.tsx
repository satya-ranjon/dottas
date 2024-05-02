import Activates from "@/components/projects/activates";
import Board from "@/components/taskboard/tasks";
import Breadcrumb from "@/components/ui/breadcrumb";
import {
  getAllUsers,
  getSingleProject,
  getSingleProjectActivates,
} from "@/lib/actions";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

export default async function SingleProject({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [project, activates, users] = await Promise.all([
    getSingleProject(id),
    getSingleProjectActivates(id),
    getAllUsers(),
  ]);

  if (!project) {
    notFound();
  }
  return (
    <div>
      <div className=" flex flex-col md:flex-row justify-start items-center gap-4">
        <Breadcrumb
          breadcrumbs={[
            { label: "Projects", href: "/dashboard/projects" },
            {
              label: project.name,
              href: `/dashboard/projects/${id}/view`,
              active: true,
            },
          ]}
        />
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
      </div>
      <div className=" flex flex-col xl:flex-row justify-start items-start gap-10">
        <Board id={id} users={users} />
        <div className=" w-full xl:w-[400px] mt-10">
          <Activates activates={activates} />
        </div>
      </div>
    </div>
  );
}
