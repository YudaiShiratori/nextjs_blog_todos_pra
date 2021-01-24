import fetch from "node-fetch";
import { func } from "prop-types";

export async function getAllTasksData() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();
  const staticfilteredPosts = tasks.sort(
    (a, b) => new Date(b.created_at) - new Date(a.created_at)
  );
  return staticfilteredPosts;
}

export async function getAllTaskIds() {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`)
  );
  const tasks = await res.json();

  return tasks.map((task) => {
    return {
      params: {
        id: String(task.id),
      },
    };
  });
}

export async function getTaskData(id) {
  const res = await fetch(
    new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/${id}`)
  );
  const tasks = await res.json();

  return tasks.map((task) => {
    return {
      task,
    };
  });
}
