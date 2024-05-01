import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";

export default function ProjectEdit() {
  return (
    <div>
      <Breadcrumb
        breadcrumbs={[
          { label: "Projects", href: "/dashboard/projects" },
          {
            label: "Edit Project",
            href: `/dashboard/invoices/1/edit`,
            active: true,
          },
        ]}
      />
    </div>
  );
}
