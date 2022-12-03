import TodoList from "./todolist"

export default function Todos() {
    return (
    // @ts-expect-error Server Component 
        <TodoList/>
    )
}