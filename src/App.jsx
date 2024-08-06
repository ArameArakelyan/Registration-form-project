import './App.css';
import Header from './comps/header/index';
import Todolist from './comps/todolist';
import Footer from './comps/footer';
import { useState } from 'react';

function App() {
  let [todos, setTodos] = useState([
    { id: 1, title: "React", isDone: false },
    { id: 2, title: "HTML", isDone: false },
    { id: 3, title: "CSS", isDone: false },
  ])
  function clear() {
    setTodos(todos.filter(todo => todo.isDone === false))
  }

  function checkMark(id) {
    setTodos(todos.map((todo) => {
      if (id === todo.id) {
        todo.isDone = !todo.isDone
      }
      return todo
    }))
  }
  function remove(id) {
    setTodos(todos.filter((todo) => {
      return id !== todo.id
    }))
  }
  return (
    <div className="App">
      <div className="todo-cont">
        <Header todos={todos} setTodos={setTodos} />
        <Todolist todos={todos} checkMark={checkMark} remove={remove} />
        <Footer todos={todos} clear={clear} />
      </div>
    </div>
  );
}

export default App;
