import React from "react";

function TodolistItem({ todo, remove }) {

    return (
        <li className="item" >
            <input type="checkbox" checked={todo.isDone}/>
            <label>{todo.title}</label>
            <button onClick={() => remove(todo.id)} >Delete</button>
        </li>
    )

}

export default TodolistItem