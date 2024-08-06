import React from "react";

function TodolistItem({ todo, checkMark, remove}) {


    return (
        <li className="item" key={todo.id}>
            <input type="checkbox" checked={todo.isDone} 
            onChange={()=>{checkMark(todo.id)}}/>
            <label>{todo.title}</label>
            <button className="delbtn" onClick={() => remove(todo.id)} >X</button>
        </li>
    ) 

}

export default TodolistItem