"use server";

export async function getAllProject() {
  const projects = await fetch("http://localhost:4000/projects");
  return projects.json();
}
export async function getSingleProject(id: string) {
  const projects = await fetch(`http://localhost:4000/projects/${id}`);
  return projects.json();
}
