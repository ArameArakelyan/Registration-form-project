import React from "react";

function TodolistItem({todos}) {
    return(
        <div>
            <input type="checkbox"/>
            <p>{}</p>
            <button>Delete</button>
        </div>
    )
}

export default TodolistItem