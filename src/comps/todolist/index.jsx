import React from "react";
import TodolistItem from "../todolist-item/todoitem";

function Todolist({ todos }) {

    return (
        <ul>
            {todos.map((e) => {
                <TodolistItem todos={todos}/>
            })}
        </ul>

    )
}

export default Todolist