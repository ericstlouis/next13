// "use client"
import Link from "next/link";
import {taskType, pocketbaseType } from "../../types";
import Create from "./CreateTodo";
import Delete from "./deleteTodo";

async function getTasks() {
  const res = await fetch('http://127.0.0.1:8090/api/collections/tasks/records/',
  {cache: 'no-store'}
  );
  const data: pocketbaseType = await res.json()
  return data;
}

// const deleteTask = async(id: string) => {
//   await fetch(`http://127.0.0.1:8090/api/collections/tasks/records/${id}`, {
//       method: 'DELETE',
//     })
// }

export default async function TodoList() {
  const data = await getTasks();
  const tasks = data.items;
  console.log(tasks)
  return (
     <>
     <Create/>
        <div className="grid grid-cols-4 gap-4 py-3 px-5">
          {tasks.map((task) => (
                <div key={task.id} className="flex flex-col dark:bg-zinc-700 bg-zinc-100 rounded-md	px-2 py-3">
                  <Link href={`/todos/${task.id}`}>
                  <h2 className="place-self-center uppercase font-semibold">{task.topic}</h2>
                  </Link>
                  <p className="dark:text-slate-400">{task.description}</p>
                  <Delete task={task}/>
                </div>
            ))
          }
        </div>
     </> 
  )
}

