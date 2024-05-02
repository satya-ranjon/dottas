"use client";
import { useEffect, useState } from "react";
import Column from "./column";
import { Task, useTasks } from "@/store/tasks";

const Board = ({ id }: { id?: string }) => {
  const { tasks, getTasks, setTasks } = useTasks();

  useEffect(() => {
    getTasks(id);
  }, []);

  return (
    <div className="flex h-full w-full gap-3 overflow-auto  ">
      <Column
        title="To Do"
        column="To Do"
        headingColor="text-neutral-500"
        cards={tasks}
        setCards={setTasks}
      />
      <Column
        title="In Progress"
        column="In Progress"
        headingColor="text-yellow-500"
        cards={tasks}
        setCards={setTasks}
      />
      <Column
        title="Done"
        column="Done"
        headingColor="text-blue-500"
        cards={tasks}
        setCards={setTasks}
      />
    </div>
  );
};

export default Board;
