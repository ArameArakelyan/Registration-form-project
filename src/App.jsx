import './App.css';
import Header from './comps/header';
import Todolist from './comps/todolist';
import { useState } from 'react';

function App() {
  let [todos, setTodos] = useState([
    {id:1, title:"React", isDone:true},
    {id:2, title:"HTML", isDone:true},
    {id:3, title:"CSS", isDone:true},
])
  return (
    <div className="App">
      <div className="todo-cont">
        <Header todos={todos}/>
        <Todolist todos={todos}/>
      </div>
    </div>
  );
}

export default App;
