"use client";
import { useEffect, useState } from "react";
import Column from "./column";
import { useTasks } from "@/store/tasks";
import { DatePicker, DatePickerProps, Input, Select } from "antd";

const Board = ({ id, users }: { id?: string; users: any }) => {
  const { tasks, getTasks, setTasks } = useTasks();

  const [allTask, setAllTask] = useState(tasks);
  const [status, setStatus] = useState("");
  const [userID, setUserID] = useState("");
  const [dateline, setDatelines] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    getTasks(id);
  }, []);

  function filterTasks(
    tasks: Task[],
    column?: string,
    deadline?: string,
    assignedID?: string,
    title?: string
  ): Task[] {
    return tasks.filter((task) => {
      if (!column && !deadline && !assignedID && !title) return task;

      const columnMatch = !column || task.column === column;
      const deadlineMatch = !deadline || task.deadlines === deadline;
      const assignedMatch =
        !assignedID ||
        task.assigneds.some((assigned) => assigned.id === assignedID);

      const titleMatch =
        !title || task.title.toLowerCase().includes(title.toLowerCase());

      return columnMatch && deadlineMatch && assignedMatch && titleMatch;
    });
  }

  useEffect(() => {
    const filter = filterTasks(tasks, status, dateline, userID, title);
    console.log("title", filter);
    console.log("title", title);
    setAllTask(filter);
  }, [status, userID, dateline, title]);

  const cardTasks = status || userID || dateline || title ? allTask : tasks;

  const userOptions = users.map((i) => ({ value: i.id, label: i.name }));

  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    setDatelines(dateString);
  };

  return (
    <div className="">
      <div className="my-2 flex justify-start items-center gap-3">
        <div className="flex flex-col md:flex-row gap-3 items-center justify-start">
          <Select
            onChange={(e) => setStatus(e)}
            showSearch
            style={{ width: 120 }}
            placeholder="Filter Status"
            optionFilterProp="children"
            options={[
              {
                value: "",
                label: "All",
              },
              {
                value: "To Do",
                label: "To Do",
              },
              {
                value: "In Progress",
                label: "In Progress",
              },
              {
                value: "Done",
                label: "Done",
              },
            ]}
          />
          <Select
            onChange={(e) => setUserID(e)}
            showSearch
            style={{ width: 120 }}
            placeholder="Filter Users"
            optionFilterProp="children"
            options={[
              {
                value: "",
                label: "All",
              },
              ...userOptions,
            ]}
          />
        </div>
        <div className="flex flex-col md:flex-row gap-3 items-center justify-start">
          <DatePicker placeholder="Dateline" onChange={onChange} />
          <Input
            className=" max-w-80"
            value={title}
            placeholder="Serch by Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
      </div>
      <div className="flex w-full h-full min-w-[350px] max-w-[730px] overflow-x-auto gap-3 bg-gray-50 p-3 ">
        <div className="flex h-full w-full gap-3 overflow-auto  ">
          <Column
            title="To Do"
            column="To Do"
            headingColor="text-neutral-500"
            cards={cardTasks}
            setCards={setTasks}
          />
          <Column
            title="In Progress"
            column="In Progress"
            headingColor="text-yellow-500"
            cards={cardTasks}
            setCards={setTasks}
          />
          <Column
            title="Done"
            column="Done"
            headingColor="text-blue-500"
            cards={cardTasks}
            setCards={setTasks}
          />
        </div>
      </div>
    </div>
  );
};

export default Board;

interface Task {
  id: string;
  projectId?: string;
  column: string;
  title: string;
  deadlines: string;
  assigneds: Assigned[];
}

interface Assigned {
  id: string;
  name: string;
  img: string;
}
