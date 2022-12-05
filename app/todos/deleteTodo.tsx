'use client'
import { useRouter } from 'next/navigation';
import { taskType } from "../../types"


export default function Delete(task: taskType) {
    const router = useRouter();

    const deleteTask = async(id: string) => {
      await fetch(`http://127.0.0.1:8090/api/collections/tasks/records/${id}`, {
      method: 'DELETE',
    }),
     router.refresh()
}
    return(
        <>
            <button onClick={() => deleteTask(task.task.id)} className="bg-slate-800 rounded-sm mt-3">delete</button>
        </>
    )
}