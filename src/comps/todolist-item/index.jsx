import React from "react";

function TodolistItem({ todo, remove ,checkMark}) {

    return (
        <li className="item" >
            <input type="checkbox" checked={todo.isDone} onChange={checkMark}/>
            <label>{todo.title}</label>
            <button onClick={() => remove(todo.id)} >Delete</button>
        </li>
    )

}

export default TodolistItem