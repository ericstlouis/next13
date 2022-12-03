import { PageProps, todoType } from "../../../types";


async function getTasks(id: string) {
  const res = await fetch(`http://127.0.0.1:8090/api/collections/tasks/records/${id}`,
  {next: {revalidate: 10}}
  );
  const data: todoType = await res.json()
  return data;
}


export default async function todoPage({params}: PageProps) {
    const todo = await getTasks(params.id)
    return (
        <div>
            {todo.id}
            <br/>
            {todo.topic}
            <button>
                click me
            </button>
        </div>
    )
}