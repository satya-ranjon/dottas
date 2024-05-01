import React from "react";
import { Metadata } from "next";
import { lusitana } from "@/components/ui/font";
import { Button, Input } from "antd";
import { PlusOutlined, SearchOutlined } from "@ant-design/icons";
import ProjectsTable from "@/components/projects/table";
import { getAllProject } from "@/lib/actions";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

export const metadata: Metadata = {
  title: "Projects",
};

export default async function Projects() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["projects"],
    queryFn: getAllProject,
  });

  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Projects</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Input
          size="large"
          placeholder="Search projects..."
          prefix={<SearchOutlined />}
        />
        <Button icon={<PlusOutlined />} size="large" type="primary">
          Create Project
        </Button>
      </div>
      <div className=" md:w-[465px] w-full lg:w-full overflow-y-auto">
        <HydrationBoundary state={dehydrate(queryClient)}>
          <ProjectsTable />
        </HydrationBoundary>
      </div>
    </div>
  );
}
