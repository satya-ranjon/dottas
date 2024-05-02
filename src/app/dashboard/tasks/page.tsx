import Board from "@/components/taskboard/tasks";
import { lusitana } from "@/components/ui/font";
import { getAllUsers } from "@/lib/actions";
import React from "react";

const Tasks = async () => {
  const users = await getAllUsers();
  return (
    <div>
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Tasks</h1>
      </div>

      <Board id={" "} users={users} />
    </div>
  );
};

export default Tasks;
