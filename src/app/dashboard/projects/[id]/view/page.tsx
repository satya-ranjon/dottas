import Breadcrumb from "@/components/ui/breadcrumb";
import { getSingleProject } from "@/lib/actions";
import { notFound } from "next/navigation";
import React from "react";

export default async function SingleProject({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;
  const [project] = await Promise.all([getSingleProject(id)]);

  if (!project) {
    notFound();
  }
  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: "Projects", href: "/dashboard/projects" },
          {
            label: "Project Name",
            href: `/dashboard/invoices/1/edit`,
            active: true,
          },
        ]}
      />
    </div>
  );
}
