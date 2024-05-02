"use server";

import { IProject } from "@/components/projects/form";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function getAllProject() {
  const response = await fetch("http://localhost:4000/projects");
  return response.json();
}
export async function getAllUsers() {
  const response = await fetch("http://localhost:4000/users");
  return response.json();
}
export async function getSingleProject(id: string) {
  const response = await fetch(`http://localhost:4000/projects/${id}`);
  return response.json();
}

export async function getSingleProjectTasks(id: string) {
  const response = await fetch(`http://localhost:4000/tasks?projectId=${id}`);
  return response.json();
}
export async function getSingleProjectActivates(id: string) {
  const response = await fetch(
    `http://localhost:4000/recentactivities?projectId=${id}`
  );
  return response.json();
}

export async function updateProject(id: string, data: IProject) {
  await fetch(`http://localhost:4000/projects/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  revalidatePath("/dashboard/projects");
  revalidatePath(`/dashboard/projects/${id}/edit`);
  revalidatePath(`/dashboard/projects/${id}/view`);
  redirect("/dashboard/projects");
}
export async function deleteProject(id: string, data: IProject) {
  await fetch(`http://localhost:4000/projects/${id}`, {
    method: "DELETE",
  });
  revalidatePath("/dashboard/projects");
}

export async function getSingleTask(id: string) {
  const response = await fetch(`http://localhost:4000/tasks/${id}`);
  return response.json();
}
