import Breadcrumb from "@/components/ui/breadcrumb";
import React from "react";

const SingleProject = () => {
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
};

export default SingleProject;
