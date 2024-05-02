import EditProjectForm from "@/components/projects/form";
import Breadcrumb from "@/components/ui/breadcrumb";
import { getAllUsers, getSingleProject } from "@/lib/actions";
import { notFound } from "next/navigation";
import React from "react";

export default async function ProjectEdit({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const [project, users] = await Promise.all([
    getSingleProject(id),
    getAllUsers(),
  ]);

  if (!project) {
    notFound();
  }
  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: "Projects", href: "/dashboard/projects" },
          {
            label: "Edit Project",
            href: `/dashboard/projects/1/edit`,
            active: true,
          },
        ]}
      />
      <EditProjectForm project={project} users={users} />
    </div>
  );
}
