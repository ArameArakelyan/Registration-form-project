import React from "react";
import { useState } from "react";

function Footer({todos, clear}) {

    const count = todos.filter(e=> e.isDone =false).length
    
    return(
        <footer className="footer">
            <span>{todos.length}/{count}</span>
            <button onClick={clear}>Clear completed</button>
        </footer>
    )
}

export default Footer