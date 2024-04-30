import React from "react";
import { Metadata } from "next";
import { lusitana } from "@/components/ui/font";

export const metadata: Metadata = {
  title: "Invoices",
};

const Projects = () => {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Projects</h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        {/* <Search placeholder="Search invoices..." /> */}

        {/* <CreateInvoice /> */}
      </div>
    </div>
  );
};

export default Projects;
