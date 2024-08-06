import TodolistItem from "../todolist-item";

function Todolist({ todos, checkMark, remove }) {
    return (
        <ul className="todo-list">
            {todos.map((todo) => {
                return (
                    <TodolistItem key={todo.id} todo={todo} checkMark={checkMark} remove={remove} />
                )
            })}
        </ul>

    )
}

export default Todolist