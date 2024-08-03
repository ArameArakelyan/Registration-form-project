import React from "react";
import TodolistItem from "../todolist-item";

function Todolist({ todos, setTodos }) {
    function remove(id) {
        setTodos(todos.filter((todo) => {
           return id !== todo.id
        }))
    }
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <TodolistItem key={todo.id} todo={todo} remove={remove} />
                )
            })}
        </ul>

    )
}

export default Todolist