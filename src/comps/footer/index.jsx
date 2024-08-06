import React from "react";
import { useState } from "react";

function Footer({todos, clear}) {

    const count = todos.filter(e=> e.isDone === true).length
    
    return(
        <footer className="footer">
            <span>{count}/{todos.length}</span>
            <button className="clrbtn" onClick={clear}>Clear completed</button>
        </footer>
    )
}

export default Footer