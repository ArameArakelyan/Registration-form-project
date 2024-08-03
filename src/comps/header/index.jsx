import React from "react";
import { useState } from "react";


function Header({ todos, setTodos }) {
    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, {id: Math.random(), title: value, isDone: true}])
        console.log(todos);
        setValue("")
    }
    function inputChange(e) {
        setValue(e.target.value)
    }
    return (
        <header>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={inputChange} value={value}/>
                <button>Add</button>
            </form>
        </header>
    )
}

export default Header