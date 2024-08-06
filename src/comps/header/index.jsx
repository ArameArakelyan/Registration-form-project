import React from "react";
import { useState } from "react";


function Header({ todos, setTodos }) {
    const [value, setValue] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        setTodos([...todos, {id: Math.random(), title: value, isDone: false}])
        setValue("")
    }
    function inputChange(e) {
        setValue(e.target.value)
    }
    return (
        <header className="header">
            <form onSubmit={handleSubmit}>
                <input className="inp" type="text" placeholder="Write your todos..." onChange={inputChange} value={value}/>
                <button className="addbtn">Add</button>
            </form>
        </header>
    )
}

export default Header