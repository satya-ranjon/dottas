import { create } from "zustand";

export type AssignedMember = {
  id: string;
  name: string;
  img: string;
};

export type Task = {
  id: string;
  projectId: string;
  column: string;
  descriptions: string;
  deadlines: string;
  assigneds: AssignedMember[];
};

type State = {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
  // updateTasks: (newTask: Task) => void;
  getTasks: (projectId?: string) => void;
  postTasks: (projectId?: any) => void;
  deleteTask: (projectId?: any) => void;
  updateTasks: (projectId?: string | undefined, data?: any) => void;
};

export const useTasks = create<State>((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  postTasks: async (data: any) => {
    await fetch("https://server-u1z6.onrender.com/tasks", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    set((state) => {
      return { tasks: [...state.tasks, data] };
    });
  },
  deleteTask: async (id: string) => {
    await fetch(`https://server-u1z6.onrender.com/tasks/${id}`, {
      method: "DELETE",
    });
    set((state) => {
      return { tasks: state.tasks.filter((task) => task.id !== id) };
    });
  },
  getTasks: async (projectId?: string) => {
    const response = await fetch(
      `https://server-u1z6.onrender.com/tasks?projectId=${projectId}`
    );
    const tasks = await response.json();
    set({ tasks });
  },
  updateTasks: async (projectId: string | undefined, data: any) => {
    await fetch(`https://server-u1z6.onrender.com/tasks/${projectId}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    set((state) => {
      const filteredTasks = state.tasks.filter((task) => task.id !== projectId);
      return { tasks: [...filteredTasks, data] };
    });
  },
}));
